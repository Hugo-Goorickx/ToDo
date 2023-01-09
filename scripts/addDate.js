import { updateDatesEventAPI } from "./manipsAPI.js";

export async function  addDate(id){
    let day = prompt ("Ajoute le jour (jj)");
    if (day > 31){
        alert ('au format (dd)');
        return
    }

    let month = prompt ("Ajoute le mois (mm)");
    if (month > 12){
    alert ('au format (mm)');
    return
    }

    let years = prompt ("Ajoute le jour (aaaa)");
    if (years < 2023 || years > 2100){
    alert ('au format (aaaa)');
    return
    }


    let date = years +'-'+ month + '-' + day;

    let confirmDate = confirm ('Voulez-vous vraiment ajouter cette date?');

    date ? confirmDate : '';


    confirmDate ? await updateDatesEventAPI(id,{"dates": [date]}) : '';

}




