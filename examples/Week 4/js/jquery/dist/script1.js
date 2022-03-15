(function (window){
var himanshiGreeter = {};
himanshiGreeter.name = 'Himanshi';
var greeting = "Hello ";
himanshiGreeter. sayHello = function () {
    console.log(greeting + himanshiGreeter.name);
}
window.himanshiGreeter = himanshiGreeter;

})(window);