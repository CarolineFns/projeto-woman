import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { BlocoComponent } from './home/bloco/bloco.component';
import { ImagemModule } from '../shared/imagem/imagem.module';
import { ParceirasComponent } from './parceiras/parceiras-component';
import { FooterComponent } from './footer/footer.component';
import { SigninComponent } from './signin/signin.component';
import { SignUpComponent } from './signup/signup.component';
import { AulasModule } from './aulas/aulas.module';

@NgModule({
    declarations: [
        HeaderComponent,
        HomeComponent,
        BlocoComponent,
        ParceirasComponent,
        FooterComponent,
        SigninComponent,
        SignUpComponent
    ],
    exports: [
        HeaderComponent,
        HomeComponent,
        BlocoComponent,
        ParceirasComponent,
        FooterComponent
    ],
    imports: [
        CommonModule,
        ImagemModule,
        RouterModule,
        ReactiveFormsModule,
        FormsModule,
        AulasModule
    ]
})
export class CoreModule {}