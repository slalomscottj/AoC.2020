import fs from 'fs';
import readline from 'readline';

const array = new Array<number>();

async function* readLines() {
    const stream = fs.createReadStream('input.txt');
    const rl = readline.createInterface({
        input: stream
    });

    for await (const line of rl) {
        yield(line);
    }
}

async function* readInts() {
    const iter = readLines();

    for await (const line of iter) {
        yield(Number.parseInt(line));
    }
}

export { readLines, readInts }

async function main() {
    const array = Array<number>();
    
    const iter = readInts();

    for await (const value of iter) {
        array.push(value);
    }

    const len = array.length;
        for (var i=0; i<len-1; i++) {
        for (var j=i+1; j<len; j++) {
        for (var k=j+1; k<len; k++) {
            var a = array[i];
            var b = array[j];
            var c = array[k];
            if(a + b + c == 2020) {
                console.log(a*b*c);
            }
        } 
        }
        }
}

main();