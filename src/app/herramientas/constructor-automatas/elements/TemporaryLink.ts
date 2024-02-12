import { drawArrow } from '../commonFunctions';
import { IMouseCoordinates } from '../interfaces';

export class TemporaryLink {
	private from: IMouseCoordinates;
	private to: IMouseCoordinates;

	constructor(from: IMouseCoordinates, to: IMouseCoordinates) {
		this.from = from;
		this.to = to;
	}

	public draw (canvasContext: CanvasRenderingContext2D) {
		// Draw the line
		canvasContext.beginPath();
		canvasContext.moveTo(this.to.coordinateX, this.to.coordinateY);
		canvasContext.lineTo(this.from.coordinateX, this.from.coordinateY);
		canvasContext.stroke();
	
		// Draw the head of the arrow
		drawArrow(canvasContext, this.to.coordinateX, this.to.coordinateY, Math.atan2(this.to.coordinateY - this.from.coordinateY, this.to.coordinateX - this.from.coordinateX));
	};
}
