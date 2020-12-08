import { readLines } from './fileLines';

export type Group = {
    yes: string;
    allYes: string;
    members: Array<string>;
};

function allYes(group: Group) {
    console.log('');
    let possible = '';
    
    let i = 0;
    for (const line of group.members) {
        i++;
        if(1 == i) {
            possible = line;
            console.log('* ' + possible);
        } else {
            console.log('* ' + possible + ' - ' + line);
            const filter = RegExp(`[^${possible}]`,'g');
            possible = line.replace(filter,'');
        }
    }
    console.log('---');
    return possible;
}

export async function * readGroups() {
    const iter = readLines('input.txt');

    let group: Group = { members: [], yes: '', allYes: '' };
    for await(const line of iter) {
        if(line.length != 0) {
            group.members.push(line);
            for (const char of line) {
                if(group.yes.indexOf(char) < 0) {
                    group.yes += char;
                }
            }
    } else {
            group.allYes = allYes(group);
            yield group;
            group = { members: [], yes: '', allYes: '' };
        }
    }
}