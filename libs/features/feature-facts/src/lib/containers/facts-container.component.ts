import { CdkScrollable, ScrollingModule } from '@angular/cdk/scrolling';
import { AfterViewInit, ChangeDetectionStrategy, Component, inject, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { filter, map, Subject, takeUntil, throttleTime } from 'rxjs';
import { FeatureFactsPresenter } from '../application/feature-facts.presenter';
import { FeatureFactsComponent } from './components/fact-component';



const TROTTLE_TIME = 1000
const SCROLLBAR_REQ_OFFSET = 1000

@Component({
    selector: 'feature-facts-container',
    templateUrl: './facts-container.component.html',
    styleUrl: './facts-container.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [FeatureFactsComponent, ScrollingModule]
})
export class FeatureFactsContainerComponent implements OnInit, AfterViewInit, OnDestroy {

    @ViewChild(CdkScrollable)
    viewport!: CdkScrollable;

    // nornally whould have used a directive, but we have a single component here
    private destroy$ = new Subject<void>();
    readonly #factsPresenter = inject(FeatureFactsPresenter)

    facts = toSignal(this.#factsPresenter.getFacts$, { initialValue: [] })
    isLoading = toSignal(this.#factsPresenter.getIsLoading$, { initialValue: true })


    ngOnInit(): void {
        this.#factsPresenter.requestFacts()
    }

    ngAfterViewInit(): void {
        this.viewport.elementScrolled().pipe(
            throttleTime(TROTTLE_TIME),
            map(() => this.viewport.measureScrollOffset('bottom')),
            filter(offset => offset < SCROLLBAR_REQ_OFFSET),
            takeUntil(this.destroy$)
        ).subscribe(() => {
            this.#factsPresenter.nextBatch()
        })
    }

    ngOnDestroy(): void {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
