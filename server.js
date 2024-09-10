var fs =require('fs');
var os=require('os');
var user=os.userInfo();
console.log(user);
console.log(user.username);
fs.appendFile('greeting.txt','hi harsh \n',()=>{
    console.log("file created");
})