import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccessTokenValidGuard } from './access-token-valid/access-token-valid.guard';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [ AccessTokenValidGuard ]
})
export class GuardsModule { }
