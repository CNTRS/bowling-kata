export class BowlingGame {
    private rolls: number[] = [];

    roll(pins: number): void {
        this.rolls.push(pins);
    }

    calculateTotalScore(): number {
        return this.rolls.reduce((score, pins) => {
            return score + pins;
        }, 0);
    }
}
