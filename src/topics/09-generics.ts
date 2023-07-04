export const whatsMyType = <T>(argument: T): T => {
    return argument;
}

let amIString = whatsMyType<string>('Hola mundo');
let amINumber = whatsMyType<number>(1234);
let amIArray = whatsMyType<number[]>([1,2,3,4]);