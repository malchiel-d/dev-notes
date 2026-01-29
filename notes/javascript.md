# JavaScript 

## 1. Variables & Data Types

### Declaration
* `let`: Block-scoped, reassignable (modern standard).
* `const`: Block-scoped, **not** reassignable (modern standard).
* `var`: Function-scoped, can be redeclared (legacy, avoid using).

```javascript
let name = "Alex";
const pi = 3.14;
name = "Jordan"; // Allowed
// pi = 3.15;    // Error: Assignment to constant variable
```

### Primitive Data Types
* **String**: Text enclosed in quotes (`""`, `''`, `` ` ` ``).
* **Number**: Integers and floating-point numbers (`42`, `3.14`).
* **Boolean**: `true` or `false`.
* **Null**: Intentional absence of value (`null`).
* **Undefined**: Value not assigned (`undefined`).
* **Symbol**: Unique identifier (advanced).
* **BigInt**: Large integers (`9007199254740991n`).

---

## 2. Operators

### Arithmetic
`+` (Add), `-` (Subtract), `*` (Multiply), `/` (Divide), `%` (Modulus/Remainder), `**` (Exponentiation).

```javascript
let sum = 10 + 5; // 15
let remainder = 10 % 3; // 1
```

### Assignment
`=`, `+=`, `-=`, `*=`, `/=`.

### Comparison
* `==` : Loose equality (checks value only, converts type).
* `===` : **Strict equality** (checks value AND type).
* `!=`, `!==` : Inequality.
* `>`, `<`, `>=`, `<=` : Relational.

```javascript
5 == "5";  // true
5 === "5"; // false (Number vs String)
```

---

## 3. Type Conversion

* **Explicit**:
    * `String(123)` → `"123"`
    * `Number("42")` → `42`
    * `Boolean(1)` → `true`
* **Implicit (Coercion)**:
    * `"5" + 2` → `"52"` (concatenation wins)
    * `"5" - 2` → `3` (math wins)

---

## 4. Strings

### Basics
Strings are zero-indexed.

```javascript
let text = "Hello";
console.log(text[0]); // "H"
console.log(text.length); // 5
```

### Template Literals
Use backticks (`` ` ``) for embedded variables and multi-line strings.

```javascript
let age = 25;
let greeting = `I am ${age} years old.`;
```

### Common String Methods
**Note:** Strings are immutable (methods return a new string, they don't change the original).

| Method | Description | Example |
| :--- | :--- | :--- |
| `toUpperCase()` | Converts to uppercase | `"hi".toUpperCase()` → `"HI"` |
| `toLowerCase()` | Converts to lowercase | `"HI".toLowerCase()` → `"hi"` |
| `indexOf(str)` | Returns index of first match | `"Hello".indexOf("e")` → `1` |
| `slice(start, end)` | Extracts a part of a string | `"Hello".slice(0, 2)` → `"He"` |
| `substring(start, end)` | Similar to slice, but no negative indexes | `"Hello".substring(1, 3)` → `"el"` |
| `replace(val, new)` | Replaces first match | `"Hi world".replace("world", "JS")` |
| `replaceAll(val, new)` | Replaces all matches | `"a-b-c".replaceAll("-", ":")` |
| `trim()` | Removes whitespace from both ends | `"  text  ".trim()` → `"text"` |
| `split(separator)` | Converts string to array | `"a,b,c".split(",")` → `["a", "b", "c"]` |
| `includes(str)` | Checks if string contains substring | `"Hello".includes("ell")` → `true` |
| `charAt(index)` | Returns char at specific index | `"Hello".charAt(0)` → `"H"` |

