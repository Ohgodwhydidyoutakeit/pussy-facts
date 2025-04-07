


import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
@Component({
    selector: 'feature-component',
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
        <mat-card appearance="outlined" class="fact">
            <mat-card-content>
                {{text()}}
            </mat-card-content>
        </mat-card>
    `,
    imports: [MatCardModule]
})
export class FeatureFactsComponent {
    text = input.required<string>()
}
