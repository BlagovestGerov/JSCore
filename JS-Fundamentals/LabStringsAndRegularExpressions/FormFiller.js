function formFiller(username, email, phone, data) {

    function repl(match, p1) {

        switch (p1) {
            case '!':
                return username;
            case '@':
                return email;
            case '+':
                return phone;
        }

    }
        data.forEach(line => {
            line = line.replace(/<([!@+])[a-zA-Z]+([!@+])>/g, repl);
            console.log(line);

    });
}

formFiller('Pesho',
    'pesho@softuni.bg',
    '90-60-90',
    ['Hello, <!username!>!',
        'Welcome to your Personal profile.',
        'Here you can modify your profile freely.',
        'Your current username is: <!fdsfs!>. Would you like to change that? (Y/N)',
        'Your current email is: <@DasEmail@>. Would you like to change that? (Y/N)',
        'Your current phone number is: <+number+>. Would you like to change that? (Y/N)']);
