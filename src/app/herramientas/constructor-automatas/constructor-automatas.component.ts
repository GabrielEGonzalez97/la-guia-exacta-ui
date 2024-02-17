import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  NgZone,
  OnInit,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { ModalService } from 'carbon-components-angular';
import { MatrizTransicionEstadosTableModel } from './MatrizTransicionEstadosTableModel';
import { canvasHasFocus } from './commonFunctions';
import { SNAP_TO_PADDING } from './constants';
import { SelfLink } from './elements/SelfLink';
import { StartLink } from './elements/StartLink';
import { TemporaryLink } from './elements/TemporaryLink';
import { Link } from './elements/link';
import { Node } from './elements/node';
import { InstructionsModalWindowComponent } from './instructions-modal-window/instructions-modal-window.component';
import { IMouseCoordinates } from './interfaces';
import { StepByStepModalWindowComponent } from './step-by-step-modal-window/step-by-step-modal-window.component';

@Component({
  selector: 'app-constructor-automatas',
  templateUrl: './constructor-automatas.component.html',
  styleUrls: ['./constructor-automatas.component.scss'],
})
export class ConstructorAutomatasComponent implements AfterViewInit, OnInit {
  @ViewChild('canvas') private canvasElementRef: ElementRef;
  @ViewChild('canvasContainer') private canvasContainerElementRef: ElementRef;
  @ViewChild('headerTemplate', { static: true })
  private headerTemplate: TemplateRef<unknown>;
  @ViewChild('columnTemplate', { static: true })
  private columnTemplate: TemplateRef<unknown>;

  private canvasElement: HTMLCanvasElement;
  private canvasContext: CanvasRenderingContext2D;

  public matrizTransicionEstadosTableModel: MatrizTransicionEstadosTableModel =
    null;
  public nodes: Node[] = [];
  public links: (Link | SelfLink | StartLink)[] = [];

  public entrySymbols: string = '';

  public stringToTest: string = '';
  public isValidString: boolean = false;
  public isInvalidStateToTestString: boolean = false;
  public invalidStateDescription: string = '';

  private isMovingAnObject: boolean = false;
  private isShiftPressed: boolean = false;
  private isMouseInsideCanvas: boolean = false;

  private caretTimer: any;

  private selectedObject = null; // Either a Link or a Node
  private currentLink: Link | SelfLink | StartLink | TemporaryLink = null; // A Link

  private originalMouseClickPosition: IMouseCoordinates;

  private deletedNodes: string[] = [];

  public canvasUrlImages: { stepDescription: string; imageUrl: string }[] = [];

  constructor(
    private changeDetectorRef: ChangeDetectorRef,
    private modalService: ModalService,
    private zone: NgZone
  ) {}

  public ngOnInit(): void {
    this.matrizTransicionEstadosTableModel =
      new MatrizTransicionEstadosTableModel(
        this.headerTemplate,
        this.columnTemplate,
        this.nodes,
        this.links
      );
  }

  public ngAfterViewInit(): void {
    this.canvasElement = this.canvasElementRef.nativeElement;
    this.canvasContext = this.canvasElement.getContext('2d');

    this.resizeCanvas();

    this.restoreBackup();
    this.drawUsing(this.canvasContext);

    this.initializeCanvas();
  }

  public clearCanvas(): void {
    this.nodes = [];
    this.links = [];
    this.selectedObject = null;
    this.drawUsing(this.canvasContext);
    this.saveBackup();
    this.changeDetectorRef.detectChanges();
  }

  public captureAndDownloadCanvas(): void {
    // Create an image data URL from the canvas
    const dataURL: string = this.canvasElement.toDataURL('image/png');

    // Create a temporary link element
    let link: HTMLAnchorElement = document.createElement('a');

    // Set the href attribute of the link to the data URL
    link.href = dataURL;

    // Set the download attribute of the link to specify the filename
    link.download = 'automata_creado.png';

    // Append the link to the document
    document.body.appendChild(link);

    // Trigger a click event on the link to initiate the download
    link.click();

    // Remove the link from the document
    document.body.removeChild(link);
  }

