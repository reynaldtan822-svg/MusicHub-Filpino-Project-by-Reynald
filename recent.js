var recent = JSON.parse(localStorage.getItem("recentSongs")) || [];

var list = document.getElementById("recentList");

list.innerHTML = "";

if(recent.length == 0){

    list.innerHTML = "<h3>No Recently Played</h3>";

}

for(var i=0;i<recent.length;i++){

    var item = recent[i];

    list.innerHTML +=

    '<div class="card">'+

    '<img src="'+item.snippet.thumbnails.medium.url+'">'+

    '<div class="info">'+

    '<h3>'+item.snippet.title+'</h3>'+

    '<p>'+item.snippet.channelTitle+'</p>'+

    '</div>'+

    '</div>';

}
