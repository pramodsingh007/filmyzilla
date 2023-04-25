// ****************************************Home page**************************************
const settingsofhome = {
	async: true,
	crossDomain: true,
	url: 'https://moviesminidatabase.p.rapidapi.com/movie/order/byPopularity/',
	method: 'GET',
	headers: {
		'content-type': 'application/octet-stream',
		'X-RapidAPI-Key': 'feb210bb46msh61ab2b263b5bacap1ee6ffjsn574f04514ee3',
		'X-RapidAPI-Host': 'moviesminidatabase.p.rapidapi.com'
	}
};

$.ajax(settingsofhome).done(function (response) {
	for(var x of response.results){
    var settings = {
      async: true,
      crossDomain: true,
      url: `https://moviesminidatabase.p.rapidapi.com/movie/id/${x.imdb_id}/`,
      method: 'GET',
      headers: {
        'content-type': 'application/octet-stream',
        'X-RapidAPI-Key': 'feb210bb46msh61ab2b263b5bacap1ee6ffjsn574f04514ee3',
        'X-RapidAPI-Host': 'moviesminidatabase.p.rapidapi.com'
      }
    };
    
    $.ajax(settings).done(function (response) {
      const card = `<div><img class="ig" src="${response.results.banner}"></div>`
    $("#scroller1").append(card)
    $("#poster").attr("src",response.results.banner)

      
    });
  }
});

// ***************************************HOME PAGE SECOND SCROLLER******************************************************
const setting = {
	async: true,
	crossDomain: true,
	url: 'https://moviesminidatabase.p.rapidapi.com/movie/order/byRating/',
	method: 'GET',
	headers: {
		'content-type': 'application/octet-stream',
		'X-RapidAPI-Key': 'feb210bb46msh61ab2b263b5bacap1ee6ffjsn574f04514ee3',
		'X-RapidAPI-Host': 'moviesminidatabase.p.rapidapi.com'
	}
};

$.ajax(setting).done(function (response) {
	response.results.forEach((x)=>{


    const settings = {
      async: true,
      crossDomain: true,
      url: `https://moviesminidatabase.p.rapidapi.com/movie/id/${x.imdb_id}/`,
      method: 'GET',
      headers: {
        'content-type': 'application/octet-stream',
        'X-RapidAPI-Key': 'feb210bb46msh61ab2b263b5bacap1ee6ffjsn574f04514ee3',
        'X-RapidAPI-Host': 'moviesminidatabase.p.rapidapi.com'
      }
    };
    
    $.ajax(settings).done(function (response) {
      const card = `<div><img class="ig" src="${response.results.banner}"></div>`
      $(".content1").append(card)
    });
  })
  
});





// ****************************************Home page End**************************************


const url = "https://moviesminidatabase.p.rapidapi.com/movie/byGen/Action/";
const options = {
  method: "GET",
  headers: {
    "content-type": "application/octet-stream",
    "X-RapidAPI-Key": "feb210bb46msh61ab2b263b5bacap1ee6ffjsn574f04514ee3",
    "X-RapidAPI-Host": "moviesminidatabase.p.rapidapi.com",
  },
};

fetch(url, options)
  .then((response) => {
    return response;
  })
  .then((data) => {
    return data.json();
  })
  .then((movies) => {
    for (movie of movies.results) {
      const settings = {
        async: true,
        crossDomain: true,
        url: `https://moviesminidatabase.p.rapidapi.com/movie/id/${movie.imdb_id}/`,
        method: "GET",
        headers: {
          "content-type": "application/octet-stream",
          "X-RapidAPI-Key":
            "feb210bb46msh61ab2b263b5bacap1ee6ffjsn574f04514ee3",
          "X-RapidAPI-Host": "moviesminidatabase.p.rapidapi.com",
        },
      };

      $.ajax(settings).done(function (mov) {
        // console.log(mov.results);
        const card = $(`<div class="box">
        <div class="card relative">
          <div class="front"><img class="w-full h-full" src="${
            mov.results.banner
          }"><span class="absolute right-3 bottom-3 text-gray-600 font-bold">⭐${mov.results.rating
        }</span></div>
          <div class="back text-center align-middle font-bold text-gray-600 p-2">
            <h1>Title: ${mov.results.title}</h1>
            <p>Year: ${mov.results.year}</p>
            <p>Release Date: ${mov.results.release}</p>
            <p>Trailer: <a class="text-blue-600" href="${
              mov.results.trailer
            }" >Watch Now</a></p>
          </div>
        </div>
      </div>`);
        $(".movie-sec").append(card);
      });
    }
  });
  
  // ********************************************************series**********************
