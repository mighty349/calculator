$(document).ready(function() {
    var inputElement = $("input");

    // Function to handle button clicks
    $(".btn button").on("click", function() {
        var buttonValue = $(this).text();
        var currentValue = $("input").val();

        // Clear button
        if (buttonValue === 'AC') {
            inputElement.val('');
        }
        // Delete button
        else if (buttonValue === 'DE') {
            inputElement.val(currentValue.slice(0, -1));
        }
        // Equals button
        else if (buttonValue === '=') {
            try {
                inputElement.val(eval(currentValue));
            } catch (error) {
                inputElement.val('Error');
            }
        }
        // Other buttons
        else {
            inputElement.val(currentValue + buttonValue);
        }
    });
});
