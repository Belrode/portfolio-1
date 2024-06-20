

// scroll section

let section = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    section.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

};


// multiple text

const typed = new Typed('.multi-text', {
    strings: ['BUT MMI', 'but mmi'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

// dataSAE

let ligne=""
for(let cle in SAE){
    ligne+='<div class="sae-box"><img src="img/'+ cle +'.png" alt="'+ cle +'"><div class="sae-layer"><h4>'+ cle +'</h4><p></p><a href="/sae101/index.html?number='+ cle +'"><i class="bx bx-link-external"></i></a></div></div>'
}
document.querySelector(".sae-container").innerHTML=ligne


