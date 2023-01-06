/**
 * Construct for the object
 * 
 * @param {string} method Stock the method (GET, POST,...)
 * @param {*} object The object for the body fetch
 */
export function fetchP(method, object)
{
    this.method = method;
    this.headers = {
                        "Content-Type": "application/json",
                    };
    this.body= JSON.stringify(object);
}

/**
 * Resume in one function the fetch and his params
 * 
 * @param {string} link The API command to execute (/api/events/)
 * @param {*} method What we do on the API
 * @returns The object gives by the fetch
 */
 export async function fetchParams(link, method)
{
    let linkGlob = `http://127.0.0.1:3000`;
    const response = await fetch(linkGlob + link, method);
    let stock = await response.json();
    console.log(stock);
    return stock;
}

/**
 * Return all events in the API
 * 
 * @returns array objects return by the fetch(all events)
 */
export async function giveAllEventsAPI()
{
    let method = {
        method: 'GET'
    }
    return await fetchParams(`/api/events/`, method);
}

/**
 * Return an event with an id
 * 
 * @param {string} id event's id
 * @returns object return by fetch (the id's event)
 */
export async function giveOneEventAPI(id)
{
    let method = {
        method: 'GET'
    }
    return await fetchParams(`/api/events/` + id + `/`, method)
}

/**
 * Add event in the API
 * 
 * @param {*} object Object with : name, dates[], author, description
 * @returns object return by fetch
 */
export async function pushEventAPI(object)
{
    let method = new fetchP('POST', object);
    return await fetchParams(`/api/events/`, method)
}

/**
 * Update an event with the id. The update is about the description, name and author
 * 
 * @param {string} id the event's id
 * @param {*} object object with : description, name, author
 * @returns event update
 */
export async function updateEventAPI(id, object)
{
    let method = new fetchP('PATCH', object);
    return await fetchParams(`/api/events/` + id + `/`, method)
}

/**
 * Delete the id's event
 * 
 * @param {string} id the event's id
 * @returns succes or error
 */
export async function deleteEventAPI(id)
{
    let method = {
                    method: 'DELETE'
                }
    return await fetchParams((`/api/events/` + id + `/`), method)
}

/**
 * Add dates in an event
 * @param {string} id the event's id
 * @param {*} object object with : dates[]
 * @returns object of the event
 */
export async function updateDatesEventAPI(id, object)
{
    let method = new fetchP('POST', object);
    return await fetchParams((`/api/events/` + id + `/add_dates`), method)
}

/**
 * Add one guy in the API
 * 
 * @param {string} id The event's id
 * @param {*} object The object to include in API
 * @returns 
 */
export async function addPeopleEventAPI(id, object)
{
    let method = new fetchP('POST', object);
    return await fetchParams((`/api/events/` + id + `/attend`), method)
}

/**
 * Update a guy in the API
 * 
 * @param {string} id The event's id
 * @param {*} object The object with datas to update in API
 * @returns 
 */
export async function updatePeopleEventAPI(id, object)
{
    let method = new fetchP('PATCH', object);
    return await fetchParams((`/api/events/` + id + `/attend`), method)
}

/***********************************  MANUAL  ***********************************
 * 
 *
 * 
 *      giveAllEventsAPI( - )
 * 
 * Return all events inside the API
 * 
************
 *      giveOneEventAPI( id )
 * 
 *      id = ' xxxxxxxx '
 * 
 * Return the event with this id
 * 
 ************
 *      pushEventAPI( object )
 *      
 *      object = {
 *                  name: ' xxxx ',
 *                  dates: ['yyyy-mm-dd', 'yyyy-mm-dd', ...],
 *                  author: ' xxxx ',
 *                  description: ' xxxx ',
 *              }
 * Add the event with the datas in the object
 * 
 ************
 *      updateEventAPI( id , object )
 * 
 *      id = ' xxxxxxxx '
 *      object = {
 *                  name: ' xxxx ',
 *                  dates: ['yyyy-mm-dd', 'yyyy-mm-dd', ...],
 *                  author: ' xxxx ',
 *                  description: ' xxxx ',
 *              } (min one element)
 * Modif the datas of the id's event with the object's datas
 * 
 ************ 
 *      deleteEventAPI( id )
 *
 *      id = ' xxxxxxxx '
 * 
 * Delete the event with this id
 *  
 ************ 
 *      updateDatesEventAPI( id , object )
 *
 *      id = ' xxxxxxxx '
 *      object = {
 *                  dates: ['yyyy-mm-dd', 'yyyy-mm-dd', ...],
 *               }
 * 
 * Add news dates for the event
 * 
 ************ 
 *      addPeopleEventAPI( id , object )
 * 
 *      id = ' xxxxxxxx '
 *      object = {
 *                  name: 'xxx',
 *                  dates: [
 *                  {
 *                      date: 'yyyy-mm-dd',
 *                      available: boolean
 *                  }, ...],
 *               }
 * 
 * Add a guy in th event with the avaibility for the dates
 * 
 ************ 
 *      updatePeopleEventAPI( id , object )
 *      
 *      id = ' xxxxxxxx '
 *      object = {
 *                  name: 'xxx',
 *                  dates: [
 *                  {
 *                      date: 'yyyy-mm-dd',
 *                      available: boolean
 *                  }, ...],
 *               }
 * 
 * Change the avaibility of a guy
 * 
*********************************************************************************/








