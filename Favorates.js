var favoriteList=document.getElementById("favoriteList");

var songs=JSON.parse(localStorage.getItem("favorites"))||[];

showFavorites();

function showFavorites(){

favoriteList.innerHTML="";

if(songs.length===0){

favoriteList.innerHTML="<h3 style='text-align:center'>No Favorites Yet</h3>";

return;

}

for(var i=0;i<songs.length;i++){

favoriteList.innerHTML+=

'<div class="card">'+

'<img src="'+songs[i].image+'">'+

'<div class="info">'+

'<h3>'+songs[i].title+'</h3>'+

'<p>'+songs[i].artist+'</p>'+

'</div>'+

'</div>';

}

}
