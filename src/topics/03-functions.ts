function addNumbers(a: number,b: number){
    return a + b;
}

const addNumbersArrow = (a: number, b: number): string => {
    return (a + b).toString();
} 

const multiply = (firstNumber: number, secondNumber?: number, base: number = 2) => {
    return firstNumber * base;
}

interface Character {
    name: string;
    hpPoints: number;
    showHp: () => void;
}

// const result = addNumbers(1,2);
// const result2 = addNumbersArrow(1,2);
// const resultMultiply = multiply(5)


const healCharacter = (character: Character, amount: number) => {
    character.hpPoints += amount;
}

const vicobettik: Character = {
    name: "vicobettik",
    hpPoints: 50,
    showHp: function (): void {
        console.log(`Puntos de vida ${this.hpPoints}`)
    }
};

vicobettik.showHp();
healCharacter(vicobettik, 20);
vicobettik.showHp();

export {};