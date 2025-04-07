

import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { FactsActions } from './facts.actions';
import { catchError, exhaustMap, map, of } from 'rxjs';
import { FactsDataService } from '../infrastructure/facts.data-service';



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


export const FactsEffects = {
    getFacts
}
