// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time
let data=JSON.parse(localStorage.getItem("movie"))
let amount=localStorage.getItem("amount");
const movies_div=document.getElementById("movie")
document.getElementById("confirm").addEventListener("click",confirm)
data.forEach(function(el){
    let image=document.createElement("img");
    image.src=el.Poster;
    let Title=document.createElement("p");
    Title.innerText=el.Title;
    movies_div.append(image,Title);

});
document.getElementById("wallet").innerText=amount
function confirm()
{
    if(amount>=100)
    {
        alert("Booking successful!")
    }
    else{

        alert("Insufficient Balance!")
    }
}