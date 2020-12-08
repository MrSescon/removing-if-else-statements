import OrderJsonOutput from '../withStrategy/OrderJsonOutput'
import OrderPlainTextOutput from '../withStrategy/OrderPlainTextOutput'

const OutputTypes = {
  json: new OrderJsonOutput(),
  plainText: new OrderPlainTextOutput()
}

export default OutputTypes

