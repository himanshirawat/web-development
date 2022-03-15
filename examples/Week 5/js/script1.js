//Event handling
document.addEventListener("DOMContentLoaded",
function (event) {

    //Unobstrusive event binding
    document.querySelector("button")
        .addEventListener("click",function () {
        
            // call server to get the name
            $ajaxUtils
                .sendGetRequest("/js/name.json",
                    function (res){
                        //var name = request.responseText;
                        //console.log(self.name)

                        var message = res.firstName + " " + res.lastName
                        if (res.likesChineseFood) {
                            message += " likes Chinese Food";
                        }
                        else{
                            message += " doesn't like Chinese Food"
                        }
                        message += " and uses ";
                        message += res.numberOfDisplays + 1;
                        message += " display for coding." ;

                        document.querySelector("#content")
                            //.innerHTML = "<h2>Hello " + name + "! <h2>";
                            .innerHTML = "<h2>" + message +"</h2>" ;

                    });
        });

}
);