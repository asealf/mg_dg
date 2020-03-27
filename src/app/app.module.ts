import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NotifierModule } from './notifier/notifier.module';
import { IndexComponent } from './pages/index/index.component';
import { TipiRegistroComponent } from './pages/tipi-registro/tipi-registro.component';
import { TipiRegistroFormComponent } from './pages/tipi-registro/tipi-registro-form/tipi-registro-form.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RegMovComponent } from './pages/regmov/regmov.component';
import { RegMovFormComponent } from './pages/regmov/regmov-form/regmov-form.component';
import { RigheMovFormComponent } from './pages/regmov/regmov-form/righemov-form/righemov-form.component';
import { DittaComponent } from './pages/ditta/ditta.component';
import { MezziTraspComponent } from './pages/mezzi-trasp/mezzi-trasp.component';
import { MezziTraspFormComponent } from './pages/mezzi-trasp/mezzi-trasp-form/mezzi-trasp-form.component';
import { UnitaMisuraComponent } from './pages/unita-misura/unita-misura.component';
import { UnitaMisuraFormComponent } from './pages/unita-misura/unita-misura-form/unita-misura-form.component';
import { ValuteComponent } from './pages/valute/valute.component';
import { ValuteFormComponent } from './pages/valute/valute-form/valute-form.component';
import { TabelleMenuComponent } from './pages/tabelle-menu/tabelle-menu.component';
import { StampamovComponent } from './pages/stampamov/stampamov.component';
import { LoginComponent } from './pages/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    TipiRegistroComponent,
    TipiRegistroFormComponent,
    NavbarComponent,
    RegMovComponent,
    RegMovFormComponent,
    RigheMovFormComponent,
    DittaComponent,
    MezziTraspComponent,
    MezziTraspFormComponent,
    UnitaMisuraComponent,
    UnitaMisuraFormComponent,
    ValuteComponent,
    ValuteFormComponent,
    TabelleMenuComponent,
    StampamovComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, 
    FormsModule,
    NotifierModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
