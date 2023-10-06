$('#comment .owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    dots:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000: {
            items:2
        }
    }
});

$('#blog .owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots:true,
    responsive:{
        0:{
            items:1
        },
        768:{
            items:2
        },
        1000: {
            items:3
        }
    }
});

$('#bloglist-filters .owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots:false,
    responsive:{
        0:{
            items:2
        },
        768:{
            items:4
        },
        1000: {
            items:5
        },
        1500: {
            items:8
        }
    }
});

/**
 * Show Up Button
 */
const upBtnSections = document.querySelectorAll(".show-btn-section")
const upBtn = document.querySelector(".btn-go-up")
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            upBtn.classList.toggle("show")
        }
    })
})
upBtnSections.forEach(upBtnSection => {
    observer.observe(upBtnSection)
});

// Initialize Isotope Filter
var $grid = $('.portfolio-items').isotope({
    // options
});
// Filter items on button click
$('.portfolio-menu ul').on( 'click', 'li', function() {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });
});
// Give Active class to the button
$('.portfolio-menu ul').on( 'click', 'li', function() {
    $(this).siblings(".active").removeClass('active');
    $(this).addClass("active");
});

// Initialize Isotope Filter
var $grid = $('.bloglist-items').isotope({
    // options
});
// Filter items on button click
$('.bloglist-menu div div').on( 'click', 'button', function() {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });
});
// Give Active class to the button
$('.bloglist-menu div div').on( 'click', 'button', function() {
    $(this).siblings(".active").removeClass('active');
    $(this).addClass("active");
});
