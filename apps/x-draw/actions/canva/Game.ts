type Shape = {
     type: SelectShapeType.Rect
     x: number,
     y: number,
     width: number,
     height: number
} | {
     type: SelectShapeType.Circle
     y: number;
     x: number;
     radiusX: number;
     radiusY: number
} | {
     type: SelectShapeType.Line
     startX: number;
     startY: number;
     EndX: number;
     EndY: number
}

export enum SelectShapeType {
     Rect = 'rect',
     Circle = 'circle',
     Line = 'line'
}

export class Game {
     private canvas: HTMLCanvasElement;
     private ctx: CanvasRenderingContext2D;
     private roomId: string;
     private existingShapes: Shape[]
     private startX = 0;
     private startY = 0;
     private clicked: boolean;
     private selectedShape: SelectShapeType;
     socket: WebSocket;
     
     constructor(canvas: HTMLCanvasElement, roomId: string, socket: WebSocket) {
          this.canvas = canvas;
          this.ctx = canvas.getContext('2d')!
          this.existingShapes = [];
          this.roomId = roomId;
          this.socket = socket;
          this.clicked = false;
          this.selectedShape = SelectShapeType.Rect;
          this.init();
          this.reciveSocketMsg();
          this.initMouseEvent();
     }

     async init() {
          // make be call and fetch existing shape from be and update existing state variable
          this.clearCanvas();
     }

     clearCanvas() {
          this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
          this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
          this.ctx.strokeStyle = "rgba(255, 255, 255)"

          this.existingShapes.forEach(shape => {
               if(shape.type === SelectShapeType.Rect) {
                    this.drawRect(shape.x, shape.y, shape.width, shape.height)
               } else if (shape.type === SelectShapeType.Circle) {
                    this.drawCricle(shape.x, shape.y, shape.radiusX, shape.radiusY)
               } else if (shape.type === SelectShapeType.Line) {
                    this.drawLine(shape.startX, shape.startY, shape.EndX, shape.EndY);
               }
          })
     }

     reciveSocketMsg() {
          this.socket.onmessage = (event) => {
               const msg = JSON.parse(event.data)
               if(msg.type === 'chat') {
                    const shape = JSON.parse(msg.massege)
                    this.existingShapes.push(shape);
                    this.clearCanvas();
               }
          }
     }

     setShape(shape : SelectShapeType) {
          this.selectedShape = shape;
     }

     initMouseEvent() {
          this.canvas.addEventListener('mousedown', this.mouseDown)
          this.canvas.addEventListener('mouseup', this.mouseUp)
          this.canvas.addEventListener('mousemove', this.mouseMove);
     }

     mouseDown = (e: MouseEvent) => {
          this.startX = e.clientX;
          this.startY = e.clientY;
          this.clicked = true;
     }

     mouseUp = (e: MouseEvent) => {
          this.clicked = false;
          let shape: Shape | null = null;

          if(this.selectedShape === SelectShapeType.Rect) {
               shape = {
                    type: this.selectedShape,
                    x: this.startX,
                    y: this.startY,
                    width: e.clientX - this.startX,
                    height: e.clientY - this.startY
               }    
          } else if(this.selectedShape === SelectShapeType.Circle) {
               shape = {
                    type: this.selectedShape,
                    x: this.startX,
                    y: this.startY,
                    radiusX: this.radiusX(e),
                    radiusY: this.radiusY(e),
               }
          } else if(this.selectedShape === SelectShapeType.Line) {
               shape = {
                    type: this.selectedShape,
                    startX: this.startX,
                    startY: this.startY,
                    EndX: e.clientX,
                    EndY: e.clientY
               }
          }
          if(!shape) {
               return;
          }
          this.existingShapes.push(shape);
          this.socket.send(JSON.stringify({
               type: 'chat',
               massege: JSON.stringify(shape),
               roomId: this.roomId
          }));
     }

     mouseMove = (e: MouseEvent) => {
          if(!this.clicked) {
               return;
          }
          this.clearCanvas();
          this.ctx.strokeStyle = "rgba(255, 255, 255)"
          if(this.selectedShape === SelectShapeType.Rect) {
               const width = e.clientX - this.startX;
               const height = e.clientY - this.startY;
               this.drawRect(this.startX, this.startY, width, height);
          } else if (this.selectedShape === SelectShapeType.Circle) {
               const radiusX = this.radiusX(e);
               const radiusY = this.radiusY(e);
               this.drawCricle(this.startX, this.startY, radiusX, radiusY);
          } else if (this.selectedShape === SelectShapeType.Line) {
               const x = e.clientX;
               const y = e.clientY;
               this.drawLine(this.startX, this.startY, x, y);
          }
     }

     drawLine = (x1: number, y1: number, x2: number, y2: number) => {
          this.ctx.beginPath();
          const headlen = 7; 
          const dx = x2 - x1;
          const dy = y2 - y1;
          const angle = Math.atan2(dy, dx);

          this.ctx.moveTo(x1, y1);
          this.ctx.lineTo(x2, y2);

          this.ctx.moveTo(x2, y2);
          this.ctx.lineTo(x2 - headlen * Math.cos(angle - Math.PI / 6), y2 - headlen * Math.sin(angle - Math.PI / 6));

          this.ctx.moveTo(x2, y2);
          this.ctx.lineTo(x2 - headlen * Math.cos(angle + Math.PI / 6), y2 - headlen * Math.sin(angle + Math.PI / 6));

          this.ctx.stroke();
     }

     drawRect = (x: number, y: number, width: number, height: number) => {
          this.ctx.strokeRect(x, y, width, height);   
     }
     
     drawCricle = (x: number, y: number, radiusX: number, radiusY: number) => {
          this.ctx.beginPath();
          this.ctx.ellipse(x, y, radiusX, radiusY, 0, 0, 2 * Math.PI);
          this.ctx.stroke();
     }

     radiusX(e: MouseEvent): number {
          return Math.abs(e.clientX - this.startX ) / 2;
     }

     radiusY(e: MouseEvent): number {
          return Math.abs(e.clientY - this.startY ) / 2;
     }
     cleanUp() {
          this.canvas.removeEventListener('mousedown', this.mouseDown)
          this.canvas.removeEventListener('mouseup', this.mouseUp)
          this.canvas.removeEventListener('mousemove', this.mouseMove)
     }
}