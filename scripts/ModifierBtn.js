import { updateEventAPI } from "./manipsAPI.js";

export async function modifEvent(id) {

    let newTitle = prompt("Entrez un nouveau titre.");
    if (newTitle.length >= 256){
        alert("Taille maximum pour une entree est de 256 caracteres");
        return
    }
    let newDesc = prompt("Entrez une nouvelle description.");
    if (newDesc.length >= 256){
        alert("Taille maximum pour une entree est de 256 caracteres");
        return
    }
    let newAuthor = prompt("Entrez un nouveau auteur.");
    if (newAuthor.length >= 256){
        alert("Taille maximum pour une entree est de 256 caracteres");
        return
    }
    else {
        let newObject = {
            "description": newDesc,
            "name": newTitle,
            "author": newAuthor
        }
        await updateEventAPI(id, newObject)
    }
}