
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AuthDataService } from '../infrastructure/auth.data-service';
import { inject } from '@angular/core';
import { AuthActions } from './auth.actions';
import { exhaustMap, map, tap } from 'rxjs';
import { LOCAL_STORAGE_AUTH_KEY } from '../keys/local-storage-key';
import { Router } from '@angular/router'


const login = createEffect(
    (actions$ = inject(Actions), authDataService = inject(AuthDataService)) => {
        return actions$.pipe(
            ofType(AuthActions.login),
            exhaustMap((data) =>
                authDataService.login(data.payload).pipe(
                    map((data) => AuthActions.loginSuccess({ payload: data })),
                    // catchError((error: { message: string }) =>
                    //     of(ActorsApiActions.actorsLoadedFailure({ errorMsg: error.message }))
                    // )
                )
            )
        )
    },
    { functional: true })




const redirectAfterLogin = createEffect(
    (actions$ = inject(Actions), router = inject(Router)) => {
        return actions$.pipe(
            ofType(AuthActions.loginSuccess),
            tap((data) => {
                router.navigateByUrl('/facts')
            })

        )
    },
    { functional: true, dispatch: false })


const redirectAfterLogout = createEffect(
    (actions$ = inject(Actions), router = inject(Router)) => {
        return actions$.pipe(
            ofType(AuthActions.logout),
            tap((data) => {
                router.navigateByUrl('/')
            })

        )
    },
    { functional: true, dispatch: false })



const removeLogin = createEffect(
    (actions$ = inject(Actions)) => {
        return actions$.pipe(
            ofType(AuthActions.logout),
            tap(() => {
                localStorage.removeItem(LOCAL_STORAGE_AUTH_KEY)
            })

        )
    },
    { functional: true, dispatch: false })



const saveLogin = createEffect(
    (actions$ = inject(Actions)) => {
        return actions$.pipe(
            ofType(AuthActions.login),
            map((data) => {
                localStorage.setItem("login", data.payload.login)
            })

        )
    },
    { functional: true, dispatch: false })



export const AuthEffects = {
    login,
    saveLogin,
    removeLogin,
    redirectAfterLogin,
    redirectAfterLogout
}