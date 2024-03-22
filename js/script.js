


document.addEventListener('DOMContentLoaded', function () {
    let closedHeight = 35; // Height of closed accordion
    let speedClose = 500; // Time of the closing animation in ms
    let speedOpen = 500; // Time of the opening animation in ms
    let acc = "#lingulo-accordion"; // Accordion Container
    let elem = "h3"; // Accordion trigger element
    let old = null;
    $(acc + " > div " + elem + ":first-child").click(function()
    {
        let i = $(this).parent().index();
        if(old !== i)
        {
            $(acc + " > div:eq(" + old + ")").animate({height:closedHeight + "px"},speedClose);
            let curHeight = $(acc + " > div:eq(" + i + ")").height();
            let autoHeight = $(acc + " > div:eq(" + i + ")").css('height', 'auto').height();
            $(acc + " > div:eq(" + i + ")").height(curHeight).animate({ height: autoHeight }, speedOpen, function()
            {
                $(acc + " > div:eq(" + i + ")").css('height', 'auto');
            });
            $(acc + " > div:eq(" + i + ")").animate({height:"auto"});
            old = i;
        }        
        else
        {
            $(acc + " > div:eq(" + old + ")").animate({height:closedHeight + "px"});
            old = null;
        }        
    });



    $("#corresponde").click(function(){
        $("#result-cashback").empty();
        
        if($("#fecha-inicio").val()>15 || $("#fecha-fin").val()<=15){
            $("#result-cashback").css("background-color", "green");
            $("#result-cashback").append("SI");
            
            return;
        }
        $("#result-cashback").css("background-color", "red");
        $("#result-cashback").append("NO");
        return;
        





    });
});

