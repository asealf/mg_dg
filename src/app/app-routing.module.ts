import { IndexComponent } from './pages/index/index.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TipiRegistroComponent } from './pages/tipi-registro/tipi-registro.component';
import { TipiRegistroFormComponent } from './pages/tipi-registro/tipi-registro-form/tipi-registro-form.component';

import { RegMovComponent } from './pages/regmov/regmov.component';
import { RegMovFormComponent } from './pages/regmov/regmov-form/regmov-form.component';
import { RigheMovFormComponent } from './pages/regmov/regmov-form/righemov-form/righemov-form.component';

import { MezziTraspComponent } from './pages/mezzi-trasp/mezzi-trasp.component';
import { MezziTraspFormComponent } from './pages/mezzi-trasp/mezzi-trasp-form/mezzi-trasp-form.component';

import { UnitaMisuraComponent } from './pages/unita-misura/unita-misura.component';
import { UnitaMisuraFormComponent } from './pages/unita-misura/unita-misura-form/unita-misura-form.component';

import { DittaComponent } from './pages/ditta/ditta.component';

import { ValuteComponent } from './pages/valute/valute.component';
import { ValuteFormComponent } from './pages/valute/valute-form/valute-form.component';

import { TabelleMenuComponent } from './pages/tabelle-menu/tabelle-menu.component';

import { StampamovComponent } from './pages/stampamov/stampamov.component'; 

const routes: Routes = [
  { path: '', component: IndexComponent, pathMatch: 'full' },
  { path: 'tabelle', component: TabelleMenuComponent, pathMatch: 'full' },

  { path: 'tipiregistro', component: TipiRegistroComponent, pathMatch: 'full' },
  { path: 'tipiregistro/form', component: TipiRegistroFormComponent, pathMatch: 'full' },

  { path: 'regmov-list', component: RegMovComponent, pathMatch: 'full' },
  { path: 'regmov-list/form', component: RegMovFormComponent, pathMatch: 'full' },
  { path: 'rigamov-list/form', component: RigheMovFormComponent, pathMatch: 'full' },

  { path: 'regmov-stampa', component: StampamovComponent, pathMatch: 'full' },

  { path: 'mezzitrasp', component: MezziTraspComponent, pathMatch: 'full' },
  { path: 'mezzitrasp/form', component: MezziTraspFormComponent, pathMatch: 'full' },

  { path: 'unitamisura', component: UnitaMisuraComponent, pathMatch: 'full' },
  { path: 'unitamisura/form', component: UnitaMisuraFormComponent, pathMatch: 'full' },

  { path: 'ditta', component: DittaComponent, pathMatch: 'full' },
  
  { path: 'valute', component: ValuteComponent, pathMatch: 'full' },
  { path: 'valute/form', component: ValuteFormComponent, pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
