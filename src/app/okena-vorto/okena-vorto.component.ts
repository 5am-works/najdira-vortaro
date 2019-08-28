import {
  Component,
  OnInit,
  Input,
  ViewChild,
  ElementRef,
  AfterViewInit
} from '@angular/core';

import { OkenaService } from './okena.service';

@Component({
  selector: 'app-okena-vorto',
  templateUrl: './okena-vorto.component.html',
  styleUrls: ['./okena-vorto.component.scss']
})
export class OkenaVortoComponent implements OnInit, AfterViewInit {
  @Input() vorto: string;
  @ViewChild('kanvaso', {static: true}) kanvaso: ElementRef<HTMLCanvasElement>;

  private static spaco = 10;
  private static longeco = 40;

  constructor(private okena: OkenaService) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.kanvaso.nativeElement.height = OkenaVortoComponent.spaco * 2 + OkenaVortoComponent.longeco + 7;
    this.kanvaso.nativeElement.width = OkenaVortoComponent.spaco * (this.vorto.length / 2 + 1)
      + OkenaVortoComponent.longeco * this.vorto.length / 2;
    const ctx = this.kanvaso.nativeElement.getContext('2d');
    ctx.lineWidth = 6;
    ctx.lineCap = 'square';
    ctx.lineJoin = 'miter';
    this.okena.desegni(this.vorto, ctx, OkenaVortoComponent.longeco, OkenaVortoComponent.spaco);
  }

}
