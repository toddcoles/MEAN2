var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var myStr = 'this is a string';
// myStr = 45;
var number = 456;
// number = 456;
var mystr;
// mystr = 345;
var array = [75, 'string'];
array.push(true);
var numeric = array[0];
var obj = {
    name: 'Jason'
};
obj.name = 'Bob';
obj.age = 34;
var User = (function () {
    function User(name, age) {
        if (age === void 0) { age = 23; }
        this.name = name;
        this.age = age;
    }
    User.prototype.sayHello = function () {
        console.log("Hello " + this.name + ", you are " + this.age + " years old");
    };
    return User;
}());
var Person = (function (_super) {
    __extends(Person, _super);
    function Person(name, age, showSize) {
        return _super.call(this, name, age) || this;
    }
    return Person;
}(User));
var user = new User('Jason');
user.sayHello();
var reg = {
    firstName: 'Bob',
    lastName: 'Bob',
    email: 'bob@bob.com',
    password: 'password'
};
var stringArray = ['1', '2', '3', '4'];
var numArray = [1, 2, 3, 4, 5];
function map(array, callback) {
    var results = [];
    for (var index = 0; index < array.length; index++) {
        results.push(callback(array[index], index));
    }
    return results;
}
var result = map(stringArray, function (element) {
    return parseInt(element, 10);
});
var Things;
(function (Things) {
    Things[Things["thingZero"] = 0] = "thingZero";
    Things[Things["thingOne"] = 1] = "thingOne";
})(Things || (Things = {}));
// Things.
