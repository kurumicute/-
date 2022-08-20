let username;
let username2;
let username3;

let age;
let date = new Date();
const day1 = String(date.getDate()).padStart(2, '0');
const day2 = String(date.getMonth() + 1).padStart(1, '0');
const day3 = date.getFullYear();
let age2
const result = document.getElementById("d4");

document.getElementById("d3").onclick = function(){

    username = document.getElementById("t1").value
    username2 = document.getElementById("t2").value
    username3 = document.getElementById("t3").value
    console.log(username)
    username = Number(username);
    username2 = Number(username2);
    username3 = Number(username3);
    age= ((day3 - username) * 31536000) + ((day2 - username2) * 1036800) + ((day1 - username3 + age2) * 86400);
    age2= Math.floor((2022 - username) / 4);
if(username >=2023){
    result.innerHTML = "未來人是把?";
}
else if(username <=1900){
    result.innerHTML = "你可以活那麼久?";
}
else if(age <0){
    result.innerHTML = "未來人是把?";
}
else{
    result.innerHTML = "你活了" + age + "秒";
}
}
document.getElementById("day").innerHTML = "目前日期:" + day3 + "年" + day2 + "月" + day1 + "日";
