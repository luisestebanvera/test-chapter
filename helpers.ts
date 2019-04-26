export const DEFAULT_VALUE = 0;

export function multiply(param1, param2): number {

    if ((typeof param1 !== 'number') || typeof param2 !== 'number'){
        return DEFAULT_VALUE;
    }

    return isNullOrUndefined(param1) || isNullOrUndefined(param2) ? DEFAULT_VALUE : param1 * param2;
}


function isNullOrUndefined(el: any): boolean {
    return el === null || el === undefined;
}




