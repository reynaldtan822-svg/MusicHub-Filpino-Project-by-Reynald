var play=true;

document.getElementById("play").onclick=function(){

if(play){

this.innerHTML="⏸";

}else{

this.innerHTML="▶";

}

play=!play;

};

var fav=document.querySelector(".extra button");

fav.onclick=function(){

var song={

title:document.getElementById("title").innerHTML,

artist:document.getElementById("artist").innerHTML,

image:document.getElementById("cover").src

};

var list=JSON.parse(localStorage.getItem("favorites"))||[];

list.push(song);

localStorage.setItem("favorites",JSON.stringify(list));

alert("Added to Favorites ❤️");

};
