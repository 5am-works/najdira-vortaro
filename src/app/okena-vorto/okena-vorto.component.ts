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

  constructor(private okena: OkenaService) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.kanvaso.nativeElement.height = 200;
    this.kanvaso.nativeElement.width = 500;
    const ctx = this.kanvaso.nativeElement.getContext('2d');
    ctx.lineWidth = 10;
    ctx.lineCap = 'square';
    ctx.lineJoin = 'miter';
    this.okena.desegni(this.vorto, ctx, 50, 15);
  }

}
