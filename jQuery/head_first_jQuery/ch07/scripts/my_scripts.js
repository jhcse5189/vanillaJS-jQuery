$(document).ready(function(){
    var clix = [0, 0, 0, 0];
    var w = 367; // width of monster mashup img pieces
    var m = 10; // 
    var int1, int2, int3;

    goLightning();
    window.onblur = stopLightning;
    window.onfocus = goLightning;

    $("#btnRandom").click(() => {
        randomize();
    });
    $("#btnReset").click(() => {
        reset();
    });

    $("#head").click(function() {
        //$.fx.off = true;
        moveMe(0, this);
    });
    $("#eyes").click(function() {
        moveMe(1, this);
    });
    $("#nose").click(function() {
        moveMe(2, this);
    });
    $("#mouth").click(function() {
        moveMe(3, this);
    });

    function getRandom(n) {
        return Math.floor(Math.random() * n);
    }

    function randomize() {
        $(".face").each(function(index) {
            var target_position = getRandom(m);
            var current_position = clix[index];

            var name = $(this).attr('id');
            console.log(`\t${name}'s rnd & cur: ${target_position}, ${current_position}`);

            /* can move right only */
            /*
            // move 9 - current_position & reset & move 9 - c - t
            if (current_position + target_position > 9) {
                var moveToEnd = (9 - current_position) * w;
                var moveRemains = (target_position - 9 + current_position - 1) * w;
                $(this).animate({left: `-=${moveToEnd}px`}, 166);
                $(this).animate({left: "0px"}, 166);
                $(this).animate({left: `-=${moveRemains}px`}, 166);

                clix[index] = (current_position + target_position) % 10;
            } else {
                var moveTo = target_position * w;
                $(this).animate({left: `-=${moveTo}px`}, 500);

                clix[index] += target_position;
            }
            */

            /* can move right or left */
            clix[index] = target_position;
            if (current_position < target_position) {
                var moveTo = (target_position - current_position) * w;
                $(this).animate({left: `-=${moveTo}px`}, 500);
            } else if (target_position < current_position) {
                var moveTo = (current_position - target_position) * w;
                $(this).animate({left: `+=${moveTo}px`});
            } else {
                // do nothing
            }

            console.log(`${name}'s clix[idx]: ${clix[index]}`);
        });
    }

    function reset() {
        $(".face").each(function(index) {
            clix[index] = 0;
            $(this).animate({left: "0px"}, 500);
        });
    }

    function moveMe(i, obj) {
        if (clix[i] < 9) {
            // img animate.
            $(obj).animate({left: `-=${w}px`}, 500);
            clix[i] += 1;
        } else {
            // img reset.
            $(obj).animate({left: "0px"}, 500);
            clix[i] = 0;
        }
    }
});//end doc.onready function

function lightning_one(t) {
    $("#lightning1").fadeIn(250).fadeOut(250);
}

function lightning_two(t) {
    $("#lightning2").fadeIn(250).fadeOut(250);
}

function lightning_three(t) {
    $("#lightning3").fadeIn(250).fadeOut(250);
}

function stopLightning() {

}

function goLightning() {
    int1 = setInterval(function() {lightning_one()}, 4000);
    int2 = setInterval(function() {lightning_two()}, 5000);
    int3 = setInterval(function() {lightning_three()}, 7000);
}

function stopLightning() {
    window.clearInterval(int1);
    window.clearInterval(int2);
    window.clearInterval(int3);
}