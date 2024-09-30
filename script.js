window.onload = function() {
    document.getElementById("subscribe-form").addEventListener("submit", getEmail);
}
function getEmail(event) {
    event.preventDefault();
    let value = document.getElementById("email-text-input").value;
    alert("Subscriber \"added\": " + value);
}