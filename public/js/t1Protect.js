$(document).ready(function(){
    var first = $(".firstNum")
    if(first.value != first.defaultValue){
        var localData = JSON.parse(localStorage.getItem("myData"));
        $.each(localData, function(index, value){
            var id = "first"+(index+1);
            $(id).empty();
            $(sumCol).append(value[0]);               
        });
    }
});