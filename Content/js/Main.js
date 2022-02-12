$(document).ready(function() {
    $('.toggle-menu').click(function() {
        // $('.menu-bar').slideToggle();
        $('.toggle-menu i').toggleClass('fa-bars  fa-times');
        $('.menu-bar').toggleClass('right0  right500');
    });
    $('.menu-bar li i').click(function() {
        $(this).toggleClass('fa-plus , fa-minus');
        $(this).next('ul').slideToggle();
        $(this).parent('li').toggleClass('cc');
    });


    $(".menu-bar a").click(function() {
        $(".menu-bar").toggleClass("right0 right500");
        $('.toggle-menu i').toggleClass('fa-bars  fa-times');
    });

    $(function() {
        $(window).scroll(function() {
            var n = $(this);
            $(this).scrollTop() >= 1 ? $(".header_bg").addClass("stickytop") : $(".header_bg").removeClass("stickytop")
        })
    });


    $(window).scroll(function() {
        if ($(this).scrollTop() != 0) {
            $('.xxx').fadeIn();
        } else {
            $('.xxx').fadeOut();
        }
    });
    $('.xxx').click(function() {
        $("html, body").animate({
            scrollTop: 0
        }, 1400);
        return false;
    });

    var scene = document.getElementById('scene');
    var parallax = new Parallax(scene);

    $(window).scroll(function() {
        if ($(this).scrollTop() >= 100) {
            $('.xxx').css("visibility", "visible");
        } else {
            $('.xxx').css("visibility", "hidden");
        }
    });

});

// var width = $(window).width();
// $(window).resize(function () {
// 	if ($(window).width() != width) {
// 		width = $(window).width(); // update the width width
// 		if (width > 992) {
// 			$('.menu-bar').css("display", "block");
// 			$('.menu-bar ul').css('display', '');
// 		} else {
// 			$('.menu-bar').css("display", "none");
// 			$('.fa-minus').toggleClass('fa-plus');
// 			$('.fa-minus').removeClass('fa-minus');
// 			$('.cc').removeClass('cc');
// 		}
// 	}
// });



jQuery('document').ready(function($) {
    $('.gallery-filters li').on('click', function() {
        $('.gallery-filters li').removeClass('active');
        $(this).addClass('active');
        filter = $(this).attr('gallery-filter');

        $('.glry_box_fltr').each(function() {
            if (filter == 'all') {
                $(this).fadeIn();
            } else {
                $(this).hide();
                if ($(this).attr('filter-category') == filter) {
                    $(this).fadeIn();
                }
            }
        });
    });
});

var swiper = new Swiper('.swiper-tesimonial', {
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});


$('#pointer_index a').click(function(e) {
    e.preventDefault();
    var target = $($(this).attr('href'));
    if (target.length) {
        var scrollTo = target.offset().top;
        $('body, html').animate({
            scrollTop: scrollTo + 'px'
        }, 800);
    }
});

$('.menu-bar a').click(function(e) {
    e.preventDefault();
    var target = $($(this).attr('href'));
    if (target.length) {
        var scrollTo = target.offset().top;
        $('body, html').animate({
            scrollTop: scrollTo + 'px'
        }, 800);
    }
});




window.onload = function() {
    const container = document.querySelector(".xxx");
    const svg = document.querySelector("svg");
    const progressBar = document.querySelector(".progress-bar");
    const pct = document.querySelector(".pct");
    const totalLength = progressBar.getTotalLength();

    setTopValue(svg);

    progressBar.style.strokeDasharray = totalLength;
    progressBar.style.strokeDashoffset = totalLength;

    window.addEventListener("scroll", () => {
        setProgress(container, pct, progressBar, totalLength);
    });

    window.addEventListener("resize", () => {
        setTopValue(svg);
    });
};

function setTopValue(svg) {
    svg.style.top =
        document.documentElement.clientHeight * 0.1 -
        svg.getBoundingClientRect().height * 0.1 +
        "px";
}

function setProgress(container, pct, progressBar, totalLength) {
    const clientHeight = document.documentElement.clientHeight;
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;

    const percentage = scrollTop / (scrollHeight - clientHeight);
    if (percentage === 1) {
        container.classList.add("completed");
    } else {
        container.classList.remove("completed");
    }
    //    pct.innerHTML = Math.round(percentage * 100) + "%";
    progressBar.style.strokeDashoffset = totalLength - totalLength * percentage;
}








//Here is the code for paralax scrolling version 1.0
;
(function($) {
    $(document).ready(initiallizeFunctions);


    function initiallizeFunctions() {

        $(window).bind('scroll', function() {
            paralax();
        });

        $('.dot').bind('click', function() {
            scrollToPoint($(this));
        });
    }

    function paralax() {
        var $scrollPosition = $(window).scrollTop(),
            targetsObj = findTargets();

        $('.grid_prx').css('top', (0 - ($scrollPosition * .15)) + 'px');

        var targetsIndex;
        for (targetsIndex in targetsObj.targetScrollValues) {

            if (targetsObj.targetScrollValues[targetsIndex] >= $scrollPosition - 50 && targetsObj.targetScrollValues[targetsIndex] <= $scrollPosition + 50) {
                var num = getRefNum('target-', $(targetsObj.targets[targetsIndex]));
                console.log('#goto-' + num);
                activateDot($('#goto-' + num));
            }
        }
    }

    function scrollToPoint($point) {

        var targetNum = getRefNum('goto-', $point),
            scrollPosition = $('#target-' + targetNum).offset().top;

        if (scrollPosition > 100) {
            scrollPosition = scrollPosition - 130;
        }

        $("html, body").animate({
            scrollTop: scrollPosition
        }, 1500, function() {
            activateDot($point);
        });
    }

    function activateDot($dot) {
        $dot
            .css('background-color', '#DF6008')
            .parent('li')
            .siblings('li')
            .children('span.dot')
            .css('background-color', 'transparent');
    }

    function findTargets() {
        var targets = $('.page-wrapper').find('.g_prx')
        counter = 0,
            targetScrollValues = [];

        for (; counter < targets.length; counter = counter + 1) {
            targetScrollValues[counter] = $(targets[counter]).offset().top - 99;
        }

        return {
            'targets': targets,
            'targetScrollValues': targetScrollValues
        };
    }

    function getRefNum(pattern, $target) {
        var targetID = $target.attr('id');
        return targetID.replace(pattern, '');
    }

})(jQuery);











const words = ["بهترین طراحی...", "بیشترین جذابیت...", "بالاترین بازدید...", "برای خاص ترین مشتریان"];
let i = 0;
let timer;

function typingEffect() {
    let word = words[i].split("");
    var loopTyping = function() {
        if (word.length > 0) {
            document.getElementById("word").innerHTML += word.shift();
        } else {
            deletingEffect();
            return false;
        }
        timer = setTimeout(loopTyping, 400);
    };
    loopTyping();
}

function deletingEffect() {
    let word = words[i].split("");
    var loopDeleting = function() {
        if (word.length > 0) {
            word.pop();
            document.getElementById("word").innerHTML = word.join("");
        } else {
            if (words.length > i + 1) {
                i++;
            } else {
                i = 0;
            }
            typingEffect();
            return false;
        }
        timer = setTimeout(loopDeleting, 60);
    };
    loopDeleting();
}

typingEffect();