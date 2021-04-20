
const insert = document.getElementById("insert");
let str = [];

insert.onclick = function(){
    let namex = document.getElementById("name-input").value;

    let upp = namex.toUpperCase();
    str.push(upp);
    

    document.getElementById("result").innerHTML=str;
}

const order = document.getElementById("name-order");
order.onclick = function() {
    document.getElementById("result2").innerHTML= str.sort();
}
