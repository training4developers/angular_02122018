import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { MyCapitalizePipe } from './pipes/my-capitalize.pipe';
import { PipeDemoComponent } from './components/pipe-demo/pipe-demo.component';
import { MyAppendPipe } from './pipes/my-append.pipe';
import { MyEllipsisPipe } from './pipes/my-ellipsis.pipe';
import { FormDemoComponent } from './components/form-demo/form-demo.component';
import { ServiceDemoComponent } from './components/service-demo/service-demo.component';
import { CatListComponent } from './components/cat-list/cat-list.component';

@NgModule({
  imports: [
    CommonModule, FormsModule, HttpClientModule,
  ],
  declarations: [
    MyCapitalizePipe, PipeDemoComponent, MyAppendPipe,
    MyEllipsisPipe, FormDemoComponent, ServiceDemoComponent, CatListComponent
  ],
  exports: [
    PipeDemoComponent,
    FormDemoComponent,
    ServiceDemoComponent,
    CatListComponent,
  ],
})
export class SharedModule { }
