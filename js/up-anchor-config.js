let anchorButton = document.querySelector('#up-btn');
let footer = document.querySelector('#footer');

function checkOffset() {
    function getRectTop(el){
        let rect = el.getBoundingClientRect();
        return rect.top;
    }

    if((getRectTop(anchorButton) + document.body.scrollTop) + anchorButton.offsetHeight >= (getRectTop(footer) + document.body.scrollTop) - 10) {
        anchorButton.style.position = 'absolute';
        anchorButton.style.bottom = `${footer.clientHeight + 20}px`;
    }
    if(document.body.scrollTop + window.innerHeight < (getRectTop(footer) + document.body.scrollTop)) {
        anchorButton.style.position = 'fixed'; // restore when you scroll up
        anchorButton.style.bottom = '20px';
    }
}

document.addEventListener("scroll", function(){
    if (window.scrollY > 300) {
        anchorButton.style.opacity = '1';
        anchorButton.style.pointerEvents = 'auto';
        checkOffset();
    } else {
        anchorButton.style.opacity = '0';
        anchorButton.style.pointerEvents = 'none';
    }
});

anchorButton.addEventListener("click", function () {
    window.scrollTo({top : 0});
})