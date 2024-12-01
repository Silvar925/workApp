export default function calculatePoints(answer: object[]): number {
    let points = 0;
    answer.forEach((item: any) => {
        if (item.answer.correct) {
            points += 1;
        }
    });
    return points;
}