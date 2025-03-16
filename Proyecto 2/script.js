document.addEventListener('DOMContentLoaded', function () {
    const registroBtn = document.getElementById('registroBoton');
    const loginBtn = document.getElementById('loginBoton');
    const col1Fil1 = document.getElementById('Col1Fil1');
    const col2Fil1 = document.getElementById('Col2Fil1');
    const col1Fil2 = document.getElementById('Col1Fil2');
    const col2Fil2 = document.getElementById('Col2Fil2');

    registroBtn.addEventListener('click', function () {
        col1Fil1.style.display = 'table-cell';
        col2Fil1.style.display = 'table-cell';
        col1Fil2.style.display = 'none';
        col2Fil2.style.display = 'none';
    });

    loginBtn.addEventListener('click', function () {
        col1Fil1.style.display = 'none';
        col2Fil1.style.display = 'none';
        col1Fil2.style.display = 'table-cell';
        col2Fil2.style.display = 'table-cell';
    });
});

//  ESTA PARTE SOLO PARA EXPERIMENTAR.... Captura datos, comprobar datos desde lado de usuario, y conectarlo con base de datos

//  'click': Cuando se hace clic en un elemento.
//  'submit': Cuando se envía un formulario.
//  'keydown': Cuando se presiona una tecla.
//  'DOMContentLoaded': Cuando el documento HTML ha sido completamente

document.getElementById('registroForm').addEventListener('submit', function (event) {
    event.preventDefault(); // PARA VALIDAR DATOS DESDE LADO DEL CLIENTE IMPORTANTE
    const nombre = document.getElementById('nombreRegistro').value;
    const email = document.getElementById('emailRegistro').value;
    const password = document.getElementById('passwordRegistro').value;

    // VALIDACION EXPRECIONES
    const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i; // "i" SIRVE PARA IGNORAR MAYU/MINUSC
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]).{8,}$/;
    // AL MENONS UNA MAYUSCULA, UNA MINUSCULA, UN DIGITO, AL MENOS UN CARACTER Y LONGITUD MINIMA 8

    if (!emailRegex.test(email)) {
        alert('Por favor, ingrese un correo electrónico válido.');
        return;
    }

    if (!passwordRegex.test(password)) {
        alert('La contraseña debe tener al menos 8 caracteres, una mayúscula, un número y un carácter especial.');
        return;
    }
    // Aqui falta parte aun por desarollar de fetch, json y catch
});

document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault(); // PARA VALIDAR DATOS DESDE LADO DEL CLIENTE IMPORTANTE
    const email = document.getElementById('emailLogin').value;
    const password = document.getElementById('passwordLogin').value;
    const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i; // "i" SIRVE PARA IGNORAR MAYU/MINUSC

    // VALIDACION EXPRECIONES
    if (!emailRegex.test(email)) {
        alert('Por favor, ingrese un correo electrónico válido.');
        return;
    }

    // Aqui falta parte aun por desarollar de fetch, json y catch
});