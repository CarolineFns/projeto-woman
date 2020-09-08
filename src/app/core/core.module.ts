import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { BlocoComponent } from './home/bloco/bloco.component';
import { ImagemModule } from '../shared/imagem/imagem.module';
import { ParceirasComponent } from './parceiras/parceiras-component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SignUpComponent } from './signup/signup.component';

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
        FormsModule
    ]
})
export class CoreModule {}