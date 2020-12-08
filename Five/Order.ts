import IOrderOutputStrategy  from './withStrategy/IOrderOutputStrategy'
import ArgumentException from '../Argument-Exception'

export default class Order {
  private readonly id: string
  private sum: number

  constructor(){
    this.id = "D"
  }

  public GenerateOutput(strategy: IOrderOutputStrategy ): void {
    strategy.convertOrderToString(this)
  }

  public static CreateNow(orderSum: number): Order {
    if (orderSum <= 0) throw new ArgumentException("sum must be a positive number")

    const order = new Order() 
    order.sum = orderSum
    return order
  }

  public getId(){
    return this.id
  }
  
  public getSum() {
    return this.sum
  }

  private setSum(sum: number) {
    this.sum = sum
  }

}