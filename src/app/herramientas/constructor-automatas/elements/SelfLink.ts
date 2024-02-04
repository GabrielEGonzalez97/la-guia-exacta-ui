import { drawArrow, drawText } from '../commonFunctions';
import { HIT_TARGET_PADDING, NODE_RADIUS } from '../constants';
import { IMouseCoordinates } from '../interfaces';
import { Node } from './node';

export class SelfLink {
	public node: Node;
	private canvasElement: HTMLCanvasElement;
	private caretVisible: boolean = false;
	public isSelected: boolean;

	public anchorAngle: number = 0;
	public text: string = '';
	private mouseOffsetAngle: number = 0;

	constructor(node: Node, mouse: IMouseCoordinates, canvasElement: HTMLCanvasElement, isSelected: boolean) {
		this.node = node;
		this.canvasElement = canvasElement;
		this.isSelected = isSelected;

		if (mouse) {
			this.setAnchorPoint(mouse.coordinateX, mouse.coordinateY);
		}

		setInterval(() => {
            this.caretVisible = !this.caretVisible;
        }, 500);
	}

	public setMouseStart(x: number, y: number): void {
		this.mouseOffsetAngle = this.anchorAngle - Math.atan2(y - this.node.coordinateY, x - this.node.coordinateX);
	};

	public setAnchorPoint(x: number, y: number): void {
		this.anchorAngle = Math.atan2(y - this.node.coordinateY, x - this.node.coordinateX) + this.mouseOffsetAngle;

		// Snap to 90 degrees
		const snap: number = Math.round(this.anchorAngle / (Math.PI / 2)) * (Math.PI / 2);

		if (Math.abs(this.anchorAngle - snap) < 0.1) {
			this.anchorAngle = snap;
		}

		// Keep in the range -pi to pi so our containsPoint() function always works
		if (this.anchorAngle < -Math.PI) {
			this.anchorAngle += 2 * Math.PI;
		}
		if (this.anchorAngle > Math.PI) {
			this.anchorAngle -= 2 * Math.PI;
		}
	};

	public getEndPointsAndCircle() {
		const circleX: number = this.node.coordinateX + 1.5 * NODE_RADIUS * Math.cos(this.anchorAngle);
		const circleY: number = this.node.coordinateY + 1.5 * NODE_RADIUS * Math.sin(this.anchorAngle);
		const circleRadius: number = 0.75 * NODE_RADIUS;
		const startAngle: number = this.anchorAngle - Math.PI * 0.8;
		const endAngle: number = this.anchorAngle + Math.PI * 0.8;
		const startX: number = circleX + circleRadius * Math.cos(startAngle);
		const startY: number = circleY + circleRadius * Math.sin(startAngle);
		const endX: number = circleX + circleRadius * Math.cos(endAngle);
		const endY: number = circleY + circleRadius * Math.sin(endAngle);
		return {
			'hasCircle': true,
			'startX': startX,
			'startY': startY,
			'endX': endX,
			'endY': endY,
			'startAngle': startAngle,
			'endAngle': endAngle,
			'circleX': circleX,
			'circleY': circleY,
			'circleRadius': circleRadius
		};
	};

	public draw(canvasContext: CanvasRenderingContext2D): void {
		const stuff = this.getEndPointsAndCircle();

		// Draw arc
		canvasContext.beginPath();
		canvasContext.arc(stuff.circleX, stuff.circleY, stuff.circleRadius, stuff.startAngle, stuff.endAngle, false);
		canvasContext.stroke();

		// Draw the text on the loop farthest from the node
		const textX: number = stuff.circleX + stuff.circleRadius * Math.cos(this.anchorAngle);
		const textY: number = stuff.circleY + stuff.circleRadius * Math.sin(this.anchorAngle);
		this.text = drawText(canvasContext, this.text, textX, textY, this.anchorAngle, this.isSelected, this.canvasElement, this.caretVisible);

		// Draw the head of the arrow
		drawArrow(canvasContext, stuff.endX, stuff.endY, stuff.endAngle + Math.PI * 0.4);
	};

	public containsPoint(x: number, y: number): boolean {
		const stuff = this.getEndPointsAndCircle();
		const dx: number = x - stuff.circleX;
		const dy: number = y - stuff.circleY;
		const distance: number = Math.sqrt(dx * dx + dy * dy) - stuff.circleRadius;
		return (Math.abs(distance) < HIT_TARGET_PADDING);
	};
}
