import fs from 'fs';
import readline from 'readline';

const array = new Array<number>();

async function * readLines() {
    const stream = fs.createReadStream('input.txt');
    const rl = readline.createInterface({
        input: stream
    });

    for await (const line of rl) {
        yield(line);
    }
}

let pattern = /(\d*)-(\d*) (\w): (\w*)/i

// type struct1 = {
//     min: number,
//     max: number,
//     letter: string,
//     password: string,
//     valid?: boolean
// }

type struct2 = {
    indexA: number,
    indexB: number,
    letter: string,
    password: string,
    valid?: boolean
}

async function * readStructs() {
    const iter = readLines();

    for await (const line of iter) {
        let match = pattern.exec(line);
        if(match) {
            let [,min,max,letter,password] = match;
            // let result1:struct1 = {
            //     min:Number.parseInt(min),
            //     max:Number.parseInt(max),
            //     letter,
            //     password
            // };
            let result2:struct2 = {
                indexA:Number.parseInt(min),
                indexB:Number.parseInt(max),
                letter,
                password
            }
            result2.valid = validate2(result2);
            
            // console.log(`${result.min}-${result.max} ${result.letter}: ${result.password}: ${result.valid}`);
            yield result2;
        }
    }
}

// function validate(param: struct1):boolean {
//     let i = 0;
//     for (const c of param.password) {
//         if( c == param.letter) {
//             i++;
//         }
//     }
//     return param.min <= i && i <= param.max;
// }

function validate2(param: struct2):boolean {
    let test = 0;
    test += param.password[param.indexA-1] == param.letter ? 1 : 0;
    test += param.password[param.indexB-1] == param.letter ? 1 : 0;
    return 1 == test;
}

async function main() {
    const iter = readStructs();

    let i =0;
    for await (const value of iter) {
        if (value.valid) i++;
    }

    console.log(i);

}

main();