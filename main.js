//select dom items using const funciont ( getting the items such as header, menus even .classes!)
// storing them into variables in js so we can controll them 
const menubtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuimg = document.querySelector('.menu-image');
const menuitems = document.querySelector('.menu-items');
const menuitem = document.querySelectorAll('.menu-item') // we user queryselectorALL so we can get all who have the same .classes into this variable as node ...which is an arry

//set initail state of the menue to know and specify if close or open... which is false untill clicked on 
let showmenu = false;

// to get the logic of action after clicking in js we need an event listener to controll stuff ?
menubtn.addEventListener('click', togglemenu);
//creating the function
function togglemenu() {
    if(!showmenu) {
      menubtn.classList.add("close"); // this is the only one u need to have on close beacue the if
      menu.classList.add("show");     // statement = if the show menu which is set to false, is set
      menuitems.classList.add("show");//to TRUE this close the menuebtns and show the bigger menu!
      menuimg.classList.add("show");
      menuitem.forEach(item => item.classList.add('show')); // becuase we got the item from qsALL we need to loop them, like shown
      //to set menu on
      showmenu = true;
    } else { // else we do the oppesite of uppove .. = if the menue is shown the close it if clocked
        menubtn.classList.remove("close"); 
        menu.classList.remove("show");     
        menuitems.classList.remove("show");
        menuimg.classList.remove("show");
        menuitem.forEach(item => item.classList.remove('show'));
        showmenu = false;
    }
}
