import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from "@pussy-facts/components"
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [RouterModule, NavbarComponent],
})
export class AppComponent {
}
