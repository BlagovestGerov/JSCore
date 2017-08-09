$(() => {
    //App constants
    const baseUrl = 'https://baas.kinvey.com/';
    const appKey ='kid_HJDS6SwwW';
    const appSecret = '7806aad2e8844bcb86c70ab1fe09e899';

    $('#linkHome').click(() => showView('home'));
    $('#linkLogin').click(() => showView('login'));
    $('#linkRegister').click(() => showView('register'));
    $('#linkListBooks').click(() => showView('books'));
    $('#linkCreateBook').click(() => showView('create'));
    $('#linkLogout').click(logout);



    $('#formLogin').submit(login);
    $('#formRegister').submit(register);

    $(document).on({
        ajaxStart: () => $('#loadingBox').show(),
        ajaxStop: ()=> $('#loadingBox').hide()
    });

    $('#infoBox').click((event)=> event.target.hide());
    $('#errorBox').click((event)=> event.target.hide());

    function showInfo(message) {
        $('#infoBox').text(message);
        $('#infoBox').show();
        setTimeout(()=> $('#infoBox').fadeOut(), 3000);
    }

    function showError(message) {
        $('#errorBox').text(message);
        $('#errorBox').show();
    }
    
    function handleError(reason) {
        showError(reason.responseJSON.description);
    }


    //Navigation and header
    function showView(name) {
        $('section').hide();

        switch (name){
            case 'home': $('#viewHome').show(); break;
            case 'login': $('#viewLogin').show(); break;
            case 'register': $('#viewRegister').show(); break;
            case 'books': $('#viewBooks').show(); break;
            case 'create': $('#viewCreateBook').show(); break;
            case 'logout': $('#').show(); break;
        }
    }

    function request(uri, method, data) {

        let req = {
                url: baseUrl + 'appdata/' + appKey + '/'+ uri,
                method: method,
                headers: {
                    'Authorization': ''
                }
        };
                if(data !== undefined){
                    req.data = JSON.stringify(data);
                }
               return $.ajax(req);
    }

    //User session
           function setGreating() {
               let username = localStorage.getItem('username');
               if(username !== null){
                   // We have logged in user
                   $("#linkLogin").hide();
                   $("#linkRegister").hide();
                   $("#linkListBooks").show();
                   $("#linkCreateBook").show();
                   $("#linkLogout").show();
               } else {
                   // No logged in user
                   $("#linkLogin").show();
                   $("#linkRegister").show();
                   $("#linkListBooks").hide();
                   $("#linkCreateBook").hide();
                   $("#linkLogout").hide();
               }
           }

    function setStorage(data) {
        localStorage.setItem('authtoken', data._kmd.authtoken);
        localStorage.setItem('username', data.username);
        $('#loggedInUser').text(`Welcome, ${data.username}!`);
        setGreating();
        showView('books');
    }

    function login(e) {

        e.preventDefault();
        console.log('Attemting login')
        let username = $('#formLogin input[name=username]').val();
        let password = $('#formLogin  input[name=passwd]').val();

        let req = {
            url: baseUrl + 'user/' + appKey + '/login',
            method: 'POST',
            headers: {
                'Authorization': 'Basic ' + btoa(appKey + ':' + appSecret),
                'Content-Type': 'application/json'
            },
            data: JSON.stringify({
                username: username,
                password: password
            }),
            success: (data)=> {
                showInfo('Login successful');
                setStorage(data);
            },
            error: handleError
        };

        $.ajax(req);
    }

    function register(e) {

        e.preventDefault()
        console.log('Attemting register')
        let username = $('#formRegister input[name=username]').val();
        let password = $('#formRegister  input[name=passwd]').val();
        let repeat = $('#formRegister  input[name=passwdRepeat]').val();

        if(password !== repeat){
            showError("Password don't mutch");
            return
        }

        let req = {
            url: baseUrl + 'user/' + appKey,
            method: 'POST',
            headers: {
                'Authorization': 'Basic ' + btoa(appKey + ':' + appSecret),
                'Content-Type': 'application/json'
            },
            data: JSON.stringify({
                username: username,
                password: password
            }),
            success: (data)=> {
                showInfo('Registration successful');
                setStorage(data);
            },
            error: handleError
        };

        $.ajax(req);
    }
    
    function logout() {
        console.log('Attemting logout');

        let req = {
            url: baseUrl + 'user/' + appKey+'/_logout',
            method: 'POST',
            headers: {
                'Authorization': 'Kinvey ' + localStorage.getItem('authtoken')
            },
            success: logoutSuccess,
            error: handleError
        };

        $.ajax(req);

        function logoutSuccess(data) {
            localStorage.clear();
            setGreating();
            showView('home');
        }
    }
    
    //Catalog
    
    function getBooks() {
        //ToDo
    }

});