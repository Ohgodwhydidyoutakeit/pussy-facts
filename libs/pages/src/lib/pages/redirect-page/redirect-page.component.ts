import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { TranslocoDirective } from '@jsverse/transloco';
import { getImgAssetPath } from '@pussy-facts/shared';

@Component({
  selector: 'pages-redirect-page',
  templateUrl: './redirect-page.component.html',
  styleUrl: './redirect-page.component.scss',
  imports: [TranslocoDirective, RouterModule, MatButtonModule],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class RedirectPageComponent {


  imagePath = getImgAssetPath("404.jpg")

}
