import { ValidatorFn, Validators } from "@angular/forms";


export const loginPasswordValodators: ValidatorFn[] = [
    Validators.minLength(5),
    Validators.maxLength(30),
]