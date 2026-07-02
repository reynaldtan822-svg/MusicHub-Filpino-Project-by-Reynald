var playlistList=document.getElementById("playlistList");

var playlists=JSON.parse(localStorage.getItem("playlists"))||[];

showPlaylists();

function createPlaylist(){

var name=document.getElementById("playlistName").value;

if(name===""){

alert("Enter playlist name");

return;

}

playlists.push({

name:name,

songs:[]

});

localStorage.setItem("playlists",

JSON.stringify(playlists));

document.getElementById("playlistName").value="";

showPlaylists();

}

function showPlaylists(){

playlistList.innerHTML="";

if(playlists.length===0){

playlistList.innerHTML="<h3 style='text-align:center'>No Playlist</h3>";

return;

}

for(var i=0;i<playlists.length;i++){

playlistList.innerHTML+=

'<div class="card">'+

'<div class="info">'+

'<h3>'+playlists[i].name+'</h3>'+

'<p>'+playlists[i].songs.length+

' Songs</p>'+

'<button onclick="deletePlaylist('+i+')">Delete</button>'+

'</div>'+

'</div>';

}

}

function deletePlaylist(index){

playlists.splice(index,1);

localStorage.setItem("playlists",

JSON.stringify(playlists));

showPlaylists();

}
