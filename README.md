# constructor-testing
Test the speed of common JS constructors and instances

I needed to construct and act on tens of thousands of objects in a project so I wanted to check the current JS performance of different constructors and their instances. The results are pretty consistent.

I tested 
1. Classes transpiled by Babel into constructor functions
2. Objects using `Object.create()`
3. Basic constructor function using a closure
4. Traditional constructor function adding properties and methods directly onto the prototype
