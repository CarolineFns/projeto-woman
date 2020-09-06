import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { BlocoComponent } from './home/bloco/bloco.component';
import { ImagemModule } from '../shared/imagem/imagem.module';

@NgModule({
    declarations: [
        HeaderComponent,
        HomeComponent,
        BlocoComponent
    ],
    exports: [
        HeaderComponent,
        HomeComponent,
        BlocoComponent
    ],
    imports: [
        CommonModule,
        ImagemModule
    ]
})
export class CoreModule {}