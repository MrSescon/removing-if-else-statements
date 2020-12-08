export default class ArgumentException extends Error {
  constructor (descriptionError: string) {
    super(descriptionError)
    this.name = 'ArgumentException'
  }
}
