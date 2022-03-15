$(function(){ // Same as Document.addEventListener("DOMContentLoaded")

    //Same as document.querySelector("#navbarToggel").addEventListener("blur")
    $("#navbarToggle").blur(function (event) {
        var screenWidth = window.innerWidth;
        if(screenWidth < 962){
            $("#collapsable-nav").collapse('hide');
        }
    });
    
    $("#navbarToggle").click(function (event) {
        $(event.target).focus();
    });
});


(function (global){
    var dc = {};

    var homeHtml =  "..snippets/home-snippet.html";

    //Convinience function for inserting innerHTML for 'select'
    var insertHtml = function (selector,html) {
        var targetElem = document.querySelector(selector);
        targetElem.innerHTML = html;
    };
    // Show loading icon inside element identified by 'selector'.
    var showLoading = function (selector) {
        <div class="text-center">
            <div class="spinner-border" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>
        insertHtml(selector,html);
    };
  
    // On page load (before images or CSS)
    document.addEventListener("DOMContentLoaded", function (event) {
  
    // On first load, show home view
    showLoading("#main-content");
    $ajaxUtils.sendGetRequest(homeHtml,
    function (responseText) {
      document.querySelector("#main-content")
        .innerHTML = responseText;
    },
    false);
    });
  
  
    global.$dc = dc;
  
})(window);