  private initializeCanvas(): void {
    this.canvasElement.addEventListener('mousedown', (event: MouseEvent) =>
      this.onCanvasMouseDown(event)
    );
    this.canvasElement.addEventListener('dblclick', (event: MouseEvent) =>
      this.onCanvasDoubleClick(event)
    );
    this.canvasElement.addEventListener('mousemove', (event: MouseEvent) =>
      this.onCanvasMouseMove(event)
    );
    this.canvasElement.addEventListener('mouseup', () =>
      this.onCanvasMouseUp()
    );
    this.canvasElement.addEventListener(
      'mouseenter',
      () => (this.isMouseInsideCanvas = true)
    );
    this.canvasElement.addEventListener(
      'mouseleave',
      () => (this.isMouseInsideCanvas = false)
    );

    document.addEventListener('keydown', (event: KeyboardEvent) =>
      this.onCanvasKeyDown(event)
    );
    document.addEventListener('keyup', (event: KeyboardEvent) =>
      this.onCanvasKeyUp(event)
    );

    // resize the canvas to fill browser window dynamically
    window.addEventListener('resize', this.resizeCanvas.bind(this), false);
  }

  private resizeCanvas(): void {
    const a: HTMLElement = this.canvasContainerElementRef.nativeElement;
    this.canvasElement.width = a.getBoundingClientRect().width - 2 * 16;
    this.canvasElement.height =
      ((a.getBoundingClientRect().width - 2 * 16) * 3) / 4;

    this.drawUsing(this.canvasContext);
  }

  private resetCaret(): void {
    clearInterval(this.caretTimer);
    this.caretTimer = setInterval(() => {
      this.zone.runOutsideAngular(() => {
        this.draw();
      });
    }, 500);
  }

  private getBrowserElementPosition(event: MouseEvent): IMouseCoordinates {
    let element: HTMLElement | null = event.target as HTMLElement;
    let coordinateX: number = 0,
      coordinateY: number = 0;

    while (element instanceof HTMLElement && element.offsetParent) {
      coordinateX += element.offsetLeft;
      coordinateY += element.offsetTop;
      element = element.offsetParent as HTMLElement;
    }

    return { coordinateX, coordinateY };
  }

  private getBrowserMousePosition(event: MouseEvent): IMouseCoordinates {
    return {
      coordinateX:
        event.pageX ||
        event.clientX +
          document.body.scrollLeft +
          document.documentElement.scrollLeft,
      coordinateY:
        event.pageY ||
        event.clientY +
          document.body.scrollTop +
          document.documentElement.scrollTop,
    };
  }

  private getBrowserRelativeMousePosition(
    event: MouseEvent
  ): IMouseCoordinates {
    const browserElementPosition: IMouseCoordinates =
      this.getBrowserElementPosition(event);
    const browserMousePosition: IMouseCoordinates =
      this.getBrowserMousePosition(event);
    const browserRelativeMousePosition: IMouseCoordinates = {
      coordinateX:
        browserMousePosition.coordinateX - browserElementPosition.coordinateX,
      coordinateY:
        browserMousePosition.coordinateY - browserElementPosition.coordinateY,
    };
    return browserRelativeMousePosition;
  }

  private onCanvasMouseDown(event: MouseEvent): boolean {
    const mouse: IMouseCoordinates =
      this.getBrowserRelativeMousePosition(event);
    this.selectedObject = this.selectObject(
      mouse.coordinateX,
      mouse.coordinateY
    );
    this.isMovingAnObject = false;
    this.originalMouseClickPosition = mouse;

    if (this.selectedObject != null) {
      if (this.isShiftPressed && this.selectedObject instanceof Node) {
        this.currentLink = new SelfLink(
          this.selectedObject,
          mouse,
          this.canvasElement,
          false
        );
      } else {
        this.isMovingAnObject = true;
        if (this.selectedObject.setMouseStart) {
          this.selectedObject.setMouseStart(
            mouse.coordinateX,
            mouse.coordinateY
          );
        }
      }
      this.resetCaret();
    } else if (this.isShiftPressed) {
      this.currentLink = new TemporaryLink(mouse, mouse);
    }

    this.draw();

    if (canvasHasFocus(this.canvasElement)) {
      // disable drag-and-drop only if the canvas is already focused
      return false;
    } else {
      // otherwise, let the browser switch the focus away from wherever it was
      this.resetCaret();
      return true;
    }
  }

