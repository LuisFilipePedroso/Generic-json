import JSON from './json'

class Person {

  private name: string

  constructor(name: string) {
    this.name = name
  }
}

class Car {

  private brand: string
  private model: string

  constructor(brand: string, model: string) {
    this.brand = brand
    this.model = model
  }
}

class Test {

  private test: string

  constructor(t: string) {
    this.test = t
  }
}

const person = new Person('Luis')

const jsonPerson = new JSON(person)
jsonPerson.generate()

const car = new Car('Peugeot', '508')

const jsonCar = new JSON(car)
jsonCar.generate()

const test = new Test('My test')

const jsonTest = new JSON(test)
jsonTest.generate()
