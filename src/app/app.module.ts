import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing';
import { FormTdComponent } from './form-td/form-td.component';
import { FormReactiveComponent } from './form-reactive/form-reactive.component';
import { PipeComponent } from './pipe/pipe.component';
import { ReversePipe } from './pipe/reverse.pipe';
import { OrderPipe } from './pipe/order.pipe';
import { AuthComponent } from './auth/auth.component';
import { RecipesModule } from './recipes/recipes.module';
import { ShoppingListModule } from './shopping-list/shopping-list.module';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from '../core.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FormTdComponent,
    FormReactiveComponent,
    PipeComponent,
    ReversePipe,
    OrderPipe,
    AuthComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RecipesModule,
    ShoppingListModule,
    SharedModule,
    CoreModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
