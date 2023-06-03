export default class TestTask3 {
    public static getResult(str: string): string {
        function getStr(iterationNumber: number): [string, number] {
            let result: string = '';

            while (true) {
                if (str[iterationNumber] === '}' || 
                    str[iterationNumber] === undefined) 
                return [result, iterationNumber + 1];
                if (str[iterationNumber + 1] === '{') {
                    let subStr: string;
                    let repeatedCount: number = Number(str[iterationNumber]);
                    [subStr, iterationNumber] = getStr(iterationNumber + 2);
                    result += subStr.repeat(repeatedCount);
                    continue;
                }

                result += str[iterationNumber];
                iterationNumber++;
            }
        }

        let [result,] = getStr(0);
        return result;
    }
}