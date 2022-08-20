let userage;
let userage2;
let userage3;

let age;
let date = new Date();
const day1 = String(date.getDate()).padStart(2, '0');
const day2 = String(date.getMonth() + 1).padStart(1, '0');
const day3 = date.getFullYear();
let age2;
const result = document.getElementById("d4");

document.getElementById("d3").onclick = function(){

    userage = document.getElementById("t1").value
    userage2 = document.getElementById("t2").value
    userage3 = document.getElementById("t3").value
    console.log(userage)
    userage = Number(userage);
    userage2 = Number(userage2);
    userage3 = Number(userage3);
    age= ((day3 - userage) * 31536000) + ((day2 - userage2) * 1036800) + ((day1 - userage3 + age2) * 86400); //年齡轉秒公式
    age2= Math.floor((day3 - userage) / 4);
if(userage <=1900){ //當西元年小於1900 轉換文字
    result.innerHTML = "你可以活那麼久?";
}
else if(age <0){ //當轉換出來的秒數小於0
    result.innerHTML = "未來人是把?";
}
else{
    result.innerHTML = "你活了" + age + "秒";
}
}
document.getElementById("day").innerHTML = "目前日期:" + day3 + "年" + day2 + "月" + day1 + "日";
