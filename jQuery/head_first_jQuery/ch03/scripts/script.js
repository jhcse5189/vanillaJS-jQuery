$(document).ready(function() {

    $(".guess_box").hover(
        function () {
            // mouseenter event-handler
            $(this).addClass("my_hover");
        },
        function () {
            // mouseleave event-handler
            $(this).removeClass("my_hover");
        }
    );

    $(".guess_box").click(checkForCode);

        // select 0 to 3
        function getRandom(number) {
            return Math.floor(Math.random() * number);
        };

        // hide discount code
        var hideCode = function() {
            var rdn = getRandom(4);
            $(".guess_box").each(function(index, value) {
                if (rdn == index) {
                    $(this).append("<span id='has_discount'></span>");
                    // for handling 'undefined' return value
                    // && exit loop
                    return false;
                }
            });
        }

        hideCode();
        function checkForCode() {

            var msg;
            // static method for jQuery library
            if ($.contains(this, document.getElementById("has_discount"))) {
                discount_rate = getRandom(100);
                msg = "<p>Discount rate is <strong>'"+ discount_rate + "'%</strong>!<p>";
            } else {
                msg = "<p>Sorry, no discount for this time!</p>";
            }

            $(".guess_box").each(function() {
                if ($.contains(this, document.getElementById("has_discount"))) {
                    $(this).addClass("discount");
                } else {
                    $(this).addClass("no_discount");
                }
                $(this).unbind();
            });
            
            $(this).append(msg);
        };
});