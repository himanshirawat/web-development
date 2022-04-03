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

    var homeHtmlUrl =  "snippets/home-snippet.html";
    var allCategoriesUrl =  "http://davids-restaurant.herokuapp.com/categories.json";
    var categoriesTitleHtml =  "snippets/categories-title-snippet.html";
    var categoryHtml =  "snippets/category-snippet.html";

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
    
    //Return substitue of'{{propName}}'
    //with propvalue in given 'string'
    var insertProperty = function(string,propName , propValue){
        var propToReplace = "{{" +propName +"}}";
        string = string.replace(new RegExp(propToReplace, "g"),propValue);
        return string;
    }



    // On page load (before images or CSS)
    document.addEventListener("DOMContentLoaded", function (event) {
  
    // On first load, show home view
    showLoading("#main-content");
    $ajaxUtils.sendGetRequest(homeHtmlUrl,
    function (responseText) {
      document.querySelector("#main-content")
        .innerHTML = responseText;
    },
    false);
    });

   // Load the Menu categories view
    dc.loadMenuCategories =function(){
        showLoading("#main-content");
        $ajaxUtils.sendGetRequest(
           allCategoriesUrl,
           buildAndShowCategoriesHTML
       );
    };

    //Builds HTML for the categories page based on the data from the server
    function buildAndShowCategoriesHTML (categories) {
        //Load title snippet of categories page
        $ajaxUtils.sendGetRequest(
            categoriesTitleHtml,
            function (categoriesTitleHtml) {
                $ajaxUtils.sendGetRequest(
                    categoryHtml,
                    function (categoryHtml){
                        var categoriesViewHtml = buildCategoriesViewHtml(categories,categoriesTitleHtml,categoryHtml);
                        insertHtml("#main-content",categoriesViewHtml);
                    },
                    false
                );
            },false
        );
    }

    //Using categories data and snippets html
    //build caegories view HTML to be inserted into page
    function buildCategoriesViewHtml(categories,categoriesTitleHtml,categoryHtml){
        var finalHtml = categoriesTitleHtml;
        finalHtml += "<section class ='row'>";

        //Loop over categories
        for (var i=0; i<categories.length ;i++) {
            //Insert category values
            var html = categoryHtml;
            var name = "" + categories[i].name;
            var short_name = categories[i].short_name;
            html = insertProperty(html,"name",name);
            html = insertProperty(html,"short_name",short_name);
            finalHtml += html;
        }

        finalHtml += "</section>";
        return finalHtml;
    }

    global.$dc = dc;
  
})(window);