$(document).ready(function() {
    $("div.switch button").click(function(){
        $("div.switch button").toggleClass("on");
        $("div.switch button").toggleClass("off");

        $("body").toggleClass("light");
        $("body").toggleClass("dark");

        if ($("body").hasClass("light")) {$("h1.status").text("It's so bright in here!");}
        else {$("h1.status").text("Hey, who turned off the lights?");}
    });
});
