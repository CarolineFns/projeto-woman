import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'hw-imagem',
    templateUrl: './imagem.component.html'
})
export class ImagemComponent implements OnInit {
    
    @Input() descricao = '';
    @Input() caminho = '';

    ngOnInit(): void {
    }

}