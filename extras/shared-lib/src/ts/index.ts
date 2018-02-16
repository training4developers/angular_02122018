// TODO: Import and register below the Angular parts to be included in the module
import { CapitalizePipe } from "./pipes/capitalize.pipe";
import { AppMenuComponent } from "./components/menu/menu.component";
import { Cars } from "./services/cars.service";
import { Car } from "./models/car";

import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

export {
  CapitalizePipe,
  AppMenuComponent,
  Cars,
  Car,
};

// TODO: be sure to update the Angular module name to reflect the name of your package
@NgModule({
  imports: [ CommonModule ],
  declarations: [ CapitalizePipe, AppMenuComponent ],
  providers: [ Cars ],
  exports: [ CapitalizePipe, AppMenuComponent ],
})
export class SharedLibModule { }

export default SharedLibModule;