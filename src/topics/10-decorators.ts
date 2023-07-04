const classDecorator = (constructor:any) => {
    return class extends constructor {
        newProperty = 'New property',
        hello = "override"
    }
}

@classDecorator
class SuperClass {
    public myPropertie: string = 'Abc123'

    print(){
        console.log('Hola mundo');
    }
}

console.log(SuperClass);

const myclass = new SuperClass();
console.log(myclass);