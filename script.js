// Used to set the current date and time
var now = moment().format('LLLL');
$("#currentDay").text("Today is: " + now);

// Used to reset calendar to reuse the next day
$("#resetday").click(function() {
    localStorage.clear();
    $(".resetbox").val("");
});

// An array that lists the times
var dateTimesArray = ["9 AM", "10 AM", "11 AM", "12 AM", "1 PM", "2 PM", "3 PM", "4 PM", "5 PM"];

// Uses the array to set a wrapper that includes what time it is, an textarea to input text, and a button to save the text
$.each(dateTimesArray, function(index, value){

    var ourTextValue = localStorage.getItem("Input " + index + ":");

    $('.container').append("<div class='row justify-content-sm-center text-center wrapper' id='row'><div class='col-1' id='time'>" + value + "</div><textarea class='col-6 resetbox' id='textinput" + index + "' rows='3' cols='50' value='Text Here'>" + ourTextValue + "</textarea><button type='button' class='btn btn-dark col-1' style='width: 24.333333%' id='textbtn" + index + "'>Save</button>"); 

    // Used to store what you typed
    $("#textbtn" + index).click(function() {
        var input = $("#textinput" + index).val();
        localStorage.setItem("Input " + index + ":", input);
    })
});