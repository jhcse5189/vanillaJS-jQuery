moment.tz.setDefault('Asia/Seoul');

$(document).ready(() => {

//Keep track of when a visitor leaves the window and when they return  

    window.onblur = blurMe;
    window.onfocus = focusMe;

    console.log(moment().format('YYYY-MM-DD HH:mm:ss'));
    console.log(moment().format('HH'));

    /*
    function blurMe() {
        $("ul.myList").append("<li class='blurItem>You left this window at " + moment().format('YYYY-MM-DD HH:mm:ss') + "</li>");
    }

    function focusMe() {
        var t = moment().format('YYYY-MM-DD HH:mm:ss');
        $('ul.myList').append("<li class='focusItem>You came back to this window at " + moment().format('HH') + ":" + moment().format('mm') + ":" + moment().format('ss') + "</li>");
    }*/
    function blurMe() {
        var t=new Date();
        $("ul.myList").append("<li class='blurItem'>You left this window at "+t.getHours()+":"+t.getMinutes()+":"+t.getSeconds()+"</li>");
    }

    function focusMe() {
        var t=new Date();
        $("ul.myList").append("<li class='focusItem'>You came back to this window at "+t.getHours()+":"+t.getMinutes()+":"+t.getSeconds()+"</li>");
    }

});//end doc.onready function
