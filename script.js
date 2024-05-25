let emailInput=document.getElementById("email");
let dismiss =document.getElementById("dismiss");
let errorr =document.getElementById("errorr");
let first =document.getElementById("first");
let second =document.getElementById("second");
let result =document.getElementById("result");

function validate(){
    var email =document.getElementById("email").value;
    var regx = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/
    if (regx.test(email)) {
        result.innerHTML=email
        first.style.display='none'
        second.style.display='flex'
        return true;
        
    }else{
        errorr.style.display='block'
        emailInput.style.border="rgb(255, 98, 87) 1px solid"
        emailInput.style.color="rgb(255, 98, 87)"
        emailInput.style.backgroundColor="rgba(255, 98, 87, 0.5)"
        return false;
    }
}
dismiss.addEventListener('click',function(){
        first.style.display='flex'
        second.style.display='none'
        location.reload()
        
})