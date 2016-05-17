'use strict';

var now = require('performance-now');

/*
 * Babel class constructor boilerplate (just copied verbatim from transpiled Babel code)
 */
var _createClass = function() {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
        }
    }
    return function(Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
    };
}();

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

/*
 * Transpiled Babel class constructor
 */
var SomeClass = function() {
    function SomeClass(name) {
        _classCallCheck(this, SomeClass);

        this.greeting = 'Hello';
        this.name = name;
    }

    _createClass(SomeClass, [{
        key: 'greet',
        value: function greet(newGreeting) {
            var greeting = newGreeting || this.greeting;
            return greeting + ', ' + this.name;
        }
    }]);

    return SomeClass;
}();

/*
 * Basic JavaScript Object creator/initializer
 */
var SomeObj = {
    create: function(name) {
        return Object.create(this).init(name);
    },
    init: function(name) {
        this.name = name;
        return this;
    },
    greeting: 'Hello',
    greet: function(newGreeting) {
        var greeting = newGreeting || this.greeting;
        return greeting + ', ' + this.name;
    }
};

/*
 * Basic JavaScript constructor function using a closure
 */
var GreetFunc = function(name) {

    var greeting = 'Hello';

    this.greet = function(newGreeting) {
        greeting = newGreeting || greeting;
        return greeting + ', ' + name;
    }

};

/*
 * Traditional constructor function with properties and methods added directly to the prototype
 */
var GreetConstructor = function(name) {
    this.name = name;
};
GreetConstructor.prototype.greeting = 'Hello';
GreetConstructor.prototype.greet = function(newGreeting) {
    var greeting = newGreeting || this.greeting;
    return greeting + ', ' + this.name;
};



var i;

var classInstances = [];
var begin1 = now();
for (i = 0; i < 100000; i++) {
    classInstances.push(new SomeClass('Ryan'));
    classInstances[i].greet();
}
var total1 = (now() - begin1);
classInstances = [];

var objInstances = [];
var begin2 = now();
for (i = 0; i < 100000; i++) {
    objInstances.push(SomeObj.create('Ryan'));
    objInstances[i].greet();
}
var total2 = (now() - begin2);
objInstances = [];

var funcInstances = [];
var begin3 = now();
for (i = 0; i < 100000; i++) {
    funcInstances.push(new GreetFunc('Ryan'));
    funcInstances[i].greet();
}
var total3 = (now() - begin3);
funcInstances = [];

var func2Instances = [];
var begin4 = now();
for (i = 0; i < 100000; i++) {
    func2Instances.push(new GreetConstructor('Ryan'));
    func2Instances[i].greet();
}
var total4 = (now() - begin4);
func2Instances = [];

var res = [
    'Classes done in ' + total1.toFixed(3) + 'ms',
    'Objects done in ' + total2.toFixed(3) + 'ms',
    'Functions w/ closure in ' + total3.toFixed(3) + 'ms',
    'Functions w/ prototype in ' + total4.toFixed(3) + 'ms'
];

res
    .forEach(function(str) {
        console.log(str);
    });
