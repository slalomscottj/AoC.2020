import { readLines } from "./fileLines";

export async function * readInts(filespec: string) {
    const iter = readLines(filespec);

    for await (const line of iter) {
        yield(Number.parseInt(line));
    }
}