export default class InvalidOperationException extends Error {
  constructor (descriptionError: string) {
    super(descriptionError)
    this.name = 'InvalidOperationException'
  }
}
