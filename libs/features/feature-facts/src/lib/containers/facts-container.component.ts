import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { FeatureFactsPresenter } from '../application/feature-facts.presenter';
import { toSignal } from '@angular/core/rxjs-interop';
import { FeatureFactsComponent } from './components/fact-component';
import { ScrollingModule } from '@angular/cdk/scrolling';


@Component({
    selector: 'feature-facts-container',
    templateUrl: './facts-container.component.html',
    styleUrl: './facts-container.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [FeatureFactsComponent, ScrollingModule]
})
export class FeatureFactsContainerComponent implements OnInit {

    readonly #factsPresenter = inject(FeatureFactsPresenter)

    facts = toSignal(this.#factsPresenter.getFacts$)

    ngOnInit(): void {
        this.#factsPresenter.requestFacts()
    }

    test(event: any) {
        console.log("dawiudhawd", event)
    }
}
