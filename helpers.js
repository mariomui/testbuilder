module.exports = {
    assertEquals: function( actual, expected, testName ) {
    if ( JSON.stringify(actual) === JSON.stringify(expected) ) {
      console.log( 'passed '+ testName );
    } else {
      console.log( `failed [${testName}] expected ${expected} but got ${actual}`);
    }
  }
}

function superFunction(arr, start, stop, cardCo) {

  // let arr= [16,17,18,19];
  let fillLength = 0;
  let i=0;
  let counter = 0; //metronome.
  // let stop = 622126;
  while ( start < stop) {
      i = counter%arr.length;
      fillLength = (Math.abs(arr[i]-start.toString().length) || 1);
      // describe (cardCo, function() {
          it(`${start} prefix with the len ${arr[i]}`, function() {    
              detectNetwork(`${start.toString()}${Math.random().toFixed(fillLength).split('.')[1]}`).should.equal(cardCo);
          // });
      })
     
  counter++;//running counter.
  if (arr[i] === 19) {
      start++;
  } 
  }

}