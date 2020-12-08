import { Order } from '../Order'
/* 

This is a slightly more advanced example.
Let me also clarify something real quick… This is a more “enterprisy” approach. 
It won’t be your typical “lemme just replace that if-else” scenario. 
Now, read on.Know when to even eliminate Ifs entirely, 
by replacing them with objects.
Often, you’ll find yourself having to extend some part of an application. 
As a junior developer, you may be inclined to do so by just adding an extra 
If-Else (i.e. else-if) statement.
Take this illustrative example. Here, we need to present an Order instance 
as a string. First, we only have two kinds of string representation, 
JSON and plain text. Using If-Else at this stage is not a big issue, 
tho we can easily replace else if with just if as demonstrated earlier.

*/

const PrintOrder = (order: Order, formatType: string ) => {
  // Guard clauses left out for brevity

  let result: string = ''

  if(formatType === 'Json') {
    result = JSON.stringify(order)
  } else if (formatType === "PlainText") {
    result = `Id: ${order.getId()}\n Sum: ${order.getSum()}`
  } else {
    result = "unknown format"
  }

  return result
}