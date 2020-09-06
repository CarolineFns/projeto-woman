import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImagemComponent } from './imagem.component';

@NgModule({
    declarations: [
        ImagemComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        ImagemComponent
    ]
})
export class ImagemModule {}