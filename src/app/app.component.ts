import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',  // Caminho para o template HTML do componente
  styleUrls: ['./app.component.scss']   // Caminho para o arquivo de estilos do componente
})
export class AppComponent {
  title = 'my-blog-angular';  // Título da aplicação, pode ser modificado conforme necessário
}
