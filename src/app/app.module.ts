import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { FunctionforuserComponent } from './functionforuser/functionforuser.component';
import { FormsModule } from '@angular/forms';
import { MedicalComponent } from './medical/medical.component';
import { ProductComponent } from './product/product.component';
import { NewsComponent } from './news/news.component';
import { ProductSystemComponent } from './product-system/product-system.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FunctionforuserComponent,
    ProductComponent,
    MedicalComponent,
    NewsComponent,
    ProductSystemComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
