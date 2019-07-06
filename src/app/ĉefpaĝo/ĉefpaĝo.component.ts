import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { VortaroService, VortoKunSignifo } from '../vortaro.service';

@Component({
  selector: 'app-ĉefpaĝo',
  templateUrl: './ĉefpaĝo.component.html',
  styleUrls: ['./ĉefpaĝo.component.scss']
})
export class ĈefpaĝoComponent implements OnInit {
  private kolomoj = ['vorto', 'signifo'];
  private vortoj: VortoKunSignifo[] = [];

  constructor(private vortaro: VortaroService) {
    this.vortaro.listiVortojnKunSignifoj()
      .subscribe(vortoj => this.vortoj = vortoj);
  }

  ngOnInit() {
  }

  normaligi(vorto: string) {
    return this.vortaro.normaligi(vorto);
  }
}
