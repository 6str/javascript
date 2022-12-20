function countVowelConsonant(str) {
  // write code here
  const vowels = 'aAeEiIoOuU'

  return [...str].reduce((total, currentLetter) => {
      return total += vowels.includes(currentLetter) ? 1 : 2
  }, 0);
}



/**
* Test Suite 
*/
describe('countVowelConsonant()', () => {
    it('returns total of vowels(1) and consonants(2) to be added', () => {
        // arrange
        const value = 'abcde';
        
        // act
        const result = countVowelConsonant(value);

        // log
        console.log("result: ", result);
        
        // assert
        expect(result).toBe(8);
    });
});