import { createCanvas, loadImage } from "canvas";
import type { NodeCanvasRenderingContext2D, Canvas } from "canvas";
import { applyText } from ".";

export class CanvasUtil {
  canvas: Canvas;
  ctx: NodeCanvasRenderingContext2D;
  width: number;
  height: number;
  font = {
    name: "Play",
    size: 60,
  };
  constructor(w?: number, h?: number) {
    this.width = w || 930;
    this.height = h || 280;
    this.canvas = createCanvas(this.width, this.height);
    this.ctx = this.canvas.getContext("2d");
  }
  async setBackground(type: string, value: string | Buffer): Promise<this> {
    switch (type) {
      case "IMAGE":
        const image = await loadImage(value);
        this.ctx.drawImage(image, 0, 0, this.canvas.width, this.canvas.height);
        break;
      case "COLOR":
        this.ctx.fillStyle = value as string;
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        break;
    }
    return this;
  }

  setFont(name: string, size: number): this {
    this.font = {
      name,
      size,
    };
    return this;
  }
  setTransparancy(transparancy: number): this {
    if (!transparancy || typeof transparancy !== "number")
      throw new TypeError("Transparancy must be a number");
    this.ctx.globalAlpha = transparancy;
    return this;
  }
  addText(text: string, color: string, x: number, y: number): this {
    this.ctx.font = applyText(this.canvas, text, this.font);
    this.ctx.fillStyle = color;
    this.ctx.fillText(text, x, y);
    return this;
  }
  async addImage(
    path: string,
    x: number,
    y: number,
    px: number,
    py: number
  ): Promise<this> {
    const image = await loadImage(path);
    this.ctx.drawImage(image, x, y, px, py);
    return this;
  }
  async addCircularImage(
    path: string,
    x: number,
    y: number,
    px: number,
    py: number
  ): Promise<this> {
    const image = await loadImage(path);
    this.ctx.save();
    this.ctx.beginPath();
    this.ctx.arc(x + px / 2, y + py / 2, px / 2, 0, Math.PI * 2, true);
    this.ctx.closePath();
    this.ctx.clip();
    this.ctx.drawImage(image, x, y, px, py);
    this.ctx.restore();
    return this;
  }
  build() {
    return this.canvas.toBuffer();
  }
}
