import { drawText } from '../commonFunctions';
import { NODE_RADIUS } from '../constants';
import { IMouseCoordinates } from '../interfaces';

export class Node {
	public coordinateX: number;
	public coordinateY: number;
	private canvasElement: HTMLCanvasElement
	private caretVisible: boolean;
	private selectedObject: any;

	private mouseOffsetX: number = 0;
	private mouseOffsetY: number = 0;

	public isAcceptState: boolean = false;
	public text: string = '';

	constructor(coordinateX: number, coordinateY: number, canvasElement: HTMLCanvasElement, caretVisible: boolean, selectedObject: any) {
		this.coordinateX = coordinateX;
		this.coordinateY = coordinateY;
		this.canvasElement = canvasElement;
		this.caretVisible = caretVisible;
		this.selectedObject = selectedObject;
	}

	public setMouseStart(x: number, y: number): void {
		this.mouseOffsetX = this.coordinateX - x;
		this.mouseOffsetY = this.coordinateY - y;
	}

	public setAnchorPoint(x: number, y: number): void {
		this.coordinateX = x + this.mouseOffsetX;
		this.coordinateY = y + this.mouseOffsetY;
	}

	public draw(canvasContext: CanvasRenderingContext2D): void {
		// Draw the circle
		canvasContext.beginPath();
		canvasContext.arc(this.coordinateX, this.coordinateY, NODE_RADIUS, 0, 2 * Math.PI, false);
		canvasContext.stroke();
	
		// Draw the text
		this.text = drawText(canvasContext, this.text, this.coordinateX, this.coordinateY, null, this.selectedObject == this, this.canvasElement, this.caretVisible);
	
		// Draw a double circle for an accept state
		if (this.isAcceptState) {
			canvasContext.beginPath();
			canvasContext.arc(this.coordinateX, this.coordinateY, NODE_RADIUS - 6, 0, 2 * Math.PI, false);
			canvasContext.stroke();
		}
	}

	public closestPointOnCircle(x: number, y: number): IMouseCoordinates {
		const dx: number = x - this.coordinateX;
		const dy: number = y - this.coordinateY;
		const scale: number = Math.sqrt(dx * dx + dy * dy);
		return {
			'coordinateX': this.coordinateX + dx * NODE_RADIUS / scale,
			'coordinateY': this.coordinateY + dy * NODE_RADIUS / scale,
		};
	};

	public containsPoint(x: number, y: number): boolean {
		return (x - this.coordinateX)*(x - this.coordinateX) + (y - this.coordinateY)*(y - this.coordinateY) < NODE_RADIUS * NODE_RADIUS;
	};
}
