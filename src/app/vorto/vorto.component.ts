import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';

import { VortaroService, VortoInformo } from '../vortaro.service';

@Component({
  selector: 'app-vorto',
  templateUrl: './vorto.component.html',
  styleUrls: ['./vorto.component.scss']
})
export class VortoComponent implements OnInit {
  private vorto: string;
  private eraro = false;
  private informo = new Subject<VortoInformo>();

  constructor(private vojo: ActivatedRoute, private vortaro: VortaroService) {
    vojo.paramMap.subscribe((params) => {
      this.vorto = params.get('vorto');
      this.informo.next(null);
      this.vortaro.vortoInformo(this.vorto).subscribe((vorto) => {
        this.informo.next(vorto);
      }, (eraro) => {
        this.eraro = true;
        console.error(eraro);
      });
    });
  }

  ngOnInit() {
  }
}
