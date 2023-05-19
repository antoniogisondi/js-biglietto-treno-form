
let button = document.getElementById('get')
button.addEventListener('click', function(){
    let nome_cognome = document.getElementById('nome_utente').value
    document.getElementById('nome_passeggero').innerHTML = nome_cognome

    let km = parseInt(document.getElementById('km').value)

    let age = parseInt(document.getElementById('age').value)

    let ticketType = document.getElementById('ticket')
    console.log(ticketType)
    
    let price = km * 0.21

    let message = ''

    // minorenne
    if(age === 0){
        price *= 0.8
        message += `il prezzo del biglietto scontato del 20% è di ${price.toFixed(2)}`
        ticketType = `Biglietto per bambini`
    }
    
    // maggiorenne
    else if(age === 1){
        price
        message += `Il prezzo del biglietto standard è di ${price.toFixed(2)}`
        ticketType = `Biglietto Standard`
    }
    
    // over65 ----
    else{
        price *= 0.6
        message += `il prezzo del biglietto scontato del 40% è di ${price.toFixed(2)}`
        ticketType = `Biglietto Over 65`
    }

    document.getElementById('ticket').innerHTML = ticketType

    document.getElementById('priceTicket').innerHTML = message

    let carrozza = Math.floor(Math.random() * 10) + 1;
    document.getElementById("carrozza").innerHTML = carrozza

    let codice_cp = (Math.random() * 10 + 1).toFixed(3); 
    document.getElementById("cp").innerHTML = codice_cp

})



let reset = document.getElementById('reset')
reset.addEventListener('click', function(){

    document.getElementById('nome_passeggero').innerHTML = ' '
    document.getElementById('priceTicket').innerHTML = ' '
    document.getElementById("carrozza").innerHTML = ' '
    document.getElementById("cp").innerHTML = ' '

})
    