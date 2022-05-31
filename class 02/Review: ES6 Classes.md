# Review: ES6 Classes
>- lasses are a template for creating objects. They encapsulate data with code to work on that data. Classes in JS are built on prototypes but also have some syntax and semantics that are not shared with ES5 class-like semantics that make life easier and its easy to controll them with many features.

>- some of features is in JavaScript, we can have class declarations and class expressions, because they are just functions.

## exampples on classes

> ```
    // unnamed

    let Rectangle = class {

    constructor(height, width) {

    this.height = height;

    this.width = width;
    }
    };
    console.log(Rectangle.name);

    // output: "Rectangle"

    // named

    let Rectangle = class Rectangle5 {

    constructor(height, width) {

    this.height = height;
    this.width = width;
    }
    };
    console.log(Rectangle.name);
    // output: "Rectangle2"
```