import { pushEventAPI } from "./manipsAPI.js";

/************
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
************/
// /**
//  * Add event in the API
//  * 
//  * @param {*} object Object with : name, dates[], author, description
//  * @returns object return by fetch
//  */
// async function pushEventAPI(object)
// {
//     let method = new fetchP('POST', object);
//     return await fetchParams(`/api/events/`, method)
// }


let btn = document.getElementById("formButton");
    console.log("test");
    console.log(btn);

btn.addEventListener("click", function () {
    let tEvent = document.getElementById('tEvent');
    let tDescrp = document.getElementById('tDescrp');
    let tAutor = document.getElementById('tAutor');
    let tDate = document.getElementById('tDate');
    let array = [tDate.value];
    console.log(tDate.value);
    let form = {
                    "name": tEvent.value,
                    "dates": array,
                    "author": tAutor.value,
                    "description": tDescrp.value
                }
    console.log(form)
    console.log('form')
    pushEventAPI(form);    
})


