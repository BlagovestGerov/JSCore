function emailValidation(email) {

    let regex = new RegExp(/^[a-zA-Z0-9]+@[a-zA-Z]+\.[a-zA-Z]+$/);

    console.log(regex.test(email) ? 'Valid' : 'Invalid');
}
emailValidation("tast@abv.bg");
