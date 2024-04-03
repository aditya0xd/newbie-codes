function PasswordGenerator(Length, includeLowercase, includeUppercase, includeNumber, includeSymbol){
    
    let allowedchars = "";
    let Password = ``;
    let Lowercase = "abcdefghijklmnopqrstuvwxyz";
    let Uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let Symbol = "!@#$%^&*()_+";
    let Number = "0123456789";

    allowedchars += includeLowercase ? Lowercase: "";
    allowedchars += includeUppercase ? Uppercase: "";
    allowedchars += includeNumber ? Number: "";
    allowedchars += includeSymbol ? Symbol: "";

    if(Length<=0){
        return `(The length of the password is atlease 1)`;

    }
    if(allowedchars.length === 0){
        return `(atlease 1 set of charactors needs to be selected {uppercase, lowercase, number , symbols})`;
    }

    for(let i = 0; i<Length; i++ ){
        let RandomNUmber = Math.floor(Math.random() * allowedchars.length);
        Password += allowedchars[RandomNUmber];
    }


    return Password;

}

const passwordLength = 12;
const includeLowercase = true;
const includeUppercase = false;
const includeNumber = false;
const includeSymbol = true;

let password = PasswordGenerator(passwordLength, 
                 includeLowercase,
                 includeUppercase,
                 includeNumber, 
                 includeSymbol);
console.log(`Generated Password: ${password}`);
