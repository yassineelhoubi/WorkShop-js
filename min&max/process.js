

let array = [];
/* button */
let insert = document.getElementById("insert")

insert.onclick = function(){
    /* nbr=input value */
    let nbr = document.getElementById("input-number").value;
    /* push nbr value in array */
    array.push(nbr);
    console.log(array);
    /* print this value */
    document.getElementById("nbr-insert").innerHTML=array;
}

/* button */
let go = document.getElementById("go");
go.onclick=function(){
    
    /* process */
    var max = Math.max(...array);
    /* print the resut */
    document.getElementById("the-max").innerHTML = max;
    console.log(max)

    var min = Math.min(...array);
    document.getElementById("the-min").innerHTML = min;
    console.log(min);

}




