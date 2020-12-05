import { Passport } from '../model/passport';

export function validateStringInt(value: string | undefined, min: number, max: number) {
    if(!value) {
        return false;
    }
    
    try {
        let nvalue = Number.parseInt(value);

        if(nvalue < min) {
            return false;
        } 
        if(nvalue > max) {
            return false;
        }

        return true;
    } catch {
        return false;
    }
}
export function validateHeight(svalue: string | undefined) {
    if(!svalue) {
        return false;
    }
    let nvalue = svalue.slice(0,-2);
    switch(svalue.slice(-2)) {
        case "cm": return validateStringInt(nvalue, 150, 193);
        case "in": return validateStringInt(nvalue, 59, 76);
        default:
            return false;
    }
}
export function validateHair(value: string | undefined) {
    if(!value) {
        return false;
    }
    if(!/#[a-f0-9]{6}/.test(value)) {
        return false;
    }

    return true;
}
export function validateEye(value: string | undefined) {
    if(!value) {
        return false;
    }
    if(!/amb|blu|brn|gry|grn|hzl|oth/.test(value)) {
        return false;
    }

    return true;
}
export function validatePassportId(value: string | undefined) {
    if(!value) {
        return false;
    }
    if(value.length != 9) {
        return false;
    }
    if(!/\d{9}/.test(value)) {
        return false;
    }

    return true;
}
export function validatePassport(passport: Passport): boolean {
    let { byr, iyr, eyr, hgt, hcl, ecl, pid, cid } = passport;
    
    let result = true;
    if (!validateStringInt(byr,1920,2002)) {
        result = false;
    }
    if (!validateStringInt(iyr,2010,2020)) {
        result = false;
    }
    if (!validateStringInt(eyr,2020,2030)) {
        result = false;
    } 
    if (!validateHeight(hgt)) {
        result = false;
    }
    if (!validateHair(hcl)) {
        result = false;
    }
    if (!validateEye(ecl)) {
        result = false;
    }
    if (!validatePassportId(pid)) {
        result = false;
    }

    return result;
}
