export default class TestTask2 {
    public static getResult(a: number, b: number): number {
        let lastFigure: number = Number(String(a).slice(-1));
        let decreasedPow: number = b % 4 == 0 ? 4 : b % 4;

        return Number(String(lastFigure ** decreasedPow).slice(-1));
    }
}