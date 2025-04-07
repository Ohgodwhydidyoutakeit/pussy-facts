import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';

import { TranslocoDirective } from '@jsverse/transloco';
import { AuthFacade } from '@pussy-facts/auth';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'cmp-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  imports: [TranslocoDirective, MatToolbarModule, MatButtonModule, RouterModule],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class NavbarComponent {

  readonly #authFacade = inject(AuthFacade)

  isLoggedIn = computed(() => {
    return this.#authFacade.isLoggedIn()
  })

  logout() {
    this.#authFacade.logout()
  }

}
