export default class TestTask1 {
    static messageSteps: string[] = ['start', 'connect', 'message', 'end'];
    
    public static getResult(inputWords: string[]): number {
        let sentMessagesCount: number = 0;
        let currentStepNum: number = 0;

        inputWords.forEach(step => {
            if (step === 'start') currentStepNum = 0;
            if (step === this.messageSteps[currentStepNum]) {
                if (currentStepNum === 3) {
                    sentMessagesCount += 1;
                    currentStepNum = 0;
                } else {
                    currentStepNum += 1;
                }
            } else {
                currentStepNum = 0;
            }
        })

        return sentMessagesCount;
    }
}
