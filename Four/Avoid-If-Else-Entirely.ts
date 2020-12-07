import { Operations }  from './Operations'
/*

  Say you need to perform some operation that’ll be selected based on some 
  condition, and we know we’ll have to add more operations later.

*/

const PerformOpWithIfAndElses = (operationName: string) => {
  if(operationName === 'Op1') {
    console.log('Do Something')
  } else if (operationName === 'Op2') {
    console.log('Do another thing')
  } else {
    console.log('Default Path')
  }
}

/*

  One is perhaps inclined to use the tried and true, If-Else.   
  Adding a new operation is simply a matter of slapping in an extra else if. 
  That’s simple. This approach is however not a great design 
  in terms of maintenance.
  Knowing we need to add new operations later, 
  we can refactor the If-Else to a dictionary.

*/

const PerformOp = (operationName: string) => {

  return new Operations(operationName).getOperations()

}