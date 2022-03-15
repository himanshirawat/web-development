//DOM manipulation
// console.log(document.getElementById("title"));
// console.log(document instanceof HTMLDocument);

//Event handling
document.addEventListener("DOMContentLoaded",
function (event){

    function sayHello (event){
        //body..
        console.log(event);
        this.textContent = "Said it !";
        var name =
        document.getElementById("name").value;
        var message = "<h2> Hello " + name +"! </h2>";
    
    //     document
    //     .getElementById("content")
    //     .textContent = message;#
           
        document
        .getElementById("content")
        .innerHTML = message;
    
        if (name ==  "student") {
            var title =
             document.querySelector("#title")
                    .textContent;
            title += "& Loving it !" ;
            document.querySelector("#title")
                    .textContent = title;
        }
    }
    
    //Unobstrusive Event Binding
    document.querySelector("button")
            .addEventListener("click",sayHello);
    //   .onclick = sayHello;

    //event argument
    document.querySelector("body")
      .addEventListener("mousemove",
      function(event){
        //body..
        if (event.shiftKey == true) {
            console.log("x: " + event.clientX);
            console.log("y: " + event.clientY)
    
        }
      }
      );

}
);






