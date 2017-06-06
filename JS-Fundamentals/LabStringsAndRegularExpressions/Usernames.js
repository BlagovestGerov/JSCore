function usernames(arr) {
    let users = arr.map(s => s.split('@'));

    let result = [];

    for (let user of users){

        let [ name, domain] = user;
        let domainTokens = domain.split('.');
        domainTokens = domainTokens.map(e => e[0]);
        let username = name + '.' + domainTokens.join('');

        result.push(username);



    }

    //result.map(([user, domain]) => user + domain.split('.').map(s =>
      //  s[0]).join(''));

    console.log(result.join(', '))
}

usernames(['pesho@gmail.com', 'tod_or@mail.dir.bg']);
