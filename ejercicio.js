
// Escribe un programa que pida al usuario una contraseña y la valide.
// El programa debe seguir pidiendo la contraseña hasta que sea correcta.

// la pass debe tener un largo minimo de 8 caracteres, 1 mayuscula y 1 numero
const functionValidatePassword = (password) => {
    // insertar aqui la contraseña
    let userPass = password.trim();

    // validacion de minimo 8 caracteres
    // si la contraseña tiene minimo 8 caracteres guardara la contraseña, por el contrario mostrara una validacion
    (userPass.length < 8) ? userPass = 'la contraseña debe tener minimo 8 caracteres' : userPass;

    // expresion regular que reconoce cualquier mayuscula existente
    const regexMayusculas = /[A-Z]/g;

    // variable inicializada
    let passWithMayus = '';
    // variable que almacena si existe alguna mayuscula en al contraseña
    passWithMayus = userPass.match(regexMayusculas);

    // validacion de poseer minimo 1 mayuscula
    (passWithMayus !== null) ? userPass : userPass = 'la contraseña debe poseer minimo una mayuscula';

    // expresion regular que reconoce si existe un numero en la variable
    const regexNumeros = /\d+/g;
    // variable que almacena si existe algun numero en la contraseña
    const existNumber = userPass.match(regexNumeros);

    // validacion de poseer minimo 1 numero
    (existNumber) ? userPass : userPass = 'la contraseña debe poseer minimo un numero';

    return userPass;
}

// variable que usaremos para escribir la contraseña que se desea evaluar
let insertPassword = '       asdasdqwadwA1      '; 
// asignamos el valor de la funcion a una variable
let cleanPassword = functionValidatePassword(insertPassword);

console.log(cleanPassword);

