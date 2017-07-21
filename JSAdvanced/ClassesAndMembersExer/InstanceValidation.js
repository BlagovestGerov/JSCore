/*Write a class for a checking account that validates it’s created with valid parameters. A CheckingAccount has a

 clientId, email, firstName, lastName all set trough the constructor and an array of products that is initially

 empty. Each parameter must meet specific requirements:

  clientId – must be a string representing a 6-digit number; if invalid, throw a TypeError with the

 message &quot;Client ID must be a 6-digit number&quot;

  email – must contain at least one alphanumeric character, followed by the @ symbol, followed by one or

 more letters or periods; all letters must be Latin; if invalid, throw a TypeError with message &quot;Invalid e-

 mail&quot;

  firstName, lastName – must be at least 3 and at most 20 characters long, containing only Latin letters; if

 the length is invalid, throw a TypeError with message &quot;{First/Last} name must be between 3 and 20

 characters long&quot;; if invalid characters are used, throw a TypeError with message &quot;{First/Last} name must

 contain only Latin characters&quot; (replace First/Last with the relevant word);

 All checks must happen in the order in which they are listed – if more than one parameter is invalid, throw an error

 for the first encountered. Note that error messages must be exact.

 Submit your solution containing a single class definition.

 Examples

 Sample Input

 let acc = new CheckingAccount(&#39;1314&#39;, &#39;ivan@some.com&#39;, &#39;Ivan&#39;, &#39;Petrov&#39;)

 Output

 © Software University Foundation (softuni.org). This work is licensed under the CC-BY- NC-SA license.

 Follow us: Page 6 of 11

 TypeError: Client ID must be a 6-digit number

 Sample Input

 let acc = new CheckingAccount(&#39;131455&#39;, &#39;ivan@&#39;, &#39;Ivan&#39;, &#39;Petrov&#39;)

 Output

 TypeError: Invalid e-mail

 Sample Input

 let acc = new CheckingAccount(&#39;131455&#39;, &#39;ivan@some.com&#39;, &#39;I&#39;, &#39;Petrov&#39;)

 Output

 TypeError: First name must be between 3 and 20 characters long

 Sample Input

 let acc = new CheckingAccount(&#39;131455&#39;, &#39;ivan@some.com&#39;, &#39;Ivan&#39;, &#39;P3trov&#39;)

 Output

 TypeError: &quot;First name must contain only Latin characters*/

class CheckingAccount{

    constructor(clientId, email, firstName, lastName){
        this.clientId = clientId;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
        this.product = [];
    }

    set  clientId(value){
        let pattern = /^\d{6}$/g;
        if(!pattern.test(value)){
            throw new TypeError("Client ID must be a 6-digit number");
        }

        this._clientId = value;
    }

    get clientId(){
        return this._clientId;
    }

    set email(value){
        let pattern = /^[a-zA-Z0-9]+@[a-zA-Z\.]+$/g;
        if(!pattern.test(value)){
            throw new TypeError("Invalid e-mail");
        }
        this._email = value;
    }

    get email(){
        return this._email;
    }

    set firstName(value){
        let pattern = /^[a-zA-Z]+$/g;
        if(value.length < 3 || value.length > 20){
            throw new TypeError("First name must be between 3 and 20 characters long");
        }else if (!pattern.test(value)){
            throw new TypeError("First name must contain only Latin characters");
        }

        this._firstName = value;
    }

    get firstName() {
        return this._firstName;
    }

        set lastName(value){
            let pattern = /^[a-zA-Z]+$/g;
            if(value.length < 3 || value.length > 20){
                throw new TypeError("Last name must be between 3 and 20 characters long");
            }else if (!pattern.test(value)){
                throw new TypeError("Last name must contain only Latin characters");
            }

            this._lastName = value;
        }

        get lastName(){
            return this._lastName;
        }
}

try{
    let acc = new CheckingAccount('135453', 'ivan@some.com', 'Iv99', 'Pe');
    console.log(acc);
}catch (err){
    console.log(err.message);
}