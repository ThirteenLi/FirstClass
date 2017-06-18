/**
 * Created by a on 2017/6/11.
 */
(function(){
    var oProduct=document.getElementById("product"),
        aAdd=oProduct.getElementsByTagName("button"),
        aInput=oProduct.getElementsByTagName("input"),
        aP=oProduct.getElementsByTagName("p");
    var aPrice=[];
    for(var p in aP){
        if(aP[p].className=="price"){
            aPrice.push(aP[p]);
        }
    }
    //console.log(aPrice);
   // console.log(aAdd);
   // console.log(oProduct);
   // console.log(aInput);
    var oCart=document.getElementById("cart"),
        aH5=oCart.getElementsByTagName("h5")[0];
    var oCartHA=oCart.getElementsByTagName("a")[0];
    //console.log(oCartHA.innerHTML);
    for(var i=0;i<aAdd.length;i++){
        aAdd[i].index=i;
        aAdd[i].onclick=function(){
        oCartHA.innerHTML=parseFloat(aInput[this.index].value)*parseFloat(aPrice[this.index].innerHTML)+parseFloat(oCartHA.innerHTML);
            console.log(123);
        };
    }
    aH5.onclick= function () {
        oCartHA.innerHTML="0.00";
    };
})();//函数立即调用