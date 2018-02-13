// quick fix for Cloud9 warning:
/* global $ */

// Class 2:
// Complete displayList() to show a single song in the list

// Class 2:
// Complete displayList() to show all the songs in the list
// Complete clearList() funcion

// Class 3:
// Complete the addSong function to take an input from input boxes and push a new song to the playlist array. 

// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

// Songs
var mySong = {
	"title":"Finesse",
	"artist":"Bruno Mars ft. Cardi B",
	"link":"https://www.youtube.com/watch?v=LsoLEjrDogU",
	"imageUrl":"https://www.mynaijalyrics.com/wp-content/uploads/2018/01/1515037649_51c419ea1e290cd6d79d34019e0862f5.jpg",
}

var myPlayList = [
	{
        "title":" Finesse",
	    "artist":" Bruno Mars ft. Cardi B",
	    "link":"https://www.youtube.com/watch?v=LsoLEjrDogU",
	    "imageUrl":"https://www.mynaijalyrics.com/wp-content/uploads/2018/01/1515037649_51c419ea1e290cd6d79d34019e0862f5.jpg",
	},
	{
		"title":" Motorsport",
		"artist":" Migos ft. Cardi B & Nicki Minaj",
		"link":"https://www.youtube.com/watch?v=9v_rtaye2yY",
		"imageUrl":"https://upload.wikimedia.org/wikipedia/en/thumb/b/b6/MotorSport_song_cover.png/220px-MotorSport_song_cover.png",
	},
	{
		"title":" Bartier Cardie",
		"artist":" Cardi B",
		"link":"https://www.youtube.com/watch?v=sXP6vliZIHI",
		"imageUrl":"https://images.complex.com/complex/images/c_crop,h_1200,w_1172,x_4,y_0/c_limit,w_680/fl_lossy,pg_1,q_auto/wcnqxs8k8ipbjfbn0dlj/bartier-cardi-album-cover",
	},
	{
		"title":" Plain Jane",
		"artist":" A$AP Ferg",
		"link":"https://www.youtube.com/watch?v=BwmuvqFzfLI",
		"imageUrl":"https://i.ytimg.com/vi/BwmuvqFzfLI/maxresdefault.jpg",
	},
	{
		"title":" Exclusive",
		"artist":" G Shytt",
		"link":"https://www.youtube.com/watch?v=vyN38nybEaM",
		"imageUrl":"https://is2-ssl.mzstatic.com/image/thumb/Music128/v4/4a/81/0e/4a810e2e-6582-f4fd-c3a5-5bf49a6f74f7/8429006122783.jpg/1200x630bb.jpg",
	},
	{
		"title":" Either Way",
		"artist":" K Michelle",
		"link":"https://www.youtube.com/watch?v=OkWc_8N1J6E",
		"imageUrl":"http://www.rap-up.com/app/uploads/2017/09/k-michelle-either-way.jpg",
	},
	{
		"title":" F it Up",
		"artist":" Tank",
		"link":"https://www.youtube.com/watch?v=sh4hoKTUaIA",
		"imageUrl":"https://t2.genius.com/unsafe/220x0/https%3A%2F%2Fimages.genius.com%2Fcccf9a3c9e260198ea622759e3f6c9ea.696x696x1.jpg",
	},
	{
		"title":" When We",
		"artist":" Tank",
		"link":"https://www.youtube.com/watch?v=QRF9TgkBCjc",
		"imageUrl":"https://i.ytimg.com/vi/9tNw30-FNdc/maxresdefault.jpg",
	},
	{
		"title":" No Limit",
		"artist":" G Easy ft. Cardi B and A$AP Rocky",
		"link":"https://www.youtube.com/watch?v=PGfSaVDymjk",
		"imageUrl":"https://i.ytimg.com/vi/PGfSaVDymjk/maxresdefault.jpg",
	},
	{
		"title":" Privacy",
		"artist":" Chris Brown",
		"link":"https://www.youtube.com/watch?v=Fq0xEpRDL9Q",
		"imageUrl":"https://i.ytimg.com/vi/wX_DwI5v51s/maxresdefault.jpg",
	},
	{
		"title":" Flipmode",
		"artist":" Fabolous, Velous, Chris Brown",
		"link":"https://www.youtube.com/watch?v=cmaGL1KVvs8",
		"imageUrl":"https://hiphopgrindtv.com/wp-content/uploads/2017/08/velous-flipmode-cover.jpg",
	},
	{
		"title":" Too Good at Goodbyes",
		"artist":" Sam Smith",
		"link":"https://www.youtube.com/watch?v=J_ub7Etch2U",
		"imageUrl":"https://images.genius.com/6f15505d8b36fafa3549ced734b2697a.1000x1000x1.jpg",
	},
	{
		"title":" Young Dumb and Broke",
		"artist":" Khalid",
		"link":"https://www.youtube.com/watch?v=IPfJnp1guPc",
		"imageUrl":"https://i1.sndcdn.com/artworks-000234585376-9c5wqk-t500x500.jpg",
	},
	{
		"title":" Location",
		"artist":"Khalid",
		"link":"https://www.youtube.com/watch?v=by3yRdlQvzs",
		"imageUrl":"https://images.genius.com/38a34a5b018c09f0dc9260ac60203cd8.493x494x1.png",
	}

]



// DOCUMENT READY FUNCTION
$( document ).ready(function() {
  
displayList();

for (var i=0; i < displayList.length; i = i + 1) {
	  	console.log(displayList[i]);
	}



});

