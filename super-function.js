const detectNetwork = require('./detectNetwork.js');

function superFunction(arr, start, stop, CardCo) {
    var should = chai.should;

    // let arr= [16,17,18,19];
    let fillLength = 0;
    let i=0;
    let counter = 0; //metronome.
    // let stop = 622126;
    while ( start < stop) {
        i = counter%arr.length;
        fillLength = (Math.abs(arr[i]-start.toString().length) || 1);
        describe (CardCo, function() {
            it(`${start} prefix with the len ${arr[i]}`, function() {    
                detectNetwork(`${start.toString()}${Math.random().toFixed(fillLength).split('.')[1]}`).should.equal(cardCo)
            });
        })
       
    counter++;//running counter.
    if (arr[i] === 19) {
        start++;
    } 
    }

}

superFunction([16,17,18,19],6282,6288,'UnionPay');

module.exports = superFunction;
// it('4903 len16', function() {
//     detectNetwork('4903430424342425').should.equal('Switch');
//   })