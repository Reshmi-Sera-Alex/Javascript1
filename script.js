
var num= window.prompt("Enter a number")
document.write("Entered number:"+num)
console.log(num);

let sum=0;
total=0
if(num>0 && num<=10000000)
{
 for(i=0;i<num;i++)
{
     sum+=1;
     total+=sum;
}
 console.log("sum"+sum)

 console.log("total:" +total)

 document.write("<br/>Sum of the numbers up to " +num)
 document.write("&nbsp is :"+total)
}
else{
 alert("The number is invalid")
}