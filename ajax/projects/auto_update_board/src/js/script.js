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
                console.log(xml);
            }
        });
    }

    $("#btnStart").click(function(){
        showFrequency();
    });

    $("#btnStop").click(function(){
        $("#freq").html("Update paused.");
    });

    showFrequency();
    getXMLPaticipants();
    startAJAXcalls();
});
