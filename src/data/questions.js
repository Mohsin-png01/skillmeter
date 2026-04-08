// Complete Question Database - 200 Questions
// Save this as: src/data/questions.js

export const questions = [
  // ================== JAVASCRIPT QUESTIONS (100) ==================
  // Beginner JS (40)
  {
    id: 1, skill: "javascript", level: "beginner", type: "mcq",
    question: "Which keyword declares a variable in JavaScript?",
    options: ["var", "int", "string", "define"], answer: "var",
    explanation: "var, let, and const declare variables in JavaScript."
  },
  {
    id: 2, skill: "javascript", level: "beginner", type: "truefalse",
    question: "JavaScript is case-sensitive.", options: ["True", "False"], answer: "True",
    explanation: "JavaScript distinguishes between uppercase and lowercase letters."
  },
  {
    id: 3, skill: "javascript", level: "beginner", type: "output",
    question: "What is the output? console.log(typeof null);",
    code: "console.log(typeof null);", options: ["'null'", "'object'", "'undefined'", "'number'"],
    answer: "'object'", explanation: "typeof null returns 'object' (historical bug)."
  },
  {
    id: 4, skill: "javascript", level: "beginner", type: "mcq",
    question: "Which is NOT a JavaScript data type?",
    options: ["String", "Boolean", "Integer", "Undefined"], answer: "Integer",
    explanation: "JavaScript has Number type that includes integers and floats."
  },
  {
    id: 5, skill: "javascript", level: "beginner", type: "truefalse",
    question: "JavaScript arrays are zero-indexed.", options: ["True", "False"], answer: "True",
    explanation: "Array indices start at 0 in JavaScript."
  },
  {
    id: 6, skill: "javascript", level: "beginner", type: "output",
    question: "What is the output? console.log(2 + '2');",
    code: "console.log(2 + '2');", options: ["4", "'22'", "22", "NaN"], answer: "'22'",
    explanation: "Number converts to string when added to string."
  },
  {
    id: 7, skill: "javascript", level: "beginner", type: "mcq",
    question: "What does DOM stand for?",
    options: ["Document Object Model", "Data Object Model", "Display Object Management", "Document Orientation Mode"],
    answer: "Document Object Model", explanation: "DOM represents HTML document structure."
  },
  {
    id: 8, skill: "javascript", level: "beginner", type: "truefalse",
    question: "JavaScript can only run in browsers.", options: ["True", "False"], answer: "False",
    explanation: "JavaScript runs in browsers (V8) and servers (Node.js)."
  },
  {
    id: 9, skill: "javascript", level: "beginner", type: "output",
    question: "What is the output? console.log(typeof NaN);",
    code: "console.log(typeof NaN);", options: ["'NaN'", "'number'", "'undefined'", "'object'"],
    answer: "'number'", explanation: "NaN is a special Number type value."
  },
  {
    id: 10, skill: "javascript", level: "beginner", type: "mcq",
    question: "Which method converts string to integer?",
    options: ["parseInt()", "toInteger()", "stringToInt()", "convertToInt()"], answer: "parseInt()",
    explanation: "parseInt() parses a string and returns an integer."
  },
  {
    id: 11, skill: "javascript", level: "beginner", type: "truefalse",
    question: "== performs type coercion.", options: ["True", "False"], answer: "True",
    explanation: "== converts types before comparison, === doesn't."
  },
  {
    id: 12, skill: "javascript", level: "beginner", type: "output",
    question: "What is the output? console.log(10 == '10');",
    code: "console.log(10 == '10');", options: ["true", "false", "undefined", "Error"], answer: "true",
    explanation: "String '10' converts to number 10 with loose equality."
  },
  {
    id: 13, skill: "javascript", level: "beginner", type: "mcq",
    question: "Which method adds element to array end?",
    options: ["push()", "pop()", "shift()", "unshift()"], answer: "push()",
    explanation: "push() adds elements to array end."
  },
  {
    id: 14, skill: "javascript", level: "beginner", type: "truefalse",
    question: "JavaScript uses camelCase convention.", options: ["True", "False"], answer: "True",
    explanation: "camelCase is standard for variables/functions."
  },
  {
    id: 15, skill: "javascript", level: "beginner", type: "output",
    question: "What is the output? console.log(0.1 + 0.2 === 0.3);",
    code: "console.log(0.1 + 0.2 === 0.3);", options: ["true", "false", "undefined", "Error"], answer: "false",
    explanation: "Floating point precision: 0.1 + 0.2 = 0.30000000000000004."
  },
  {
    id: 16, skill: "javascript", level: "beginner", type: "mcq",
    question: "Which operator checks strict equality?",
    options: ["==", "===", "=", "!=="], answer: "===",
    explanation: "=== checks value and type without coercion."
  },
  {
    id: 17, skill: "javascript", level: "beginner", type: "truefalse",
    question: "JavaScript is single-threaded.", options: ["True", "False"], answer: "True",
    explanation: "JavaScript uses single-threaded event loop."
  },
  {
    id: 18, skill: "javascript", level: "beginner", type: "output",
    question: "What is the output? console.log(typeof []);",
    code: "console.log(typeof []);", options: ["'array'", "'object'", "'undefined'", "'list'"], answer: "'object'",
    explanation: "Arrays are objects in JavaScript."
  },
  {
    id: 19, skill: "javascript", level: "beginner", type: "mcq",
    question: "What does NaN stand for?",
    options: ["Not a Number", "Null and None", "Number is Negative", "No Available Number"], answer: "Not a Number",
    explanation: "NaN represents invalid number operations."
  },
  {
    id: 20, skill: "javascript", level: "beginner", type: "truefalse",
    question: "var has function scope.", options: ["True", "False"], answer: "True",
    explanation: "var variables are function-scoped, not block-scoped."
  },
  {
    id: 21, skill: "javascript", level: "beginner", type: "output",
    question: "What is the output? console.log(2 ** 3);",
    code: "console.log(2 ** 3);", options: ["6", "8", "9", "Error"], answer: "8",
    explanation: "** is exponentiation operator (2³ = 8)."
  },
  {
    id: 22, skill: "javascript", level: "beginner", type: "mcq",
    question: "Which gets string length?",
    options: ["length()", "size()", ".length", "count()"], answer: ".length",
    explanation: ".length property (not method) returns character count."
  },
  {
    id: 23, skill: "javascript", level: "beginner", type: "truefalse",
    question: "0 is truthy in JavaScript.", options: ["True", "False"], answer: "False",
    explanation: "0 is falsy. Truthy values: non-zero numbers, non-empty strings."
  },
  {
    id: 24, skill: "javascript", level: "beginner", type: "output",
    question: "What is the output? console.log(!!'');",
    code: "console.log(!!'');", options: ["true", "false", "undefined", "'false'"], answer: "false",
    explanation: "Empty string is falsy, !! converts to boolean false."
  },
  {
    id: 25, skill: "javascript", level: "beginner", type: "mcq",
    question: "Which declares a constant?",
    options: ["const", "let", "var", "constant"], answer: "const",
    explanation: "const creates read-only reference to value."
  },
  {
    id: 26, skill: "javascript", level: "beginner", type: "truefalse",
    question: "JavaScript has print() function.", options: ["True", "False"], answer: "False",
    explanation: "Use console.log() for output."
  },
  {
    id: 27, skill: "javascript", level: "beginner", type: "output",
    question: "What is the output? console.log(1 / 0);",
    code: "console.log(1 / 0);", options: ["Infinity", "0", "NaN", "Error"], answer: "Infinity",
    explanation: "Dividing by zero returns Infinity."
  },
  {
    id: 28, skill: "javascript", level: "beginner", type: "mcq",
    question: "Which converts number to string?",
    options: ["toString()", "toStr()", "string()", "parseString()"], answer: "toString()",
    explanation: "toString() converts numbers to strings."
  },
  {
    id: 29, skill: "javascript", level: "beginner", type: "truefalse",
    question: "Variables must be declared before use.", options: ["True", "False"], answer: "True",
    explanation: "Always declare variables (var, let, const) before use."
  },
  {
    id: 30, skill: "javascript", level: "beginner", type: "output",
    question: "What is the output? console.log('Hello'.length);",
    code: "console.log('Hello'.length);", options: ["5", "6", "4", "undefined"], answer: "5",
    explanation: "String 'Hello' has 5 characters."
  },
  {
    id: 31, skill: "javascript", level: "beginner", type: "mcq",
    question: "What does JSON stand for?",
    options: ["JavaScript Object Notation", "Java Scripted Object Notation", "JavaScript Oriented Notation", "Java Serialized Object Notation"],
    answer: "JavaScript Object Notation", explanation: "JSON is lightweight data format."
  },
  {
    id: 32, skill: "javascript", level: "beginner", type: "truefalse",
    question: "JavaScript can manipulate HTML/CSS.", options: ["True", "False"], answer: "True",
    explanation: "JavaScript manipulates DOM elements and styles."
  },
  {
    id: 33, skill: "javascript", level: "beginner", type: "output",
    question: "What is the output? console.log(Math.max());",
    code: "console.log(Math.max());", options: ["0", "Infinity", "-Infinity", "NaN"], answer: "-Infinity",
    explanation: "Math.max() with no args returns -Infinity."
  },
  {
    id: 34, skill: "javascript", level: "beginner", type: "mcq",
    question: "Which returns division remainder?",
    options: ["%", "/", "*", "//"], answer: "%",
    explanation: "% is modulo operator for remainder."
  },
  {
    id: 35, skill: "javascript", level: "beginner", type: "truefalse",
    question: "JavaScript is strongly typed.", options: ["True", "False"], answer: "False",
    explanation: "JavaScript is weakly/dynamically typed."
  },
  {
    id: 36, skill: "javascript", level: "beginner", type: "output",
    question: "What is the output? console.log([1,2] + [3,4]);",
    code: "console.log([1,2] + [3,4]);", options: ["[1,2,3,4]", "'1,23,4'", "[1,2][3,4]", "Error"], answer: "'1,23,4'",
    explanation: "Arrays convert to strings: '1,2' + '3,4' = '1,23,4'."
  },
  {
    id: 37, skill: "javascript", level: "beginner", type: "mcq",
    question: "Which method removes first array element?",
    options: ["shift()", "pop()", "splice()", "removeFirst()"], answer: "shift()",
    explanation: "shift() removes first element."
  },
  {
    id: 38, skill: "javascript", level: "beginner", type: "truefalse",
    question: "Boolean('false') returns false.", options: ["True", "False"], answer: "False",
    explanation: "Non-empty string 'false' is truthy."
  },
  {
    id: 39, skill: "javascript", level: "beginner", type: "output",
    question: "What is the output? console.log(10 === '10');",
    code: "console.log(10 === '10');", options: ["true", "false", "undefined", "Error"], answer: "false",
    explanation: "=== checks type: number !== string."
  },
  {
    id: 40, skill: "javascript", level: "beginner", type: "mcq",
    question: "Which is JavaScript runtime environment?",
    options: ["Node.js", "Java", "Python", "C++"], answer: "Node.js",
    explanation: "Node.js executes JavaScript outside browsers."
  },

  // Medium JS (30)
  {
    id: 41, skill: "javascript", level: "medium", type: "output",
    question: "What is the output? console.log(1 + '1' - 1);",
    code: "console.log(1 + '1' - 1);", options: ["10", "11", "0", "NaN"], answer: "10",
    explanation: "1 + '1' = '11' (string), '11' - 1 = 10 (number)."
  },
  {
    id: 42, skill: "javascript", level: "medium", type: "mcq",
    question: "Which creates array of passing elements?",
    options: ["map()", "filter()", "reduce()", "forEach()"], answer: "filter()",
    explanation: "filter() returns elements passing test."
  },
  {
    id: 43, skill: "javascript", level: "medium", type: "truefalse",
    question: "'this' always refers to containing object.", options: ["True", "False"], answer: "False",
    explanation: "'this' depends on invocation context."
  },
  {
    id: 44, skill: "javascript", level: "medium", type: "output",
    question: "What is the output?",
    code: "let x = 5;\nsetTimeout(() => console.log(x), 0);\nx = 10;\nconsole.log(x);",
    options: ["5, 10", "10, 10", "10, 5", "5, 5"], answer: "10, 10",
    explanation: "setTimeout callback executes after main thread."
  },
  {
    id: 45, skill: "javascript", level: "medium", type: "mcq",
    question: "What is closure?",
    options: ["Function with access to parent scope", "Function closing memory", "Block scope function", "Async function"],
    answer: "Function with access to parent scope", explanation: "Closure remembers outer variables."
  },
  {
    id: 46, skill: "javascript", level: "medium", type: "truefalse",
    question: "Arrow functions have own 'this'.", options: ["True", "False"], answer: "False",
    explanation: "Arrow functions inherit 'this' from enclosing scope."
  },
  {
    id: 47, skill: "javascript", level: "medium", type: "output",
    question: "What is the output? console.log([] + []);",
    code: "console.log([] + []);", options: ["[]", "''", "[object Object]", "Error"], answer: "''",
    explanation: "Empty arrays convert to empty strings."
  },
  {
    id: 48, skill: "javascript", level: "medium", type: "mcq",
    question: "Which executes function per array element?",
    options: ["map()", "forEach()", "for()", "each()"], answer: "forEach()",
    explanation: "forEach() executes function for each element."
  },
  {
    id: 49, skill: "javascript", level: "medium", type: "truefalse",
    question: "Promises are synchronous.", options: ["True", "False"], answer: "False",
    explanation: "Promises are asynchronous."
  },
  {
    id: 50, skill: "javascript", level: "medium", type: "output",
    question: "What is the output? console.log(typeof typeof 1);",
    code: "console.log(typeof typeof 1);", options: ["'number'", "'string'", "'undefined'", "'object'"], answer: "'string'",
    explanation: "typeof 1 = 'number', typeof 'number' = 'string'."
  },
  {
    id: 51, skill: "javascript", level: "medium", type: "mcq",
    question: "What does ... (spread) do?",
    options: ["Expands iterables", "Compresses arrays", "Creates copies", "Both A and C"], answer: "Both A and C",
    explanation: "Spread expands iterables and creates shallow copies."
  },
  {
    id: 52, skill: "javascript", level: "medium", type: "truefalse",
    question: "Template literals allow multiline strings.", options: ["True", "False"], answer: "True",
    explanation: "Backticks allow multiline strings."
  },
  {
    id: 53, skill: "javascript", level: "medium", type: "output",
    question: "What is the output? console.log([...'hello']);",
    code: "console.log([...'hello']);", options: ["['h','e','l','l','o']", "'hello'", "[104,101,108,108,111]", "Error"],
    answer: "['h','e','l','l','o']", explanation: "Spread operator spreads string characters."
  },
  {
    id: 54, skill: "javascript", level: "medium", type: "mcq",
    question: "What is event delegation?",
    options: ["Attaching events to parent", "Delegating to workers", "Using emitters", "Async events"],
    answer: "Attaching events to parent", explanation: "Parent handles events for children."
  },
  {
    id: 55, skill: "javascript", level: "medium", type: "truefalse",
    question: "JavaScript has native modules.", options: ["True", "False"], answer: "True",
    explanation: "ES6 introduced import/export modules."
  },
  {
    id: 56, skill: "javascript", level: "medium", type: "output",
    question: "What is the output?",
    code: "const arr = [1,2,3];\narr[10] = 10;\nconsole.log(arr.length);",
    options: ["3", "10", "11", "undefined"], answer: "11",
    explanation: "Setting index 10 creates empty slots, length becomes 11."
  },
  {
    id: 57, skill: "javascript", level: "medium", type: "mcq",
    question: "What is pure function?",
    options: ["No side effects", "Same input → same output", "Both A and B", "No parameters"],
    answer: "Both A and B", explanation: "Pure functions are predictable."
  },
  {
    id: 58, skill: "javascript", level: "medium", type: "truefalse",
    question: "async/await is Promise syntactic sugar.", options: ["True", "False"], answer: "True",
    explanation: "async/await simplifies Promise handling."
  },
  {
    id: 59, skill: "javascript", level: "medium", type: "output",
    question: "What is the output? console.log(3 < 2 < 1);",
    code: "console.log(3 < 2 < 1);", options: ["true", "false", "Error", "undefined"], answer: "true",
    explanation: "3 < 2 = false (0), 0 < 1 = true."
  },
  {
    id: 60, skill: "javascript", level: "medium", type: "mcq",
    question: "What does Object.freeze() do?",
    options: ["Prevents property addition", "Prevents property changes", "Makes immutable", "All of above"],
    answer: "All of above", explanation: "freeze() makes object immutable."
  },
  {
    id: 61, skill: "javascript", level: "medium", type: "truefalse",
    question: "JavaScript has classes.", options: ["True", "False"], answer: "True",
    explanation: "ES6 introduced class syntax."
  },
  {
    id: 62, skill: "javascript", level: "medium", type: "output",
    question: "What is the output? console.log(Number.MAX_SAFE_INTEGER);",
    code: "console.log(Number.MAX_SAFE_INTEGER);", options: ["2^53 - 1", "2^32 - 1", "Infinity", "9007199254740991"],
    answer: "9007199254740991", explanation: "MAX_SAFE_INTEGER is 2^53 - 1."
  },
  {
    id: 63, skill: "javascript", level: "medium", type: "mcq",
    question: "What is memoization?",
    options: ["Caching function results", "Memory optimization", "Function compression", "Data storage"],
    answer: "Caching function results", explanation: "Stores results to avoid recalculation."
  },
  {
    id: 64, skill: "javascript", level: "medium", type: "truefalse",
    question: "NaN === NaN is true.", options: ["True", "False"], answer: "False",
    explanation: "NaN is not equal to itself."
  },
  {
    id: 65, skill: "javascript", level: "medium", type: "output",
    question: "What is the output? console.log([1,2,3].map(n => n * 2));",
    code: "console.log([1,2,3].map(n => n * 2));", options: ["[2,4,6]", "[1,2,3]", "[2,2,2]", "Error"], answer: "[2,4,6]",
    explanation: "map() transforms each element."
  },
  {
    id: 66, skill: "javascript", level: "medium", type: "mcq",
    question: "What is currying?",
    options: ["f(a,b,c) → f(a)(b)(c)", "Function optimization", "Memory technique", "Async pattern"],
    answer: "f(a,b,c) → f(a)(b)(c)", explanation: "Transforms multi-arg to sequence."
  },
  {
    id: 67, skill: "javascript", level: "medium", type: "truefalse",
    question: "Set stores unique values.", options: ["True", "False"], answer: "True",
    explanation: "Set only allows unique values."
  },
  {
    id: 68, skill: "javascript", level: "medium", type: "output",
    question: "What is the output? console.log(new Set([1,2,2,3]).size);",
    code: "console.log(new Set([1,2,2,3]).size);", options: ["3", "4", "2", "undefined"], answer: "3",
    explanation: "Set removes duplicates: {1,2,3}."
  },
  {
    id: 69, skill: "javascript", level: "medium", type: "mcq",
    question: "What does bind() do?",
    options: ["Creates function with bound 'this'", "Binds variables", "Connects events", "Attaches context"],
    answer: "Creates function with bound 'this'", explanation: "bind() sets 'this' value."
  },
  {
    id: 70, skill: "javascript", level: "medium", type: "truefalse",
    question: "Generators use function*.", options: ["True", "False"], answer: "True",
    explanation: "Generators declared with function* and yield."
  },

  // Hard JS (30)
  {
    id: 71, skill: "javascript", level: "hard", type: "output",
    question: "What is the output?",
    code: "console.log(1);\nsetTimeout(() => console.log(2), 0);\nPromise.resolve().then(() => console.log(3));\nconsole.log(4);",
    options: ["1,2,3,4", "1,4,2,3", "1,4,3,2", "1,3,2,4"], answer: "1,4,3,2",
    explanation: "Promises (microtasks) run before setTimeout (macrotasks)."
  },
  {
    id: 72, skill: "javascript", level: "hard", type: "mcq",
    question: "What is event loop?",
    options: ["Handles async operations", "Event handler", "Memory manager", "Execution context"],
    answer: "Handles async operations", explanation: "Manages callback execution."
  },
  {
    id: 73, skill: "javascript", level: "hard", type: "truefalse",
    question: "JavaScript supports Web Workers.", options: ["True", "False"], answer: "True",
    explanation: "Web Workers enable background threads."
  },
  {
    id: 74, skill: "javascript", level: "hard", type: "output",
    question: "What is the output?",
    code: "const obj = {\n  a: 1,\n  b: 2,\n  getA() {\n    console.log(this.a);\n    return this;\n  },\n  getB() {\n    console.log(this.b);\n  }\n};\nobj.getA().getB();",
    options: ["1,2", "1,undefined", "undefined,2", "Error"], answer: "1,2",
    explanation: "Method chaining: getA() returns 'this' (obj)."
  },
  {
    id: 75, skill: "javascript", level: "hard", type: "mcq",
    question: "What is WeakMap?",
    options: ["Map with weak key references", "Weak value map", "Auto-clearing map", "Memory map"],
    answer: "Map with weak key references", explanation: "Keys are weakly referenced for GC."
  },
  {
    id: 76, skill: "javascript", level: "hard", type: "truefalse",
    question: "JavaScript supports tail recursion.", options: ["True", "False"], answer: "True",
    explanation: "ES6 requires tail call optimization in strict mode."
  },
  {
    id: 77, skill: "javascript", level: "hard", type: "output",
    question: "What is the output?",
    code: "async function test() {\n  return await Promise.resolve('hello');\n}\ntest().then(console.log);",
    options: ["'hello'", "Promise", "undefined", "Error"], answer: "'hello'",
    explanation: "async function returns resolved promise value."
  },
  {
    id: 78, skill: "javascript", level: "hard", type: "mcq",
    question: "What is Temporal Dead Zone (TDZ)?",
    options: ["Variables inaccessible before declaration", "Memory zone", "GC phase", "Execution phase"],
    answer: "Variables inaccessible before declaration", explanation: "TDZ for let/const before declaration."
  },
  {
    id: 79, skill: "javascript", level: "hard", type: "truefalse",
    question: "JavaScript has ASI (Automatic Semicolon Insertion).", options: ["True", "False"], answer: "True",
    explanation: "JavaScript inserts semicolons automatically."
  },
  {
    id: 80, skill: "javascript", level: "hard", type: "output",
    question: "What is the output? console.log(new Date(0).toUTCString());",
    code: "console.log(new Date(0).toUTCString());",
    options: ["Thu, 01 Jan 1970 00:00:00 GMT", "Current date", "Invalid Date", "1970-01-01"],
    answer: "Thu, 01 Jan 1970 00:00:00 GMT", explanation: "Date(0) is Unix epoch."
  },
  {
    id: 81, skill: "javascript", level: "hard", type: "mcq",
    question: "What is generator function?",
    options: ["Can pause/resume execution", "Generates values", "Uses yield", "All of above"],
    answer: "All of above", explanation: "Generators yield multiple values."
  },
  {
    id: 82, skill: "javascript", level: "hard", type: "truefalse",
    question: "JavaScript numbers are 64-bit floats.", options: ["True", "False"], answer: "True",
    explanation: "Numbers are IEEE 754 double-precision floats."
  },
  {
    id: 83, skill: "javascript", level: "hard", type: "output",
    question: "What is the output? console.log([1,2,3].reduce((a,b) => a + b, 0));",
    code: "console.log([1,2,3].reduce((a,b) => a + b, 0));", options: ["6", "[1,2,3]", "0", "Error"], answer: "6",
    explanation: "reduce() sums elements starting from 0."
  },
  {
    id: 84, skill: "javascript", level: "hard", type: "mcq",
    question: "What is Proxy?",
    options: ["Wraps object to intercept operations", "Network proxy", "Object wrapper", "Both A and C"],
    answer: "Wraps object to intercept operations", explanation: "Proxy traps object operations."
  },
  {
    id: 85, skill: "javascript", level: "hard", type: "truefalse",
    question: "JavaScript has optional chaining (?.).", options: ["True", "False"], answer: "True",
    explanation: "Optional chaining introduced in ES2020."
  },
  {
    id: 86, skill: "javascript", level: "hard", type: "output",
    question: "What is the output? console.log(String.raw`Hello\\nWorld`);",
    code: "console.log(String.raw`Hello\\nWorld`);", options: ["Hello\\nWorld", "Hello\nWorld", "Error", "undefined"],
    answer: "Hello\\nWorld", explanation: "String.raw returns raw string without escape processing."
  },
  {
    id: 87, skill: "javascript", level: "hard", type: "mcq",
    question: "What is Symbol?",
    options: ["Creates unique property keys", "Adds private properties", "Iterator symbol", "Both A and B"],
    answer: "Creates unique property keys", explanation: "Symbol creates unique identifiers."
  },
  {
    id: 88, skill: "javascript", level: "hard", type: "truefalse",
    question: "JavaScript has nullish coalescing (??).", options: ["True", "False"], answer: "True",
    explanation: "?? returns right side if left is null/undefined."
  },
  {
    id: 89, skill: "javascript", level: "hard", type: "output",
    question: "What is the output?",
    code: "console.log([1,2,3].flatMap(x => [x, x * 2]));",
    options: ["[1,2,2,4,3,6]", "[1,2,3,2,4,6]", "[[1,2],[2,4],[3,6]]", "Error"],
    answer: "[1,2,2,4,3,6]", explanation: "flatMap() maps then flattens one level."
  },
  {
    id: 90, skill: "javascript", level: "hard", type: "mcq",
    question: "What is Reflect?",
    options: ["Meta-programming methods", "Reflection API", "Both A and B", "Debugging object"],
    answer: "Both A and B", explanation: "Reflect provides meta-programming operations."
  },
  {
    id: 91, skill: "javascript", level: "hard", type: "truefalse",
    question: "JavaScript has Intl API.", options: ["True", "False"], answer: "True",
    explanation: "Intl provides internationalization features."
  },
  {
    id: 92, skill: "javascript", level: "hard", type: "output",
    question: "What is the output? console.log(Array.from({length:3}, (_,i) => i));",
    code: "console.log(Array.from({length:3}, (_,i) => i));",
    options: ["[0,1,2]", "[1,2,3]", "[undefined,undefined,undefined]", "Error"], answer: "[0,1,2]",
    explanation: "Array.from() creates array from array-like with mapper."
  },
  {
    id: 93, skill: "javascript", level: "hard", type: "mcq",
    question: "What is globalThis?",
    options: ["Standard global object access", "Works across environments", "Both A and B", "Global scope"],
    answer: "Both A and B", explanation: "globalThis provides unified global access."
  },
  {
    id: 94, skill: "javascript", level: "hard", type: "truefalse",
    question: "JavaScript supports dynamic import().", options: ["True", "False"], answer: "True",
    explanation: "import() returns promise for module."
  },
  {
    id: 95, skill: "javascript", level: "hard", type: "output",
    question: "What is the output? console.log(Object.getPrototypeOf([]) === Array.prototype);",
    code: "console.log(Object.getPrototypeOf([]) === Array.prototype);", options: ["true", "false", "undefined", "Error"],
    answer: "true", explanation: "Array instances have Array.prototype."
  },
  {
    id: 96, skill: "javascript", level: "hard", type: "mcq",
    question: "Difference: for...in vs for...of?",
    options: ["for...in: enumerable properties", "for...of: iterable values", "Both correct", "No difference"],
    answer: "Both correct", explanation: "for...in for properties, for...of for values."
  },
  {
    id: 97, skill: "javascript", level: "hard", type: "truefalse",
    question: "JavaScript has Map data structure.", options: ["True", "False"], answer: "True",
    explanation: "ES6 introduced Map for key-value pairs."
  },
  {
    id: 98, skill: "javascript", level: "hard", type: "output",
    question: "What is the output? console.log(new Set([1,2,3]).has(2));",
    code: "console.log(new Set([1,2,3]).has(2));", options: ["true", "false", "undefined", "Error"], answer: "true",
    explanation: "Set.has() checks value existence."
  },
  {
    id: 99, skill: "javascript", level: "hard", type: "mcq",
    question: "What is tagged template?",
    options: ["Function processing template literal", "Template with prefix function", "Both A and B", "HTML template"],
    answer: "Both A and B", explanation: "Function called with template literal."
  },
  {
    id: 100, skill: "javascript", level: "hard", type: "truefalse",
    question: "JavaScript supports private class methods.", options: ["True", "False"], answer: "True",
    explanation: "Private methods use # prefix."
  },

  // ================== REACT QUESTIONS (100) ==================
  // Beginner React (40)
  {
    id: 101, skill: "react", level: "beginner", type: "mcq",
    question: "What is React used for?",
    options: ["Database", "UI building", "Server scripting", "Mobile only"], answer: "UI building",
    explanation: "React builds user interfaces."
  },
  {
    id: 102, skill: "react", level: "beginner", type: "truefalse",
    question: "Components must return single JSX element.", options: ["True", "False"], answer: "True",
    explanation: "Single root element required."
  },
  {
    id: 103, skill: "react", level: "beginner", type: "output",
    question: "What renders? function Greeting() { return <h1>Hello</h1>; }",
    code: "function Greeting() { return <h1>Hello</h1>; }",
    options: ["<h1>Hello</h1>", "Hello", "Nothing", "Error"], answer: "<h1>Hello</h1>",
    explanation: "Component returns JSX."
  },
  {
    id: 104, skill: "react", level: "beginner", type: "mcq",
    question: "Which updates state in class component?",
    options: ["this.updateState()", "this.setState()", "this.modifyState()", "this.changeState()"], answer: "this.setState()",
    explanation: "setState() updates state."
  },
  {
    id: 105, skill: "react", level: "beginner", type: "code",
    question: "Create component showing name prop.",
    code: "function Welcome(props) {\n  // Your code\n}",
    answer: "return <h1>Hello, {props.name}!</h1>;", explanation: "Access props in component."
  },
  {
    id: 106, skill: "react", level: "beginner", type: "truefalse",
    question: "JSX is mandatory.", options: ["True", "False"], answer: "False",
    explanation: "Can use React.createElement() instead."
  },
  {
    id: 107, skill: "react", level: "beginner", type: "output",
    question: "What does JSX compile to? <div className='container'>Hello</div>",
    code: "<div className='container'>Hello</div>",
    options: [
      "React.createElement('div', {className: 'container'}, 'Hello')",
      "div.className('container', 'Hello')",
      "<div class='container'>Hello</div>",
      "Error"
    ],
    answer: "React.createElement('div', {className: 'container'}, 'Hello')", explanation: "JSX compiles to createElement."
  },
  {
    id: 108, skill: "react", level: "beginner", type: "mcq",
    question: "What is React component?",
    options: ["JavaScript function/class", "Reusable UI piece", "Both", "CSS class"], answer: "Both",
    explanation: "Component is function/class returning UI."
  },
  {
    id: 109, skill: "react", level: "beginner", type: "truefalse",
    question: "React uses one-way data flow.", options: ["True", "False"], answer: "True",
    explanation: "Data flows parent → child."
  },
  {
    id: 110, skill: "react", level: "beginner", type: "output",
    question: "What renders? function App() { const name='React'; return <div>Hello {name}</div>; }",
    code: "function App() { const name='React'; return <div>Hello {name}</div>; }",
    options: ["Hello React", "Hello {name}", "Hello", "Error"], answer: "Hello React",
    explanation: "JSX expressions evaluate."
  },
  {
    id: 111, skill: "react", level: "beginner", type: "mcq",
    question: "How to import React?",
    options: ["import React from 'react';", "require('react');", "include React;", "All"], answer: "import React from 'react';",
    explanation: "ES6 import syntax."
  },
  {
    id: 112, skill: "react", level: "beginner", type: "truefalse",
    question: "Component names start with capital.", options: ["True", "False"], answer: "True",
    explanation: "Distinguishes from HTML tags."
  },
  {
    id: 113, skill: "react", level: "beginner", type: "output",
    question: "What renders? function List() { return <ul><li>Item1</li><li>Item2</li></ul>; }",
    code: "function List() { return <ul><li>Item1</li><li>Item2</li></ul>; }",
    options: ["Bulleted list", "Nothing", "Error", "Plain text"], answer: "Bulleted list",
    explanation: "JSX renders HTML."
  },
  {
    id: 114, skill: "react", level: "beginner", type: "mcq",
    question: "Purpose of props?",
    options: ["Pass parent→child data", "Store state", "Handle events", "Style"], answer: "Pass parent→child data",
    explanation: "Props pass data to children."
  },
  {
    id: 115, skill: "react", level: "beginner", type: "truefalse",
    question: "Components can return null.", options: ["True", "False"], answer: "True",
    explanation: "null renders nothing."
  },
  {
    id: 116, skill: "react", level: "beginner", type: "output",
    question: "What displays? function Display() { const show=false; return show ? <div>Visible</div> : null; }",
    code: "function Display() { const show=false; return show ? <div>Visible</div> : null; }",
    options: ["Nothing", "Visible", "false", "Error"], answer: "Nothing",
    explanation: "Ternary returns null."
  },
  {
    id: 117, skill: "react", level: "beginner", type: "mcq",
    question: "Common React app tool?",
    options: ["Create React App", "React CLI", "React Builder", "All"], answer: "Create React App",
    explanation: "Official bootstrapping tool."
  },
  {
    id: 118, skill: "react", level: "beginner", type: "truefalse",
    question: "React is a framework.", options: ["True", "False"], answer: "False",
    explanation: "React is a library."
  },
  {
    id: 119, skill: "react", level: "beginner", type: "output",
    question: "What renders? function Numbers() { return [1,2,3].map(n => <span key={n}>{n}</span>); }",
    code: "function Numbers() { return [1,2,3].map(n => <span key={n}>{n}</span>); }",
    options: ["123", "[1,2,3]", "Error", "Nothing"], answer: "123",
    explanation: "map() creates elements."
  },
  {
    id: 120, skill: "react", level: "beginner", type: "mcq",
    question: "Purpose of keys?",
    options: ["Improve performance", "Identify elements", "Both", "Sort lists"], answer: "Both",
    explanation: "Keys help React track elements."
  },
  {
    id: 121, skill: "react", level: "beginner", type: "truefalse",
    question: "React can build mobile apps.", options: ["True", "False"], answer: "True",
    explanation: "React Native for mobile."
  },
  {
    id: 122, skill: "react", level: "beginner", type: "output",
    question: "What outputs? function Conditional({ isLoggedIn }) { return isLoggedIn ? <p>Welcome</p> : <p>Login</p>; }",
    code: "function Conditional({ isLoggedIn }) { return isLoggedIn ? <p>Welcome</p> : <p>Login</p>; }",
    options: ["Depends on prop", "Always Welcome", "Always Login", "Error"], answer: "Depends on prop",
    explanation: "Conditional rendering."
  },
  {
    id: 123, skill: "react", level: "beginner", type: "mcq",
    question: "What is JSX?",
    options: ["JavaScript XML", "Syntax extension", "HTML-like syntax", "All"], answer: "All",
    explanation: "JSX is JavaScript XML."
  },
  {
    id: 124, skill: "react", level: "beginner", type: "truefalse",
    question: "Components can have multiple roots.", options: ["True", "False"], answer: "False",
    explanation: "Single root (use Fragment)."
  },
  {
    id: 125, skill: "react", level: "beginner", type: "output",
    question: "What renders? function Style() { const style={color:'red'}; return <div style={style}>Red</div>; }",
    code: "function Style() { const style={color:'red'}; return <div style={style}>Red</div>; }",
    options: ["Red text in red", "<div style='color:red'>Red</div>", "Error", "Plain text"], answer: "Red text in red",
    explanation: "Inline styles use objects."
  },
  {
    id: 126, skill: "react", level: "beginner", type: "mcq",
    question: "Who maintains React?",
    options: ["Facebook", "Google", "Microsoft", "Twitter"], answer: "Facebook",
    explanation: "Facebook maintains React."
  },
  {
    id: 127, skill: "react", level: "beginner", type: "truefalse",
    question: "React uses Virtual DOM.", options: ["True", "False"], answer: "True",
    explanation: "Virtual DOM for efficient updates."
  },
  {
    id: 128, skill: "react", level: "beginner", type: "output",
    question: "What renders? function Children({ children }) { return <div>{children}</div>; }",
    code: "function Children({ children }) { return <div>{children}</div>; }",
    options: ["Whatever passed as children", "Nothing", "Error", "'children' text"], answer: "Whatever passed as children",
    explanation: "children prop contains nested content."
  },
  {
    id: 129, skill: "react", level: "beginner", type: "mcq",
    question: "Purpose of Fragment?",
    options: ["Group without wrapper", "Improve performance", "Both", "Code fragments"], answer: "Group without wrapper",
    explanation: "Fragment groups without extra DOM nodes."
  },
  {
    id: 130, skill: "react", level: "beginner", type: "truefalse",
    question: "React supports SSR.", options: ["True", "False"], answer: "True",
    explanation: "Server-side rendering possible."
  },
  {
    id: 131, skill: "react", level: "beginner", type: "output",
    question: "What renders? function Simple() { return <>Hello</>; }",
    code: "function Simple() { return <>Hello</>; }",
    options: ["Hello", "Nothing", "Error", "<>Hello</>"], answer: "Hello",
    explanation: "Fragment renders children."
  },
  {
    id: 132, skill: "react", level: "beginner", type: "mcq",
    question: "Which handles forms?",
    options: ["Controlled components", "Refs", "document.getElementById", "jQuery"], answer: "Controlled components",
    explanation: "Controlled components use state."
  },
  {
    id: 133, skill: "react", level: "beginner", type: "truefalse",
    question: "React is declarative.", options: ["True", "False"], answer: "True",
    explanation: "Describe UI, React handles updates."
  },
  {
    id: 134, skill: "react", level: "beginner", type: "output",
    question: "What outputs? function App() { const count=0; return <div>{count || 'Zero'}</div>; }",
    code: "function App() { const count=0; return <div>{count || 'Zero'}</div>; }",
    options: ["Zero", "0", "undefined", "Error"], answer: "Zero",
    explanation: "0 is falsy, shows 'Zero'."
  },
  {
    id: 135, skill: "react", level: "beginner", type: "mcq",
    question: "Which is React hook?",
    options: ["useState", "useEffect", "useContext", "All"], answer: "All",
    explanation: "All are React hooks."
  },
  {
    id: 136, skill: "react", level: "beginner", type: "truefalse",
    question: "Hooks only work in functional components.", options: ["True", "False"], answer: "True",
    explanation: "Hooks only in function components."
  },
  {
    id: 137, skill: "react", level: "beginner", type: "output",
    question: "What renders? function Button() { return <button onClick={() => alert('click')}>Click</button>; }",
    code: "function Button() { return <button onClick={() => alert('click')}>Click</button>; }",
    options: ["Button with click handler", "Static button", "Error", "Nothing"], answer: "Button with click handler",
    explanation: "onClick attaches event."
  },
  {
    id: 138, skill: "react", level: "beginner", type: "mcq",
    question: "What is prop drilling?",
    options: ["Passing props through layers", "Drilling props", "Prop injection", "Data flow"],
    answer: "Passing props through layers", explanation: "Passing props multiple levels."
  },
  {
    id: 139, skill: "react", level: "beginner", type: "truefalse",
    question: "Props are read-only.", options: ["True", "False"], answer: "True",
    explanation: "Props cannot be modified."
  },
  {
    id: 140, skill: "react", level: "beginner", type: "output",
    question: "What renders? function Title() { return <h1 className='title'>React</h1>; }",
    code: "function Title() { return <h1 className='title'>React</h1>; }",
    options: ["<h1 class='title'>React</h1>", "React with title class", "Error", "Plain text"],
    answer: "React with title class", explanation: "className sets CSS class."
  },

  // Medium React (30)
  {
    id: 141, skill: "react", level: "medium", type: "mcq",
    question: "Which hook performs side effects?",
    options: ["useState", "useEffect", "useContext", "useReducer"], answer: "useEffect",
    explanation: "useEffect handles side effects."
  },
  {
    id: 142, skill: "react", level: "medium", type: "truefalse",
    question: "useEffect runs after every render by default.", options: ["True", "False"], answer: "True",
    explanation: "No dependency array = runs after each render."
  },
  {
    id: 143, skill: "react", level: "medium", type: "output",
    question: "What happens?",
    code: 'function Counter() {\\n  const [count, setCount] = useState(0);\\n  useEffect(() => {\\n    document.title = `Count: $\\{count}`;\\n  });\\n  return <button onClick={() => setCount(count+1)}>Count: {count}</button>;\\n}',
    options: ["Title updates every render", "Title updates once", "Infinite loop", "Nothing"],
    answer: "Title updates every render", explanation: "useEffect without dependencies runs each render."
  },
  {
    id: 144, skill: "react", level: "medium", type: "mcq",
    question: "Which updates state based on previous?",
    options: ["setCount(count+1)", "setCount(prev => prev+1)", "count = count+1", "this.setState({count: count+1})"],
    answer: "setCount(prev => prev+1)", explanation: "Functional update ensures latest state."
  },
  {
    id: 145, skill: "react", level: "medium", type: "truefalse",
    question: "useCallback memoizes functions.", options: ["True", "False"], answer: "True",
    explanation: "useCallback returns memoized callback."
  },
  {
    id: 146, skill: "react", level: "medium", type: "output",
    question: "What is problem?",
    code: "function MyComponent() {\n  const [data, setData] = useState(null);\n  useEffect(async () => {\n    const result = await fetchData();\n    setData(result);\n  }, []);\n  return <div>{data}</div>;\n}",
    options: ["useEffect cannot be async", "Missing error handling", "No loading state", "All"],
    answer: "useEffect cannot be async", explanation: "Define async function inside useEffect."
  },
  {
    id: 147, skill: "react", level: "medium", type: "mcq",
    question: "What is useContext?",
    options: ["Access context without prop drilling", "Create context", "Both", "Hook context"],
    answer: "Access context without prop drilling", explanation: "useContext subscribes to context."
  },
  {
    id: 148, skill: "react", level: "medium", type: "truefalse",
    question: "useMemo memoizes values.", options: ["True", "False"], answer: "True",
    explanation: "useMemo returns memoized value."
  },
  {
    id: 149, skill: "react", level: "medium", type: "output",
    question: "What renders?",
    code: "const ThemeContext = React.createContext('light');\nfunction App() {\n  return (\n    <ThemeContext.Provider value='dark'>\n      <Toolbar />\n    </ThemeContext.Provider>\n  );\n}\nfunction Toolbar() {\n  const theme = useContext(ThemeContext);\n  return <div>Theme: {theme}</div>;\n}",
    options: ["Theme: dark", "Theme: light", "Error", "Nothing"], answer: "Theme: dark",
    explanation: "Context provides value to consumers."
  },
  {
    id: 150, skill: "react", level: "medium", type: "mcq",
    question: "What is React.memo?",
    options: ["Memoizes component", "Prevents re-renders", "Both", "Memory optimizer"],
    answer: "Both", explanation: "React.memo memoizes component to prevent re-renders."
  },
  {
    id: 151, skill: "react", level: "medium", type: "truefalse",
    question: "useRef persists across re-renders.", options: ["True", "False"], answer: "True",
    explanation: "useRef returns mutable object persisting."
  },
  {
    id: 152, skill: "react", level: "medium", type: "output",
    question: "What happens when button clicked?",
    code: "function Counter() {\n  const [count, setCount] = useState(0);\n  const increment = () => {\n    setCount(count + 1);\n    setCount(count + 1);\n    setCount(count + 1);\n  };\n  return (\n    <div>\n      <div>Count: {count}</div>\n      <button onClick={increment}>Increment</button>\n    </div>\n  );\n}",
    options: ["Count increases by 1", "Count increases by 3", "No change", "Error"],
    answer: "Count increases by 1", explanation: "React batches state updates in event handlers."
  },
  {
    id: 153, skill: "react", level: "medium", type: "mcq",
    question: "What is custom hook?",
    options: ["Reusable stateful logic", "Custom function", "Hook library", "Component hook"],
    answer: "Reusable stateful logic", explanation: "Custom hooks extract component logic."
  },
  {
    id: 154, skill: "react", level: "medium", type: "truefalse",
    question: "Rules of Hooks: Only call at top level.", options: ["True", "False"], answer: "True",
    explanation: "Don't call hooks inside loops/conditions."
  },
  {
    id: 155, skill: "react", level: "medium", type: "output",
    question: "What renders?",
    code: "function List({ items }) {\n  return (\n    <ul>\n      {items.map((item, index) => (\n        <li key={index}>{item}</li>\n      ))}\n    </ul>\n  );\n}",
    options: ["List with index keys", "Error", "Nothing", "Static list"], answer: "List with index keys",
    explanation: "Using index as key (not recommended for dynamic lists)."
  },
  {
    id: 156, skill: "react", level: "medium", type: "mcq",
    question: "What is code splitting?",
    options: ["Splitting code into chunks", "Loading components lazily", "Both", "Code division"],
    answer: "Both", explanation: "Code splitting reduces initial bundle size."
  },
  {
    id: 157, skill: "react", level: "medium", type: "truefalse",
    question: "React.lazy enables lazy loading.", options: ["True", "False"], answer: "True",
    explanation: "React.lazy loads components lazily."
  },
  {
    id: 158, skill: "react", level: "medium", type: "output",
    question: "What is output?",
    code: "const LazyComponent = React.lazy(() => import('./LazyComponent'));\nfunction App() {\n  return (\n    <Suspense fallback={<div>Loading...</div>}>\n      <LazyComponent />\n    </Suspense>\n  );\n}",
    options: ["Shows Loading... then LazyComponent", "Error", "Nothing", "LazyComponent immediately"],
    answer: "Shows Loading... then LazyComponent", explanation: "Suspense shows fallback while loading."
  },
  {
    id: 159, skill: "react", level: "medium", type: "mcq",
    question: "What is React Portal?",
    options: ["Render children outside DOM hierarchy", "Portal to other DOM", "Both", "Navigation portal"],
    answer: "Render children outside DOM hierarchy", explanation: "Portals render content elsewhere in DOM."
  },
  {
    id: 160, skill: "react", level: "medium", type: "truefalse",
    question: "Error boundaries catch JavaScript errors.", options: ["True", "False"], answer: "True",
    explanation: "Error boundaries catch errors in child components."
  },
  {
    id: 161, skill: "react", level: "medium", type: "output",
    question: "What is problem?",
    code: "function MyComponent() {\n  const [value, setValue] = useState('');\n  useEffect(() => {\n    // Missing cleanup\n    window.addEventListener('resize', handleResize);\n  }, []);\n  return <div>{value}</div>;\n}",
    options: ["Memory leak", "No cleanup", "Both", "No issue"], answer: "Both",
    explanation: "Missing cleanup causes memory leaks."
  },
  {
    id: 162, skill: "react", level: "medium", type: "mcq",
    question: "What is render props?",
    options: ["Technique sharing code", "Props that are functions", "Both", "Rendering props"],
    answer: "Both", explanation: "Render props share code via prop function."
  },
  {
    id: 163, skill: "react", level: "medium", type: "truefalse",
    question: "Higher-order components (HOCs) wrap components.", options: ["True", "False"], answer: "True",
    explanation: "HOCs are functions taking component, returning enhanced component."
  },
  {
    id: 164, skill: "react", level: "medium", type: "output",
    question: "What renders?",
    code: "const withLogger = (WrappedComponent) => {\n  return (props) => {\n    console.log('Rendering:', WrappedComponent.name);\n    return <WrappedComponent {...props} />;\n  };\n};\nconst MyComponent = ({ name }) => <div>Hello {name}</div>;\nconst EnhancedComponent = withLogger(MyComponent);\n// Usage: <EnhancedComponent name='John' />",
    options: ["Hello John with console log", "Error", "Nothing", "Hello John only"],
    answer: "Hello John with console log", explanation: "HOC adds logging functionality."
  },
  {
    id: 165, skill: "react", level: "medium", type: "mcq",
    question: "What is compound components pattern?",
    options: ["Components work together", "Parent-child component communication", "Both", "Component grouping"],
    answer: "Both", explanation: "Compound components share implicit state."
  },
  {
    id: 166, skill: "react", level: "medium", type: "truefalse",
    question: "React supports uncontrolled components.", options: ["True", "False"], answer: "True",
    explanation: "Uncontrolled components use refs, not state."
  },
  {
    id: 167, skill: "react", level: "medium", type: "output",
    question: "What is this component?",
    code: "function Form() {\n  const inputRef = useRef();\n  const handleSubmit = (e) => {\n    e.preventDefault();\n    console.log(inputRef.current.value);\n  };\n  return (\n    <form onSubmit={handleSubmit}>\n      <input ref={inputRef} />\n      <button type='submit'>Submit</button>\n    </form>\n  );\n}",
    options: ["Uncontrolled component", "Controlled component", "Error", "Static form"],
    answer: "Uncontrolled component", explanation: "Uses ref instead of state."
  },
  {
    id: 168, skill: "react", level: "medium", type: "mcq",
    question: "What is prop types?",
    options: ["Type checking for props", "Prop validation", "Both", "Prop documentation"],
    answer: "Both", explanation: "PropTypes validate prop types."
  },
  {
    id: 169, skill: "react", level: "medium", type: "truefalse",
    question: "Default props provide default values.", options: ["True", "False"], answer: "True",
    explanation: "defaultProps sets default prop values."
  },
  {
    id: 170, skill: "react", level: "medium", type: "output",
    question: "What happens?",
    code: "Button.propTypes = {\n  variant: PropTypes.oneOf(['primary', 'secondary']),\n  size: PropTypes.oneOf(['small', 'medium', 'large'])\n};\nButton.defaultProps = {\n  variant: 'primary',\n  size: 'medium'\n};\n// Usage: <Button />",
    options: ["Button with primary/medium defaults", "Error", "Nothing", "Custom button"],
    answer: "Button with primary/medium defaults", explanation: "Uses defaultProps when props not provided."
  },

  // Hard React (30)
  {
    id: 171, skill: "react", level: "hard", type: "mcq",
    question: "What is reconciliation?",
    options: ["React's diffing algorithm", "Virtual DOM comparison", "Both", "State reconciliation"],
    answer: "Both", explanation: "Reconciliation compares Virtual DOM trees."
  },
  {
    id: 172, skill: "react", level: "hard", type: "truefalse",
    question: "Keys help React identify elements.", options: ["True", "False"], answer: "True",
    explanation: "Keys track element identity across renders."
  },
  {
    id: 173, skill: "react", level: "hard", type: "output",
    question: "What is optimization issue?",
    code: "function Parent() {\n  const [count, setCount] = useState(0);\n  const expensiveCalc = () => {\n    // Expensive computation\n    return count * 2;\n  };\n  return (\n    <div>\n      <Child data={expensiveCalc()} />\n      <button onClick={() => setCount(count+1)}>Increment</button>\n    </div>\n  );\n}",
    options: ["Recomputes expensiveCalc every render", "No issue", "Memory leak", "Error"],
    answer: "Recomputes expensiveCalc every render", explanation: "Should use useMemo."
  },
  {
    id: 174, skill: "react", level: "hard", type: "mcq",
    question: "What is React Fiber?",
    options: ["New reconciliation engine", "Enables incremental rendering", "Both", "React architecture"],
    answer: "Both", explanation: "Fiber is reimplementation of reconciliation."
  },
  {
    id: 175, skill: "react", level: "hard", type: "truefalse",
    question: "Concurrent Mode enables interruptible rendering.", options: ["True", "False"], answer: "True",
    explanation: "Concurrent Mode allows pause/resume rendering."
  },
  {
    id: 176, skill: "react", level: "hard", type: "output",
    question: "What is output?",
    code: "function* IdGenerator() {\n  let id = 0;\n  while (true) {\n    yield id++;\n  }\n}\nconst gen = IdGenerator();\nconsole.log(gen.next().value);\nconsole.log(gen.next().value);",
    options: ["0, 1", "1, 2", "undefined, undefined", "Error"], answer: "0, 1",
    explanation: "Generator yields sequential IDs."
  },
  {
    id: 177, skill: "react", level: "hard", type: "mcq",
    question: "What is useTransition?",
    options: ["Hook for transitions", "Marks non-urgent updates", "Both", "Animation hook"],
    answer: "Both", explanation: "useTransition for non-urgent state transitions."
  },
  {
    id: 178, skill: "react", level: "hard", type: "truefalse",
    question: "Suspense works with data fetching.", options: ["True", "False"], answer: "True",
    explanation: "Suspense can suspend data fetching."
  },
  {
    id: 179, skill: "react", level: "hard", type: "output",
    question: "What is output?",
    code: "const ThemeContext = React.createContext();\nfunction App() {\n  return (\n    <ThemeContext.Provider value='dark'>\n      <Toolbar />\n    </ThemeContext.Provider>\n  );\n}\nfunction Toolbar() {\n  return (\n    <ThemeContext.Consumer>\n      {theme => <div>Theme: {theme}</div>}\n    </ThemeContext.Consumer>\n  );\n}",
    options: ["Theme: dark", "Theme: light", "Error", "Nothing"], answer: "Theme: dark",
    explanation: "Consumer accesses context value."
  },
  {
    id: 180, skill: "react", level: "hard", type: "mcq",
    question: "What is React.StrictMode?",
    options: ["Highlights potential problems", "Checks for deprecated APIs", "Both", "Strict rendering"],
    answer: "Both", explanation: "StrictMode activates additional checks."
  },
  {
    id: 181, skill: "react", level: "hard", type: "truefalse",
    question: "React supports server components.", options: ["True", "False"], answer: "True",
    explanation: "React Server Components run on server."
  },
  {
    id: 182, skill: "react", level: "hard", type: "output",
    question: "What renders?",
    code: "function App() {\n  const [state, setState] = useState(0);\n  useEffect(() => {\n    setState(1);\n    console.log('Effect');\n  }, []);\n  console.log('Render');\n  return <div>{state}</div>;\n}",
    options: ["Render, Effect, Render", "Effect, Render", "Render only", "Error"],
    answer: "Render, Effect, Render", explanation: "Effect runs after render, causing re-render."
  },
  {
    id: 183, skill: "react", level: "hard", type: "mcq",
    question: "What is React.memo's second argument?",
    options: ["Custom comparison function", "Props mapper", "Memo config", "None"],
    answer: "Custom comparison function", explanation: "Second arg compares prev/next props."
  },
  {
    id: 184, skill: "react", level: "hard", type: "truefalse",
    question: "useImperativeHandle customizes instance value.", options: ["True", "False"], answer: "True",
    explanation: "useImperativeHandle customizes ref value."
  },
  {
    id: 185, skill: "react", level: "hard", type: "output",
    question: "What is this pattern?",
    code: "const DataContext = React.createContext();\nfunction DataProvider({ children }) {\n  const [data, setData] = useState(null);\n  const value = { data, setData };\n  return (\n    <DataContext.Provider value={value}>\n      {children}\n    </DataContext.Provider>\n  );\n}",
    options: ["Context with state", "Provider pattern", "Both", "Data pattern"],
    answer: "Both", explanation: "Provider component wrapping context with state."
  },
  {
    id: 186, skill: "react", level: "hard", type: "mcq",
    question: "What is React Router?",
    options: ["Routing library", "Declarative routing", "Both", "Navigation"],
    answer: "Both", explanation: "React Router handles routing in React."
  },
  {
    id: 187, skill: "react", level: "hard", type: "truefalse",
    question: "React Query handles server state.", options: ["True", "False"], answer: "True",
    explanation: "React Query manages server state caching."
  },
  {
    id: 188, skill: "react", level: "hard", type: "output",
    question: "What is this?",
    code: "const routes = [\n  { path: '/', element: <Home /> },\n  { path: '/about', element: <About /> },\n  { path: '*', element: <NotFound /> }\n];\nfunction App() {\n  return (\n    <Routes>\n      {routes.map((route, index) => (\n        <Route key={index} {...route} />\n      ))}\n    </Routes>\n  );\n}",
    options: ["React Router v6 config", "Custom routing", "Error", "Static routes"],
    answer: "React Router v6 config", explanation: "React Router v6 uses element prop."
  },
  {
    id: 189, skill: "react", level: "hard", type: "mcq",
    question: "What is Redux?",
    options: ["State management", "Predictable state container", "Both", "React store"],
    answer: "Both", explanation: "Redux manages application state."
  },
  {
    id: 190, skill: "react", level: "hard", type: "truefalse",
    question: "Redux uses single store.", options: ["True", "False"], answer: "True",
    explanation: "Redux has single source of truth."
  },
  {
    id: 191, skill: "react", level: "hard", type: "output",
    question: "What is output?",
    code: "const reducer = (state = 0, action) => {\n  switch (action.type) {\n    case 'INCREMENT': return state + 1;\n    case 'DECREMENT': return state - 1;\n    default: return state;\n  }\n};\nconst store = createStore(reducer);\nstore.dispatch({ type: 'INCREMENT' });\nstore.dispatch({ type: 'INCREMENT' });\nconsole.log(store.getState());",
    options: ["2", "1", "0", "Error"], answer: "2",
    explanation: "Reducer increments state twice."
  },
  {
    id: 192, skill: "react", level: "hard", type: "mcq",
    question: "What is Next.js?",
    options: ["React framework", "SSR/SSG support", "Both", "React toolkit"],
    answer: "Both", explanation: "Next.js is React framework with SSR."
  },
  {
    id: 193, skill: "react", level: "hard", type: "truefalse",
    question: "Next.js has file-based routing.", options: ["True", "False"], answer: "True",
    explanation: "Pages directory defines routes."
  },
  {
    id: 194, skill: "react", level: "hard", type: "output",
    question: "What is this?",
    code: "export async function getServerSideProps(context) {\n  const res = await fetch('https://api.example.com/data');\n  const data = await res.json();\n  return { props: { data } };\n}\nfunction Page({ data }) {\n  return <div>{JSON.stringify(data)}</div>;\n}",
    options: ["Next.js server-side props", "API fetching", "Error", "Static props"],
    answer: "Next.js server-side props", explanation: "getServerSideProps fetches at request time."
  },
  {
    id: 195, skill: "react", level: "hard", type: "mcq",
    question: "What is React Testing Library?",
    options: ["Testing utilities", "User-centric testing", "Both", "Unit testing"],
    answer: "Both", explanation: "Tests components from user perspective."
  },
  {
    id: 196, skill: "react", level: "hard", type: "truefalse",
    question: "Testing Library encourages testing implementation details.", options: ["True", "False"], answer: "False",
    explanation: "Avoid testing implementation details."
  },
  {
    id: 197, skill: "react", level: "hard", type: "output",
    question: "What does this test?",
    code: "test('button click', () => {\n  render(<Button>Click me</Button>);\n  const button = screen.getByText(/click me/i);\n  fireEvent.click(button);\n  expect(button).toHaveBeenCalled();\n})",
    options: ["Button click event", "Error", "Button rendering", "Button text"],
    answer: "Button click event", explanation: "Tests button click interaction."
  },
  {
    id: 198, skill: "react", level: "hard", type: "mcq",
    question: "What is Storybook?",
    options: ["UI component development", "Component documentation", "Both", "Story tool"],
    answer: "Both", explanation: "Storybook develops UI components in isolation."
  },
  {
    id: 199, skill: "react", level: "hard", type: "truefalse",
    question: "React supports TypeScript.", options: ["True", "False"], answer: "True",
    explanation: "React has excellent TypeScript support."
  },
  {
    id: 200, skill: "react", level: "hard", type: "output",
    question: "What is this?",
    code: "interface Props {\n  name: string;\n  age?: number;\n}\nconst Component: React.FC<Props> = ({ name, age = 18 }) => {\n  return <div>{name} is {age}</div>;\n}",
    options: ["TypeScript React component", "JavaScript component", "Error", "Generic component"],
    answer: "TypeScript React component", explanation: "TypeScript interface defines props."
  },
   {
    id: 201, skill: "python", level: "beginner", type: "mcq",
    question: "Which keyword defines a function in Python?",
    options: ["def", "function", "func", "define"], answer: "def",
    explanation: "def keyword is used to define functions in Python."
  },
  {
    id: 202, skill: "python", level: "beginner", type: "truefalse",
    question: "Python uses curly braces {} for code blocks.", 
    options: ["True", "False"], answer: "False",
    explanation: "Python uses indentation for code blocks, not curly braces."
  },
  {
    id: 203, skill: "python", level: "beginner", type: "output",
    question: "What is the output? print(type([]))",
    code: "print(type([]))", options: ["'list'", "'array'", "'object'", "'tuple'"],
    answer: "'list'", explanation: "Empty brackets create a list in Python."
  },
  {
    id: 204, skill: "python", level: "beginner", type: "mcq",
    question: "Which is used for comments in Python?",
    options: ["//", "#", "/* */", "<!-- -->"], answer: "#",
    explanation: "# is used for single-line comments in Python."
  },
  {
    id: 205, skill: "python", level: "beginner", type: "truefalse",
    question: "Python is dynamically typed.", options: ["True", "False"], answer: "True",
    explanation: "Python determines variable types at runtime."
  },
  {
    id: 206, skill: "python", level: "beginner", type: "output",
    question: "What is the output? print(3 * 'hi')",
    code: "print(3 * 'hi')", options: ["'hihihi'", "'hi hi hi'", "Error", "3hi"],
    answer: "'hihihi'", explanation: "String multiplication repeats the string."
  },
  {
    id: 207, skill: "python", level: "beginner", type: "mcq",
    question: "Which creates a tuple?",
    options: ["(1,2,3)", "[1,2,3]", "{1,2,3}", "1,2,3"], answer: "(1,2,3)",
    explanation: "Tuples are created with parentheses."
  },
  {
    id: 208, skill: "python", level: "beginner", type: "truefalse",
    question: "Python lists are mutable.", options: ["True", "False"], answer: "True",
    explanation: "List elements can be changed after creation."
  },
  {
    id: 209, skill: "python", level: "beginner", type: "output",
    question: "What is the output? print('Hello'.upper())",
    code: "print('Hello'.upper())", options: ["'HELLO'", "'hello'", "Error", "'Hello'"],
    answer: "'HELLO'", explanation: "upper() converts string to uppercase."
  },
  {
    id: 210, skill: "python", level: "beginner", type: "mcq",
    question: "Which module is used for mathematical operations?",
    options: ["math", "calc", "numpy", "arithmetic"], answer: "math",
    explanation: "math module provides mathematical functions."
  },
  {
    id: 211, skill: "python", level: "medium", type: "truefalse",
    question: "Python supports multiple inheritance.", options: ["True", "False"], answer: "True",
    explanation: "Python classes can inherit from multiple parent classes."
  },
  {
    id: 212, skill: "python", level: "medium", type: "output",
    question: "What is the output? print([x for x in range(5) if x%2==0])",
    code: "print([x for x in range(5) if x%2==0])", options: ["[0,2,4]", "[1,3]", "[0,1,2,3,4]", "[2,4]"],
    answer: "[0,2,4]", explanation: "List comprehension filters even numbers."
  },
  {
    id: 213, skill: "python", level: "medium", type: "mcq",
    question: "What is a lambda function?",
    options: ["Anonymous function", "Inline function", "Both A and B", "Named function"],
    answer: "Both A and B", explanation: "Lambda functions are anonymous inline functions."
  },
  {
    id: 214, skill: "python", level: "medium", type: "truefalse",
    question: "Python has GIL (Global Interpreter Lock).", options: ["True", "False"], answer: "True",
    explanation: "GIL prevents multiple threads from executing Python bytecodes simultaneously."
  },
  {
    id: 215, skill: "python", level: "medium", type: "output",
    question: "What is the output? print('Hello'.replace('l', 'x'))",
    code: "print('Hello'.replace('l', 'x'))", options: ["'Hexxo'", "'HeXXo'", "'Hexlo'", "'Hello'"],
    answer: "'Hexxo'", explanation: "replace() replaces all occurrences by default."
  },
  {
    id: 216, skill: "python", level: "medium", type: "mcq",
    question: "Which is used for virtual environments?",
    options: ["venv", "virtualenv", "pipenv", "All of above"], answer: "All of above",
    explanation: "All are tools for creating Python virtual environments."
  },
  {
    id: 217, skill: "python", level: "medium", type: "truefalse",
    question: "__init__ is a constructor method.", options: ["True", "False"], answer: "True",
    explanation: "__init__ initializes new object instances."
  },
  {
    id: 218, skill: "python", level: "hard", type: "output",
    question: "What is the output? print({x:x*x for x in range(3)})",
    code: "print({x:x*x for x in range(3)})", options: ["{0:0,1:1,2:4}", "{0,1,4}", "Error", "[]"],
    answer: "{0:0,1:1,2:4}", explanation: "Dictionary comprehension creates key-value pairs."
  },
  {
    id: 219, skill: "python", level: "hard", type: "mcq",
    question: "What is decorator in Python?",
    options: ["Function that modifies another function", "@ syntax", "Both", "Class wrapper"],
    answer: "Both", explanation: "Decorators use @ syntax to modify functions."
  },
  {
    id: 220, skill: "python", level: "hard", type: "truefalse",
    question: "Python has public, private, and protected access modifiers.", 
    options: ["True", "False"], answer: "True",
    explanation: "Single underscore _ for protected, double __ for private."
  },
  {
    id: 221, skill: "python", level: "hard", type: "output",
    question: "What is the output? print(__name__)",
    code: "print(__name__)", options: ["'__main__'", "'__name__'", "Error", "None"],
    answer: "'__main__'", explanation: "__name__ is '__main__' when script runs directly."
  },
  {
    id: 222, skill: "python", level: "hard", type: "mcq",
    question: "Which is used for asynchronous programming?",
    options: ["asyncio", "async/await", "Both", "threading"],
    answer: "Both", explanation: "asyncio with async/await for async programming."
  },
  {
    id: 223, skill: "python", level: "beginner", type: "mcq",
    question: "Which data type is immutable?",
    options: ["tuple", "list", "dict", "set"], answer: "tuple",
    explanation: "Tuples are immutable, cannot be changed after creation."
  },
  {
    id: 224, skill: "python", level: "beginner", type: "truefalse",
    question: "Python is an interpreted language.", options: ["True", "False"], answer: "True",
    explanation: "Python code is executed line by line by interpreter."
  },
  {
    id: 225, skill: "python", level: "beginner", type: "output",
    question: "What is the output? print(len('Python'))",
    code: "print(len('Python'))", options: ["6", "7", "Error", "5"],
    answer: "6", explanation: "len() returns number of characters in string."
  },
  {
    id: 226, skill: "python", level: "medium", type: "mcq",
    question: "What is __name__ == '__main__' used for?",
    options: ["Entry point check", "Module execution", "Both", "Import guard"],
    answer: "Both", explanation: "Checks if script is run directly or imported."
  },
  {
    id: 227, skill: "python", level: "medium", type: "truefalse",
    question: "Python supports method overloading.", options: ["True", "False"], answer: "False",
    explanation: "Python doesn't support traditional method overloading."
  },
  {
    id: 228, skill: "python", level: "medium", type: "output",
    question: "What is the output? print('Python'[1:4])",
    code: "print('Python'[1:4])", options: ["'yth'", "'Pyt'", "'thon'", "'ytho'"],
    answer: "'yth'", explanation: "String slicing from index 1 to 3."
  },
  {
    id: 229, skill: "python", level: "hard", type: "mcq",
    question: "What is generator in Python?",
    options: ["Returns iterator", "Uses yield", "Memory efficient", "All"],
    answer: "All", explanation: "Generators yield values one at a time."
  },
  {
    id: 230, skill: "python", level: "hard", type: "truefalse",
    question: "Python supports operator overloading.", options: ["True", "False"], answer: "True",
    explanation: "Special methods like __add__ overload operators."
  },
  {
    id: 231, skill: "python", level: "beginner", type: "output",
    question: "What is the output? print(5 // 2)",
    code: "print(5 // 2)", options: ["2", "2.5", "3", "2.0"],
    answer: "2", explanation: "// is floor division, returns integer."
  },
  {
    id: 232, skill: "python", level: "beginner", type: "mcq",
    question: "Which is correct dictionary syntax?",
    options: ["{'key': 'value'}", "dict(key='value')", "Both", "['key': 'value']"],
    answer: "Both", explanation: "Both syntaxes create dictionaries."
  },
  {
    id: 233, skill: "python", level: "medium", type: "truefalse",
    question: "Python has switch-case statement.", options: ["True", "False"], answer: "False",
    explanation: "Python uses if-elif-else, no switch-case (until Python 3.10 match)."
  },
  {
    id: 234, skill: "python", level: "medium", type: "output",
    question: "What is the output? print(bool([]))",
    code: "print(bool([]))", options: ["False", "True", "Error", "None"],
    answer: "False", explanation: "Empty list is falsy in Python."
  },
  {
    id: 235, skill: "python", level: "hard", type: "mcq",
    question: "What is metaclass in Python?",
    options: ["Class of class", "Creates classes", "Both", "Base class"],
    answer: "Both", explanation: "Metaclass defines class creation behavior."
  },
  {
    id: 236, skill: "python", level: "hard", type: "truefalse",
    question: "Python has garbage collection.", options: ["True", "False"], answer: "True",
    explanation: "Automatic memory management with reference counting."
  },
  {
    id: 237, skill: "python", level: "beginner", type: "output",
    question: "What is the output? print('a' in 'apple')",
    code: "print('a' in 'apple')", options: ["True", "False", "Error", "1"],
    answer: "True", explanation: "in operator checks substring existence."
  },
  {
    id: 238, skill: "python", level: "beginner", type: "mcq",
    question: "Which loop iterates over sequence?",
    options: ["for", "while", "do-while", "loop"],
    answer: "for", explanation: "for loop iterates over sequences."
  },
  {
    id: 239, skill: "python", level: "medium", type: "truefalse",
    question: "Python supports functional programming.", options: ["True", "False"], answer: "True",
    explanation: "Functions are first-class citizens in Python."
  },
  {
    id: 240, skill: "python", level: "medium", type: "output",
    question: "What is the output? print(round(3.14159, 2))",
    code: "print(round(3.14159, 2))", options: ["3.14", "3.15", "3.141", "3.142"],
    answer: "3.14", explanation: "round() with 2 decimal places."
  },

  // ================== NEXT.JS QUESTIONS (40) ==================
  {
    id: 241, skill: "nextjs", level: "beginner", type: "mcq",
    question: "What is Next.js?",
    options: ["React framework", "Server-side rendering", "Static site generation", "All of above"],
    answer: "All of above", explanation: "Next.js is a React framework with SSR and SSG."
  },
  {
    id: 242, skill: "nextjs", level: "beginner", type: "truefalse",
    question: "Next.js has built-in routing.", options: ["True", "False"], answer: "True",
    explanation: "Next.js uses file-based routing system."
  },
  {
    id: 243, skill: "nextjs", level: "beginner", type: "output",
    question: "Which folder contains pages in Next.js?",
    options: ["pages/", "src/", "components/", "app/"], 
    answer: "pages/", explanation: "pages directory contains route files."
  },
  {
    id: 244, skill: "nextjs", level: "beginner", type: "mcq",
    question: "Which command runs Next.js dev server?",
    options: ["npm run dev", "next dev", "Both", "npm start"],
    answer: "Both", explanation: "Both commands work for development server."
  },
  {
    id: 245, skill: "nextjs", level: "beginner", type: "truefalse",
    question: "Next.js supports CSS modules out of the box.", 
    options: ["True", "False"], answer: "True",
    explanation: "CSS modules work without configuration."
  },
  {
    id: 246, skill: "nextjs", level: "medium", type: "mcq",
    question: "What is getStaticProps?",
    options: ["SSG data fetching", "Runs at build time", "Both", "Client-side fetching"],
    answer: "Both", explanation: "getStaticProps fetches data at build time for SSG."
  },
  {
    id: 247, skill: "nextjs", level: "medium", type: "truefalse",
    question: "Next.js supports API routes.", options: ["True", "False"], answer: "True",
    explanation: "API routes are in pages/api directory."
  },
  {
    id: 248, skill: "nextjs", level: "medium", type: "output",
    question: "What does useRouter hook return?",
    options: ["Router object", "Path info", "Both", "Navigation"],
    answer: "Both", explanation: "Provides router information and methods."
  },
  {
    id: 249, skill: "nextjs", level: "medium", type: "mcq",
    question: "What is incremental static regeneration?",
    options: ["Update static pages after build", "Revalidate pages", "Both", "SSR feature"],
    answer: "Both", explanation: "ISR updates static content without rebuilding."
  },
  {
    id: 250, skill: "nextjs", level: "hard", type: "truefalse",
    question: "Next.js supports middleware.", options: ["True", "False"], answer: "True",
    explanation: "Middleware runs before requests are completed."
  },
  {
    id: 251, skill: "nextjs", level: "hard", type: "mcq",
    question: "What is Next.js Image component advantage?",
    options: ["Automatic optimization", "Lazy loading", "Responsive images", "All"],
    answer: "All", explanation: "Image component provides all these optimizations."
  },
  {
    id: 252, skill: "nextjs", level: "hard", type: "output",
    question: "Where are environment variables stored?",
    options: [".env.local", "next.config.js", "Both", "package.json"],
    answer: "Both", explanation: ".env.local for variables, next.config.js for config."
  },
  {
    id: 253, skill: "nextjs", level: "beginner", type: "mcq",
    question: "Which creates dynamic routes?",
    options: ["[id].js", "[slug].js", "Both", "dynamic.js"],
    answer: "Both", explanation: "Brackets [] create dynamic route segments."
  },
  {
    id: 254, skill: "nextjs", level: "beginner", type: "truefalse",
    question: "Next.js supports TypeScript.", options: ["True", "False"], answer: "True",
    explanation: "TypeScript support built-in with tsconfig."
  },
  {
    id: 255, skill: "nextjs", level: "medium", type: "output",
    question: "What is getServerSideProps?",
    options: ["SSR data fetching", "Runs per request", "Both", "Static data"],
    answer: "Both", explanation: "getServerSideProps runs on each request for SSR."
  },
  {
    id: 256, skill: "nextjs", level: "medium", type: "mcq",
    question: "What is Link component for?",
    options: ["Client-side navigation", "Prefetching", "Both", "External links"],
    answer: "Both", explanation: "Link handles client navigation with prefetching."
  },
  {
    id: 257, skill: "nextjs", level: "medium", type: "truefalse",
    question: "Next.js has built-in ESLint.", options: ["True", "False"], answer: "True",
    explanation: "ESLint configured by default in Next.js."
  },
  {
    id: 258, skill: "nextjs", level: "hard", type: "output",
    question: "What is next/head used for?",
    options: ["Document head management", "SEO optimization", "Both", "Script loading"],
    answer: "Both", explanation: "Manages <head> tag for SEO and scripts."
  },
  {
    id: 259, skill: "nextjs", level: "hard", type: "mcq",
    question: "What is Next.js analytics?",
    options: ["Performance monitoring", "Real user metrics", "Both", "Error tracking"],
    answer: "Both", explanation: "Built-in analytics for performance monitoring."
  },
  {
    id: 260, skill: "nextjs", level: "hard", type: "truefalse",
    question: "Next.js supports internationalization.", options: ["True", "False"], answer: "True",
    explanation: "Built-in i18n routing and locale detection."
  },
  {
    id: 261, skill: "nextjs", level: "beginner", type: "output",
    question: "Which creates API route?",
    options: ["pages/api/hello.js", "api/hello.js", "Both", "routes/api.js"],
    answer: "pages/api/hello.js", explanation: "API routes go in pages/api directory."
  },
  {
    id: 262, skill: "nextjs", level: "beginner", type: "mcq",
    question: "What is next.config.js?",
    options: ["Configuration file", "Customizes build", "Both", "Environment config"],
    answer: "Both", explanation: "Customizes Next.js build and runtime configuration."
  },
  {
    id: 263, skill: "nextjs", level: "medium", type: "truefalse",
    question: "Next.js supports CSS-in-JS libraries.", options: ["True", "False"], answer: "True",
    explanation: "Supports styled-components, emotion, etc."
  },
  {
    id: 264, skill: "nextjs", level: "medium", type: "output",
    question: "What is dynamic import?",
    options: ["Code splitting", "Lazy loading", "Both", "Module loading"],
    answer: "Both", explanation: "dynamic() imports modules with code splitting."
  },
  {
    id: 265, skill: "nextjs", level: "hard", type: "mcq",
    question: "What is next/script?",
    options: ["Third-party script optimization", "Load strategies", "Both", "Analytics"],
    answer: "Both", explanation: "Optimizes loading of third-party scripts."
  },
  {
    id: 266, skill: "nextjs", level: "hard", type: "truefalse",
    question: "Next.js supports PWA.", options: ["True", "False"], answer: "True",
    explanation: "Can be configured as Progressive Web App."
  },
  {
    id: 267, skill: "nextjs", level: "beginner", type: "output",
    question: "Which optimizes images?",
    options: ["next/image", "img tag", "Both", "picture element"],
    answer: "next/image", explanation: "next/image automatically optimizes images."
  },
  {
    id: 268, skill: "nextjs", level: "beginner", type: "mcq",
    question: "What is next/link advantage?",
    options: ["Client-side navigation", "Prefetching", "Both", "SEO friendly"],
    answer: "Both", explanation: "Faster navigation with automatic prefetching."
  },
  {
    id: 269, skill: "nextjs", level: "medium", type: "truefalse",
    question: "Next.js supports AMP.", options: ["True", "False"], answer: "True",
    explanation: "Accelerated Mobile Pages support available."
  },
  {
    id: 270, skill: "nextjs", level: "medium", type: "output",
    question: "What is next/error?",
    options: ["Error page component", "Error handling", "Both", "Debugging"],
    answer: "Both", explanation: "Custom error page component for error handling."
  },
  {
    id: 271, skill: "nextjs", level: "hard", type: "mcq",
    question: "What is next/dynamic?",
    options: ["Dynamic imports", "Code splitting", "Both", "Lazy loading"],
    answer: "Both", explanation: "Dynamic component loading with code splitting."
  },
  {
    id: 272, skill: "nextjs", level: "hard", type: "truefalse",
    question: "Next.js supports custom server.", options: ["True", "False"], answer: "True",
    explanation: "Can use custom Express.js or other Node.js server."
  },
  {
    id: 273, skill: "nextjs", level: "beginner", type: "output",
    question: "Which file for global styles?",
    options: ["styles/globals.css", "app.css", "Both", "global.css"],
    answer: "styles/globals.css", explanation: "Global styles in styles/globals.css."
  },
  {
    id: 274, skill: "nextjs", level: "beginner", type: "mcq",
    question: "What is _app.js?",
    options: ["App component", "Layout wrapper", "Both", "Entry point"],
    answer: "Both", explanation: "Custom App component that wraps all pages."
  },
  {
    id: 275, skill: "nextjs", level: "medium", type: "truefalse",
    question: "Next.js supports React Server Components.", options: ["True", "False"], answer: "True",
    explanation: "Experimental support for React Server Components."
  },
  {
    id: 276, skill: "nextjs", level: "medium", type: "output",
    question: "What is next/head used for?",
    options: ["SEO", "Meta tags", "Both", "Scripts"],
    answer: "Both", explanation: "Manages document head for SEO and meta tags."
  },
  {
    id: 277, skill: "nextjs", level: "hard", type: "mcq",
    question: "What is next/font?",
    options: ["Font optimization", "Self-hosting", "Both", "Google Fonts"],
    answer: "Both", explanation: "Optimizes fonts with automatic self-hosting."
  },
  {
    id: 278, skill: "nextjs", level: "hard", type: "truefalse",
    question: "Next.js supports Edge Functions.", options: ["True", "False"], answer: "True",
    explanation: "Edge Runtime for serverless functions at edge."
  },
  {
    id: 279, skill: "nextjs", level: "beginner", type: "output",
    question: "What is public directory for?",
    options: ["Static files", "Images", "Both", "Components"],
    answer: "Both", explanation: "public/ contains static assets like images."
  },
  {
    id: 280, skill: "nextjs", level: "beginner", type: "mcq",
    question: "What is next/script loading strategies?",
    options: ["beforeInteractive", "afterInteractive", "lazyOnload", "All"],
    answer: "All", explanation: "Multiple strategies for script loading."
  },

  // ================== NODE.JS QUESTIONS (40) ==================
  {
    id: 281, skill: "nodejs", level: "beginner", type: "mcq",
    question: "What is Node.js?",
    options: ["JavaScript runtime", "Built on V8", "Server-side JS", "All"],
    answer: "All", explanation: "Node.js is a JavaScript runtime built on Chrome's V8."
  },
  {
    id: 282, skill: "nodejs", level: "beginner", type: "truefalse",
    question: "Node.js is single-threaded.", options: ["True", "False"], answer: "True",
    explanation: "Node.js uses single-threaded event loop model."
  },
  {
    id: 283, skill: "nodejs", level: "beginner", type: "output",
    question: "How to import module in Node.js?",
    options: ["require()", "import", "Both", "include()"],
    answer: "Both", explanation: "Both CommonJS and ES modules supported."
  },
  {
    id: 284, skill: "nodejs", level: "beginner", type: "mcq",
    question: "Which handles async operations?",
    options: ["Event loop", "Callbacks", "Promises", "All"],
    answer: "All", explanation: "Node.js uses all for async operations."
  },
  {
    id: 285, skill: "nodejs", level: "beginner", type: "truefalse",
    question: "Node.js has built-in HTTP module.", options: ["True", "False"], answer: "True",
    explanation: "http module creates HTTP servers."
  },
  {
    id: 286, skill: "nodejs", level: "medium", type: "mcq",
    question: "What is npm?",
    options: ["Node package manager", "Registry", "Both", "Node module"],
    answer: "Both", explanation: "npm is package manager and registry."
  },
  {
    id: 287, skill: "nodejs", level: "medium", type: "output",
    question: "What does process.env contain?",
    options: ["Environment variables", "System info", "Both", "Config"],
    answer: "Environment variables", explanation: "process.env stores environment variables."
  },
  {
    id: 288, skill: "nodejs", level: "medium", type: "truefalse",
    question: "Node.js supports worker threads.", options: ["True", "False"], answer: "True",
    explanation: "worker_threads module for CPU-intensive tasks."
  },
  {
    id: 289, skill: "nodejs", level: "hard", type: "mcq",
    question: "What is Stream in Node.js?",
    options: ["Data flow abstraction", "Handles large data", "Both", "File operation"],
    answer: "Both", explanation: "Streams handle data in chunks for efficiency."
  },
  {
    id: 290, skill: "nodejs", level: "hard", type: "output",
    question: "What is EventEmitter?",
    options: ["Event handling class", "Observer pattern", "Both", "Async pattern"],
    answer: "Both", explanation: "EventEmitter implements observer pattern."
  },
  {
    id: 291, skill: "nodejs", level: "beginner", type: "truefalse",
    question: "Node.js can create web servers.", options: ["True", "False"], answer: "True",
    explanation: "http.createServer() creates web servers."
  },
  {
    id: 292, skill: "nodejs", level: "beginner", type: "mcq",
    question: "Which is Node.js file system module?",
    options: ["fs", "file", "filesystem", "io"],
    answer: "fs", explanation: "fs module handles file operations."
  },
  {
    id: 293, skill: "nodejs", level: "medium", type: "output",
    question: "What is package.json?",
    options: ["Project manifest", "Dependencies", "Both", "Configuration"],
    answer: "Both", explanation: "Defines project metadata and dependencies."
  },
  {
    id: 294, skill: "nodejs", level: "medium", type: "truefalse",
    question: "Node.js has REPL.", options: ["True", "False"], answer: "True",
    explanation: "Read-Eval-Print Loop for interactive JavaScript."
  },
  {
    id: 295, skill: "nodejs", level: "hard", type: "mcq",
    question: "What is cluster module?",
    options: ["Multi-core support", "Load balancing", "Both", "Process management"],
    answer: "Both", explanation: "Creates child processes to utilize multiple cores."
  },
  {
    id: 296, skill: "nodejs", level: "hard", type: "output",
    question: "What is Buffer?",
    options: ["Binary data", "Raw memory", "Both", "String handling"],
    answer: "Both", explanation: "Buffer handles binary data in raw memory."
  },
  {
    id: 297, skill: "nodejs", level: "beginner", type: "truefalse",
    question: "Node.js is cross-platform.", options: ["True", "False"], answer: "True",
    explanation: "Runs on Windows, macOS, Linux."
  },
  {
    id: 298, skill: "nodejs", level: "beginner", type: "mcq",
    question: "Which starts Node.js application?",
    options: ["node app.js", "npm start", "Both", "node start"],
    answer: "Both", explanation: "Both commands start Node.js apps."
  },
  {
    id: 299, skill: "nodejs", level: "medium", type: "output",
    question: "What is middleware?",
    options: ["Request handler", "Pipeline function", "Both", "Route handler"],
    answer: "Both", explanation: "Middleware functions in request-response cycle."
  },
  {
    id: 300, skill: "nodejs", level: "medium", type: "truefalse",
    question: "Node.js supports CommonJS modules.", options: ["True", "False"], answer: "True",
    explanation: "Default module system using require() and module.exports."
  },
  {
    id: 301, skill: "nodejs", level: "hard", type: "mcq",
    question: "What is libuv?",
    options: ["Cross-platform async library", "Event loop", "Both", "Thread pool"],
    answer: "Both", explanation: "libuv provides event loop and async I/O."
  },
  {
    id: 302, skill: "nodejs", level: "hard", type: "output",
    question: "What is NODE_ENV?",
    options: ["Environment variable", "Development/production", "Both", "Config"],
    answer: "Both", explanation: "Sets environment for development or production."
  },
  {
    id: 303, skill: "nodejs", level: "beginner", type: "truefalse",
    question: "Node.js has path module.", options: ["True", "False"], answer: "True",
    explanation: "path module handles file paths."
  },
  {
    id: 304, skill: "nodejs", level: "beginner", type: "mcq",
    question: "Which installs dependencies?",
    options: ["npm install", "npm i", "Both", "node install"],
    answer: "Both", explanation: "Both npm install and npm i work."
  },
  {
    id: 305, skill: "nodejs", level: "medium", type: "output",
    question: "What is nodemon?",
    options: ["Development tool", "Auto-restart", "Both", "Debugger"],
    answer: "Both", explanation: "Monitors changes and restarts server automatically."
  },
  {
    id: 306, skill: "nodejs", level: "medium", type: "truefalse",
    question: "Node.js supports ES6 modules.", options: ["True", "False"], answer: "True",
    explanation: "Can use import/export with .mjs files or package.json type."
  },
  {
    id: 307, skill: "nodejs", level: "hard", type: "mcq",
    question: "What is event loop?",
    options: ["Async handling", "Non-blocking I/O", "Both", "Thread scheduler"],
    answer: "Both", explanation: "Event loop handles async callbacks and I/O."
  },
  {
    id: 308, skill: "nodejs", level: "hard", type: "output",
    question: "What is util.promisify?",
    options: ["Callback to promise", "Async conversion", "Both", "Promise wrapper"],
    answer: "Both", explanation: "Converts callback-based functions to promises."
  },
  {
    id: 309, skill: "nodejs", level: "beginner", type: "truefalse",
    question: "Node.js can read/write files.", options: ["True", "False"], answer: "True",
    explanation: "fs module provides file system operations."
  },
  {
    id: 310, skill: "nodejs", level: "beginner", type: "mcq",
    question: "Which creates HTTP server?",
    options: ["http.createServer()", "new http.Server()", "Both", "Server()"],
    answer: "Both", explanation: "Both methods create HTTP servers."
  },
  {
    id: 311, skill: "nodejs", level: "medium", type: "output",
    question: "What is express.js?",
    options: ["Web framework", "Middleware", "Both", "HTTP server"],
    answer: "Both", explanation: "Express is minimal web framework with middleware."
  },
  {
    id: 312, skill: "nodejs", level: "medium", type: "truefalse",
    question: "Node.js supports WebSockets.", options: ["True", "False"], answer: "True",
    explanation: "WebSocket support via ws or socket.io packages."
  },
  {
    id: 313, skill: "nodejs", level: "hard", type: "mcq",
    question: "What is process.nextTick?",
    options: ["Microtask queue", "Immediate execution", "Both", "Timer"],
    answer: "Both", explanation: "Schedules callback in microtask queue."
  },
  {
    id: 314, skill: "nodejs", level: "hard", type: "output",
    question: "What is crypto module?",
    options: ["Encryption", "Hashing", "Both", "Security"],
    answer: "Both", explanation: "Provides cryptographic functionality."
  },
  {
    id: 315, skill: "nodejs", level: "beginner", type: "truefalse",
    question: "Node.js has os module.", options: ["True", "False"], answer: "True",
    explanation: "os module provides operating system information."
  },
  {
    id: 316, skill: "nodejs", level: "beginner", type: "mcq",
    question: "Which runs JavaScript code?",
    options: ["node", "npm", "Both", "js"],
    answer: "node", explanation: "node command executes JavaScript files."
  },
  {
    id: 317, skill: "nodejs", level: "medium", type: "output",
    question: "What is global object?",
    options: ["Global scope", "Window equivalent", "Both", "Namespace"],
    answer: "Both", explanation: "global is Node.js equivalent of browser window."
  },
  {
    id: 318, skill: "nodejs", level: "medium", type: "truefalse",
    question: "Node.js supports child processes.", options: ["True", "False"], answer: "True",
    explanation: "child_process module spawns subprocesses."
  },
  {
    id: 319, skill: "nodejs", level: "hard", type: "mcq",
    question: "What is process object?",
    options: ["Current process", "Information", "Both", "Environment"],
    answer: "Both", explanation: "Provides information about current Node.js process."
  },
  {
    id: 320, skill: "nodejs", level: "hard", type: "output",
    question: "What is module.exports?",
    options: ["Export object", "Public API", "Both", "Module interface"],
    answer: "Both", explanation: "Exports module's public API in CommonJS."
  },

  // ================== SQL QUESTIONS (40) ==================
  {
    id: 321, skill: "sql", level: "beginner", type: "mcq",
    question: "What does SQL stand for?",
    options: ["Structured Query Language", "Simple Query Language", "Standard Query Language", "System Query Language"],
    answer: "Structured Query Language", explanation: "SQL manages relational databases."
  },
  {
    id: 322, skill: "sql", level: "beginner", type: "truefalse",
    question: "SQL is case-sensitive.", options: ["True", "False"], answer: "False",
    explanation: "SQL keywords are case-insensitive."
  },
  {
    id: 323, skill: "sql", level: "beginner", type: "output",
    question: "Which retrieves all data?",
    options: ["SELECT * FROM users", "GET * FROM users", "FIND * FROM users", "RETRIEVE * FROM users"],
    answer: "SELECT * FROM users", explanation: "* selects all columns, FROM specifies table."
  },
  {
    id: 324, skill: "sql", level: "beginner", type: "mcq",
    question: "Which filters rows?",
    options: ["WHERE", "HAVING", "FILTER", "CONDITION"],
    answer: "WHERE", explanation: "WHERE clause filters rows."
  },
  {
    id: 325, skill: "sql", level: "beginner", type: "truefalse",
    question: "ORDER BY sorts results.", options: ["True", "False"], answer: "True",
    explanation: "ORDER BY sorts query results."
  },
  {
    id: 326, skill: "sql", level: "medium", type: "output",
    question: "What is JOIN?",
    options: ["Combine tables", "Merge rows", "Both", "Link queries"],
    answer: "Both", explanation: "JOIN combines data from multiple tables."
  },
  {
    id: 327, skill: "sql", level: "medium", type: "mcq",
    question: "Which ensures unique values?",
    options: ["UNIQUE constraint", "PRIMARY KEY", "Both", "INDEX"],
    answer: "Both", explanation: "Both ensure uniqueness in columns."
  },
  {
    id: 328, skill: "sql", level: "medium", type: "truefalse",
    question: "GROUP BY aggregates data.", options: ["True", "False"], answer: "True",
    explanation: "GROUP BY groups rows and applies aggregate functions."
  },
  {
    id: 329, skill: "sql", level: "hard", type: "output",
    question: "What is transaction?",
    options: ["ACID operations", "Atomic unit", "Both", "Query batch"],
    answer: "Both", explanation: "Transaction ensures ACID properties."
  },
  {
    id: 330, skill: "sql", level: "hard", type: "mcq",
    question: "What is normalization?",
    options: ["Reduces redundancy", "Improves integrity", "Both", "Speeds queries"],
    answer: "Both", explanation: "Normalization organizes data efficiently."
  },
  {
    id: 331, skill: "sql", level: "hard", type: "truefalse",
    question: "SQL supports subqueries.", options: ["True", "False"], answer: "True",
    explanation: "Nested queries within main query."
  },
  {
    id: 332, skill: "sql", level: "beginner", type: "output",
    question: "Which deletes data?",
    options: ["DELETE FROM", "REMOVE FROM", "DROP FROM", "ERASE FROM"],
    answer: "DELETE FROM", explanation: "DELETE FROM removes rows from table."
  },
  {
    id: 333, skill: "sql", level: "beginner", type: "mcq",
    question: "Which modifies table structure?",
    options: ["ALTER TABLE", "MODIFY TABLE", "CHANGE TABLE", "UPDATE TABLE"],
    answer: "ALTER TABLE", explanation: "ALTER TABLE changes table structure."
  },
  {
    id: 334, skill: "sql", level: "beginner", type: "truefalse",
    question: "COUNT() is aggregate function.", options: ["True", "False"], answer: "True",
    explanation: "COUNT returns number of rows."
  },
  {
    id: 335, skill: "sql", level: "medium", type: "output",
    question: "What is foreign key?",
    options: ["References primary key", "Enforces relationship", "Both", "Link column"],
    answer: "Both", explanation: "Foreign key references primary key in another table."
  },
  {
    id: 336, skill: "sql", level: "medium", type: "mcq",
    question: "Which JOIN returns all rows?",
    options: ["INNER JOIN", "LEFT JOIN", "FULL OUTER JOIN", "CROSS JOIN"],
    answer: "FULL OUTER JOIN", explanation: "Returns all rows from both tables."
  },
  {
    id: 337, skill: "sql", level: "medium", type: "truefalse",
    question: "HAVING filters grouped data.", options: ["True", "False"], answer: "True",
    explanation: "HAVING filters groups after GROUP BY."
  },
  {
    id: 338, skill: "sql", level: "hard", type: "output",
    question: "What is index?",
    options: ["Speeds queries", "Optimizes search", "Both", "Data structure"],
    answer: "Both", explanation: "Index improves query performance."
  },
  {
    id: 339, skill: "sql", level: "hard", type: "mcq",
    question: "What is view?",
    options: ["Virtual table", "Saved query", "Both", "Temporary table"],
    answer: "Both", explanation: "View is virtual table based on query result."
  },
  {
    id: 340, skill: "sql", level: "hard", type: "truefalse",
    question: "SQL supports stored procedures.", options: ["True", "False"], answer: "True",
    explanation: "Precompiled SQL statements stored in database."
  },
  {
    id: 341, skill: "sql", level: "beginner", type: "output",
    question: "Which adds new row?",
    options: ["INSERT INTO", "ADD TO", "CREATE ROW", "NEW INTO"],
    answer: "INSERT INTO", explanation: "INSERT INTO adds new rows to table."
  },
  {
    id: 342, skill: "sql", level: "beginner", type: "mcq",
    question: "Which data type for text?",
    options: ["VARCHAR", "INT", "DATE", "BOOLEAN"],
    answer: "VARCHAR", explanation: "VARCHAR stores variable-length strings."
  },
  {
    id: 343, skill: "sql", level: "beginner", type: "truefalse",
    question: "NULL represents missing data.", options: ["True", "False"], answer: "True",
    explanation: "NULL indicates unknown or missing value."
  },
  {
    id: 344, skill: "sql", level: "medium", type: "output",
    question: "What is UNION?",
    options: ["Combines results", "Removes duplicates", "Both", "Merges tables"],
    answer: "Both", explanation: "UNION combines results from multiple queries."
  },
  {
    id: 345, skill: "sql", level: "medium", type: "mcq",
    question: "Which is SQL operator?",
    options: ["LIKE", "BETWEEN", "IN", "All"],
    answer: "All", explanation: "All are SQL operators for filtering."
  },
  {
    id: 346, skill: "sql", level: "medium", type: "truefalse",
    question: "DISTINCT removes duplicates.", options: ["True", "False"], answer: "True",
    explanation: "DISTINCT returns unique values."
  },
  {
    id: 347, skill: "sql", level: "hard", type: "output",
    question: "What is trigger?",
    options: ["Automatic action", "Event response", "Both", "Stored procedure"],
    answer: "Both", explanation: "Trigger executes automatically on database event."
  },
  {
    id: 348, skill: "sql", level: "hard", type: "mcq",
    question: "What is ACID?",
    options: ["Atomicity", "Consistency", "Isolation", "All"],
    answer: "All", explanation: "ACID properties ensure reliable transactions."
  },
  {
    id: 349, skill: "sql", level: "hard", type: "truefalse",
    question: "SQL supports transactions.", options: ["True", "False"], answer: "True",
    explanation: "BEGIN, COMMIT, ROLLBACK for transactions."
  },
  {
    id: 350, skill: "sql", level: "beginner", type: "output",
    question: "Which updates data?",
    options: ["UPDATE", "MODIFY", "CHANGE", "ALTER"],
    answer: "UPDATE", explanation: "UPDATE modifies existing rows."
  },
  {
    id: 351, skill: "sql", level: "beginner", type: "mcq",
    question: "Which creates table?",
    options: ["CREATE TABLE", "MAKE TABLE", "NEW TABLE", "DEFINE TABLE"],
    answer: "CREATE TABLE", explanation: "CREATE TABLE creates new table."
  },
  {
    id: 352, skill: "sql", level: "beginner", type: "truefalse",
    question: "SELECT retrieves data.", options: ["True", "False"], answer: "True",
    explanation: "SELECT queries data from tables."
  },
  {
    id: 353, skill: "sql", level: "medium", type: "output",
    question: "What is schema?",
    options: ["Database structure", "Table definitions", "Both", "Database design"],
    answer: "Both", explanation: "Schema defines database structure and organization."
  },
  {
    id: 354, skill: "sql", level: "medium", type: "mcq",
    question: "Which is aggregate function?",
    options: ["SUM()", "AVG()", "MAX()", "All"],
    answer: "All", explanation: "All are aggregate functions."
  },
  {
    id: 355, skill: "sql", level: "medium", type: "truefalse",
    question: "SQL supports constraints.", options: ["True", "False"], answer: "True",
    explanation: "NOT NULL, UNIQUE, PRIMARY KEY, FOREIGN KEY, CHECK."
  },
  {
    id: 356, skill: "sql", level: "hard", type: "output",
    question: "What is cursor?",
    options: ["Row pointer", "Iterates results", "Both", "Result set"],
    answer: "Both", explanation: "Cursor traverses through result set row by row."
  },
  {
    id: 357, skill: "sql", level: "hard", type: "mcq",
    question: "What is normalization form?",
    options: ["1NF", "2NF", "3NF", "All"],
    answer: "All", explanation: "Multiple normalization forms exist."
  },
  {
    id: 358, skill: "sql", level: "hard", type: "truefalse",
    question: "SQL supports window functions.", options: ["True", "False"], answer: "True",
    explanation: "ROW_NUMBER(), RANK(), OVER() for advanced analytics."
  },
  {
    id: 359, skill: "sql", level: "beginner", type: "output",
    question: "Which removes table?",
    options: ["DROP TABLE", "DELETE TABLE", "REMOVE TABLE", "ERASE TABLE"],
    answer: "DROP TABLE", explanation: "DROP TABLE removes table completely."
  },
  {
    id: 360, skill: "sql", level: "beginner", type: "mcq",
    question: "Which is numeric data type?",
    options: ["INT", "DECIMAL", "FLOAT", "All"],
    answer: "All", explanation: "All are numeric data types in SQL."
  },

  // ================== DSA QUESTIONS (40) ==================
  {
    id: 361, skill: "dsa", level: "beginner", type: "mcq",
    question: "What is time complexity?",
    options: ["Algorithm efficiency", "Running time growth", "Both", "Execution time"],
    answer: "Both", explanation: "Measures algorithm's time growth with input size."
  },
  {
    id: 362, skill: "dsa", level: "beginner", type: "truefalse",
    question: "Array has O(1) access time.", options: ["True", "False"], answer: "True",
    explanation: "Direct index access in arrays is constant time."
  },
  {
    id: 363, skill: "dsa", level: "beginner", type: "output",
    question: "What data structure is LIFO?",
    options: ["Stack", "Queue", "Array", "Linked List"],
    answer: "Stack", explanation: "Stack: Last In First Out."
  },
  {
    id: 364, skill: "dsa", level: "beginner", type: "mcq",
    question: "What is FIFO?",
    options: ["Queue", "Stack", "Array", "Tree"],
    answer: "Queue", explanation: "Queue: First In First Out."
  },
  {
    id: 365, skill: "dsa", level: "beginner", type: "truefalse",
    question: "Linked list uses pointers.", options: ["True", "False"], answer: "True",
    explanation: "Nodes connected via pointers/references."
  },
  {
    id: 366, skill: "dsa", level: "medium", type: "output",
    question: "Which sorting is O(n log n) average?",
    options: ["Quick Sort", "Merge Sort", "Both", "Bubble Sort"],
    answer: "Both", explanation: "Both have O(n log n) average time."
  },
  {
    id: 367, skill: "dsa", level: "medium", type: "mcq",
    question: "What is binary search?",
    options: ["Divide & conquer", "O(log n) search", "Both", "Linear search"],
    answer: "Both", explanation: "Divides sorted array, O(log n) time."
  },
  {
    id: 368, skill: "dsa", level: "medium", type: "truefalse",
    question: "Hash table has O(1) average access.", options: ["True", "False"], answer: "True",
    explanation: "Constant time average for search/insert/delete."
  },
  {
    id: 369, skill: "dsa", level: "hard", type: "output",
    question: "What is graph traversal?",
    options: ["BFS", "DFS", "Both", "Tree traversal"],
    answer: "Both", explanation: "Breadth-first and depth-first search."
  },
  {
    id: 370, skill: "dsa", level: "hard", type: "mcq",
    question: "What is dynamic programming?",
    options: ["Memoization", "Optimal substructure", "Both", "Recursion"],
    answer: "Both", explanation: "Solves complex problems by breaking into subproblems."
  },
  {
    id: 371, skill: "dsa", level: "hard", type: "truefalse",
    question: "Tree is hierarchical data structure.", options: ["True", "False"], answer: "True",
    explanation: "Nodes arranged in parent-child relationships."
  },
  {
    id: 372, skill: "dsa", level: "beginner", type: "output",
    question: "What is recursion?",
    options: ["Self-calling function", "Base case", "Both", "Loop"],
    answer: "Both", explanation: "Function calls itself with base case termination."
  },
  {
    id: 373, skill: "dsa", level: "beginner", type: "mcq",
    question: "Which has O(n) search?",
    options: ["Linear search", "Binary search", "Both", "Hash search"],
    answer: "Linear search", explanation: "Linear search checks each element."
  },
  {
    id: 374, skill: "dsa", level: "beginner", type: "truefalse",
    question: "Stack supports push/pop.", options: ["True", "False"], answer: "True",
    explanation: "Push adds element, pop removes top element."
  },
  {
    id: 375, skill: "dsa", level: "medium", type: "output",
    question: "What is heap data structure?",
    options: ["Complete binary tree", "Priority queue", "Both", "Balanced tree"],
    answer: "Both", explanation: "Heap is complete binary tree used for priority queue."
  },
  {
    id: 376, skill: "dsa", level: "medium", type: "mcq",
    question: "What is Dijkstra's algorithm?",
    options: ["Shortest path", "Greedy algorithm", "Both", "Graph coloring"],
    answer: "Both", explanation: "Finds shortest path in weighted graph."
  },
  {
    id: 377, skill: "dsa", level: "medium", type: "truefalse",
    question: "BST has ordered elements.", options: ["True", "False"], answer: "True",
    explanation: "Binary Search Tree maintains sorted order."
  },
  {
    id: 378, skill: "dsa", level: "hard", type: "output",
    question: "What is backtracking?",
    options: ["Brute force", "Constraint satisfaction", "Both", "Heuristic"],
    answer: "Both", explanation: "Systematic search with constraint checking."
  },
  {
    id: 379, skill: "dsa", level: "hard", type: "mcq",
    question: "What is AVL tree?",
    options: ["Balanced BST", "Height-balanced", "Both", "Self-balancing"],
    answer: "All", explanation: "AVL tree is self-balancing binary search tree."
  },
  {
    id: 380, skill: "dsa", level: "hard", type: "truefalse",
    question: "B-tree is used in databases.", options: ["True", "False"], answer: "True",
    explanation: "B-trees optimize disk reads in database systems."
  },
  {
    id: 381, skill: "dsa", level: "beginner", type: "output",
    question: "What is space complexity?",
    options: ["Memory usage", "Auxiliary space", "Both", "Storage"],
    answer: "Both", explanation: "Measures memory required by algorithm."
  },
  {
    id: 382, skill: "dsa", level: "beginner", type: "mcq",
    question: "Which is linear data structure?",
    options: ["Array", "Linked List", "Stack", "All"],
    answer: "All", explanation: "All store elements sequentially."
  },
  {
    id: 383, skill: "dsa", level: "beginner", type: "truefalse",
    question: "Queue supports enqueue/dequeue.", options: ["True", "False"], answer: "True",
    explanation: "Enqueue adds to rear, dequeue removes from front."
  },
  {
    id: 384, skill: "dsa", level: "medium", type: "output",
    question: "What is adjacency list?",
    options: ["Graph representation", "Edge list", "Both", "Matrix"],
    answer: "Both", explanation: "Represents graph as list of edges/adjacent vertices."
  },
  {
    id: 385, skill: "dsa", level: "medium", type: "mcq",
    question: "What is topological sort?",
    options: ["DAG ordering", "Linear ordering", "Both", "Cycle detection"],
    answer: "Both", explanation: "Linear ordering of vertices in directed acyclic graph."
  },
  {
    id: 386, skill: "dsa", level: "medium", type: "truefalse",
    question: "Merge sort is stable.", options: ["True", "False"], answer: "True",
    explanation: "Preserves relative order of equal elements."
  },
  {
    id: 387, skill: "dsa", level: "hard", type: "output",
    question: "What is memoization?",
    options: ["Cache results", "Dynamic programming", "Both", "Recursion"],
    answer: "Both", explanation: "Stores computed results to avoid recalculation."
  },
  {
    id: 388, skill: "dsa", level: "hard", type: "mcq",
    question: "What is red-black tree?",
    options: ["Self-balancing BST", "Colored nodes", "Both", "Binary tree"],
    answer: "Both", explanation: "Self-balancing binary search tree with color properties."
  },
  {
    id: 389, skill: "dsa", level: "hard", type: "truefalse",
    question: "NP-complete problems are hardest.", options: ["True", "False"], answer: "True",
    explanation: "Most difficult problems in NP class."
  },
  {
    id: 390, skill: "dsa", level: "beginner", type: "output",
    question: "What is bubble sort time?",
    options: ["O(n²)", "O(n log n)", "O(n)", "O(log n)"],
    answer: "O(n²)", explanation: "Bubble sort has quadratic time complexity."
  },
  {
    id: 391, skill: "dsa", level: "beginner", type: "mcq",
    question: "Which is non-linear data structure?",
    options: ["Tree", "Graph", "Both", "Array"],
    answer: "Both", explanation: "Both trees and graphs are non-linear."
  },
  {
    id: 392, skill: "dsa", level: "beginner", type: "truefalse",
    question: "Array elements are contiguous.", options: ["True", "False"], answer: "True",
    explanation: "Array elements stored in contiguous memory locations."
  },
  {
    id: 393, skill: "dsa", level: "medium", type: "output",
    question: "What is hashing?",
    options: ["Key-value mapping", "Constant time access", "Both", "Search technique"],
    answer: "Both", explanation: "Maps keys to values for efficient retrieval."
  },
  {
    id: 394, skill: "dsa", level: "medium", type: "mcq",
    question: "What is greedy algorithm?",
    options: ["Local optimum", "Makes best choice", "Both", "Global optimum"],
    answer: "Both", explanation: "Makes locally optimal choice at each step."
  },
  {
    id: 395, skill: "dsa", level: "medium", type: "truefalse",
    question: "DFS uses stack.", options: ["True", "False"], answer: "True",
    explanation: "Depth-first search uses stack (implicit or explicit)."
  },
  {
    id: 396, skill: "dsa", level: "hard", type: "output",
    question: "What is Floyd-Warshall algorithm?",
    options: ["All-pairs shortest path", "Dynamic programming", "Both", "Single source"],
    answer: "Both", explanation: "Finds shortest paths between all pairs of vertices."
  },
  {
    id: 397, skill: "dsa", level: "hard", type: "mcq",
    question: "What is trie?",
    options: ["Prefix tree", "String search", "Both", "Binary tree"],
    answer: "Both", explanation: "Tree for storing strings with common prefixes."
  },
  {
    id: 398, skill: "dsa", level: "hard", type: "truefalse",
    question: "Big O is worst-case analysis.", options: ["True", "False"], answer: "True",
    explanation: "Upper bound of growth rate in worst case."
  },
  {
    id: 399, skill: "dsa", level: "beginner", type: "output",
    question: "What is selection sort time?",
    options: ["O(n²)", "O(n log n)", "O(n)", "O(log n)"],
    answer: "O(n²)", explanation: "Selection sort has quadratic time complexity."
  },
  {
    id: 400, skill: "dsa", level: "beginner", type: "mcq",
    question: "Which accesses middle element?",
    options: ["Binary search", "Linear search", "Both", "Hash search"],
    answer: "Binary search", explanation: "Binary search checks middle element first."
  },
  {
    id: 418, skill: "flutter", level: "hard", type: "output",
    question: "What is Provider?",
    options: ["State management", "Dependency injection", "Both", "Data flow"],
    answer: "Both", explanation: "Popular state management solution."
  },
  {
    id: 419, skill: "flutter", level: "hard", type: "mcq",
    question: "What is BLoC pattern?",
    options: ["Business Logic Component", "Reactive streams", "Both", "State management"],
    answer: "Both", explanation: "Separates business logic from UI using streams."
  },
  {
    id: 420, skill: "flutter", level: "hard", type: "truefalse",
    question: "Flutter supports plugins.", options: ["True", "False"], answer: "True",
    explanation: "Platform-specific functionality via plugins."
  },
  {
    id: 421, skill: "flutter", level: "beginner", type: "output",
    question: "Which builds list?",
    options: ["ListView", "GridView", "Both", "Container"],
    answer: "Both", explanation: "ListView and GridView display scrollable lists."
  },
  {
    id: 422, skill: "flutter", level: "beginner", type: "mcq",
    question: "What is Dart?",
    options: ["Programming language", "Object-oriented", "Both", "Scripting language"],
    answer: "Both", explanation: "Dart is object-oriented programming language for Flutter."
  },
  {
    id: 423, skill: "flutter", level: "beginner", type: "truefalse",
    question: "Flutter supports web.", options: ["True", "False"], answer: "True",
    explanation: "Flutter web enables building web applications."
  },
  {
    id: 424, skill: "flutter", level: "medium", type: "output",
    question: "What is Future?",
    options: ["Async operation", "Promise", "Both", "Thread"],
    answer: "Both", explanation: "Future represents potential value or error from async operation."
  },
  {
    id: 425, skill: "flutter", level: "medium", type: "mcq",
    question: "What is async/await?",
    options: ["Async programming", "Non-blocking", "Both", "Multithreading"],
    answer: "Both", explanation: "Simplifies asynchronous programming in Dart."
  },
  {
    id: 426, skill: "flutter", level: "medium", type: "truefalse",
    question: "Flutter has testing framework.", options: ["True", "False"], answer: "True",
    explanation: "Built-in support for unit, widget, and integration tests."
  },
  {
    id: 427, skill: "flutter", level: "hard", type: "output",
    question: "What is Isolate?",
    options: ["Concurrency", "Separate thread", "Both", "Parallel execution"],
    answer: "Both", explanation: "Isolate provides concurrent execution with separate memory."
  },
  {
    id: 428, skill: "flutter", level: "hard", type: "mcq",
    question: "What is Riverpod?",
    options: ["State management", "Provider replacement", "Both", "Dependency injection"],
    answer: "Both", explanation: "Next-generation state management solution."
  },
  {
    id: 429, skill: "flutter", level: "hard", type: "truefalse",
    question: "Flutter supports desktop.", options: ["True", "False"], answer: "True",
    explanation: "Supports Windows, macOS, and Linux desktop apps."
  },
  {
    id: 430, skill: "flutter", level: "beginner", type: "output",
    question: "What is pub.dev?",
    options: ["Package repository", "Dart packages", "Both", "Plugin store"],
    answer: "Both", explanation: "Official package repository for Dart and Flutter."
  },
  {
    id: 431, skill: "flutter", level: "beginner", type: "mcq",
    question: "Which widget displays text?",
    options: ["Text", "RichText", "Both", "Label"],
    answer: "Both", explanation: "Both Text and RichText display text content."
  },
  {
    id: 432, skill: "flutter", level: "beginner", type: "truefalse",
    question: "Flutter uses Skia graphics engine.", options: ["True", "False"], answer: "True",
    explanation: "Skia provides high-performance 2D graphics rendering."
  },
  {
    id: 433, skill: "flutter", level: "medium", type: "output",
    question: "What is GestureDetector?",
    options: ["Touch handling", "Gesture recognition", "Both", "Button"],
    answer: "Both", explanation: "Detects and responds to touch gestures."
  },
  {
    id: 434, skill: "flutter", level: "medium", type: "mcq",
    question: "What is InheritedWidget?",
    options: ["Efficient data passing", "Theme sharing", "Both", "State management"],
    answer: "Both", explanation: "Efficiently passes data down widget tree."
  },
  {
    id: 435, skill: "flutter", level: "medium", type: "truefalse",
    question: "Flutter supports Firebase.", options: ["True", "False"], answer: "True",
    explanation: "Official Firebase plugins for backend services."
  },
  {
    id: 436, skill: "flutter", level: "hard", type: "output",
    question: "What is Flutter Engine?",
    options: ["Runtime", "C++ core", "Both", "Graphics layer"],
    answer: "Both", explanation: "Low-level C++ engine that powers Flutter runtime."
  },
  {
    id: 437, skill: "flutter", level: "hard", type: "mcq",
    question: "What is Platform Channel?",
    options: ["Native communication", "Method calls", "Both", "Plugin system"],
    answer: "Both", explanation: "Communicates between Dart and platform-native code."
  },
  {
    id: 438, skill: "flutter", level: "hard", type: "truefalse",
    question: "Flutter supports custom painters.", options: ["True", "False"], answer: "True",
    explanation: "CustomPaint widget for custom drawing and animations."
  },
  {
    id: 439, skill: "flutter", level: "beginner", type: "output",
    question: "What is main() function?",
    options: ["Entry point", "App startup", "Both", "Initialization"],
    answer: "Both", explanation: "Entry point for every Flutter application."
  },
  {
    id: 440, skill: "flutter", level: "beginner", type: "mcq",
    question: "Which displays images?",
    options: ["Image", "AssetImage", "NetworkImage", "All"],
    answer: "All", explanation: "All are image display widgets in Flutter."
  },

  // ================== ANGULAR QUESTIONS (40) ==================
  {
    id: 441, skill: "angular", level: "beginner", type: "mcq",
    question: "What is Angular?",
    options: ["TypeScript framework", "SPA framework", "Both", "JavaScript library"],
    answer: "Both", explanation: "Angular is TypeScript-based SPA framework."
  },
  {
    id: 442, skill: "angular", level: "beginner", type: "truefalse",
    question: "Angular uses components.", options: ["True", "False"], answer: "True",
    explanation: "Angular applications are built with components."
  },
  {
    id: 443, skill: "angular", level: "beginner", type: "output",
    question: "Which decorator marks component?",
    options: ["@Component", "@Directive", "@Injectable", "@NgModule"],
    answer: "@Component", explanation: "@Component decorator defines Angular component."
  },
  {
    id: 444, skill: "angular", level: "beginner", type: "mcq",
    question: "What is TypeScript?",
    options: ["JavaScript superset", "Static typing", "Both", "New language"],
    answer: "Both", explanation: "TypeScript adds static types to JavaScript."
  },
  {
    id: 445, skill: "angular", level: "beginner", type: "truefalse",
    question: "Angular has dependency injection.", options: ["True", "False"], answer: "True",
    explanation: "Built-in dependency injection system."
  },
  {
    id: 446, skill: "angular", level: "medium", type: "output",
    question: "What is NgModule?",
    options: ["Module container", "Feature grouping", "Both", "App configuration"],
    answer: "Both", explanation: "Groups related components, directives, pipes, and services."
  },
  {
    id: 447, skill: "angular", level: "medium", type: "mcq",
    question: "What is template?",
    options: ["HTML view", "Component UI", "Both", "Layout"],
    answer: "Both", explanation: "HTML view associated with component."
  },
  {
    id: 448, skill: "angular", level: "medium", type: "truefalse",
    question: "Angular uses RxJS.", options: ["True", "False"], answer: "True",
    explanation: "Reactive programming with Observables and RxJS."
  },
  {
    id: 449, skill: "angular", level: "hard", type: "output",
    question: "What is Angular CLI?",
    options: ["Command line tool", "Project scaffolding", "Both", "Build tool"],
    answer: "Both", explanation: "Command line interface for Angular development."
  },
  {
    id: 450, skill: "angular", level: "hard", type: "mcq",
    question: "What is Angular Universal?",
    options: ["Server-side rendering", "SEO optimization", "Both", "Static generation"],
    answer: "Both", explanation: "Server-side rendering for Angular applications."
  },
  {
    id: 451, skill: "angular", level: "hard", type: "truefalse",
    question: "Angular has change detection.", options: ["True", "False"], answer: "True",
    explanation: "Automatic detection of data changes and UI updates."
  },
  {
    id: 452, skill: "angular", level: "beginner", type: "output",
    question: "What is ngModel?",
    options: ["Two-way binding", "Form control", "Both", "Data binding"],
    answer: "Both", explanation: "Two-way data binding for form controls."
  },
  {
    id: 453, skill: "angular", level: "beginner", type: "mcq",
    question: "Which displays data?",
    options: ["{{ interpolation }}", "[property]", "(event)", "All"],
    answer: "{{ interpolation }}", explanation: "Template interpolation displays component data."
  },
  {
    id: 454, skill: "angular", level: "beginner", type: "truefalse",
    question: "Angular supports routing.", options: ["True", "False"], answer: "True",
    explanation: "Built-in router for navigation between views."
  },
  {
    id: 455, skill: "angular", level: "medium", type: "output",
    question: "What is service?",
    options: ["Business logic", "Data sharing", "Both", "Component helper"],
    answer: "Both", explanation: "Singleton class for shared business logic and data."
  },
  {
    id: 456, skill: "angular", level: "medium", type: "mcq",
    question: "What is directive?",
    options: ["DOM manipulation", "Behavior extension", "Both", "Component"],
    answer: "Both", explanation: "Extends HTML with custom behavior."
  },
  {
    id: 457, skill: "angular", level: "medium", type: "truefalse",
    question: "Angular has forms module.", options: ["True", "False"], answer: "True",
    explanation: "Template-driven and reactive forms support."
  },
  {
    id: 458, skill: "angular", level: "hard", type: "output",
    question: "What is AOT compilation?",
    options: ["Ahead-of-Time", "Performance optimization", "Both", "Build process"],
    answer: "Both", explanation: "Compiles templates during build for better performance."
  },
  {
    id: 459, skill: "angular", level: "hard", type: "mcq",
    question: "What is Ivy renderer?",
    options: ["New renderer", "Tree shaking", "Both", "Compiler"],
    answer: "Both", explanation: "Next-generation Angular renderer with better performance."
  },
  {
    id: 460, skill: "angular", level: "hard", type: "truefalse",
    question: "Angular supports PWA.", options: ["True", "False"], answer: "True",
    explanation: "Built-in Progressive Web App support."
  },
  {
    id: 461, skill: "angular", level: "beginner", type: "output",
    question: "What is ngOnInit?",
    options: ["Lifecycle hook", "Initialization", "Both", "Constructor"],
    answer: "Both", explanation: "Lifecycle hook called after component initialization."
  },
  {
    id: 462, skill: "angular", level: "beginner", type: "mcq",
    question: "Which builds application?",
    options: ["ng build", "npm build", "Both", "build"],
    answer: "ng build", explanation: "Angular CLI command to build application."
  },
  {
    id: 463, skill: "angular", level: "beginner", type: "truefalse",
    question: "Angular uses decorators extensively.", options: ["True", "False"], answer: "True",
    explanation: "Decorators like @Component, @Injectable, @Input, @Output."
  },
  {
    id: 464, skill: "angular", level: "medium", type: "output",
    question: "What is Observable?",
    options: ["Async stream", "Event handling", "Both", "Promise"],
    answer: "Both", explanation: "RxJS Observable for handling async events and streams."
  },
  {
    id: 465, skill: "angular", level: "medium", type: "mcq",
    question: "What is pipe?",
    options: ["Data transformation", "Template filter", "Both", "Function"],
    answer: "Both", explanation: "Transforms displayed values in templates."
  },
  {
    id: 466, skill: "angular", level: "medium", type: "truefalse",
    question: "Angular has HttpClient.", options: ["True", "False"], answer: "True",
    explanation: "Service for making HTTP requests."
  },
  {
    id: 467, skill: "angular", level: "hard", type: "output",
    question: "What is NgZone?",
    options: ["Change detection", "Async operations", "Both", "Performance"],
    answer: "Both", explanation: "Service for executing code inside Angular zone."
  },
  {
    id: 468, skill: "angular", level: "hard", type: "mcq",
    question: "What is lazy loading?",
    options: ["Performance optimization", "On-demand loading", "Both", "Code splitting"],
    answer: "Both", explanation: "Loads feature modules only when needed."
  },
  {
    id: 469, skill: "angular", level: "hard", type: "truefalse",
    question: "Angular supports internationalization.", options: ["True", "False"], answer: "True",
    explanation: "Built-in i18n support for multiple languages."
  },
  {
    id: 470, skill: "angular", level: "beginner", type: "output",
    question: "What is @Input?",
    options: ["Property binding", "Parent to child", "Both", "Data flow"],
    answer: "Both", explanation: "Decorator for passing data from parent to child component."
  },
  {
    id: 471, skill: "angular", level: "beginner", type: "mcq",
    question: "Which runs development server?",
    options: ["ng serve", "npm start", "Both", "angular serve"],
    answer: "Both", explanation: "Both ng serve and npm start start dev server."
  },
  {
    id: 472, skill: "angular", level: "beginner", type: "truefalse",
    question: "Angular has testing utilities.", options: ["True", "False"], answer: "True",
    explanation: "Built-in support for unit and integration testing."
  },
  {
    id: 473, skill: "angular", level: "medium", type: "output",
    question: "What is ViewChild?",
    options: ["Template reference", "Component access", "Both", "DOM query"],
    answer: "Both", explanation: "Decorator to access child component or DOM element."
  },
  {
    id: 474, skill: "angular", level: "medium", type: "mcq",
    question: "What is NgStyle?",
    options: ["Dynamic styling", "CSS binding", "Both", "Style directive"],
    answer: "Both", explanation: "Directive for dynamic CSS style binding."
  },
  {
    id: 475, skill: "angular", level: "medium", type: "truefalse",
    question: "Angular supports animations.", options: ["True", "False"], answer: "True",
    explanation: "Built-in animation system for UI transitions."
  },
  {
    id: 476, skill: "angular", level: "hard", type: "output",
    question: "What is Angular Elements?",
    options: ["Web Components", "Framework agnostic", "Both", "Custom elements"],
    answer: "Both", explanation: "Package Angular components as custom elements."
  },
  {
    id: 477, skill: "angular", level: "hard", type: "mcq",
    question: "What is Angular Material?",
    options: ["UI component library", "Material Design", "Both", "Theme system"],
    answer: "Both", explanation: "Official Material Design component library."
  },
  {
    id: 478, skill: "angular", level: "hard", type: "truefalse",
    question: "Angular has schematics.", options: ["True", "False"], answer: "True",
    explanation: "Code generation and transformation tools."
  },
  {
    id: 479, skill: "angular", level: "beginner", type: "output",
    question: "What is @Output?",
    options: ["Event emitter", "Child to parent", "Both", "Event binding"],
    answer: "Both", explanation: "Decorator for emitting events from child to parent."
  },
  {
    id: 480, skill: "angular", level: "beginner", type: "mcq",
    question: "Which creates component?",
    options: ["ng generate component", "ng g c", "Both", "create component"],
    answer: "Both", explanation: "Both commands create new Angular component."
  },

  // ================== EXPRESS.JS QUESTIONS (40) ==================
  {
    id: 481, skill: "expressjs", level: "beginner", type: "mcq",
    question: "What is Express.js?",
    options: ["Node.js framework", "Web application", "Both", "Middleware"],
    answer: "Both", explanation: "Minimal web application framework for Node.js."
  },
  {
    id: 482, skill: "expressjs", level: "beginner", type: "truefalse",
    question: "Express is minimal and flexible.", options: ["True", "False"], answer: "True",
    explanation: "Lightweight framework with minimal built-in features."
  },
  {
    id: 483, skill: "expressjs", level: "beginner", type: "output",
    question: "How to create Express app?",
    options: ["const app = express()", "new Express()", "Both", "createExpressApp()"],
    answer: "const app = express()", explanation: "express() function creates application instance."
  },
  {
    id: 484, skill: "expressjs", level: "beginner", type: "mcq",
    question: "What is middleware?",
    options: ["Request handler", "Function chain", "Both", "Route handler"],
    answer: "Both", explanation: "Functions that process requests in sequence."
  },
  {
    id: 485, skill: "expressjs", level: "beginner", type: "truefalse",
    question: "Express supports routing.", options: ["True", "False"], answer: "True",
    explanation: "app.get(), app.post(), app.put(), app.delete() for routing."
  },
  {
    id: 486, skill: "expressjs", level: "medium", type: "output",
    question: "What is req object?",
    options: ["Request data", "HTTP request", "Both", "Client information"],
    answer: "Both", explanation: "Contains HTTP request data from client."
  },
  {
    id: 487, skill: "expressjs", level: "medium", type: "mcq",
    question: "What is res object?",
    options: ["Response handler", "HTTP response", "Both", "Server response"],
    answer: "Both", explanation: "Used to send HTTP response to client."
  },
  {
    id: 488, skill: "expressjs", level: "medium", type: "truefalse",
    question: "Express supports template engines.", options: ["True", "False"], answer: "True",
    explanation: "Pug, EJS, Handlebars for server-side rendering."
  },
  {
    id: 489, skill: "expressjs", level: "hard", type: "output",
    question: "What is app.use()?",
    options: ["Middleware mounting", "Function registration", "Both", "Route definition"],
    answer: "Both", explanation: "Mounts middleware functions at specified path."
  },
  {
    id: 490, skill: "expressjs", level: "hard", type: "mcq",
    question: "What is router?",
    options: ["Route separation", "Modular routing", "Both", "Middleware"],
    answer: "Both", explanation: "Creates modular, mountable route handlers."
  },
  {
    id: 491, skill: "expressjs", level: "hard", type: "truefalse",
    question: "Express supports error handling.", options: ["True", "False"], answer: "True",
    explanation: "Error-handling middleware for catching exceptions."
  },
  {
    id: 492, skill: "expressjs", level: "beginner", type: "output",
    question: "Which starts server?",
    options: ["app.listen()", "server.listen()", "Both", "express.listen()"],
    answer: "app.listen()", explanation: "Starts HTTP server listening on specified port."
  },
  {
    id: 493, skill: "expressjs", level: "beginner", type: "mcq",
    question: "What is static file serving?",
    options: ["express.static()", "File delivery", "Both", "Middleware"],
    answer: "Both", explanation: "Serves static files like images, CSS, JavaScript."
  },
  {
    id: 494, skill: "expressjs", level: "beginner", type: "truefalse",
    question: "Express is unopinionated.", options: ["True", "False"], answer: "True",
    explanation: "Doesn't enforce specific application structure."
  },
  {
    id: 495, skill: "expressjs", level: "medium", type: "output",
    question: "What is body-parser?",
    options: ["Request body parsing", "JSON parsing", "Both", "Middleware"],
    answer: "Both", explanation: "Middleware to parse request body (now built into Express)."
  },
  {
    id: 496, skill: "expressjs", level: "medium", type: "mcq",
    question: "What is CORS?",
    options: ["Cross-Origin Resource Sharing", "Security policy", "Both", "Middleware"],
    answer: "Both", explanation: "Middleware for enabling cross-origin requests."
  },
  {
    id: 497, skill: "expressjs", level: "medium", type: "truefalse",
    question: "Express supports sessions.", options: ["True", "False"], answer: "True",
    explanation: "express-session middleware for session management."
  },
  {
    id: 498, skill: "expressjs", level: "hard", type: "output",
    question: "What is helmet?",
    options: ["Security middleware", "HTTP header protection", "Both", "Security"],
    answer: "Both", explanation: "Middleware for securing Express apps with HTTP headers."
  },
  {
    id: 499, skill: "expressjs", level: "hard", type: "mcq",
    question: "What is morgan?",
    options: ["Logging middleware", "HTTP request logger", "Both", "Debugging"],
    answer: "Both", explanation: "HTTP request logger middleware for Express."
  },
  {
    id: 500, skill: "expressjs", level: "hard", type: "truefalse",
    question: "Express supports WebSocket.", options: ["True", "False"], answer: "True",
    explanation: "Can integrate WebSocket with socket.io or ws."
  },
  {
    id: 501, skill: "expressjs", level: "beginner", type: "output",
    question: "What is route parameter?",
    options: ["Dynamic URL segment", ":id", "Both", "Path variable"],
    answer: "Both", explanation: "Captures values from URL path segments."
  },
  {
    id: 502, skill: "expressjs", level: "beginner", type: "mcq",
    question: "Which handles POST requests?",
    options: ["app.post()", "app.handlePost()", "Both", "post()"],
    answer: "app.post()", explanation: "Handles HTTP POST requests to specified path."
  },
  {
    id: 503, skill: "expressjs", level: "beginner", type: "truefalse",
    question: "Express supports REST APIs.", options: ["True", "False"], answer: "True",
    explanation: "Commonly used for building RESTful APIs."
  },
  {
    id: 504, skill: "expressjs", level: "medium", type: "output",
    question: "What is next() function?",
    options: ["Middleware control", "Next middleware", "Both", "Flow control"],
    answer: "Both", explanation: "Passes control to next middleware function."
  },
  {
    id: 505, skill: "expressjs", level: "medium", type: "mcq",
    question: "What is query parameter?",
    options: ["URL parameter", "?key=value", "Both", "Request parameter"],
    answer: "Both", explanation: "Key-value pairs in URL query string."
  },
  {
    id: 506, skill: "expressjs", level: "medium", type: "truefalse",
    question: "Express supports file uploads.", options: ["True", "False"], answer: "True",
    explanation: "multer middleware for handling multipart/form-data."
  },
  {
    id: 507, skill: "expressjs", level: "hard", type: "output",
    question: "What is express.Router()?",
    options: ["Modular routes", "Route separation", "Both", "Middleware"],
    answer: "Both", explanation: "Creates modular, mountable route handlers."
  },
  {
    id: 508, skill: "expressjs", level: "hard", type: "mcq",
    question: "What is compression middleware?",
    options: ["Gzip compression", "Response size reduction", "Both", "Performance"],
    answer: "Both", explanation: "Compresses response bodies for better performance."
  },
  {
    id: 509, skill: "expressjs", level: "hard", type: "truefalse",
    question: "Express supports clustering.", options: ["True", "False"], answer: "True",
    explanation: "Can use Node.js cluster module for multi-core support."
  },
  {
    id: 510, skill: "expressjs", level: "beginner", type: "output",
    question: "What is 404 handler?",
    options: ["Catch-all route", "Page not found", "Both", "Error handling"],
    answer: "Both", explanation: "Handles requests for non-existent routes."
  },
  {
    id: 511, skill: "expressjs", level: "beginner", type: "mcq",
    question: "Which sends JSON response?",
    options: ["res.json()", "res.send()", "Both", "res.return()"],
    answer: "Both", explanation: "Both methods can send JSON responses."
  },
  {
    id: 512, skill: "expressjs", level: "beginner", type: "truefalse",
    question: "Express has built-in view engine.", options: ["True", "False"], answer: "False",
    explanation: "Requires separate template engine like Pug, EJS, or Handlebars."
  },
  {
    id: 513, skill: "expressjs", level: "medium", type: "output",
    question: "What is cookie-parser?",
    options: ["Cookie parsing", "Session management", "Both", "Middleware"],
    answer: "Both", explanation: "Middleware for parsing cookies from requests."
  },
  {
    id: 514, skill: "expressjs", level: "medium", type: "mcq",
    question: "What is rate limiting?",
    options: ["API protection", "Request throttling", "Both", "Security"],
    answer: "Both", explanation: "Limits repeated requests to prevent abuse."
  },
  {
    id: 515, skill: "expressjs", level: "medium", type: "truefalse",
    question: "Express supports HTTPS.", options: ["True", "False"], answer: "True",
    explanation: "Can create HTTPS server with SSL/TLS certificates."
  },
  {
    id: 516, skill: "expressjs", level: "hard", type: "output",
    question: "What is app.set()?",
    options: ["Application settings", "Configuration", "Both", "Environment"],
    answer: "Both", explanation: "Sets application configuration settings."
  },
  {
    id: 517, skill: "expressjs", level: "hard", type: "mcq",
    question: "What is passport.js?",
    options: ["Authentication middleware", "OAuth support", "Both", "Security"],
    answer: "Both", explanation: "Authentication middleware for Express."
  },
  {
    id: 518, skill: "expressjs", level: "hard", type: "truefalse",
    question: "Express supports GraphQL.", options: ["True", "False"], answer: "True",
    explanation: "Can integrate with GraphQL via express-graphql."
  },
  {
    id: 519, skill: "expressjs", level: "beginner", type: "output",
    question: "What is res.sendFile()?",
    options: ["File sending", "Static file delivery", "Both", "Response"],
    answer: "Both", explanation: "Sends file as HTTP response."
  },
  {
    id: 520, skill: "expressjs", level: "beginner", type: "mcq",
    question: "Which sets HTTP status?",
    options: ["res.status()", "res.code()", "Both", "res.setStatus()"],
    answer: "res.status()", explanation: "Sets HTTP status code for response."
  },

  // ================== HTML QUESTIONS (33) ==================
  // Beginner HTML (15)
  {
    id: 519, skill: "html", level: "beginner", type: "mcq",
    question: "What does HTML stand for?",
    options: ["HyperText Markup Language", "High Tech Modern Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language"],
    answer: "HyperText Markup Language", explanation: "HTML is the standard markup language for creating web pages."
  },
  {
    id: 520, skill: "html", level: "beginner", type: "mcq",
    question: "Which HTML tag is used for the largest heading?",
    options: ["<h1>", "<h6>", "<head>", "<html>"], answer: "<h1>",
    explanation: "<h1> represents the largest and most important heading."
  },
  {
    id: 521, skill: "html", level: "beginner", type: "truefalse",
    question: "HTML tags are case-sensitive.", options: ["True", "False"], answer: "False",
    explanation: "HTML tags are not case-sensitive; <p> and <P> are equivalent."
  },
  {
    id: 522, skill: "html", level: "beginner", type: "mcq",
    question: "Which tag defines a hyperlink?",
    options: ["<a>", "<link>", "<href>", "<url>"], answer: "<a>",
    explanation: "<a> tag creates hyperlinks using the href attribute."
  },
  {
    id: 523, skill: "html", level: "beginner", type: "mcq",
    question: "What is the correct syntax for an image tag?",
    options: ["<img src='image.jpg'>", "<image src='image.jpg'>", "<img href='image.jpg'>", "<pic src='image.jpg'>"],
    answer: "<img src='image.jpg'>", explanation: "<img> tag embeds images with the src attribute."
  },
  {
    id: 524, skill: "html", level: "beginner", type: "truefalse",
    question: "The <br> tag requires a closing tag.", options: ["True", "False"], answer: "False",
    explanation: "<br> is a self-closing tag and doesn't require a closing tag."
  },
  {
    id: 525, skill: "html", level: "beginner", type: "mcq",
    question: "Which tag creates an unordered list?",
    options: ["<ul>", "<ol>", "<li>", "<list>"], answer: "<ul>",
    explanation: "<ul> creates an unordered (bulleted) list."
  },
  {
    id: 526, skill: "html", level: "beginner", type: "mcq",
    question: "What does the <form> tag do?",
    options: ["Creates a form for user input", "Formats text", "Creates a table", "Defines navigation"],
    answer: "Creates a form for user input", explanation: "<form> collects user input through various controls."
  },
  {
    id: 527, skill: "html", level: "beginner", type: "mcq",
    question: "Which attribute specifies the URL of an image?",
    options: ["src", "href", "alt", "url"], answer: "src",
    explanation: "src attribute specifies the image source URL."
  },
  {
    id: 528, skill: "html", level: "beginner", type: "truefalse",
    question: "The alt attribute is mandatory for img tags.", options: ["True", "False"], answer: "False",
    explanation: "alt is optional but recommended for accessibility and SEO."
  },
  {
    id: 529, skill: "html", level: "beginner", type: "mcq",
    question: "Which tag represents the main content of a document?",
    options: ["<main>", "<content>", "<body>", "<section>"], answer: "<main>",
    explanation: "<main> specifies the main content of a document."
  },
  {
    id: 530, skill: "html", level: "beginner", type: "mcq",
    question: "What is the <meta> tag used for?",
    options: ["Metadata about HTML document", "Formatting text", "Embedding videos", "Creating links"],
    answer: "Metadata about HTML document", explanation: "<meta> contains metadata like charset and viewport."
  },
  {
    id: 531, skill: "html", level: "beginner", type: "truefalse",
    question: "HTML is a programming language.", options: ["True", "False"], answer: "False",
    explanation: "HTML is a markup language, not a programming language."
  },
  {
    id: 532, skill: "html", level: "beginner", type: "mcq",
    question: "Which tag defines a table row?",
    options: ["<tr>", "<td>", "<th>", "<table>"], answer: "<tr>",
    explanation: "<tr> defines a table row within a table."
  },
  {
    id: 533, skill: "html", level: "beginner", type: "mcq",
    question: "What does <button> create?",
    options: ["A clickable button", "A text input", "A checkbox", "A selection list"],
    answer: "A clickable button", explanation: "<button> creates a clickable button element."
  },

  // Intermediate HTML (12)
  {
    id: 534, skill: "html", level: "intermediate", type: "mcq",
    question: "Which attribute specifies a unique ID for an element?",
    options: ["id", "class", "name", "unique"], answer: "id",
    explanation: "id attribute assigns a unique identifier to an element."
  },
  {
    id: 535, skill: "html", level: "intermediate", type: "mcq",
    question: "What is the purpose of semantic HTML tags?",
    options: ["Give meaning to the content", "Style the content", "Improve performance", "Create animations"],
    answer: "Give meaning to the content", explanation: "Semantic tags describe content meaning to browsers and developers."
  },
  {
    id: 536, skill: "html", level: "intermediate", type: "truefalse",
    question: "HTML5 introduced the video element.", options: ["True", "False"], answer: "True",
    explanation: "HTML5 added <video>, <audio>, and <canvas> elements."
  },
  {
    id: 537, skill: "html", level: "intermediate", type: "mcq",
    question: "What does the <iframe> tag do?",
    options: ["Embeds another HTML page", "Creates a frame", "Defines navigation", "Embeds videos only"],
    answer: "Embeds another HTML page", explanation: "<iframe> embeds another HTML document within the current page."
  },
  {
    id: 538, skill: "html", level: "intermediate", type: "mcq",
    question: "Which input type validates email format?",
    options: ["email", "mail", "text", "validate"],
    answer: "email", explanation: "type='email' provides built-in email validation."
  },
  {
    id: 539, skill: "html", level: "intermediate", type: "mcq",
    question: "What is the <article> tag used for?",
    options: ["Self-contained content", "Main content only", "Blog posts only", "Paragraphs"],
    answer: "Self-contained content", explanation: "<article> wraps independent, self-contained content."
  },
  {
    id: 540, skill: "html", level: "intermediate", type: "truefalse",
    question: "HTML comments are displayed in the browser.", options: ["True", "False"], answer: "False",
    explanation: "HTML comments <!-- --> are not visible in the browser."
  },
  {
    id: 541, skill: "html", level: "intermediate", type: "mcq",
    question: "Which attribute prevents form submission if validation fails?",
    options: ["required", "validate", "mandatory", "check"],
    answer: "required", explanation: "required attribute makes a form field mandatory."
  },
  {
    id: 542, skill: "html", level: "intermediate", type: "mcq",
    question: "What does the <nav> tag represent?",
    options: ["Navigation links", "New article", "Main navigation", "Section"],
    answer: "Navigation links", explanation: "<nav> contains navigation links for the page."
  },
  {
    id: 543, skill: "html", level: "intermediate", type: "mcq",
    question: "Which tag groups related form elements?",
    options: ["<fieldset>", "<group>", "<form-section>", "<container>"],
    answer: "<fieldset>", explanation: "<fieldset> groups related form controls together."
  },
  {
    id: 544, skill: "html", level: "intermediate", type: "truefalse",
    question: "The <label> tag improves form usability.", options: ["True", "False"], answer: "True",
    explanation: "<label> associates text with form controls for better accessibility."
  },
  {
    id: 545, skill: "html", level: "intermediate", type: "mcq",
    question: "What is data stored with data-* attributes used for?",
    options: ["Custom data storage", "Styling only", "Validation only", "Accessibility only"],
    answer: "Custom data storage", explanation: "data-* attributes store custom data for JavaScript use."
  },

  // Advanced HTML (6)
  {
    id: 546, skill: "html", level: "advanced", type: "mcq",
    question: "What does the <picture> element support?",
    options: ["Responsive images", "Image galleries", "Image filters", "Image compression"],
    answer: "Responsive images", explanation: "<picture> provides multiple image sources for different devices."
  },
  {
    id: 547, skill: "html", level: "advanced", type: "truefalse",
    question: "HTML5 supports inline SVG.", options: ["True", "False"], answer: "True",
    explanation: "SVG can be embedded directly as inline HTML5."
  },
  {
    id: 548, skill: "html", level: "advanced", type: "mcq",
    question: "What is Web Components?",
    options: ["Reusable custom elements", "Web frameworks", "HTML frameworks", "CSS features"],
    answer: "Reusable custom elements", explanation: "Web Components create reusable custom HTML elements."
  },
  {
    id: 549, skill: "html", level: "advanced", type: "mcq",
    question: "Which HTML5 API allows offline data storage?",
    options: ["localStorage", "sessionStorage", "IndexedDB", "All of above"],
    answer: "All of above", explanation: "All three are storage APIs with different use cases."
  },
  {
    id: 550, skill: "html", level: "advanced", type: "truefalse",
    question: "The contenteditable attribute makes any element editable.", options: ["True", "False"], answer: "True",
    explanation: "contenteditable attribute allows in-place editing of elements."
  },
  {
    id: 551, skill: "html", level: "advanced", type: "mcq",
    question: "What does the <template> tag do?",
    options: ["Holds hidden HTML not rendered", "Creates templates only", "Defines templates", "Stores data"],
    answer: "Holds hidden HTML not rendered", explanation: "<template> stores HTML that isn't rendered until used."
  },

  // ================== CSS QUESTIONS (33) ==================
  // Beginner CSS (10)
  {
    id: 552, skill: "css", level: "beginner", type: "mcq",
    question: "What does CSS stand for?",
    options: ["Cascading Style Sheets", "Computer Style Sheets", "Colorful Style Sheets", "Creative Style Sheets"],
    answer: "Cascading Style Sheets", explanation: "CSS is used to style and layout HTML elements."
  },
  {
    id: 553, skill: "css", level: "beginner", type: "mcq",
    question: "Which CSS property changes text color?",
    options: ["color", "text-color", "font-color", "text"],
    answer: "color", explanation: "color property sets the text color."
  },
  {
    id: 554, skill: "css", level: "beginner", type: "mcq",
    question: "How do you select an element with id='myid'?",
    options: ["#myid", ".myid", "myid", "[myid]"],
    answer: "#myid", explanation: "Hash (#) selector targets elements by ID."
  },
  {
    id: 555, skill: "css", level: "beginner", type: "mcq",
    question: "Which property changes element background color?",
    options: ["background-color", "bg-color", "color-bg", "back-color"],
    answer: "background-color", explanation: "background-color sets the background color of elements."
  },
  {
    id: 556, skill: "css", level: "beginner", type: "truefalse",
    question: "CSS is case-sensitive.", options: ["True", "False"], answer: "False",
    explanation: "CSS properties and values are generally case-insensitive."
  },
  {
    id: 557, skill: "css", level: "beginner", type: "mcq",
    question: "Which property controls text size?",
    options: ["font-size", "text-size", "size", "font"],
    answer: "font-size", explanation: "font-size property sets the text size."
  },
  {
    id: 558, skill: "css", level: "beginner", type: "mcq",
    question: "How do you select all elements with class='myclass'?",
    options: [".myclass", "#myclass", "myclass", "class-myclass"],
    answer: ".myclass", explanation: "Dot (.) selector targets elements by class name."
  },
  {
    id: 559, skill: "css", level: "beginner", type: "truefalse",
    question: "margin adds space inside an element.", options: ["True", "False"], answer: "False",
    explanation: "margin adds space outside, padding adds space inside."
  },
  {
    id: 560, skill: "css", level: "beginner", type: "mcq",
    question: "Which CSS property makes text bold?",
    options: ["font-weight", "font-bold", "text-weight", "bold"],
    answer: "font-weight", explanation: "font-weight property controls text boldness."
  },
  {
    id: 561, skill: "css", level: "beginner", type: "mcq",
    question: "What is the default display value of a <div>?",
    options: ["block", "inline", "inline-block", "flex"],
    answer: "block", explanation: "<div> elements are block-level by default."
  },

  // Intermediate CSS (15)
  {
    id: 562, skill: "css", level: "intermediate", type: "mcq",
    question: "Which CSS property controls element positioning?",
    options: ["position", "placement", "location", "align"],
    answer: "position", explanation: "position property specifies positioning method (static, relative, etc)."
  },
  {
    id: 563, skill: "css", level: "intermediate", type: "mcq",
    question: "What does 'box-sizing: border-box' do?",
    options: ["Includes border in width/height", "Excludes border", "Only sizes border", "Removes border"],
    answer: "Includes border in width/height", explanation: "border-box includes padding and border in dimensions."
  },
  {
    id: 564, skill: "css", level: "intermediate", type: "mcq",
    question: "Which property creates a flexible layout?",
    options: ["display: flex", "display: layout", "display: flexible", "layout-type"],
    answer: "display: flex", explanation: "display: flex creates a flexbox layout model."
  },
  {
    id: 565, skill: "css", level: "intermediate", type: "truefalse",
    question: "CSS Flexbox and Grid are the same thing.", options: ["True", "False"], answer: "False",
    explanation: "Flexbox is 1D, Grid is 2D - they serve different purposes."
  },
  {
    id: 566, skill: "css", level: "intermediate", type: "mcq",
    question: "What does z-index control?",
    options: ["Stacking order", "Depth", "Layer order", "All of above"],
    answer: "All of above", explanation: "z-index controls the stacking order (depth) of elements."
  },
  {
    id: 567, skill: "css", level: "intermediate", type: "mcq",
    question: "Which property adds smooth transitions?",
    options: ["transition", "animate", "transform", "motion"],
    answer: "transition", explanation: "transition property creates smooth CSS property changes."
  },
  {
    id: 568, skill: "css", level: "intermediate", type: "mcq",
    question: "What is a CSS pseudo-class?",
    options: ["A class that activates on event", "A normal class", "A hidden class", "A class for animations"],
    answer: "A class that activates on event", explanation: "Pseudo-classes like :hover trigger based on element state."
  },
  {
    id: 569, skill: "css", level: "intermediate", type: "truefalse",
    question: "CSS specificity is important for cascade rules.", options: ["True", "False"], answer: "True",
    explanation: "Specificity determines which rule applies when conflicts exist."
  },
  {
    id: 570, skill: "css", level: "intermediate", type: "mcq",
    question: "Which property rotates an element?",
    options: ["transform: rotate()", "rotate()", "rotation", "turn"],
    answer: "transform: rotate()", explanation: "transform: rotate() rotates elements by specified degrees."
  },
  {
    id: 571, skill: "css", level: "intermediate", type: "mcq",
    question: "What does 'overflow: hidden' do?",
    options: ["Clips overflow content", "Hides element", "Removes overflow", "Scrolls content"],
    answer: "Clips overflow content", explanation: "overflow: hidden clips content that exceeds container."
  },
  {
    id: 572, skill: "css", level: "intermediate", type: "mcq",
    question: "Which media query targets mobile devices?",
    options: ["@media (max-width: 768px)", "@media mobile", "@media small", "@media phone"],
    answer: "@media (max-width: 768px)", explanation: "Media queries use width/height to target devices."
  },
  {
    id: 573, skill: "css", level: "intermediate", type: "truefalse",
    question: "CSS Grid is better than Flexbox for all layouts.", options: ["True", "False"], answer: "False",
    explanation: "Choose Grid for 2D layouts, Flexbox for 1D layouts."
  },
  {
    id: 574, skill: "css", level: "intermediate", type: "mcq",
    question: "What does opacity: 0.5 mean?",
    options: ["50% transparent", "50% opaque", "Half visible", "All of above"],
    answer: "All of above", explanation: "opacity: 0.5 makes element 50% transparent."
  },
  {
    id: 575, skill: "css", level: "intermediate", type: "mcq",
    question: "Which property adds shadow to text?",
    options: ["text-shadow", "shadow", "font-shadow", "text-effect"],
    answer: "text-shadow", explanation: "text-shadow adds shadow effect to text."
  },
  {
    id: 576, skill: "css", level: "intermediate", type: "truefalse",
    question: "CSS custom properties (variables) are supported in modern browsers.", options: ["True", "False"], answer: "True",
    explanation: "CSS variables (--name) are supported in modern browsers."
  },

  // Advanced CSS (8)
  {
    id: 577, skill: "css", level: "advanced", type: "mcq",
    question: "What is CSS containment?",
    options: ["Limiting layout calculations", "Containing elements", "Container queries", "CSS containers"],
    answer: "Limiting layout calculations", explanation: "Containment optimizes performance by limiting calculations."
  },
  {
    id: 578, skill: "css", level: "advanced", type: "truefalse",
    question: "CSS filter() function applies SVG filters.", options: ["True", "False"], answer: "True",
    explanation: "filter property applies visual effects like blur, brightness, etc."
  },
  {
    id: 579, skill: "css", level: "advanced", type: "mcq",
    question: "What does 'will-change' property do?",
    options: ["Hints browser about future changes", "Changes properties", "Animates elements", "All of above"],
    answer: "Hints browser about future changes", explanation: "will-change hints browser to optimize for coming changes."
  },
  {
    id: 580, skill: "css", level: "advanced", type: "mcq",
    question: "Which display value creates a grid layout?",
    options: ["display: grid", "display: table", "display: flex", "display: layout"],
    answer: "display: grid", explanation: "display: grid creates CSS Grid layout."
  },
  {
    id: 581, skill: "css", level: "advanced", type: "truefalse",
    question: "CSS Subgrid allows nested grids to align with parent.", options: ["True", "False"], answer: "True",
    explanation: "Subgrid allows nested grids to use parent grid tracks."
  },
  {
    id: 582, skill: "css", level: "advanced", type: "mcq",
    question: "What is CSS logical properties?",
    options: ["Width/height relative to text direction", "Logical operators", "Conditional CSS", "Boolean values"],
    answer: "Width/height relative to text direction", explanation: "Logical properties adapt to writing direction."
  },
  {
    id: 583, skill: "css", level: "advanced", type: "mcq",
    question: "Which selector has highest specificity?",
    options: ["!important", "ID selector", "Class selector", "Element selector"],
    answer: "!important", explanation: "!important has highest specificity but should be avoided."
  },
  {
    id: 584, skill: "css", level: "advanced", type: "truefalse",
    question: "CSS aspect-ratio property controls element proportions.", options: ["True", "False"], answer: "True",
    explanation: "aspect-ratio maintains element width/height ratio."
  },

  // ================== BOOTSTRAP QUESTIONS (34) ==================
  // Intermediate Bootstrap (17)
  {
    id: 585, skill: "bootstrap", level: "intermediate", type: "mcq",
    question: "What is Bootstrap?",
    options: ["CSS framework", "JavaScript framework", "Both CSS and JS", "Template engine"],
    answer: "Both CSS and JS", explanation: "Bootstrap provides CSS components and JS plugins."
  },
  {
    id: 586, skill: "bootstrap", level: "intermediate", type: "mcq",
    question: "What is Bootstrap's default grid system columns?",
    options: ["12", "16", "10", "8"], answer: "12",
    explanation: "Bootstrap uses a 12-column responsive grid system."
  },
  {
    id: 587, skill: "bootstrap", level: "intermediate", type: "mcq",
    question: "Which class creates a Bootstrap row?",
    options: ["row", "grid-row", "container-row", "flex-row"],
    answer: "row", explanation: "row class creates a horizontal group of columns."
  },
  {
    id: 588, skill: "bootstrap", level: "intermediate", type: "mcq",
    question: "How do you create a Bootstrap column?",
    options: ["col or col-md-X", "column", "grid-col", "flex-col"],
    answer: "col or col-md-X", explanation: "col classes define column width on different screens."
  },
  {
    id: 589, skill: "bootstrap", level: "intermediate", type: "truefalse",
    question: "Bootstrap requires jQuery.", options: ["True", "False"], answer: "False",
    explanation: "Bootstrap 5 no longer requires jQuery."
  },
  {
    id: 590, skill: "bootstrap", level: "intermediate", type: "mcq",
    question: "What does 'container' class do in Bootstrap?",
    options: ["Wraps content with padding/margins", "Creates a container", "Responsive width", "All of above"],
    answer: "All of above", explanation: "container provides responsive fixed-width wrapper."
  },
  {
    id: 591, skill: "bootstrap", level: "intermediate", type: "mcq",
    question: "Which class centers content horizontally?",
    options: ["mx-auto", "text-center", "center", "align-center"],
    answer: "mx-auto", explanation: "mx-auto sets margin-left and margin-right to auto."
  },
  {
    id: 592, skill: "bootstrap", level: "intermediate", type: "mcq",
    question: "What is a Bootstrap utility class?",
    options: ["Pre-built CSS for common tasks", "Reusable component", "Bootstrap plugin", "CSS framework"],
    answer: "Pre-built CSS for common tasks", explanation: "Utility classes provide quick styling without custom CSS."
  },
  {
    id: 593, skill: "bootstrap", level: "intermediate", type: "truefalse",
    question: "Bootstrap provides icon components.", options: ["True", "False"], answer: "False",
    explanation: "Bootstrap 5 removed icons; use Bootstrap Icons separately."
  },
  {
    id: 594, skill: "bootstrap", level: "intermediate", type: "mcq",
    question: "Which Bootstrap class creates a navigation bar?",
    options: ["navbar", "nav-bar", "navigation", "header"],
    answer: "navbar", explanation: "navbar class creates Bootstrap navigation component."
  },
  {
    id: 595, skill: "bootstrap", level: "intermediate", type: "mcq",
    question: "What is Bootstrap responsiveness based on?",
    options: ["Breakpoints", "Screen size", "Device type", "All of above"],
    answer: "Breakpoints", explanation: "Bootstrap uses named breakpoints (sm, md, lg, xl, xxl)."
  },
  {
    id: 596, skill: "bootstrap", level: "intermediate", type: "mcq",
    question: "How do you add padding in Bootstrap?",
    options: ["p-X (p-1 to p-5)", "padding-X", "pad-X", "space-X"],
    answer: "p-X (p-1 to p-5)", explanation: "p-X classes add padding quickly."
  },
  {
    id: 597, skill: "bootstrap", level: "intermediate", type: "truefalse",
    question: "Bootstrap includes CSS reset/normalize.", options: ["True", "False"], answer: "True",
    explanation: "Bootstrap normalizes browser default styles."
  },
  {
    id: 598, skill: "bootstrap", level: "intermediate", type: "mcq",
    question: "Which Bootstrap component shows highlighted information?",
    options: ["alert", "notification", "message", "banner"],
    answer: "alert", explanation: "alert component displays various message types."
  },
  {
    id: 599, skill: "bootstrap", level: "intermediate", type: "mcq",
    question: "What is Bootstrap's primary color variable?",
    options: ["primary", "color-primary", "main-color", "brand-color"],
    answer: "primary", explanation: "Bootstrap themes use primary, secondary, success, etc."
  },
  {
    id: 600, skill: "bootstrap", level: "intermediate", type: "truefalse",
    question: "Bootstrap supports dark mode.", options: ["True", "False"], answer: "True",
    explanation: "Bootstrap 5.3+ includes built-in dark mode support."
  },
  {
    id: 601, skill: "bootstrap", level: "intermediate", type: "mcq",
    question: "Which class creates a Bootstrap button?",
    options: ["btn", "button", "bootstrap-btn", "btn-style"],
    answer: "btn", explanation: "btn class creates Bootstrap styled buttons."
  },

  // Advanced Bootstrap (17)
  {
    id: 602, skill: "bootstrap", level: "advanced", type: "mcq",
    question: "How do you customize Bootstrap defaults?",
    options: ["Override Sass variables", "Edit CSS files", "Use custom CSS", "Can't customize"],
    answer: "Override Sass variables", explanation: "Customize Bootstrap by overriding Sass variables."
  },
  {
    id: 603, skill: "bootstrap", level: "advanced", type: "mcq",
    question: "What is Bootstrap Sass?",
    options: ["Source files with variables/mixins", "CSS version", "Compiled Bootstrap", "Theme"],
    answer: "Source files with variables/mixins", explanation: "Sass source allows deep customization before compilation."
  },
  {
    id: 604, skill: "bootstrap", level: "advanced", type: "truefalse",
    question: "Bootstrap's grid uses CSS Grid internally.", options: ["True", "False"], answer: "False",
    explanation: "Bootstrap uses flexbox for its grid system."
  },
  {
    id: 605, skill: "bootstrap", level: "advanced", type: "mcq",
    question: "What does Bootstrap's 'display' utility do?",
    options: ["Controls display property", "Shows/hides content", "CSS display values", "All of above"],
    answer: "All of above", explanation: "d-X classes control display property across breakpoints."
  },
  {
    id: 606, skill: "bootstrap", level: "advanced", type: "mcq",
    question: "Which Bootstrap component creates collapsible content?",
    options: ["collapse", "accordion", "modal", "dropdown"],
    answer: "collapse", explanation: "collapse component creates hide/show functionality."
  },
  {
    id: 607, skill: "bootstrap", level: "advanced", type: "mcq",
    question: "How do you create responsive images in Bootstrap?",
    options: ["img-fluid class", "responsive-img", "img-responsive", "auto-responsive"],
    answer: "img-fluid class", explanation: "img-fluid makes images scale with parent container."
  },
  {
    id: 608, skill: "bootstrap", level: "advanced", type: "truefalse",
    question: "Bootstrap modals use JavaScript.", options: ["True", "False"], answer: "True",
    explanation: "Modal component requires Bootstrap JavaScript."
  },
  {
    id: 609, skill: "bootstrap", level: "advanced", type: "mcq",
    question: "What is Bootstrap's flex utilities for?",
    options: ["Create flexbox layouts quickly", "Flex components", "Flexible columns", "Flex animations"],
    answer: "Create flexbox layouts quickly", explanation: "d-flex and related classes enable flexbox layouts."
  },
  {
    id: 610, skill: "bootstrap", level: "advanced", type: "mcq",
    question: "How many default breakpoints does Bootstrap have?",
    options: ["5", "4", "6", "3"], answer: "5",
    explanation: "sm, md, lg, xl, xxl - five main breakpoints."
  },
  {
    id: 611, skill: "bootstrap", level: "advanced", type: "truefalse",
    question: "Bootstrap includes form validation styles.", options: ["True", "False"], answer: "True",
    explanation: "Bootstrap provides validation states for forms."
  },
  {
    id: 612, skill: "bootstrap", level: "advanced", type: "mcq",
    question: "What is Bootstrap's card component for?",
    options: ["Container for content blocks", "Player cards", "Form component", "Navigation"],
    answer: "Container for content blocks", explanation: "card provides flexible container for content."
  },
  {
    id: 613, skill: "bootstrap", level: "advanced", type: "mcq",
    question: "How do you hide elements on small screens in Bootstrap?",
    options: ["d-none d-md-block", "hide-sm", "d-hide-sm", "responsive-hide"],
    answer: "d-none d-md-block", explanation: "Combine d-none with breakpoint classes to hide."
  },
  {
    id: 614, skill: "bootstrap", level: "advanced", type: "truefalse",
    question: "Bootstrap uses CSS custom properties (variables).", options: ["True", "False"], answer: "True",
    explanation: "Bootstrap 5 uses CSS variables for theming."
  },
  {
    id: 615, skill: "bootstrap", level: "advanced", type: "mcq",
    question: "What does Bootstrap's 'spinner' component do?",
    options: ["Shows loading indicator", "Creates animations", "Loading animation", "Rotating indicator"],
    answer: "Shows loading indicator", explanation: "spinner displays loading state visually."
  },
  {
    id: 616, skill: "bootstrap", level: "advanced", type: "mcq",
    question: "How do you align items with Bootstrap utilities?",
    options: ["align-items-X, justify-content-X", "text-align", "position", "flex-align"],
    answer: "align-items-X, justify-content-X", explanation: "These flexbox utilities align items and content."
  },
  {
    id: 617, skill: "bootstrap", level: "advanced", type: "truefalse",
    question: "Bootstrap tooltips require Popper.js.", options: ["True", "False"], answer: "True",
    explanation: "Tooltips and popovers require Popper.js for positioning."
  },
  {
    id: 618, skill: "bootstrap", level: "advanced", type: "mcq",
    question: "What is Bootstrap's 'container-fluid' class?",
    options: ["Full-width container", "Fixed width", "Max-width container", "Responsive container"],
    answer: "Full-width container", explanation: "container-fluid stretches to 100% width."
  },

  // ================== ADDITIONAL HTML QUESTIONS (67 more) ==================
  {
    id: 619, skill: "html", level: "beginner", type: "mcq",
    question: "Which tag defines a paragraph?",
    options: ["<p>", "<paragraph>", "<para>", "<text>"], answer: "<p>",
    explanation: "<p> tag represents a paragraph of text."
  },
  {
    id: 620, skill: "html", level: "beginner", type: "truefalse",
    question: "HTML5 is the latest version of HTML.", options: ["True", "False"], answer: "True",
    explanation: "HTML5 is the current standard for web markup."
  },
  {
    id: 621, skill: "html", level: "beginner", type: "mcq",
    question: "Which tag adds a line break?",
    options: ["<br>", "<break>", "<line>", "<hr>"], answer: "<br>",
    explanation: "<br> is the line break tag."
  },
  {
    id: 622, skill: "html", level: "beginner", type: "mcq",
    question: "What does the ID attribute do?",
    options: ["Uniquely identifies an element", "Adds styling", "Creates groups", "None"],
    answer: "Uniquely identifies an element", explanation: "ID uniquely identifies a single element on a page."
  },
  {
    id: 623, skill: "html", level: "beginner", type: "truefalse",
    question: "Multiple elements can have the same ID.", options: ["True", "False"], answer: "False",
    explanation: "Each ID must be unique within a document."
  },
  {
    id: 624, skill: "html", level: "beginner", type: "mcq",
    question: "Which tag creates the most important heading?",
    options: ["<h1>", "<h2>", "<title>", "<header>"], answer: "<h1>",
    explanation: "<h1> is the most important heading level."
  },
  {
    id: 625, skill: "html", level: "beginner", type: "mcq",
    question: "What is the <span> tag used for?",
    options: ["Inline grouping/styling", "Block grouping", "Page sections", "Navigation"],
    answer: "Inline grouping/styling", explanation: "<span> is an inline container for styling text."
  },
  {
    id: 626, skill: "html", level: "beginner", type: "truefalse",
    question: "HTML attributes are always required.", options: ["True", "False"], answer: "False",
    explanation: "Many HTML attributes are optional."
  },
  {
    id: 627, skill: "html", level: "beginner", type: "mcq",
    question: "Which tag creates a horizontal line?",
    options: ["<hr>", "<line>", "<hr/>", "Both A and C"], answer: "Both A and C",
    explanation: "<hr> and <hr/> both create horizontal rules."
  },
  {
    id: 628, skill: "html", level: "beginner", type: "mcq",
    question: "What does the <strong> tag do?",
    options: ["Adds strong emphasis (bold)", "Creates bold text", "Semantic emphasis", "All"],
    answer: "All", explanation: "<strong> adds semantic emphasis and displays as bold."
  },
  {
    id: 629, skill: "html", level: "intermediate", type: "mcq",
    question: "What is the <header> tag used for?",
    options: ["Document/section header", "Page title", "CSS headers", "Meta information"],
    answer: "Document/section header", explanation: "<header> represents header of page or section."
  },
  {
    id: 630, skill: "html", level: "intermediate", type: "mcq",
    question: "Which tag groups footer content?",
    options: ["<footer>", "<foot>", "<bottom>", "<end>"], answer: "<footer>",
    explanation: "<footer> represents footer of page or section."
  },
  {
    id: 631, skill: "html", level: "intermediate", type: "truefalse",
    question: "The <aside> tag creates a sidebar.", options: ["True", "False"], answer: "True",
    explanation: "<aside> contains content tangent to main content."
  },
  {
    id: 632, skill: "html", level: "intermediate", type: "mcq",
    question: "What does the <select> tag create?",
    options: ["Dropdown list", "Text input", "Checkbox", "Radio button"], answer: "Dropdown list",
    explanation: "<select> creates a dropdown selection list."
  },
  {
    id: 633, skill: "html", level: "intermediate", type: "mcq",
    question: "Which input type creates a checkbox?",
    options: ["checkbox", "check", "option", "select"],
    answer: "checkbox", explanation: "type='checkbox' creates checkbox inputs."
  },
  {
    id: 634, skill: "html", level: "intermediate", type: "mcq",
    question: "What is the <textarea> tag for?",
    options: ["Multi-line text input", "Single line", "Display text", "Comments"],
    answer: "Multi-line text input", explanation: "<textarea> allows multi-line text entry."
  },
  {
    id: 635, skill: "html", level: "intermediate", type: "truefalse",
    question: "<div> and <span> are replaced by semantic tags.", options: ["True", "False"], answer: "False",
    explanation: "They still serve different purposes in modern HTML."
  },
  {
    id: 636, skill: "html", level: "intermediate", type: "mcq",
    question: "Which tag defines table headers?",
    options: ["<th>", "<thead>", "<header>", "<head>"], answer: "<th>",
    explanation: "<th> defines a table header cell."
  },
  {
    id: 637, skill: "html", level: "intermediate", type: "mcq",
    question: "What is the <tbody> tag for?",
    options: ["Groups table body rows", "Table section", "Body content", "Table styling"],
    answer: "Groups table body rows", explanation: "<tbody> semantically groups body rows."
  },
  {
    id: 638, skill: "html", level: "intermediate", type: "mcq",
    question: "Which element creates a definition list?",
    options: ["<dl>", "<ul>", "<ol>", "<list>"], answer: "<dl>",
    explanation: "<dl> creates a definition/description list."
  },
  {
    id: 639, skill: "html", level: "intermediate", type: "mcq",
    question: "What does the <time> tag represent?",
    options: ["Date/time information", "Duration only", "Timestamps only", "Time zones"],
    answer: "Date/time information", explanation: "<time> represents dates and times."
  },
  {
    id: 640, skill: "html", level: "intermediate", type: "truefalse",
    question: "<mark> highlights text.", options: ["True", "False"], answer: "True",
    explanation: "<mark> highlights text in yellow by default."
  },
  {
    id: 641, skill: "html", level: "intermediate", type: "mcq",
    question: "Which tag represents important text?",
    options: ["<strong>", "<important>", "<b>", "<em>"], answer: "<strong>",
    explanation: "<strong> represents strong importance."
  },
  {
    id: 642, skill: "html", level: "intermediate", type: "mcq",
    question: "What is the <details> tag for?",
    options: ["Collapsible details", "Additional info", "Expandable content", "All"],
    answer: "All", explanation: "<details> creates expandable disclosure widgets."
  },
  {
    id: 643, skill: "html", level: "intermediate", type: "mcq",
    question: "Which tag summarizes <details> content?",
    options: ["<summary>", "<caption>", "<title>", "<label>"], answer: "<summary>",
    explanation: "<summary> provides summary for <details>."
  },
  {
    id: 644, skill: "html", level: "intermediate", type: "truefalse",
    question: "<progress> shows completion state.", options: ["True", "False"], answer: "True",
    explanation: "<progress> displays progress of a task."
  },
  {
    id: 645, skill: "html", level: "intermediate", type: "mcq",
    question: "What does the <meter> tag measure?",
    options: ["Scalar within range", "Time duration", "Progress", "Percentages only"],
    answer: "Scalar within range", explanation: "<meter> shows scalar measurement within range."
  },
  {
    id: 646, skill: "html", level: "intermediate", type: "mcq",
    question: "Which tag embeds audio?",
    options: ["<audio>", "<sound>", "<music>", "<media>"], answer: "<audio>",
    explanation: "<audio> embeds audio files."
  },
  {
    id: 647, skill: "html", level: "intermediate", type: "mcq",
    question: "What does <video> tag do?",
    options: ["Embeds video content", "Creates player", "Streaming", "References video"],
    answer: "Embeds video content", explanation: "<video> embeds video files."
  },
  {
    id: 648, skill: "html", level: "intermediate", type: "truefalse",
    question: "HTML5 supports inline SVG and MathML.", options: ["True", "False"], answer: "True",
    explanation: "HTML5 allows embedded SVG and MathML."
  },
  {
    id: 649, skill: "html", level: "advanced", type: "mcq",
    question: "What is the XML declaration for HTML?",
    options: ["<?xml version='1.0'?>", "<!DOCTYPE>", "<!html>", "<?html?>"],
    answer: "<?xml version='1.0'?>", explanation: "XML declaration at top of XHTML files."
  },
  {
    id: 650, skill: "html", level: "advanced", type: "mcq",
    question: "Which doctype is correct for HTML5?",
    options: ["<!DOCTYPE html>", "<!DOCTYPE HTML4>", "<!DOCTYPE html5>", "<!DOCTYPE>"],
    answer: "<!DOCTYPE html>", explanation: "<!DOCTYPE html> is HTML5 doctype."
  },
  {
    id: 651, skill: "html", level: "advanced", type: "truefalse",
    question: "The <canvas> element allows drawing.", options: ["True", "False"], answer: "True",
    explanation: "<canvas> provides drawing surface via JavaScript."
  },
  {
    id: 652, skill: "html", level: "advanced", type: "mcq",
    question: "What is the purpose of <source> tag?",
    options: ["Multiple media sources", "CSS source", "Data source", "Link source"],
    answer: "Multiple media sources", explanation: "<source> provides alternative media files."
  },
  {
    id: 653, skill: "html", level: "advanced", type: "mcq",
    question: "Which attribute prevents caching?",
    options: ["cache-control", "no-cache", "disabled", "refresh"],
    answer: "cache-control", explanation: "cache-control header prevents browser caching."
  },
  {
    id: 654, skill: "html", level: "advanced", type: "truefalse",
    question: "HTML supports drag and drop natively.", options: ["True", "False"], answer: "True",
    explanation: "Drag and drop API is part of HTML5."
  },
  {
    id: 655, skill: "html", level: "advanced", type: "mcq",
    question: "What is the <output> tag for?",
    options: ["Display calculation results", "Output only", "Print output", "Console output"],
    answer: "Display calculation results", explanation: "<output> shows result of calculation."
  },
  {
    id: 656, skill: "html", level: "advanced", type: "mcq",
    question: "Which HTML5 API provides offline storage?",
    options: ["localStorage", "sessionStorage", "IndexedDB", "All of above"],
    answer: "All of above", explanation: "Multiple storage APIs available in HTML5."
  },
  {
    id: 657, skill: "html", level: "advanced", type: "truefalse",
    question: "HTML5 supports geolocation API.", options: ["True", "False"], answer: "True",
    explanation: "Geolocation API available in modern browsers."
  },
  {
    id: 658, skill: "html", level: "advanced", type: "mcq",
    question: "What is the purpose of manifest attribute?",
    options: ["Cache offline resources", "App manifest", "Application definition", "All"],
    answer: "All", explanation: "Manifest attribute enables offline functionality."
  },
  {
    id: 659, skill: "html", level: "advanced", type: "mcq",
    question: "Which attribute makes form submit asynchronously?",
    options: ["No attribute needed (AJAX)", "async", "submit-async", "submit-type"],
    answer: "No attribute needed (AJAX)", explanation: "JavaScript/AJAX handles async submission."
  },
  {
    id: 660, skill: "html", level: "advanced", type: "truefalse",
    question: "HTML5 deprecated the <marquee> tag.", options: ["True", "False"], answer: "True",
    explanation: "<marquee> is deprecated in HTML5."
  },
  {
    id: 661, skill: "html", level: "beginner", type: "mcq",
    question: "What tag contains metadata?",
    options: ["<head>", "<meta>", "<title>", "All of above"], answer: "All of above",
    explanation: "All three contain different metadata."
  },
  {
    id: 662, skill: "html", level: "beginner", type: "mcq",
    question: "Which tag displays text in a box?",
    options: ["<pre>", "<code>", "<samp>", "All"], answer: "All",
    explanation: "All display formatted text in boxes."
  },
  {
    id: 663, skill: "html", level: "beginner", type: "truefalse",
    question: "Empty tags can have attributes.", options: ["True", "False"], answer: "True",
    explanation: "Self-closing tags like <img> can have attributes."
  },
  {
    id: 664, skill: "html", level: "beginner", type: "mcq",
    question: "What does <form> method attribute specify?",
    options: ["HTTP method (GET/POST)", "Form layout", "Validation", "Submission type"],
    answer: "HTTP method (GET/POST)", explanation: "method attribute specifies GET or POST."
  },
  {
    id: 665, skill: "html", level: "beginner", type: "mcq",
    question: "Which value makes form data visible in URL?",
    options: ["GET", "POST", "AJAX", "JSON"],
    answer: "GET", explanation: "GET method appends data to URL."
  },
  {
    id: 666, skill: "html", level: "beginner", type: "truefalse",
    question: "POST is more secure than GET.", options: ["True", "False"], answer: "False",
    explanation: "POST is only secure if HTTPS is used."
  },
  {
    id: 667, skill: "html", level: "beginner", type: "mcq",
    question: "What is the <label> tag used for?",
    options: ["Associate text with form element", "Add labels only", "Form titles", "Text styling"],
    answer: "Associate text with form element", explanation: "<label> links text to form controls."
  },
  {
    id: 668, skill: "html", level: "beginner", type: "mcq",
    question: "Which input type is for passwords?",
    options: ["password", "pwd", "secret", "hidden"],
    answer: "password", explanation: "type='password' hides input text."
  },
  {
    id: 669, skill: "html", level: "beginner", type: "truefalse",
    question: "type='submit' creates a submit button.", options: ["True", "False"], answer: "True",
    explanation: "type='submit' creates form submit button."
  },
  {
    id: 670, skill: "html", level: "intermediate", type: "mcq",
    question: "What is the <option> tag for?",
    options: ["Dropdown list item", "Configuration", "Choice", "Selection option"],
    answer: "Dropdown list item", explanation: "<option> defines items in <select>."
  },
  {
    id: 671, skill: "html", level: "intermediate", type: "mcq",
    question: "Which attribute makes a radio button selected?",
    options: ["checked", "selected", "active", "default"],
    answer: "checked", explanation: "checked attribute pre-selects radio buttons."
  },
  {
    id: 672, skill: "html", level: "intermediate", type: "truefalse",
    question: "Multiple checkboxes can share the same name.", options: ["True", "False"], answer: "True",
    explanation: "Multiple checkboxes often share same name for grouping."
  },
  {
    id: 673, skill: "html", level: "intermediate", type: "mcq",
    question: "What does the <datalist> tag do?",
    options: ["Provides autocomplete suggestions", "Date input only", "List of data", "Configuration"],
    answer: "Provides autocomplete suggestions", explanation: "<datalist> provides suggestions for input."
  },
  {
    id: 674, skill: "html", level: "intermediate", type: "mcq",
    question: "Which tag represents quoted text?",
    options: ["<blockquote>", "<quote>", "<q>", "Both A and C"], answer: "Both A and C",
    explanation: "<blockquote> and <q> represent quotes."
  },
  {
    id: 675, skill: "html", level: "intermediate", type: "mcq",
    question: "What is the <figure> tag for?",
    options: ["Self-contained illustrations", "Numbers only", "Diagrams", "Graphics"],
    answer: "Self-contained illustrations", explanation: "<figure> wraps illustrations/diagrams."
  },
  {
    id: 676, skill: "html", level: "intermediate", type: "mcq",
    question: "Which tag provides caption for <figure>?",
    options: ["<figcaption>", "<caption>", "<title>", "<desc>"], answer: "<figcaption>",
    explanation: "<figcaption> provides text description for figure."
  },
  {
    id: 677, skill: "html", level: "intermediate", type: "truefalse",
    question: "The <section> tag replaces <div>.", options: ["True", "False"], answer: "False",
    explanation: "They serve different semantic purposes."
  },
  {
    id: 678, skill: "html", level: "intermediate", type: "mcq",
    question: "What is the <em> tag for?",
    options: ["Emphasis (usually italic)", "Bold text", "Important text", "Strong emphasis"],
    answer: "Emphasis (usually italic)", explanation: "<em> adds emphasis, displayed as italic."
  },
  {
    id: 679, skill: "html", level: "intermediate", type: "mcq",
    question: "Which tag shows deleted text?",
    options: ["<del>", "<strike>", "deleted>", "<remove>"], answer: "<del>",
    explanation: "<del> represents deleted/removed text."
  },
  {
    id: 680, skill: "html", level: "intermediate", type: "mcq",
    question: "What does <ins> tag represent?",
    options: ["Inserted text", "Installation", "Instance", "Instructions"],
    answer: "Inserted text", explanation: "<ins> represents added/inserted text."
  },
  {
    id: 681, skill: "html", level: "intermediate", type: "truefalse",
    question: "The <small> tag can be used for fine print.", options: ["True", "False"], answer: "True",
    explanation: "<small> represents side comments and small print."
  },
  {
    id: 682, skill: "html", level: "intermediate", type: "mcq",
    question: "Which tag represents computer output?",
    options: ["<samp>", "<code>", "<kbd>", "<pre>"], answer: "<samp>",
    explanation: "<samp> represents sample output from programs."
  },
  {
    id: 683, skill: "html", level: "advanced", type: "mcq",
    question: "What is the <wbr> tag for?",
    options: ["Words can break here", "Line break", "Word break", "Wrapping"],
    answer: "Words can break here", explanation: "<wbr> specifies where words can break."
  },
  {
    id: 684, skill: "html", level: "advanced", type: "mcq",
    question: "Which attribute specifies character encoding?",
    options: ["charset", "encoding", "code-page", "language"],
    answer: "charset", explanation: "charset attribute specifies character encoding."
  },
  {
    id: 685, skill: "html", level: "advanced", type: "truefalse",
    question: "UTF-8 is the recommended encoding.", options: ["True", "False"], answer: "True",
    explanation: "UTF-8 supports all characters universally."
  },

  // ================== ADDITIONAL CSS QUESTIONS (67 more) ==================
  {
    id: 686, skill: "css", level: "beginner", type: "mcq",
    question: "Which property adds border to an element?",
    options: ["border", "outline", "stroke", "line"],
    answer: "border", explanation: "border property creates a border around elements."
  },
  {
    id: 687, skill: "css", level: "beginner", type: "truefalse",
    question: "CSS padding is outside the element.", options: ["True", "False"], answer: "False",
    explanation: "Padding is inside the element border."
  },
  {
    id: 688, skill: "css", level: "beginner", type: "mcq",
    question: "Which value makes text bold?",
    options: ["bold", "900", "strong", "All"], answer: "All",
    explanation: "bold, 900, and strong all make text bold."
  },
  {
    id: 689, skill: "css", level: "beginner", type: "mcq",
    question: "How do you center text horizontally?",
    options: ["text-align: center", "align: center", "center-text", "justify-content"],
    answer: "text-align: center", explanation: "text-align: center centers inline content."
  },
  {
    id: 690, skill: "css", level: "beginner", type: "truefalse",
    question: "margin can be negative.", options: ["True", "False"], answer: "True",
    explanation: "Negative margins move elements or collapse space."
  },
  {
    id: 691, skill: "css", level: "beginner", type: "mcq",
    question: "Which property rotates text?",
    options: ["transform: rotate()", "text-rotate", "rotate", "text-angle"],
    answer: "transform: rotate()", explanation: "transform: rotate() rotates elements."
  },
  {
    id: 692, skill: "css", level: "beginner", type: "mcq",
    question: "What does display: none do?",
    options: ["Hides element completely", "Makes transparent", "Makes invisible", "Removes border"],
    answer: "Hides element completely", explanation: "display: none hides and removes from layout."
  },
  {
    id: 693, skill: "css", level: "beginner", type: "truefalse",
    question: "visibility: hidden hides but reserves space.", options: ["True", "False"], answer: "True",
    explanation: "visibility: hidden hides but keeps layout space."
  },
  {
    id: 694, skill: "css", level: "beginner", type: "mcq",
    question: "Which property controls text alignment?",
    options: ["text-align", "align", "position", "justify"],
    answer: "text-align", explanation: "text-align controls text alignment."
  },
  {
    id: 695, skill: "css", level: "beginner", type: "mcq",
    question: "What is the default position value?",
    options: ["static", "relative", "absolute", "fixed"],
    answer: "static", explanation: "static is the default position value."
  },
  {
    id: 696, skill: "css", level: "intermediate", type: "mcq",
    question: "Which position removes element from flow?",
    options: ["absolute", "relative", "fixed", "sticky"],
    answer: "absolute", explanation: "absolute positioning removes element from document flow."
  },
  {
    id: 697, skill: "css", level: "intermediate", type: "mcq",
    question: "What does position: fixed do?",
    options: ["Fixed to viewport", "Fixed to parent", "Fixed to scroll", "No change"],
    answer: "Fixed to viewport", explanation: "fixed positions relative to viewport."
  },
  {
    id: 698, skill: "css", level: "intermediate", type: "truefalse",
    question: "Flexbox and Grid are one-dimensional layout.", options: ["True", "False"], answer: "False",
    explanation: "Flexbox is 1D, Grid is 2D."
  },
  {
    id: 699, skill: "css", level: "intermediate", type: "mcq",
    question: "What does justify-content do in flexbox?",
    options: ["Aligns along main axis", "Aligns cross axis", "Justifies text", "Distributes space"],
    answer: "Aligns along main axis", explanation: "justify-content aligns items along main axis."
  },
  {
    id: 700, skill: "css", level: "intermediate", type: "mcq",
    question: "Which property aligns items on cross axis?",
    options: ["align-items", "justify-items", "align-content", "justify-content"],
    answer: "align-items", explanation: "align-items aligns items on cross axis."
  },
  {
    id: 701, skill: "css", level: "intermediate", type: "truefalse",
    question: "CSS animations require @keyframes.", options: ["True", "False"], answer: "True",
    explanation: "@keyframes defines animation progression."
  },
  {
    id: 702, skill: "css", level: "intermediate", type: "mcq",
    question: "What does transform do?",
    options: ["Changes element rendering", "Moves elements", "Scales elements", "All of above"],
    answer: "All of above", explanation: "transform can move, scale, rotate, skew."
  },
  {
    id: 703, skill: "css", level: "intermediate", type: "mcq",
    question: "Which pseudo-class selects first child?",
    options: [":first-child", ":first", ":first-of-type", ":nth(1)"],
    answer: ":first-child", explanation: ":first-child selects first child element."
  },
  {
    id: 704, skill: "css", level: "intermediate", type: "truefalse",
    question: ":hover requires user interaction.", options: ["True", "False"], answer: "True",
    explanation: ":hover triggers on mouse hover."
  },
  {
    id: 705, skill: "css", level: "intermediate", type: "mcq",
    question: "What does :nth-child(2n) select?",
    options: ["Every 2nd child", "2nd child only", "Every child", "No children"],
    answer: "Every 2nd child", explanation: "2n selects every even-numbered child."
  },
  {
    id: 706, skill: "css", level: "intermediate", type: "mcq",
    question: "Which selector has higher specificity?",
    options: ["ID selector", "Class selector", "Element selector", "Universal selector"],
    answer: "ID selector", explanation: "ID selector has highest specificity."
  },
  {
    id: 707, skill: "css", level: "intermediate", type: "truefalse",
    question: "!important overrides inline styles.", options: ["True", "False"], answer: "True",
    explanation: "!important has highest precedence."
  },
  {
    id: 708, skill: "css", level: "intermediate", type: "mcq",
    question: "What does box-shadow add?",
    options: ["Shadow effect", "Border shadow", "Text shadow", "Depth effect"],
    answer: "Shadow effect", explanation: "box-shadow creates shadow around element."
  },
  {
    id: 709, skill: "css", level: "intermediate", type: "mcq",
    question: "Which property creates shadows on text?",
    options: ["text-shadow", "shadow", "text-effect", "font-shadow"],
    answer: "text-shadow", explanation: "text-shadow adds shadow to text."
  },
  {
    id: 710, skill: "css", level: "intermediate", type: "truefalse",
    question: "border-radius creates rounded corners.", options: ["True", "False"], answer: "True",
    explanation: "border-radius creates rounded corner effects."
  },
  {
    id: 711, skill: "css", level: "intermediate", type: "mcq",
    question: "What is a media query for?",
    options: ["Apply styles based on conditions", "Query database", "Load media", "Media type"],
    answer: "Apply styles based on conditions", explanation: "Media queries apply styles conditionally."
  },
  {
    id: 712, skill: "css", level: "intermediate", type: "mcq",
    question: "Which media query is for mobile?",
    options: ["(max-width: 768px)", "(min-width: 768px)", "(width: mobile)", "(device: mobile)"],
    answer: "(max-width: 768px)", explanation: "Targets screens 768px or smaller."
  },
  {
    id: 713, skill: "css", level: "intermediate", type: "truefalse",
    question: "CSS is processed from bottom to top.", options: ["True", "False"], answer: "False",
    explanation: "CSS cascades from top to bottom."
  },
  {
    id: 714, skill: "css", level: "intermediate", type: "mcq",
    question: "What does white-space: nowrap do?",
    options: ["Prevents text wrap", "Removes whitespace", "Adds whitespace", "Hides whitespace"],
    answer: "Prevents text wrap", explanation: "nowrap prevents line breaks."
  },
  {
    id: 715, skill: "css", level: "intermediate", type: "mcq",
    question: "Which property controls text overflow?",
    options: ["text-overflow", "overflow", "text-clip", "overflow-text"],
    answer: "text-overflow", explanation: "text-overflow handles truncated text."
  },
  {
    id: 716, skill: "css", level: "advanced", type: "mcq",
    question: "What does clip-path do?",
    options: ["Clips element to a shape", "Creates paths", "Defines boundaries", "Crops images"],
    answer: "Clips element to a shape", explanation: "clip-path clips element to defined shape."
  },
  {
    id: 717, skill: "css", level: "advanced", type: "truefalse",
    question: "CSS custom properties start with --.", options: ["True", "False"], answer: "True",
    explanation: "Custom properties use -- prefix."
  },
  {
    id: 718, skill: "css", level: "advanced", type: "mcq",
    question: "What is a CSS variable used for?",
    options: ["Store reusable values", "Store calculations", "Store colors", "All"],
    answer: "All", explanation: "CSS variables store any reusable values."
  },
  {
    id: 719, skill: "css", level: "advanced", type: "mcq",
    question: "Which function retrieves custom property value?",
    options: ["var()", "value()", "get()", "prop()"],
    answer: "var()", explanation: "var() retrieves custom property value."
  },
  {
    id: 720, skill: "css", level: "advanced", type: "truefalse",
    question: "CSS can have nested rules.", options: ["True", "False"], answer: "False",
    explanation: "CSS doesn't support nesting (preprocessors do)."
  },
  {
    id: 721, skill: "css", level: "advanced", type: "mcq",
    question: "What is backdrop-filter for?",
    options: ["Apply effects behind element", "Filter images", "Element filter", "Background filter"],
    answer: "Apply effects behind element", explanation: "backdrop-filter applies effects to backdrop."
  },
  {
    id: 722, skill: "css", level: "advanced", type: "mcq",
    question: "Which property sets aspect ratio?",
    options: ["aspect-ratio", "ratio", "width/height", "proportions"],
    answer: "aspect-ratio", explanation: "aspect-ratio maintains element proportions."
  },
  {
    id: 723, skill: "css", level: "advanced", type: "truefalse",
    question: "@supports checks browser feature support.", options: ["True", "False"], answer: "True",
    explanation: "@supports checks CSS feature support."
  },
  {
    id: 724, skill: "css", level: "advanced", type: "mcq",
    question: "What is CSS containment?",
    options: ["Scope layout calculations", "Contains elements", "Constrains sizing", "Limits styles"],
    answer: "Scope layout calculations", explanation: "containment limits calculations to element."
  },
  {
    id: 725, skill: "css", level: "advanced", type: "mcq",
    question: "Which property hints browser of changes?",
    options: ["will-change", "animation-hint", "performance-hint", "change-hint"],
    answer: "will-change", explanation: "will-change hints browser to optimize."
  },
  {
    id: 726, skill: "css", level: "beginner", type: "truefalse",
    question: "You can use spaces in color hex codes.", options: ["True", "False"], answer: "False",
    explanation: "Hex codes like #FF0000 have no spaces."
  },
  {
    id: 727, skill: "css", level: "beginner", type: "mcq",
    question: "What is RGB color format?",
    options: ["rgb(255, 0, 0)", "Red Green Blue values", "0-255 per channel", "All of above"],
    answer: "All of above", explanation: "RGB uses values 0-255 for each channel."
  },
  {
    id: 728, skill: "css", level: "beginner", type: "mcq",
    question: "Which property makes background transparent?",
    options: ["background: transparent", "background: none", "opacity: 0", "All of above"],
    answer: "All of above", explanation: "All create transparent backgrounds."
  },
  {
    id: 729, skill: "css", level: "beginner", type: "truefalse",
    question: "CSS selectors are case-sensitive.", options: ["True", "False"], answer: "False",
    explanation: "CSS selectors are case-insensitive."
  },
  {
    id: 730, skill: "css", level: "beginner", type: "mcq",
    question: "What does letter-spacing do?",
    options: ["Adjusts space between characters", "Line height", "Word spacing", "Indentation"],
    answer: "Adjusts space between characters", explanation: "letter-spacing controls character spacing."
  },
  {
    id: 731, skill: "css", level: "beginner", type: "mcq",
    question: "Which property controls line height?",
    options: ["line-height", "spacing", "height", "font-height"],
    answer: "line-height", explanation: "line-height adjusts spacing between lines."
  },
  {
    id: 732, skill: "css", level: "beginner", type: "truefalse",
    question: "text-decoration can use multiple values.", options: ["True", "False"], answer: "True",
    explanation: "Can combine underline, overline, line-through."
  },
  {
    id: 733, skill: "css", level: "beginner", type: "mcq",
    question: "What is text-indent for?",
    options: ["Indents first line", "Indents paragraphs", "Indents all lines", "Tab spacing"],
    answer: "Indents first line", explanation: "text-indent indents the first line of text."
  },
  {
    id: 734, skill: "css", level: "beginner", type: "mcq",
    question: "Which value makes text vertical?",
    options: ["writing-mode: vertical-lr", "text-direction", "orientation", "rotate"],
    answer: "writing-mode: vertical-lr", explanation: "writing-mode changes text orientation."
  },
  {
    id: 735, skill: "css", level: "intermediate", type: "mcq",
    question: "What does flex-wrap do?",
    options: ["Wraps flex items to new line", "Wraps text", "Padding wrap", "Unwraps items"],
    answer: "Wraps flex items to new line", explanation: "flex-wrap allows wrapping of flex items."
  },
  {
    id: 736, skill: "css", level: "intermediate", type: "mcq",
    question: "Which property controls flex item growth?",
    options: ["flex-grow", "grow", "scale", "expand"],
    answer: "flex-grow", explanation: "flex-grow controls how items grow."
  },
  {
    id: 737, skill: "css", level: "intermediate", type: "mcq",
    question: "What does grid-template-columns define?",
    options: ["Number and size of columns", "Column styling", "Row layout", "Grid sizing"],
    answer: "Number and size of columns", explanation: "Defines grid column tracks."
  },
  {
    id: 738, skill: "css", level: "intermediate", type: "mcq",
    question: "Which value creates equal columns?",
    options: ["repeat(3, 1fr)", "repeat(3, auto)", "repeat(3, equal)", "1fr 1fr 1fr"],
    answer: "repeat(3, 1fr)", explanation: "repeat() with 1fr creates equal columns."
  },
  {
    id: 739, skill: "css", level: "intermediate", type: "truefalse",
    question: "CSS Grid is newer than Flexbox.", options: ["True", "False"], answer: "True",
    explanation: "Grid was introduced after Flexbox."
  },
  {
    id: 740, skill: "css", level: "intermediate", type: "mcq",
    question: "What does gap property do in Grid?",
    options: ["Sets space between items", "Createsgaps in layout", "Physical gap", "All"],
    answer: "All", explanation: "gap creates space between grid items."
  },
  {
    id: 741, skill: "css", level: "intermediate", type: "mcq",
    question: "Which value centers content in Grid?",
    options: ["place-items: center", "align: center", "center-all", "position: center"],
    answer: "place-items: center", explanation: "place-items: center centers all items."
  },
  {
    id: 742, skill: "css", level: "intermediate", type: "truefalse",
    question: "CSS animations can repeat infinitely.", options: ["True", "False"], answer: "True",
    explanation: "animation-iteration-count: infinite repeats forever."
  },
  {
    id: 743, skill: "css", level: "advanced", type: "mcq",
    question: "What is scoped CSS in web components?",
    options: ["CSS scoped to component", "Global scope", "Limited styling", "Encapsulation"],
    answer: "CSS scoped to component", explanation: "Shadow DOM provides style encapsulation."
  },
  {
    id: 744, skill: "css", level: "advanced", type: "mcq",
    question: "Which selector targets shadow DOM elements?",
    options: ["::slotted()", "::shadow", "::internal", "::enclosed"],
    answer: "::slotted()", explanation: "::slotted() targets slot content."
  },
  {
    id: 745, skill: "css", level: "advanced", type: "truefalse",
    question: "CSS can detect browser viewport changes.", options: ["True", "False"], answer: "True",
    explanation: "Viewport units and media queries detect changes."
  },
  {
    id: 746, skill: "css", level: "advanced", type: "mcq",
    question: "What is calc() function for?",
    options: ["Dynamic calculations", "Math operations", "Value computation", "All"],
    answer: "All", explanation: "calc() performs dynamic calculations."
  },
  {
    id: 747, skill: "css", level: "advanced", type: "mcq",
    question: "Which unit is relative to viewport?",
    options: ["vw, vh, vmin, vmax", "em, rem, px", "cm, mm, in", "pt, pc"],
    answer: "vw, vh, vmin, vmax", explanation: "Viewport units are relative to viewport."
  },
  {
    id: 748, skill: "css", level: "advanced", type: "truefalse",
    question: "rem is relative to root element.", options: ["True", "False"], answer: "True",
    explanation: "rem units are relative to root font-size."
  },
  {
    id: 749, skill: "css", level: "advanced", type: "mcq",
    question: "What is initial value in CSS?",
    options: ["Browser's default value", "Set value", "0", "Font size"],
    answer: "Browser's default value", explanation: "initial resets to browser default."
  },
  {
    id: 750, skill: "css", level: "advanced", type: "mcq",
    question: "Which value inherits from parent?",
    options: ["inherit", "parent", "automatic", "default"],
    answer: "inherit", explanation: "inherit uses parent element's value."
  },
  {
    id: 751, skill: "css", level: "advanced", type: "truefalse",
    question: "unset removes all CSS declarations.", options: ["True", "False"], answer: "True",
    explanation: "unset resets to inherited or initial value."
  },
  {
    id: 752, skill: "css", level: "advanced", type: "mcq",
    question: "What does revert do?",
    options: ["Reverts to browser default", "Removes style", "Goes to previous state", "Resets element"],
    answer: "Reverts to browser default", explanation: "revert returns to browser/user agent styles."
  },

  // ================== ADDITIONAL BOOTSTRAP QUESTIONS (66 more) ==================
  {
    id: 753, skill: "bootstrap", level: "intermediate", type: "mcq",
    question: "What is Bootstrap's spacing scale?",
    options: ["0 through 5", "0 through 10", "auto", "1 through 12"],
    answer: "0 through 5", explanation: "Bootstrap spacing scale: 0-5 (some with 6-7)."
  },
  {
    id: 754, skill: "bootstrap", level: "intermediate", type: "truefalse",
    question: "Bootstrap is mobile-first.", options: ["True", "False"], answer: "True",
    explanation: "Bootstrap design approach starts with mobile."
  },
  {
    id: 755, skill: "bootstrap", level: "intermediate", type: "mcq",
    question: "Which breakpoint is for tablets?",
    options: ["md", "sm", "lg", "xl"], answer: "md",
    explanation: "md (768px) is typically tablet breakpoint."
  },
  {
    id: 756, skill: "bootstrap", level: "intermediate", type: "mcq",
    question: "What does 'gutter' mean in Bootstrap?",
    options: ["Space between columns", "Column width", "Row height", "Border gap"],
    answer: "Space between columns", explanation: "Gutters are gaps between columns."
  },
  {
    id: 757, skill: "bootstrap", level: "intermediate", type: "truefalse",
    question: "Bootstrap buttons have default styling.", options: ["True", "False"], answer: "True",
    explanation: "btn class provides default button styling."
  },
  {
    id: 758, skill: "bootstrap", level: "intermediate", type: "mcq",
    question: "Which class creates a list group?",
    options: ["list-group", "group-list", "bootstrap-list", "ul-group"],
    answer: "list-group", explanation: "list-group creates Bootstrap-styled lists."
  },
  {
    id: 759, skill: "bootstrap", level: "intermediate", type: "mcq",
    question: "What is the 'badge' component for?",
    options: ["Small count indicators", "User profile", "Icons", "Labels"],
    answer: "Small count indicators", explanation: "badge displays count/notification indicators."
  },
  {
    id: 760, skill: "bootstrap", level: "intermediate", type: "truefalse",
    question: "Bootstrap has a breadcrumb component.", options: ["True", "False"], answer: "True",
    explanation: "breadcrumb shows navigation hierarchy."
  },
  {
    id: 761, skill: "bootstrap", level: "intermediate", type: "mcq",
    question: "Which class creates a pagination?",
    options: ["pagination", "pager", "page-nav", "nav-pages"],
    answer: "pagination", explanation: "pagination creates page navigation."
  },
  {
    id: 762, skill: "bootstrap", level: "intermediate", type: "mcq",
    question: "What does the 'table-striped' class do?",
    options: ["Alternates row colors", "Striped borders", "Column stripes", "Style only"],
    answer: "Alternates row colors", explanation: "table-striped styles alternating row colors."
  },
  {
    id: 763, skill: "bootstrap", level: "intermediate", type: "mcq",
    question: "Which class makes a responsive table?",
    options: ["table-responsive", "responsive-table", "table-scroll", "mobile-table"],
    answer: "table-responsive", explanation: "table-responsive enables scrolling on small screens."
  },
  {
    id: 764, skill: "bootstrap", level: "intermediate", type: "truefalse",
    question: "Bootstrap forms have built-in validation styling.", options: ["True", "False"], answer: "True",
    explanation: "Form validation styles included."
  },
  {
    id: 765, skill: "bootstrap", level: "intermediate", type: "mcq",
    question: "What is 'form-group' used for?",
    options: ["Group form elements", "Collection of forms", "Form styling", "Form validation"],
    answer: "Group form elements", explanation: "form-group wraps form elements."
  },
  {
    id: 766, skill: "bootstrap", level: "intermediate", type: "mcq",
    question: "Which class creates form control styling?",
    options: ["form-control", "control", "input-style", "form-input"],
    answer: "form-control", explanation: "form-control styles input/textarea elements."
  },
  {
    id: 767, skill: "bootstrap", level: "intermediate", type: "truefalse",
    question: "Bootstrap has a carousel component.", options: ["True", "False"], answer: "True",
    explanation: "carousel creates image/content sliders."
  },
  {
    id: 768, skill: "bootstrap", level: "intermediate", type: "mcq",
    question: "What is the 'shadow' utility for?",
    options: ["Add box shadow", "Shadow styling", "Element emphasis", "Depth effect"],
    answer: "Add box shadow", explanation: "shadow-X classes add box shadows."
  },
  {
    id: 769, skill: "bootstrap", level: "advanced", type: "mcq",
    question: "What is Bootstrap's package manager?",
    options: ["npm", "bower", "composer", "wget"],
    answer: "npm", explanation: "Bootstrap is installed via npm."
  },
  {
    id: 770, skill: "bootstrap", level: "advanced", type: "mcq",
    question: "How do you override Bootstrap colors?",
    options: ["Edit Sass variables", "CSS override", "Custom CSS", "All of above"],
    answer: "Edit Sass variables", explanation: "Override in Sass before compilation."
  },
  {
    id: 771, skill: "bootstrap", level: "advanced", type: "mcq",
    question: "Which Bootstrap class hides sm screens?",
    options: ["d-none d-md-block", "display-none-sm", "hidden-sm", "sm-hide"],
    answer: "d-none d-md-block", explanation: "Combines display utilities to hide on sm."
  },
  {
    id: 772, skill: "bootstrap", level: "advanced", type: "truefalse",
    question: "Bootstrap rows require container.", options: ["True", "False"], answer: "True",
    explanation: "Rows must be inside container/container-fluid."
  },
  {
    id: 773, skill: "bootstrap", level: "advanced", type: "mcq",
    question: "What is 'col-auto' for?",
    options: ["Size based on content", "Automatic spacing", "Auto width", "Content width"],
    answer: "Size based on content", explanation: "col-auto sizes column to content width."
  },
  {
    id: 774, skill: "bootstrap", level: "advanced", type: "mcq",
    question: "Which utility aligns flex items?",
    options: ["align-items-X", "justify-content-X", "align-content-X", "All of above"],
    answer: "All of above", explanation: "All align flex items in different ways."
  },
  {
    id: 775, skill: "bootstrap", level: "advanced", type: "truefalse",
    question: "Bootstrap modals can be nested.", options: ["True", "False"], answer: "False",
    explanation: "Modals shouldn't be nested."
  },
  {
    id: 776, skill: "bootstrap", level: "advanced", type: "mcq",
    question: "What is Bootstrap's modal trigger?",
    options: ["data-bs-toggle", "data-toggle", "modal-trigger", "trigger"],
    answer: "data-bs-toggle", explanation: "data-bs-toggle triggers Bootstrap components."
  },
  {
    id: 777, skill: "bootstrap", level: "advanced", type: "mcq",
    question: "Which property sizes container?",
    options: ["container-lg, container-xl", "size-lg", "bootstrap-lg", "width-lg"],
    answer: "container-lg, container-xl", explanation: "Different containers for different max-widths."
  },
  {
    id: 778, skill: "bootstrap", level: "advanced", type: "truefalse",
    question: "Bootstrap supports CSS modules.", options: ["True", "False"], answer: "False",
    explanation: "Bootstrap is traditional CSS."
  },
  {
    id: 779, skill: "bootstrap", level: "advanced", type: "mcq",
    question: "What is 'offcanvas' component?",
    options: ["Sidebar navigation", "Drawer sidebar", "Hidden menu", "All"],
    answer: "All", explanation: "Offcanvas creates hidden slide-out sidebars."
  },
  {
    id: 780, skill: "bootstrap", level: "advanced", type: "mcq",
    question: "Which class makes images responsive?",
    options: ["img-fluid", "responsive-img", "image-responsive", "fluid-img"],
    answer: "img-fluid", explanation: "img-fluid makes images scale with container."
  },
  {
    id: 781, skill: "bootstrap", level: "intermediate", type: "mcq",
    question: "What is Bootstrap's default font size?",
    options: ["16px", "14px", "12px", "18px"],
    answer: "16px", explanation: "Bootstrap's base font-size is 16px."
  },
  {
    id: 782, skill: "bootstrap", level: "intermediate", type: "mcq",
    question: "Which class creates text emphasis?",
    options: ["text-muted", "text-muted/white", "text-primary", "All of above"],
    answer: "All of above", explanation: "Multiple text utility classes available."
  },
  {
    id: 783, skill: "bootstrap", level: "intermediate", type: "truefalse",
    question: "Bootstrap has a grid offset system.", options: ["True", "False"], answer: "True",
    explanation: "offset-X classes offset columns."
  },
  {
    id: 784, skill: "bootstrap", level: "intermediate", type: "mcq",
    question: "What is 'row-cols' for?",
    options: ["Set columns per row", "Row styling", "Column count", "Grid layout"],
    answer: "Set columns per row", explanation: "row-cols-X sets number of columns."
  },
  {
    id: 785, skill: "bootstrap", level: "intermediate", type: "mcq",
    question: "Which class aligns content vertically?",
    options: ["align-content-center", "vertical-align", "align-v", "v-align"],
    answer: "align-content-center", explanation: "Aligns flex container's content."
  },
  {
    id: 786, skill: "bootstrap", level: "intermediate", type: "truefalse",
    question: "Bootstrap buttons have multiple sizes.", options: ["True", "False"], answer: "True",
    explanation: "btn-sm, btn-lg sizes available."
  },
  {
    id: 787, skill: "bootstrap", level: "intermediate", type: "mcq",
    question: "What does 'btn-outline-primary' do?",
    options: ["Creates outline button", "Colored button", "Bordered style", "All"],
    answer: "All", explanation: "Outline buttons have colored border."
  },
  {
    id: 788, skill: "bootstrap", level: "intermediate", type: "mcq",
    question: "Which class disables a button?",
    options: ["disabled", "disable", "btn-disabled", "inactive"],
    answer: "disabled", explanation: "disabled class/attribute disables buttons."
  },
  {
    id: 789, skill: "bootstrap", level: "intermediate", type: "truefalse",
    question: "Bootstrap has input group components.", options: ["True", "False"], answer: "True",
    explanation: "input-group combines inputs with addons."
  },
  {
    id: 790, skill: "bootstrap", level: "intermediate", type: "mcq",
    question: "What is 'input-group-text' for?",
    options: ["Text addon in input", "Text styling", "Label element", "Placeholder"],
    answer: "Text addon in input", explanation: "Attaches text to input group."
  },
  {
    id: 791, skill: "bootstrap", level: "intermediate", type: "mcq",
    question: "Which Bootstrap component shows help text?",
    options: ["form-text", "help-text", "hint", "form-hint"],
    answer: "form-text", explanation: "form-text displays help text below input."
  },
  {
    id: 792, skill: "bootstrap", level: "intermediate", type: "truefalse",
    question: "Bootstrap has switch components.", options: ["True", "False"], answer: "True",
    explanation: "form-switch creates toggle switches."
  },
  {
    id: 793, skill: "bootstrap", level: "intermediate", type: "mcq",
    question: "What is 'custom-control' in Bootstrap?",
    options: ["Custom form control styling", "JavaScript control", "HTML control", "CSS control"],
    answer: "Custom form control styling", explanation: "Styles custom checkboxes/radios."
  },
  {
    id: 794, skill: "bootstrap", level: "advanced", type: "mcq",
    question: "Which class creates column gaps?",
    options: ["g-X", "gap-X", "gutter-X", "space-X"],
    answer: "g-X", explanation: "g-X sets gutter size."
  },
  {
    id: 795, skill: "bootstrap", level: "advanced", type: "mcq",
    question: "How do you use Bootstrap with React?",
    options: ["react-bootstrap library", "Import CSS", "Use CDN", "Install react-bootstrap"],
    answer: "react-bootstrap library", explanation: "react-bootstrap provides React components."
  },
  {
    id: 796, skill: "bootstrap", level: "advanced", type: "truefalse",
    question: "Bootstrap supports Web Components.", options: ["True", "False"], answer: "False",
    explanation: "Bootstrap uses traditional HTML/CSS/JS."
  },
  {
    id: 797, skill: "bootstrap", level: "advanced", type: "mcq",
    question: "What is 'text-truncate' for?",
    options: ["Truncate long text", "Text overflow", "Ellipsis", "All of above"],
    answer: "All of above", explanation: "Truncates text with ellipsis."
  },
  {
    id: 798, skill: "bootstrap", level: "advanced", type: "mcq",
    question: "Which class centers block elements?",
    options: ["m-auto", "mx-auto", "margin-center", "center"],
    answer: "mx-auto", explanation: "mx-auto centers block elements horizontally."
  },
  {
    id: 799, skill: "bootstrap", level: "advanced", type: "truefalse",
    question: "Bootstrap classes can be combined.", options: ["True", "False"], answer: "True",
    explanation: "Multiple Bootstrap classes combine effectively."
  },
  {
    id: 800, skill: "bootstrap", level: "advanced", type: "mcq",
    question: "What is 'flex-fill' for?",
    options: ["Fill available space equally", "Complete fill", "Max width", "100% width"],
    answer: "Fill available space equally", explanation: "flex-fill makes items equal width."
  },
  {
    id: 801, skill: "bootstrap", level: "advanced", type: "mcq",
    question: "Which property stretches flex items?",
    options: ["flex-grow", "flex-stretch", "grow", "expand"],
    answer: "flex-grow", explanation: "flex-grow stretches items to fill space."
  },
  {
    id: 802, skill: "bootstrap", level: "advanced", type: "truefalse",
    question: "Bootstrap has range input component.", options: ["True", "False"], answer: "True",
    explanation: "form-range styles input[type=range]."
  },
  {
    id: 803, skill: "bootstrap", level: "advanced", type: "mcq",
    question: "What is Bootstrap's color naming convention?",
    options: ["primary, secondary, success, danger, warning, info, light, dark", "color-X", "shade-X", "status-X"],
    answer: "primary, secondary, success, danger, warning, info, light, dark", explanation: "Bootstrap uses semantic color names."
  },
  {
    id: 804, skill: "bootstrap", level: "advanced", type: "mcq",
    question: "Which utility sets background color?",
    options: ["bg-primary", "background-primary", "color-bg", "bg"],
    answer: "bg-primary", explanation: "bg-X sets background color."
  },
  {
    id: 805, skill: "bootstrap", level: "advanced", type: "mcq",
    question: "What does 'text-opacity' do?",
    options: ["Sets text transparency", "Opacity level", "Text visibility", "Alpha value"],
    answer: "Sets text transparency", explanation: "text-opacity-X adjusts text transparency."
  },
  {
    id: 806, skill: "bootstrap", level: "advanced", type: "truefalse",
    question: "Bootstrap has 'sticky' positioning class.", options: ["True", "False"], answer: "True",
    explanation: "sticky-top creates sticky elements."
  },
  {
    id: 807, skill: "bootstrap", level: "advanced", type: "mcq",
    question: "Which class creates float utilities?",
    options: ["float-start, float-end", "float-left", "pull-left", "inline-float"],
    answer: "float-start, float-end", explanation: "Bootstrap 5 uses start/end for RTL support."
  },
  {
    id: 808, skill: "bootstrap", level: "advanced", type: "mcq",
    question: "What is 'clearfix' for?",
    options: ["Clears float elements", "Resets floats", "Float clearing", "Layout fix"],
    answer: "Clears float elements", explanation: "clearfix contains floated content."
  },
  {
    id: 809, skill: "bootstrap", level: "advanced", type: "truefalse",
    question: "Bootstrap has text alignment utilities.", options: ["True", "False"], answer: "True",
    explanation: "text-start, text-center, text-end classes."
  },
  {
    id: 810, skill: "bootstrap", level: "advanced", type: "mcq",
    question: "Which utility controls overflow?",
    options: ["overflow-auto", "overflow-hidden", "overflow-X", "All of above"],
    answer: "All of above", explanation: "Bootstrap provides overflow utilities."
  },
  {
    id: 811, skill: "bootstrap", level: "advanced", type: "mcq",
    question: "What is 'visually-hidden' for?",
    options: ["Hidden from view but accessible", "Display: none", "Invisible", "Hidden"],
    answer: "Hidden from view but accessible", explanation: "Hides visually but keeps accessible."
  },
  {
    id: 812, skill: "bootstrap", level: "advanced", type: "truefalse",
    question: "Bootstrap supports print styles.", options: ["True", "False"], answer: "True",
    explanation: "print-X classes optimize for printing."
  },
  {
    id: 813, skill: "bootstrap", level: "advanced", type: "mcq",
    question: "Which class creates focus states?",
    options: [":focus-visible pseudo-class", "focus class", "active-focus", "highlight-focus"],
    answer: ":focus-visible pseudo-class", explanation: "Built-in CSS support for focus states."
  },
  {
    id: 814, skill: "bootstrap", level: "advanced", type: "mcq",
    question: "What is Bootstrap's color system based on?",
    options: ["Sass maps", "CSS variables", "Predefined colors", "Both A and B"],
    answer: "Both A and B", explanation: "Uses both Sass and CSS variables."
  },
  {
    id: 815, skill: "bootstrap", level: "advanced", type: "truefalse",
    question: "Bootstrap components are customizable.", options: ["True", "False"], answer: "True",
    explanation: "Extensive customization options available."
  },
  {
    id: 816, skill: "bootstrap", level: "advanced", type: "mcq",
    question: "Which class creates dropdown menus?",
    options: ["dropdown", "menu", "nav-dropdown", "select-menu"],
    answer: "dropdown", explanation: "dropdown class creates Bootstrap dropdowns."
  },
  {
    id: 817, skill: "bootstrap", level: "advanced", type: "mcq",
    question: "What is 'nav-link' for?",
    options: ["Style navigation links", "Create links", "Link styling", "Navigation styling"],
    answer: "Style navigation links", explanation: "nav-link styles links in navbars."
  },
  {
    id: 818, skill: "bootstrap", level: "advanced", type: "mcq",
    question: "Which Bootstrap component creates breadcrumbs?",
    options: ["breadcrumb", "path", "navigation", "location"],
    answer: "breadcrumb", explanation: "breadcrumb shows navigation hierarchy."
  },

  // ================== BOOTSTRAP BEGINNER QUESTIONS (30) ==================
  {
    id: 819, skill: "bootstrap", level: "beginner", type: "mcq",
    question: "What is Bootstrap's primary purpose?",
    options: ["CSS framework for styling", "JavaScript library", "Both", "Template engine"],
    answer: "Both", explanation: "Bootstrap provides CSS components and JavaScript plugins."
  },
  {
    id: 820, skill: "bootstrap", level: "beginner", type: "mcq",
    question: "How many columns does Bootstrap grid have?",
    options: ["12", "16", "10", "24"], answer: "12",
    explanation: "Bootstrap uses a 12-column responsive grid system."
  },
  {
    id: 821, skill: "bootstrap", level: "beginner", type: "truefalse",
    question: "Bootstrap requires jQuery in version 5.", options: ["True", "False"], answer: "False",
    explanation: "Bootstrap 5 removed jQuery dependency."
  },
  {
    id: 822, skill: "bootstrap", level: "beginner", type: "mcq",
    question: "Which class wraps responsive content?",
    options: ["container", "row", "col", "wrapper"],
    answer: "container", explanation: "container provides responsive fixed-width wrapper."
  },
  {
    id: 823, skill: "bootstrap", level: "beginner", type: "mcq",
    question: "What does the 'row' class do?",
    options: ["Creates horizontal group of columns", "Makes rows", "Creates table rows", "Horizontal line"],
    answer: "Creates horizontal group of columns", explanation: "row class groups columns horizontally."
  },
  {
    id: 824, skill: "bootstrap", level: "beginner", type: "mcq",
    question: "Which class creates Bootstrap columns?",
    options: ["col", "column", "grid-col", "flex-col"],
    answer: "col", explanation: "col class defines responsive columns."
  },
  {
    id: 825, skill: "bootstrap", level: "beginner", type: "truefalse",
    question: "Bootstrap buttons have default styling.", options: ["True", "False"], answer: "True",
    explanation: "btn class provides default button styles."
  },
  {
    id: 826, skill: "bootstrap", level: "beginner", type: "mcq",
    question: "What is the 'btn' class for?",
    options: ["Creates styled buttons", "Button group", "Button container", "Button text"],
    answer: "Creates styled buttons", explanation: "btn class styles button elements."
  },
  {
    id: 827, skill: "bootstrap", level: "beginner", type: "mcq",
    question: "Which class creates a navigation bar?",
    options: ["navbar", "nav", "navigation", "header"],
    answer: "navbar", explanation: "navbar creates Bootstrap navigation component."
  },
  {
    id: 828, skill: "bootstrap", level: "beginner", type: "truefalse",
    question: "Bootstrap is mobile-first.", options: ["True", "False"], answer: "True",
    explanation: "Bootstrap design approach prioritizes mobile devices."
  },
  {
    id: 829, skill: "bootstrap", level: "beginner", type: "mcq",
    question: "Which breakpoint is for large screens?",
    options: ["lg", "md", "xl", "sm"], answer: "lg",
    explanation: "lg breakpoint targets large screens (≥992px)."
  },
  {
    id: 830, skill: "bootstrap", level: "beginner", type: "mcq",
    question: "What does 'alert' component do?",
    options: ["Displays highlighted messages", "Shows alerts only", "Error messages", "Warnings only"],
    answer: "Displays highlighted messages", explanation: "alert shows various message types."
  },
  {
    id: 831, skill: "bootstrap", level: "beginner", type: "mcq",
    question: "Which class creates a card component?",
    options: ["card", "box", "box-component", "container-card"],
    answer: "card", explanation: "card creates flexible content container."
  },
  {
    id: 832, skill: "bootstrap", level: "beginner", type: "truefalse",
    question: "Bootstrap has form components.", options: ["True", "False"], answer: "True",
    explanation: "Bootstrap provides styled form elements."
  },
  {
    id: 833, skill: "bootstrap", level: "beginner", type: "mcq",
    question: "What is 'form-control' for?",
    options: ["Styles input elements", "Validates forms", "Controls layout", "Form styling"],
    answer: "Styles input elements", explanation: "form-control styles input/textarea."
  },
  {
    id: 834, skill: "bootstrap", level: "beginner", type: "mcq",
    question: "Which class creates a list group?",
    options: ["list-group", "group-list", "list", "ul-group"],
    answer: "list-group", explanation: "list-group creates Bootstrap-styled lists."
  },
  {
    id: 835, skill: "bootstrap", level: "beginner", type: "truefalse",
    question: "Bootstrap requires HTML5 doctype.", options: ["True", "False"], answer: "True",
    explanation: "Bootstrap requires <!DOCTYPE html> declaration."
  },
  {
    id: 836, skill: "bootstrap", level: "beginner", type: "mcq",
    question: "How do you include Bootstrap CSS?",
    options: ["Link tag in head", "Script tag", "Import in JS", "Requires compilation"],
    answer: "Link tag in head", explanation: "<link> tag imports Bootstrap CSS."
  },
  {
    id: 837, skill: "bootstrap", level: "beginner", type: "mcq",
    question: "What is 'padding' utility in Bootstrap?",
    options: ["p-X adds space inside", "Padding outside", "p-0 removes padding", "Both A and C"],
    answer: "Both A and C", explanation: "p-X classes control inner padding."
  },
  {
    id: 838, skill: "bootstrap", level: "beginner", type: "mcq",
    question: "Which class adds margin?",
    options: ["m-X", "margin-X", "space-X", "gap-X"],
    answer: "m-X", explanation: "m-X classes add margins."
  },
  {
    id: 839, skill: "bootstrap", level: "beginner", type: "truefalse",
    question: "Bootstrap has color utility classes.", options: ["True", "False"], answer: "True",
    explanation: "Bootstrap provides color utilities like text-primary, bg-success."
  },
  {
    id: 840, skill: "bootstrap", level: "beginner", type: "mcq",
    question: "What is 'text-center' for?",
    options: ["Centers text horizontally", "Aligns text", "Center class", "All of above"],
    answer: "All of above", explanation: "text-center centers inline content."
  },
  {
    id: 841, skill: "bootstrap", level: "beginner", type: "mcq",
    question: "Which class makes responsive images?",
    options: ["img-fluid", "responsive-img", "image-responsive", "fluid"],
    answer: "img-fluid", explanation: "img-fluid makes images scale with container."
  },
  {
    id: 842, skill: "bootstrap", level: "beginner", type: "truefalse",
    question: "Bootstrap has table styling.", options: ["True", "False"], answer: "True",
    explanation: "table class provides Bootstrap table styles."
  },
  {
    id: 843, skill: "bootstrap", level: "beginner", type: "mcq",
    question: "What is 'table-striped' for?",
    options: ["Alternates row colors", "Striped pattern", "Striped borders", "Color stripes"],
    answer: "Alternates row colors", explanation: "table-striped styles alternating rows."
  },
  {
    id: 844, skill: "bootstrap", level: "beginner", type: "mcq",
    question: "Which class makes elements invisible?",
    options: ["d-none", "hide", "invisible", "display-none"],
    answer: "d-none", explanation: "d-none hides elements with display: none."
  },
  {
    id: 845, skill: "bootstrap", level: "beginner", type: "truefalse",
    question: "Bootstrap has dropdown components.", options: ["True", "False"], answer: "True",
    explanation: "dropdown creates dropdown menus."
  },
  {
    id: 846, skill: "bootstrap", level: "beginner", type: "mcq",
    question: "What is the 'badge' component for?",
    options: ["Small count indicators", "User badges", "Achievement badges", "Notification badges"],
    answer: "Small count indicators", explanation: "badge displays counts/notifications."
  },
  {
    id: 847, skill: "bootstrap", level: "beginner", type: "mcq",
    question: "Which class creates flexbox layout?",
    options: ["d-flex", "flex", "flexible", "flex-layout"],
    answer: "d-flex", explanation: "d-flex enables flexbox display."
  },
  {
    id: 848, skill: "bootstrap", level: "beginner", type: "truefalse",
    question: "Bootstrap can be customized.", options: ["True", "False"], answer: "True",
    explanation: "Bootstrap can be customized via Sass or CSS."
  },

  // ================== ADDITIONAL HTML ADVANCED QUESTIONS (19) ==================
  {
    id: 849, skill: "html", level: "advanced", type: "mcq",
    question: "What is microdata in HTML?",
    options: ["Structured data markup", "Small data", "Data attributes", "Metadata"],
    answer: "Structured data markup", explanation: "Microdata marks up data for search engines."
  },
  {
    id: 850, skill: "html", level: "advanced", type: "truefalse",
    question: "HTML5 supports ARIA attributes.", options: ["True", "False"], answer: "True",
    explanation: "ARIA attributes improve accessibility."
  },
  {
    id: 851, skill: "html", level: "advanced", type: "mcq",
    question: "What does role attribute do?",
    options: ["Defines element's role for accessibility", "CSS role", "Semantic meaning", "HTML role"],
    answer: "Defines element's role for accessibility", explanation: "role attribute describes element purpose."
  },
  {
    id: 852, skill: "html", level: "advanced", type: "mcq",
    question: "Which attribute indicates live region updates?",
    options: ["aria-live", "live", "aria-update", "update"],
    answer: "aria-live", explanation: "aria-live notifies screen readers of updates."
  },
  {
    id: 853, skill: "html", level: "advanced", type: "truefalse",
    question: "HTML5 Geolocation API requires permission.", options: ["True", "False"], answer: "True",
    explanation: "Users must grant permission for geolocation."
  },
  {
    id: 854, skill: "html", level: "advanced", type: "mcq",
    question: "What is the <noscript> tag for?",
    options: ["Content for browsers without JavaScript", "Disable scripts", "Script notes", "Comments"],
    answer: "Content for browsers without JavaScript", explanation: "<noscript> shows when JS is disabled."
  },
  {
    id: 855, skill: "html", level: "advanced", type: "truefalse",
    question: "HTML supports JSON-LD format.", options: ["True", "False"], answer: "True",
    explanation: "JSON-LD can be embedded in <script> tags."
  },
  {
    id: 856, skill: "html", level: "advanced", type: "mcq",
    question: "What is the purpose of rel attribute?",
    options: ["Defines relationship between documents", "Links relationship", "Reference links", "Related links"],
    answer: "Defines relationship between documents", explanation: "rel specifies link relationships."
  },
  {
    id: 857, skill: "html", level: "advanced", type: "mcq",
    question: "Which rel value prefetches resources?",
    options: ["prefetch", "preload", "pre-fetch", "fetch"],
    answer: "prefetch", explanation: "rel='prefetch' hints at resource prefetching."
  },
  {
    id: 858, skill: "html", level: "advanced", type: "truefalse",
    question: "preload improves page performance.", options: ["True", "False"], answer: "True",
    explanation: "Preload starts loading resources early."
  },
  {
    id: 859, skill: "html", level: "advanced", type: "mcq",
    question: "What does async attribute do to scripts?",
    options: ["Downloads in parallel, executes immediately", "Downloads in sequence", "Blocks rendering", "Defers execution"],
    answer: "Downloads in parallel, executes immediately", explanation: "async downloads and runs immediately."
  },
  {
    id: 860, skill: "html", level: "advanced", type: "mcq",
    question: "What does defer attribute do?",
    options: ["Script executes after page loads", "Delays execution", "Defers load", "Async alternative"],
    answer: "Script executes after page loads", explanation: "defer executes after HTML parsing."
  },
  {
    id: 861, skill: "html", level: "advanced", type: "truefalse",
    question: "HTML5 supports Server-Sent Events.", options: ["True", "False"], answer: "True",
    explanation: "EventSource API enables server-sent events."
  },
  {
    id: 862, skill: "html", level: "advanced", type: "mcq",
    question: "What is the <embed> tag for?",
    options: ["Embeds external plugins", "Embed content", "Plugin container", "External resources"],
    answer: "Embeds external plugins", explanation: "<embed> embeds plugins and applications."
  },
  {
    id: 863, skill: "html", level: "advanced", type: "mcq",
    question: "Which tag is more semantic than <div>?",
    options: ["<section>, <article>, <aside>", "<span>", "<div>", "<container>"],
    answer: "<section>, <article>, <aside>", explanation: "Semantic tags describe content meaning."
  },
  {
    id: 864, skill: "html", level: "advanced", type: "truefalse",
    question: "HTML5 supports native video codecs.", options: ["True", "False"], answer: "False",
    explanation: "Different browsers support different codecs."
  },
  {
    id: 865, skill: "html", level: "advanced", type: "mcq",
    question: "What is the <track> tag for?",
    options: ["Text tracks for video/audio", "Tracking", "Video tracking", "Audio tracks"],
    answer: "Text tracks for video/audio", explanation: "<track> adds captions/subtitles."
  },
  {
    id: 866, skill: "html", level: "advanced", type: "truefalse",
    question: "HTML5 File API allows local file access.", options: ["True", "False"], answer: "True",
    explanation: "File API provides read access to local files."
  },
  {
    id: 867, skill: "html", level: "advanced", type: "mcq",
    question: "What does crossorigin attribute do?",
    options: ["Allows cross-origin resource loading", "CORS", "Cross domain", "Resource origin"],
    answer: "Allows cross-origin resource loading", explanation: "crossorigin enables CORS requests."
  },

  // ================== ADDITIONAL CSS ADVANCED QUESTIONS (12) ==================
  {
    id: 868, skill: "css", level: "advanced", type: "mcq",
    question: "What is backdrop-filter for?",
    options: ["Applies effects behind element", "Background filter", "Front filter", "Element filter"],
    answer: "Applies effects behind element", explanation: "backdrop-filter blurs/modifies background."
  },
  {
    id: 869, skill: "css", level: "advanced", type: "truefalse",
    question: "CSS supports logical operators.", options: ["True", "False"], answer: "False",
    explanation: "CSS doesn't have logical operators (use preprocessors)."
  },
  {
    id: 870, skill: "css", level: "advanced", type: "mcq",
    question: "What is @supports rule for?",
    options: ["Check browser CSS support", "Supports query", "Feature detection", "Browser support"],
    answer: "Check browser CSS support", explanation: "@supports tests CSS feature support."
  },
  {
    id: 871, skill: "css", level: "advanced", type: "mcq",
    question: "Which property enables hardware acceleration?",
    options: ["transform", "animation", "transition", "will-change"],
    answer: "transform", explanation: "transform uses GPU acceleration."
  },
  {
    id: 872, skill: "css", level: "advanced", type: "truefalse",
    question: "CSS containment improves performance.", options: ["True", "False"], answer: "True",
    explanation: "Containment reduces browser layout calculations."
  },
  {
    id: 873, skill: "css", level: "advanced", type: "mcq",
    question: "What is text-orientation property?",
    options: ["Rotates text vertically", "Orientation", "Text rotation", "Orientation only"],
    answer: "Rotates text vertically", explanation: "text-orientation controls vertical text."
  },
  {
    id: 874, skill: "css", level: "advanced", type: "mcq",
    question: "Which property enables subgrid?",
    options: ["display: subgrid", "subgrid: enable", "grid-subgrid", "sub-grid"],
    answer: "display: subgrid", explanation: "Subgrid allows nested grids alignment."
  },
  {
    id: 875, skill: "css", level: "advanced", type: "truefalse",
    question: "CSS can access JavaScript variables.", options: ["True", "False"], answer: "False",
    explanation: "CSS and JS are separate (can communicate via custom properties)."
  },
  {
    id: 876, skill: "css", level: "advanced", type: "mcq",
    question: "What does mix-blend-mode do?",
    options: ["Blends element with background", "Blending mode", "Layer blending", "Color blending"],
    answer: "Blends element with background", explanation: "mix-blend-mode controls blending."
  },
  {
    id: 877, skill: "css", level: "advanced", type: "mcq",
    question: "Which selector matches empty elements?",
    options: [":empty", ":blank", ":null", ":nothing"],
    answer: ":empty", explanation: ":empty selects elements with no children."
  },
  {
    id: 878, skill: "css", level: "advanced", type: "truefalse",
    question: "CSS supports 3D transforms natively.", options: ["True", "False"], answer: "True",
    explanation: "transform: translateZ(), rotateX() etc. support 3D."
  },
  {
    id: 879, skill: "css", level: "advanced", type: "mcq",
    question: "What is CSS Paint API for?",
    options: ["Custom painting effects", "Canvas", "Drawing", "Graphics"],
    answer: "Custom painting effects", explanation: "Paint API allows custom rendering."
  },

  // ================== ADDITIONAL CSS BEGINNER QUESTION (1) ==================
  {
    id: 880, skill: "css", level: "beginner", type: "mcq",
    question: "Which property controls text decoration?",
    options: ["text-decoration", "text-style", "decoration", "text-format"],
    answer: "text-decoration", explanation: "text-decoration adds underline, overline, or line-through."
  }
];