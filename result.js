const {assertEquals} = require('./helpers.js');
const detectNetwork = require('./detectNetwork.js');

assertEquals(detectNetwork(`38345678901234`),`Diner's Club`, `dc`);
assertEquals(detectNetwork(`39345678901234`),`Diner's Club`, `dc`);
assertEquals(detectNetwork('38345678901234'), `Diner's Club`, 'dclub');

assertEquals(detectNetwork('343456789012345'),'American Express', "amex");
assertEquals(detectNetwork('373456789012345'),'American Express', "amex");
assertEquals(detectNetwork('343456789012345'),'American Express', "amex");


//random string.
assertEquals(detectNetwork('3834567890123433'), `not found`, 'dclub');
assertEquals(detectNetwork('3834567890123334'), `not found`, 'dclub');


//Visa tests.
let visaArr = [`4123456789012` ,`4123456789012345`, `4923456789012345678`];
let visaFailArr = ['444214', `4554555435234525423523434234242`];
for (let i=0; i < visaArr.length; ++i) {
    assertEquals(detectNetwork(visaArr[i]),'Visa','visatest');
}
for (let i=0; i < visaFailArr.length; ++i) {
    assertEquals(detectNetwork(visaFailArr[i]),'not found','failvisatest');
}

let masterCardArr = [
    `5112345678901234`,
    `5212345678901234`,
    `5312345678901234`,
    `5412345678901234`,
    `5512345678901234`,
];
let masterCardFailArr = [
    `511234567890123423423432`,
    `5218901234`,
    `531234567823424901234`,
    `54123456789323201234`,
    `551234567890122342432434`
];
for (let i = 0; i < masterCardArr.length; ++i) {
    assertEquals( detectNetwork(masterCardArr[i]), "MasterCard", 'MasterCard Passed');
}
for (let i = 0; i < masterCardFailArr.length; ++i) {
    assertEquals( detectNetwork(masterCardFailArr[i]),"not found", 'failMasterCard Passed');
}



