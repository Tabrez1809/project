const container=document.querySelector(".container");
const search=document.querySelector("#searchmovie");


const url="http://www.omdbapi.com/?i=tt3896198&apikey=4ca282b6";



search.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
       
        const title=search.value;
        // console.log(title);
        getapi(title);
    }
    });


    
function getapi(title){
    container.innerHTML=null;
   fetch(`${url}&s=${title}`).then(response=>response.json()).then(response=>{
    const movies=response.Search;
    // console.log(movies);
    if(movies){
    movies.map(movie=>{
        const year = movie.Year;
        const poster= movie.Poster;
        const type=movie.Type;
        const title=movie.Title;
        // console.log(title);
       
        const moviecard=`<div><h3>${year}</h3><img src="${poster}"><p>${type}</p><h2>${title}<h2> </div>`;
        container.innerHTML+=moviecard;
    });
}
else{
    container.innerHTML=`<h1>Movie not found</h1>`
}
}).catch(err=>console.log(err));

}
