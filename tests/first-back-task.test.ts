import { expect } from 'chai';
import Task1 from '../tasks/first-back-task';

describe("test 1 task", () => {
    it(`['start', 'connect', 'message', 'end'] = 1`, () => {
        expect(Task1.getResult(['start', 'connect', 'message', 'end'])).to.be.equal(1);
    })

    it(`['start', 'connect', 'message', 'end', 'start', 'connect', 'message', 'end', 'start', 'connect', 'message'] = 2`, () => {
        expect(Task1.getResult(['start', 'connect', 'message', 'end', 'start', 'connect', 'message', 'end', 'start', 'connect', 'message'])).to.be.equal(2);
    })

    it(`['start', 'connect', 'message', 'end', 'start', 'connect', 'message', 'end'] = 2`, () => {
        expect(Task1.getResult(['start', 'connect', 'message', 'end', 'start', 'connect', 'message', 'end'])).to.be.equal(2);
    })

    it(`['start', 'connect', 'message', 'end', 'start', 'connect'] = 1`, () => {
        expect(Task1.getResult(['start', 'connect', 'message', 'end', 'start', 'connect'])).to.be.equal(1);
    })

    it(`['start', 'connect', 'message', 'end', 'start'] = 1`, () => {
        expect(Task1.getResult(['start', 'connect', 'message', 'end', 'start'])).to.be.equal(1);
    })

    it(`['connect', 'message', 'end', 'start', 'connect', 'message'] = 0`, () => {
        expect(Task1.getResult(['connect', 'message', 'end', 'start', 'connect', 'message'])).to.be.equal(0);
    })

    it(`['start', 'connect', 'message', 'end', 'start', 'start', 'connect', 'message', 'end', 'start', 'connect', 'message', 'end', 'connect', 'message'] = 3`, () => {
        expect(Task1.getResult(['start', 'connect', 'message', 'end', 'start', 'start', 'connect', 'message', 'end', 'start', 'connect', 'message', 'end', 'connect', 'message'])).to.be.equal(3);
    })

    it(`['start', 'start', 'connect', 'message', 'end', 'end', 'start', 'start', 'connect', 'message', 'end'] = 2`, () => {
        expect(Task1.getResult(['start', 'start', 'connect', 'message', 'end', 'end', 'start', 'start', 'connect', 'message', 'end'])).to.be.equal(2);
    })
})