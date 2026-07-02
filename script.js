//const API_KEY = "AIzaSyCRNstiZBF60oTLoy6XCNEc2LqiVcO7oww";
var songs=[

{

title:"Shape of You",

artist:"Ed Sheeran",

image:"https://i.imgur.com/J5LVHEL.jpeg"

},

{

title:"Believer",

artist:"Imagine Dragons",

image:"https://i.imgur.com/BxR5qEl.jpeg"

},

{

title:"Perfect",

artist:"Ed Sheeran",

image:"https://i.imgur.com/J5LVHEL.jpeg"

},

{

title:"Pasilyo",

artist:"SunKissed Lola",

image:"https://i.imgur.com/Vf7v5Vf.jpeg"

}

];

var music=document.getElementById("musicList");

showSongs(songs);

function showSongs(list){

music.innerHTML="";

for(var i=0;i<list.length;i++){

music.innerHTML+=

'<div class="card">'+

'<img src="'+list[i].image+'">'+

'<div class="info">'+

'<h3>'+list[i].title+'</h3>'+

'<p>'+list[i].artist+'</p>'+

'<button class="play">Play</button>'+

'</div>'+

'</div>';

}

}

document.getElementById("search").onkeyup=function(){

var keyword=this.value.toLowerCase();

var result=[];

for(var i=0;i<songs.length;i++){

if(

songs[i].title.toLowerCase().indexOf(keyword)>-1 ||

songs[i].artist.toLowerCase().indexOf(keyword)>-1

){

result.push(songs[i]);

}

}

showSongs(result);

};

function toast(msg){

var t=document.getElementById("toast");

t.innerHTML=msg;

t.style.display="block";

setTimeout(function(){

t.style.display="none";

},2000);

}

var miniPlaying=false;

document.getElementById("miniPlay").onclick=function(){

miniPlaying=!miniPlaying;

this.innerHTML=miniPlaying?"⏸":"▶";

};

function updateMiniPlayer(title,artist,image){

document.getElementById("miniTitle").innerHTML=title;

document.getElementById("miniArtist").innerHTML=artist;

document.getElementById("miniCover").src=image;

//updateMiniPlayer(title,artist,image);
}

document.getElementById("discoverBtn").onclick=function(){

toast("🎵 Explore Trending Music");

};

if("serviceWorker" in navigator){

window.addEventListener("load",function(){

navigator.serviceWorker.register("sw.js");

});

}
