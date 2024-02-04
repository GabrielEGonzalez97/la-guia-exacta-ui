import { circleFromThreePoints, drawArrow, drawText } from '../commonFunctions';
import { HIT_TARGET_PADDING, NODE_RADIUS, SNAP_TO_PADDING } from '../constants';
import { ICircle, IMouseCoordinates } from '../interfaces';
import { Node } from './node';

export class Link {
	public nodeA: Node;
	public nodeB: Node;
	private canvasElement: HTMLCanvasElement
	private caretVisible: boolean;
	private selectedObject: any;

	public text: string = '';
	public lineAngleAdjust: number;
	public parallelPart: number;
	public perpendicularPart: number;

	constructor(nodeA: Node, nodeB: Node, canvasElement: HTMLCanvasElement, caretVisible: boolean, selectedObject: any) {
		this.nodeA = nodeA;
		this.nodeB = nodeB;
		this.canvasElement = canvasElement;
		this.caretVisible = caretVisible;
		this.selectedObject = selectedObject;
		
		this.lineAngleAdjust = 0; // Value to add to textAngle when link is straight line

		// Make anchor point relative to the locations of nodeA and nodeB
		this.parallelPart = 0.5; // Percentage from nodeA to nodeB
		this.perpendicularPart = 0; // Pixels from line between nodeA and nodeB
	}

	private getAnchorPoint(): IMouseCoordinates {
		const dx: number = this.nodeB.coordinateX - this.nodeA.coordinateX;
		const dy: number = this.nodeB.coordinateY - this.nodeA.coordinateY;
		const scale: number = Math.sqrt(dx * dx + dy * dy);
		return {
			coordinateX: this.nodeA.coordinateX + dx * this.parallelPart - dy * this.perpendicularPart / scale,
			coordinateY: this.nodeA.coordinateY + dy * this.parallelPart + dx * this.perpendicularPart / scale
		};
	};

	public setAnchorPoint(x: number, y: number): void {
		const dx: number = this.nodeB.coordinateX - this.nodeA.coordinateX;
		const dy: number = this.nodeB.coordinateY - this.nodeA.coordinateY;
		const scale: number = Math.sqrt(dx * dx + dy * dy);
		this.parallelPart = (dx * (x - this.nodeA.coordinateX) + dy * (y - this.nodeA.coordinateY)) / (scale * scale);
		this.perpendicularPart = (dx * (y - this.nodeA.coordinateY) - dy * (x - this.nodeA.coordinateX)) / scale;

		// Snap to a straight line
		if (this.parallelPart > 0 && this.parallelPart < 1 && Math.abs(this.perpendicularPart) < SNAP_TO_PADDING) {
			this.lineAngleAdjust = (this.perpendicularPart < 0) ? Math.PI : 0;
			this.perpendicularPart = 0;
		}
	};

	private getEndPointsAndCircle() {
		if (this.perpendicularPart == 0) {
			const midX: number = (this.nodeA.coordinateX + this.nodeB.coordinateX) / 2;
			const midY: number = (this.nodeA.coordinateY + this.nodeB.coordinateY) / 2;
			const start: IMouseCoordinates = this.nodeA.closestPointOnCircle(midX, midY);
			const end: IMouseCoordinates = this.nodeB.closestPointOnCircle(midX, midY);
			return {
				'hasCircle': false,
				'startX': start.coordinateX,
				'startY': start.coordinateY,
				'endX': end.coordinateX,
				'endY': end.coordinateY,
			};
		}
		const anchor: IMouseCoordinates = this.getAnchorPoint();
		const circle: ICircle = circleFromThreePoints(this.nodeA.coordinateX, this.nodeA.coordinateY, this.nodeB.coordinateX, this.nodeB.coordinateY, anchor.coordinateX, anchor.coordinateY);
		const isReversed: boolean = (this.perpendicularPart > 0);
		const reverseScale: 1 | -1 = isReversed ? 1 : -1;
		const startAngle: number = Math.atan2(this.nodeA.coordinateY - circle.coordinateY, this.nodeA.coordinateX - circle.coordinateX) - reverseScale * NODE_RADIUS / circle.radius;
		const endAngle: number = Math.atan2(this.nodeB.coordinateY - circle.coordinateY, this.nodeB.coordinateX - circle.coordinateX) + reverseScale * NODE_RADIUS / circle.radius;
		const startX: number = circle.coordinateX + circle.radius * Math.cos(startAngle);
		const startY: number = circle.coordinateY + circle.radius * Math.sin(startAngle);
		const endX: number = circle.coordinateX + circle.radius * Math.cos(endAngle);
		const endY: number = circle.coordinateY + circle.radius * Math.sin(endAngle);

		return {
			'hasCircle': true,
			'startX': startX,
			'startY': startY,
			'endX': endX,
			'endY': endY,
			'startAngle': startAngle,
			'endAngle': endAngle,
			'circleX': circle.coordinateX,
			'circleY': circle.coordinateY,
			'circleRadius': circle.radius,
			'reverseScale': reverseScale,
			'isReversed': isReversed,
		};
	};

