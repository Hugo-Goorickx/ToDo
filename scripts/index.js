import { formulaire } from "./formulaire.js";
import { Event } from "./Event.js";
import { giveAllEventsAPI } from "./manipsAPI.js";
import { deleteEventAPI } from "./manipsAPI.js";
import { addOne } from "./addPeople.js";
import { modifEvent } from "./modifierBtn.js";
import  {addDate } from "./addDate.js";

function test(x) {
    
    console.log("test" + x);
}

document.getElementById("formButton").addEventListener("click", async function ()
{
    await formulaire();
    loadEvents();
});

/**
 * Create the switch for the color to chose if the new guy is available or not for a event
 */
function addEventOnDate()
{
    let listTd;

    for (let elem of main.getElementsByTagName('section'))
    {
        if (elem.className == 'event')
        {
            listTd = elem.getElementsByTagName('tr')[elem.getElementsByTagName('tr').length - 1].getElementsByTagName('td')
            for (let posTr = 1; posTr < listTd.length; posTr++)
                listTd[posTr].addEventListener('click', function (x) { return function() { x.className = (x.className =='no')?'ok':'no'; } } ( listTd[posTr] ), false);
            //Ajouter qlq 1
            elem.getElementsByTagName('button')[0].onclick = async function () {await addOne(elem.id); loadEvents()};
            //Modifier les elements de l'event
            elem.getElementsByTagName('button')[1].onclick = async function () {await modifEvent(elem.id);loadEvents()};
            //Ajouter une date remplacer le test(elem.id) par la fonction creer 
            elem.getElementsByTagName('button')[2].onclick = async function () {await addDate(elem.id);loadEvents()};
            //Supprimer
            elem.getElementsByTagName('button')[3].onclick = async function () {await deleteEventAPI(elem.id); loadEvents()};
        }
    }
}

/**
 * Load every event in the API
 */
async function loadEvents()
{
    let arrayEvents = [],
        x = await giveAllEventsAPI();
    
    document.getElementById('main').innerHTML = "";
    for (const elem of x)
    {
        arrayEvents.push(new Event(elem.id, elem.name, elem.dates, elem.author, elem.description));
        arrayEvents[arrayEvents.length - 1].create();
    }
    addEventOnDate();
}

loadEvents();


//add date button 

