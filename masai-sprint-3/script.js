var sData=document.querySelector('#btn1')
function getUserData(){
  event.preventDefault()
//   var newdata=null
//   var sd=document.querySelector('.myselect').value
  var xhr = new XMLHttpRequest(); 
  xhr.open('GET','http://apilayer.net/api/live?access_key=4d98b72593c39a68b5185babdeaa7457&currencies=INR&source=USD&format=1');
  xhr.send()
  xhr.onload = function (){
    if(xhr.status==200){
       newdata=JSON.parse(xhr.response)
    //   printUserData(newdata)
      console.log(newdata)
    }
    else{
      console.log("Error Code is:" + xhr.status)
    }
  }
  alert('botton')
}
sData.addEventListener('click',getUserData)