const assert = require('assert');
const Rooster = require('../index.js');

describe('rooster', () => {
 describe ('.annouceDawn', () => {
    it('returns a rooster call', () => {
      // Define expected output
        const expected = 'cock-a-doodle-doo!';
  
      // Call Rooster.announceDawn and store result in variable
        const roosterCall = Rooster.announceDawn();
      // Use an assert method to compare actual and expected result
        assert.equal(expected, roosterCall);
    });
   });
   describe('.timeAtDawn', () => {
     it('returns its argument as a string', () => {
       const inputNumber = 12;
       const expectedString = '12';

       const timeDawn = Rooster.timeAtDawn(inputNumber);

       assert.equal(timeDawn, expectedString);
     });
     it('throws an error if passed a number less than 0', () => {
       const hour = -2;
       const expected = RangeError;

       assert.throws( () => { 
         Rooster.timeAtDawn(hour); }, expected);
     });
     it('throws an arror if passed a number greater than 23', () => {
      const hour = 25;
       const expected = RangeError;

       assert.throws( () => { 
         Rooster.timeAtDawn(hour); }, expected);
     });
 });
});