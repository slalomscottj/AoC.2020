import { readLines } from './fileLines';

export type ColorQuant = {
    quant: number,
    color: string
}
export type Rule = {
    color: string,
    contains: Array<ColorQuant>
};

export async function * readRules() {
    const iter = readLines('input.txt');
    const regex = /(?<quant>\d)? ?(?<color>\w* \w*) bag/g;

    for await(const line of iter) {
        const result: Rule = {
            color: '',
            contains: []
        };

        let i = 0;
        let match: RegExpExecArray | null;
        while(match = regex.exec(line)) {
            i++;
            if(i==1 && match.groups) {
                result.color = match.groups.color;             
            } else if(match.groups) {
                const quant = Number.parseInt(match.groups.quant);
                if(quant) {
                    result.contains.push({
                        quant: quant,
                        color: match.groups.color
                    });
                }
            }
        }
        yield result;
    }
}
