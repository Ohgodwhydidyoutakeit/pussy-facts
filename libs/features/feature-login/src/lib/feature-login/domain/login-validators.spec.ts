import { FormControl } from '@angular/forms';
import { loginPasswordValodators } from './login-validators';

describe('loginPasswordValodators', () => {
    let control: FormControl;

    beforeEach(() => {
        control = new FormControl('');
    });

    it('should return an error if password is less than 5 characters long', () => {
        control.setValue('1234');
        const errors = loginPasswordValodators.reduce((acc, validator) => {
            const error = validator(control);
            return error ? { ...acc, ...error } : acc;
        }, {});

        expect(errors).toEqual({ minlength: { requiredLength: 5, actualLength: 4 } });
    });

    it('should return an error if password is more than 30 characters long', () => {
        control.setValue('a'.repeat(31));
        const errors = loginPasswordValodators.reduce((acc, validator) => {
            const error = validator(control);
            return error ? { ...acc, ...error } : acc;
        }, {});

        expect(errors).toEqual({ maxlength: { requiredLength: 30, actualLength: 31 } });
    });

    it('should return no error if password is between 5 and 30 characters long', () => {
        control.setValue('validPass');
        const errors = loginPasswordValodators.reduce((acc, validator) => {
            const error = validator(control);
            return error ? { ...acc, ...error } : acc;
        }, {});

        expect(errors).toEqual({});
    });

});
