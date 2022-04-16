$(document).ready(function(){

    const FREQ = 10000;
    let repeat = true;

    function showFrequency() {
        $("#freq").html("Page refreshes every " + FREQ/1000 + " second(s).");
    }

    function startAJAXcalls() {
        if (repeat) {
            setTimeout(function() {
                getXMLPaticipants();
                getTime();
                startAJAXcalls();
            }, FREQ);
        }
    }

    function getXMLPaticipants() {
        $.ajax({
            url: "records.xml",
            cache: false, // deny browser cache
            dataType: "xml",
            success: function(xml) {
                // TODO : parse XML
                console.log(xml);
            }
        });
    }

    function getTime() {
        var d = new Date();

        var curr_hour = d.getHours().toString();
        var curr_min = d.getMinutes().toString();
        var curr_sec = d.getSeconds().toString();

        if (curr_hour.length == 1) { curr_hour = "0" + curr_hour; }
        if (curr_min.length == 1) { curr_min = "0" + curr_min; }
        if (curr_sec.length == 1) { curr_sec = "0" + curr_sec; }

        $("#updatedTime").html("Last Updated : " + curr_hour + ":" + curr_min + ":" + curr_sec);
    }

    $("#btnStart").click(function(){
        if (!repeat) { // prevent unwanted AJAXcall
            repeat = true;
            startAJAXcalls();
            showFrequency();
        }
    });

    $("#btnStop").click(function(){
        repeat = false;
        $("#freq").html("Update paused.");
    });

    showFrequency();
    getXMLPaticipants();
    getTime();
    startAJAXcalls();
});
