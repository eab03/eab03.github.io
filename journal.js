var header = document.getElementById('header');

window.onscroll = function(event) {

    make_navbar_sticky();

        function make_navbar_sticky() {
        // creates navbar below splash page map which sticks to top of screen when page is scrolled past map
        var nav = document.getElementById('main_nav');
        
        if (getComputedStyle(header).getPropertyValue('display') !== 'none' && header.getBoundingClientRect().bottom <= 0) {
            nav.style.position = 'fixed';
            nav.style.top = '0';
        } else {
            console.log(!header.style.display + "    " + header.getBoundingClientRect().bottom);
            nav.style.position = 'relative';
        }
    };
}