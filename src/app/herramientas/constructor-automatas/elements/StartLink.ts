import { drawArrow } from '../commonFunctions';
import { HIT_TARGET_PADDING, SNAP_TO_PADDING } from '../constants';
import { IMouseCoordinates } from '../interfaces';
import { Node } from './node';

export class StartLink {
	public node: Node;
	public isSelected: boolean;

	public deltaX: number = 0;
	public deltaY: number = 0;
	public text: string = '';

	constructor(node: Node, start: IMouseCoordinates, isSelected: boolean) {
		this.node = node;
		this.isSelected = isSelected;

		if (start) {
			this.setAnchorPoint(start.coordinateX, start.coordinateY);
		}
	}

	private setAnchorPoint(x: number, y: number): void {
		this.deltaX = x - this.node.coordinateX;
		this.deltaY = y - this.node.coordinateY;
	
		if (Math.abs(this.deltaX) < SNAP_TO_PADDING) {
			this.deltaX = 0;
		}
	
		if (Math.abs(this.deltaY) < SNAP_TO_PADDING) {
			this.deltaY = 0;
		}
	};

	private getEndPoints() {
		const startX: number = this.node.coordinateX + this.deltaX;
		const startY: number = this.node.coordinateY + this.deltaY;
		const end: IMouseCoordinates = this.node.closestPointOnCircle(startX, startY);
		return {
			'startX': startX,
			'startY': startY,
			'endX': end.coordinateX,
			'endY': end.coordinateY,
		};
	};

	public draw(canvasContext: CanvasRenderingContext2D): void {
		const stuff = this.getEndPoints();
	
		// Draw the line
		canvasContext.beginPath();
		canvasContext.moveTo(stuff.startX, stuff.startY);
		canvasContext.lineTo(stuff.endX, stuff.endY);
		canvasContext.stroke();
	
		// Draw the head of the arrow
		drawArrow(canvasContext, stuff.endX, stuff.endY, Math.atan2(-this.deltaY, -this.deltaX));
	};

	public containsPoint(x: number, y: number): boolean {
		const stuff = this.getEndPoints();
		const dx: number = stuff.endX - stuff.startX;
		const dy: number = stuff.endY - stuff.startY;
		const length: number = Math.sqrt(dx * dx + dy * dy);
		const percent: number = (dx * (x - stuff.startX) + dy * (y - stuff.startY)) / (length * length);
		const distance: number = (dx * (y - stuff.startY) - dy * (x - stuff.startX)) / length;
		return (percent > 0 && percent < 1 && Math.abs(distance) < HIT_TARGET_PADDING);
	};
}
