document.addEventListener("DOMContentLoaded", () => {

const form = document.querySelector("form");

form.addEventListener("submit", function(e){

e.preventDefault();

const year = document.querySelectorAll("select")[0].value;
const cls = document.querySelectorAll("select")[1].value;
const exam = document.querySelectorAll("select")[2].value;
const roll = document.querySelector("input").value;

if(roll==""){
alert("রোল নম্বর লিখুন");
return;
}

alert(
"রেজাল্ট খোঁজা হচ্ছে...\n\n" +
"শিক্ষাবর্ষ: "+year+
"\nশ্রেণি: "+cls+
"\nপরীক্ষা: "+exam+
"\nরোল: "+roll
);

});

});
