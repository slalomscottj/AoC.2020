import fs from 'fs';
import readline from 'readline';

async function * readLines() {
    const stream = fs.createReadStream('input.txt');
    const rl = readline.createInterface({
        input: stream
    });

    for await (const line of rl) {
        yield(line);
    }
}

async function run(run:number, rise:number) {
    const iter = readLines();

    let position = 0;
    let hits = 0;
    let row = 0;

    for await (const line of iter) {
        if(!(row % rise)) {
            if(line[position] == '#') {
                hits++;
            }
            
            position += run;
        }
        row++;
        position %= line.length;
    }

    console.log(`${row} ${position} ${hits}`);
    return hits;
}

async function main() {
    let accumulator = 1;
    accumulator *= await run(1,1);
    accumulator *= await run(3,1); // First Half
    accumulator *= await run(5,1);
    accumulator *= await run(7,1);
    accumulator *= await run(1,2);
    console.log(accumulator);
}

main();