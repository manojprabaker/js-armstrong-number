function armstrong(){
var num=parseInt(prompt("Enter a Number"));
 a=num%10;
 b=parseInt(num/10);
 b1=b%10;
 c=parseInt(b/10);
 a=a**3;
 b1=b1**3;
 c=c**3;
 check=a+b1+c;
 if(check==num)
 {
   console.log("Number is Armstrong Number");	 
 }
 else
 {
  console.log("Number is not an Armstrong Number");
 }
}
armstrong();