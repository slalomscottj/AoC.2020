import { readGroups } from './iterator/groups';

export async function process() {
    const iter = readGroups();

    // check in passengers
    let sum = 0;
    for await (const group of iter) {
        // Part 01: console.log(group.yes);
        console.log(group.allYes);
        // Part 01: sum += group.yes.length;
        sum += group.allYes.length;
    }
    console.log(sum);
}