  private onCanvasDoubleClick(event: MouseEvent): void {
    const mouse: IMouseCoordinates =
      this.getBrowserRelativeMousePosition(event);

    this.selectedObject = this.selectObject(
      mouse.coordinateX,
      mouse.coordinateY
    );

    if (this.selectedObject == null) {
      const node: Node = new Node(
        mouse.coordinateX,
        mouse.coordinateY,
        this.canvasElement,
        false
      );
      if (this.deletedNodes.length > 0) {
        node.text = this.deletedNodes.shift();
      } else {
        node.text = `e${this.nodes.length}`;
      }
      this.selectedObject = node;
      this.nodes.push(this.selectedObject);
      this.resetCaret();
      this.draw();
    } else if (this.selectedObject instanceof Node) {
      this.selectedObject.isFinalState = !this.selectedObject.isFinalState;
      this.draw();
    }
  }

  private onCanvasMouseMove(event: MouseEvent): void {
    const mouse: IMouseCoordinates =
      this.getBrowserRelativeMousePosition(event);

    if (this.currentLink != null) {
      let targetNode = this.selectObject(mouse.coordinateX, mouse.coordinateY);
      if (!(targetNode instanceof Node)) {
        targetNode = null;
      }

      const existInitialNode: boolean = this.nodes.some(
        (node: Node) => node.isInitialState
      );

      if (this.selectedObject == null) {
        if (targetNode != null && !existInitialNode) {
          this.currentLink = new StartLink(
            targetNode as Node,
            this.originalMouseClickPosition,
            true
          );
        } else {
          this.currentLink = new TemporaryLink(
            this.originalMouseClickPosition,
            mouse
          );
        }
      } else {
        if (targetNode == this.selectedObject) {
          this.currentLink = new SelfLink(
            this.selectedObject,
            mouse,
            this.canvasElement,
            true
          );
        } else if (targetNode != null) {
          this.currentLink = new Link(
            this.selectedObject,
            targetNode as Node,
            this.canvasElement,
            true
          );
        } else {
          this.currentLink = new TemporaryLink(
            this.selectedObject.closestPointOnCircle(
              mouse.coordinateX,
              mouse.coordinateY
            ),
            mouse
          );
        }
      }
      this.draw();
    }

    if (this.isMovingAnObject) {
      this.selectedObject.setAnchorPoint(mouse.coordinateX, mouse.coordinateY);
      if (this.selectedObject instanceof Node) {
        this.snapNode(this.selectedObject);
      }
      this.draw();
    }
  }

  private onCanvasMouseUp(): void {
    this.isMovingAnObject = false;

    if (this.currentLink != null) {
      if (!(this.currentLink instanceof TemporaryLink)) {
        if (this.currentLink instanceof StartLink) {
          this.currentLink.node.isInitialState = true;
        }
        this.selectedObject = this.currentLink;
        this.links.push(this.currentLink as Link | SelfLink | StartLink);
        this.resetCaret();
      }
      this.currentLink = null;
      this.draw();
    }
  }

  private onCanvasKeyDown(event: KeyboardEvent): void {
    const key: number = this.getKeyCode(event);

    if (key == 16) {
      this.isShiftPressed = true;
    } else if (!canvasHasFocus(this.canvasElement)) {
      // don't read keystrokes when other things have focus
      return;
    }
    // else if (key == 8) {
    //   // backspace key
    //   if (this.selectedObject != null && 'text' in this.selectedObject) {
    //     this.selectedObject.text = this.selectedObject.text.substr(
    //       0,
    //       this.selectedObject.text.length - 1
    //     );
    //     this.resetCaret();
    //     this.drawUsing(this.canvasContext);
    //     this.saveBackup();
    //   }

    //   // backspace is a shortcut for the back button, but do NOT want to change pages
    //   return;
    // }
    else if (key == 8 || key == 46) {
      // delete key
      if (this.selectedObject != null) {
        for (let i: number = 0; i < this.nodes.length; i++) {
          if (this.nodes[i] == this.selectedObject) {
            this.deletedNodes.push(this.nodes[i].text);
            this.deletedNodes.sort();
            this.nodes.splice(i--, 1);
          }
        }
        for (let i: number = 0; i < this.links.length; i++) {
          if (
            this.links[i] == this.selectedObject ||
            (this.links[i] as SelfLink | StartLink).node ==
              this.selectedObject ||
            (this.links[i] as Link).nodeA == this.selectedObject ||
            (this.links[i] as Link).nodeB == this.selectedObject
          ) {
            if (this.links[i] instanceof StartLink) {
              (this.links[i] as StartLink).node.isInitialState = false;
            }
            this.links.splice(i--, 1);
          }
        }
        this.selectedObject = null;
        this.drawUsing(this.canvasContext);
        this.saveBackup();
      }
    } else if (
      !event.metaKey &&
      !event.altKey &&
      !event.ctrlKey &&
      this.selectedObject != null &&
      'text' in this.selectedObject &&
      !(this.selectedObject instanceof Node)
    ) {
      const entrySymbols: string[] = this.entrySymbols
        .replace(' ', '')
        .split(',');
      if (entrySymbols.some((symbol) => symbol === event.key)) {
        this.selectedObject.text = event.key;
        this.resetCaret();
        this.drawUsing(this.canvasContext);
        this.saveBackup();
      }

      // don't let keys do their actions (like space scrolls down the page)
      return;
    }
  }

