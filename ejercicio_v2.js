

const functionValidatePassword = (password) => {
    // contraseña a la que se le quitan los espacios
    let userPass = password.trim();

    // array con la validaciones
    const validations = [
        'la contraseña debe tener minimo 8 caracteres',
        'la contraseña debe poseer minimo una mayuscula',
        'la contraseña debe poseer minimo un numero'];
    
    // array donde se guardaran las variables del array de arriba
    // puesto que este sera el array que se retornara al final de la funcion y 
    // mostrara las validaciones que aun no se cumplen
    let showValidations = [];

    // validacion si la contraseña es menor a 8 caracteres
    (userPass.length >= 8) ? userPass : showValidations[0] = validations[0];

    // expresion regular si existe un numero
    const regexNumber = /\d+/g;
    // guardamos el numero encontrado en el match en la variable
    let passWithNumber = userPass.match(regexNumber);

    // validacion si la contraseña posee algun numero
    (passWithNumber !== null) ? userPass : showValidations[1] = validations[2];

    // expresion regular si la contraseña posee alguna mayuscula
    const regexMayus = /[A-Z]/g;
    // guardamos la mayuscula encontrada en la variable
    let passWithMayus = userPass.match(regexMayus);

    // validacion si la contraseña posee alguna letra mayuscula
    (passWithMayus !== null) ? userPass : showValidations[2] = validations[1];

    //          0          1
    return [userPass, showValidations];
}

// variable contenedora de la contraseña a evaluar
let evaluatePassword = 'asdasaDA1';
// resultado de la funcion asignado a una vairable
let result = functionValidatePassword(evaluatePassword);

console.log(result[0]);
console.log(result);
console.log(result[1]);



