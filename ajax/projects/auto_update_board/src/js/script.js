$(document).ready(function(){

    function showFrequency() {
        $("#freq").html("Page refreshes every 10 second(s).");
    }

    $("#btnStart").click(function(){
        showFrequency();
    });

    $("#btnStop").click(function(){
        $("#freq").html("Update paused.");
    });

    showFrequency();
});
