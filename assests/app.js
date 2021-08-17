let header = document.querySelector(".header");
let section = document.querySelectorAll("section");
let navLi = document.querySelectorAll(".nav-link")
let home = document.getElementById("home-nav");
let about = document.getElementById("about-nav");
const menuPhone = document.querySelector(".menu-control-phone");
const sideBar = document.querySelector(".sidebar");
const _backDrop = document.querySelector("._backdrop")
let choose = document.querySelector(".choose-theme")
let change = document.querySelector(".change-theme")
let ab = document.getElementById("ab");
let moon = document.querySelector(".feather-moon");
let sun = document.querySelector(".feather-sun");
let loader = document.querySelector(".loader-container")
let phone_header = document.querySelector(".phone-header")
const mode = document.querySelector('.mode');
const progress = document.querySelectorAll(".bar")
const progress_circle = document.querySelectorAll(".progress-circle")


$(window).on("load", function () {

    $('.loader-container').fadeOut(500, function () {
        $(this).remove();
    })
})




function light() {
    ab.checked = true;
    document.querySelector('body').classList.add('main__body');
    localStorage.setItem("data-theme", "light");
    sun.classList.remove("d-none");
    sun.classList.remove("d-block");
    sun.classList.add("d-block");
    moon.classList.add("d-none");
    choose.classList.toggle("margin-left")
    choose.classList.toggle("margin")
    change.classList.toggle("margin-left-change")
    change.classList.toggle("margin-change")


}

function dark() {

    ab.checked = false;
    document.querySelector('body').classList.remove('main__body');
    localStorage.setItem("data-theme", "dark");
    moon.classList.remove("d-none")
    moon.classList.remove("d-block")
    moon.classList.add("d-block");
    sun.classList.add("d-none");
    choose.classList.toggle("margin-left")
    choose.classList.toggle("margin")
    change.classList.toggle("margin-left-change")
    change.classList.toggle("margin-change")


}

function run() {
    choose.classList.toggle("margin-left")
    choose.classList.toggle("margin")
    change.classList.toggle("margin-left-change")
    change.classList.toggle("margin-change")


}


$(document).ready(function () {
    $('.venobox').venobox({
        framewidth: '1000px',
        frameheight: 'auto',
        border: '2px',
        bgcolor: '#ffffff60',
        titleattr: 'data-title',
        numeratio: true,
        infinigall: true,

    });

});
$(document).ready(function () {
    $('.venobox1').venobox({
        framewidth: '500px',
        frameheight: 'auto',
        border: '2px',
        bgcolor: '#ffffff60',
        titleattr: 'data-title',
        numeratio: true,
        infinigall: true,

    });

});

var $grid = $('.grid').isotope({
    itemSelector: '.element-item',

    getSortData: {
        name: '.name',
        symbol: '.symbol',
        number: '.number parseInt',
        category: '[data-category]',
        weight: function (itemElem) {
            var weight = $(itemElem).find('.weight').text();
            return parseFloat(weight.replace(/[\(\)]/g, ''));
        }
    }
});

// filter functions
var filterFns = {
    // show if number is greater than 50
    numberGreaterThan50: function () {
        var number = $(this).find('.number').text();
        return parseInt(number, 10) > 50;
    },
    // show if name ends with -ium
    ium: function () {
        var name = $(this).find('.name').text();
        return name.match(/ium$/);
    }
};

// bind filter button click
$('#filters').on('click', 'button', function () {
    var filterValue = $(this).attr('data-filter');
    // use filterFn if matches value
    filterValue = filterFns[filterValue] || filterValue;
    $grid.isotope({filter: filterValue});
});

// bind sort button click
$('#sorts').on('click', 'button', function () {
    var sortByValue = $(this).attr('data-sort-by');
    $grid.isotope({sortBy: sortByValue});
});

// change is-checked class on buttons
$('.button-group').each(function (i, buttonGroup) {
    var $buttonGroup = $(buttonGroup);
    $buttonGroup.on('click', 'button', function () {
        $buttonGroup.find('.is-checked').removeClass('is-checked');
        $(this).addClass('is-checked');
    });
});

