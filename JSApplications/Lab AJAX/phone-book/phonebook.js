//$(function () {

$('#btnLoad').on('click', loadContacts);
$('#btnCreate').on('click', createContact);

let baseServiceUrl = 'https://phonebookBG.firebaseio.com/phonebook';

function loadContacts() {
    console.log("load!");
    $('#phonebook').empty();
    $.get(baseServiceUrl + '.json').then(displayContacts).catch(displayError);
}

function displayContacts(contacts) {
    for(let key in contacts){
        let person = contacts[key]['person'];
        let phone = contacts[key]['phone'];
        let li = $('<li>');
        li.text(person + ': '+phone + '');
        $('#phonebook').append(li);
        li.append($('<button>Delete</button>').on('click', deleteContact.bind(this, key)));
    }
}

function deleteContact(key) {
    let request = {
        method: 'DELETE',
        url: baseServiceUrl + '/' + key + '.json'
    };
    $.ajax(request).then(loadContacts).catch(displayError);
}

function displayError(err) {
    $('#phonebook').append($('<li>Error</li>'));
}

function createContact() {
    console.log("create!");
    let newContactJson = JSON.stringify({
        person: $('#person').val(),
        phone: $('#phone').val()
    });

    $.post(baseServiceUrl + '.json',newContactJson).then(loadContacts).catch(displayError);

    $('#person').val();
    $('#phone').val();
}

//})
