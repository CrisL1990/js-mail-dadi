//Crea lista di email
let mailList = ["pippo@gmail.com", "paperino@gmail.com", "pluto@gmail.com", "topolino@gmail.com"];

//Memorizza email dell'utente
let userMail = prompt("Type your email address: ");

//Trasforma in lowercase userMail
let email = userMail.toLowerCase();
let counter = 0;

//Se la mail dell'utente è nella lista l'accesso è consentito
//Se i arriva all'ultimo elemento della lista e counter è a 0
//(quindi non ha trovato nella lista la user email)
//allora l'accesso è negato
for(let i = 0; i < mailList.length; i++){

    //trasforma in lowercase gli elementi della lista qual'ora ce ne fosse bisogno
    let listItem = mailList[i].toLowerCase();
    

    if(listItem == email){
        alert("Access allowed");
        counter += 1;
    }

    else if((i == mailList.length - 1) && (counter == 0)){
        alert("Access denied!");
    }

}

//Resetta counter a 0
counter = 0;