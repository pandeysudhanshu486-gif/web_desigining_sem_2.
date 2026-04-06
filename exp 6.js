let heading =document.getElementById("mainheading")
let paragraph =document.getElementById("paragraph")
let input =document.getElementById("userinput")
let fontsize =16;
document.getElementById("change heading btn").addEventListener("click",function(){
if(input.value!=="")
    heading.Innerhtml=input.value;
});
document.getElementById("change background btn").onclick=function()
{
    document.body.style.backgroundcolor= "#"+Math.floor(math.random()*1234567).toString(16);
};


