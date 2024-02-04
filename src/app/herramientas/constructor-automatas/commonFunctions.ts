import { ICircle } from './interfaces';

const greekLetterNames: string[] = [
    'Alpha',
    'Beta',
    'Gamma',
    'Delta',
    'Epsilon',
    'Zeta',
    'Eta',
    'Theta',
    'Iota',
    'Kappa',
    'Lambda',
    'Mu',
    'Nu',
    'Xi',
    'Omicron',
    'Pi',
    'Rho',
    'Sigma',
    'Tau',
    'Upsilon',
    'Phi',
    'Chi',
    'Psi',
    'Omega'
];

function convertLatexShortcuts(text: string): string {
	// html greek characters
	for (let i: number = 0; i < greekLetterNames.length; i++) {
		let name: string = greekLetterNames[i];
		text = text.replace(new RegExp('\\\\' + name, 'g'), String.fromCharCode(913 + i + (i > 16 ? 1 : 0)));
		text = text.replace(new RegExp('\\\\' + name.toLowerCase(), 'g'), String.fromCharCode(945 + i + (i > 16 ? 1 : 0)));
	}

	// subscripts
	for (let i: number = 0; i < 10; i++) {
		text = text.replace(new RegExp('_' + i, 'g'), String.fromCharCode(8320 + i));
	}

	return text;
}

export function canvasHasFocus(canvasElement: HTMLCanvasElement): boolean {
    return (document.activeElement || document.body) == document.body;
}

export function drawArrow(canvasContext: CanvasRenderingContext2D, x: number, y: number, angle: number): void {
	const dx: number = Math.cos(angle);
	const dy: number = Math.sin(angle);
	canvasContext.beginPath();
	canvasContext.moveTo(x, y);
	canvasContext.lineTo(x - 8 * dx + 5 * dy, y - 8 * dy - 5 * dx);
	canvasContext.lineTo(x - 8 * dx - 5 * dy, y - 8 * dy + 5 * dx);
	canvasContext.fill();
}

export function drawText(canvasContext: CanvasRenderingContext2D, originalText: string, x: number, y: number, angleOrNull: number, isSelected: boolean, canvasElement: HTMLCanvasElement, caretVisible: boolean) {
	const text: string = convertLatexShortcuts(originalText);
	canvasContext.font = '20px "Times New Roman", serif';
    const width: number = canvasContext.measureText(text).width;

	// Center the text
	x -= width / 2;

	// Position the text intelligently if given an angle
	if (angleOrNull != null) {
		const cos: number = Math.cos(angleOrNull);
		const sin: number = Math.sin(angleOrNull);
		const cornerPointX: number = (width / 2 + 5) * (cos > 0 ? 1 : -1);
		const cornerPointY: number = (10 + 5) * (sin > 0 ? 1 : -1);
		const slide: number = sin * Math.pow(Math.abs(sin), 40) * cornerPointX - cos * Math.pow(Math.abs(cos), 10) * cornerPointY;
		x += cornerPointX - sin * slide;
		y += cornerPointY + cos * slide;
	}

	// Draw text and caret (round the coordinates so the caret falls on a pixel)
	if ('advancedFillText' in canvasContext) {
		(canvasContext as any).advancedFillText(text, originalText, x + width / 2, y, angleOrNull);
	} else {
		x = Math.round(x);
		y = Math.round(y);
		canvasContext.fillText(text, x, y + 6);
		if (isSelected && caretVisible && canvasHasFocus(canvasElement) && document.hasFocus()) {
			x += width;
			canvasContext.beginPath();
			canvasContext.moveTo(x, y - 10);
			canvasContext.lineTo(x, y + 10);
			canvasContext.stroke();
		}
	}

	return text;
}

function det(a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number, i: number): number {
	return a * e * i + b * f * g + c * d * h - a * f * h - b * d * i - c * e * g;
}

export function circleFromThreePoints(x1: number, y1: number, x2: number, y2: number, x3: number, y3: number): ICircle {
	const a: number = det(x1, y1, 1, x2, y2, 1, x3, y3, 1);
	const bx: number = -det(x1 * x1 + y1 * y1, y1, 1, x2 * x2 + y2 * y2, y2, 1, x3 * x3 + y3 * y3, y3, 1);
	const by: number = det(x1 * x1 + y1 * y1, x1, 1, x2 * x2 + y2 * y2, x2, 1, x3 * x3 + y3 * y3, x3, 1);
	const c: number = -det(x1 * x1 + y1 * y1, x1, y1, x2 * x2 + y2 * y2, x2, y2, x3 * x3 + y3 * y3, x3, y3);

	return {
		coordinateX: -bx / (2 * a),
		coordinateY: -by / (2 * a),
		radius: Math.sqrt(bx * bx + by * by - 4 * a * c) / (2 * Math.abs(a))
	};
}
