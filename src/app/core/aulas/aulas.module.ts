import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { BlocoVideoComponent } from './bloco/bloco-video/bloco-video.component';
import { BlocoAulasComponent } from './bloco/bloco-aulas.component';
import { AulasComponent } from './aulas.component';

@NgModule({
    declarations: [
        AulasComponent,
        BlocoAulasComponent,
        BlocoVideoComponent
    ],
    exports: [
        AulasComponent,
        BlocoAulasComponent,
        BlocoVideoComponent
    ],
    imports: [
        CommonModule,
        RouterModule
    ]
})
export class AulasModule {}