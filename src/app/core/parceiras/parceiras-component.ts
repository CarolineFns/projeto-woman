import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'hw-parceiras',
    templateUrl: './parceiras.component.html',
    styleUrls: ['./parceiras.component.css']
})
export class ParceirasComponent implements OnInit {
    
    arrayEmpresas: {};

    ngOnInit(): void {
        this.arrayEmpresas = this.getEmpresas();
    }

    getEmpresas() {
        return [
            {     
                "caminhoImagem": '../../../assets/img/parceiras/parceira-1.png',
                "descricaoImagem": 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,',
            },
            {     
                "caminhoImagem": '../../../assets/img/parceiras/parceira-2.png',
                "descricaoImagem": 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,',
            },
            {     
                "caminhoImagem": '../../../assets/img/parceiras/parceira-3.png',
                "descricaoImagem": 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,',
            },
            {     
                "caminhoImagem": '../../../assets/img/parceiras/parceira-1.png',
                "descricaoImagem": 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,',
            },
            {     
                "caminhoImagem": '../../../assets/img/parceiras/parceira-2.png',
                "descricaoImagem": 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,',
            },
            {     
                "caminhoImagem": '../../../assets/img/parceiras/parceira-3.png',
                "descricaoImagem": 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,',
            }
        ];
    }
}