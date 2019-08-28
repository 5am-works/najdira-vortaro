import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VortaroService {

  constructor(private http: HttpClient) {

  }
  private static vortojURL = '/servilo/vortoj';
  private static indeksoURL = '/servilo/indekso';

  normaligi(vorto: string) {
    return vorto.replace('A', 'ai').replace('E', 'ei').replace('O', 'ou').replace('_', '');
  }

  normaligiListon(vortoj: string[]) {
    return vortoj.map(v => this.normaligi(v));
  }

  listiVortojn() {
    return this.http.get<Array<Vorto>>(VortaroService.vortojURL);
  }

  listiVortojnKunSignifoj() {
    return this.http.get<Array<VortoKunSignifo>>(VortaroService.indeksoURL);
  }

  vortoInformo(vorto: string) {
    return this.http.get<VortoInformo>(`/servilo/informi/${vorto}`);
  }
}

export interface Vorto {
  vorto: string;
  id: number;
  ecoj: number;
  signifo_id: number;
}

export interface Signifo {
  signifo: string;
  id: number;
}

export interface VortoKunSignifo {
  signifo: string;
  ecoj: number;
  vorto: string;
}

export interface VortoInformo {
  vorto: string;
  ecoj: number;
  signifo: string;
  egalvortoj: string[];
  radikoj: string[];
  idoj: string[];
}
