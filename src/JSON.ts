export default class JSON <T> {

  private object: T

  constructor(object: T) {
    this.object = object
  }

  public generate() {
    const keys = Object.getOwnPropertyNames(this.object)

    const main = Object.getPrototypeOf(this.object)

    console.log(`JSON generated from ${main.constructor.name} class`)

    keys.map(key => {
      const value = Object.getOwnPropertyDescriptor(this.object, key)?.value
      console.log({
        [key]: value
      })
    })
  }
}