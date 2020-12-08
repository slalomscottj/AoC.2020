import { ColorQuant, readRules } from './iterator/rules';

type Rule = {
    contains: Array<ColorQuant>
};
type Rules = {[index:string]:Rule};

export async function process() {
    const iter = readRules();

    const rules:Rules = {};

    for await (const rule of iter) {
        rules[rule.color] = { contains: rule.contains };
    }

    let i = 0;
    for(const rule in rules) {
        if(canContain(rule, 'shiny gold', rules)) i++;
    }
    console.log(i);

    console.log(countBags('shiny gold', rules, 1));
}

export function canContain(container:string, bag:string, rules:Rules) {
    const rule = rules[container];
    for(const cq in rule.contains) {
        const { color } = rule.contains[cq];
        if(color === bag) return true;
        else {
            const result = canContain(color, bag, rules);
            if ( result === true ) return true;
        }
    }
    return false;
}

export function countBags(container:string, rules:Rules, level:number) {
    let result = 0;
    const r = rules[container];
    if(r==undefined) {
        console.log(container);
        throw -1;
    }
    for(const index in r.contains) {
        let { quant, color } = r.contains[index];
        console.log(' '.repeat(level) + `${quant} ${color}`);
        result += quant;
        result += quant * countBags(color, rules, level + 1);
    };
    return result;
}
