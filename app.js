const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W",
"X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
 "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=",
 "{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let firstBtnEl = document.querySelector(".first-rectangle-btn")
let secondBtnEl = document.querySelector(".second-rectangle-btn")
let generatBtn = document.querySelector("#generate-btn")


generatBtn.addEventListener("click",function(){
    firstBtnEl.textContent = ""
    secondBtnEl.textContent = ""
    for(let i = 0; i < 15; i++){
        let randomSybol = Math.floor(Math.random()*characters.length)
        firstBtnEl.textContent+=characters[randomSybol]
        randomSybol = Math.floor(Math.random()*characters.length)
        secondBtnEl.textContent+=characters[randomSybol]      
    }
    
})

