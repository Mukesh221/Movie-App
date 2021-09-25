var arr;

//Function for Coming Soon.
const comingMovies = () => {
    console.log("Inside comingMovies");
    fetch('http://localhost:3000/movies-coming')
    .then(response => response.json())
    .then(data =>  {
        arr=data;
        let movieTable = document.getElementById("myMovie");
        let ul;
        let i=1;
        data.map((element) => {
            ul += `<div id="menu" class="myDIV">
                        <div class="hide">${i}</div>
                        <h2>${element.title}</h2>
                        <img src='${element.posterurl}'/><br></br>
                        <button class="btn1" type="button">Add to Favourite</button>
                    </div>
                    <div class="hide">
                         
                            <p><b>IMDB:  </b>${element.imdbRating}</p>
                            <p><b>Story Line : </b>${element.storyline}</p>
                            <p><b>Release Date: </b>${element.releaseDate}</p>
                            <p><b>Actors: </b>${element.actors}</p>
                         
                    </div>
                    <br></br><br></br>   
                  `
                  i++;
        })
        movieTable.innerHTML = ul;
        myfunction();
    })
}

//Function for Movies in Theaters.
const moviesInTheaters = () => {
    console.log("Hello js");
    fetch('http://localhost:3000/movies-in-theaters')
    .then(response => response.json())
    .then(data =>  {
        arr = data;
        let movieTable = document.getElementById("myMovie");
        let ul;
        let i=1;
        data.map((element) => {
            ul += `<div id="menu" class="myDIV">
                        <div class="hide">${i}</div>
                        <h2>${element.title}</h2>
                        
                        <img src='${element.posterurl}'/><br></br>
                        <button class="btn1" type="button" >Add to Favourite</button>
                    </div>
                    <div class="hide">
                        
                            <p><b>IMDB:  </b>${element.imdbRating}</p>
                            <p><b>Story Line : </b>${element.storyline}</p>
                            <p><b>Release Date: </b>${element.releaseDate}</p>
                            <p><b>Actors: </b>${element.actors}</p>
                         
                    </div>
                    <br></br><br></br>   
                  `
                  i++;
        })
        movieTable.innerHTML = ul
        myfunction();
    })
}

//Function for Top Rated Indain Movies.
const topRatedIndian = () => {
    console.log("Hello js");
    fetch('http://localhost:3000/top-rated-india')
    .then(response => response.json())
    .then(data =>  {
        let movieTable = document.getElementById("myMovie");
        let ul;
        let i=1;
        arr=data;
        data.map((element) => {
            ul += `<div id="menu" class="myDIV">
                        <div class="hide">${i}</div>
                        <h2>${element.title}</h2>
                        <img src='${element.posterurl}'/><br></br>
                        <button class="btn1" onclick="${myfunction(element)}" type="button">Add to Favourite</button>
                    </div>
                    <div class="hide">
                        <ul>
                            <p><b>IMDB:  </b>${element.imdbRating}</p>
                            <p><b>Story Line : </b>${element.storyline}</p>
                            <p><b>Release Date: </b>${element.releaseDate}</p>
                            <p><b>Actors: </b>${element.actors}</p>
                        </ul>
                    </div>
                    <br></br><br></br>   
                  `
                  i++;
        })
        movieTable.innerHTML = ul
        myfunction();
    })
}

//Function for Top Rated Movies.
const topRatedMovies = () => {
    console.log("Hello js");
    fetch('http://localhost:3000/top-rated-movies')
    .then(response => response.json())
    .then(data =>  {
        let movieTable = document.getElementById("myMovie");
        let ul;
        let i=1;
        arr=data;
        data.map((element) => {
            ul += `<div id="menu" class="myDIV">
                        <div class="hide">${i}</div>
                        <h2>${element.title}</h2>
                        <img src='${element.posterurl}'><br></br>
                        <button class="btn1" onclick="${myfunction(element)}" type="button">Add to Favourite</button>
                    </div>
                    <div class="hide">
                        <ul>
                            <p><b>IMDB:  </b>${element.imdbRating}</p>
                            <p><b>Story Line : </b>${element.storyline}</p>
                            <p><b>Release Date: </b>${element.releaseDate}</p>
                            <p><b>Actors: </b>${element.actors}</p>
                        </ul>
                    </div>
                    <br></br><br></br>   
                  `
                  i++;
        })
        movieTable.innerHTML = ul
        myfunction();
    })
}

//Function to add movies into favourite list.
const favouriteMovies = () => {
    console.log("Hello js");
    fetch('http://localhost:3000/favourit')
    .then(response => response.json())
    .then(data =>  {
        arr=data;
        let movieTable = document.getElementById("myMovie");
        let ul;
        let i=1;
        data.map((element) => {
            ul += `<div id="menu" class="myDIV">
                    <div class="hide">${element.id}</div>
                        <h2>${element.title}</h2>
                        <img src='${element.posterurl}'><br></br>
                        <button class="btn1"  type="button">Delete from Favourite</button>
                    </div>
                    <div class="hide">
                        <ul>
                            <p><b>IMDB:  </b>${element.imdbRating}</p>
                            <p><b>Story Line : </b>${element.storyline}</p>
                            <p><b>Release Date: </b>${element.releaseDate}</p>
                            <p><b>Actors: </b>${element.actors}</p>
                        </ul>
                    </div>
                    <br></br><br></br>   
                  `
                  i++;
        })

        movieTable.innerHTML = ul
        deleteFav()

    })
}


function myfunction(){
    var items = document.querySelectorAll(".btn1");
     
      items.forEach((item)=>{
          item.addEventListener('click',function(e){
            addToFavourite(arr[e.target.parentElement.children[0].innerHTML-1]);
              //console.log(e.target.parentElement.children[0].innerHTML);
              });
      });                   
}

//Function for deleting movies.
function deleteFav(){
    var items = document.querySelectorAll(".btn1");
     
      items.forEach((item)=>{
          item.addEventListener('click',function(e){
            removefromfav(e.target.parentElement.children[0].innerHTML);
              //console.log(e.target.parentElement.children[0].innerHTML);
              });
      });
}


function removefromfav(id){
    fetch("http://localhost:3000/favourit/"+id,{
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json'
          },
           
        });
}

//Function for adding movies to favourite.
function addToFavourite(movie){
    if(movie.id != undefined ){
          delete movie.id;
    }

    fetch("http://localhost:3000/favourit", {
            method: 'POST',  
            headers: {
              'Content-Type': 'application/json'
            },  
            redirect: "manual",  
            body: JSON.stringify(movie)
    });
}