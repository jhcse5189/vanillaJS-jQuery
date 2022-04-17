$(document).ready(function(){

    const FREQ = 10000;
    let repeat = true;

    let Participant = function(name, gender, time) {
        this.name = name;
        this.gender = gender;
        this.time = time;
    }

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
                // prevent duplicated records
                $("#records_m").empty();
                $("#records_f").empty();
                $("#records_all").empty();

                let participants = [];

                // parse XML
                $(xml).find("participant").each(function(){

                    var n = $(this).find("name").text();
                    var g = $(this).find("gender").text();
                    var t = parseInt($(this).find("time").text());

                    let p = new Participant(n, g, t);
                    participants.push(p);
                });

                // to use sorted append
                participants.sort(function(a, b){

                    if (a.time == b.time)
                        return a.name < b.name ? -1 : (a.name > b.name ? 1 : 0);
                
                    return a.time - b.time;
                });

                $.each(participants, function(key, value){
    
                    var n = participants[key]["name"];
                    var g = participants[key]["gender"];
                    var t = participants[key]["time"];

                    // time parsing
                    var m = Math.floor(t / 60);
                    var s = t % 60;

                    if (m.toString().length == 1) { m = "0" + m; }
                    if (s.toString().length == 1) { s = "0" + s; }

                    // sorted append
                    if (g == "m") {
                        var idx = ($("#records_m").children().length + 1).toString();
                        var info = `<li>${idx}. ${n} (${m}:${s})</li>`;
                    
                        $("#records_m").append(info);
                    } else if (g == "f") {
                        var idx = ($("#records_f").children().length + 1).toString();
                        var info = `<li>${idx}. ${n} (${m}:${s})</li>`;
                    
                        $("#records_f").append(info);
                    }

                    var idx = ($("#records_all").children().length + 1).toString();
                    var info = `<li>${idx}. ${n} (${m}:${s})</li>`;
                
                    $("#records_all").append(info);
                });
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
