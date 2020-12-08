import Order from '../Order'
import IOrderOutputStrategy from './IOrderOutputStrategy'
import OutputTypes from './OutputTypes'
import InvalidOperationException from '../../InvalidOperationException'
/* 

  Knowing we need to extend this part of the application, 
  this approach is definitely not acceptable.
  Not only does the code above violate the Open/Closed principle, 
  it doesn’t read well and will cause maintainability headaches.
  The correct approach is one that adheres to the SOLID principles — and 
  we do this by implementing a dynamic type discovery process, and in this case, 
  the strategy pattern.
  
*/

const printOrder = (order: Order, formatType: string) => {

  const strategy: IOrderOutputStrategy = OutputTypes[formatType]
  if (strategy === null) throw new InvalidOperationException(
    'No valid type selected. Try JSON or PlainText'
  )
  
  return strategy.convertOrderToString(order)
}