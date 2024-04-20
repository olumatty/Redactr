// Function to handle redaction process
function redactContent() {
    var originalText = document.getElementById("content").value;
    var wordsToRedact = document.getElementById("redactWords").value.split(" ");
    var replacementOption = document.getElementById("replacement").value;
    var redactedText = originalText;

    // Iterate through words to redact
    wordsToRedact.forEach(function(word) {
        // Create regular expression to match word boundaries
        var regex = new RegExp('\\b' + word + '\\b', 'gi');
        
        // Replace matched words with chosen replacement
        redactedText = redactedText.replace(regex, replacementOption);
    });

    // Display redacted text
    document.getElementById("redactedText").innerText = redactedText;

    // Update status
    updateStatus(originalText, redactedText);
}

// Function to reset the form
function resetForm() {
    document.getElementById("My_form").reset();
    document.getElementById("redactedText").innerText = "";
    document.getElementById("stat").innerHTML = "STATUS: WordScanned: 0, Words redacted: 0, Characters redacted: 0, Time taken: 0";
}

// Function to update status
function updateStatus(originalText, redactedText) {
    var wordCount = originalText.split(/\s+/).length;
    var wordsRedacted = (originalText.match(/\b\*\*\*\*\b/g) || []).length;
    var charactersRedacted = redactedText.length - originalText.length;
    var timeTaken = new Date().toLocaleTimeString();

    document.getElementById("wordsScanned").innerText = wordCount;
    document.getElementById("wordsRedacted").innerText = wordsRedacted;
    document.getElementById("charactersRedacted").innerText = charactersRedacted;
    document.getElementById("timeTaken").innerText = timeTaken;
}