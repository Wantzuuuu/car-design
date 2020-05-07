// navbar animate
$(".my-navbar a").click(function (e) {
    e.preventDefault();
    let scrollTop = $(window).scrollTop();
    let target = $(this).attr("data-position");
    let position = $(target).position().top;
    // console.log(position);
    let num = Math.abs(position - scrollTop);
    let timeValue = 0;
    if (num <= 1500) {
        timeValue = 800;
    } else if (num >= 1501 && num < 4000) {
        timeValue = 1000
    } else {
        timeValue = 2100;
    }
    $('html, body').stop().animate({
        scrollTop: position
    }, timeValue);
})
// navbar animate end
// header opacity
setTimeout(function () {
    $("#header").addClass("active");
}, 100)
setTimeout(function () {
    $(".my-navbar").addClass("i-fix");
    setTimeout(function () {
        $(".item-box").addClass("i-fix");
        $(".item-hamberger").addClass("i-fix");
    }, 300)
}, 100)
$(".item-hamberger").click(function () {
    $(".navbar-block").fadeIn();
})
$(".remove-block").click(function () {
    $(".navbar-block").fadeOut();
})
// header opacity end

const headerTarget = $("#header").position().top;
const firstContentTarget = $("#firstText").position().top;
const secondTextTarget = $("#secondText").position().top;
// const twoSection = $("#two").position().top;
// firstText
let opacityValue = 0;
let headerBlockNumber = 0;
let translateyValue = -50;
// firstText end

// secondText
let secondOpacity = 0;
let secondTextY = -30;
// secondText end

let lastScroll = 0
$(window).scroll(function () {
    let scroll = $(window).scrollTop();
    let scrollValue = (scroll - lastScroll) * 0.008;
    let blockValue = (scroll - lastScroll) * 0.005
    let translateyScroll = (scroll - lastScroll) * 0.5;
    // navabr
    if (scroll <= 0) {
        $(".my-navbar").stop().addClass("i-fix");
        setTimeout(function () {
            $(".item-box").stop().addClass("i-fix");
            $(".item-hamberger").stop().addClass("i-fix");
        }, 300);
        $(".navbar-block").stop().fadeOut();
    }
    // navabr end
    if (scroll > lastScroll) {
        $(".item-box").removeClass("i-fix");
        $(".item-hamberger").removeClass("i-fix");
        // navbar
        setTimeout(function () {
            $(".my-navbar").removeClass("i-fix");
        }, 300)
        $(".navbar-block").fadeOut();
        // navbar end
        if (scroll > headerTarget && scroll < secondTextTarget - 100) {
            opacityValue += scrollValue;
            headerBlockNumber += blockValue;
            if (opacityValue >= 1) {
                opacityValue = 1;
            }
            if (headerBlockNumber >= 0.6) {
                headerBlockNumber = 0.6;
            }
            if (scroll > firstContentTarget + 50) {
                opacityValue = 1;
                headerBlockNumber = 0.6;
            }
            $("#firstText").css("opacity", opacityValue);
            $("#headerBlock").css("opacity", headerBlockNumber);
        } else if (scroll > headerTarget && scroll >= secondTextTarget) {
            // TODO: 在這邊檢查
            headerBlockNumber = 0.6;
            $("#headerBlock").css("opacity", headerBlockNumber);
            opacityValue -= scrollValue
            translateyValue -= translateyScroll;
            $("#firstText").css({
                "opacity": opacityValue,
                "transform": `translateY(${translateyValue}%)`
            })
            if (opacityValue <= 0) {
                opacityValue = 0;
                // TODO: secondText
                secondOpacity += scrollValue;
                secondTextY -= translateyScroll;
                if (secondOpacity >= 1) {
                    secondOpacity = 1;
                }
                if (secondTextY <= -50) {
                    secondTextY = -50;
                }
                // console.log("second", secondOpacity);
                $("#secondText").css({
                    "opacity": secondOpacity,
                    "transform": `translateY(${secondTextY}%)`
                })
                // secondText end
            }
            if (translateyValue <= -75) {
                translateyValue = -75;
            }
        }
    } else {
        if (scroll <= firstContentTarget + 50 && scroll < secondTextTarget - 100) {
            opacityValue += scrollValue;
            headerBlockNumber += blockValue;
            if (opacityValue <= 0) {
                opacityValue = 0;
            }
            if (headerBlockNumber <= 0) {
                headerBlockNumber = 0;
            }
            if (scroll == 0) {
                opacityValue = 0;
                headerBlockNumber = 0;
            }
            $("#firstText").css("opacity", opacityValue);
            $("#headerBlock").css("opacity", headerBlockNumber);
        } else if (scroll < secondTextTarget) {
            opacityValue -= scrollValue * 2;
            translateyValue -= translateyScroll;
            // console.log(opacityValue);
            if (opacityValue >= 1) {
                opacityValue = 1;
            }
            if (translateyValue >= -50) {
                translateyValue = -50;
            }

            // console.log(opacityValue);
            $("#firstText").css({
                "opacity": opacityValue,
                "transform": `translateY(${translateyValue}%)`
            })
        }
        if (scroll <= secondTextTarget + 100) {
            secondOpacity += scrollValue;
            secondTextY -= translateyScroll;
            if (secondOpacity <= 0) {
                secondOpacity = 0;
            }
            // console.log(secondOpacity);
            if (secondTextY >= -30) {
                secondTextY = -30;
            }
            $("#secondText").css({
                "opacity": secondOpacity,
                "transform": `translateY(${secondTextY}%)`
            })
        }
        // navbar
        $(".my-navbar").stop().addClass("i-fix");
        setTimeout(function () {
            $(".item-box").stop().addClass("i-fix");
            $(".item-hamberger").stop().addClass("i-fix");
        }, 300);
        $(".navbar-block").stop().fadeOut();
        // navbar end
    }
    lastScroll = scroll;
})

