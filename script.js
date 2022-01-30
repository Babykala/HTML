//1.Create Request Object
var request= new XMLHttpRequest();
//2. open my request connection
request.open('GET','https://restcountries.com/v2/all?fields=name,capital,currencies,flag')
//3. Sending a request
request.send();
//4.Data after response
request.onload=function(){
    //console.log(this.response)
var data=JSON.parse(this.response);

//var region=data.filter(data=>data.region=='Asia')
//var population=data.filter(data=>data.population<200000)
//data.forEach(element =>console.log(element.name,element.capital))
//console.log(data[0].currencies)
console.log(data);


}
