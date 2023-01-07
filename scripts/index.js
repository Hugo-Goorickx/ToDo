import { formulaire } from "./formulaire.js";
import { Event } from "./Event.js";
import { giveAllEventsAPI } from "./manipsAPI.js";

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