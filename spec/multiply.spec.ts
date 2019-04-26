import 'jasmine';
import { multiply } from '../helpers';

describe('Prueba de multiplicar', () => {

    it('Debe regresar la multiplicación', () => {

       expect(multiply(2, 3)).toBe(6);

    });

});