const settings = {
  async: true,
  crossDomain: true,
  url: "https://moviesminidatabase.p.rapidapi.com/series/order/byPopularity/",
  method: "GET",
  headers: {
    "content-type": "application/octet-stream",
    "X-RapidAPI-Key": "feb210bb46msh61ab2b263b5bacap1ee6ffjsn574f04514ee3",
    "X-RapidAPI-Host": "moviesminidatabase.p.rapidapi.com",
  },
};

$.ajax(settings).done(function (response) {
  for (var series of response.results) {

    const settings = {
      async: true,
      crossDomain: true,
      url: `https://moviesminidatabase.p.rapidapi.com/series/id/${series.imdb_id}/`,
      method: "GET",
      headers: {
        "content-type": "application/octet-stream",
        "X-RapidAPI-Key": "feb210bb46msh61ab2b263b5bacap1ee6ffjsn574f04514ee3",
        "X-RapidAPI-Host": "moviesminidatabase.p.rapidapi.com",
      },
    };

    $.ajax(settings).done(function (s) {
  
      const card = $(`<div class="box">
        <div class="card relative">
          <div class="front"><img class="h-full w-full" src="${s.results.banner}"><span class="absolute right-3 bottom-3 text-gray-600 font-bold">⭐${
        s.results.rating
      }</span></div>
          <div class="back text-center align-middle font-bold text-gray-600 p-2">
            <h1>Title: ${s.results.title}</h1>
            <p> Year: ${s.results.start_year}-${s.results.end_year}</p>
            <p>Release Date: ${s.results.release}</p>
            <p>Trailer: <a class="text-blue-600" href="${
              s.results.trailer
            }" >Watch Now</a></p>
          </div>
        </div>
      </div>`);
      $(".series-sec").append(card);
    });
  }
});
// ***************************Series End**************************************

const settings3 = {
    async: true,
    crossDomain: true,
    url: "https://moviesminidatabase.p.rapidapi.com/movie/byGen/Animation/",
    method: "GET",
    headers: {
      "content-type": "application/octet-stream",
      "X-RapidAPI-Key": "feb210bb46msh61ab2b263b5bacap1ee6ffjsn574f04514ee3",
      "X-RapidAPI-Host": "moviesminidatabase.p.rapidapi.com",
    },
  };
  
  $.ajax(settings3).done(function (response) {
    for (var animation of response.results) {
    
      const settings = {
        async: true,
        crossDomain: true,
        url: `https://moviesminidatabase.p.rapidapi.com/movie/id/${animation.imdb_id}/`,
        method: "GET",
        headers: {
          "content-type": "application/octet-stream",
          "X-RapidAPI-Key": "feb210bb46msh61ab2b263b5bacap1ee6ffjsn574f04514ee3",
          "X-RapidAPI-Host": "moviesminidatabase.p.rapidapi.com",
        },
      };
  
      $.ajax(settings).done(function (aMovies) {
    
        const card = $(`<div class="box">
          <div class="card relative">
            <div class="front"><img class="h-full w-full" src="${aMovies.results.banner}"><span class="absolute right-3 bottom-3 text-gray-600 font-bold">⭐${
          aMovies.results.rating
        }</span></div>
            <div class="back text-center align-middle font-bold text-gray-600 p-2">
              <h1>Title: ${aMovies.results.title}</h1>
              <p>Popularity: ${aMovies.results.popularity}</p>
              <p>Release Date: ${aMovies.results.release}</p>
              <p>Trailer: <a class="text-blue-600" href="${
                aMovies.results.trailer
              }" >Watch Now</a></p>
            </div>
          </div>
        </div>`);
        $(".animation-sec").append(card);
      });
    }
  });


