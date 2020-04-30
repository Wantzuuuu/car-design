
// header opacity
setTimeout(function () {
    $("#header").addClass("active");
}, 100)
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
$(window).scroll(() => {
    let scroll = $(window).scrollTop();
    let scrollValue = (scroll - lastScroll) * 0.008;
    let blockValue = (scroll - lastScroll) * 0.005
    let translateyScroll = (scroll - lastScroll) * 0.5;
    if (scroll > lastScroll) {
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
$(window).scroll(() => {
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
setTimeout(() => {
    $(".sticky-section").addClass('sticky');
}, 200);
let orderTX = -140;
let orderTY = -80;
let orderRX = 60;
let orderRY = 70;
let lastScroll3 = 0;
$(window).scroll(() => {
    let scroll = $(window).scrollTop();
    let num = scroll - lastScroll3;
    if (scroll > lastScroll3) {
        if (scroll > orderBoxHeight + 380) {
            orderTX += num * 0.6;
            orderTY += num * 0.3;
            orderRX -= num * 0.25;
            orderRY -= num * 0.25;
            // console.log(orderTX);
            if (orderTX >= 0) {
                orderTX = 0;
            }
            if (orderTY >= 0) {
                orderTY = 0;
            }
            if (orderRX <= 0) {
                orderRX = 0;
            }
            if (orderRY <= 0) {
                orderRY = 0;
            }
            // $(".order-container").css(
            //     "transform", `translate(-${orderTX}%,-${orderTY}%) rotateY(${orderRY}deg)  rotateX(${orderRX}deg)`
            // );
            $(".order-container").css(
                "transform", `translateX(${orderTX}%) translateY(${orderTY}%) rotateY(${orderRY}deg)  rotateX(${orderRX}deg)`
            );
            // $(".order-container").css(
            //     "transform", `rotateY(${orderRY}deg)  rotateX(${orderRX}deg)`
            // );
        }
    } else {

    }
    lastScroll3 = scroll;
})
// threeSection end