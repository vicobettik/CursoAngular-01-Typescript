interface AudioPlayer {
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details
};

interface Details {
    author: string;
    year: number;
};

const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    songDuration: 36,
    song: "Mess",
    details: {
        author: "Ed sheeran",
        year: 2015
    }
};

const song = "Master";

const {
    song: anotherSong,
    songDuration: duration,
    // details: { author }
    details
} = audioPlayer;

const {author} = details;

// console.log(anotherSong);
// console.log(author);
// console.log(duration);

const dbz: string[] = ['goku', 'vegeta', 'trunks'];
const [,,trunks='No encontrado'] = dbz;

console.log(`Personaje 3: ${trunks}`);
