import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'hw-bloco',
    templateUrl: './bloco.component.html',
    styleUrls: ['./bloco.component.css']
})
export class BlocoComponent implements OnInit {

    arrayBlocos: {};

    ngOnInit(): void {
        this.arrayBlocos = this.getBlocos();
    }

    getBlocos() {
        return [
            { 
                "texto": "Lorem ipsum dolor sit amet, consectetur adipiscing elit,"+
                'sed do eiusmod tempor incididunt ut labore et dolore'+
                'magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation'+
                'ullamco laboris nisi ut aliquip ex ea commodo consequat. '+
                'Duis aute irure dolor in reprehenderit in voluptate velit '+ 
                'esse cillum dolore eu fugiat nulla pariatur. Excepteur sint '+ 
                'occaecat cupidatat non proident, sunt in culpa qui officia '+
                'deserunt mollit anim id est laborum.',
        
                "tituloBloco": 'Como Funciona?', 
        
                "descricaoImagem": 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,',
        
                "caminhoImagem": '../../../assets/img/blocos/imagem-1.svg',
        
                "imagemPrimeiro": false
            },
            { 
                "texto": "Lorem ipsum dolor sit amet, consectetur adipiscing elit,"+
                'sed do eiusmod tempor incididunt ut labore et dolore'+
                'magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation'+
                'ullamco laboris nisi ut aliquip ex ea commodo consequat. '+
                'Duis aute irure dolor in reprehenderit in voluptate velit '+ 
                'esse cillum dolore eu fugiat nulla pariatur. Excepteur sint '+ 
                'occaecat cupidatat non proident, sunt in culpa qui officia '+
                'deserunt mollit anim id est laborum.',
        
                "tituloBloco": 'Lorem ipsum dolor?', 
        
                "descricaoImagem": 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,',
        
                "caminhoImagem": '../../../assets/img/blocos/imagem-2.svg',
        
                "imagemPrimeiro": true
            },
            { 
                "texto": "Lorem ipsum dolor sit amet, consectetur adipiscing elit,"+
                'sed do eiusmod tempor incididunt ut labore et dolore'+
                'magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation'+
                'ullamco laboris nisi ut aliquip ex ea commodo consequat. '+
                'Duis aute irure dolor in reprehenderit in voluptate velit '+ 
                'esse cillum dolore eu fugiat nulla pariatur. Excepteur sint '+ 
                'occaecat cupidatat non proident, sunt in culpa qui officia '+
                'deserunt mollit anim id est laborum.',
        
                "tituloBloco": 'Lorem ipsum dolor?', 
        
                "descricaoImagem": 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,',
        
                "caminhoImagem": '../../../assets/img/blocos/imagem-3.svg',
        
                "imagemPrimeiro": false
            }
        ];
    }
}