// TODO: second count
const sectionOne = $("#sectionOne").position().top;
const maxKmHeight = $("#maxKm").offset().top;
const secondsHeight = $("#seconds").offset().top;
const min15Heihgt = $("#min15").offset().top;
// console.log(sectionOne);
// console.log(maxKmHeight, secondsHeight, min15Heihgt);
let maxKm = 0;
let seconds = 0;
let min15 = 0;
$(window).scroll(function () {
    let scroll = $(window).scrollTop();
    if (scroll >= maxKmHeight - 580) {
        for (let i = 0; i < 350; i++) {
            if (maxKm >= 350) {
                break;
            }
            let yy = maxKm += 1
            window.setTimeout(function () {
                $("#maxKm").text(yy);
            }, 2 * i);
        }
    }
    if (scroll >= secondsHeight - 580) {
        for (let i = 0; i < 34; i++) {
            if (seconds >= 3.4) {
                break;
            }
            let q = seconds += 0.1;
            window.setTimeout(function () {
                // console.log(q);
                $("#seconds").text(q.toFixed(1));
            }, 25 * i);
        }
    }
    if (scroll >= min15Heihgt - 580) {
        for (let i = 0; i < 565; i++) {
            if (min15 >= 565) {
                break;
            }
            let yy = min15 += 1
            window.setTimeout(function () {
                $("#min15").text(yy);
            }, 1.5 * i);
        }
    }
})
// second count end

// threeSection 
const orderBoxHeight = $("#sectionThree").position().top;
const windowWidth = $(window).width();
setTimeout(function () {
    $(".sticky-section").addClass('sticky');
}, 200);
let orderTX = -110;
let orderTY = -145;
if (windowWidth < 576) {
    orderTX = -77
    orderTY = -165;
} else {
    orderTX = -110;
    orderTY = -145;
}
let orderRX = 60;
let orderRY = 70;
let orderOpacity = 0;
let lastScroll3 = 0;
$(window).scroll(function () {
    let scroll = $(window).scrollTop();
    let num = scroll - lastScroll3;
    if (scroll > lastScroll3) {
        if (windowWidth < 576) {
            if (scroll > orderBoxHeight + 280) {
                orderTX += num * 0.12;
                orderTY += num * 0.15;
                orderRX -= num * 0.08;
                orderRY -= num * 0.08;
                orderOpacity += num * 0.008;
                // console.log(orderTX);
                if (orderTX >= 0) {
                    orderTX = 0;
                }
                if (orderTY >= -5) {
                    orderTY = -5;
                }
                if (orderRX <= 0) {
                    orderRX = 0;
                }
                if (orderRY <= 0) {
                    orderRY = 0;
                }
                if (orderOpacity >= 1) {
                    orderOpacity = 1;
                }
                $(".order-container").css({
                    "transform": `translateX(${orderTX}%) translateY(${orderTY}%) rotateY(${orderRY}deg) rotateX(${orderRX}deg)`,
                    // "opacity": orderOpacity,
                }
                );
            }
        } else {
            if (scroll > orderBoxHeight + 500) {
                orderTX += num * 0.121;
                orderTY += num * 0.1256;
                orderRX -= num * 0.08;
                orderRY -= num * 0.08;
                orderOpacity += num * 0.008;
                // console.log(orderTX);
                if (orderTX >= 0) {
                    orderTX = 0;
                }
                if (orderTY >= -10) {
                    orderTY = -10;
                }
                if (orderRX <= 0) {
                    orderRX = 0;
                }
                if (orderRY <= 0) {
                    orderRY = 0;
                }
                if (orderOpacity >= 1) {
                    orderOpacity = 1;
                }
                $(".order-container").css({
                    "transform": `translateX(${orderTX}%) translateY(${orderTY}%) rotateY(${orderRY}deg) rotateX(${orderRX}deg)`,
                    // "opacity": orderOpacity,
                }
                );
            }
        }
    } else {
        if (scroll < sectionFourHeight - 800) {
            if (windowWidth < 576) {
                orderTX += num * 0.1;
            } else {
                orderTX += num * 0.09;
            }
            orderTY += num * 0.16;
            orderRX -= num * 0.08;
            orderRY -= num * 0.08;
            orderOpacity += num * 0.0008;
            // console.log(orderTY);
            if (windowWidth < 576) {
                if (orderTX <= -80) {
                    orderTX = -80;
                }
                if (orderTY <= -165) {
                    orderTY = -165;
                }
            } else {
                if (orderTX <= -110) {
                    orderTX = -110;
                }
                if (orderTY <= -145) {
                    orderTY = -145;
                }
            }

            if (orderRY >= 70) {
                orderRY = 70;
            }
            if (orderRX >= 60) {
                orderRX = 60;
            }
            if (orderOpacity <= 0.4) {
                orderOpacity = 0.4;
            }
            $(".order-container").css({
                "transform": `translateX(${orderTX}%) translateY(${orderTY}%) rotateY(${orderRY}deg) rotateX(${orderRX}deg)`,
                // "opacity": orderOpacity,
            }
            )
        }
    }
    if (scroll > orderBoxHeight + 150) {
        $(".scroll-btn").addClass("remove");
    } else {
        $(".scroll-btn").removeClass("remove");
    }
    lastScroll3 = scroll;
})
// threeSection end

const sectionFourHeight = $("#sectionFour").offset().top;