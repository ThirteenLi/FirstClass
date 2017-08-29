/**
 * Created by sunqiyao on 2017/8/29.
 */
$(function(){
    $("#skin_1").on("click",function() {
        // console.log();
        $("#footer").css("background-color",$(this).css("background"));
    });
});