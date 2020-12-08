import Order  from '../Order'
export default interface IOrderOutputStrategy {
  convertOrderToString(order: Order): string
}