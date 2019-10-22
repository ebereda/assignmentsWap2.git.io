function calcTip(){

    var t=document.getElementById('total');
    var totalE=document.getElementById('subtotal');
    var tip=document.getElementById('tip');

    var answer=(1+tip.value/100)*totalE.value;
    t.innerHTML='$' + answer;
}
//
// function  boo1() {
//     alert("Booyah");
//     setTimeout(boo1,2000)
//
// }
// function  boo2() {
//     alert("Booyah");
//     setTimeout(boo1(),2000)
//
// }