///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// EXAMPLES            ////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let object = 
{
    name: 'test',
    dates: ['2020-10-10'],
    author: 'test',
    description: 'test',
}

let updateEventVar = 
{
    name: 'blablabla'
}

let oldEventVar = 
{
    name: 'test'
}

let updateDatesVar = 
{
    dates: ['2020-10-15'],
}

let oldDatesVar = 
{
    dates: ['2020-10-12'],
}

let newPeopleVar = 
{
    name: 'LePluBo',
    dates: [
        {
            date: '2020-10-15',
            available: true
        }],
}

let updatePeopleVar = 
{
    name: 'LePluBo',
    dates: [
        {
            date: '2020-10-15',
            available: false
        }],
}

export async function wait()
{
    await giveAllEventsAPI();
    await giveOneEventAPI("b407aa58f1b9");
    // await pushEventAPI(object);
    await updateEventAPI("b407aa58f1b9", updateEventVar);
    await updateEventAPI("b407aa58f1b9", oldEventVar);
    await updateDatesEventAPI("b407aa58f1b9", updateDatesVar);
    await updateDatesEventAPI("b407aa58f1b9", oldDatesVar);
    await addPeopleEventAPI("b407aa58f1b9", newPeopleVar);
    await updatePeopleEventAPI("b407aa58f1b9", updatePeopleVar);
    // await updatePeopleEventAPI("b407aa58f1b9", updatePeopleVar);
    // await deleteEventAPI("8cc8a9a99c47");
}

//wait();

const classEvents  = class
{
    constructor(id, name, dates, author, description )
    {
        this.id = id;
        this.name = name;
        this.dates = dates;
        this.author = author;
        this.description = description;
    }

    create()
    {
        let arrayTrGuys = [];
        let arrayNamesGuys = [];
        
        let firstTr = `<tr><td></td>`;
        for (let elem of this.dates)
        {
            firstTr += `<td class="name">${elem.date}</td>`;
            for (let elem1 of elem.attendees)
            {
                let positionArray = arrayNamesGuys.indexOf(elem1.name);
                if (positionArray != -1)
                    arrayTrGuys[positionArray] += (elem1.available)?"<td class='ok'></td>":"<td class='no'></td>";
                else
                {
                    arrayNamesGuys.push(elem1.name);
                    let insideTr = (elem1.available)?"<td class='ok'></td>":"<td class='no'></td>";
                    arrayTrGuys.push(`<td class='name'>${elem1.name}</td>` + insideTr);
                }
            }
        }
        firstTr += `</tr>`;
        for (let index = 0; index < arrayTrGuys.length; index++)
            arrayTrGuys[index] += '</tr>';
        let secondtr = `<tr>${arrayTrGuys.join('')}</tr>`;

        let lasttr = `<tr>
                        <td class="name">
                            <input class="inputTXT" id="tEvent" type="text" required maxlength="30">
                        </td>`;
        for (let x = 0; x < this.dates.length; x++)
            lasttr += ` <td class="no"></td>`;
        lasttr += `</tr>`;

        let main = document.getElementById('main');
        main.innerHTML += ` <section class="event">
                                <h2>
                                    ${this.name}
                                </h2>
                                <p class="description">
                                    ${this.description}
                                </p>
                                <table>
                                    ${firstTr}
                                    ${secondtr}
                                    ${lasttr}
                                </table>
                                <button class="buttonDate" aria-label="buttonForm" id="formButton">Ajouter Personne</button>
                                <section>
                                    <button class="buttonLeftMiddle" aria-label="buttonForm" id="formButton">Ajouter Personne</button>
                                    <button class="buttonLeftMiddle" aria-label="buttonForm" id="formButton">Ajouter Personne</button>
                                    <button class="buttonDel" aria-label="buttonForm" id="formButton">Ajouter Personne</button>
                                </section>
                            </section>`;
    }
}

let arrayEvents = []
async function loadEvents()
{
    let x = await giveAllEventsAPI()
    for (const elem of x)
        arrayEvents.push( new classEvents(elem.id, elem.name, elem.dates, elem.author, elem.description) )
    for (const elem of arrayEvents)
        elem.create();
}

loadEvents()
   
    
    

    

