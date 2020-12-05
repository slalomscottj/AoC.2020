import { readLines } from './fileLines';
import { Passport } from '../model/passport'

export async function * readPassports() {
    const iter = readLines('input.txt');

    let passport: Passport = {};

    for await (const line of iter) {
        if(line == "") {
            yield passport;
            passport = {};
        }

        const regex = /(\w{3}):([\w#]*)/g;
        let result = regex.exec(line);
        while(result) {
            passport[result[1]] = result[2];
            result = regex.exec(line);
        } 
    }
}