  private onCanvasKeyUp(event: KeyboardEvent): void {
    const key: number = this.getKeyCode(event);

    if (key == 16) {
      this.isShiftPressed = false;
    }
  }

  private drawUsing(canvasContext: CanvasRenderingContext2D): void {
    canvasContext.clearRect(
      0,
      0,
      this.canvasElement.width,
      this.canvasElement.height
    );
    canvasContext.save();
    canvasContext.translate(0.5, 0.5);

    for (let i: number = 0; i < this.nodes.length; i++) {
      canvasContext.lineWidth = 1;
      canvasContext.fillStyle = canvasContext.strokeStyle =
        this.nodes[i] == this.selectedObject ? '#299AE0' : 'black';
      this.nodes[i].draw(canvasContext);
    }

    for (let i: number = 0; i < this.links.length; i++) {
      canvasContext.lineWidth = 1;
      canvasContext.fillStyle = canvasContext.strokeStyle =
        this.links[i] == this.selectedObject ? '#299AE0' : 'black';
      this.links[i].draw(canvasContext);
    }

    if (this.currentLink != null) {
      canvasContext.lineWidth = 1;
      canvasContext.fillStyle = canvasContext.strokeStyle = 'black';
      this.currentLink.draw(canvasContext);
    }

    canvasContext.restore();

    this.matrizTransicionEstadosTableModel =
      new MatrizTransicionEstadosTableModel(
        this.headerTemplate,
        this.columnTemplate,
        this.nodes,
        this.links
      );
  }

  private draw(): void {
    if (this.isMouseInsideCanvas) {
      this.drawUsing(this.canvasContext);
      this.saveBackup();
    }
  }

  private selectObject(x: number, y: number) {
    for (let i: number = 0; i < this.nodes.length; i++) {
      if (this.nodes[i].containsPoint(x, y)) {
        return this.nodes[i];
      }
    }

    let linkSelected: Link | SelfLink | StartLink = null;
    for (let i: number = 0; i < this.links.length; i++) {
      if (this.links[i].containsPoint(x, y)) {
        this.links[i].isSelected = true;
        linkSelected = this.links[i];
      } else {
        this.links[i].isSelected = false;
      }
    }
    return linkSelected;
  }

  private restoreBackup(): void {
    if (!localStorage || !JSON) {
      return;
    }

    try {
      const backup = JSON.parse(localStorage['fsm']);

      this.entrySymbols = backup.entrySymbols;

      for (let i: number = 0; i < backup.nodes.length; i++) {
        const backupNode: Node = backup.nodes[i];
        const node: Node = new Node(
          backupNode.coordinateX,
          backupNode.coordinateY,
          this.canvasElement,
          false
        );
        node.isInitialState = backupNode.isInitialState;
        node.isFinalState = backupNode.isFinalState;
        node.text = backupNode.text;
        this.nodes.push(node);
      }

      for (let i: number = 0; i < backup.links.length; i++) {
        const backupLink = backup.links[i];
        let link: Link | SelfLink | StartLink = null;

        if (backupLink.type == 'SelfLink') {
          link = new SelfLink(
            this.nodes[backupLink.node],
            null,
            this.canvasElement,
            false
          );
          link.anchorAngle = backupLink.anchorAngle;
          link.text = backupLink.text;
        } else if (backupLink.type == 'StartLink') {
          link = new StartLink(this.nodes[backupLink.node], null, false);
          link.deltaX = backupLink.deltaX;
          link.deltaY = backupLink.deltaY;
          link.text = backupLink.text;
        } else if (backupLink.type == 'Link') {
          link = new Link(
            this.nodes[backupLink.nodeA],
            this.nodes[backupLink.nodeB],
            this.canvasElement,
            false
          );
          link.parallelPart = backupLink.parallelPart;
          link.perpendicularPart = backupLink.perpendicularPart;
          link.text = backupLink.text;
          link.lineAngleAdjust = backupLink.lineAngleAdjust;
        }

        if (link != null) {
          this.links.push(link);
        }
      }
    } catch (e) {
      localStorage['fsm'] = '';
    }
    this.changeDetectorRef.detectChanges();
  }

