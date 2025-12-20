const btnE1 =  document.querySelector(".btn")
const inputE1 = document.getElementById("input")
const copyE1 = document.querySelector(".fa-copy")
copyE1.addEventListener("click",()=>{
    copyPassword()
})
const alertContainerE1 = document.querySelector(".alert-container")
btnE1.addEventListener("click",()=>{
    createPassword()

    alertContainerE1.classList.remove("active")
    setTimeout(()=>{
        alertContainerE1.classList.add("active")
    },2000)
})
function createPassword(){
    const chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const passwordLength = 12
    let password = ""
    for(let i=0;i<passwordLength;i++){
        const randomNumber = Math.floor(Math.random()*chars.length)
        password += chars.substring(randomNumber,randomNumber+1)
    }
inputE1.value = password
   alertContainerE1.innerText = password + " copied!"
}
function copyPassword(){
    inputE1.select()
    inputE1.setSelectionRange(0,9999)
    navigator.clipboard.writeText(inputE1.value)
}