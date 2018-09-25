module.exports = {
    assertEquals: function( actual, expected, testName ) {
    if ( JSON.stringify(actual) === JSON.stringify(expected) ) {
      console.log( 'passed '+ testName );
    } else {
      console.log( `failed [${testName}] expected ${expected} but got ${actual}`);
    }
  }
}