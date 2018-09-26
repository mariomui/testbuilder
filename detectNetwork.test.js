/*
 * You'll eventually be given instructions how to use this file
 * If you want to use it before then, you'll have to figure it out yourself
 */

// You don't actually want to fill *this* value in on line 9, but you'll see
// other places in this file where you'll replace the FILL_ME_IN with a
// different value.
var FILL_ME_IN = 'Fill this value in';
 
describe('Introduction to Mocha Tests - READ ME FIRST', function() {
  // A Mocha test is just a function!
  // If the function throws an error when run, it fails.
  // If it doesn't throw an error when run, it doesn't fail. 
  // To read more about mocha, visit mochajs.org

  // Once you've read and understood this section, please comment it out. 
  // You will not be able to proceed with a failing test. 

  // it('Throws an error so it fails', function() {
  //   throw new Error('Delete me!');
  // });

  it('Doesn\'t throw an error, so it doesn\'t fail', function() {
    // This test doesn't really test anything at all! It will pass no matter what.
    var even = function(num){
      return num/2 === 0;
    }
    return even(10) === true;
  });

  // In tests, we want to compare the expected behavior to the actual behavior.
  // A test should only fail if the expected behavior doesn't match the actual.
  it('Throws an error when expected behavior does not match actual behavior', function() {
    var even = function(num){
      return num%2 === 0;
    }

    if(even(10) !== true) {
      throw new Error('10 should be even!');
    }
  });
});
describe('Diner\'s Club', function() {
  // Be careful, tests can have bugs too...

  it('has a prefix of 38 and a length of 14', function() {
    // throw new Error('Delete me!');
 
    if (detectNetwork('38345678901234') !== 'Diner\'s Club') {
      throw new Error('Test failed');
    }
  });

  it('has a prefix of 39 and a length of 14', function() {
    if (detectNetwork('3934567890123') === 'Diner\'s Club') {
      throw new Error('Test failed');
    }
 
  });
});

describe('American Express', function() {
  // It can get annoying to keep typing the if/throw, so here is a
  // helper function to throw an error if the input statement isn't true. 
  var assert = function(isTrue) {
    if(!isTrue) {
      throw new Error('Test failed');
    }
 
  };

  it('has a prefix of 34 and a length of 15', function() {
    assert(detectNetwork('343456789012345') === 'American Express');
  });

  it('has a prefix of 37 and a length of 15', function() {
    assert(detectNetwork('373456789012345') === 'American Express');
  });
});

describe('Visa', function() {
  // Chai is an entire library of helper functions for tests!
  // Chai provides an assert that acts the same as our previous assert.
  // Search the documentation to figure out how to access it. 
  //   http://chaijs.com/
  var should = chai.should;
 

  it('has a prefix of 4 and a length of 13', function() {
    detectNetwork('4123456789012').should.equal('Visa');
  });

  it('has a prefix of 4 and a length of 16', function() {
    detectNetwork('4123456789012345').should.equal('Visa');
  });

  it('has a prefix of 4 and a length of 19', function() {
    detectNetwork('4123456789012345678').should.equal('Visa');
  });
});

describe('MasterCard', function() {
  // Chai lets you write more human-readable tests that throw helpful errors.
  // Expect syntax is one way to do this, but there are others. 
  // If you want to know more, check out the documentation. 
  //   http://chaijs.com/api/bdd/
  var should = chai.should;
 
  it("51->16 len mastercard", function() {
    detectNetwork('5112345678901234').should.equal('MasterCard');
  });
 
  it("prefix 52 -> 16 len", function() {
    detectNetwork('5212345678901234').should.equal('MasterCard');
  });
 
  it("53 prefix ->16 len to Mastercard", function() {
    detectNetwork('5312345678901234').should.equal('MasterCard');
  });
 

  // You can also use should instead of expect, which changes the style
  // slightly. It really doesn't matter which one you use - check out 
  // http://chaijs.com/guide/styles/ for more info, but it's important
  // to be consistent (unlike in this file, where we use BOTH expect
  // and should, but that's just for learning), so once you've gotten 
  // these tests to pass using should syntax, refactor your tests to 
  // use either expect or should, but not both. 
  var should = chai.should();
  
  it('has a prefix of 54 and a length of 16', function() {
    detectNetwork('5412345678901234').should.equal('MasterCard');
  });
 
  it('has a prefix of 55 and a length of 16', function() {
    detectNetwork('5512345678901234').should.equal('MasterCard');
  })
 
});

