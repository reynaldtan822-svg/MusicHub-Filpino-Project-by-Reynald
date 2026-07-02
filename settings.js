function toggleTheme(){

document.body.classList.toggle("light");

localStorage.setItem(

"theme",

document.body.className

);

}

window.onload=function(){

var t=localStorage.getItem("theme");

if(t){

document.body.className=t;

}

}

function clearFavorites(){

localStorage.removeItem("favorites");

alert("Favorites Cleared");

}

function clearPlaylists(){

localStorage.removeItem("playlists");

alert("Playlists Cleared");

}
