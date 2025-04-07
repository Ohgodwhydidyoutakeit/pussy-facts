import { ChangeDetectionStrategy, Component } from '@angular/core';
import {  FeatureFactsContainerComponent } from "@pussy-facts/feature-facts"
@Component({
  selector: 'pages-facts-page',
  templateUrl: './facts-page.component.html',
  styleUrl: './facts-page.component.scss',
  imports: [FeatureFactsContainerComponent],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class FactsPageComponent { }
