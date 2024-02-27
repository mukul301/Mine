var messages = document.querySelectorAll('.message');
        var currentIndex = 0;
function growButton() {
    var button = document.getElementById('noButton');
    var currentSize = window.getComputedStyle(button).getPropertyValue('font-size');
    var newSize = parseFloat(currentSize) * 1.8; // Increase the size by 20%

    button.style.fontSize = newSize + 'px';

    messages.forEach(function(message) {
        message.style.display = 'none';
            
})

messages[currentIndex].style.display = 'block';

            // Update currentIndex for the next message
            currentIndex = (currentIndex + 1) % messages.length;
}

function yesClick(){
    window.location.href = "newpage.html";
}