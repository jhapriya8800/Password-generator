let InputSlider =document.getElementById("inputslider");
let SliderValue = document.getElementById("SliderValue");
let PassBox =document.getElementById("passBox");
let LowerCase = document.getElementById("lowercase");
let UpperCase =document.getElementById("uppercase");
let Number1 =document.getElementById("number");
let Symbole =document.getElementById("symbole");
let GenBtn =document.getElementById("genBtn");
let copyicon =document.getElementById("CopyIcon")





SliderValue .innerHTML=InputSlider.value; //Showing input slider value in staring;
InputSlider.addEventListener('input',()=>{
SliderValue .innerHTML=InputSlider.value;
})

GenBtn.addEventListener('click',()=>{
    PassBox.value=generatePassword();
})
let lowerChars="abcdefghijklmnopqrstuvwxyz";
let upperChar="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let numcHar="0123456789";
 let SymbolChar="~!@#$%^&*"
// Function to genrate password
function generatePassword(){
    let genPassword="";
    let allChars="";
    allChars += LowerCase.checked ? lowerChars:"";
    allChars += UpperCase.checked ? upperChar:"";
    allChars += Number1.checked ? numcHar:"";
    allChars += Symbole.checked ? SymbolChar:"";
    if(allChars ==""|| allChars.length==0){
        return genPassword;
    }

    for (let i = 0; i < InputSlider.value; i++) {
        genPassword += allChars.charAt(Math.floor(Math.random() * allChars.length));
      }
    return genPassword;
}
copyicon.addEventListener('click',()=>{
    if(PassBox.value != "" || PassBox.value.length>=1){
        navigator.clipboard.writeText(PassBox.value);
        copyicon.innerHTML="checked"
        copyicon.title="Password copied"

    }

})





