import { expect } from 'chai';
import Task2 from '../tasks/second-back-task';

describe("test 2 task", () => {
    it('7^3 = 3', () => {
        expect(Task2.getResult(7, 3)).to.be.equal(3);
    })

    it('5^123456789 = 5', () => {
        expect(Task2.getResult(5, 123456789)).to.be.equal(5);
    })

    it('7^2 = 9', () => {
        expect(Task2.getResult(7, 2)).to.be.equal(9);
    })

    it('1^10000 = 1', () => {
        expect(Task2.getResult(1, 10000)).to.be.equal(1);
    })

    it('10000^1 = 1', () => {
        expect(Task2.getResult(10000, 1)).to.be.equal(0);
    })

    it('123^99 = 7', () => {
        expect(Task2.getResult(123, 99)).to.be.equal(7);
    })

    it('146^75 = 6', () => {
        expect(Task2.getResult(146, 75)).to.be.equal(6);
    })

    it('22^23 = 8', () => {
        expect(Task2.getResult(22, 23)).to.be.equal(8);
    })
})