describe('Discover', function() {
  // Tests without a function will be marked as "pending" and not run
  // Implement these tests (and others) and make them pass!
  it('has a prefix of 6011 and a length of 16', function() {
    detectNetwork('6011444444444444').should.equal('Discover');
  });
  it('has a prefix of 6011 and a length of 19', function() {
    detectNetwork('6011333322221111333').should.equal('Discover');
  });
  it('has a prefix of 644 and a length of 16', function() {
    detectNetwork('6442948834388888').should.equal('Discover');
  });
  it('has a prefix of 645 and a length of 16', function() {
    detectNetwork('6454595433488548').should.equal('Discover');
  });
  it('has a prefix of 646 and a length of 16', function() {
    detectNetwork('6464534455234532').should.equal('Discover');
  });
  it('has a prefix of 644 and a length of 19', function() {
    detectNetwork('6444535443343535326').should.equal('Discover');
  });
  it('has a prefix of 65 and a length of 16', function() {
    detectNetwork('6511300021111333').should.equal('Discover');
  });
  it('has a prefix of 65 and a length of 19', function() {
    detectNetwork('6511333322221111333').should.equal('Discover');
  });
////
it('has a prefix of 6011 and a length of 16', function() {
  detectNetwork('6011444444444444').should.equal('Discover');
});
it('has a prefix of 6011 and a length of 19', function() {
  detectNetwork('6011333322221111333').should.equal('Discover');
});
it('has a prefix of 644 and a length of 16', function() {
  detectNetwork('6442948834388888').should.equal('Discover');
});
it('has a prefix of 645 and a length of 16', function() {
  detectNetwork('6454595433488548').should.equal('Discover');
});
it('has a prefix of 646 and a length of 16', function() {
  detectNetwork('6464534455234532').should.equal('Discover');
});
it('has a prefix of 644 and a length of 19', function() {
  detectNetwork('6444535443343535326').should.equal('Discover');
});

it('it has a prefix of 649 and a lenght of 16', function() {
  detectNetwork('6494444433331342').should.equal('Discover');
});

it('it has a prefix of 648 and a lenght of 19', function() {
  detectNetwork('6484444433334321342').should.equal('Discover');
});
it('it has a prefix of 648 and a lenght of 16', function() {
  detectNetwork('6484444434321342').should.equal('Discover');
});
it('it has a prefix of 647 and a lenght of 19', function() {
  detectNetwork('6474444433334321342').should.equal('Discover');
});
it('it has a prefix of 647and a lenght of 16', function() {
  detectNetwork('6474443334321342').should.equal('Discover');
});
it('it has a prefix of 646 and a lenght of 19', function() {
  detectNetwork('6464444433334321342').should.equal('Discover');
});
it('it has a prefix of 645 and a lenght of 19', function() {
  detectNetwork('6454444433334321342').should.equal('Discover');
});
it('it has a prefix of 65 and a lenght of 19', function() {
  detectNetwork('6504444433334321342').should.equal('Discover');
});
it('it has a prefix of 65 and a lenght of 16', function() {
  detectNetwork('6504888334321342').should.equal('Discover');
});
it('it has a prefix of 649 and a lenght of 19', function() {
  detectNetwork('6494823488334321342').should.equal('Discover');
});

////
});

