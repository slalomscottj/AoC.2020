import {readLines} from './iterator/fileLines';

export enum OpCode {
    nop,
    acc,
    jmp
}

export type Op = {
    opcode:OpCode,
    operand:number,
    exec?:boolean
}

export async function loadProgram() {
    const iter = readLines('input.txt');

    const prog = Array<Op>();

    for await (const line of iter) {
        const regex = /(\w{3}) ([+-]\d*)/;
        const result = regex.exec(line);
        if(result) {
            prog.push({
                opcode: OpCode[result[1] as keyof typeof OpCode],
                operand: Number.parseInt(result[2])
            });
        }
    }

    return prog;
}