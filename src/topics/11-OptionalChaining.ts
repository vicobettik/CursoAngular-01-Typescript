export interface Passenger{
    name:string;
    children?: string[]
}

const passenger1: Passenger = {
    name: "Victor"
};

const passenger2: Passenger = {
    name: "Melissa",
    children: ['Teresita', 'Frida']
};

const printChildren = (passenger: Passenger): number => {
    if (!passenger.children) {
        return 0;
    }
    const howManyChildren = passenger.children!.length;
    console.log(howManyChildren);
    return howManyChildren;
}

printChildren(passenger2);