function domSearch(selector, isCaseSensitive) {
    $(selector).append($('<div>').addClass('add-controls').append($('<label>')
        .text("Enter text: ").append($('<input>')))
        .append($('<a>').addClass('button').text('Add').on('click', addItem)));

    $(selector).append($('<div>').addClass('search-controls').append($('<label>')
        .text("Search:").append($('<input>').on('input', search))));

    $(selector).append($('<div>').addClass('result-controls')
        .append($('<ul>').addClass('item-list')));

    function additem() {
        let text = $('.add-controls label input').val();
        $('.item-list').append($('<li>').addClass('list-item')
            .append($('<a>').addClass('button')
                .text('X').on('click', deleteItem))
            .append($('<strong>').text(text)));
        $('.add-controls label input').val("");
    }

    function deleteItem() {
        $(this).parent().remove();
    }

    function search() {
        let text = $(this).val();

        $('.list-item').each((index, li) => matches(li, text));
    }

}