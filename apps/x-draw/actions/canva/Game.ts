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
}
 
export enum SelectShapeType {
     Rect = 'rect',
     Circle = 'circle',
     Pencil = 'pencil'
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
          this.sendSocketMsg();
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
                    this.ctx.strokeRect(shape.x, shape.y, shape.width, shape.height);
               } else if (shape.type === SelectShapeType.Circle) {
                    this.ctx.beginPath();
                    this.ctx.ellipse(shape.x, shape.y, shape.radiusX, shape.radiusY, 0, 0, 2 * Math.PI);
                    this.ctx.stroke();
               }
          })
     }

     sendSocketMsg() {
          // make it socket call here
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
          }
          if(!shape) {
               return;
          }
          this.existingShapes.push(shape);

          // make it socket call here and send new created shape to ws way other user
     }

     mouseMove = (e: MouseEvent) => {
          if(!this.clicked) {
               return;
          }
          if(this.selectedShape === SelectShapeType.Rect) {
               this.drawRect(e);
          } else if (this.selectedShape === SelectShapeType.Circle) {
               this.drawCricle(e);
          }
     }

     drawRect = (e: MouseEvent) => {
          const width = e.clientX - this.startX;
          const height = e.clientY - this.startY;
          this.clearCanvas();
          this.ctx.strokeStyle = "rgba(255, 255, 255)"
          this.ctx.strokeRect(this.startX, this.startY, width, height);   
     }
     
     drawCricle = (e: MouseEvent) => {
          this.ctx.strokeStyle = "rgba(255, 255, 255)"
          this.clearCanvas();
          this.ctx.beginPath();
          const radiusX = this.radiusX(e);
          const radiusY = this.radiusY(e);
          this.ctx.ellipse(this.startX, this.startY, radiusX, radiusY, 0, 0, 2 * Math.PI);
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