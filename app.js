//Initialize function when user clicks anywhere on the document
// $(document).on("click", function() {

    // Here we grab the text from the input box
    // var pokemon = $("#pokeMon").val();

    
var count = 1;

function fetchPokemon(){
    
    // Here we construct our URL, and pick our pokemon randomly by its 'id number' (pokedex number). In this case, we limit our results to the first 150 pokemon (OG)
    
    // var queryURL = "https://pokeapi.co/api/v2/pokemon/"+ Math.floor(Math.random()*150)+"/"
    var queryURL = "https://pokeapi.co/api/v2/pokemon/"+count+"/"

    // Write code to hit the queryURL with $ajax, 'GET' our returned results, and then take the response data
    // and console log the specific elements we are returning
    $.ajax({
      url: queryURL,
      method: 'GET'
    })
    // .then() => is a method from the Promise library that promises to execute a callback function. The callback => is going to capture the data that comes back from our AJAX call
    .then(function(response){
        console.log(response.name)
        console.log(response.stats)
        console.log(response.height)
        console.log(response.weight)
        console.log(response.sprites.front_default)
            
        if(count < 50){
            count = count + 1;
            console.log('BIG COUNT TOTAL:', count);
            fetchPokemon();
        }
    })
}

fetchPokemon();
    

// });

    // =================================================================

    // $.ajax({
    //     //First, feed the ajax call the queryurl that we tested already
    //     url: queryURL,
    //     //Initialize a get method in order to retrieve info
    //     method: "GET"
    //     //.then() => method from the promise library that promises to exectue the following callback function
    //       //callback function: nested function that is called by a parent function
    //   }).then(function(response) {
        
    //   //take the response data and display it in the div with an id of movie-view
    //   $("#movie-view").append([JSON.stringify(response.Title)]);
    //   $("#movie-view").append([JSON.stringify(response.Year)]);
    //   $("#movie-view").append([JSON.stringify(response.Actors)]);
    //   $("#movie-view").append([JSON.stringify(response.Plot)]);
    //   $("#movie-view").append([JSON.stringify("<img src="+response.Poster+"</img>")]);

    //   });

