import IOrderOutputStrategy from './IOrderOutputStrategy'
import Order from '../Order'

export default class OrderJsonOutput implements IOrderOutputStrategy {

  public convertOrderToString(order: Order): string {
    return JSON.stringify(order)
  }
}