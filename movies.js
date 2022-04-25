// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page
// http://www.omdbapi.com/?i=tt3896198&apikey=e2d05763
// http://www.omdbapi.com/?apikey=e2d05763&s
const movies_div=document.getElementById("movies");
const container_div=document.getElementById("container");
let id;
let amount=localStorage.getItem("amount");
let moviearr=JSON.parse(localStorage.getItem("movie"))||[];
async function searchmovies(){
    try{
    const movie=document.getElementById("search").value;
    const res=await fetch(`http://www.omdbapi.com/?apikey=e2d05763&s=${movie}`)
    const data=await res.json();
    console.log(data)
    const movies=data.Search
   
    // if(movies==undefined)
    // {
    //     return false
    // }
  
    //     console.log(movies)
    appendmovies(movies)
  


    
}
catch(err){
    console.log("err:",err)
}
}
function appendmovies(data)
{
    movies_div.innerHTML=null
    data.forEach(function(el){
        let image=document.createElement("img");
        image.src=el.Poster;
        let Title=document.createElement("p");
        Title.innerText=el.Title;
        let booknow=document.createElement("button")
        booknow.innerText="BOOK NOW"
        booknow.setAttribute("class","book_now");
        booknow.addEventListener("click",function(){

           addmovies(el)

        })
      
        container_div.append(image,Title,booknow);
        movies_div.append(container_div);




    });
}
async function main()
{
    const data=await searchmovies()
    console.log("data:",data)
    const movies=data.Search
   
    if(movies==undefined)
    {
        return false
    }
  
        console.log(movies)
    appendmovies(movies)
}

function debouncing(func,delay)
{
    if(id)
    {
        clearTimeout(id)
    }
   id= setTimeout(function(){
        func()
    },delay)
}
function addmovies(el)
{
   moviearr.push(el);
   localStorage.setItem("movie",JSON.stringify(moviearr));
   window.location.href="checkout.html"
}
document.getElementById("wallet").innerText=amount