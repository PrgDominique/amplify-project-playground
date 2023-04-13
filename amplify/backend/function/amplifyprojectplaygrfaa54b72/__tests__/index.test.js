const {describe, it} = require('@jest/globals')


describe ('this would return a value', () => {
    it('return the args', () => {
        const myMock1 = jest.fn();
        const args1 = 'first arg';
        const args2 = 'second arg';
       myMock1(args1, args2);
        // console.log(myMock1.mock.instances);
        // const a = new myMock1();
        // a.test = 'test';
        // console.log(myMock1.mock.instances);
        expect(myMock1.mock.calls[0][0]).toBe('first arg');
        expect(myMock1.mock.calls[0][1]).toBe('second arg');
    })
})