  private saveBackup() {
    if (!localStorage || !JSON) {
      return;
    }

    let backup = {
      nodes: [],
      links: [],
      entrySymbols: this.entrySymbols,
    };

    for (let i: number = 0; i < this.nodes.length; i++) {
      const node: Node = this.nodes[i];
      const backupNode = {
        coordinateX: node.coordinateX,
        coordinateY: node.coordinateY,
        text: node.text,
        isInitialState: node.isInitialState,
        isFinalState: node.isFinalState,
      };
      backup.nodes.push(backupNode);
    }

    for (let i: number = 0; i < this.links.length; i++) {
      const link = this.links[i];
      let backupLink = null;

      if (link instanceof SelfLink) {
        backupLink = {
          type: 'SelfLink',
          node: this.nodes.indexOf((link as SelfLink).node),
          text: link.text,
          anchorAngle: link.anchorAngle,
        };
      } else if (link instanceof StartLink) {
        backupLink = {
          type: 'StartLink',
          node: this.nodes.indexOf((link as StartLink).node),
          text: link.text,
          deltaX: link.deltaX,
          deltaY: link.deltaY,
        };
      } else if (link instanceof Link) {
        backupLink = {
          type: 'Link',
          nodeA: this.nodes.indexOf((link as Link).nodeA),
          nodeB: this.nodes.indexOf((link as Link).nodeB),
          text: link.text,
          lineAngleAdjust: link.lineAngleAdjust,
          parallelPart: link.parallelPart,
          perpendicularPart: link.perpendicularPart,
        };
      }

      if (backupLink != null) {
        backup.links.push(backupLink);
      }
    }

    localStorage['fsm'] = JSON.stringify(backup);
  }

  private getKeyCode(event: KeyboardEvent): number {
    return event.which || event.keyCode;
  }

  private snapNode(node: Node): void {
    for (let i: number = 0; i < this.nodes.length; i++) {
      if (this.nodes[i] == node) {
        continue;
      }

      if (
        Math.abs(node.coordinateX - this.nodes[i].coordinateX) < SNAP_TO_PADDING
      ) {
        node.coordinateX = this.nodes[i].coordinateX;
      }

      if (
        Math.abs(node.coordinateY - this.nodes[i].coordinateY) < SNAP_TO_PADDING
      ) {
        node.coordinateY = this.nodes[i].coordinateY;
      }
    }
  }

  public onEntrySymbolsChange(entrySymbols: any): void {
    this.entrySymbols = entrySymbols.target.value;
  }

