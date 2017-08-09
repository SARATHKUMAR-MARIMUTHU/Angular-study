import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms'; // <-- NgModel lives here


import { AppComponent } from './app.component';
import { SiComponent } from './si/si.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { CustomPropertybindingComponent } from './custom-propertybinding/custom-propertybinding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { CustomEventbindingComponent } from './custom-eventbinding/custom-eventbinding.component';
import { TwoWaybindingComponent } from './two-waybinding/two-waybinding.component';

@NgModule({
  declarations: [
    AppComponent,
    SiComponent,
    PropertyBindingComponent,
    CustomPropertybindingComponent,
    EventBindingComponent,
    CustomEventbindingComponent,
    TwoWaybindingComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
