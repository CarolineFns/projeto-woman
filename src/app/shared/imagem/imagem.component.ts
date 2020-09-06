import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'hw-imagem',
    templateUrl: './imagem.component.html'
})
export class ImagemComponent implements OnInit {
    
    @Input() descricao = '';
    @Input() caminho = '';
    @Input() largura = 300;
    @Input() altura = 300;

    ngOnInit(): void {
    }

}