const fs = require('fs')
const path = require('path')// both required and requiring name should be same.
const html = path.join(__dirname, 'html')
const php = path.join(__dirname, 'php')

for (i=1;i<=5;i++){
    fs.writeFileSync(html+'/new'+i+".html","<h1>THIS IS HTML FILE</h1>")
    fs.writeFileSync(php+'/new'+i+".php","<?php echo('RAJJO'S PHP')?>")
}
fs.readFile(`${html}/new1.html`,'utf8',(err,item)=>{
    if (err) {console.log("THE ERROR IS",err)
     }
    else{
        console.log(item)
    }
    })
    fs.appendFile(`${php}/new1.php`,"THIS IS A PHP FILE",(err,item)=>{
        if(!err) console.log("UPDATED")
    })
fs.rename(`${html}/new2.html`,"rajjo2.html",(err)=>{
    if (!err){
        console.log("RENAMED!!")
    }
})
fs.unlink(`${html}/new3.html`,(err)=>{
    if(!err){
        console.log("DELETED!!")
    }
})