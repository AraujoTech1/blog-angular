import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CardComponent } from './componente/card/card.component';  // Importando o CardComponent

@NgModule({
declarations: [
    AppComponent,  // Declarando o AppComponent
    CardComponent  // Declarando o CardComponent
],
imports: [
    BrowserModule  // Importando o BrowserModule
],
providers: [],
  bootstrap: [AppComponent]  // Indica que o AppComponent será o componente inicial
})
export class AppModule { }
