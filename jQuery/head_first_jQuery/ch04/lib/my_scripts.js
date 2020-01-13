$(document).ready(function() {
    var v = false;
    
    $("button#vegOn").click(function() {
        if (v == false) {
            $f = $("li.fish").parent().parent().detach();
            $("li.hamburger").replaceWith("<li class='portobello'><em>Portobello Mushroom</em></li>");
            $("li.meat").after("<li class='tofu'>Tofu</li>");
            $("li.tofu").parent().parent().addClass("veg_leaf");
            $m = $("li.meat").detach();
            v = true;
        }
    });
    $("button#restoreMe").click(function() {
        if (v == true) {
            $(".menu_entrees li").first().before($f);
            $("li.portobello").replaceWith("<li class='hamburger'>hamburger</li>");
            $("li.tofu").each(function(i) {
                $(this).after($m[i]);
            });
            $("li.meat").parent().parent().removeClass("veg_leaf");
            $("li.tofu").remove();
            v = false;
        }
    });
});