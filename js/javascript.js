/**
 * Created by houxi_000 on 2017/7/22.
 */

window.onload = function () {
    var nav = document.getElementById("bodyNav");
    var input = document.getElementById("searchInput");
    var smartBox = document.getElementById("smart-box")
    var result = document.getElementById("result")
    input.onfocus = function () {
        result.classList.add("drop");
    }
    input.onblur = function () {
        //result.classList = "result";
        result.classList.remove("drop");
    }


//设置左右箭头的渐变效果 B
    document.getElementsByClassName("xinge")[0].onmouseenter = function () {
        document.getElementById("xinge-right").classList.add("arrowShow");
        document.getElementById("xinge-left").classList.add("arrowShow");
        document.getElementById("xinge-right").classList.remove("arrowCurrent", "arrowHide");
    }
    document.getElementById("slider-left").onmouseover = function () {
        document.getElementById("xinge-left").classList.add("arrowCurrent");
        document.getElementById("xinge-left").classList.remove("arrowHide");
    }
    document.getElementById("slider-left").onmouseout = function () {
        document.getElementById("xinge-left").classList.remove("arrowCurrent");
    }
    document.getElementById("slider-right").onmouseover = function () {
        document.getElementById("xinge-right").classList.add("arrowCurrent");
        document.getElementById("xinge-right").classList.remove("arrowHide");
    }
    document.getElementById("slider-right").onmouseout = function () {
        document.getElementById("xinge-right").classList.remove("arrowCurrent");
    }
    document.getElementsByClassName("xinge")[0].onmouseleave = function () {
        document.getElementById("xinge-right").classList.add("arrowHide");
        document.getElementById("xinge-left").classList.add("arrowHide");
        document.getElementById("xinge-right").classList.remove("arrowShow", "arrowCurrent");
        document.getElementById("xinge-left").classList.remove("arrowShow", "arrowCurrent");
    }


    document.getElementsByClassName("jingcaituijian")[0].onmouseenter = function () {
        document.getElementById("jc-right").classList.add("arrowShow");
        document.getElementById("jc-left").classList.add("arrowShow");
        document.getElementById("jc-right").classList.remove("arrowCurrent", "arrowHide");
    }
    document.getElementById("jc-slider-left").onmouseover = function () {
        document.getElementById("jc-left").classList.add("arrowCurrent");
        document.getElementById("jc-left").classList.remove("arrowHide");
    }
    document.getElementById("jc-slider-left").onmouseout = function () {
        document.getElementById("jc-left").classList.remove("arrowCurrent");
    }
    document.getElementById("jc-slider-right").onmouseover = function () {
        document.getElementById("jc-right").classList.add("arrowCurrent");
        document.getElementById("jc-right").classList.remove("arrowHide");
    }
    document.getElementById("jc-slider-right").onmouseout = function () {
        document.getElementById("jc-right").classList.remove("arrowCurrent");
    }
    document.getElementsByClassName("jingcaituijian")[0].onmouseleave = function () {
        document.getElementById("jc-right").classList.add("arrowHide");
        document.getElementById("jc-left").classList.add("arrowHide");
        document.getElementById("jc-right").classList.remove("arrowShow", "arrowCurrent");
        document.getElementById("jc-left").classList.remove("arrowShow", "arrowCurrent");
    }


    document.getElementsByClassName("gedan")[0].onmouseenter = function () {
        document.getElementById("gedan-right").classList.add("arrowShow");
        document.getElementById("gedan-left").classList.add("arrowShow");
        document.getElementById("gedan-right").classList.remove("arrowCurrent", "arrowHide");
    }
    document.getElementById("gedan-slider-left").onmouseover = function () {
        document.getElementById("gedan-left").classList.add("arrowCurrent");
        document.getElementById("gedan-left").classList.remove("arrowHide");

    }
    document.getElementById("gedan-slider-left").onmouseout = function () {
        document.getElementById("gedan-left").classList.remove("arrowCurrent");
    }
    document.getElementById("gedan-slider-right").onmouseover = function () {
        document.getElementById("gedan-right").classList.add("arrowCurrent");
        document.getElementById("gedan-right").classList.remove("arrowHide");
    }
    document.getElementById("gedan-slider-right").onmouseout = function () {
        document.getElementById("gedan-right").classList.remove("arrowCurrent");
    }
    document.getElementsByClassName("gedan")[0].onmouseleave = function () {
        document.getElementById("gedan-right").classList.add("arrowHide");
        document.getElementById("gedan-left").classList.add("arrowHide");
        document.getElementById("gedan-right").classList.remove("arrowShow", "arrowCurrent");
        document.getElementById("gedan-left").classList.remove("arrowShow", "arrowCurrent");
    }

//设置左右箭头的渐变效果 E


//设置mask
    for (var i = 0; i < document.getElementsByClassName("mask").length; i++) {
        document.getElementsByClassName("mask")[i].index = i;
        document.getElementsByClassName("mask")[i].onmouseenter = function () {
            document.getElementsByClassName("mask")[this.index].classList.add("mask-current");
            document.getElementsByTagName("img")[this.index].classList.add("img-current");
            document.getElementsByClassName("icon-play")[this.index].classList.add("icon-play-current");
        }
        document.getElementsByClassName("mask")[i].onmouseleave = function () {
            document.getElementsByClassName("mask")[this.index].classList.remove("mask-current");
            document.getElementsByTagName("img")[this.index].classList.remove("img-current");
            document.getElementsByClassName("icon-play")[this.index].classList.remove("icon-play-current");
        }
    }


    for (var i = 0; i < document.getElementsByClassName("ph-list").length; i++) {
        document.getElementsByClassName("ph-list")[i].index = i;
        document.getElementsByClassName("ph-list")[i].onmouseenter = function () {
            document.getElementsByClassName("ph-mask")[this.index].classList.add("ph-mask-current");
            document.getElementsByClassName("ph-icon-play")[this.index].classList.add("ph-icon-play-current");
            document.getElementsByClassName("ph-line")[this.index].style.display = "none";
            document.getElementsByClassName("ph-list-bg")[this.index].classList.add("ph-list-bg-current");
        }
        document.getElementsByClassName("ph-list")[i].onmouseleave = function () {
            document.getElementsByClassName("ph-mask")[this.index].classList.remove("ph-mask-current");
            document.getElementsByClassName("ph-icon-play")[this.index].classList.remove("ph-icon-play-current");
            document.getElementsByClassName("ph-line")[this.index].style.display = "block";
            document.getElementsByClassName("ph-list-bg")[this.index].classList.remove("ph-list-bg-current");
        }
    }

    for (var i = 0; i < document.getElementsByClassName("ph-list").length; i++) {
        document.getElementsByClassName("ph-list-bg")[i].style.backgroundPositionX = -300 * i + "px";
    }

    for (var i = 0; i < 9; i++) {
        document.getElementsByClassName("jc-slider")[i].style.backgroundImage = "url('images/" + (i + 1) + ".jpg')";
    }


    $(".square").mouseenter(function () {
        $(this).children("i").css("opacity", 1);
        $(this).siblings(".square").children("i").css("opacity", 0.5);
    });
    $(".squares").mouseleave(function () {
        $(this).find("i").css("opacity", 0.5);
    });


    $(".img").mouseenter(function () {
        $(this).children("img")[0].classList.add("img-current");
        $(this).children("i")[0].classList.add("icon-play-current")
    });
    $(".img").mouseleave(function () {
        $(this).children("img")[0].classList.remove("img-current");
        $(this).children("i")[0].classList.remove("icon-play-current")
    });


    /*
     *
     * 新歌-轮播
     *
     * */

    function slider() {
        var flag = true;
        var xingeIndex = 0;
        var xingeSquare = 0;
        $("#xinge-right").click(function () {
            if (flag) {
                flag = false;
                if (xingeIndex === 4) {
                    $(".xinge .slider ul").css("left", "0px");
                    xingeIndex = 0;
                }
                $(".xinge .slider ul").animate({left: $(".xinge .slider ul").position().left - 1200 + "px"}, 400, "swing", function () {
                    flag = true;
                });
                xingeIndex++;
                //if (xingeSquare < 3) {
                //    xingeSquare++;
                //} else {
                //    xingeSquare = 0;
                //}
                xingeSquare = xingeIndex;
                if (xingeSquare === 4) {
                    xingeSquare = 0;
                }
                $(".xinge .square").eq(xingeSquare).children("i").addClass("square-current-click");
                $(".xinge .square").eq(xingeSquare).siblings(".square").children("i").removeClass("square-current-click");

            }
            window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();
        });
        $("#xinge-left").click(function () {
            if (flag) {
                flag = false;
                if (xingeIndex === 0) {
                    $(".xinge .slider ul").css("left", "-4800px");
                    xingeIndex = 4;
                }
                $(".xinge .slider ul").animate({left: $(".xinge .slider ul").position().left + 1200 + "px"}, 400, "swing", function () {
                    flag = true;
                });
                xingeIndex--;
                xingeSquare = xingeIndex;
                if (xingeSquare === -1) {
                    xingeSquare = 3;
                }
                $(".xinge .square").eq(xingeSquare).children("i").addClass("square-current-click");
                $(".xinge .square").eq(xingeSquare).siblings(".square").children("i").removeClass("square-current-click");
            }
            window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();
        });
        $(".xinge .square").click(function () {
            //$(".xinge .slider ul").css("left", $(this).index() * -1200 + "px");
            $(".xinge .slider ul").animate({"left": $(this).index() * -1200 + "px"});
            xingeIndex = $(this).index();
            $(this).siblings(".square").children("i").removeClass("square-current-click");
            $(this).children("i").addClass("square-current-click");
        });
    }

    slider();


    //var Caroursel = [{"display": "none"}, {"display": "none"}, {
    //    "display": "block",
    //    "left": "-400px",
    //    "margin-left": "0",
    //    "opacity": "0.5",
    //    "width": "400px",
    //    "height": "53%",
    //    "top": "50%",
    //    "margin-top": "-80px",
    //    "position": "absolute",
    //    "-webkit-background-size": "cover",
    //    "background-size": "cover",
    //    "z-index": "1",
    //    "transition": "all 0.5s ease"
    //}, {
    //    "display": "block",
    //    "left": "0",
    //    "margin-left": "0",
    //    "opacity": "0.5",
    //    "width": "400px",
    //    "height": "53%",
    //    "top": "50%",
    //    "margin-top": "-80px",
    //    "position": "absolute",
    //    "-webkit-background-size": "cover",
    //    "background-size": "cover",
    //    "z-index": "1",
    //    "transition": "all 0.5s ease"
    //}, {
    //    "display": "block",
    //    "width": "751px",
    //    "height": "100%",
    //    "position": "absolute",
    //    "left": "50%",
    //    "margin-left": "-375px",
    //    "-webkit-background-size": "cover",
    //    "background-size": "cover",
    //    "opacity": "1",
    //    "top": "0",
    //    "margin-top": "0",
    //    "z-index": "2",
    //    "transition": "all 0.5s ease"
    //}, {
    //    "display": "block",
    //    "right": "0px",
    //    "margin-left": "0",
    //    "opacity": "0.5",
    //    "width": "400px",
    //    "height": "53%",
    //    "top": "50%",
    //    "margin-top": "-80px",
    //    "position": "absolute",
    //    "-webkit-background-size": "cover",
    //    "background-size": "cover",
    //    "z-index": "1",
    //    "transition": "all 0.5s ease"
    //}, {
    //    "display": "block",
    //    "right": "-400px",
    //    "margin-left": "0",
    //    "opacity": "0.5",
    //    "width": "400px",
    //    "height": "53%",
    //    "top": "50%",
    //    "margin-top": "-80px",
    //    "position": "absolute",
    //    "-webkit-background-size": "cover",
    //    "background-size": "cover",
    //    "z-index": "1",
    //    "transition": "all 0.5s ease"
    //}, {"display": "none"}, {"display": "none"}];

    //$(".screen>.sliders").children(".jc-slider").css(Caroursel)[];
    //$(".jc-slider").each(function () {
    //    $(this).css(Caroursel[$(this).index()]);
    //})
    ////console.dir($(".jc-slider"));
    //
    //$("#jc-right").click(function () {
    //    Caroursel.unshift(Caroursel.pop());
    //    $(".jc-slider").each(function () {
    //        $(this).css(Caroursel[$(this).index()]);
    //    })
    //    console.dir(Caroursel);
    //});


    function Caroursel() {
        var flag = true;
        var Index = 0;
        var Square = 0;
        var timer = null;
        var Caroursel = ["caroursel-center", "caroursel-right", "caroursel-right-out", "", "", "", "", "caroursel-left-out", "caroursel-left"]

        function rightClick() {
            if (flag) {
                flag = false;
                if (Index === $(".jc-slider").length) {
                    Index = 0;
                }
                Caroursel.unshift(Caroursel.pop());
                $(".jc-slider").each(function () {
                    $(this).attr("id", Caroursel[$(this).index()])
                })
                setTimeout(function () {
                    flag = true;
                }, 500);
                Index++;
                Square = Index;
                if (Square === 9) {
                    Square = 0;
                }
                $(".jingcaituijian .square").eq(Square).children("i").addClass("square-current-click");
                $(".jingcaituijian .square").eq(Square).siblings(".square").children("i").removeClass("square-current-click");
            }
        }

        $("#jc-right").click(rightClick);


        $("#jc-left").click(function () {
            if (flag) {
                flag = false;
                Caroursel.push(Caroursel.shift());
                $(".jc-slider").each(function () {
                    $(this).attr("id", Caroursel[$(this).index()])
                });
                setTimeout(function () {
                    flag = true;
                }, 500);
                Index--;
                Square = Index;
                if (Square === -1) {
                    Square = 8;
                }
                $(".jingcaituijian .square").eq(Square).children("i").addClass("square-current-click");
                $(".jingcaituijian .square").eq(Square).siblings(".square").children("i").removeClass("square-current-click");
            }
        });
        $(".jingcaituijian .square").click(function () {
            Square = $(this).index();
            Index = Square;
            $(this).siblings(".square").children("i").removeClass("square-current-click");
            $(this).children("i").addClass("square-current-click");
            var step = Square - Caroursel.indexOf("caroursel-center");
            console.log(step);
            if (step > 0) {
                if (step > 1) {
                    for (var h = 0; h < step; h++) {
                        Caroursel.unshift(Caroursel.pop());
                    }
                    $(".jc-slider").animate({"left": "1200px"}, 50, "linear", function () {
                        //$(".jc-slider").attr("id", "").addClass("caroursel-default-right");
                        $(".jc-slider").each(function () {
                            $(this).attr("id", Caroursel[$(this).index()])
                        });
                    })
                } else {
                    Caroursel.unshift(Caroursel.pop());
                }
            } else if (step < 0) {
                if (-step > 1) {
                    for (var k = 0; k < -step; k++) {
                        Caroursel.push(Caroursel.shift());
                    }
                    //$(".jc-slider").attr("id", "").addClass("caroursel-default-left");
                    $(".jc-slider").animate({"left": "-400px"}, 50, "linear", function () {
                        $(".jc-slider").each(function () {
                            $(this).attr("id", Caroursel[$(this).index()])
                        });
                    });

                } else {
                    Caroursel.push(Caroursel.shift());
                }
            }
            $(".jc-slider").each(function () {
                $(this).attr("id", Caroursel[$(this).index()])
            });
        });

        $(".jingcaituijian").delegate(".content", "mouseleave", function () {
            timer = setInterval(rightClick, 1500);
        }).delegate(".content", "mouseenter", function () {
            clearInterval(timer);
        });
        timer = setInterval(rightClick, 1500);
    }

    Caroursel();


    function playMusic() {
        var music;
        var random = parseInt(Math.random()*5);
        switch (random) {
            case 0:
                music = "0";
                break
            case 1:
                music = "1";
                break
            case 2:
                music = "2";
                break
            case 3:
                music = "3";
                break
            case 4:
                music = "4";
        }
        console.log(music);
        console.log(random);
        console.log(Math.random() * 5);
        $("#audio").attr("src", "mp3/" + music + ".mp3").attr("autoplay", "autoplay");
        var music;
        $(".song-list").delegate("a", "click", function () {
            music = $(this).text().substring(4, $(this).text().length);
            console.log($(this).text().substring(4, $(this).text().length));
            $("#audio").attr("src", "mp3/" + music + ".mp3").attr("autoplay", "autoplay");
        });
    }

    playMusic();

    $("#dialog").dialog({
        autoOpen: false,
        width: 520,
    });

    // Link to open the dialog
    $(".mv-list .item").delegate($("img,.mv-icon-play,.title")).click(function (event) {
        $("embed").attr("src", ($(this).find("img").attr("title")));
        $("#dialog").dialog("open");
        event.preventDefault();
        console.log($(this));
    });


    function listSlider() {
        var flag = true;
        var listIndex = 1;
        var listSquare = 1;
        $("#gedan-right").click(function () {
            if (flag) {
                flag = false;
                if (listIndex === 3) {
                    $(".gedan .slider ul").css("left", "0px");
                    listIndex = 0;
                }
                $(".gedan .slider ul").animate({left: $(".gedan .slider ul").position().left - 1200 + "px"}, 400, "swing", function () {
                    flag = true;
                });
                listIndex++;
                //if (xingeSquare < 3) {
                //    xingeSquare++;
                //} else {
                //    xingeSquare = 0;
                //}
                listSquare = listIndex;
                if (listSquare === 3) {
                    listSquare = 0;
                }
                $(".gedan .square").eq(listSquare).children("i").addClass("square-current-click");
                $(".gedan .square").eq(listSquare).siblings(".square").children("i").removeClass("square-current-click");

            }
            window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();
        });
        $("#gedan-left").click(function () {
            if (flag) {
                flag = false;
                if (listIndex === 0) {
                    $(".gedan .slider ul").css("left", "-3600px");
                    listIndex = 3;
                }
                $(".gedan .slider ul").animate({left: $(".gedan .slider ul").position().left + 1200 + "px"}, 400, "swing", function () {
                    flag = true;
                });
                listIndex--;
                listSquare = listIndex;
                if (listSquare === -1) {
                    listSquare = 3;
                }
                $(".gedan .square").eq(listSquare).children("i").addClass("square-current-click");
                $(".gedan .square").eq(listSquare).siblings(".square").children("i").removeClass("square-current-click");
            }
            window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();
        });
        $(".gedan .square").click(function () {
            //$(".xinge .slider ul").css("left", $(this).index() * -1200 + "px");
            $(".gedan .slider ul").animate({"left": $(this).index() * -1200 + "px"});
            listIndex = $(this).index();
            $(this).siblings(".square").children("i").removeClass("square-current-click");
            $(this).children("i").addClass("square-current-click");
        });
    }
    listSlider();

};