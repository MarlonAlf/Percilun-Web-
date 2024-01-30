const clicked = document.querySelector('#clickable');
const close = document.querySelector('#close');

const side_menu = document.querySelector('.nav-links-2');

clicked.addEventListener('click', function() {
    side_menu.classList.toggle('menu-active');
})

close.addEventListener('click', function() {
    side_menu.classList.toggle('menu-active');
})


// Single product page image swap

const all = document.querySelectorAll('#img-swap');

    all.forEach(function(img) {
        img.onclick = function() {
            let outgoing = all[0].src;
            let clicked = img.src;


            all[0].src = clicked;
            img.src = outgoing;
            }
        }

    );






