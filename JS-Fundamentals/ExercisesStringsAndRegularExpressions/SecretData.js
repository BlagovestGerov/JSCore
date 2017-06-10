function solve(array) {
    let text = array.join('\n');

    let nameRegex = /(\*[A-Z][a-zA-Z]*)(?=\s|$)/g;
    let phoneRegex = /(\+[\d-]{10})(?=\s|$)/g;
    let baseRegex = /([\_\!][A-Za-z0-9]+)(?=\s|$)/g;

    text = text.replace(nameRegex,replacer);
    text = text.replace(phoneRegex, replacer);
    text = text.replace(baseRegex, replacer);
    return text;

    function replacer(match, gr1) {
        return "|".repeat(gr1.length);
    }
 }

