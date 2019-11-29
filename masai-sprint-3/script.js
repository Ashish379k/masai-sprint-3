$(document).ready(function(){
    //creating function to get the data from api after the first select menu-1 is selected
    function getUserList(){
        event.preventDefault()
        var newdata3=null
        var xhr = new XMLHttpRequest();
        xhr.open('GET','http://apilayer.net/api/list?access_key=4d98b72593c39a68b5185babdeaa7457');
        xhr.send()
        xhr.onload = function (){
            if(xhr.status==200){
                newdata3=JSON.parse(xhr.response)
                console.log(newdata3)
                saveList(newdata3)
                // return newdata
            }
            else{
                console.log("Error Code is:" + xhr.status)
            }
        }
//creating a call back function to store the list of all countries along with their values. 
        function saveList(cnt){
            for(key in cnt.currencies){
                valArr.push(key)
                cntArr.push(cnt.currencies[key])
            }
        }
         console.log(valArr)
         console.log(cntArr)
    }
//creating a keyup function if input box1 is filled up select menu will get updated from the api
    var valArr=[]
    var cntArr=[]
    $('#value1').keyup(function(){
        var inval=$('#value1').val()
        if(inval.length!=0)
        getUserList()
        for(var i=0;i<valArr.length;i++){
            var listd=document.createElement('option')
                listd.innerHTML=cntArr[i]
                listd.setAttribute('value',valArr[i])
                var s=document.querySelector('.myselect1')
               // var t=document.getElementById('myselect2')
                s.appendChild(listd)
               // t.appendChild(listd)
            }
        for(var i=0;i<valArr.length;i++){
                var listd=document.createElement('option')
                listd.innerHTML=cntArr[i]
                listd.setAttribute('value',valArr[i])
               // var s=document.getElementById('myselect1')
                var t=document.querySelector('.myselect2')
               // s.appendChild(listd)
                t.appendChild(listd)
            }
           // alert('valuerec')
        })
//creating function to get the data from api after the first select menu is selected
      function getUserData1(){
          event.preventDefault()
          var a=$('.myselect1').val()
          var newdata1=null
          var xhr = new XMLHttpRequest();
          xhr.open('GET','http://apilayer.net/api/live?access_key=4d98b72593c39a68b5185babdeaa7457&currencies='+a+'&source=USD&format=1');
          xhr.send()
          xhr.onload = function (){
              if(xhr.status==200){
                  newdata1=JSON.parse(xhr.response)
                  
                console.log(newdata1)
                saveData(newdata1)
                  // return newdata
                     
              }
              else{
                  console.log("Error Code is:" + xhr.status)
              }
          }
      }
      $('.myselect1').change(function(){
          getUserData1()
          
      })
      
//creating function to get the data from api after the second select is selected
      function getUserData2(){
          event.preventDefault()
          var b=$('.myselect2').val()
          var newdata2=null
          var xhr = new XMLHttpRequest();
          xhr.open('GET','http://apilayer.net/api/live?access_key=4d98b72593c39a68b5185babdeaa7457&currencies='+b+'&source=USD&format=1');
          xhr.send()
          xhr.onload = function (){
              if(xhr.status==200){
                  newdata2=JSON.parse(xhr.response)
                  
                 console.log(newdata2)
                   saveData(newdata2)
                     
              }
              else{
                  console.log("Error Code is:" + xhr.status)
              }
          }
      }
      $('.myselect2').change(function(){
          getUserData2()
      })
      
     
    
     //console.log(arr)

   //creating function to convert our value into required currency 
     function convertor(){
         var first=Number(arr[0])
         var second=Number(arr[1])

         var inputValue1=$('#value1').val()

         var result=(second/first)*Number(inputValue1)
         $('#value2').val(result)
         arr=[]
      }

      $('#btn1').click(function(){
          convertor()
          $('.myselect1').val('')
          $('.myselect2').val('')
      })
    

    

 //creating a call back function to store the specific value(quotes object value) 
        var arr=[]
        function saveData(imp){
         for(key in imp.quotes){
             arr.push(imp.quotes[key])
         }
        }

     
    
           
        

       
  });