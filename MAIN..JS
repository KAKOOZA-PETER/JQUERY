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
   $("#add").click(function() {
        $("#add").text("Added");
        $("#products").append("<li>Rice</li>",);
    });
    $("#remove").click(function() {
        $("#remove").text("Removed");
        $("#products li:first").remove();
        
    });
    $("#complete").click(function() {
        $("#complete").text("Marked complete");
        
    });


});
