let createBook = (function bookGenerator () {

    let id = 1;
    return function (selector, titleName, authorName, isbn) {

        $(selector).append($('<div>').attr('id', 'book' + id)
            .append($('<p>').addClass('title').text(titleName))
            .append($('<p>').addClass('author').text(authorName))
            .append($('<p>').addClass('isbn').text(isbn))
            .append($('<button>').text('Select').on('click', select))
            .append($('<button>').text('Deselect').on('click', deselect)));

        function select() {
            $(this).parent().css('border', '2px solid blue');
        }

        function deselect() {
            $(this).parent().css('border', '');
        }

        id++;
    }

    /**
     let id = 1;
     return function (selector, title, author, isbn) {
        let fragment = document.createDocumentFragment();
        let container = $(selector);

        let bookContainer = $('<div>');
        let titleParagraph = $('<p>');
        let authorParagraph = $('<p>');
        let isbnParagraph = $('<p>');
        let selectBtn = $('<button>Select</button>');
        let deselectBtn = $('<button>Deselect</button>');

        titleParagraph.text(title);
        authorParagraph.text(author);
        isbnParagraph.text(isbn);

        bookContainer.attr('id', 'book' + id);
        id++;

        titleParagraph.addClass('title');
        authorParagraph.attr('class', 'author');
        isbnParagraph.addClass('isbn');

        selectBtn.on('click', function () {
            bookContainer.css('border', '2px solid blue')

        });
        deselectBtn.on('click', function () {
            bookContainer.css('border','none')

        });
        bookContainer
            .append(titleParagraph)
            .append(isbnParagraph)
            .append(authorParagraph)
            .append(selectBtn)
            .append(deselectBtn);

        bookContainer.appendTo(fragment);
        container.append(fragment);
        console.log(typeof bookContainer);**/

}());