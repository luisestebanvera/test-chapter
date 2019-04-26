import 'jasmine';
import { DEFAULT_VALUE, multiply } from '../helpers';

describe('Prueba de multiplicar', () => {

    it('Debe regresar la multiplicación', () => {

       expect(multiply(2, 3)).toBe(6);

       expect(multiply(2, 5)).toBe(10);

       expect(multiply(3, 0)).toBe(0);

    });

    it('Debe regresar 0 si los parametros son nulos o indefinidos', () => {

        expect(multiply(null, 3)).toBe(DEFAULT_VALUE);

        expect(multiply(3, null)).toBe(DEFAULT_VALUE);

        expect(multiply(undefined, 1)).toBe(DEFAULT_VALUE);

        expect(multiply(2, undefined)).toBe(DEFAULT_VALUE);

        expect(multiply(null, undefined)).toBe(DEFAULT_VALUE);

        expect(multiply(undefined, null)).toBe(DEFAULT_VALUE);

        expect(multiply(undefined, undefined)).toBe(DEFAULT_VALUE);

        expect(multiply(null, null)).toBe(DEFAULT_VALUE);

    });

    it('Debe regresar 0 si los parametros son diferenres a tipo number', () => {

        expect(multiply('hola', 3)).toBe(DEFAULT_VALUE);

        expect(multiply(45, 'hey')).toBe(DEFAULT_VALUE);

        expect(multiply('tomalo', 'hey')).toBe(DEFAULT_VALUE);

        expect(multiply(true, 'hey')).toBe(DEFAULT_VALUE);

        expect(multiply('hey', true)).toBe(DEFAULT_VALUE);

        expect(multiply([0, 1 ,2 ], false)).toBe(DEFAULT_VALUE);

        expect(multiply(true, { name: 'tomalo' })).toBe(DEFAULT_VALUE);

        expect(multiply(2, false)).toBe(DEFAULT_VALUE);

    });

});


