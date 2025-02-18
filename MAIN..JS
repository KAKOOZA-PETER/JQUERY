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
$("#add").on('click',function() {
        alert('product added');
        $(this).css('background', 'green');
        $("#products").append("<li>Rice</li>",);
    });
    $("#remove").on('click',function() {
        alert('product removed');
        $(this).css('background', 'red')
        $("#products li:first").remove();
        
    });
    $("#complete").on('click',function() {
        alert('product marked complete');
        $(this).css('background', 'blue');

    });
    $("#complete").click(function () {
        $("complete").text("Marked complete");
    });


});
