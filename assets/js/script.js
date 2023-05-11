jQuery(document).ready(function ($) {
    $(function () {
        $(document).on("click", function (event) {
            var $trigger = $(".nav-item");
            if ($trigger !== event.target && !$trigger.has(event.target).length) {
                $(".main--menu").removeClass("show");
            }
        });
    });
    $('#certificate').owlCarousel({
        items: 3,
        nav: true,
        margin: 35,
        loop: true,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            640: {
                items: 1
            },
            768: {
                items: 2
            },
            1024: {
                items: 2
            },
            1200: {
                items: 3
            }
        }
    });
    $('#training').owlCarousel({
        items: 3,
        margin: 35,
        loop: true,
        dots: false,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            640: {
                items: 1
            },
            768: {
                items: 2
            },
            1024: {
                items: 2
            },
            1200: {
                items: 3
            }
        }
    });
    $('#work').owlCarousel({
        items: 3,
        margin: 35,
        loop: true,
        dots: false,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            640: {
                items: 1
            },
            768: {
                items: 2
            },
            1024: {
                items: 2,
            },
            1200: {
                items: 3
            }
        }
    });
    $('#customer').owlCarousel({
        items: 4,
        loop: true,
        dots: false,
        nav: true,
        responsive: {
            0: {
                items: 2
            },
            640: {
                items: 2
            },
            768: {
                items: 3
            },
            1024: {
                items: 4
            },
            1200: {
                items: 4
            }
        }
    });
    $('#training--1').owlCarousel({
        items: 3,
        margin: 30,
        loop: true,
        dots: false,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            640: {
                items: 1
            },
            768: {
                items: 2,
                margin: 20,
            },
            1024: {
                items: 3
            },
            1200: {
                items: 3
            }
        }
    });
    $('#training--2').owlCarousel({
        items: 3,
        margin: 30,
        loop: true,
        dots: false,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            640: {
                items: 1
            },
            768: {
                items: 2,
                margin: 20,
            },
            1024: {
                items: 3
            },
            1200: {
                items: 3
            }
        }
    });
    $('#training--3').owlCarousel({
        items: 3,
        margin: 30,
        loop: true,
        dots: false,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            640: {
                items: 1
            },
            768: {
                items: 2,
                margin: 20,
            },
            1024: {
                items: 3
            },
            1200: {
                items: 3
            }
        }
    });
    $('#news').owlCarousel({
        items: 3,
        margin: 10,
        loop: true,
        dots: false,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            640: {
                items: 1
            },
            768: {
                items: 2
            },
            1024: {
                items: 3
            },
            1200: {
                items: 3
            }
        }
    });
    $('#event').owlCarousel({
        items: 3,
        margin: 10,
        loop: true,
        dots: false,
        nav: true,
        responsive: {
            0: {
                items: 1,
            },
            640: {
                items: 1
            },
            768: {
                items: 2,
                margin: 30,
            },
            1024: {
                items: 3
            },
            1200: {
                items: 3
            }
        }
    });
});