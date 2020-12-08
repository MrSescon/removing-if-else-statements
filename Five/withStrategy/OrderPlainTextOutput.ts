import IOrderOutputStrategy from './IOrderOutputStrategy'
import Order from '../Order'

export default class OrderPlainTextOutput implements IOrderOutputStrategy {

  public convertOrderToString(order: Order): string {
    return `Id: ${order.getId()}\n Sum: ${order.getSum()}`
  }
}