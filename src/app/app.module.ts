import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatListModule } from "@angular/material/list";
import { MatSelectModule } from "@angular/material/select";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatTableModule } from "@angular/material/table";
import { MatToolbarModule } from "@angular/material/toolbar";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from "./app-routing.module";

//aplicação
import { AppComponent } from './app.component';
import { ProdutoCadastrarComponent } from './components/views/produto/produto-cadastrar/produto-cadastrar.component';
import { ProdutoListarComponent } from './components/views/produto/produto-listar/produto-listar.component';
import { TemplateComponent } from './components/template/template.component';
import { CarrinhoComponent } from './components/views/home/carrinho/carrinho.component';
import { IndexComponent } from './components/views/home/index/index.component';



@NgModule({
  declarations: [
    AppComponent,
    ProdutoCadastrarComponent,
    ProdutoListarComponent,
    TemplateComponent,
    CarrinhoComponent,
    IndexComponent,
    
  
  ],
  imports: [
    BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        MatSidenavModule,
        MatListModule,
        MatTableModule,
        MatFormFieldModule,
        MatInputModule,
        MatCardModule,
        MatSelectModule,
        BrowserAnimationsModule,
        MatGridListModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
