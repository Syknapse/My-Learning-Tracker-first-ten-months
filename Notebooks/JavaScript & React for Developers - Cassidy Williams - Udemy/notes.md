# JavaScript and React for Developers

## DOM

Getting an element

```js
document.getElementById('id')
document.getElementsByClassName('class')
document.getElementsByTagName('html tag')
document.querySelector('css selector') // only first
document.querySelectorAll('css selector') // all
```

Creating

```js
createElement('element')
createAttribute('attribute')

// Example
let newParagraph = document.createElement('p');
newParagraph.innerText = 'This text will be added to the new paragraph';
document.body.appendChild(newParagraph);

let newAttribute = document.createAttribute('id');
newAttribute.value = 'newID'; // this will create a new id called newID
newParagraph.setAttributeNode(newAttribute); // the new paragraph will now have id='newID'
```

How to implement `getElementsByAttribute`?

```js
function getElementsByAttribute(attribute, value) {
    const allElements = document.getElementsByTagName('*');
    let matches = [];

    for (let i = 0; i < allElements.length; i++) {
        element = allElements[i];
        if (element.getAttribute(attribute) === value) {
            matches.push(element);
        }
    }
    return matches;
}
```

## Events

```js
//  listener🔽 .... event we're🔽 listening for .. 🔽callback function
element.addEventListener("event", function() {
    // do something
});

// Example
document.getElementById('btn').addEventListener("click", function() {
    console.log('Print this when a button has been clicked');
});
```

Custom Event

```js
// Creates a custom event
document.body.addEventListener('customTimeEvent', stateTime);

function stateTime(e) {
    alert(`Event time is: ${e.detail}`);
}

const myCustomEvent = new CustomEvent('customTimeEvent', {
    'detail': new Date()
});

// Fires the event
document.body.dispatchEvent(myCustomEvent)
```

## ES6

### Default Values

```js
function someFunction(x = 10, y = 15) {
    console.log(x + y)
}
// If argument is not provided, defaults are used
someFunction(); // 35
someFunction(0); // 15 (x=0, y=15)
someFunction(2, 4); // 6
```

### Destructuring

```diff
// Object destructuring
- let person = {
-    first: 'Alberto',
-    last: 'Jesus-Maria La Luz',
-    city: 'Albacete',
-    job: 'Doblaje de mierda'
- };
- let first = person.first; // then repeat for all the other keys
- first // 'Alberto'

+ // Destructuring
+ let { first, last, city, job } = person
+ first // 'Alberto'
```

```js
// default values can be used too
let { first = 'Alberto', last, city, job} = person

// Assign different variable names
let { first: firstName, last: familyName, city, job} = person
```

```js
// Array destructuring
let arrayExample = [1, 2, 3]
//destructure
let [a, b, c] = arrayExample
a // 1
b // 2
```

```js
// swapping variable values
[y, z] = [z, y]
```

### Object literals

To initialize an object

```js
let x = 'hello';
let y = 'world';

let z = {
    x,
    y
}

z // {x: "hello", y: "world"}

// also
let z = {
    x() {
        // do things
    },
    y() {
        // do things
    }
}
```

### Template Literals

+ Defined by `Back-ticks`
+ Use interpolations `${foo}`
+ `foo` can be a variable `${fooIsVar}`
+ `foo` can be an expression `${a + b}`
+ `foo` can be a function `${func()}`

### Arrow Functions

```diff
- function add(x, y) {
-     return x + y;
- }

+ var add = (x, y) => x + y;

// also
+ var add = (x, y) => {
+     x + y;
+ };
```

+ Always function expressions
+ Anonymous
+ redefine `this`
