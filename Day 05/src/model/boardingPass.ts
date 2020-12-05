export type BoardingPass = {
    row: number,
    col: number,
    seatId: number
}

export function deserialize(data : string) : BoardingPass {
    
    let index = 0;
    let row = 0, col = 0;

    let increment = 64;
    while(index < 7) {
        row += data[index] === 'B' ? increment : 0;
        increment /= 2;
        index++;
    }

    increment = 4;
    while(index < 10) {
        col += data[index] === 'R' ? increment : 0;
        increment /= 2;
        index++;
    }
    return { row: row, col: col, seatId: row * 8 + col };
}