describe('Maestro', function() {
  it('it has a prefix of 5018 and a lenght of 12', function() {
    detectNetwork('501844443332').should.equal('Maestro');
  })
  it('it has a prefix of 5020 and a lenght of 13', function() {
    detectNetwork('50204321122334').should.equal('Maestro');
  })
  it('it has a prefix of 5038 and a lenght of 15', function() {
    detectNetwork('503844443333432').should.equal('Maestro');
  })
  it('it has a prefix of 6304 and a lenght of 19', function() {
    detectNetwork('6304444433334321342').should.equal('Maestro');
  })
  it('it has a prefix of 5018 and a lenght of 13', function() {
    detectNetwork('5018400021342').should.equal('Maestro');
  })
  it('it has a prefix of 5018 and a lenght of 14', function() {
    detectNetwork('50184000213420').should.equal('Maestro');
  })
  it('it has a prefix of 5018 and a lenght of 14', function() {
    detectNetwork('5018444433334321342').should.equal('Maestro');
  })
  it('it has a prefix of 5018 and a lenght of 15', function() {
    detectNetwork('501843334321342').should.equal('Maestro');
  })
  it('it has a prefix of 5018 and a lenght of 16', function() {
    detectNetwork('5018444423331342').should.equal('Maestro');
  })
  it('it has a prefix of 5018 and a lenght of 17', function() {
    detectNetwork('50184444334321342').should.equal('Maestro');
  })
  it('it has a prefix of 5018 and a lenght of 18', function() {
    detectNetwork('501844433334321342').should.equal('Maestro');
  })
  it('it has a prefix of 5018 and a lenght of 19', function() {
    detectNetwork('5018444433334321342').should.equal('Maestro');
  })
  it('it has a prefix of 5020 and a lenght of 12', function() {
    detectNetwork('502044321342').should.equal('Maestro');
  })
  it('it has a prefix of 5020 and a lenght of 13', function() {
    detectNetwork('5020343231342').should.equal('Maestro');
  })
  it('it has a prefix of 5020 and a lenght of 14', function() {
    detectNetwork('50204333341342').should.equal('Maestro');
  })
  it('it has a prefix of 5020 and a lenght of 15', function() {
    detectNetwork('502044421333142').should.equal('Maestro');
  })
  it('it has a prefix of 5020 and a lenght of 16', function() {
    detectNetwork('5020444433321342').should.equal('Maestro');
  })
  it('it has a prefix of 5020 and a lenght of 17', function() {
    detectNetwork('50204444334321342').should.equal('Maestro');
  })
  it('it has a prefix of 5020 and a lenght of 18', function() {
    detectNetwork('502044443334321342').should.equal('Maestro');
  })
  it('it has a prefix of 5020 and a lenght of 19', function() {
    detectNetwork('5020444433334321342').should.equal('Maestro');
  })
  it('it has a prefix of 5038 and a lenght of 12', function() {
    detectNetwork('503844421342').should.equal('Maestro');
  })
  it('it has a prefix of 5038 and a lenght of 13', function() {
    detectNetwork('5038444321342').should.equal('Maestro');
  })
  it('it has a prefix of 5038 and a lenght of 14', function() {
    detectNetwork('50384443431342').should.equal('Maestro');
  })
  it('it has a prefix of 5038 and a lenght of 15', function() {
    detectNetwork('503834909321342').should.equal('Maestro');
  })
  it('it has a prefix of 5038 and a lenght of 16', function() {
    detectNetwork('5038433334321342').should.equal('Maestro');
  })
  it('it has a prefix of 5038 and a lenght of 17', function() {
    detectNetwork('50384444333021342').should.equal('Maestro');
  })
  it('it has a prefix of 5038 and a lenght of 18', function() {
    detectNetwork('503844443334321342').should.equal('Maestro');
  })
  it('it has a prefix of 5038 and a lenght of 19', function() {
    detectNetwork('5038444433334321342').should.equal('Maestro');
  })
  it('it has a prefix of 6304 and a lenght of 12', function() {
    detectNetwork('630444343342').should.equal('Maestro');
  })
  it('it has a prefix of 6304 and a lenght of 13', function() {
    detectNetwork('6304433432342').should.equal('Maestro');
  })
  it('it has a prefix of 6304 and a lenght of 14', function() {
    detectNetwork('63044444321342').should.equal('Maestro');
  })
  it('it has a prefix of 6304 and a lenght of 15', function() {
    detectNetwork('630433000321342').should.equal('Maestro');
  })
  it('it has a prefix of 6304 and a lenght of 16', function() {
    detectNetwork('6304444434321342').should.equal('Maestro');
  })
  it('it has a prefix of 6304 and a lenght of 17', function() {
    detectNetwork('63044444334321342').should.equal('Maestro');
  })
  it('it has a prefix of 6304 and a lenght of 18', function() {
    detectNetwork('630444443334321342').should.equal('Maestro');
  })
  it('it has a prefix of 6304 and a lenght of 16', function() {
    detectNetwork('6304433334321342').should.equal('Maestro');
  })
  it('it has a prefix of 5020 and a lenght of 16', function() {
    detectNetwork('5020443334321342').should.equal('Maestro');
  })


  // Write full test coverage for the Maestro card
});

describe('should support China UnionPay')
describe('should support Switch')
