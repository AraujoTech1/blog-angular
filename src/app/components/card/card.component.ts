import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() titulo: string = '';  // Recebe o título do card
  @Input() imagem: string = '';  // Recebe a URL da imagem do card

  irParaDocumentacao() {
    // Aqui você define a ação ao clicar no card (exemplo: redirecionar para uma URL)
    window.open('https://angular.io/docs', '_blank');  // Exemplo para redirecionar para a documentação do Angular
  }
}
