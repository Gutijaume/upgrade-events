// //1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el 
// evento click que ejecute un console log con la información del evento del click

// 1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.

// 1.3 Añade un evento 'input' que ejecute un console.log con el valor del input.




window.onload = () =>{

//1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el evento click que ejecute un console log con la información del evento del click
    let youAreSoBad = (event) =>{
        console.log(event)
    }

    let destroyerBtn = document.querySelector("#btnToClick")
    destroyerBtn.addEventListener("click", youAreSoBad)

// 1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.

let tellSomething = (event) => {
    console.log(event)
}

let inputToTellSomething = document.querySelector(".focus")
    inputToTellSomething.addEventListener("focus", tellSomething)


// 1.3 Añade un evento 'input' que ejecute un console.log con el valor del input.

let tellMeMore = (event) => {
    console.log(event)
}

let inputTotellMeMore = document.querySelector(".value")
    inputTotellMeMore.addEventListener("incput", tellMeMore)



  












}