import { OperationsTypesImpl } from "./operationsTypesImpl"

export class Operations {
  private operationalName: string
  private operations = OperationsTypesImpl

  constructor(operationName: string){
    this.operationalName = operationName
  }
  

  public getOperations() {
    return this.operations[this.operationalName]

  }

}