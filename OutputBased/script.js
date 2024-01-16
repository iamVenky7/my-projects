// const a = [1, 2, 3]
// const b = a.push(4)
// console.log(a === b)
// const c = b.push(5)
// console.log(typeof b)
// console.log(c)

2
const a = [{ name: "a" }, { name: "b" }, { name: "c" }]
const b = [...a]
b.push({ name: "d" })
b[0].name = "venky"

console.log(a == b)
console.log(a.length, b.length, a[1].name, b[0].name)

3
// var day = "Normal day"

// function closure() {
//   day = "closure day"
//   return function () {
//     console.log(day)
//   }
// }

// day = "Boring day"

// closure()()

4
// const a = [{ name: "a" }, { name: "b" }, { name: "c" }]
// const b = [...a]
// b.push({ name: "d" })
// b[0].name = "lovelesh"
// console.log(a.length, b.length, a[0].name, b[0].name)

5

// class Site {
//   debugger
//   name = "Day1"
//   getHandle() {
//     return {
//       name: "localName",
//       getName1() {
//         return this.name
//       },
//       getName2: () => {
//         return this.name
//       },
//       getName3() {
//         return this.name
//       },
//     }
//   }
// }

// const site = new Site()

// console.log(site.getHandle().getName1())
// console.log(site.getHandle().getName2())
// console.log(site.getHandle().getName3())

6
// function day() {
//   this.prop1 = "One"
//   this.prop2 = "Two"
//   return {
//     prop1: "three",
//   }
// }

// const a = new day()

// console.log(a.prop1)
// console.log(a.prop2)
// console.log(this.prop1)
