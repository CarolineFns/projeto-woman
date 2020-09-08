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
            "texto": "A Power Lady Foi criada para trazer mais igualdade para as mulheres."+
                    "As empoderando dentro do mercado de trabalho, trazendo aulas com profissionais"+
                     " para ansiedade, insegurança e o que estudar para a área que você deseja alcançar.",
        
                "tituloBloco": 'Como Funciona?', 
        
                "descricaoImagem": 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,',
        
                "caminhoImagem": '../../../assets/img/blocos/imagem-1.svg',
        
                "imagemPrimeiro": false
            },
            { 
                "texto": "Não, o nosso intuito é trazer conteúdo gratuito para expandir o número "+
                "de mulheres dentro da área de Tecnologia e criando uma Rede de apoio profissional.",

                "tituloBloco": 'Eu tenho que pagar algo?', 
        
                "descricaoImagem": 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,',
        
                "caminhoImagem": '../../../assets/img/blocos/imagem-2.svg',
        
                "imagemPrimeiro": true
            },
            { 
                "texto": "Com o nosso recrutador, você será selecionada pela sua capacidade"+
                " e não pelo seu gênero. Fazendo assim uma disputa mais justa sobre quem é mais"+
                " capacitado para exercer tal função.",
        
                "tituloBloco": 'Vagas Reais', 
        
                "descricaoImagem": 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,',
        
                "caminhoImagem": '../../../assets/img/blocos/imagem-3.svg',
        
                "imagemPrimeiro": false
            }
        ];
    }
}