$(document).ready(function () {
    "use strict";

    $(".filter-industries").click(function() {
        $("#filter-industries").toggleClass("active");
    });

    $(".filter-ps").click(function() {
        $("#filter-ps").toggleClass("active");
    });

    $(".filter-projects").click(function() {
        $("#filter-projects").toggleClass("active");
    });


});