import fs from 'fs';
import readline from 'readline';

export async function * readLines(filespec: string) {
    const stream = fs.createReadStream(filespec);
    const rl = readline.createInterface({
        input: stream
    });

    var line: string | undefined;
    for await (const iline of rl) {
        line=iline;
        yield(line);
    }
    if(line != "")
        yield("");
}