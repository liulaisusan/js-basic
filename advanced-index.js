// nested function's scope: start from the innerst function and reach out to the outest function
// block scope, function scope, global scope
//   let a = 10
//   function outer(){
//       let b = 20
//       function inner(){
//           let c = 30 // defined in the inner()
//           console.log(a,b,c)
//       }
//       inner()
//   }
//   outer()


// // closures: the inner funtion has access to the outer function scope even the outer function is finished
// function outer(){
//     let counter = 0
//     function inner(){
//         counter++
//         console.log(counter)
//     }
//     return inner
// }
// outer() // nothing will print on console, because outer() return a function but not realy invoke it
// outer()
// const fn = outer() // the () is necessary, here 'fn' is actually 'inner'
// fn() //1
// fn() //2

// // function currying
// /* 
// currying is a process in functional programming in which we transform a function with multiple
// arguments into a sequence of nesting functions that take one argument at a time
// f(a,b,c) => f(a)(b)(c)
// not call a function 
// */
// function sum(a,b,c){
//     return a+b+c
// }
// console.log(sum(2,3,5))

// //sum(2,3,5) sum(2)(3)(5)
// function curry(fn){
//     return function(a){
//         return function(b){
//             return function(c){
//                 return fn(a, b, c)
//             }
//         }
//     }
// }
// const curriedSum = curry(sum)
// console.log(curriedSum(2)(3)(5))

// const add2 = curriedSum(2)
// const add3 = add2(3)
// const add5 = add3(5)
// console.log(add5)

/*
 this keyword
 Order: new binding > explict binding > implicit binding > default binding
*/

// implict binding
const person = {
    name: 'vishwas',
    sayMyName: function(){
        console.log(`my name is ${this.name}`)
    }
}
person.sayMyName()

//explict binding
function sayMyName(name){
    console.log(`my name is ${this.name}`)
}
sayMyName.call(person) // call() declaire the context sayMyName is called

// new binding
function Person(name){
    // here this = {}, an empty object
    this.name = name
}
const p1 = new Person('Vishwas') // with new keyword, create an empty object for this
const p2 = new Person('Batman')
console.log(p1.name, p2.name)

//default binding
sayMyName() // global scope, and no name in global so undefined
globalThis.name = 'superman'
sayMyName() 

/*
 prototype
*/
function Person2(fName, lName){
    this.fName = fName
    this.lName = lName
}
const person1 = new Person2('Bruce', 'Wayne')
const person2 = new Person2('Clark', 'Knet')

person1.getFullName = function(){
    return this.fName + ' ' + this.lName
}
console.log(person1.getFullName())
// console.log(person2.getFullName()) // error

// using prototype to apply the change to every instances
Person2.prototype.getFullName= function(){
    return this.fName + ' ' + this.lName
}
console.log(person1.getFullName())
console.log(person2.getFullName())


// prototypal inheritance
function SuperHero(fName, lName){
    // this = {}
    Person2.call(this, fName, lName)
    this.isSuperHero = true
}
SuperHero.prototype.fightCrime = function(){
    console.log('fight crime')
}
SuperHero.prototype = Object.create(Person2.prototype)
const batman =  new SuperHero('Bruce','Wayne')
SuperHero.prototype.constructor = SuperHero
console.log(batman.getFullName())

// class
class Person3 {
    constructor(fName, lName){
        this.fName = fName
        this.lName = lName
    }

    sayMyName(){
        return this.fName + ' ' + this.lName
    }

}

const classP1 = new Person3('Bruce','Wayne')
console.log(classP1.sayMyName())

class SuperHero3 extends Person3{
    constructor(fName, lName){
        super(fName,lName)
        this.isSuperHero = true
    }

    fightCrime(){
        console.log('fight crime')
    }
}

const Batman3 = new SuperHero3('Bruce','Wayne')
console.log(Batman3.sayMyName())





// iterables and iterators
// iterables: string, array, map, set has default iterables
const obj = {
    [Symbol.iterator]: function(){
        let step = 0
        const iterator = {
            next: function(){
                step++
                if(step === 1){
                    return {value: 'hello', done: false}
                } else if (step === 2){
                    return {value: 'world', done: false}
                }
                return {value: undefined, done: true}
            }
        }
        return iterator
    },
}


for (const word of obj){
    console.log(word)
}







// generators
// create iterator for us not manually
function* generatorFunction(){ // can stop mid way and continue from the stop
    yield 'Hello'
    yield 'World'
}

const generatorObj = generatorFunction() // it's an iterator
for(const word of generatorObj){
    console.log(word)
}


// similar to the kurento example
function add10(number, callback){
    number = number+10
    return callback(number)
}

add10(5,function(result){
    console.log(result)
})