$(document).ready(function(){
//creating function to get the data from api after the first select menu-1 is selected
    function getUserList(){
       // event.preventDefault()
        var countriesData=null
        var xhr = new XMLHttpRequest();
        xhr.open('GET','http://apilayer.net/api/list?access_key=4d98b72593c39a68b5185babdeaa7457');
        xhr.send()
        xhr.onload = function (){
            if(xhr.status==200){
                countriesData=JSON.parse(xhr.response)
                console.log(countriesData)
                saveList(countriesData)
              //  appendList()
                // return newdata
            }
            else{
                console.log("Error Code is:" + xhr.status)
            }
        }
//creating a call back function to store the list of all countries along with their values and append it in select menu
        function saveList(cnt){
            for(key in cnt.currencies){
                $('#onSelect1').append('<option value='+key+'>'+cnt.currencies[key]+'</option>')
                $('#onSelect2').append('<option value='+key+'>'+cnt.currencies[key]+'</option>')
            }
        }
    }
    getUserList()
 
//creating function in which value of select menu will be passed in input value
// to get the data from api after the select menu is selected
    function getUserData(input){
        event.preventDefault()
       // var a = $('#onSelect1').val()
        var userSelect1 = null
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'http://apilayer.net/api/live?access_key=4d98b72593c39a68b5185babdeaa7457&currencies=' + input + '&source=USD&format=1');
        xhr.send()
        xhr.onload = function () {
            if (xhr.status == 200) {
                userSelect1 = JSON.parse(xhr.response)
                //console.log(userSelect1)
                saveData(userSelect1)
            }
            else {
                console.log("Error Code is:" + xhr.status)
            }
        }
    }
    //on changing select options the value of currency with respect to USD will be stored 
    //in an arrarr arr using saveData call back function
    $('#onSelect1').change(function(){
         var a = $('#onSelect1').val()
          getUserData(a)
    })     
      $('#onSelect2').change(function(){
        var b = $('#onSelect2').val()
          getUserData(b)
      })
//creating a call back function to store the specific value(quotes object value which is currency value compared to USD) in an array i
    var arr=[]
    function saveData(imp){
        for(key in imp.quotes){
        arr.push(imp.quotes[key])
        }
    }      
  //creating function to convert our value into required currency 
    function convertor(){
        console.log(arr)
        var first = Number(arr[0])
        var second = Number(arr[1])
        var inputValue1 = $('#inputValue1').val()
        var result = (second / first) * Number(inputValue1)
        $('#inputValue2').val(result)
        console.log(result)
        arr = []
    }
    $('#submitButton').click(function(){
        convertor()
        $('#onSelect1').val('')
        $('#onSelect2').val('')
    })
});
