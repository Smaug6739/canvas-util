import type { Canvas } from "canvas";
interface font {
  name: string;
  size: number;
}
export function applyText(canvas: Canvas, text: string, font: font) {
  const ctx = canvas.getContext("2d");
  ctx.font = `${font.size}px ${font.name}`;
  while (ctx.measureText(text).width > canvas.width - 100) {
    console.log(1);

    ctx.font = `${(font.size -= 10)}px ${font.name}`;
  }
  return ctx.font;
}
