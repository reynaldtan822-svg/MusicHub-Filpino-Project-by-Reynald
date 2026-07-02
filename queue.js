var queue = JSON.parse(localStorage.getItem("queue")) || [];

function saveQueue(list){

    queue = list;

    localStorage.setItem("queue", JSON.stringify(queue));

}

function getQueue(){

    return queue;

}

function addQueue(song){

    queue.push(song);

    localStorage.setItem("queue", JSON.stringify(queue));

}

function clearQueue(){

    queue = [];

    localStorage.removeItem("queue");

}
