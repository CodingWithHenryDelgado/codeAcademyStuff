const assert = require('assert');

describe('+', () => {
  it('returns the sum of its arguments', () => {

    assert.ok(3 + 4 === 7);
    
  });
});

describe('-', () => {
    it('returns the difference of two values', () => {
      const bigNum = 100;
          const smallNum = 4;
          const expected = 96;
      
      const result =  bigNum - smallNum;
  
      // Write assertion here
      assert.equal(result, expected);
    });
  });

  describe('+', () => {
    it('returns the sum of two values', () => {
      // Setup
          let expected = {a: 3, b: 4, result: 7};
          let sum = {a: 3, b: 4};
  
      // Exercise
          sum.result = sum.a + sum.b;
  
      // Verify
      assert.deepEqual(sum, expected);
    });
  });
  