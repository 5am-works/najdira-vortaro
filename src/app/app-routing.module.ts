import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ĈefpaĝoComponent } from './ĉefpaĝo/ĉefpaĝo.component';
import { VortoComponent } from './vorto/vorto.component';

const routes: Routes = [{
  path: '', component: ĈefpaĝoComponent,
}, {
  path: ':vorto', component: VortoComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
