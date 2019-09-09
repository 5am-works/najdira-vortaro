import {Component, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {Observable} from 'rxjs';
import {debounceTime, filter, flatMap, map} from 'rxjs/operators';
import {VortaroService} from './vortaro.service';

interface RezultoGrupo {
  tipo: 'vorto' | 'signifo';
  rezultoj: string[];
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private formBuilder: FormBuilder, private vortaro: VortaroService) { }

  title = 'najdira-vortaro';
  rezultoj: Observable<RezultoGrupo[]>;
  respondilo = this.formBuilder.group({
    rezultoGrupo: '',
  });

  ngOnInit(): void {
    this.rezultoj = this.respondilo.get('rezultoGrupo').valueChanges
      .pipe(
        debounceTime(500),
        filter((eniro: string) => eniro.length > 0),
        flatMap((eniro: string) => this.vortaro.trovi(eniro)),
        map(rezulto => {
          return [{
            tipo: 'vorto',
            rezultoj: rezulto.vortoj.map(v => v.vorto)
          }, {
            tipo: 'signifo',
            rezultoj: rezulto.signifoj.map(s => s.signifo)
          }];
        })
      );
  }
}
