import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LoginFormComponent } from '@pussy-facts/feature-login'
@Component({
  selector: 'pages-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
  imports: [LoginFormComponent],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class HomePageComponent { }
