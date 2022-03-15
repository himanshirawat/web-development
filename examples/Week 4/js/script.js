////var message="in global";
//console.log("global:message = " + message);

//var a =function(){
    //var message="inside a"
    //console.log("a:message = " +message);
 //   b();}

//function b(){
    //console.log("b:message = "+message);
//}a();


// should be undefined
//var x;
//console.log(x);

//if(x==undefined){
    //console.log("x is undefined");
//}

//x=5;
//if(x==undefined){
    //console.log("x is undefined ")
//}
//else{
    //console.log("x has been defined ")
//}


//Default values
//function orderChickenWith(sideDish){
    //if(sideDish === undefined){
       // sideDish = sideDish || "whatever!";
    //}
    //console.log("Chicken with "+ sideDish);
//}

//orderChickenWith("noodles");
//orderChickenWith();


//object creation
////var company = new Object();
//company.name="Facebook";
//company.ceo = new Object;
//company.ceo.firstname="Mark";
//company.ceo.favColor="blue";

////console.log(company);
////console.log("Company CEO name is: " + company.ceo.firstname);
////console.log(company["name"]);
////var stockPropName ="stock of company";
//company[stockPropName]= 100;

////console.log("Stock price is: " + company[stockPropName]);


//Better way: Object literal

////var Facebook ={
//    name: "Facebook",
//  ceo: {
//      firstname: "mark",
//       favColor:"blue"
//  },
   // "stock of company": 110
//};

//console.log(Facebook.ceo.firstname);


//Functions are First-Class Data
//Functions are objects
// function multiply(x,y){
//     return x * y ;
// }
// console.log(multiply(5,3));
// multiply.version = "v.1.0.0" ;
// console.log(multiply.version);


// //Function factory
// function makeMultiplier(multiplier){
//     var myFunc= function(x){
//         return multiplier * x;
//     };

//     return myFunc;
// }
// var multiplyBy3 = makeMultiplier(3);
// console.log(multiplyBy3(10));
// var doubleAll = makeMultiplier(2);
// console.log(doubleAll(100));

// //Passing funtions as arguments
// function doOperationOn(x, operation){
//     return operation(x);
// }

// var result = doOperationOn(5,multiplyBy3);
// console.log(result);
// var doubleAll = doOperationOn(100, doubleAll);
// console.log(doubleAll);


/* function test(){

    console.log(this);
    this.myName = "Himanshi"
}
test();
console.log(window.myName); */

//Funtion constructors
/* function Circle(radius){
    this.radius = radius;
    //  console.log(this);
    // this.getArea =
    //   function(){
    //       return Math.PI * Math.pow(this.radius,2);
    //   };
}
Circle.prototype.getArea =
 function() {
    return Math.PI * Math.pow(this.radius,2);     
 };

var myCircle = new Circle(10);
console.log(myCircle.getArea());
var myOtherCircle = new Circle(20);
console.log(myOtherCircle); */


//Object literals and "this"

/* var literalCircle ={ //new object
    radius:10,

    getArea: function () {
        var self = this;
        console.log(this);

        var increaseRadius = function () {
           self.radius = 20;
            
        };
        increaseRadius();
        console.log(this.radius);
        return Math.PI * Math.pow(this.radius,2);
    }
};

console.log(literalCircle.getArea());
 */


//Arrays

/* var array = new Array();
array[0]="Himanshi";
array[1]=2;
array[2]=function (name) {
    console.log("hello " + name);
};
array[3] = {course : "HTML,CSS & JS"};
console.log(array);
console.log(array[1]);
array[2](array[0]);
array[2]("Rawat");
console.log(array[3].course); */

//Closures

function makeMultiplier(multiplier){
    function b(){
        console.log("Multiplier is : "+ multiplier);
    }
    b();
    return (
        function (x){
            return multiplier * x;
        }
    );
}

var doubleAll = makeMultiplier(2);
console.log(doubleAll(10));