var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var x = '5';
x = x + 'A';
var person = {
    name: '22',
    sss: 'sssss',
    ddd: 'dddd'
};
function greet(person, bbb) {
    console.log("Hello, " + person);
    return person;
}
// let a:string = greet({name:'sss'},11)
var bbb = { name: 'ggg' };
bbb.name = 'dd';
function identity(arg) {
    return arg;
}
// let bbbg:string = identity<number>('1111')
function log(target) {
    console.log('abc');
}
var c = { a: '333' };
function logMethod(target, propertyKey, descriptor) {
    console.log('target', target);
    console.log('propertyKey', propertyKey);
    console.log('descriptor', descriptor);
}
;
var Employee = /** @class */ (function () {
    function Employee(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Employee.prototype.greet = function (message) {
        return this.firstName + " " + this.lastName + " says: " + message;
    };
    __decorate([
        logMethod
    ], Employee.prototype, "greet");
    return Employee;
}());
var emp = new Employee('Mohan Ram', 'Ratnakumar');
emp.greet('hello');
