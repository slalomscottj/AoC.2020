import { readBoardingPasses } from './iterator/boardingPasses';



export async function process() {
    const iter = readBoardingPasses();

    // init occupied array
    const occupied = Array<Array<number>>(128);
    for(let i = 0; i < 128; i++) {
        occupied[i] = Array<number>(8);
    }

    // check in passengers
    for await (const passport of iter) {
        const { row, col, seatId } = passport;
        occupied[row][col] = 1;
    }

    // find empty seat
    for(let i = 0; i < 128; i++) {
        for(let j = 0; j < 8; j++) {
            if(!occupied[i][j])
                console.log(`${i} ${j} ${i * 8 + j}`);
        }
    }

}
