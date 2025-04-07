

import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { FactsActions } from './facts.actions';
import { catchError, exhaustMap, map, of, withLatestFrom } from 'rxjs';
import { FactsDataService } from '../infrastructure/facts.data-service';
import { Store } from '@ngrx/store';
import { FactsQuery } from './facts.selectors';
import { RemoveDuplicatesFromTheSecondArray } from '../domain/functions/remove-duplicates';



const getFacts = createEffect(
    (actions$ = inject(Actions), factsDataService = inject(FactsDataService)) => {
        return actions$.pipe(
            ofType(FactsActions.requestFacts),
            exhaustMap((request) => {
                return factsDataService.requestFacts(request.payload).pipe(
                    map((data) => FactsActions.getFactsSuccess({ payload: data })),
                    catchError((err) => of(FactsActions.getFactsFailed({ payload: err })))
                )
            }

            )
        )
    },
    { functional: true })


const getMoreFacts = createEffect(
    (actions$ = inject(Actions), factsDataService = inject(FactsDataService), store = inject(Store)) => {
        return actions$.pipe(
            ofType(FactsActions.requestMoreFacts),
            withLatestFrom(store.select(FactsQuery.selectFacts)),
            exhaustMap(([request, currentFacts]) => {
                return factsDataService.requestFacts(request.payload).pipe(
                    map((data) => {
                        const deduped = RemoveDuplicatesFromTheSecondArray(currentFacts, data.data)
                        return FactsActions.getMoreFactsSuccess({ payload: { data: deduped } })
                    }),
                    catchError((err) => of(FactsActions.getFactsFailed({ payload: err })))
                )
            }

            )
        )
    },
    { functional: true })




export const FactsEffects = {
    getFacts,
    getMoreFacts
}
