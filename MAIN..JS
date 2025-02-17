$(document) .ready(function(){
$("#btn").click(function () {

$("#heading").text("KAKOOZA PETER");

  });

$("#change").click(function () {
    $("#district").text("MITYANA");

});


$("#add").click(function () {

    let new_villages =$("<li>").text("KAKINDU");
    $("#names").append(new_villages);


});



});
