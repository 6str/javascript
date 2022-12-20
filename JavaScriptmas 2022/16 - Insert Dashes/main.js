function insertDashesForLoop(str) {
    const charsOut = []

    for(let i = 0; i < str.length -1; ++i){
        if(str[i] == ' ' || str[i + 1] == ' ') charsOut.push(str[i])
        else charsOut.push(str[i] + '-')
    }
    charsOut.push(str[str.length - 1])
    return charsOut.join('')
}


function insertDashes(str) {
    return str
        .split(' ')
        .map(word => [...word].join('-'))
        .join(' ')
}


/**
* Test Suite 
*/
describe('insertDashes()', () => {
    it('insert dashes in between chars', () => {
        // arrange
        const value = "aba caba";
        
        // act
        const result = insertDashes(value);

        // log
        console.log("result: ", result);
        
        // assert
        expect(result).toBe("a-b-a c-a-b-a");
    });
});

describe('insertDashesForLoop()', () => {
    it('insert dashes in between chars', () => {
        // arrange
        const value = "xyz abcd";
        
        // act
        const result = insertDashesForLoop(value);

        // log
        console.log("result: ", result);
        
        // assert
        expect(result).toBe("x-y-z a-b-c-d");
    });
});
