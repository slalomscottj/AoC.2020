import { readPassports } from './iterator/passports';
import { validatePassport } from './validator/passport';

export async function process() {
    const iter = readPassports();

    let row = 0;

    for await (const passport of iter) {
       
        if(validatePassport(passport)) {
            row++;
        }
    }

    console.log(`${row} valid passports.`);
}
