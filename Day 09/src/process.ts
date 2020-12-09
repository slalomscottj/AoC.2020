import { readInts } from './iterator/ints';

const preamble = 25;

function isValid(queue:Array<number>, n:number) {
    for(let x = 0; x  < preamble; x++) {
        for(let y = x + 1; y < preamble; y++) {
            if(queue[x] + queue[y] == n) {
                return true;
            }
        }
    }
    return false;
}

export async function process() {
    const iter = readInts('input.txt');

    const queue = Array<number>(preamble);

    for await (const n of iter) {
        if(queue[0] != undefined) {
            if(!isValid(queue,n)) {
                console.log(`Invalid: ${n}`);
                process2(n);
                break;
            }
        }
        queue.shift();
        queue.push(n);
    }

}

export async function process2(target: number) {
    const list = Array<number>();

    const iter = readInts('input.txt');
    for await (const n of iter) {
        list.push(n);
    }

    for(let x = 0; x  < list.length; x++) {
        for(let y = x + 1; y < list.length; y++) {
            let acc = 0;

            let run = Array<number>();
            for(let z = x; z <= y; z++) {
                run.push(list[z]);
                acc += list[z];
            }
            if(acc == target) {
                let min = Math.min(...run), max = Math.max(...run);
                console.log(`Weakness: ${min} ${max} = ${min + max}`);
                return;
            }
        }
    }
}
