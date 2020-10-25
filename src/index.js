const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(arr) {
    const splitArr = arr.split('**********');
    const result = [];
    splitArr.forEach( item => {
        const words = [];
        for (let i = 0; i < item.length / 10; i++) {
            let itemSlice = item.slice(10 * i, 10 * (i + 1));
            let letter = '';
            for (let k = 0; k < 5; k++) {
                const character = itemSlice.slice(0, 2);
                itemSlice = itemSlice.slice(2);
                if (character === '10') {
                    letter += '.';
                } else if (character === '11') {
                    letter += '-';
                }
            }
            words.push(MORSE_TABLE[letter]);
        }
        result.push(words.join(''));
    });

    return result.join(' ');
}

module.exports = {
    decode
}