$(document).ready(function(){
    var i = 0
    $("#dummy-btn").click(function(){
        i++
        if (i%2==0){
            $(this).css('background-color','red')
        }
        else{
            $(this).css('background-color','green')
        }
    })

})