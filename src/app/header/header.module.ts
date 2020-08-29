import { NgModule } from '@angular/core';
import { HeaderComponent } from './header.component';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';

@NgModule({
  exports: [HeaderComponent],
  declarations: [HeaderComponent],
  imports: [MatButtonModule, RouterModule],
})
export class HeaderModule {}
