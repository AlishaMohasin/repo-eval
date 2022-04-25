// Store the wallet amount to your local storage with key "amount"
let amount=localStorage.getItem("amount");
document.getElementById("add_to_wallet").addEventListener("click",addmoney)
function addmoney()
{
    const input=document.getElementById("amount").value;
    // moneyarray.push(input);
    window.location.reload()
    localStorage.setItem("amount",input);


}
console.log(amount)
document.getElementById("wallet").innerText=amount