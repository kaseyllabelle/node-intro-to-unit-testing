const expect = require('chai').expect;
const fizzBuzzer = require('../fizzBuzzer');

describe('fizzBuzzer', function(){
  it(`should return 'fizz-buzz' for num evenly divisible by 15`, function(){
    [15, 30, 45].forEach(function(input){
      expect(fizzBuzzer(input)).to.equal('fizz-buzz');
    })
  });
  it(`should return 'fizz' for num evenly divisible by 3`, function(){
    [3, 6, 9].forEach(function(input){
      expect(fizzBuzzer(input)).to.equal('fizz');
    })
  });
  it(`should return 'buzz' for num evenly divisible by 5`, function(){
    [5, 10, 20].forEach(function(input){
      expect(fizzBuzzer(input)).to.equal('buzz');
    })
  });
  it(`should return number if not evenly divisible by 3 or 5`, function(){
    [1, 2, 4].forEach(function(input){
      expect(fizzBuzzer(input)).to.equal(input);
    })
  });
  it('should throw an error if input is not a number', function(){
    const badInputs = [
      'a',
      true,
      false,
      function(){},
      {},
      [1, 2, 3]
    ];
    badInputs.forEach(function(input){
      expect(function(){
        fizzBuzzer(input);
      }).to.throw(Error);
    });
  });
});