function displayList(){
$('body').append("<p>Title: " + myPlayList[0].title + "</p>");
$('body').append("<p>Artist: " + myPlayList[0].artist + "</p>");
$('body').append("<p>link: " + myPlayList[0].link + "</p>");
$('body').append("<img src=" + "https://www.mynaijalyrics.com/wp-content/uploads/2018/01/1515037649_51c419ea1e290cd6d79d34019e0862f5.jpg>");

$('body').append("<p>Title: " + myPlayList[1].title + "</p>");
$('body').append("<p>Artist: " + myPlayList[1].artist + "</p>");
$('body').append("<p>link: " + myPlayList[1].link + "</p>");
$('body').append("<img src=" + "https://upload.wikimedia.org/wikipedia/en/thumb/b/b6/MotorSport_song_cover.png/220px-MotorSport_song_cover.png>");

$('body').append("<p>Title: " + myPlayList[2].title + "</p>");
$('body').append("<p>Artist: " + myPlayList[2].artist + "</p>");
$('body').append("<p>link: " + myPlayList[2].link + "</p>");
$('body').append("<img src=" + "https://images.complex.com/complex/images/c_crop,h_1200,w_1172,x_4,y_0/c_limit,w_680/fl_lossy,pg_1,q_auto/wcnqxs8k8ipbjfbn0dlj/bartier-cardi-album-cover>");

$('body').append("<p>Title: " + myPlayList[3].title + "</p>");
$('body').append("<p>Artist: " + myPlayList[3].artist + "</p>");
$('body').append("<p>link: " + myPlayList[3].link + "</p>");
$('body').append("<img src=" + "https://i.ytimg.com/vi/BwmuvqFzfLI/maxresdefault.jpg>");

$('body').append("<p>Title: " + myPlayList[4].title + "</p>");
$('body').append("<p>Artist: " + myPlayList[4].artist + "</p>");
$('body').append("<p>link: " + myPlayList[4].link + "</p>");
$('body').append("<img src=" + "https://is2-ssl.mzstatic.com/image/thumb/Music128/v4/4a/81/0e/4a810e2e-6582-f4fd-c3a5-5bf49a6f74f7/8429006122783.jpg/1200x630bb.jpg>");

$('body').append("<p>Title: " + myPlayList[5].title + "</p>");
$('body').append("<p>Artist: " + myPlayList[5].artist + "</p>");
$('body').append("<p>link: " + myPlayList[5].link + "</p>");
$('body').append("<img src=" + "http://www.rap-up.com/app/uploads/2017/09/k-michelle-either-way.jpg>");

$('body').append("<p>Title: " + myPlayList[6].title + "</p>");
$('body').append("<p>Artist: " + myPlayList[6].artist + "</p>");
$('body').append("<p>link: " + myPlayList[6].link + "</p>");
$('body').append("<img src=" + "https://t2.genius.com/unsafe/220x0/https%3A%2F%2Fimages.genius.com%2Fcccf9a3c9e260198ea622759e3f6c9ea.696x696x1.jpg>");

$('body').append("<p>Title: " + myPlayList[7].title + "</p>");
$('body').append("<p>Artist: " + myPlayList[7].artist + "</p>");
$('body').append("<p>link: " + myPlayList[7].link + "</p>");
$('body').append("<img src=" + "https://i.ytimg.com/vi/9tNw30-FNdc/maxresdefault.jpg>");

$('body').append("<p>Title: " + myPlayList[8].title + "</p>");
$('body').append("<p>Artist: " + myPlayList[8].artist + "</p>");
$('body').append("<p>link: " + myPlayList[8].link + "</p>");
$('body').append("<img src=" + "https://i.ytimg.com/vi/9tNw30-FNdc/maxresdefault.jpg>");

$('body').append("<p>Title: " + myPlayList[9].title + "</p>");
$('body').append("<p>Artist: " + myPlayList[9].artist + "</p>");
$('body').append("<p>link: " + myPlayList[9].link + "</p>");
$('body').append("<img src=" + "https://hiphopgrindtv.com/wp-content/uploads/2017/08/velous-flipmode-cover.jpg>");

$('body').append("<p>Title: " + myPlayList[10].title + "</p>");
$('body').append("<p>Artist: " + myPlayList[10].artist + "</p>");
$('body').append("<p>link: " + myPlayList[10].link + "</p>");
$('body').append("<img src=" + "https://images.genius.com/6f15505d8b36fafa3549ced734b2697a.1000x1000x1.jpg>");

$('body').append("<p>Title: " + myPlayList[11].title + "</p>");
$('body').append("<p>Artist: " + myPlayList[11].artist + "</p>");
$('body').append("<p>link: " + myPlayList[11].link + "</p>");
$('body').append("<img src=" + "https://i1.sndcdn.com/artworks-000234585376-9c5wqk-t500x500.jpg>");

$('body').append("<p>Title: " + myPlayList[12].title + "</p>");
$('body').append("<p>Artist: " + myPlayList[12].artist + "</p>");
$('body').append("<p>link: " + myPlayList[12].link + "</p>");
$('body').append("<img src=" + "https://images.genius.com/38a34a5b018c09f0dc9260ac60203cd8.493x494x1.png>");


  
  //for (var i = 0; i < myPlayList.length; i++){
  //	$('body').append("<p>Title: " + myPlayList[i].title + "</p>");
  //  $('body').append("<p>Artist: " + myPlayList[i].artist + "</p>");
  //  $('body').append("<p>link: " + myPlayList[i].link + "</p>");
  //  $('body').append("<p>imageUrl: " + myPlayList[i].imageUrl + "</p>");
  }
  
}

function clearList(){
  
  
  
}

function addSong(){
 
  
  
}
