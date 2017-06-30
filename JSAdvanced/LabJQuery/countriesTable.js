function initializeTable() {
    // attach event listener to create
    $('#createLink').click(addCountry);
    // seed table -> create table row, append to table
    addRow('Bulgaria', 'Sofia');
    addRow('Germany', 'Berlin');
    addRow('Russia', 'Moscow');
    fixLinks();
    // adjust navigation
    function fixLinks() {
        $('tr a').show();
        $('tr:last-child a:contains(Down)').hide();
        $('tr:eq(2) a:contains(Up)').hide();
    }

    //read input and create the row
    function addCountry() {
        let name = $('#newCountryText').val();
        let capital = $('#newCapitalText').val();
        addRow(name, capital);
    }

    //create table row
    function addRow(name, capital) {
        //console.log(name);
        //console.log(capital);
        $('<tr>')
            .append($(`<td>${name}</td>`))
            .append($(`<td>${capital}</td>`))
            .append($(`<td>`)
                .append($('<a href ="#">[Up]</a>').click(moveUp))
                .append($('<a href ="#">[Down]</a>').click(moveDown))
                .append($('<a href ="#">[Delete]</a>').click(deleteRow)))
            .appendTo('#countriesTable');
        fixLinks();
    }

    //move row up
    function moveUp(event) {
        let currentRow = $(this).parent().parent();
        currentRow.fadeOut();
        currentRow.insertBefore(currentRow.prev());
        fixLinks();
        currentRow.fadeIn();
    }

    //move row down
    function moveDown() {
        let currentRow = $(this).parent().parent();
        currentRow.fadeOut(()=> {
            currentRow.insertAfter(currentRow.next());
            fixLinks();
            currentRow.fadeIn();
        });
    }

    //delete row
    function deleteRow() {
        let currentRow = $(this).parent().parent();
        currentRow.fadeOut(()=> {
            currentRow.remove();
            fixLinks();
        });
    }
}