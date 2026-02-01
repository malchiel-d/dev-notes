# JavaScript TIL

>## Variables: let vs const

- Use `const` by default for anything that won't change (prevents bugs).
- Use `let` only if the value needs to be reassigned (like a counter in a loop).
- *Avoid `var`*—it's the "old way" and has weird scoping issues.

> ## Strings

###Template Literals
Instead of:
`"Hello " + name + "!"`
Use backticks:
`` `Hello ${name}!` ``
 cleaner and allows for multi-line strings.


> ## Numbers
 
### Special Numbers
#### NaN(not a number)
is a number even if it stands for not a number.
```js 
let notNumber = 0/0;
console.log(typeof notNumber); //returns number
```
common ways to get NaN 
```js
0 / 0          // NaN
"abc" * 3      // NaN
Number("hi")   // NaN
Math.sqrt(-1)  // NaN
```
NaN doesn't equal to anything even itself 
```NaN === NaN    // false```

#### Infinity 
Getting Infinity: 
```
1 / 0          // Infinity
-1 / 0         // -Infinity
Number.MAX_VALUE * 2 // Infinity
```
Checking for Infinity:
```
Number.isFinite(10)        // true
Number.isFinite(Infinity) // false
```

 ### Operator procedure 
**same as in maths**
if plus and minus comes together -> left to right
```javascript 
const result = 10 - 2 + 3;//its 11 not 5
```
exponents <- right to left 
```javascript 
const result = 2 ** 3 ** 2//512
```

 ### x++ and ++x
| Value |         Result                                      |
|-----------|----------------------------------------------------|
| x++   | Returns x, then adds 1                     |
| ++x   | Adds 1, then returns the new value |

> ## Boolean

### Equal
| Operator | Meaning |
|----------|---------|
| `=`      | Assign |
| `==`     | Equal (value) |
| `===`    | Strict equal (value + datatype) |

### Inequal
| Operator | Meaning |
|----------|---------|
| `!=`     | Inequality |
| `!==`    | Strict inequality |

```js
console.log(5 == "5");   // true
console.log(5 === "5"); // false
```
