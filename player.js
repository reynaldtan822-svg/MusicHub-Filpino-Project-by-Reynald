var queue = JSON.parse(localStorage.getItem("queue")) || [];

var currentIndex = 0;

var data=JSON.parse(

localStorage.getItem("currentVideo")

);

for(var i=0;i<queue.length;i++){

    if(queue[i].id.videoId == data.id.videoId){

        currentIndex = i;

        break;

    }

}

var player;

function onYouTubeIframeAPIReady(){

player = new YT.Player('player',{

height:'250',

width:'100%',

videoId:data.id.videoId,

playerVars:{

'autoplay':1,

'rel':0

},

events:{

'onStateChange':onPlayerStateChange

}

});

}

var recent = JSON.parse(localStorage.getItem("recentSongs")) || [];

recent.unshift(data);

if(recent.length > 20){

    recent.pop();

}

localStorage.setItem("recentSongs", JSON.stringify(recent));

document.getElementById("playlistBtn").onclick = function(){

    var playlists = JSON.parse(localStorage.getItem("playlists")) || [];

    if(playlists.length == 0){

        alert("Create a playlist first.");

        return;

    }

    playlists[0].songs.push(data);

    localStorage.setItem("playlists", JSON.stringify(playlists));

    alert("Added to Playlist!");

};

document.getElementById("nextBtn").onclick=function(){

    if(currentIndex < queue.length-1){

        currentIndex++;

        localStorage.setItem(

        "currentVideo",

        JSON.stringify(queue[currentIndex])

        );

        location.reload();

    }

}

document.getElementById("prevBtn").onclick=function(){

    if(currentIndex > 0){

        currentIndex--;

        localStorage.setItem(

        "currentVideo",

        JSON.stringify(queue[currentIndex])

        );

        location.reload();

    }

}

function onPlayerStateChange(event){

if(event.data==YT.PlayerState.ENDED){

playNextSong();

}

}

function playNextSong(){

var queue=

JSON.parse(localStorage.getItem("queue"))||[];

var current=

JSON.parse(localStorage.getItem("currentVideo"));

for(var i=0;i<queue.length;i++){

if(queue[i].id.videoId==current.id.videoId){

if(i<queue.length-1){

localStorage.setItem(

"currentVideo",

JSON.stringify(queue[i+1])

);

location.reload();

}

break;

}

}

}

setInterval(function(){

if(player && player.getCurrentTime){

var current=player.getCurrentTime();

var total=player.getDuration();

if(total>0){

document.getElementById("progressBar").value=

(current/total)*100;

document.getElementById("currentTime").innerHTML=

formatTime(current);

document.getElementById("duration").innerHTML=

formatTime(total);

}

}

},500);

function formatTime(sec){

sec=Math.floor(sec);

var min=Math.floor(sec/60);

var s=sec%60;

if(s<10){

s="0"+s;

}

return min+":"+s;

}

document.getElementById("volumeBar").oninput=function(){

if(player){

player.setVolume(this.value);

}

};

document.getElementById("progressBar").oninput=function(){

if(player){

var total=player.getDuration();

player.seekTo(

(this.value/100)*total,

true

);

}

};

document.getElementById("speedSelect").onchange=function(){

if(player){

player.setPlaybackRate(

parseFloat(this.value)

);

}

};

var fav=document.getElementById("favBtn");

if(fav){

fav.onclick=function(){

this.classList.toggle("active");

};
}

var share=document.getElementById("shareBtn");

if(share){

share.onclick=function(){

if(navigator.share){

navigator.share({

title:data.snippet.title,

text:data.snippet.channelTitle,

url:"https://youtu.be/"+data.id.videoId

});

}else{

alert("Sharing is not supported on this browser.");

}

};
}
