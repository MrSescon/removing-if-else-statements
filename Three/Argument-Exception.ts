class ArgumentException extends Error {
  constructor () {
    super('It was provided a invalid value, try on 0 or 1')
    this.name = 'ArgumentException'
  }
}
