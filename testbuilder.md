# Testbuilder
*Use Cmd K V to open this up in vcode for previewing*
*  write a function that can 
    * detect what credit card network a card belongs to based on the card's number. 
* You'll write this function in detectNetwork.js,
    *  which was included in the repo you downloaded.

 * you'll have to refresh the browser. 
    * or meta-refresh it.
 
 You'll refresh often as we add steps - don't worry, the file will save progress for fully completed steps. 
 ## type into console for testing
  * detectNetwork('38345678901234')
    *  If you see the output < "Diner's Club"You're on the right track! 
  
  If not, you can go back and modify your function - just remember to refresh to get the updated function.Here's a list of card numbers you can try to ensure that your function works for every combination of prefix and length: 
  * 38345678901234 (Diner's Club)
  * 39345678901234 (Diner's Club)
  * 343456789012345 (American Express)
  * 373456789012345 (American Express)
  
  When you've made detectNetwork return the correct network for every prefix and length combination for Diner's Club and American Express, you can invoke nextStep: > nextStep()

Step 2:
Nice work! Extend your function to support two popular networks, Visa and Mastercard:

Visa always has a prefix of 4 and a length of 13, 16, or 19.
MasterCard always has a prefix of 51, 52, 53, 54, or 55 and a length of 16.

Make sure that you continue to support Diner's Club and American Express cards. Keep testing your implementation here in the console.

Here's a list of card numbers you can try to ensure that your function works for every combination of prefix and length: 

38345678901234 (Diner's Club)
39345678901234 (Diner's Club)
343456789012345 (American Express)
373456789012345 (American Express)
4123456789012 (Visa)
4123456789012345 (Visa)
4123456789012345678 (Visa)
5112345678901234 (MasterCard)
5212345678901234 (MasterCard)
5312345678901234 (MasterCard)
5412345678901234 (MasterCard)
5512345678901234 (MasterCard)
