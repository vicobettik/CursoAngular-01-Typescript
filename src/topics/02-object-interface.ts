const skills: string[] = ['Bash', 'Counter', 'Healing'];

interface Character {
    name: string;
    hp: number;
    skills: string[];
    hometown?: string;
};

const vicobettik: Character = {
    name: 'Vicobettik',
    hp: 100,
    skills: ['bash', 'healing']
};

vicobettik.hometown = 'cdmx';

console.table(vicobettik)



export {};