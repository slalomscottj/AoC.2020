import { loadProgram, Op, OpCode } from './loader';

function runProgram(prog: Array<Op>) {
        let ip = 0, acc = 0, halt = false;

        do {

            let {opcode,operand,exec} = prog[ip];

            // check for prior execution
            if(exec) {
                console.log(`LOOP ip=${ip} acc=${acc}`);
                break;
            } else {
                prog[ip].exec = true;
            }

            // command processor
            switch(opcode) {
                case OpCode.acc:
                    console.log(`${ip}:${acc} acc ${operand}`);
                    acc+=operand;
                    ip+=1;
                    break;
                case OpCode.jmp:
                    console.log(`${ip}:${acc} jmp ${operand}`);
                    ip+=operand;
                    break;
                case OpCode.nop:
                    console.log(`${ip}:${acc} nop ${operand}`);
                    ip+=1;
                    break;
            }
        } while (true);
}

function patchProgram(prog: Array<Op>, n: number)
{
    // dirty deep copy array
    const json = JSON.stringify(prog);
    const result: Array<Op> = JSON.parse(json);

    let i = n;
    for(let idx = 0; idx < result.length; idx++) {
             // patch
             switch(result[idx].opcode) {
                case OpCode.jmp:
                    i--;
                    if(i === 0) {
                        result[idx].opcode = OpCode.nop;
                        return result;
                    }
                    break;
                case OpCode.nop:
                    i--;
                    if(i === 0) {
                        result[idx].opcode = OpCode.jmp;
                        return result;
                    }
                    break;
            }       
    }

    return result;
}

export async function process() {
    const prog = await loadProgram();

    for(let i=1; i <= prog.length; i++) {
        const patched = patchProgram(prog, i);
        runProgram(patched);
    }
}