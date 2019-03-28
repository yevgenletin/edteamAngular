import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialDemoComponent } from './material-demo/material-demo.component';
import { MatToolbarModule,
          MatButtonModule,
          MatExpansionModule
         } from '@angular/material';
import { MatIconModule } from '@angular/material/icon';
import { MaterialButtonComponent } from './material-button/material-button.component';

@NgModule({
  declarations: [MaterialDemoComponent, MaterialButtonComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatExpansionModule
  ],
  exports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatExpansionModule
  ],
})
export class MaterialModule { }
