import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialDemoComponent } from './material-demo/material-demo.component';
import { MatToolbarModule,
          MatButtonModule,
          MatExpansionModule,
          MatInputModule
         } from '@angular/material';
import { MatIconModule } from '@angular/material/icon';
import { MaterialButtonComponent } from './material-button/material-button.component';
import { MaterialInputComponent } from './material-input/material-input.component';

@NgModule({
  declarations: [MaterialDemoComponent, MaterialButtonComponent, MaterialInputComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatExpansionModule,
    MatInputModule
  ],
  exports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatExpansionModule,
    MatInputModule
  ],
})
export class MaterialModule { }
