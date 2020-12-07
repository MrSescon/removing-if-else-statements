/* 
  This is perhaps one of those junior developers are most guilty of. 
  The example below is a prime illustration of what happens when you get beaten 
  into thinking If-Else is great.
*/
const DoSomethingWithElses = (input: number) => {
  if(input > 5) {
    console.log('Do Something')
  } else {
    console.log('Do Something else')
  }
}

const DoSomethingWithoutElses = (input: number) => {
  if(input > 5) {
    return console.log('Do Something')
  }
  return console.log('Do Something else')
}