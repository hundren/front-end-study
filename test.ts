var x:string = '5'
x = x + 'A'

interface Person {
  name: string;
  age?: number;
  [propName: string]: string | number;
}
let person:Person = {
    name:'22',
    sss:'sssss',
    ddd:'dddd'
}
function greet(person:Person,bbb:number):Person {
  console.log("Hello, " + person);
  return person
}
// let a:string = greet({name:'sss'},11)
let bbb:Person = {name:'ggg'}
bbb.name = 'dd'

function identity<T>(arg: T): T {
    return arg;
}

// let bbbg:string = identity<number>('1111')

function log(target) {
  console.log('abc')
}


type obj = {
  a?: string
}
const c:obj = {a:'333'}

function logMethod (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  console.log('target',target)
  console.log('propertyKey',propertyKey)
  console.log('descriptor',descriptor)
};

class Employee{
  constructor(private firstName: string, private lastName: string) {}

  @logMethod
  greet(message: string): string {
      return `${this.firstName} ${this.lastName} says: ${message}`;
  }
}

const emp = new Employee('Mohan Ram', 'Ratnakumar');
emp.greet('hello');