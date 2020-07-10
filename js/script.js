$(function(){
    $( ".accordions" ).accordion({
        collapsible: true,
        active: false
    });
});
function burgerMenu(selector) {
    let menu = $(selector);
    let button = menu.find(".burger-menu_button");
    let links = menu.find("burger-menu_link");
    let cart = menu.find("mobile-cart");
    let overlay = menu.find("burger-menu_overlay");
    button.on("click",(e) => {
        e.preventDefault();
        toogleMenu();
    });
    links.on("click", () => toogleMenu())
    overlay.on("click", () => toogleMenu());
    cart.on("click", () => toogleMenu());
    function toogleMenu() {
        menu.toggleClass('burger-menu_active');

        if (menu.hasClass('burger-menu_active')) {
            $('body').css("overflow","hidden");
        }else  {
            $("body").css("overflow","visible")
        }
    }
}
burgerMenu('.burger-menu')

$(document).ready(function(){
    $(".slider").owlCarousel({
        items: 1,
        margin:10,
        loop:true,
        nav:true,
        dots:true,
        responsive: {
            0: {
                items:1,
            },
            600: {
                items:1
            },
            900: {
                items:1
            },

        }

    });
});