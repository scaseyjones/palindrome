// Reverses a string.
function reverse(string) {

    return Array.from(string).reverse().join("");
}

// Defines a Phrase object.
function Phrase(content) {
    this.content = content;

    this.processor = function(string) {
        return string.toLowerCase();
    }
    
    // Returns content processed for palindrome testing.
    this.processedContent = function processedContent() {
        return this.processor(this.content);
    }

    // Returns true if the phrase is a palindrome, false otherwise.
    this.palindrome = function palindrome() {
        return this.processedContent() === reverse(this.processedContent());
    }
}

function TranslatedPhrase(content, translation) {
    this.content = content;
    this.translation = translation;

    // Returns translation processed for palindrome testing.
    this.processedContent = function processedContent() {
        return this.processor(this.translation);
    }
}

TranslatedPhrase.prototype = new Phrase();

