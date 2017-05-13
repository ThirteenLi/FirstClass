alert(123);
var a=5;
var b=a;
b=6;
alert(a);
var obj1={
    name:"zhangsan",
    age:28
};
var obj2=obj1;
obj2.name="li\"sa";
alert(obj1.name);
if(undefined){
    console.log(true);
}
else{
    console.log(false);
}
console.log(typeof null);//最初沿用的错误
var oh1=document.getElementById("hh");
console.log(oh1);
console.log(typeof oh1);
console.log(oh1.id);
console.log(oh1.className);
var num=020;//八进制
var num1=0x12;//十六进制
console.log(num);
console.log(num1);
var aa=10;
console.log(aa.toString(2));//转字符串 加数字2变成2进制
var bb=10.5;
console.log(parseInt(bb));
console.log(parseFloat(bb));
