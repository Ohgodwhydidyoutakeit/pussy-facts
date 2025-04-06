import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';

import { TranslocoDirective } from '@jsverse/transloco';
@Component({
  selector: 'cmp-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  imports: [TranslocoDirective, MatToolbarModule],
})
export class NavbarComponent {



}