	public draw(canvasContext: CanvasRenderingContext2D): void {
		const stuff = this.getEndPointsAndCircle();

		// Draw arc
		canvasContext.beginPath();
		if (stuff.hasCircle) {
			canvasContext.arc(stuff.circleX, stuff.circleY, stuff.circleRadius, stuff.startAngle, stuff.endAngle, stuff.isReversed);
		} else {
			canvasContext.moveTo(stuff.startX, stuff.startY);
			canvasContext.lineTo(stuff.endX, stuff.endY);
		}
		canvasContext.stroke();

		// Draw the head of the arrow
		if (stuff.hasCircle) {
			drawArrow(canvasContext, stuff.endX, stuff.endY, stuff.endAngle - stuff.reverseScale * (Math.PI / 2));
		} else {
			drawArrow(canvasContext, stuff.endX, stuff.endY, Math.atan2(stuff.endY - stuff.startY, stuff.endX - stuff.startX));
		}

		// Draw the text
		if (stuff.hasCircle) {
			const startAngle: number = stuff.startAngle;
			let endAngle: number = stuff.endAngle;
			if (endAngle < startAngle) {
				endAngle += Math.PI * 2;
			}
			const textAngle: number = (startAngle + endAngle) / 2 + (stuff.isReversed ? Math.PI : 0);
			const textX: number = stuff.circleX + stuff.circleRadius * Math.cos(textAngle);
			const textY: number = stuff.circleY + stuff.circleRadius * Math.sin(textAngle);
			this.text = drawText(canvasContext, this.text, textX, textY, textAngle, this.selectedObject == this, this.canvasElement, this.caretVisible);
		} else {
			const textX = (stuff.startX + stuff.endX) / 2;
			const textY = (stuff.startY + stuff.endY) / 2;
			const textAngle = Math.atan2(stuff.endX - stuff.startX, stuff.startY - stuff.endY);
			this.text = drawText(canvasContext, this.text, textX, textY, textAngle + this.lineAngleAdjust, this.selectedObject == this, this.canvasElement, this.caretVisible);
		}
	};

	public containsPoint(x: number, y: number): boolean {
		const stuff = this.getEndPointsAndCircle();
		if (stuff.hasCircle) {
			const dx: number = x - stuff.circleX;
			const dy: number = y - stuff.circleY;
			const distance: number = Math.sqrt(dx * dx + dy * dy) - stuff.circleRadius;
			if (Math.abs(distance) < HIT_TARGET_PADDING) {
				let angle: number = Math.atan2(dy, dx);
				let startAngle: number = stuff.startAngle;
				let endAngle: number = stuff.endAngle;
				if (stuff.isReversed) {
					const temp: number = startAngle;
					startAngle = endAngle;
					endAngle = temp;
				}
				if (endAngle < startAngle) {
					endAngle += Math.PI * 2;
				}
				if (angle < startAngle) {
					angle += Math.PI * 2;
				} else if (angle > endAngle) {
					angle -= Math.PI * 2;
				}
				return (angle > startAngle && angle < endAngle);
			}
		} else {
			const dx: number = stuff.endX - stuff.startX;
			const dy: number = stuff.endY - stuff.startY;
			const length: number = Math.sqrt(dx * dx + dy * dy);
			const percent: number = (dx * (x - stuff.startX) + dy * (y - stuff.startY)) / (length * length);
			const distance: number = (dx * (y - stuff.startY) - dy * (x - stuff.startX)) / length;
			return (percent > 0 && percent < 1 && Math.abs(distance) < HIT_TARGET_PADDING);
		}
		return false;
	};
}
