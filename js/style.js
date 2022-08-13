// Exercise: Level 1
// question 1

let firstName = 'Davido'
let lastName = 'Adekanmi'
let country = 'Nigeria'
let city ='Ogun'
let age = 23
let isMarried = true
let year = 2022


console.log(typeof firstName)
console.log(typeof lastName)
console.log(typeof country)
console.log(typeof city)
console.log(typeof age)
console.log(typeof isMarried)
console.log(typeof year)

// question 2

console.log(typeof '10' == 10)

// question 3

console.log(parseInt('9.8') == 10)

// question 4
console.log(4 > 3)
console.log(isMarried)
console.log(3 < 4)
console.log(null)

console.log('')
console.log('3' === 3)
console.log(50 > 100)

// question 5
console.log(4 > 3)
console.log(4 >= 3)
console.log(4 < 3)
console.log(4 <= 3)
console.log(4 == 4)
console.log(4 === 4)
console.log(4 != 4)
console.log(4 !== 4)
console.log(4 != '4')
console.log(4 == '4')
console.log(4 === '4')

// question 6
console.log(4 > 3 && 10 < 12)
console.log(4 > 3 && 10 > 12)
console.log(4 > 3 || 10 < 12)
console.log(4 > 3 || 10 > 12)
console.log(!(4 > 3))
console.log(!(4 < 3))
console.log(!(false))
console.log(!(4 > 3 && 10 < 12))
console.log(!(4 > 3 && 10 > 12))
console.log(!(4 === '4'))

console.log('python' && 'jargon' .includes('on'))

// question 7
const now = new Date()
console.log(now.getFullYear())
console.log(now.getMonth() + 1)
console.log(now.getDate())
console.log(now.getDay())
console.log(now.getHours())
console.log(now.getMinutes())

const Allseconds = Date.now()
console.log(Allseconds)


// LEVEL 2
//  question 1
let base = prompt('Enter base', 'number goes here')
let height = prompt('Enter a height', 'number goes here')
let areaT = 0.5 * base * height

console.log('The area of the triangle is ' + areaT)

// question 2
let sideA =parseInt(prompt('Enter sideA', 'number goes here'))
let sideB =parseInt(prompt('Enter sideB', 'number goes here'))
let sideC =parseInt(prompt('Enter sideC', 'number goes here'))
let perimeter = sideA + sideB + sideC
console.log('The perimeter of a triangle ' + perimeter)

// question 3
let length = +prompt('enter length','number goes here')
let width = +prompt('enter width','number goes here')
let area1 = length * width 
let peri = 2 *( length + width)
console.log('The area of a rectangle ' + area1)
console.log('The perimeter of a rectangle ' + peri)



// question 4
let radius = +prompt('Enter radius', 'number goes here')
const pi = 3.14
let area = pi * radius * radius
let circum = 2 * pi * radius

console.log('the area of a circle ' + area)
console.log('the circumference of a circle ' + circum)


// question 5
// let Y = 2*X- 2
let X1 = -1
let X2 = 0 
let Y1 = 0
let Y2 = -2
let slope =  (Y2-Y1)/(X2-X1)
console.log(slope)

// question 6
let x1 = 2
let x2 = 6 
let y1 = 2
let y2 = 10
let slope1 =  (y2-y1)/(x2-x1)
console.log(slope1)

// question 7
console.log(slope == slope1)

// question 8
let X = +prompt('enter the value of X','number goes here')
let Y = X^2 + 6*X + 9
console.log(Y)


// question 9
let hours = +prompt('enter hours', 'number goes here')
let hourPer = +prompt('enter per hours', 'number goes here')
let weeklyEARNING = hours * hourPer
console.log(weeklyEARNING)

// question 10
let davName = 'adekanmi'
davName.length > 7
?console.log(davName + ' is long ')
:console.log(davName + ' is short') 

// question 11
let firstName1 = 'Adekanmi'
let familyName = 'Boluwatife'
console.log(firstName1.length == familyName.length)

// question 12
let myAge = 250
let yourAge = 25
let older = myAge - yourAge
console.log('I am ' + older + " than you ")




