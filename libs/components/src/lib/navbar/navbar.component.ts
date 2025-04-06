import { Component } from '@angular/core';
import { TranslocoDirective } from '@jsverse/transloco';
import { MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'cmp-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  imports: [TranslocoDirective, MatButtonModule],
})
export class NavbarComponent { }
