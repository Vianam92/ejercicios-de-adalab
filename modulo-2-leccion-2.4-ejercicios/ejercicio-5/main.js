
function getEl(){
const selector = document.querySelector(".js-text");
if (!selector){
    console.log(`No existe nungún elemento con clase, id o tag llamado ${selector}`);
}else{
    return selector;
}

}

const btnEl = getEl('js-text');

