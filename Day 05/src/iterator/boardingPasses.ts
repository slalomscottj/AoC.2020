import { readLines } from './fileLines';
import { deserialize } from '../model/boardingPass'

export async function * readBoardingPasses() {
    const iter = readLines('input.txt');
    for await (const line of iter) {
        yield deserialize(line);
    }
}