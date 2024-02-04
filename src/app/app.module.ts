import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { DynamicControlInjectorPipe } from './dynamic-form/dynamic-control-injector.pipe';
import { DynamicFormComponent } from './example/dynamic-form.component';
import {
  DynamicSelectInputComponent
} from './example/input-controls/dynamic-select-input/dynamic-select-input.component';
import { DynamicTextInputComponent } from './example/input-controls/dynamic-text-input/dynamic-text-input.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DynamicFormComponent,
    DynamicSelectInputComponent,
    DynamicTextInputComponent,
    DynamicControlInjectorPipe
  ],
  providers: [],
  exports: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
