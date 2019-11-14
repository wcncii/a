import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { DevUIModule} from 'ng-devui';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { LeftcontentComponent } from './leftcontent/leftcontent.component';
import { RightcontentComponent } from './rightcontent/rightcontent.component';
import { RightcontentChild1Component } from './rightcontent-child1/rightcontent-child1.component';
import { Page404Component } from './page404/page404.component';
import { AdminComponent } from './admin/admin.component';

const appRoutes: Routes = [  
  { 
    path: 'admin', component: AdminComponent,
    children:[
      { path: 'files', component: AdminComponent },
      { path:'**', redirectTo:'files' }
    ] 
  },
  { 
    path:'**', component:Page404Component

  }
];

@NgModule({
  declarations: [
    AppComponent,
    LeftcontentComponent,
    RightcontentComponent,
    RightcontentChild1Component,
    Page404Component,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DevUIModule,
    RouterModule,
    RouterModule.forRoot(appRoutes),
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
