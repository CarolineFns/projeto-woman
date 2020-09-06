import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'hw-bloco',
    templateUrl: './bloco.component.html',
    styleUrls: ['./bloco.component.css']
})
export class BlocoComponent implements OnInit {

    @Input() texto: string;
    @Input() tituloBloco: string;
    @Input() descricaoImagem: string;
    @Input() caminhoImagem: string;
    @Input() imagemPrimeiro: false;

    ngOnInit(): void {
        this.tituloBloco = 'Como Funciona?';
        this.texto = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,'  + 
        'sed do eiusmod tempor incididunt ut labore et dolore '+ 
        'magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation '+ 
        'ullamco laboris nisi ut aliquip ex ea commodo consequat. '+ 
        'Duis aute irure dolor in reprehenderit in voluptate velit '+ 
        'esse cillum dolore eu fugiat nulla pariatur. Excepteur sint '+ 
        'occaecat cupidatat non proident, sunt in culpa qui officia '+ 
        'deserunt mollit anim id est laborum.';
        this.caminhoImagem = '../../../assets/img/conteudo/Componente 3 – 1 (2).svg';
        this.descricaoImagem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,';
        console.log(this.caminhoImagem)
    }

}