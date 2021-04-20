/* radio button */
const single = document.getElementById("single");
const married = document.getElementById("married");

/* div class="nombre-of-child" */
const div_nthchild = document.querySelector(".nombre-of-child");

/* button to confirm the number of children */
const btn_sub = document.getElementById("btn-sub");

/* div class="child-age-list" */
const list_child = document.querySelector(".child-age-list");

/* process without children*/
document.getElementById("salary").onkeyup = function () {
    salary = parseInt(document.getElementById("salary").value);
    console.log(salary);
    calc = salary * (15 / 100)
    net_salary = salary - calc
    document.getElementById("print-salary").innerHTML = net_salary +' DH';
}


/* if single */
single.onclick = function () {
    div_nthchild.style.display = "none";
    list_child.innerHTML = "";
    document.getElementById("print-salary").innerHTML = net_salary +' DH';

}
/* if married */
married.onclick = function () {
    div_nthchild.style.display = "block";
}
/* fill out the div */
btn_sub.onclick = function () {
    var nthchild = document.getElementById("nthchild").value;

    list_child.innerHTML = "";
    for (i = 1; i <= nthchild; i++) {
        list_child.innerHTML += "<div><input min='0' type='number' class='inpt-age' id='child-age" + i + "' placeholder='child age " + i + "'> <input class='percentage' placeholder='Y'  readonly></div> <br>";

    }
}
function between(x, min, max) {
    return x >= min && x < max
}
list_child.addEventListener('keyup', e => {

    let bonus = document.querySelectorAll('.percentage')

    let finalSalary = net_salary

    if (e.target.matches('.inpt-age')) {
        let inp = e.target
        let age = parseInt(inp.value)
        let bonus = inp.parentElement.querySelector('.percentage')

        if (between(age, 0, 5)) {
            bonus.value = salary * .03

        } else if (between(age, 5, 12)) {

            bonus.value = salary * .05
        } else if (between(age, 12, 25)) {

            bonus.value = salary * .07
        } else {
            bonus.value = 0
        }
    }

    Array.from(bonus).forEach(input => {
        if (isNaN(input.value) || input.value === '') {
            input.value = 0
        }
        finalSalary += parseInt(input.value)
    })

    document.getElementById("print-salary").innerHTML = finalSalary +' DH'
})