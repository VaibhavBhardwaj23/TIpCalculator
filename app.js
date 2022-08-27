const amt = document.getElementById("bill");
const peep = document.getElementById("peoples");
const btn= document.querySelectorAll(".btnopt");
const tipa = document.getElementById("tip")
const tota = document.getElementById("total")
const rest= document.querySelector(".Reset")
const cust= document.querySelector(".custom")
let tipsum
let totsum
let i=0

  function tipcalculate()
  {
    tipsum= (amt.value * btn[i].value)/peep.value
    tipsum=tipsum.toFixed(2)
    tipa.innerHTML=tipsum;
  }

  function totcalculate()
  {
    totsum=(Number (amt.value)+Number(amt.value * btn[i].value))/Number(peep.value);
    totsum= totsum.toFixed(2)
    tota.innerHTML=totsum;
  }
btn[0].addEventListener("click",()=>
{
  i=0
  tipcalculate();
  totcalculate();
})
btn[1].addEventListener("click",()=>
{
  i=1
  tipcalculate();
  totcalculate();
})
btn[2].addEventListener("click",()=>
{
  i=2
  tipcalculate();
  totcalculate();
})
btn[3].addEventListener("click",()=>
{
  i=3
  tipcalculate();
  totcalculate();
})
btn[4].addEventListener("click",()=>
{
  i=4
  tipcalculate();
  totcalculate();
})


rest.addEventListener("click",()=>
{
  amt.value="";
  peep.value="";
  tipa.innerHTML="00.00";
  tota.innerHTML="00.00";
  console.log("HEllo")
})