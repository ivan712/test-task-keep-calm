import { expect } from 'chai';
import Task3 from '../tasks/third-back-task';

describe("test 3 task", () => {
    it('4{2} = 2222', () => {
        expect(Task3.getResult('4{2}')).to.be.equal('2222');
    })

    it('4{93{2}} = 9222922292229222', () => {
        expect(Task3.getResult('4{93{2}}')).to.be.equal('9222922292229222');
    })

    it('2{4}3{23} = 44232323', () => {
        expect(Task3.getResult('2{4}3{23}')).to.be.equal('44232323');
    })

    it('5{1}3{2{1}} = 11111111111', () => {
        expect(Task3.getResult('5{1}3{2{1}}')).to.be.equal('11111111111');
    })

    it('2{2{21{5{3}}}}6{7} = 233333233333233333233333777777', () => {
        expect(Task3.getResult('2{2{21{5{3}}}}6{7}')).to.be.equal('233333233333233333233333777777');
    })

    it('12{12} = 11212', () => {
        expect(Task3.getResult('12{12}')).to.be.equal('11212');
    })
})