import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AuthGuard } from './auth/auth.guard';

import { MathPipe } from './pipe/math.pipe';

import { AppComponent } from './app.component';
import { PageComponent } from './page/page.component';
import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';

@NgModule({
  declarations: [
    AppComponent,
    PageComponent,
    ListComponent,
    AddComponent,
    MathPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
