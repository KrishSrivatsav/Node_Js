var arr1 = [];
var arr2 = [];
var p1p = [];
var p2p = [];
var count1 = 0;
var count2 = 0;
var balls = 18;
var p1 = 5;
var p2 = 5;
var totscore;

function Team1() {
    var s = Math.floor(Math.random() * 7);
    document.getElementById("yellow").innerText = s;
    count1++

    arr1.push(s);
    console.log(arr1);
    if (s == 0) {
        alert("wicket");
        p1 = p1 + 1;
    }
    if (count1 == 18) {
        alert("Game over");
    }
    if(count2 == 0 && count2 >18){
        document.getElementById("bt2").disabled = true;

    }
   

    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    const t = arr1.reduce(reducer);
    console.log(t);

    localStorage.setItem("cricket", t);
}

function Team2() {
    var i = Math.floor(Math.random() * 7);
    document.getElementById("blue").innerHTML = i;
    count2++;

    arr2.push(i);
    console.log(arr2);
    if (i == 0) {
        alert("wicket");
        p2 = p2 + 1;
    }
    if (count2 == 18) {
        alert("Game over");

    }
    if(count1 == 0 && count1 < 18){
        document.getElementById("bt1").disabled = false;

    }
    
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    const v = arr2.reduce(reducer);
    console.log(v);

    localStorage.setItem("match", v);

}
function result() {
    window.location.href = "cric.html";
}
