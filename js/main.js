$(function() {
    $(".toggleButton").hover(function() {
        $(this).css("background-color","grey");
    }, function () {
        $(this).css("background-color","#EDEDED")
    });
});

$(function () {
    $("#html").click(function () {
        $(".html").toggle("slide");
    });
});

$(function () {
    $("#css").click(function () {
        $(".css").toggle("slide");
    });
});

$(function () {
    $("#javascript").click(function () {
        $(".javascript").toggle("slide");
    });
});

$(function () {
    $("#output").click(function () {
        $(".output").toggle("slide");
    });
});

$(function () {
    $("textarea").height($(window).height() - $("#header").height());

});


$(function () {
    $("textarea").on('Change keyup paste',function () {
        $("#code-output").contents().find("html").html("<html><head><style type='text/css'>" + $("#csstextarea").val() + "</style></head><body>" + $("#htmltextarea").val() + "</body></html>");
        document.getElementById("code-output").contentWindow.eval($("#jstextarea").val());

    });

});







