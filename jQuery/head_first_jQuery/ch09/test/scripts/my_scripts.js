$(document).ready(function() {

    function getDBRows() {
        $.getJSON("input.php?action=getDB", function(json) {
            if (json.db.length > 0) {
                $("#display_ul").empty();
                $.each(json.db, function() {
                    var info = `<li>${this["msg"]}</li>`
                    $("#display_ul").append(info);
                    
                });
            }
        });
    }

    getDBRows();
});