$(document).ready(function () {
    $('.client-review').slick({

        dots: true,
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 3,

        responsive: [
            {
                breakpoint: 1025,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 790,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 541,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }

        ]
    });
});


let headerControl = new Waypoint({
    element: document.getElementById('about'),
    handler: function (direction) {
        if (direction === "down") {
            header.classList.add("shadow")
            // header.classList.add("animate__slideInDown")
            header.classList.add("backdrop")

        } else {
            header.classList.remove("shadow")
            // header.classList.remove("animate__slideInDown")
            header.classList.remove("backdrop")


        }

    },
    offset: '90%'
})

let phone_headerControl = new Waypoint({
    element: document.getElementById('about'),
    handler: function (direction) {
        if (direction === "down") {
            phone_header.classList.add("shadow")
            phone_header.classList.add("animate__slideInDown")
            phone_header.classList.add("backdrop")

        } else {
            phone_header.classList.remove("shadow")
            phone_header.classList.remove("animate__slideInDown")
            phone_header.classList.remove("backdrop")


        }

    },
    offset: '100%'
})
let progress_bar = new Waypoint({
    element: document.getElementById('skill'),
    handler: function () {

        progress.forEach(el => el.classList.add("progress-bar"))
        progress_circle.forEach(el => el.classList.add("progress-circle-animate"))

    },
    offset: '20%'
})


function setActive(current) {

    $(`.nav-link[href='#${current}']`).classList.add('active');

}


menuPhone.addEventListener("click", function () {

    sideBar.classList.add("open");

    _backDrop.classList.add("modal-backdrop", "show");

})

_backDrop.addEventListener("click", function () {

    sideBar.classList.remove("open");
    _backDrop.classList.remove("modal-backdrop", "fade", "show")
});

function closemenu() {


    sideBar.classList.remove("open");
    _backDrop.classList.remove("modal-backdrop", "fade", "show")

}

window.addEventListener("load", function () {
    if (localStorage.getItem('data-theme') == 'dark') {
        document.querySelector('body').classList.remove('main__body');
        ab.checked = false;
        moon.classList.remove("d-none")
        moon.classList.add("d-block")
    } else if (localStorage.getItem('data-theme') == 'light') {
        document.querySelector('body').classList.add('main__body');
        console.log("light")
        ab.checked = true;
        sun.classList.remove("d-none")
        sun.classList.add("d-block")
    } else {
        moon.classList.remove("d-none")
        moon.classList.add("d-block")
    }
})

mode.addEventListener('change', () => {
    if (localStorage.getItem('data-theme') == 'dark') {

        localStorage.setItem("data-theme", "light");
        document.querySelector('body').classList.add('main__body');
        sun.classList.remove("d-none")
        moon.classList.remove("d-none")
        sun.classList.remove("d-block")
        moon.classList.remove("d-block")
        sun.classList.add("d-block")
        moon.classList.add("d-none")




    } else {

        localStorage.setItem("data-theme", "dark");
        document.querySelector('body').classList.remove('main__body');
        sun.classList.remove("d-none")
        moon.classList.remove("d-none")
        sun.classList.remove("d-block")
        moon.classList.remove("d-block")
        moon.classList.add("d-block")
        sun.classList.add("d-none")


    }
});

let wow = new WOW(
    {
        boxClass: 'wow',
        animateClass: 'animate__animated',
        offset: 0,
        mobile: true,
        live: true,
        callback: function (box) {
        },
        scrollContainer: null,
        resetAnimation: true,
    }
);
wow.init();
window.addEventListener("scroll", function () {
    let current = '';
    section.forEach(sections => {

        let sectionTop = sections.offsetTop;
        let sectionHeight = sections.clientHeight;
        if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
            current = sections.getAttribute('id');

        }
    })
    navLi.forEach(nav => {
        nav.classList.remove("nav-active")
        if (nav.classList.contains(current)) {
            nav.classList.add("nav-active");

        }
    })
})