  public onStringToTestChange(stringToTest: any): void {
    this.canvasUrlImages = [];
    this.isInvalidStateToTestString = false;
    this.invalidStateDescription = '';

    this.stringToTest = stringToTest.target.value;
    const matrizTransicionEstadosHeader: string[] =
      this.matrizTransicionEstadosTableModel.getHeaderNames();
    const matrizTransicionEstados: string[][] =
      this.matrizTransicionEstadosTableModel.getMatrizTransicionEstados();

    const initialNode: string = this.getInitialNode();

    if (!initialNode) {
      this.isInvalidStateToTestString = true;
      this.invalidStateDescription =
        'Por favor marca uno de los estados como estado inicial antes de evaluar la cadena';
    }

    let nodeToSearch: string = initialNode;
    let isValidString: boolean = false;

    const finalNode: Node = this.nodes.find((node: Node) => node.isFinalState);

    if (!finalNode) {
      this.isInvalidStateToTestString = true;
      this.invalidStateDescription =
        'Por favor marca uno de los estados como estado final antes de evaluar la cadena';
    }

    if (initialNode && finalNode) {
      let previousNodeToSearch: string = '';
      let invalidChar: string = '';

      for (const charToTest of this.stringToTest) {
        invalidChar = '';
        previousNodeToSearch = nodeToSearch;
        if (!matrizTransicionEstadosHeader.includes(charToTest)) {
          isValidString = false;
          invalidChar = charToTest;
          this.canvasUrlImages.push({
            stepDescription: `Se evalúa si es válido el caracter '${charToTest}' en el nodo '${previousNodeToSearch}', siendo el resultado ${
              isValidString ? 'válido' : 'inválido'
            }`,
            imageUrl: this.drawUsingStepByStep(
              this.canvasContext,
              previousNodeToSearch,
              charToTest,
              isValidString
            ),
          });
          break;
        }

        for (
          let matrizTransicionEstadosIndex: number = 0;
          matrizTransicionEstadosIndex < matrizTransicionEstados.length;
          matrizTransicionEstadosIndex++
        ) {
          const row: string[] =
            matrizTransicionEstados[matrizTransicionEstadosIndex];
          if (nodeToSearch === row[0]) {
            nodeToSearch =
              row[
                matrizTransicionEstadosHeader.findIndex(
                  (headerName: string) => headerName === charToTest
                )
              ];

            if (nodeToSearch) {
              isValidString = true;
              break;
            } else {
              isValidString = false;
            }
          }
        }

        this.canvasUrlImages.push({
          stepDescription: `Se evalúa si es válido el caracter '${charToTest}' en el nodo '${previousNodeToSearch}', siendo el resultado ${
            isValidString ? 'válido' : 'inválido'
          }`,
          imageUrl: this.drawUsingStepByStep(
            this.canvasContext,
            previousNodeToSearch,
            charToTest,
            isValidString
          ),
        });
      }

      if (isValidString) {
        isValidString = this.nodes.find(
          (node: Node) => node.text === nodeToSearch
        ).isFinalState;

        if (isValidString) {
          this.canvasUrlImages.push({
            stepDescription:
              'Se llega a estado final con la cadena proporcionada',
            imageUrl: this.drawUsingStepByStep(
              this.canvasContext,
              nodeToSearch,
              '',
              isValidString
            ),
          });
        } else {
          this.canvasUrlImages.push({
            stepDescription:
              'No se llega a estado final con la cadena proporcionada',
            imageUrl: this.drawUsingStepByStep(
              this.canvasContext,
              nodeToSearch,
              '',
              isValidString
            ),
          });
        }
      } else {
        if (invalidChar) {
          this.isInvalidStateToTestString = true;
          this.invalidStateDescription = `El caracter '${invalidChar}' no es válido en el autómata construido`;
        }
      }

      this.isValidString = isValidString;
    }

    this.drawUsing(this.canvasContext);
  }

  private drawUsingStepByStep(
    canvasContext: CanvasRenderingContext2D,
    nodeNameToHighlight: string,
    charToHighlight: string,
    isValidString: boolean
  ): string {
    canvasContext.clearRect(
      0,
      0,
      this.canvasElement.width,
      this.canvasElement.height
    );
    canvasContext.save();
    canvasContext.translate(0.5, 0.5);

    const colorToUseAccordingValidString: string = isValidString
      ? '#53CA61'
      : '#E64F4C';

    for (let i: number = 0; i < this.nodes.length; i++) {
      canvasContext.lineWidth = 1;
      canvasContext.fillStyle = canvasContext.strokeStyle =
        this.nodes[i].text === nodeNameToHighlight
          ? colorToUseAccordingValidString
          : 'black';
      this.nodes[i].draw(canvasContext);
    }

    for (let i: number = 0; i < this.links.length; i++) {
      let colorToUse: string = 'black';
      if (this.links[i] instanceof Link) {
        colorToUse =
          (this.links[i] as Link).nodeA.text === nodeNameToHighlight &&
          this.links[i].text === charToHighlight
            ? colorToUseAccordingValidString
            : 'black';
      } else if (this.links[i] instanceof SelfLink) {
        colorToUse =
          (this.links[i] as SelfLink).node.text === nodeNameToHighlight &&
          this.links[i].text === charToHighlight
            ? colorToUseAccordingValidString
            : 'black';
      }
      canvasContext.lineWidth = 1;
      canvasContext.fillStyle = canvasContext.strokeStyle = colorToUse;
      this.links[i].draw(canvasContext);
    }

    canvasContext.restore();

    return this.canvasElement.toDataURL();
  }

  public showInstructionsModalWindow(): void {
    this.modalService.create({
      component: InstructionsModalWindowComponent,
    });
  }

