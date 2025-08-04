export class BowlingGame {
    private readonly maxScorePerFrame = 10;
    private readonly maxFrames = 10;
    private rolls: number[] = [];

    roll(pins: number): void {
        this.rolls.push(pins);
    }

    calculateTotalScore(): number {
        let totalScore = 0;
        let rollIndex = 0;

        for (let frameIndex = 0; frameIndex < this.maxFrames; frameIndex++) {
            const frameScore = this.calculateFrameScore({ totalScore, rollIndex });
            totalScore = frameScore.totalScore;
            rollIndex = frameScore.rollIndex;
        }

        return totalScore;
    }

    private calculateFrameScore({ totalScore, rollIndex }: { totalScore: number, rollIndex: number }) {

        if (this.isStrike(rollIndex)) {
            return {
                totalScore: totalScore + this.maxScorePerFrame + this.strikeBonus(rollIndex),
                rollIndex: rollIndex + 1
            };
        }
        if (this.isSpare(rollIndex)) {
            return {
                totalScore: totalScore + this.maxScorePerFrame + this.spareBonus(rollIndex),
                rollIndex: rollIndex + 2
            };
        }
        return {
            totalScore: totalScore + this.sumBallsInFrame(rollIndex),
            rollIndex: rollIndex + 2
        }
    }
    private isStrike(frameIndex: number): boolean {
        return this.rolls[frameIndex] === this.maxScorePerFrame;
    }
    private isSpare(frameIndex: number): boolean {
        return this.sumBallsInFrame(frameIndex) === this.maxScorePerFrame;
    }
    private strikeBonus(frameIndex: number): number {
        return this.rolls[frameIndex + 1] + this.rolls[frameIndex + 2];
    }
    private spareBonus(frameIndex: number): number {
        return this.rolls[frameIndex + 2];
    }
    private sumBallsInFrame(frameIndex: number): number {
        return this.rolls[frameIndex] + this.rolls[frameIndex + 1];
    }
}
