import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VortaroService {
  private static vortojURL = "/servilo/vortoj";
  private static indeksoURL = "/servilo/indekso";

  constructor(private http: HttpClient) {

  }

  listiVortojn() {
    return this.http.get<Array<Vorto>>(VortaroService.vortojURL);
  }

  listiVortojnKunSignifoj() {
    return this.http.get<Array<VortoKunSignifo>>(VortaroService.indeksoURL);
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