  public showStepByStepModalWindow(): void {
    this.modalService.create({
      component: StepByStepModalWindowComponent,
      inputs: {
        steps: this.canvasUrlImages,
        stringToTest: this.stringToTest,
      },
    });
  }

  public getConjuntoFinitoDeEstados(): string {
    let conjuntoFinitoDeEstados: string = '';
    const estados: string[] = this.nodes.map((node: Node) => node.text);
    conjuntoFinitoDeEstados = estados.join(', ');

    return `{${conjuntoFinitoDeEstados}}`;
  }

  public getConjuntoFinitoSimbolosDeEntrada(): string {
    return `{${this.matrizTransicionEstadosTableModel
      .getHeaderNames()
      .filter((headerName: string) => headerName !== 'δ')
      .join(', ')}}`;
  }

  public getInitialNode(): string {
    const initialNode: Node = this.nodes.find(
      (node: Node) => node.isInitialState
    );
    return initialNode ? initialNode.text : '';
  }

  public getFinalNodes(): string {
    let conjuntoEstadosFinales: string = '';
    const estadosFinales: string[] = this.nodes
      .filter((node: Node) => node.isFinalState)
      .map((node: Node) => node.text);
    conjuntoEstadosFinales = estadosFinales.join(', ');

    return `{${conjuntoEstadosFinales}}`;
  }

  public showAFDEquivalent(): void {
    const matrizTransicionEstadosHeader: string[] =
      this.matrizTransicionEstadosTableModel.getHeaderNames();
    const matrizTransicionEstados: string[][] =
      this.matrizTransicionEstadosTableModel.getMatrizTransicionEstados();

    let AFDEquivalent: string[][] = [];
    const combinacionesEstadosAEvaluar: string[] = [];
    const combinacionesEstadosEvaluados: string[] = [];

    function getRowAFDEquivalent(): void {
      let filaTransicionEstadosAExaminar: string[] = [];
      function clearTempArray(arr: string[]): string[] {
        return arr.map((item: string) => {
          const partes = item
            .split(', ')
            .filter(
              (valor: string, indice: number, arreglo: string[]) =>
                arreglo.indexOf(valor) === indice
            );
          partes.sort();
          return partes.join(', ');
        });
      }

      let tempArray: string[] = new Array(
        matrizTransicionEstadosHeader.length
      ).fill('');
      tempArray[0] = combinacionesEstadosAEvaluar[0];
      combinacionesEstadosAEvaluar[0]
        .split(', ')
        .forEach((estadoIndividualAEvaluar: string) => {
          filaTransicionEstadosAExaminar = matrizTransicionEstados.find(
            (row: string[]) => row[0] === estadoIndividualAEvaluar
          );

          filaTransicionEstadosAExaminar.forEach(
            (elementoFilaTransicionEstadosAExaminar: string, index: number) => {
              elementoFilaTransicionEstadosAExaminar.split(', ').forEach(() => {
                const tempArrayPosition: number = index;
                const aux: string = matrizTransicionEstados.find(
                  (row: string[]) => row[0] === estadoIndividualAEvaluar
                )[tempArrayPosition];
                if (aux !== '') {
                  if (tempArray[tempArrayPosition] === '') {
                    tempArray[tempArrayPosition] = aux;
                  } else {
                    tempArray[tempArrayPosition] += `, ${aux}`;
                  }
                }
              });
            }
          );
          tempArray = clearTempArray(tempArray);
        });
      tempArray.forEach((elementoTempArray: string) => {
        if (
          !combinacionesEstadosAEvaluar.includes(elementoTempArray) &&
          !combinacionesEstadosEvaluados.includes(elementoTempArray)
        ) {
          combinacionesEstadosAEvaluar.push(elementoTempArray);
        }
      });
      AFDEquivalent.push(tempArray);

      const examinatedState: string = combinacionesEstadosAEvaluar.shift();
      if (!combinacionesEstadosEvaluados.includes(examinatedState)) {
        combinacionesEstadosEvaluados.push(examinatedState);
      }

      if (combinacionesEstadosAEvaluar.length > 0) {
        getRowAFDEquivalent();
      }
    }

    const initialNode: string = this.getInitialNode();
    combinacionesEstadosAEvaluar.push(initialNode);

    getRowAFDEquivalent();
    console.log(AFDEquivalent);
  }
}
