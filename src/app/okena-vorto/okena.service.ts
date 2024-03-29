import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OkenaService {

  constructor() { }
  private static desegniloj: Map<string, (ctx: CanvasRenderingContext2D, turni: boolean, longeco: number) => void> = new Map([
    ['_', (ctx, turni, longeco) => {
      ctx.beginPath();
      ctx.moveTo(0, longeco * 0.6);
      ctx.lineTo(0, 0);
      ctx.lineTo(longeco, 0);
      ctx.stroke();
    }],
    ['m', (ctx, turni, longeco) => {
      ctx.beginPath();
      ctx.moveTo(0, longeco * 0.3);
      ctx.lineTo(0, longeco * 0.7);
      ctx.ellipse(longeco * 0.5, longeco * 0.7, longeco / 2, longeco * 0.3 + 3, 0, Math.PI, 2 * Math.PI, true);
      ctx.lineTo(longeco, 0);
      ctx.stroke();
    }],
    ['b', (ctx, turni, longeco) => {
      ctx.beginPath();
      ctx.moveTo(0, longeco * 0.4);
      ctx.lineTo(0, longeco);
      ctx.lineTo(longeco, longeco);
      ctx.lineTo(longeco, 0);
      ctx.moveTo(longeco * 0.75, 0);
      ctx.lineTo(longeco * 0.75, longeco);
      ctx.stroke();
    }],
    ['p', (ctx, turni, longeco) => {
      ctx.beginPath();
      ctx.moveTo(0, longeco * 0.6);
      ctx.lineTo(0, longeco);
      ctx.lineTo(longeco, longeco);
      ctx.lineTo(longeco, 0);
      ctx.stroke();
    }],
    ['v', (ctx, turni, longeco) => {
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(longeco, 0);
      ctx.moveTo(0, longeco * 0.6);
      ctx.lineTo(0, longeco);
      ctx.lineTo(longeco, longeco);
      ctx.lineTo(longeco, longeco * 0.3);
      ctx.lineTo(longeco * 0.65, longeco * 0.3);
      ctx.moveTo(longeco * 0.75, longeco);
      ctx.lineTo(longeco * 0.75, longeco * 0.3);
      ctx.stroke();
    }],
    ['f', (ctx, turni, longeco) => {
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(longeco, 0);
      ctx.moveTo(0, longeco * 0.6);
      ctx.lineTo(0, longeco);
      ctx.lineTo(longeco, longeco);
      ctx.lineTo(longeco, longeco * 0.3);
      ctx.lineTo(longeco * 0.85, longeco * 0.3);
      ctx.stroke();
    }],
    ['n', (ctx, turni, longeco) => {
      ctx.beginPath();
      ctx.moveTo(0, longeco * 0.6);
      ctx.lineTo(0, longeco * 0.3);
      ctx.ellipse(longeco * 0.5, longeco * 0.3, longeco / 2, longeco * 0.3 + 3, 0, Math.PI, 0);
      ctx.lineTo(longeco, longeco);
      ctx.stroke();
    }],
    ['d', (ctx, turni, longeco) => {
      ctx.beginPath();
      ctx.moveTo(0, longeco * 0.6);
      ctx.lineTo(0, 0);
      ctx.lineTo(longeco, 0);
      ctx.lineTo(longeco, longeco);
      ctx.moveTo(longeco * 0.75, 0);
      ctx.lineTo(longeco * 0.75, longeco);
      ctx.stroke();
    }],
    ['t', (ctx, turni, longeco) => {
      ctx.beginPath();
      ctx.moveTo(0, longeco * 0.6);
      ctx.lineTo(0, 0);
      ctx.lineTo(longeco, 0);
      ctx.lineTo(longeco, longeco);
      ctx.stroke();
    }],
    ['z', (ctx, turni, longeco) => {
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(longeco, 0);
      ctx.moveTo(0, longeco * 0.6);
      ctx.lineTo(0, longeco * 0.3);
      ctx.lineTo(longeco, longeco * 0.3);
      ctx.lineTo(longeco, longeco);
      ctx.moveTo(longeco * 0.75, longeco * 0.3);
      ctx.lineTo(longeco * 0.75, longeco);
      ctx.stroke();
    }],
    ['s', (ctx, turni, longeco) => {
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(longeco, 0);
      ctx.moveTo(0, longeco * 0.6);
      ctx.lineTo(0, longeco * 0.3);
      ctx.lineTo(longeco, longeco * 0.3);
      ctx.lineTo(longeco, longeco);
      ctx.stroke();
    }],
    ['l', (ctx, turni, longeco) => {
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(0, longeco);
      ctx.lineTo(longeco, longeco);
      ctx.lineTo(longeco, 0);
      ctx.moveTo(longeco * 0.3, longeco);
      ctx.lineTo(longeco * 0.3, longeco * 0.4);
      ctx.stroke();
    }],
    ['r', (ctx, turni, longeco) => {
      ctx.save();
      ctx.beginPath();
      ctx.rect(-ctx.lineWidth / 2, -ctx.lineWidth / 2, longeco + ctx.lineWidth, longeco + ctx.lineWidth);
      ctx.clip();
      ctx.beginPath();
      ctx.moveTo(0, longeco * 0.6);
      ctx.lineTo(0, 0);
      ctx.lineTo(longeco, longeco);
      ctx.lineTo(longeco, 0);
      ctx.stroke();
      ctx.restore();
    }],
    ['ʃ', (ctx, turni, longeco) => {
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(longeco, 0);
      ctx.moveTo(0, longeco * 0.6);
      ctx.lineTo(0, longeco * 0.3);
      ctx.lineTo(longeco, longeco * 0.3);
      ctx.lineTo(longeco, longeco);
      ctx.lineTo(longeco * 0.85, longeco);
      ctx.stroke();
    }],
    ['j', (ctx, turni, longeco) => {
      ctx.beginPath();
      ctx.moveTo(0, longeco);
      ctx.lineTo(longeco / 2, 0);
      ctx.lineTo(longeco, longeco);
      ctx.moveTo(longeco / 2, 0);
      ctx.lineTo(longeco / 2, longeco * 0.6);
      ctx.stroke();
    }],
    ['g', (ctx, turni, longeco) => {
      ctx.beginPath();
      ctx.moveTo(0, longeco * 0.6);
      ctx.lineTo(0, 0);
      ctx.lineTo(longeco, 0);
      ctx.lineTo(longeco * 0.85, longeco / 2);
      ctx.lineTo(longeco, longeco);
      ctx.moveTo(longeco * 0.7, 0);
      ctx.lineTo(longeco * 0.55, longeco / 2);
      ctx.lineTo(longeco * 0.7, longeco);
      ctx.stroke();
    }],
    ['k', (ctx, turni, longeco) => {
      ctx.beginPath();
      ctx.moveTo(0, longeco * 0.6);
      ctx.lineTo(0, 0);
      ctx.lineTo(longeco, 0);
      ctx.lineTo(longeco * 0.7, longeco / 2);
      ctx.lineTo(longeco, longeco);
      ctx.stroke();
    }],
    ['w', (ctx, turni, longeco) => {
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(0, longeco * 0.6);
      ctx.moveTo(longeco, 0);
      ctx.lineTo(3, longeco / 2);
      ctx.lineTo(longeco, longeco);
      ctx.stroke();
    }],
    // Vokaloj
    ['a', (ctx, turni, longeco) => {
      ctx.save();
      ctx.strokeStyle = 'white';
      ctx.lineWidth += 2;
      ctx.beginPath();
      ctx.moveTo(0, longeco * 0.6);
      ctx.ellipse(longeco * 0.2, longeco * 0.8 + 1, longeco * 0.2, longeco * 0.2, 0, Math.PI, 2 * Math.PI - 1.7, true);
      ctx.stroke();

      ctx.restore();
      ctx.beginPath();
      ctx.moveTo(0, longeco * 0.6 - 2);
      ctx.ellipse(longeco * 0.2, longeco * 0.8 + 1, longeco * 0.2, longeco * 0.2, 0, Math.PI, 2 * Math.PI - 1.7, true);
      ctx.stroke();
    }],
    ['e', (ctx, turni, longeco) => {
      ctx.beginPath();
      ctx.moveTo(0, longeco * 0.6);
      ctx.ellipse(longeco * 0.2, longeco * 0.8 + 1, longeco * 0.2, longeco * 0.2, 0, Math.PI, 2 * Math.PI, true);
      ctx.stroke();
    }],
    ['i', (ctx, turni, longeco) => {
      ctx.beginPath();
      ctx.moveTo(0, longeco * 0.6);
      ctx.ellipse(longeco * 0.2, longeco * 0.8 + 1, longeco * 0.2, longeco * 0.2, 0, Math.PI, 2 * Math.PI, true);
      ctx.stroke();
      ctx.save();
      ctx.strokeStyle = 'white';
      ctx.lineWidth += 2;
      ctx.beginPath();
      ctx.moveTo(longeco * 0.4, longeco * 0.7);
      ctx.lineTo(longeco * 0.4, longeco + 2);
      ctx.stroke();

      ctx.restore();
      ctx.beginPath();
      ctx.moveTo(longeco * 0.4, longeco * 0.7);
      ctx.lineTo(longeco * 0.4, longeco + 2);
      ctx.stroke();
    }],
    ['A', (ctx, turni, longeco) => {
      ctx.save();
      ctx.strokeStyle = 'white';
      ctx.lineWidth += 2;
      ctx.beginPath();
      ctx.moveTo(0, longeco * 0.6);
      ctx.ellipse(longeco * 0.2, longeco * 0.8 + 1, longeco * 0.2, longeco * 0.2, 0, Math.PI, 2 * Math.PI - 1.7, true);
      ctx.stroke();

      ctx.restore();
      ctx.beginPath();
      ctx.moveTo(0, longeco * 0.6 - 2);
      ctx.ellipse(longeco * 0.2, longeco * 0.8 + 1, longeco * 0.2, longeco * 0.2, 0, Math.PI, 2 * Math.PI - 1.7, true);
      ctx.stroke();

      ctx.save();
      ctx.strokeStyle = 'white';
      ctx.lineWidth += 2;
      ctx.beginPath();
      ctx.moveTo(longeco * 0.4, longeco * 0.8 + 2);
      ctx.lineTo(longeco * 0.4, longeco);
      ctx.stroke();

      ctx.restore();
      ctx.beginPath();
      ctx.moveTo(longeco * 0.4, longeco * 0.8);
      ctx.lineTo(longeco * 0.4, longeco + 2);
      ctx.stroke();
    }],
    ['E', (ctx, turni, longeco) => {
      ctx.beginPath();
      ctx.moveTo(0, longeco * 0.6);
      ctx.ellipse(longeco * 0.2 - 3, longeco * 0.8 + 1, longeco * 0.2 - 3, longeco * 0.2, 0, Math.PI, 2 * Math.PI, true);
      ctx.stroke();
      ctx.save();
      ctx.strokeStyle = 'white';
      ctx.lineWidth += 2;
      ctx.beginPath();
      ctx.moveTo(longeco * 0.4 - 6, longeco * 0.7);
      ctx.lineTo(longeco * 0.4 - 6, longeco + 2);
      ctx.moveTo(longeco * 0.4 + 2, longeco * 0.7);
      ctx.lineTo(longeco * 0.4 + 2, longeco + 2);
      ctx.stroke();

      ctx.restore();
      ctx.beginPath();
      ctx.moveTo(longeco * 0.4 - 6, longeco * 0.7);
      ctx.lineTo(longeco * 0.4 - 6, longeco + 2);
      ctx.moveTo(longeco * 0.4 + 2, longeco * 0.7);
      ctx.lineTo(longeco * 0.4 + 2, longeco + 2);
      ctx.stroke();
    }],
  ]);
  private static vokaloMoviloj: Map<string, (ctx: CanvasRenderingContext2D, longeco: number) => void> = new Map([
    ['m', OkenaService.mbpMovi],
    ['b', OkenaService.mbpMovi],
    ['p', OkenaService.mbpMovi],
    ['v', OkenaService.vfMovi],
    ['f', OkenaService.vfMovi],
    ['l', (ctx, longeco) => {
      ctx.transform(1, 0, 0, -1, 0, longeco);
      ctx.transform(1, 0, 0, 1, longeco * 0.3, 0);
    }],
    ['j', (ctx, longeco) => {
      ctx.transform(1, 0, 0, 1, longeco * 0.5, 0);
    }],
  ]);
  private static mallumajVokaloj = new Map<string, string>([
    ['ɔ', 'a'],
    ['o', 'e'],
    ['u', 'i'],
    ['O', 'E'],
  ]);

  private static mbpMovi(ctx: CanvasRenderingContext2D, longeco: number) {
    ctx.transform(1, 0, 0, -1, 0, longeco);
  }

  private static vfMovi(ctx: CanvasRenderingContext2D, longeco: number) {
    ctx.transform(1, 0, 0, -1, 0, longeco);
    ctx.transform(1, 0, 0, 1, 0, -longeco * 0.3);
  }

  desegni(vorto: string, ctx: CanvasRenderingContext2D, longeco: number, spaco: number) {
    if (vorto.length % 2 !== 0) {
      throw Error(`La longeco de ${vorto} estas nevalida`);
    }
    ctx.setTransform(1, 0, 0, 1, spaco, spaco + 7);
    [...vorto].forEach((litero, indekso) => {
      if (indekso % 2 === 0) { // Konsonanto
        const vokalo = vorto.charAt(indekso + 1);
        if (OkenaService.mallumajVokaloj.has(vokalo)) {
          ctx.save();
          if (litero === 'r') {
            ctx.transform(-1, 0, 0, -1, longeco, longeco);
          } else {
            ctx.transform(-1, 0, 0, 1, longeco, 0);
          }
        }
        OkenaService.desegniloj.get(litero)(ctx, false, longeco);
      } else { // Vokalo
        ctx.save();
        const konsonanto = vorto.charAt(indekso - 1);
        if (OkenaService.vokaloMoviloj.has(konsonanto)) {
          OkenaService.vokaloMoviloj.get(konsonanto)(ctx, longeco);
        }
        OkenaService.desegniloj.get(OkenaService.mallumajVokaloj.get(litero) || litero)(ctx, false, longeco);
        ctx.restore();
        ctx.restore();
        ctx.transform(1, 0, 0, 1, longeco + spaco, 0);
      }
    });
  }
}
