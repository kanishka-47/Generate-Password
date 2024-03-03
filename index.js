(function(){
  let btn=document.querySelector(".btn");
  let passwordbox=document.querySelector(".password");
  let length=12;
  let uppercase= "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let lowercase="abcdefghijklmnopqrstuvwxyz";
  let number="0123456789";
  let symbol="@#$%^&*()<>?/-=|*";
  let allchar="uppercase+lowercase+number+symbol";
  btn.addEventListener("click",()=>{
    let password="";
    password+=uppercase[Math.floor(Math.random()*uppercase.length)];
    password+=lowercase[Math.floor(Math.random()*lowercase.length)];
    password+=number[Math.floor(Math.random()*number.length)];
    password+=symbol[Math.floor(Math.random()*symbol.length)];
    while(length>password.length){
         password+=allchar[Math.floor(Math.random()*allchar.length)];
     }
    passwordbox.value=password;
  })
})()
