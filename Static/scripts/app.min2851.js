function onGallerygridFbShare() {
    location.href;
    $.ajax({
        type: "POST",
        async: !1,
        url: _FBUrl,
        dataType: "json",
        success: function(e) {
            result = e;
            var t = $(".mfp-figure img").attr("src"),
                i = "http:" + t,
                n = $("a.subnav-title").text(),
                s = n,
                o = n + " " + result,
                a = _GalleryGridDivid,
                r = location.href,
                l = r.replace("#", ""),
                c = l + "#" + a;
            FbApp_Login(s, c, i, o, n)
        },
        error: function(e, t, i) {
            alert(e.status), alert(i)
        }
    })
}

function FbApp_Login(e, t, i, n, s) {
    FB.login(function(o) {
        o.authResponse && statusChangeCallback(o, e, t, i, n, s)
    }, {
        scope: "email,user_photos,publish_actions"
    })
}

function statusChangeCallback(e, t, i, n, s, o) {
    "connected" === e.status && FB.ui({
        method: "feed",
        name: t,
        link: i,
        picture: n,
        caption: o + " | VOLVO CARS",
        description: s,
        source: n,
        redirect_uri: i,
        display: "popup"
    })
}

function onGallerygridTwitterShare() {
    var e = "",
        t = location.href,
        i = _GalleryGridDivid;
    $.ajax({
        type: "POST",
        async: !1,
        url: _TinyUrl,
        dataType: "json",
        data: {
            tinyUrl: t,
            divid: i
        },
        success: function(t) {
            e = t;
            var i = e.split(","),
                n = i[0],
                s = $("a.subnav-title").text(),
                o = (_GalleryGridDivid, s + " " + i[1]),
                a = ($(".mfp-figure img").attr("src"), "http://volvocars/sitecore/shell/~/media/US/Images/S60/Exterior-Gallery/VolvoS60Galleryimage10254096x2304v1.ashx?w=1600"),
                r = "https://twitter.com/share?url={{url}}&image-src={{img}}&text={{title}}",
                l = r.replace("{{url}}", n).replace("{{img}}", a).replace("{{title}}", o);
            window.open(l, "", "top=100, left=500 ,width=500, height=500")
        },
        error: function(e, t, i) {
            alert(e.status), alert(i)
        }
    })
}

function GallerygridsendEmail() {
    var e = "",
        t = location.href;
    $.ajax({
        type: "POST",
        async: !1,
        url: _EmailUrl,
        dataType: "json",
        data: {
            emailUrl: t
        },
        success: function(t) {
            e = t;
            var i = e.split(","),
                n = i[0],
                s = _GalleryGridDivid,
                o = n.replace("#", ""),
                a = o + "#" + s,
                r = $("a.subnav-title").text(),
                l = r + " " + i[1],
                c = l + " " + a,
                d = i[2] + " " + r,
                h = "mailto:?Subject={{subject}}&Body={{url}}",
                p = h.replace("{{url}}", c).replace("{{subject}}", d);
            window.location.href = p
        },
        error: function(e, t, i) {
            alert(e.status), alert(i)
        }
    })
}

function grabMap(e) {
    var t = e.href.match(/([^\/,]+),([^\/,]+)\/zoom\/(\d+)/);
    return null != t && 4 == t.length && (vc.DealerLocator.map._map.setCenter(new google.maps.LatLng(t[1], t[2])), vc.DealerLocator.map._map.setZoom(parseInt(t[3]))), !1
}

function toggle(e) {
    var t = $(e).parent().parent().find("#dealer-picker-info-panel");
    t.slideToggle("slow"), $(e).hasClass("icon-angle-down") ? ($(e).removeClass("icon-angle-down"), $(e).addClass("icon-angle-up")) : $(e).hasClass("icon-angle-up") && ($(e).removeClass("icon-angle-up"), $(e).addClass("icon-angle-down"))
}

function searchAction() {
    searchEnabled ? (jQuery("#instantSearch").css({
        display: "none",
        top: "-58px"
    }), jQuery("#iconSearch").addClass("icon-search").removeClass("icon-close"), searchEnabled = !1) : (jQuery("#instantSearch").css("display", "block"), placeSearch(), jQuery("#iconSearch").addClass("icon-close").removeClass("icon-search"), searchEnabled = !0, csfocus())
}

function csfocus() {
    setTimeout(function() {
        jQuery("#cse_query_main").focus()
    }, 1e3)
}

function searchActionNewNavigation() {
    searchEnabled ? (jQuery("#instantSearch").css({
        display: "none",
        top: "-58px"
    }), jQuery("#iconSearchNewNav").addClass("icon-search").removeClass("icon-close"), searchEnabled = !1) : (jQuery("#instantSearch").css("display", "block"), placeSearchNewNav(), jQuery("#iconSearchNewNav").addClass("icon-close").removeClass("icon-search"), jQuery("#cse_query_main").focus(), searchEnabled = !0)
}

function placeSearchNewNav() {
    try {
        var e = jQuery("#primary-navigation-bar").height() + jQuery("#primary-navigation-bar").offset().top;
        jQuery("#instantSearch").css("top", e + "px")
    } catch (t) {}
}

function placeSearch() {
    try {
        var e = jQuery("#nav").height() + jQuery("#nav").offset().top;
        jQuery("#instantSearch").css("top", e + "px")
    } catch (t) {}
}

function viewMoreAction(e, t) {
    var i = parseInt(t),
        n = document.getElementById("search_result");
    if (n.getElementsByTagName("li").length > 0) {
        var s = n.getElementsByTagName("li");
        if (s.length > 0)
            if (e) {
                for (var o = jQuery("#search_result > li:visible").length, a = o + i, r = 0; r < s.length; r++) a > r ? s[r].style.display = "block" : s[r].style.display = "none";
                i >= s.length - a + i && (document.getElementById("viewmore").style.display = "none")
            } else
                for (var r = 0; r < s.length; r++) i > r ? s[r].style.display = "block" : s[r].style.display = "none"
    }
}

function ShowSearchBox() {
    jQuery("#iconSearch").addClass("icon-close").removeClass("icon-search"), jQuery("a.customesearch-icon").removeAttr("onclick")
}

function getParameterByName(e) {
    e = e.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var t = new RegExp("[\\?&]" + e + "=([^&#]*)"),
        i = t.exec(location.search);
    return null === i ? "" : decodeURIComponent(i[1].replace(/\+/g, " "))
}

function swapImages() {
    $(".pdp-hero-group").hasClass("pdp-hero-group-has-2") ? $(".pdp-hero-group .pdp-hero:first-child .hero-content").hasClass("selected") ? ($(".pdp-hero-group .pdp-hero:first-child  .hero-content").removeClass("selected"),
	$(".pdp-hero-group .pdp-hero:first-child  .hero-content-align").removeClass("selected"),
	$(".pdp-hero-group .pdp-hero:first-child  .hero-background").css({
        opacity: 0
    }),
	$(".pdp-hero-group .pdp-hero:nth-child(2) .hero-content").addClass("selected"),
	$(".pdp-hero-group .pdp-hero:nth-child(2) .hero-content-align").addClass("selected"),
	$(".pdp-hero-group .pdp-hero:nth-child(2) .hero-background").css({
        opacity: 1
    }),
	$(".pdp-hero-group-has-2 .pdp-hero:nth-child(2) .hero-content-pagination-selected").css("display", "block"),
	$(".pdp-hero-group-has-2 .pdp-hero:nth-child(2) .hero-content-pagination").css("display", "none"),
	$(".pdp-hero-group-has-2 .pdp-hero:first-child .hero-content-pagination-selected").css("display", "none"),
	$(".pdp-hero-group-has-2 .pdp-hero:first-child .hero-content-pagination").css("display", "block")) : ($(".pdp-hero-group .pdp-hero:nth-child(2) .hero-content").removeClass("selected"),
	$(".pdp-hero-group .pdp-hero:nth-child(2) .hero-content-align").removeClass("selected"),
	$(".pdp-hero-group .pdp-hero:nth-child(2) .hero-background").css({
        opacity: 0
    }),
	$(".pdp-hero-group .pdp-hero:first-child .hero-content").addClass("selected"), $(".pdp-hero-group .pdp-hero:first-child .hero-content-align").addClass("selected"),
	$(".pdp-hero-group .pdp-hero:first-child .hero-background").css({
        opacity: 1
    }),
	$(".pdp-hero-group-has-2 .pdp-hero:first-child .hero-content-pagination-selected").css("display", "block"),
	$(".pdp-hero-group-has-2 .pdp-hero:first-child .hero-content-pagination").css("display", "none"),
	$(".pdp-hero-group-has-2 .pdp-hero:nth-child(2) .hero-content-pagination-selected").css("display", "none"),
	$(".pdp-hero-group-has-2 .pdp-hero:nth-child(2) .hero-content-pagination").css("display", "block")) : $(".pdp-hero-group .pdp-hero:first-child .hero-content").hasClass("selected") || $(".pdp-hero-group .pdp-hero:nth-child(2) .hero-content").hasClass("selected") ? $(".pdp-hero-group .pdp-hero:first-child .hero-content").hasClass("selected") || $(".pdp-hero-group .pdp-hero:nth-child(3) .hero-content").hasClass("selected") ? $(".pdp-hero-group .pdp-hero:nth-child(2) .hero-content").hasClass("selected") || $(".pdp-hero-group .pdp-hero:nth-child(3) .hero-content").hasClass("selected") || ($(".pdp-hero-group .pdp-hero:first-child .hero-content").removeClass("selected"),
	$(".pdp-hero-group .pdp-hero:first-child .hero-content-align").removeClass("selected"),
	$(".pdp-hero-group .pdp-hero:first-child .hero-background").css({
        opacity: 0
    }),
	$(".pdp-hero-group .pdp-hero:nth-child(2) .hero-content").addClass("selected"),
	$(".pdp-hero-group .pdp-hero:nth-child(2) .hero-content-align").addClass("selected"),
	$(".pdp-hero-group .pdp-hero:nth-child(2) .hero-background").css({
        opacity: 1
    }),
	$(".pdp-hero-group-has-3 .pdp-hero:first-child .hero-content-pagination-selected").css("display", "none"),
	$(".pdp-hero-group-has-3 .pdp-hero:first-child .hero-content-pagination").css("display", "block"),
	$(".pdp-hero-group-has-3 .pdp-hero:nth-child(2) .hero-content-pagination-selected").css("display", "block"),
	$(".pdp-hero-group-has-3 .pdp-hero:nth-child(2) .hero-content-pagination").css("display", "none"),
	$(".pdp-hero-group-has-3 .pdp-hero:nth-child(3) .hero-content-pagination-selected").css("display", "none"),
	$(".pdp-hero-group-has-3 .pdp-hero:nth-child(3) .hero-content-pagination").css("display", "block")) : ($(".pdp-hero-group .pdp-hero:nth-child(2) .hero-content").removeClass("selected"),
	$(".pdp-hero-group .pdp-hero:nth-child(2) .hero-content-align").removeClass("selected"),
	$(".pdp-hero-group .pdp-hero:nth-child(2) .hero-background").css({
        opacity: 0
    }),
	$(".pdp-hero-group .pdp-hero:nth-child(3) .hero-content").addClass("selected"),
	$(".pdp-hero-group .pdp-hero:nth-child(3) .hero-content-align").addClass("selected"),
	$(".pdp-hero-group .pdp-hero:nth-child(3) .hero-background").css({
        opacity: 1
    }),
	$(".pdp-hero-group-has-3 .pdp-hero:first-child .hero-content-pagination-selected").css("display", "none"),
	$(".pdp-hero-group-has-3 .pdp-hero:first-child .hero-content-pagination").css("display", "block"),
	$(".pdp-hero-group-has-3 .pdp-hero:nth-child(2) .hero-content-pagination-selected").css("display", "none"),
	$(".pdp-hero-group-has-3 .pdp-hero:nth-child(2) .hero-content-pagination").css("display", "block"),
	$(".pdp-hero-group-has-3 .pdp-hero:nth-child(3) .hero-content-pagination-selected").css("display", "block"),
	$(".pdp-hero-group-has-3 .pdp-hero:nth-child(3) .hero-content-pagination").css("display", "none")) : ($(".pdp-hero-group .pdp-hero:nth-child(3) .hero-content").removeClass("selected"),
	$(".pdp-hero-group .pdp-hero:nth-child(3) .hero-content-align").removeClass("selected"),
	$(".pdp-hero-group .pdp-hero:nth-child(3) .hero-background").css({
        opacity: 0
    }),
	$(".pdp-hero-group .pdp-hero:first-child .hero-content").addClass("selected"),
	$(".pdp-hero-group .pdp-hero:first-child .hero-content-align").addClass("selected"),
	$(".pdp-hero-group .pdp-hero:first-child .hero-background").css({
        opacity: 1
    }),
	$(".pdp-hero-group-has-3 .pdp-hero:first-child .hero-content-pagination-selected").css("display", "block"),
	$(".pdp-hero-group-has-3 .pdp-hero:first-child .hero-content-pagination").css("display", "none"),
	$(".pdp-hero-group-has-3 .pdp-hero:nth-child(2) .hero-content-pagination-selected").css("display", "none"),
	$(".pdp-hero-group-has-3 .pdp-hero:nth-child(2) .hero-content-pagination").css("display", "block"),
	$(".pdp-hero-group-has-3 .pdp-hero:nth-child(3) .hero-content-pagination-selected").css("display", "none"),
	$(".pdp-hero-group-has-3 .pdp-hero:nth-child(3) .hero-content-pagination").css("display", "block"))
}
var templates = {};
templates["basic-overlay"] = new Hogan.Template({
    code: function(e, t, i) {
        var n = this;
        return n.b(i = i || ""), n.b('<a href="#" class="overlay-close"><i class="icon icon-close"></i></a>'), n.b("\n" + i), n.b('<div class="container"></div>'), n.fl()
    },
    partials: {},
    subs: {}
}), templates["carousel-overlay"] = new Hogan.Template({
    code: function(e, t, i) {
        var n = this;
        return n.b(i = i || ""), n.b("\n" + i), n.b('<a href="#" class="overlay-close"><i class="icon icon-close"></i></a>'), n.b("\n"), n.b("\n" + i), n.b('<div class="carousel">'), n.b("\n"), n.b("\n" + i), n.b("</div>"), n.b("\n"), n.b("\n" + i), n.b('<div class="controls">'), n.b("\n" + i), n.b('  <a href="#" class="prev">'), n.b("\n" + i), n.b('    <i class="icon icon-angle-left"></i>'), n.b("\n" + i), n.b("  </a>"), n.b("\n" + i), n.b('  <a href="#" class="next">'), n.b("\n" + i), n.b('    <i class="icon icon-angle-right"></i>'), n.b("\n" + i), n.b("  </a>"), n.b("\n" + i), n.b("</div>"), n.b("\n"), n.b("\n"), n.fl()
    },
    partials: {},
    subs: {}
}), templates.spinner = new Hogan.Template({
    code: function(e, t, i) {
        var n = this;
        return n.b(i = i || ""), n.b('<div class="loading-spinner_overlay"></div>'), n.b("\n" + i), n.b('<div class="loading-spinner_spinner"></div>'), n.b("\n"), n.fl()
    },
    partials: {},
    subs: {}
}), templates["car-campaign-dealer-accordion-item"] = new Hogan.Template({
    code: function(e, t, i) {
        var n = this;
        return n.b(i = i || ""), n.b('<a class="accordion-panel-toggle" data-dealer-id="'), n.b(n.v(n.f("DealerId", e, t, 0))), n.b('">'), n.b("\n" + i), n.b('    <div class="dealer-marker">'), n.b("\n" + i), n.b('        <i class="icon icon-marker"></i>'), n.b("\n" + i), n.b("        <span><b>"), n.b(n.v(n.f("number", e, t, 0))), n.b("</b></span>"), n.b("\n" + i), n.b('        <i class="icon icon-checkmark hidden"></i>'), n.b("\n" + i), n.b("    </div>"), n.b("\n" + i), n.b('    <div class="text">'), n.b("\n" + i), n.b("        <strong>"), n.b(n.v(n.f("Name", e, t, 0))), n.b("</strong>"), n.b("\n" + i), n.b("        "), n.s(n.f("AddressLine1", e, t, 1), e, t, 0, 321, 344, "{{ }}") && (n.rs(e, t, function(e, t, i) {
            i.b("<p>"), i.b(i.v(i.f("AddressLine1", e, t, 0))), i.b("<br>")
        }), e.pop()), n.b("\n" + i), n.b("        "), n.s(n.f("AddressLine2", e, t, 1), e, t, 0, 387, 407, "{{ }}") && (n.rs(e, t, function(e, t, i) {
            i.b(i.v(i.f("AddressLine2", e, t, 0))), i.b("<br>")
        }), e.pop()), n.b("\n" + i), n.b("        "), n.s(n.f("AddressLine3", e, t, 1), e, t, 0, 450, 470, "{{ }}") && (n.rs(e, t, function(e, t, i) {
            i.b(i.v(i.f("AddressLine3", e, t, 0))), i.b("<br>")
        }), e.pop()), n.b("\n" + i), n.b("        "), n.s(n.f("AddressLine4", e, t, 1), e, t, 0, 513, 533, "{{ }}") && (n.rs(e, t, function(e, t, i) {
            i.b(i.v(i.f("AddressLine4", e, t, 0))), i.b("<br>")
        }), e.pop()), n.b("\n" + i), n.b("        "), n.s(n.f("AddressLine5", e, t, 1), e, t, 0, 576, 596, "{{ }}") && (n.rs(e, t, function(e, t, i) {
            i.b(i.v(i.f("AddressLine5", e, t, 0))), i.b("<br>")
        }), e.pop()), n.b("\n" + i), n.b("        "), n.s(n.f("Phone", e, t, 1), e, t, 0, 632, 645, "{{ }}") && (n.rs(e, t, function(e, t, i) {
            i.b(i.v(i.f("Phone", e, t, 0))), i.b("</p>")
        }), e.pop()), n.b("\n" + i), n.b('        <span class="dealer-distance">'), n.b(n.v(n.f("humanReadableDistance", e, t, 0))), n.b("</span>"), n.b("\n" + i), n.b("    </div>"), n.b("\n" + i), n.b("</a>"), n.fl()
    },
    partials: {},
    subs: {}
}), templates["dc-dealer-accordion-item"] = new Hogan.Template({
    code: function(e, t, i) {
        var n = this;
        return n.b(i = i || ""), n.b('<a class="dc accordion-panel-toggle">'), n.b("\n" + i), n.b('    <div class="dealer-marker">'), n.b("\n" + i), n.b('        <i class="icon icon-marker"></i>'), n.b("\n" + i), n.b("        <span>"), n.b(n.v(n.f("number", e, t, 0))), n.b("</span>"), n.b("\n" + i), n.b("    </div>"), n.b("\n" + i), n.b('    <table style="width: 100%;height:100%">'), n.b("\n" + i), n.b("        <tr>"), n.b("\n" + i), n.b("            <td>"), n.b("\n" + i), n.b('                <table class="dealer-content">'), n.b("\n" + i), n.b("                    <tr>"), n.b("\n" + i), n.b("                        <td>"), n.b("\n" + i), n.b('                            <div class="text">'), n.b("\n" + i), n.b("                                <p>"), n.b(n.v(n.f("Name", e, t, 0))), n.b("</p>"), n.b("\n" + i), n.b('                                <p class="dealer-distance"><strong>'), n.b(n.v(n.f("humanReadableDistance", e, t, 0))), n.b("</strong></p>"), n.b("\n" + i), n.b("                            </div>"), n.b("\n" + i), n.b("                        </td>"), n.b("\n" + i), n.b("                    </tr>"), n.b("\n" + i), n.b("                </table>"), n.b("\n" + i), n.b("            </td>"), n.b("\n" + i), n.b('            <td style="width:30px">'), n.b("\n" + i), n.b('                <i class="accordion-arrow icon icon-angle-down"></i>'), n.b("\n" + i), n.b("            </td>"), n.b("\n" + i), n.b("        </tr>"), n.b("\n" + i), n.b("    </table>"), n.b("\n" + i), n.b("</a>"), n.b("\n" + i), n.b('<div class="accordion-content">'), n.b("\n" + i), n.b("    <h6>"), n.b("\n" + i), n.b("        "), n.s(n.f("Url", e, t, 1), e, t, 0, 876, 922, "{{ }}") && (n.rs(e, t, function(e, t, i) {
            i.b('<a href="'), i.b(i.v(i.f("Url", e, t, 0))), i.b('" target="_blank">'), i.b(i.v(i.f("Name", e, t, 0))), i.b("</a>")
        }), e.pop()), n.b("\n" + i), n.b("        "), n.s(n.f("Url", e, t, 1), e, t, 1, 0, 0, "") || n.b(n.v(n.f("Name", e, t, 0))), n.b("\n" + i), n.b("    </h6>"), n.b("\n" + i), n.b("    "), n.s(n.f("AddressLine1", e, t, 1), e, t, 0, 995, 1023, "{{ }}") && (n.rs(e, t, function(e, t, n) {
            n.b("<p>"), n.b("\n" + i), n.b("    "), n.b(n.v(n.f("AddressLine1", e, t, 0))), n.b("<br>")
        }), e.pop()), n.b("\n" + i), n.b("    "), n.s(n.f("AddressLine2", e, t, 1), e, t, 0, 1062, 1082, "{{ }}") && (n.rs(e, t, function(e, t, i) {
            i.b(i.v(i.f("AddressLine2", e, t, 0))), i.b("<br>")
        }), e.pop()), n.b("\n" + i), n.b("    "), n.s(n.f("AddressLine3", e, t, 1), e, t, 0, 1121, 1141, "{{ }}") && (n.rs(e, t, function(e, t, i) {
            i.b(i.v(i.f("AddressLine3", e, t, 0))), i.b("<br>")
        }), e.pop()), n.b("\n" + i), n.b("    "), n.s(n.f("AddressLine4", e, t, 1), e, t, 0, 1180, 1200, "{{ }}") && (n.rs(e, t, function(e, t, i) {
            i.b(i.v(i.f("AddressLine4", e, t, 0))), i.b("<br>")
        }), e.pop()), n.b("\n" + i), n.b("    "), n.s(n.f("AddressLine5", e, t, 1), e, t, 0, 1239, 1259, "{{ }}") && (n.rs(e, t, function(e, t, i) {
            i.b(i.v(i.f("AddressLine5", e, t, 0))), i.b("<br>")
        }), e.pop()), n.b("\n" + i), n.b("    "), n.s(n.f("Phone", e, t, 1), e, t, 0, 1291, 1304, "{{ }}") && (n.rs(e, t, function(e, t, i) {
            i.b(i.v(i.f("Phone", e, t, 0))), i.b("<br>")
        }), e.pop()), n.b("\n" + i), n.b("    "), n.s(n.f("isDiplomat", e, t, 1), e, t, 0, 1334, 1386, "{{ }}") && (n.rs(e, t, function(e, t, i) {
            i.s(i.f("Country", e, t, 1), e, t, 0, 1346, 1374, "{{ }}") && (i.rs(e, t, function(e, t, i) {
                i.b("<strong>"), i.b(i.v(i.f("Country", e, t, 0))), i.b("</strong>")
            }), e.pop())
        }), e.pop()), n.b("\n" + i), n.b("</p>"), n.b("\n" + i), n.b("</div>"), n.fl()
    },
    partials: {},
    subs: {}
}), templates["dealer-accordion-item"] = new Hogan.Template({
    code: function(e, t, i) {
        var n = this;
        return n.b(i = i || ""), n.b('<a class="accordion-panel-toggle">'), n.b("\n" + i), n.b('  <div class="dealer-marker">'), n.b("\n" + i), n.b('    <i class="icon icon-marker"></i>'), n.b("\n" + i), n.b("    <span>"), n.b(n.v(n.f("number", e, t, 0))), n.b("</span>"), n.b("\n" + i), n.b("  </div>"), n.b("\n" + i), n.b('  <div class="text">'), n.b("\n" + i), n.b("    <strong>"), n.b(n.v(n.f("Name", e, t, 0))), n.b("</strong>"), n.b("\n" + i), n.b('    <span class="dealer-distance">'), n.b(n.v(n.f("humanReadableDistance", e, t, 0))), n.b("</span>"), n.b("\n" + i), n.b("  </div>"), n.b("\n" + i), n.b('  <i class="accordion-arrow icon icon-angle-down"></i>'), n.b("\n" + i), n.b("</a>"), n.b("\n"), n.b("\n" + i), n.b('<div class="accordion-content">'), n.b("\n" + i), n.b("    <h6>"), n.b("\n" + i), n.b("      "), n.s(n.f("Url", e, t, 1), e, t, 0, 382, 428, "{{ }}") && (n.rs(e, t, function(e, t, i) {
            i.b('<a href="'), i.b(i.v(i.f("Url", e, t, 0))), i.b('" target="_blank">'), i.b(i.v(i.f("Name", e, t, 0))), i.b("</a>")
        }), e.pop()), n.b("\n" + i), n.b("      "), n.s(n.f("Url", e, t, 1), e, t, 1, 0, 0, "") || n.b(n.v(n.f("Name", e, t, 0))), n.b("\n" + i), n.b("    </h6>"), n.b("\n" + i), n.b("  "), n.s(n.f("AddressLine1", e, t, 1), e, t, 0, 497, 520, "{{ }}") && (n.rs(e, t, function(e, t, i) {
            i.b("<p>"), i.b(i.v(i.f("AddressLine1", e, t, 0))), i.b("<br>")
        }), e.pop()), n.b("\n" + i), n.b("  "), n.s(n.f("AddressLine2", e, t, 1), e, t, 0, 557, 577, "{{ }}") && (n.rs(e, t, function(e, t, i) {
            i.b(i.v(i.f("AddressLine2", e, t, 0))), i.b("<br>")
        }), e.pop()), n.b("\n" + i), n.b("  "), n.s(n.f("AddressLine3", e, t, 1), e, t, 0, 614, 634, "{{ }}") && (n.rs(e, t, function(e, t, i) {
            i.b(i.v(i.f("AddressLine3", e, t, 0))), i.b("<br>")
        }), e.pop()), n.b("\n" + i), n.b("  "), n.s(n.f("AddressLine4", e, t, 1), e, t, 0, 671, 691, "{{ }}") && (n.rs(e, t, function(e, t, i) {
            i.b(i.v(i.f("AddressLine4", e, t, 0))), i.b("<br>")
        }), e.pop()), n.b("\n" + i), n.b("  "), n.s(n.f("AddressLine5", e, t, 1), e, t, 0, 728, 748, "{{ }}") && (n.rs(e, t, function(e, t, i) {
            i.b(i.v(i.f("AddressLine5", e, t, 0))), i.b("<br>")
        }), e.pop()), n.b("\n" + i), n.b("  "), n.s(n.f("Phone", e, t, 1), e, t, 0, 778, 791, "{{ }}") && (n.rs(e, t, function(e, t, i) {
            i.b(i.v(i.f("Phone", e, t, 0))), i.b("</p>")
        }), e.pop()), n.b("\n"), n.b("\n" + i), n.s(n.f("nonUS", e, t, 1), e, t, 0, 817, 1118, "{{ }}") && (n.rs(e, t, function(e, t, n) {
            n.b("        <h6>"), n.b(n.v(n.d("translate.DealerLocator.services", e, t, 0))), n.b("</h6>"), n.b("\n" + i), n.b('        <ul class="dealer-services">'), n.b("\n" + i), n.s(n.f("Services", e, t, 1), e, t, 0, 934, 1086, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                n.s(n.f("ServiceName", e, t, 1), e, t, 0, 965, 1057, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                    n.b("                <li>"), n.b("\n" + i), n.b("                  "), n.b(n.v(n.f("ServiceName", e, t, 0))), n.b("\n" + i), n.b("                </li>"), n.b("\n" + i)
                }), e.pop())
            }), e.pop()), n.b("        </ul>"), n.b("\n" + i)
        }), e.pop()), n.b(" "), n.b("\n"), n.b("\n" + i), n.b('  <ul class="dealer-overlay-links">'), n.b("\n" + i), n.s(n.f("Url", e, t, 1), e, t, 0, 1180, 1413, "{{ }}") && (n.rs(e, t, function(e, t, n) {
            n.b("    <li>"), n.b("\n" + i), n.b('      <a href="'), n.b(n.v(n.f("Url", e, t, 0))), n.b('" class="icon-link" target="_blank">'), n.b("\n" + i), n.b("        "), n.s(n.f("nonUS", e, t, 1), e, t, 0, 1267, 1300, "{{ }}") && (n.rs(e, t, function(e, t, i) {
                i.b('<i class="icon icon-website"></i>')
            }), e.pop()), n.b("\n" + i), n.b("        <span>"), n.b(n.v(n.d("translate.DealerLocator.Frontend_DealerLocator_ShowWebsite", e, t, 0))), n.b("</span></a>"), n.b("\n" + i), n.b("    </li>"), n.b("\n" + i)
        }), e.pop()), n.b("    <li>"), n.b("\n" + i), n.b('      <a href="'), n.b(n.v(n.f("mapURL", e, t, 0))), n.b(n.v(n.d("GeoCode.Latitude", e, t, 0))), n.b(","), n.b(n.v(n.d("GeoCode.Longitude", e, t, 0))), n.b('" class="icon-link" target="_blank">'), n.b("\n" + i), n.b("        "), n.s(n.f("nonUS", e, t, 1), e, t, 0, 1553, 1586, "{{ }}") && (n.rs(e, t, function(e, t, i) {
            i.b('<i class="icon icon-compass"></i>')
        }), e.pop()), n.b("\n" + i), n.b("        <span>"), n.b(n.v(n.d("translate.DealerLocator.Frontend_DealerLocator_GetDirections", e, t, 0))), n.b("</span>"), n.b("\n" + i), n.b("      </a>"), n.b("\n" + i), n.b("    </li>"), n.b("\n" + i), n.b("  </ul>"), n.b("\n"), n.b("\n" + i), n.b("    <!--OD-227-start-->"), n.b("\n" + i), n.b('    <form action="'), n.b(n.v(n.f("ViewInventoryURL", e, t, 0))), n.b('" method="get">'), n.b("\n" + i), n.b('        <div class="view-inventory">'), n.b("\n" + i), n.b('            <button type="submit" formmethod="post" formtarget="_blank" formaction="'), n.b(n.v(n.f("ViewInventoryURL", e, t, 0))), n.b('">'), n.b(n.v(n.d("translate.DealerLocator.ViewInventory", e, t, 0))), n.b("</button>"), n.b("\n" + i), n.b("        </div>"), n.b("\n" + i), n.b("    </form>"), n.b("\n" + i), n.b("    <!--OD-227-end-->"), n.b("\n"), n.b("\n" + i), n.b("</div>"), n.fl()
    },
    partials: {},
    subs: {}
}), templates["dealer-accordion-servicetype"] = new Hogan.Template({
    code: function(e, t, i) {
        var n = this;
        return n.b(i = i || ""), n.b("<!--OD-90-Started"), n.b("\n" + i), n.b("New html file has been introduced for displaying the dealer list information based on Servicetype tab selection at UI-->"), n.b("\n" + i), n.b('<a class="accordion-panel-toggle">'), n.b("\n" + i), n.b('    <div class="dealer-marker">'), n.b("\n" + i), n.b('        <i class="icon icon-marker '), n.b(n.v(n.f("ServiceType", e, t, 0))), n.b('"></i>        '), n.b("\n" + i), n.b("        <span>"), n.b(n.v(n.f("number", e, t, 0))), n.b("</span>"), n.b("\n" + i), n.b("    </div>"), n.b("\n" + i), n.b('    <div class="text">'), n.b("\n" + i), n.b("        <strong>"), n.b(n.v(n.f("Name", e, t, 0))), n.b("</strong>"), n.b("\n" + i), n.b('        <span class="dealer-distance">'), n.b(n.v(n.f("humanReadableDistance", e, t, 0))), n.b("</span>"), n.b("\n" + i), n.b("    </div>"), n.b("\n" + i), n.b('    <i class="accordion-arrow icon icon-angle-down"></i>'), n.b("\n" + i), n.b("</a>"), n.b("\n" + i), n.b('<div class="accordion-content">'), n.b("\n" + i), n.b("    <h6>"), n.b("\n" + i), n.b("        "), n.s(n.f("Url", e, t, 1), e, t, 0, 572, 618, "{{ }}") && (n.rs(e, t, function(e, t, i) {
            i.b('<a href="'), i.b(i.v(i.f("Url", e, t, 0))), i.b('" target="_blank">'), i.b(i.v(i.f("Name", e, t, 0))), i.b("</a>")
        }), e.pop()), n.b("\n" + i), n.b("        "), n.s(n.f("Url", e, t, 1), e, t, 1, 0, 0, "") || n.b(n.v(n.f("Name", e, t, 0))), n.b("\n" + i), n.b("    </h6>"), n.b("\n" + i), n.b("    "), n.s(n.f("AddressLine1", e, t, 1), e, t, 0, 691, 723, "{{ }}") && (n.rs(e, t, function(e, t, n) {
            n.b("<p>"), n.b("\n" + i), n.b("        "), n.b(n.v(n.f("AddressLine1", e, t, 0))), n.b("<br>")
        }), e.pop()), n.b("\n" + i), n.b("        "), n.s(n.f("AddressLine2", e, t, 1), e, t, 0, 766, 786, "{{ }}") && (n.rs(e, t, function(e, t, i) {
            i.b(i.v(i.f("AddressLine2", e, t, 0))), i.b("<br>")
        }), e.pop()), n.b("\n" + i), n.b("        "), n.s(n.f("AddressLine3", e, t, 1), e, t, 0, 829, 849, "{{ }}") && (n.rs(e, t, function(e, t, i) {
            i.b(i.v(i.f("AddressLine3", e, t, 0))), i.b("<br>")
        }), e.pop()), n.b("\n" + i), n.b("        "), n.s(n.f("AddressLine4", e, t, 1), e, t, 0, 892, 912, "{{ }}") && (n.rs(e, t, function(e, t, i) {
            i.b(i.v(i.f("AddressLine4", e, t, 0))), i.b("<br>")
        }), e.pop()), n.b("\n" + i), n.b("        "), n.s(n.f("AddressLine5", e, t, 1), e, t, 0, 955, 975, "{{ }}") && (n.rs(e, t, function(e, t, i) {
            i.b(i.v(i.f("AddressLine5", e, t, 0))), i.b("<br>")
        }), e.pop()), n.b("\n" + i), n.b("        "), n.s(n.f("Phone", e, t, 1), e, t, 0, 1011, 1029, "{{ }}") && (n.rs(e, t, function(e, t, n) {
            n.b(n.v(n.f("Phone", e, t, 0))), n.b("\n" + i), n.b("    </p>")
        }), e.pop()), n.b("\n"), n.b("\n" + i), n.s(n.f("nonUS", e, t, 1), e, t, 0, 1055, 1302, "{{ }}") && (n.rs(e, t, function(e, t, n) {
            n.b("    <h6>"), n.b(n.v(n.d("translate.DealerLocator.services", e, t, 0))), n.b("</h6>"), n.b("\n" + i), n.b('    <ul class="dealer-services">'), n.b("\n" + i), n.s(n.f("Services", e, t, 1), e, t, 0, 1160, 1274, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                n.s(n.f("ServiceName", e, t, 1), e, t, 0, 1185, 1249, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                    n.b("        <li>"), n.b("\n" + i), n.b("            "), n.b(n.v(n.f("ServiceName", e, t, 0))), n.b("\n" + i), n.b("        </li>"), n.b("\n" + i)
                }), e.pop())
            }), e.pop()), n.b("    </ul>"), n.b("\n" + i)
        }), e.pop()), n.b("\n"), n.b("\n" + i), n.b('    <ul class="dealer-overlay-links">'), n.b("\n" + i), n.s(n.f("Url", e, t, 1), e, t, 0, 1369, 1649, "{{ }}") && (n.rs(e, t, function(e, t, n) {
            n.b("        <li>"), n.b("\n" + i), n.b('            <a href="'), n.b(n.v(n.f("Url", e, t, 0))), n.b('" class="icon-link" target="_blank">'), n.b("\n" + i), n.b("                "), n.s(n.f("nonUS", e, t, 1), e, t, 0, 1474, 1507, "{{ }}") && (n.rs(e, t, function(e, t, i) {
                i.b('<i class="icon icon-website"></i>')
            }), e.pop()), n.b("\n" + i), n.b("                <span>"), n.b(n.v(n.d("translate.DealerLocator.Frontend_DealerLocator_ShowWebsite", e, t, 0))), n.b("</span>"), n.b("\n" + i), n.b("            </a>"), n.b("\n" + i), n.b("        </li>"), n.b("\n" + i)
        }), e.pop()), n.b("        <li>"), n.b("\n" + i), n.b('            <a href="'), n.b(n.v(n.f("mapURL", e, t, 0))), n.b(n.v(n.d("GeoCode.Latitude", e, t, 0))), n.b(","), n.b(n.v(n.d("GeoCode.Longitude", e, t, 0))), n.b('" class="icon-link" target="_blank">'), n.b("\n" + i), n.b("                "), n.s(n.f("nonUS", e, t, 1), e, t, 0, 1807, 1840, "{{ }}") && (n.rs(e, t, function(e, t, i) {
            i.b('<i class="icon icon-compass"></i>')
        }), e.pop()), n.b("\n" + i), n.b("                <span>"), n.b(n.v(n.d("translate.DealerLocator.Frontend_DealerLocator_GetDirections", e, t, 0))), n.b("</span>"), n.b("\n" + i), n.b("            </a>"), n.b("\n" + i), n.b("        </li>"), n.b("\n" + i), n.b("    </ul>"), n.b("\n" + i), n.b("</div>"), n.b("\n" + i), n.b("<!--OD-90-Ended-->"), n.b("\n"), n.fl()
    },
    partials: {},
    subs: {}
}), templates["dealer-overlay-servicetype"] = new Hogan.Template({
    code: function(e, t, i) {
        var n = this;
        return n.b(i = i || ""), n.b("<!--OD-90-Started"), n.b("\n" + i), n.b("New html file has been introduced for displaying the dealer list information based on Servicetype tab selection at UIin mobile device-->"), n.b("\n" + i), n.b("<header>"), n.b("\n" + i), n.b('  <div class="dealer-marker">'), n.b("\n" + i), n.b('      <i class="icon icon-marker '), n.b(n.v(n.f("ServiceType", e, t, 0))), n.b('"></i>'), n.b("\n" + i), n.b("    <span>"), n.b(n.v(n.f("number", e, t, 0))), n.b("</span>"), n.b("\n" + i), n.b("  </div>"), n.b("\n" + i), n.b('  <div class="dealer-name">'), n.b("\n" + i), n.b("    <h5>"), n.b(n.v(n.f("Name", e, t, 0))), n.b("</h5>"), n.b("\n" + i), n.b('    <span class="dealer-distance">'), n.b(n.v(n.f("humanReadableDistance", e, t, 0))), n.b("</span>"), n.b("\n" + i), n.b("  </div>"), n.b("\n" + i), n.b('  <a href="#" class="overlay-close">'), n.b("\n" + i), n.b('    <i class="icon icon-close"></i>'), n.b("\n" + i), n.b("  </a>"), n.b("\n" + i), n.b("</header>"), n.b("\n"), n.b("\n" + i), n.b('<div class="overlay-content">'), n.b("\n" + i), n.b('  <div class="dealer-information">'), n.b("\n" + i), n.b("    <h6>"), n.b("\n" + i), n.b("      "), n.s(n.f("Url", e, t, 1), e, t, 0, 591, 637, "{{ }}") && (n.rs(e, t, function(e, t, i) {
            i.b('<a href="'), i.b(i.v(i.f("Url", e, t, 0))), i.b('" target="_blank">'), i.b(i.v(i.f("Name", e, t, 0))), i.b("</a>")
        }), e.pop()), n.b("\n" + i), n.b("      "), n.s(n.f("Url", e, t, 1), e, t, 1, 0, 0, "") || n.b(n.v(n.f("Name", e, t, 0))), n.b("\n" + i), n.b("    </h6>"), n.b("\n" + i), n.b("    "), n.s(n.f("AddressLine1", e, t, 1), e, t, 0, 708, 731, "{{ }}") && (n.rs(e, t, function(e, t, i) {
            i.b("<p>"), i.b(i.v(i.f("AddressLine1", e, t, 0))), i.b("</p>")
        }), e.pop()), n.b("\n" + i), n.b("    "), n.s(n.f("AddressLine2", e, t, 1), e, t, 0, 770, 793, "{{ }}") && (n.rs(e, t, function(e, t, i) {
            i.b("<p>"), i.b(i.v(i.f("AddressLine2", e, t, 0))), i.b("</p>")
        }), e.pop()), n.b("\n" + i), n.b("    "), n.s(n.f("AddressLine3", e, t, 1), e, t, 0, 832, 855, "{{ }}") && (n.rs(e, t, function(e, t, i) {
            i.b("<p>"), i.b(i.v(i.f("AddressLine3", e, t, 0))), i.b("</p>")
        }), e.pop()), n.b("\n" + i), n.b("    "), n.s(n.f("AddressLine4", e, t, 1), e, t, 0, 894, 917, "{{ }}") && (n.rs(e, t, function(e, t, i) {
            i.b("<p>"), i.b(i.v(i.f("AddressLine4", e, t, 0))), i.b("</p>")
        }), e.pop()), n.b("\n" + i), n.b("    "), n.s(n.f("AddressLine5", e, t, 1), e, t, 0, 956, 979, "{{ }}") && (n.rs(e, t, function(e, t, i) {
            i.b("<p>"), i.b(i.v(i.f("AddressLine5", e, t, 0))), i.b("</p>")
        }), e.pop()), n.b("\n" + i), n.b("    "), n.s(n.f("Phone", e, t, 1), e, t, 0, 1011, 1048, "{{ }}") && (n.rs(e, t, function(e, t, i) {
            i.b('<a href="tel:'), i.b(i.v(i.f("Phone", e, t, 0))), i.b('">'), i.b(i.v(i.f("Phone", e, t, 0))), i.b("</a>")
        }), e.pop()), n.b("\n"), n.b("\n" + i), n.s(n.f("nonUS", e, t, 1), e, t, 0, 1070, 1313, "{{ }}") && (n.rs(e, t, function(e, t, n) {
            n.b("    <h6>"), n.b(n.v(n.d("translate.DealerLocator.services", e, t, 0))), n.b("</h6>"), n.b("\n" + i), n.b('    <ul class="dealer-services">'), n.b("\n" + i), n.s(n.f("Services", e, t, 1), e, t, 0, 1173, 1289, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                n.s(n.f("ServiceName", e, t, 1), e, t, 0, 1198, 1266, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                    n.b("          <li>"), n.b("\n" + i), n.b("            "), n.b(n.v(n.f("ServiceName", e, t, 0))), n.b("\n" + i), n.b("          </li>"), n.b("\n" + i)
                }), e.pop())
            }), e.pop()), n.b("    </ul>"), n.b("\n" + i)
        }), e.pop()), n.b("  </div>"), n.b("\n"), n.b("\n" + i), n.b('  <ul class="dealer-overlay-links link-item-caps">'), n.b("\n" + i), n.s(n.f("Url", e, t, 1), e, t, 0, 1397, 1630, "{{ }}") && (n.rs(e, t, function(e, t, n) {
            n.b("    <li>"), n.b("\n" + i), n.b('      <a href="'), n.b(n.v(n.f("Url", e, t, 0))), n.b('" class="icon-link" target="_blank">'), n.b("\n" + i), n.b("        "), n.s(n.f("nonUS", e, t, 1), e, t, 0, 1484, 1517, "{{ }}") && (n.rs(e, t, function(e, t, i) {
                i.b('<i class="icon icon-website"></i>')
            }), e.pop()), n.b("\n" + i), n.b("        <span>"), n.b(n.v(n.d("translate.DealerLocator.Frontend_DealerLocator_ShowWebsite", e, t, 0))), n.b("</span></a>"), n.b("\n" + i), n.b("    </li>"), n.b("\n" + i)
        }), e.pop()), n.b("    <li>"), n.b("\n" + i), n.b('      <a href="'), n.b(n.v(n.f("mapURL", e, t, 0))), n.b(n.v(n.d("GeoCode.Latitude", e, t, 0))), n.b(","), n.b(n.v(n.d("GeoCode.Longitude", e, t, 0))), n.b('" class="icon-link" target="_blank">'), n.b("\n" + i), n.b("        "), n.s(n.f("nonUS", e, t, 1), e, t, 0, 1770, 1803, "{{ }}") && (n.rs(e, t, function(e, t, i) {
            i.b('<i class="icon icon-compass"></i>')
        }), e.pop()), n.b("\n" + i), n.b("        <span>"), n.b(n.v(n.d("translate.DealerLocator.Frontend_DealerLocator_GetDirections", e, t, 0))), n.b("</span>"), n.b("\n" + i), n.b("      </a>"), n.b("\n" + i), n.b("    </li>"), n.b("\n" + i), n.b("  </ul>"), n.b("\n"), n.b("\n"), n.b("\n" + i), n.b("</div>"), n.b("\n" + i), n.b("<!--OD-90-Ended-->"), n.fl()
    },
    partials: {},
    subs: {}
}), templates["dealer-overlay"] = new Hogan.Template({
    code: function(e, t, i) {
        var n = this;
        return n.b(i = i || ""), n.b("\n" + i), n.b("<header>"), n.b("\n" + i), n.b('  <div class="dealer-marker">'), n.b("\n" + i), n.b('    <i class="icon icon-marker"></i>'), n.b("\n" + i), n.b("    <span>"), n.b(n.v(n.f("number", e, t, 0))), n.b("</span>"), n.b("\n" + i), n.b("  </div>"), n.b("\n" + i), n.b('  <div class="dealer-name">'), n.b("\n" + i), n.b("    <h5>"), n.b(n.v(n.f("Name", e, t, 0))), n.b("</h5>"), n.b("\n" + i), n.b('    <span class="dealer-distance">'), n.b(n.v(n.f("humanReadableDistance", e, t, 0))), n.b("</span>"), n.b("\n" + i), n.b("  </div>"), n.b("\n" + i), n.b('  <a href="#" class="overlay-close">'), n.b("\n" + i), n.b('    <i class="icon icon-close"></i>'), n.b("\n" + i), n.b("  </a>"), n.b("\n" + i), n.b("</header>"), n.b("\n"), n.b("\n" + i), n.b('<div class="overlay-content">'), n.b("\n" + i), n.b('  <div class="dealer-information">'), n.b("\n" + i), n.b("    <h6>"), n.b("\n" + i), n.b("      "), n.s(n.f("Url", e, t, 1), e, t, 0, 419, 465, "{{ }}") && (n.rs(e, t, function(e, t, i) {
            i.b('<a href="'), i.b(i.v(i.f("Url", e, t, 0))), i.b('" target="_blank">'), i.b(i.v(i.f("Name", e, t, 0))), i.b("</a>")
        }), e.pop()), n.b("\n" + i), n.b("      "), n.s(n.f("Url", e, t, 1), e, t, 1, 0, 0, "") || n.b(n.v(n.f("Name", e, t, 0))), n.b("\n" + i), n.b("    </h6>"), n.b("\n" + i), n.b("    "), n.s(n.f("AddressLine1", e, t, 1), e, t, 0, 536, 559, "{{ }}") && (n.rs(e, t, function(e, t, i) {
            i.b("<p>"), i.b(i.v(i.f("AddressLine1", e, t, 0))), i.b("</p>")
        }), e.pop()), n.b("\n" + i), n.b("    "), n.s(n.f("AddressLine2", e, t, 1), e, t, 0, 598, 621, "{{ }}") && (n.rs(e, t, function(e, t, i) {
            i.b("<p>"), i.b(i.v(i.f("AddressLine2", e, t, 0))), i.b("</p>")
        }), e.pop()), n.b("\n" + i), n.b("    "), n.s(n.f("AddressLine3", e, t, 1), e, t, 0, 660, 683, "{{ }}") && (n.rs(e, t, function(e, t, i) {
            i.b("<p>"), i.b(i.v(i.f("AddressLine3", e, t, 0))), i.b("</p>")
        }), e.pop()), n.b("\n" + i), n.b("    "), n.s(n.f("AddressLine4", e, t, 1), e, t, 0, 722, 745, "{{ }}") && (n.rs(e, t, function(e, t, i) {
            i.b("<p>"), i.b(i.v(i.f("AddressLine4", e, t, 0))), i.b("</p>")
        }), e.pop()), n.b("\n" + i), n.b("    "), n.s(n.f("AddressLine5", e, t, 1), e, t, 0, 784, 807, "{{ }}") && (n.rs(e, t, function(e, t, i) {
            i.b("<p>"), i.b(i.v(i.f("AddressLine5", e, t, 0))),
                i.b("</p>")
        }), e.pop()), n.b("\n" + i), n.b("    "), n.s(n.f("Phone", e, t, 1), e, t, 0, 839, 876, "{{ }}") && (n.rs(e, t, function(e, t, i) {
            i.b('<a href="tel:'), i.b(i.v(i.f("Phone", e, t, 0))), i.b('">'), i.b(i.v(i.f("Phone", e, t, 0))), i.b("</a>")
        }), e.pop()), n.b("\n"), n.b("\n" + i), n.s(n.f("nonUS", e, t, 1), e, t, 0, 898, 1141, "{{ }}") && (n.rs(e, t, function(e, t, n) {
            n.b("    <h6>"), n.b(n.v(n.d("translate.DealerLocator.services", e, t, 0))), n.b("</h6>"), n.b("\n" + i), n.b('    <ul class="dealer-services">'), n.b("\n" + i), n.s(n.f("Services", e, t, 1), e, t, 0, 1001, 1117, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                n.s(n.f("ServiceName", e, t, 1), e, t, 0, 1026, 1094, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                    n.b("          <li>"), n.b("\n" + i), n.b("            "), n.b(n.v(n.f("ServiceName", e, t, 0))), n.b("\n" + i), n.b("          </li>"), n.b("\n" + i)
                }), e.pop())
            }), e.pop()), n.b("    </ul>"), n.b("\n" + i)
        }), e.pop()), n.b("  </div>"), n.b("\n"), n.b("\n" + i), n.b('  <ul class="dealer-overlay-links">'), n.b("\n" + i), n.s(n.f("Url", e, t, 1), e, t, 0, 1210, 1443, "{{ }}") && (n.rs(e, t, function(e, t, n) {
            n.b("    <li>"), n.b("\n" + i), n.b('      <a href="'), n.b(n.v(n.f("Url", e, t, 0))), n.b('" class="icon-link" target="_blank">'), n.b("\n" + i), n.b("        "), n.s(n.f("nonUS", e, t, 1), e, t, 0, 1297, 1330, "{{ }}") && (n.rs(e, t, function(e, t, i) {
                i.b('<i class="icon icon-website"></i>')
            }), e.pop()), n.b("\n" + i), n.b("        <span>"), n.b(n.v(n.d("translate.DealerLocator.Frontend_DealerLocator_ShowWebsite", e, t, 0))), n.b("</span></a>"), n.b("\n" + i), n.b("    </li>"), n.b("\n" + i)
        }), e.pop()), n.b("    <li>"), n.b("\n" + i), n.b('      <a href="'), n.b(n.v(n.f("mapURL", e, t, 0))), n.b(n.v(n.d("GeoCode.Latitude", e, t, 0))), n.b(","), n.b(n.v(n.d("GeoCode.Longitude", e, t, 0))), n.b('" class="icon-link" target="_blank">'), n.b("\n" + i), n.b("        "), n.s(n.f("nonUS", e, t, 1), e, t, 0, 1583, 1616, "{{ }}") && (n.rs(e, t, function(e, t, i) {
            i.b('<i class="icon icon-compass"></i>')
        }), e.pop()), n.b("\n" + i), n.b("        <span>"), n.b(n.v(n.d("translate.DealerLocator.Frontend_DealerLocator_GetDirections", e, t, 0))), n.b("</span>"), n.b("\n" + i), n.b("      </a>"), n.b("\n" + i), n.b("    </li>"), n.b("\n" + i), n.b("  </ul>"), n.b("\n" + i), n.b("    <!--OD-227-start-->"), n.b("\n" + i), n.b('    <form action="'), n.b(n.v(n.f("ViewInventoryURL", e, t, 0))), n.b('" method="get">'), n.b("\n" + i), n.b('        <div class="view-inventory">'), n.b("\n" + i), n.b('            <button type="submit" formmethod="post" formtarget="_blank" formaction="'), n.b(n.v(n.f("ViewInventoryURL", e, t, 0))), n.b('">'), n.b(n.v(n.d("translate.DealerLocator.ViewInventory", e, t, 0))), n.b("</button>"), n.b("\n" + i), n.b("        </div>"), n.b("\n" + i), n.b("    </form>"), n.b("\n" + i), n.b("    <!--OD-227-end-->"), n.b("\n" + i), n.b("</div>"), n.b("\n"), n.fl()
    },
    partials: {},
    subs: {}
}), templates["customer-editor-card"] = new Hogan.Template({
    code: function(e, t, i) {
        var n = this;
        return n.b(i = i || ""), n.b('<div class="account-setting">'), n.b("\n"), n.b("\n" + i), n.b('	<div class="account-setting-card">'), n.b("\n" + i), n.b("		"), n.b("\n" + i), n.b("		<ul>"), n.b("\n" + i), n.s(n.f("fieldset", e, t, 1), e, t, 0, 93, 334, "{{ }}") && (n.rs(e, t, function(e, t, n) {
            n.s(n.f("stringValue", e, t, 1), e, t, 0, 113, 314, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                n.s(n.f("isHidden", e, t, 1), e, t, 1, 0, 0, "") || (n.b('			<li class="'), n.s(n.f("isSubcontrol", e, t, 1), e, t, 0, 171, 182, "{{ }}") && (n.rs(e, t, function(e, t, i) {
                    i.b("is-sub-item")
                }), e.pop()), n.b('">'), n.b("\n" + i), n.b('				<span class="label">'), n.b(n.v(n.f("label", e, t, 0))), n.b("</span>"), n.b("\n" + i), n.b("				<span>"), n.b(n.v(n.f("stringValue", e, t, 0))), n.b("</span>"), n.b("\n" + i), n.b("			</li>"), n.b("\n" + i))
            }), e.pop())
        }), e.pop()), n.b("		</ul>"), n.b("\n"), n.b("\n" + i), n.b("	</div>"), n.b("\n"), n.b("\n" + i), n.b('	<div class="account-setting-actions">'), n.b("\n" + i), n.b('		<a href="#update">'), n.b(n.v(n.d("translate.MyVolvo.General.Frontend_MyVolvo_Update", e, t, 0))), n.b("</a>"), n.b("\n" + i), n.b("	</div>"), n.b("\n" + i), n.b("</div>"), n.fl()
    },
    partials: {},
    subs: {}
}), templates["customer-editor-form-checkbox"] = new Hogan.Template({
    code: function(e, t, i) {
        var n = this;
        return n.b(i = i || ""), n.b('<input type="checkbox" id="'), n.b(n.v(n.f("fieldname", e, t, 0))), n.b('" name="'), n.b(n.v(n.f("fieldname", e, t, 0))), n.b('" '), n.s(n.f("isChecked", e, t, 1), e, t, 0, 77, 84, "{{ }}") && (n.rs(e, t, function(e, t, i) {
            i.b("checked")
        }), e.pop()), n.b(">"), n.b("\n" + i), n.b('<label for="'), n.b(n.v(n.f("fieldname", e, t, 0))), n.b('"><span>'), n.b(n.v(n.f("label", e, t, 0))), n.b("</span></label>"), n.fl()
    },
    partials: {},
    subs: {}
}), templates["customer-editor-form-hidden"] = new Hogan.Template({
    code: function(e, t, i) {
        var n = this;
        return n.b(i = i || ""), n.b('<input name="'), n.b(n.v(n.f("fieldname", e, t, 0))), n.b('" placeholder="" type="hidden" value="'), n.b(n.v(n.f("value", e, t, 0))), n.b('">'), n.b("\n"), n.fl()
    },
    partials: {},
    subs: {}
}), templates["customer-editor-form-input"] = new Hogan.Template({
    code: function(e, t, i) {
        var n = this;
        return n.b(i = i || ""), n.b('<input name="'), n.b(n.v(n.f("fieldname", e, t, 0))), n.b('" class="'), n.b(n.v(n.f("subtype", e, t, 0))), n.b('" type="text" value="'), n.b(n.v(n.f("value", e, t, 0))), n.b('" '), n.s(n.f("required", e, t, 1), e, t, 0, 91, 99, "{{ }}") && (n.rs(e, t, function(e, t, i) {
            i.b("required")
        }), e.pop()), n.b(">"), n.b("\n"), n.fl()
    },
    partials: {},
    subs: {}
}), templates["customer-editor-form-picture"] = new Hogan.Template({
    code: function(e, t, i) {
        var n = this;
        return n.b(i = i || ""), n.b('<img src="Frontend/Images/profile.jpg" alt="">'), n.fl()
    },
    partials: {},
    subs: {}
}), templates["customer-editor-form-radio"] = new Hogan.Template({
    code: function(e, t, i) {
        var n = this;
        return n.b(i = i || ""), n.b('<div class="form-radio">'), n.b("\n" + i), n.s(n.f("options", e, t, 1), e, t, 0, 38, 250, "{{ }}") && (n.rs(e, t, function(e, t, n) {
            n.b("    <fieldset>"), n.b("\n" + i), n.b('        <input type="radio" name="'), n.b(n.v(n.f("fieldname", e, t, 0))), n.b('" value="'), n.b(n.v(n.f("id", e, t, 0))), n.b('" id="'), n.b(n.v(n.f("fieldname", e, t, 0))), n.b("."), n.b(n.v(n.f("id", e, t, 0))), n.b('" '), n.s(n.f("selected", e, t, 1), e, t, 0, 157, 165, "{{ }}") && (n.rs(e, t, function(e, t, i) {
                i.b(" checked")
            }), e.pop()), n.b(' /><label for="'), n.b(n.v(n.f("fieldname", e, t, 0))), n.b("."), n.b(n.v(n.f("id", e, t, 0))), n.b('">'), n.b(n.v(n.f("value", e, t, 0))), n.b("</label>"), n.b("\n" + i), n.b("    </fieldset>"), n.b("\n" + i)
        }), e.pop()), n.b("</div>"), n.fl()
    },
    partials: {},
    subs: {}
}), templates["customer-editor-form-select"] = new Hogan.Template({
    code: function(e, t, i) {
        var n = this;
        return n.b(i = i || ""), n.b("\n" + i), n.b('<div class="form-dropdown">'), n.b("\n" + i), n.b('	<select name="'), n.b(n.v(n.f("fieldname", e, t, 0))), n.b('">'), n.b("\n" + i), n.s(n.f("options", e, t, 1), e, t, 0, 74, 156, "{{ }}") && (n.rs(e, t, function(e, t, n) {
            n.b('		<option value="'), n.b(n.v(n.f("id", e, t, 0))), n.b('" '), n.s(n.f("selected", e, t, 1), e, t, 0, 113, 121, "{{ }}") && (n.rs(e, t, function(e, t, i) {
                i.b("selected")
            }), e.pop()), n.b(">"), n.b(n.v(n.f("value", e, t, 0))), n.b("</option>"), n.b("\n" + i)
        }), e.pop()), n.b("	</select>"), n.b("\n" + i), n.b('	<i class="icon icon-angle-down"></i>'), n.b("\n" + i), n.b("</div>"), n.fl()
    },
    partials: {},
    subs: {}
}), templates["customer-editor-form"] = new Hogan.Template({
    code: function(e, t, i) {
        var n = this;
        return n.b(i = i || ""), n.b('<form class="account-form" id="account-form">'), n.b("\n" + i), n.s(n.f("fieldset", e, t, 1), e, t, 0, 60, 864, "{{ }}") && (n.rs(e, t, function(e, t, n) {
            n.b('	<div class="form-item'), n.s(n.f("isSubcontrol", e, t, 1), e, t, 0, 100, 112, "{{ }}") && (n.rs(e, t, function(e, t, i) {
                i.b(" is-sub-item")
            }), e.pop()), n.s(n.f("hasSubcontrols", e, t, 1), e, t, 0, 148, 162, "{{ }}") && (n.rs(e, t, function(e, t, i) {
                i.b(" has-sub-items")
            }), e.pop()), n.b(" "), n.s(n.f("isHidden", e, t, 1), e, t, 0, 195, 211, "{{ }}") && (n.rs(e, t, function(e, t, i) {
                i.b("form-item-hidden")
            }), e.pop()), n.b('">'), n.b("\n" + i), n.s(n.f("isHidden", e, t, 1), e, t, 1, 0, 0, "") || (n.b('        <div class="form-desc">'), n.b(n.v(n.f("desc", e, t, 0))), n.b("</div>"), n.b("\n" + i), n.s(n.f("isCheckbox", e, t, 1), e, t, 1, 0, 0, "") || (n.b("        <label>"), n.b("\n" + i), n.b("            <span>"), n.b(n.v(n.f("label", e, t, 0))), n.b("</span>"), n.b("\n" + i), n.s(n.f("required", e, t, 1), e, t, 0, 395, 472, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                n.s(n.f("label", e, t, 1), e, t, 0, 405, 462, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                    n.b('            <span class="form-req">*</span>'), n.b("\n" + i)
                }), e.pop())
            }), e.pop()), n.b("        </label>"), n.b("\n" + i))), n.s(n.f("isInput", e, t, 1), e, t, 0, 563, 580, "{{ }}") && (n.rs(e, t, function(e, t, i) {
                i.b(i.rp("<input0", e, t, "		"))
            }), e.pop()), n.s(n.f("isHidden", e, t, 1), e, t, 0, 608, 626, "{{ }}") && (n.rs(e, t, function(e, t, i) {
                i.b(i.rp("<hidden1", e, t, "		"))
            }), e.pop()), n.s(n.f("isSelect", e, t, 1), e, t, 0, 655, 673, "{{ }}") && (n.rs(e, t, function(e, t, i) {
                i.b(i.rp("<select2", e, t, "		"))
            }), e.pop()), n.s(n.f("isCheckbox", e, t, 1), e, t, 0, 710, 742, "{{ }}") && (n.rs(e, t, function(e, t, i) {
                i.b(i.rp("<checkbox3", e, t, "        "))
            }), e.pop()), n.s(n.f("isRadio", e, t, 1), e, t, 0, 778, 807, "{{ }}") && (n.rs(e, t, function(e, t, i) {
                i.b(i.rp("<radio4", e, t, "        "))
            }), e.pop()), n.b('		<span class="form-error"></span>'), n.b("\n" + i), n.b("	</div>"), n.b("\n" + i)
        }), e.pop()), n.b('	<div class="form-item form-actions">'), n.b("\n" + i), n.b('		<a href="#save" class="button">'), n.b(n.v(n.d("translate.MyVolvo.General.Frontend_MyVolvo_Save", e, t, 0))), n.b("</a>"), n.b("\n" + i), n.s(n.f("editOnly", e, t, 1), e, t, 1, 0, 0, "") || (n.b('		<a href="#cancel">'), n.b(n.v(n.d("translate.MyVolvo.General.Frontend_MyVolvo_Cancel", e, t, 0))), n.b("</a>"), n.b("\n" + i)), n.b("	</div>"), n.b("\n" + i), n.b("</form>"), n.b("\n"), n.fl()
    },
    partials: {
        "<input0": {
            name: "input",
            partials: {},
            subs: {}
        },
        "<hidden1": {
            name: "hidden",
            partials: {},
            subs: {}
        },
        "<select2": {
            name: "select",
            partials: {},
            subs: {}
        },
        "<checkbox3": {
            name: "checkbox",
            partials: {},
            subs: {}
        },
        "<radio4": {
            name: "radio",
            partials: {},
            subs: {}
        }
    },
    subs: {}
}), templates["notification-row"] = new Hogan.Template({
    code: function(e, t, i) {
        var n = this;
        return n.b(i = i || ""), n.b('<a class="singlelink" data-id="'), n.b(n.v(n.f("id", e, t, 0))), n.b('" href="'), n.b(n.v(n.d("cta.url", e, t, 0))), n.b('">'), n.b("\n" + i), n.b(n.v(n.f("title", e, t, 0))), n.b("\n" + i), n.b("</a>"), n.b("\n"), n.fl()
    },
    partials: {},
    subs: {}
}), templates.notification = new Hogan.Template({
    code: function(e, t, i) {
        var n = this;
        return n.b(i = i || ""), n.b('<div class="texts">'), n.b("\n" + i), n.s(n.f("title", e, t, 1), e, t, 0, 30, 52, "{{ }}") && (n.rs(e, t, function(e, t, n) {
            n.b("  <h3>"), n.b(n.v(n.f("title", e, t, 0))), n.b("</h3>"), n.b("\n" + i)
        }), e.pop()), n.s(n.f("text", e, t, 1), e, t, 0, 72, 93, "{{ }}") && (n.rs(e, t, function(e, t, n) {
            n.b("  <p>"), n.b(n.t(n.f("text", e, t, 0))), n.b("</p>"), n.b("\n" + i)
        }), e.pop()), n.b(" </div>"), n.b("\n"), n.b("\n" + i), n.s(n.f("cta", e, t, 1), e, t, 0, 120, 186, "{{ }}") && (n.rs(e, t, function(e, t, n) {
            n.b('  <a data-id="'), n.b(n.v(n.f("id", e, t, 0))), n.b('" class="button" href="'), n.b(n.v(n.f("url", e, t, 0))), n.b('">'), n.b(n.v(n.f("text", e, t, 0))), n.b("</a>"), n.b("\n" + i)
        }), e.pop()), n.b("\n" + i), n.s(n.f("fixed", e, t, 1), e, t, 1, 0, 0, "") || (n.b('  <a class="close" href=".">'), n.b("\n" + i), n.b('    <i data-id="'), n.b(n.v(n.f("id", e, t, 0))), n.b('" class="icon icon-close"></i>'), n.b("\n" + i), n.b("  </a>"), n.b("\n" + i)), n.fl()
    },
    partials: {},
    subs: {}
}), templates["car-comparison-data"] = new Hogan.Template({
    code: function(e, t, i) {
        var n = this;
        return n.b(i = i || ""), n.b('<div class="box-wrapper car-comparison-box-wrapper">'), n.b("\n" + i), n.b("  <!-- Highlights -->"), n.b("\n" + i), n.b('  <div class="box">'), n.b("\n" + i), n.b('    <h3 class="box-header box-header--secondary">Highlights</h3>'), n.b("\n" + i), n.b('    <table class="cc-table">'), n.b("\n" + i), n.b("      <tr>"), n.b("\n" + i), n.b('        <th><span class="cc-info-icon lightbox">Price</span></th>'), n.b("\n" + i), n.b("        <th></th>"), n.b("\n" + i), n.b("        <th></th>"), n.b("\n" + i), n.b("      </tr>"), n.b("\n" + i), n.b("      <tr>"), n.b("\n" + i), n.b("        <td>321 000 SEK</td>"), n.b("\n" + i), n.b("        <td>241 000 SEK</td>"), n.b("\n" + i), n.b("        <td>251 000 SEK</td>"), n.b("\n" + i), n.b("      </tr>"), n.b("\n" + i), n.b("      <tr>"), n.b("\n" + i), n.b('        <th><span class="cc-info-icon lightbox">Combined Fuel Consumption</span></th>'), n.b("\n" + i), n.b("        <th></th>"), n.b("\n" + i), n.b("        <th></th>"), n.b("\n" + i), n.b("      </tr>"), n.b("\n" + i), n.b("      <tr>"), n.b("\n" + i), n.b("        <td>6.9 l/100km</td>"), n.b("\n" + i), n.b("        <td>6.2 l/100km</td>"), n.b("\n" + i), n.b("        <td>304 hk</td>"), n.b("\n" + i), n.b("      </tr>"), n.b("\n" + i), n.b("      <tr>"), n.b("\n" + i), n.b('        <th><span class="cc-info-icon lightbox">CO2 Emissions</span></th>'), n.b("\n" + i), n.b("        <th></th>"), n.b("\n" + i), n.b("        <th></th>"), n.b("\n" + i), n.b("      </tr>"), n.b("\n" + i), n.b("      <tr>"), n.b("\n" + i), n.b("        <td>144 g/km</td>"), n.b("\n" + i), n.b("        <td>139 g/km</td>"), n.b("\n" + i), n.b("        <td>119 g/km</td>"), n.b("\n" + i), n.b("      </tr>"), n.b("\n" + i), n.b("      <tr>"), n.b("\n" + i), n.b('        <th><span class="cc-info-icon lightbox">Tax Band</span></th>'), n.b("\n" + i), n.b("        <th></th>"), n.b("\n" + i), n.b("        <th></th>"), n.b("\n" + i), n.b("      </tr>"), n.b("\n" + i), n.b("      <tr>"), n.b("\n" + i), n.b('        <td><span class="cc-circle">F</span></td>'), n.b("\n" + i), n.b('        <td><span class="cc-circle">E</span></td>'), n.b("\n" + i), n.b('        <td><span class="cc-circle">E</span></td>'), n.b("\n" + i), n.b("      </tr>"), n.b("\n" + i), n.b("      <tr>"), n.b("\n" + i), n.b('        <th><span class="cc-info-icon lightbox">Horsepower</span></th>'), n.b("\n" + i), n.b("        <th></th>"), n.b("\n" + i), n.b("        <th></th>"), n.b("\n" + i), n.b("      </tr>"), n.b("\n" + i), n.b("      <tr>"), n.b("\n" + i), n.b("        <td>245 hk</td>"), n.b("\n" + i), n.b("        <td>245 hk</td>"), n.b("\n" + i), n.b("        <td>304 hk</td>"), n.b("\n" + i), n.b("      </tr>"), n.b("\n" + i), n.b("      <tr>"), n.b("\n" + i), n.b('        <th><span class="cc-info-icon lightbox">Acceleration (0-100 km/h)</span></th>'), n.b("\n" + i), n.b("        <th></th>"), n.b("\n" + i), n.b("        <th></th>"), n.b("\n" + i), n.b("      </tr>"), n.b("\n" + i), n.b("      <tr>"), n.b("\n" + i), n.b("        <td>6,5 s</td>"), n.b("\n" + i), n.b("        <td>6,3 s</td>"), n.b("\n" + i), n.b("        <td>6 s</td>"), n.b("\n" + i), n.b("      </tr>"), n.b("\n"), n.b("\n" + i), n.b("      <tr>"), n.b("\n" + i), n.b('        <th><span class="cc-info-icon lightbox">Environmental class</span></th>'), n.b("\n" + i), n.b("        <th></th>"), n.b("\n" + i), n.b("        <th></th>"), n.b("\n" + i), n.b("      </tr>"), n.b("\n" + i), n.b("      <tr>"), n.b("\n" + i), n.b("        <td>Euro 5b+</td>"), n.b("\n" + i), n.b("        <td>Euro 5b+</td>"), n.b("\n" + i), n.b("        <td>Euro 6b</td>"), n.b("\n" + i), n.b("      </tr>"), n.b("\n"), n.b("\n" + i), n.b("      <tr>"), n.b("\n" + i), n.b('        <th><span class="cc-info-icon lightbox">Overall Safety, Euro NCAP</span></th>'), n.b("\n" + i), n.b("        <th></th>"), n.b("\n" + i), n.b("        <th></th>"), n.b("\n" + i), n.b("      </tr>"), n.b("\n" + i), n.b("      <tr>"), n.b("\n" + i), n.b("        <td>"), n.b("\n" + i), n.b('          <i class="icon icon-star cc-star"></i>'), n.b("\n" + i), n.b('          <i class="icon icon-star cc-star"></i>'), n.b("\n" + i), n.b('          <i class="icon icon-star cc-star"></i>'), n.b("\n" + i), n.b('          <i class="icon icon-star cc-star"></i>'), n.b("\n" + i), n.b('          <i class="icon icon-star cc-star"></i>'), n.b("\n" + i), n.b("        </td>"), n.b("\n" + i), n.b("        <td>"), n.b("\n" + i), n.b('          <i class="icon icon-star cc-star"></i>'), n.b("\n" + i), n.b('          <i class="icon icon-star cc-star"></i>'), n.b("\n" + i), n.b('          <i class="icon icon-star cc-star"></i>'), n.b("\n" + i), n.b('          <i class="icon icon-star cc-star"></i>'), n.b("\n" + i), n.b('          <i class="icon icon-star cc-star"></i>'), n.b("\n" + i), n.b("        </td>"), n.b("\n" + i), n.b("        <td>"), n.b("\n" + i), n.b('          <i class="icon icon-star cc-star"></i>'), n.b("\n" + i), n.b('          <i class="icon icon-star cc-star"></i>'), n.b("\n" + i), n.b('          <i class="icon icon-star cc-star"></i>'), n.b("\n" + i), n.b('          <i class="icon icon-star cc-star"></i>'), n.b("\n" + i), n.b('          <i class="icon icon-star cc-star"></i>'), n.b("\n" + i), n.b("        </td>"), n.b("\n" + i), n.b("      </tr>"), n.b("\n"), n.b("\n" + i), n.b("      <tr>"), n.b("\n" + i), n.b('        <th><span class="cc-info-icon lightbox">City Safety</span></th>'), n.b("\n" + i), n.b("        <th></th>"), n.b("\n" + i), n.b("        <th></th>"), n.b("\n" + i), n.b("      </tr>"), n.b("\n" + i), n.b("      <tr>"), n.b("\n" + i), n.b('        <td><span class="icon icon-checkmark"></span></td>'), n.b("\n" + i), n.b('        <td><span class="icon icon-checkmark"></span></td>'), n.b("\n" + i), n.b('        <td><span class="icon icon-checkmark"></span></td>'), n.b("\n" + i), n.b("      </tr>"), n.b("\n"), n.b("\n" + i), n.b("      <tr>"), n.b("\n" + i), n.b('        <th><span class="cc-info-icon lightbox">Trunk Space</span></th>'), n.b("\n" + i), n.b("        <th></th>"), n.b("\n" + i), n.b("        <th></th>"), n.b("\n" + i), n.b("      </tr>"), n.b("\n" + i), n.b("      <tr>"), n.b("\n" + i), n.b("        <td>480 l</td>"), n.b("\n" + i), n.b("        <td>380 l</td>"), n.b("\n" + i), n.b("        <td>430 l</td>"), n.b("\n" + i), n.b("      </tr>"), n.b("\n"), n.b("\n" + i), n.b("      <tr>"), n.b("\n" + i), n.b('        <th><span class="cc-info-icon lightbox">Towing Capacity</span></th>'), n.b("\n" + i), n.b("        <th></th>"), n.b("\n" + i), n.b("        <th></th>"), n.b("\n" + i), n.b("      </tr>"), n.b("\n" + i), n.b("      <tr>"), n.b("\n" + i), n.b("        <td>1800 kg</td>"), n.b("\n" + i), n.b("        <td>1600 kg</td>"), n.b("\n" + i), n.b("        <td>1600 kg</td>"), n.b("\n" + i), n.b("      </tr>"), n.b("\n" + i), n.b("    </table>"), n.b("\n" + i), n.b("  </div>"), n.b("\n" + i), n.b("  <!-- / Highlights -->"), n.b("\n"), n.b("\n" + i), n.b("  <!-- Technical specifications -->"), n.b("\n" + i), n.b('  <div class="box">'), n.b("\n" + i), n.b('    <h3 class="box-header box-header--secondary">Technical Specifications</h3>'), n.b("\n" + i), n.b('    <ul class="accordion standard-accordion cc-accordion">'), n.b("\n" + i), n.b("      <!-- Engine -->"), n.b("\n" + i), n.b('      <li class="expanded">'), n.b("\n" + i), n.b('        <div class="accordion-panel-toggle cc-accordion-toggle">'), n.b("\n" + i), n.b('          <span class="cc-accordion-toggle-copy">Engine</span>'), n.b("\n" + i), n.b('          <i class="icon accordion-arrow icon-angle-down cc-accordion-icon"></i>'), n.b("\n" + i), n.b("        </div>"), n.b("\n" + i), n.b('        <div class="accordion-content">'), n.b("\n" + i), n.b('          <table class="cc-table">'), n.b("\n" + i), n.b("            <tr>"), n.b("\n" + i), n.b('              <th><span class="cc-info-icon lightbox">Engine Description</span></th>'), n.b("\n" + i), n.b("              <th></th>"), n.b("\n" + i), n.b("              <th></th>"), n.b("\n" + i), n.b("            </tr>"), n.b("\n" + i), n.b("            <tr>"), n.b("\n" + i), n.b("              <td>2.0 Liter, 4-Cylinder, Turbocharged, Direct-Injection</td>"), n.b("\n" + i), n.b("              <td>2.5 Liter, 5-Cylinder, Turbocharged</td>"), n.b("\n" + i), n.b("              <td>3.0 Liter, 6-Cylinder, Turbocharged</td>"), n.b("\n" + i), n.b("            </tr>"), n.b("\n" + i), n.b("            <tr>"), n.b("\n" + i), n.b('              <th><span class="cc-info-icon lightbox">Drivetrain</span></th>'), n.b("\n" + i), n.b("              <th></th>"), n.b("\n" + i), n.b("              <th></th>"), n.b("\n" + i), n.b("            </tr>"), n.b("\n" + i), n.b("            <tr>"), n.b("\n" + i), n.b("              <td>Front Wheel Drive</td>"), n.b("\n" + i), n.b("              <td>All Wheel Drive</td>"), n.b("\n" + i), n.b("              <td>All Wheel Drive</td>"), n.b("\n" + i), n.b("            </tr>"), n.b("\n" + i), n.b("            <tr>"), n.b("\n" + i), n.b('              <th><span class="cc-info-icon lightbox">Number of Cylinders</span></th>'), n.b("\n" + i), n.b("              <th></th>"), n.b("\n" + i), n.b("              <th></th>"), n.b("\n" + i), n.b("            </tr>"), n.b("\n" + i), n.b("            <tr>"), n.b("\n" + i), n.b("              <td>4</td>"), n.b("\n" + i), n.b("              <td>5</td>"), n.b("\n" + i), n.b("              <td>6</td>"), n.b("\n" + i), n.b("            </tr>"), n.b("\n" + i), n.b("            <tr>"), n.b("\n" + i), n.b('              <th><span class="cc-info-icon lightbox">Engine Displacement</span></th>'), n.b("\n" + i), n.b("              <th></th>"), n.b("\n" + i), n.b("              <th></th>"), n.b("\n" + i), n.b("            </tr>"), n.b("\n" + i), n.b("            <tr>"), n.b("\n" + i), n.b("              <td>2 Liters</td>"), n.b("\n" + i), n.b("              <td>2.5 Liters</td>"), n.b("\n" + i), n.b("              <td>3 Liters</td>"), n.b("\n" + i), n.b("            </tr>"), n.b("\n" + i), n.b("            <tr>"), n.b("\n" + i), n.b('              <th><span class="cc-info-icon lightbox">Horsepower</span></th>'), n.b("\n" + i), n.b("              <th></th>"), n.b("\n" + i), n.b("              <th></th>"), n.b("\n" + i), n.b("            </tr>"), n.b("\n" + i), n.b("            <tr>"), n.b("\n" + i), n.b("              <td>240 hp</td>"), n.b("\n" + i), n.b("              <td>250 hp</td>"), n.b("\n" + i), n.b("              <td>325 hp</td>"), n.b("\n" + i), n.b("            </tr>"), n.b("\n" + i), n.b("            <tr>"), n.b("\n" + i), n.b('              <th><span class="cc-info-icon lightbox">RPM</span></th>'), n.b("\n" + i), n.b("              <th></th>"), n.b("\n" + i), n.b("              <th></th>"), n.b("\n" + i), n.b("            </tr>"), n.b("\n" + i), n.b("            <tr>"), n.b("\n" + i), n.b("              <td>5600 rpm</td>"), n.b("\n" + i), n.b("              <td>5400 rpm</td>"), n.b("\n" + i), n.b("              <td>5600 rpm</td>"), n.b("\n" + i), n.b("            </tr>"), n.b("\n" + i), n.b("            <tr>"), n.b("\n" + i), n.b('              <th><span class="cc-info-icon lightbox">Torque</span></th>'), n.b("\n" + i), n.b("              <th></th>"), n.b("\n" + i), n.b("              <th></th>"), n.b("\n" + i), n.b("            </tr>"), n.b("\n" + i), n.b("            <tr>"), n.b("\n" + i), n.b("              <td>258 lb-ft</td>"), n.b("\n" + i), n.b("              <td>266 lb-ft</td>"), n.b("\n" + i), n.b("              <td>354 lb-ft</td>"), n.b("\n" + i), n.b("            </tr>"), n.b("\n" + i), n.b("          </table>"), n.b("\n" + i), n.b("        </div>"), n.b("\n" + i), n.b("      </li>"), n.b("\n" + i), n.b("      <!-- / Engine -->"), n.b("\n"), n.b("\n" + i), n.b("      <!-- Capacity -->"), n.b("\n" + i), n.b("      <li>"), n.b("\n" + i), n.b('        <div class="accordion-panel-toggle cc-accordion-toggle">'), n.b("\n" + i), n.b('          <span class="cc-accordion-toggle-copy">Capacity</span>'), n.b("\n" + i), n.b('          <i class="icon accordion-arrow icon-angle-down cc-accordion-icon"></i>'), n.b("\n" + i), n.b("        </div>"), n.b("\n" + i), n.b('        <div class="accordion-content">'), n.b("\n" + i), n.b('          <table class="cc-table">'), n.b("\n" + i), n.b("            <tr>"), n.b("\n" + i), n.b('              <th><span class="cc-info-icon lightbox">Something</span></th>'), n.b("\n" + i), n.b("              <th></th>"), n.b("\n" + i), n.b("              <th></th>"), n.b("\n" + i), n.b("            </tr>"), n.b("\n" + i), n.b("            <tr>"), n.b("\n" + i), n.b("              <td>Some values</td>"), n.b("\n" + i), n.b("              <td>Some values</td>"), n.b("\n" + i), n.b("              <td>Some values</td>"), n.b("\n" + i), n.b("            </tr>"), n.b("\n" + i), n.b("          </table>"), n.b("\n" + i), n.b("        </div>"), n.b("\n" + i), n.b("      </li>"), n.b("\n" + i), n.b("      <!-- / Capacity -->"), n.b("\n"), n.b("\n" + i), n.b("      <!-- Weight -->"), n.b("\n" + i), n.b("      <li>"), n.b("\n" + i), n.b('        <div class="accordion-panel-toggle cc-accordion-toggle">'), n.b("\n" + i), n.b('          <span class="cc-accordion-toggle-copy">Weight</span>'), n.b("\n" + i), n.b('          <i class="icon accordion-arrow icon-angle-down cc-accordion-icon"></i>'), n.b("\n" + i), n.b("        </div>"), n.b("\n" + i), n.b('        <div class="accordion-content">'), n.b("\n" + i), n.b('          <table class="cc-table">'), n.b("\n" + i), n.b("            <tr>"), n.b("\n" + i), n.b('              <th><span class="cc-info-icon lightbox">Something</span></th>'), n.b("\n" + i), n.b("              <th></th>"), n.b("\n" + i), n.b("              <th></th>"), n.b("\n" + i), n.b("            </tr>"), n.b("\n" + i), n.b("            <tr>"), n.b("\n" + i), n.b("              <td>Some values</td>"), n.b("\n" + i), n.b("              <td>Some values</td>"), n.b("\n" + i), n.b("              <td>Some values</td>"), n.b("\n" + i), n.b("            </tr>"), n.b("\n" + i), n.b("          </table>"), n.b("\n" + i), n.b("        </div>"), n.b("\n" + i), n.b("      </li>"), n.b("\n" + i), n.b("      <!-- / Weight -->"), n.b("\n"), n.b("\n" + i), n.b("      <!-- Fuel Economy -->"), n.b("\n" + i), n.b("      <li>"), n.b("\n" + i), n.b('        <div class="accordion-panel-toggle cc-accordion-toggle">'), n.b("\n" + i), n.b('          <span class="cc-accordion-toggle-copy">Fuel Economy</span>'), n.b("\n" + i), n.b('          <i class="icon accordion-arrow icon-angle-down cc-accordion-icon"></i>'), n.b("\n" + i), n.b("        </div>"), n.b("\n" + i), n.b('        <div class="accordion-content">'), n.b("\n" + i), n.b('          <table class="cc-table">'), n.b("\n" + i), n.b("            <tr>"), n.b("\n" + i), n.b('              <th><span class="cc-info-icon lightbox">Something</span></th>'), n.b("\n" + i), n.b("              <th></th>"), n.b("\n" + i), n.b("              <th></th>"), n.b("\n" + i), n.b("            </tr>"), n.b("\n" + i), n.b("            <tr>"), n.b("\n" + i), n.b("              <td>Some values</td>"), n.b("\n" + i), n.b("              <td>Some values</td>"), n.b("\n" + i), n.b("              <td>Some values</td>"), n.b("\n" + i), n.b("            </tr>"), n.b("\n" + i), n.b("          </table>"), n.b("\n" + i), n.b("        </div>"), n.b("\n" + i), n.b("      </li>"), n.b("\n" + i), n.b("      <!-- / Fuel Economy -->"), n.b("\n"), n.b("\n" + i), n.b("      <!-- Dimensions -->"), n.b("\n" + i), n.b("      <li>"), n.b("\n" + i), n.b('        <div class="accordion-panel-toggle cc-accordion-toggle">'), n.b("\n" + i), n.b('          <span class="cc-accordion-toggle-copy">Dimensions</span>'), n.b("\n" + i), n.b('          <i class="icon accordion-arrow icon-angle-down cc-accordion-icon"></i>'), n.b("\n" + i), n.b("        </div>"), n.b("\n" + i), n.b('        <div class="accordion-content">'), n.b("\n" + i), n.b('          <table class="cc-table">'), n.b("\n" + i), n.b("            <tr>"), n.b("\n" + i), n.b('              <th><span class="cc-info-icon lightbox">Something</span></th>'), n.b("\n" + i), n.b("              <th></th>"), n.b("\n" + i), n.b("              <th></th>"), n.b("\n" + i), n.b("            </tr>"), n.b("\n" + i), n.b("            <tr>"), n.b("\n" + i), n.b("              <td>Some values</td>"), n.b("\n" + i), n.b("              <td>Some values</td>"), n.b("\n" + i), n.b("              <td>Some values</td>"), n.b("\n" + i), n.b("            </tr>"), n.b("\n" + i), n.b("          </table>"), n.b("\n" + i), n.b("        </div>"), n.b("\n" + i), n.b("      </li>"), n.b("\n" + i), n.b("      <!-- / Dimensions -->"), n.b("\n"), n.b("\n" + i), n.b("      <!-- Environment -->"), n.b("\n" + i), n.b("      <li>"), n.b("\n" + i), n.b('        <div class="accordion-panel-toggle cc-accordion-toggle">'), n.b("\n" + i), n.b('          <span class="cc-accordion-toggle-copy">Environment</span>'), n.b("\n" + i), n.b('          <i class="icon accordion-arrow icon-angle-down cc-accordion-icon"></i>'), n.b("\n" + i), n.b("        </div>"), n.b("\n" + i), n.b('        <div class="accordion-content">'), n.b("\n" + i), n.b('          <table class="cc-table">'), n.b("\n" + i), n.b("            <tr>"), n.b("\n" + i), n.b('              <th><span class="cc-info-icon lightbox">Something</span></th>'), n.b("\n" + i), n.b("              <th></th>"), n.b("\n" + i), n.b("              <th></th>"), n.b("\n" + i), n.b("            </tr>"), n.b("\n" + i), n.b("            <tr>"), n.b("\n" + i), n.b("              <td>Some values</td>"), n.b("\n" + i), n.b("              <td>Some values</td>"), n.b("\n" + i), n.b("              <td>Some values</td>"), n.b("\n" + i), n.b("            </tr>"), n.b("\n" + i), n.b("          </table>"), n.b("\n" + i), n.b("        </div>"), n.b("\n" + i), n.b("      </li>"), n.b("\n" + i), n.b("      <!-- / Environment -->"), n.b("\n" + i), n.b("    </ul>"), n.b("\n" + i), n.b("  </div>"), n.b("\n" + i), n.b("  <!-- / Technical specifications -->"), n.b("\n"), n.b("\n" + i), n.b("<!-- Features & Options -->"), n.b("\n" + i), n.b('<div class="box">'), n.b("\n" + i), n.b('  <h3 class="box-header box-header--secondary">Features &amp; Options</h3>'), n.b("\n" + i), n.b("  "), n.b("\n" + i), n.b("</div>"), n.b("\n" + i), n.b("<!-- / Features & Options -->"), n.b("\n"), n.fl()
    },
    partials: {},
    subs: {}
}), templates["dealer-picker-item"] = new Hogan.Template({
    code: function(e, t, i) {
        var n = this;
        return n.b(i = i || ""), n.b('<div class="dealer-marker">'), n.b("\n" + i), n.b('  <i class="icon icon-marker"></i>'), n.b("\n" + i), n.b("  <span>"), n.b(n.v(n.f("number", e, t, 0))), n.b("</span>"), n.b("\n" + i), n.b("</div>"), n.b("\n"), n.b("\n" + i), n.b('<div class="text-container">'), n.b("\n" + i), n.b('    <div class="text">'), n.b("\n" + i), n.b("        <h6>"), n.b(n.v(n.f("Name", e, t, 0))), n.b("</h6>"), n.b("\n" + i), n.b('        <span class="dealer-distance">'), n.b(n.v(n.f("humanReadableDistance", e, t, 0))), n.b("</span>"), n.b("\n" + i), n.b('        <a onclick="toggle(this)" class="picker-arrow icon icon-angle-down"></a>'), n.b("\n" + i), n.b("    </div>"), n.b("\n" + i), n.b('    <div id="hiddenDealerInfoForCA" style="display:none">'), n.s(n.f("Name", e, t, 1), e, t, 0, 404, 412, "{{ }}") && (n.rs(e, t, function(e, t, i) {
            i.b(i.v(i.f("Name", e, t, 0)))
        }), e.pop()), n.b(" "), n.s(n.f("AddressLine1", e, t, 1), e, t, 0, 439, 455, "{{ }}") && (n.rs(e, t, function(e, t, i) {
            i.b(i.v(i.f("AddressLine1", e, t, 0)))
        }), e.pop()), n.s(n.f("AddressLine2", e, t, 1), e, t, 0, 489, 506, "{{ }}") && (n.rs(e, t, function(e, t, i) {
            i.b(" "), i.b(i.v(i.f("AddressLine2", e, t, 0)))
        }), e.pop()), n.s(n.f("AddressLine3", e, t, 1), e, t, 0, 540, 557, "{{ }}") && (n.rs(e, t, function(e, t, i) {
            i.b(" "), i.b(i.v(i.f("AddressLine3", e, t, 0)))
        }), e.pop()), n.s(n.f("AddressLine4", e, t, 1), e, t, 0, 591, 608, "{{ }}") && (n.rs(e, t, function(e, t, i) {
            i.b(" "), i.b(i.v(i.f("AddressLine4", e, t, 0)))
        }), e.pop()), n.s(n.f("AddressLine5", e, t, 1), e, t, 0, 642, 659, "{{ }}") && (n.rs(e, t, function(e, t, i) {
            i.b(" "), i.b(i.v(i.f("AddressLine5", e, t, 0)))
        }), e.pop()), n.b(" "), n.s(n.f("City", e, t, 1), e, t, 0, 686, 695, "{{ }}") && (n.rs(e, t, function(e, t, i) {
            i.b(i.v(i.f("City", e, t, 0))), i.b(",")
        }), e.pop()), n.s(n.f("CityName", e, t, 1), e, t, 0, 717, 730, "{{ }}") && (n.rs(e, t, function(e, t, i) {
            i.b(i.v(i.f("CityName", e, t, 0))), i.b(",")
        }), e.pop()), n.b(" "), n.s(n.f("District", e, t, 1), e, t, 0, 757, 769, "{{ }}") && (n.rs(e, t, function(e, t, i) {
            i.b(i.v(i.f("District", e, t, 0)))
        }), e.pop()), n.s(n.f("DistrictName", e, t, 1), e, t, 0, 799, 815, "{{ }}") && (n.rs(e, t, function(e, t, i) {
            i.b(i.v(i.f("DistrictName", e, t, 0)))
        }), e.pop()), n.b(" "), n.s(n.f("ZipCode", e, t, 1), e, t, 0, 845, 856, "{{ }}") && (n.rs(e, t, function(e, t, i) {
            i.b(i.v(i.f("ZipCode", e, t, 0)))
        }), e.pop()), n.b(" "), n.s(n.f("Url", e, t, 1), e, t, 0, 877, 884, "{{ }}") && (n.rs(e, t, function(e, t, i) {
            i.b(i.v(i.f("Url", e, t, 0)))
        }), e.pop()), n.b("</div>"), n.b("\n" + i), n.b('    <div class="dealer-map-link-container">'), n.b("\n" + i), n.b('        <p class="dealer-map-link"><a onclick="return grabMap(this);" href="'), n.b(n.v(n.f("mapUrl", e, t, 0))), n.b('" target="_blank">'), n.b(n.v(n.f("SeeInAMapTranslation", e, t, 0))), n.b("</a></p>"), n.b("\n" + i), n.b("    </div>"), n.b("\n" + i), n.b('    <div id="dealer-picker-info-panel" class="selected-dealer-info-container" style="display:none;">'), n.b("\n" + i), n.b('        <div class="selected-dealer-contact-info">'), n.b("\n" + i), n.b('            <table class="info-table">'), n.b("\n" + i), n.s(n.f("CityName", e, t, 1), e, t, 0, 1303, 1611, "{{ }}") && (n.rs(e, t, function(e, t, n) {
            n.s(n.f("CityLabelTranslation", e, t, 1), e, t, 0, 1339, 1577, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                n.b("            <tr>"), n.b("\n" + i), n.b("              <td>"), n.b("\n" + i), n.b("                <label>"), n.b(n.v(n.f("CityLabelTranslation", e, t, 0))), n.b("</label>"), n.b("\n" + i), n.b("              </td>"), n.b("\n" + i), n.b("              <td>"), n.b("\n" + i), n.b('                <span id="dealerCity">'), n.b(n.v(n.f("CityName", e, t, 0))), n.b("</span>"), n.b("\n" + i), n.b("              </td>"), n.b("\n" + i), n.b("            </tr>"), n.b("\n" + i)
            }), e.pop())
        }), e.pop()), n.s(n.f("AddressLine1", e, t, 1), e, t, 0, 1658, 2186, "{{ }}") && (n.rs(e, t, function(e, t, n) {
            n.b("                <tr>"), n.b("\n" + i), n.b("                    <td>"), n.b("\n" + i), n.b("            <label>"), n.b(n.v(n.f("AddressLabelTranslation", e, t, 0))), n.b("</label>"), n.b("\n" + i), n.b("                    </td>"), n.b("\n" + i), n.b("                    <td>"), n.b("\n" + i), n.b('                        <span id="dealerAddress">'), n.s(n.f("AddressLine1", e, t, 1), e, t, 0, 1877, 1893, "{{ }}") && (n.rs(e, t, function(e, t, i) {
                i.b(i.v(i.f("AddressLine1", e, t, 0)))
            }), e.pop()), n.s(n.f("AddressLine2", e, t, 1), e, t, 0, 1927, 1944, "{{ }}") && (n.rs(e, t, function(e, t, i) {
                i.b(" "), i.b(i.v(i.f("AddressLine2", e, t, 0)))
            }), e.pop()), n.s(n.f("AddressLine3", e, t, 1), e, t, 0, 1978, 1995, "{{ }}") && (n.rs(e, t, function(e, t, i) {
                i.b(" "), i.b(i.v(i.f("AddressLine3", e, t, 0)));
            }), e.pop()), n.s(n.f("AddressLine4", e, t, 1), e, t, 0, 2029, 2046, "{{ }}") && (n.rs(e, t, function(e, t, i) {
                i.b(" "), i.b(i.v(i.f("AddressLine4", e, t, 0)))
            }), e.pop()), n.s(n.f("AddressLine5", e, t, 1), e, t, 0, 2080, 2097, "{{ }}") && (n.rs(e, t, function(e, t, i) {
                i.b(" "), i.b(i.v(i.f("AddressLine5", e, t, 0)))
            }), e.pop()), n.b("</span>"), n.b("\n" + i), n.b("                    </td>"), n.b("\n" + i), n.b("                </tr>"), n.b("\n" + i)
        }), e.pop()), n.s(n.f("Phone", e, t, 1), e, t, 0, 2230, 2517, "{{ }}") && (n.rs(e, t, function(e, t, n) {
            n.b("                <tr>"), n.b("\n" + i), n.b("                    <td>"), n.b("\n" + i), n.b("                <label>"), n.b(n.v(n.f("TelephoneLabelTranslation", e, t, 0))), n.b("</label>"), n.b("\n" + i), n.b("                    </td>"), n.b("\n" + i), n.b("                    <td>"), n.b("\n" + i), n.b('                        <span id="dealerPhone">'), n.b(n.v(n.f("Phone", e, t, 0))), n.b("</span>"), n.b("\n" + i), n.b("                    </td>"), n.b("\n" + i), n.b("                </tr>"), n.b("\n" + i)
        }), e.pop()), n.b("            </table>"), n.b("\n" + i), n.b("        </div>"), n.b("\n" + i), n.b('        <div class="selected-dealer-web-info">'), n.b("\n" + i), n.b('            <table class="icon-table">'), n.b("\n" + i), n.s(n.f("GeneralContactEmail", e, t, 1), e, t, 0, 2690, 3037, "{{ }}") && (n.rs(e, t, function(e, t, n) {
            n.b('                <tr id="emailInfo">'), n.b("\n" + i), n.b("                    <td>"), n.b("\n" + i), n.b('                        <a href="mailto:'), n.b(n.v(n.f("GeneralContactEmail", e, t, 0))), n.b('" id="dealerEmail"><span for="dealerEmail" class="icon icon-email"></span> '), n.s(n.f("EmailLabelTranslation", e, t, 1), e, t, 0, 2916, 2941, "{{ }}") && (n.rs(e, t, function(e, t, i) {
                i.b(i.v(i.f("EmailLabelTranslation", e, t, 0)))
            }), e.pop()), n.b(" </a>"), n.b("\n" + i), n.b("                    </td>"), n.b("\n" + i), n.b("                </tr>"), n.b("\n" + i)
        }), e.pop()), n.s(n.f("Url", e, t, 1), e, t, 0, 3086, 3435, "{{ }}") && (n.rs(e, t, function(e, t, n) {
            n.b('                <tr id="webInfo">'), n.b("\n" + i), n.b("                    <td>"), n.b("\n" + i), n.b('                        <a href="'), n.b(n.v(n.f("Url", e, t, 0))), n.b('" target="_blank" id="dealerWebpage"><span for="dealerWebpage" class="icon icon-website"></span> '), n.s(n.f("WebsiteLabelTranslation", e, t, 1), e, t, 0, 3311, 3338, "{{ }}") && (n.rs(e, t, function(e, t, i) {
                i.b(i.v(i.f("WebsiteLabelTranslation", e, t, 0)))
            }), e.pop()), n.b("</a>"), n.b("\n" + i), n.b("                    </td>"), n.b("\n" + i), n.b("                </tr>"), n.b("\n" + i)
        }), e.pop()), n.s(n.f("GeoCode", e, t, 1), e, t, 0, 3472, 3895, "{{ }}") && (n.rs(e, t, function(e, t, n) {
            n.b('                <tr id="mapInfo">'), n.b("\n" + i), n.b("                    <td>"), n.b("\n" + i), n.b('                        <a href="https://maps.google.com/?q='), n.b(n.v(n.d("GeoCode.Latitude", e, t, 0))), n.b(","), n.b(n.v(n.d("GeoCode.Longitude", e, t, 0))), n.b('" target="_blank" id="dealerDirections"><span for="dealerDirections" class="icon icon-compass"></span> '), n.s(n.f("GoogleMapLabelTranslation", e, t, 1), e, t, 0, 3767, 3796, "{{ }}") && (n.rs(e, t, function(e, t, i) {
                i.b(i.v(i.f("GoogleMapLabelTranslation", e, t, 0)))
            }), e.pop()), n.b("</a>"), n.b("\n" + i), n.b("                    </td>"), n.b("\n" + i), n.b("                </tr>"), n.b("\n" + i)
        }), e.pop()), n.b("            </table>"), n.b("\n" + i), n.b("        </div>"), n.b("\n" + i), n.b("    </div>"), n.b("\n" + i), n.b("</div>"), n.fl()
    },
    partials: {},
    subs: {}
}), templates["gallery-overlay-thumbnail"] = new Hogan.Template({
    code: function(e, t, i) {
        var n = this;
        return n.b(i = i || ""), n.b("\n" + i), n.b('<a href="#'), n.b(n.v(n.f("id", e, t, 0))), n.b('">'), n.b("\n" + i), n.b('  <img src="'), n.b(n.v(n.f("src", e, t, 0))), n.b('?w=92" srcset="'), n.b(n.v(n.f("src", e, t, 0))), n.b("?w=92 92w, "), n.b(n.v(n.f("src", e, t, 0))), n.b('?w=184 2x" sizes="100vw" alt="'), n.b(n.v(n.f("alt", e, t, 0))), n.b('" />'), n.b("\n" + i), n.b('  <div class="mask"></div>'), n.b("\n" + i), n.b("</a>"), n.b("\n"), n.fl()
    },
    partials: {},
    subs: {}
}), templates["gallery-overlay"] = new Hogan.Template({
    code: function(e, t, i) {
        var n = this;
        return n.b(i = i || ""), n.b("\n" + i), n.b('<a href="#" class="overlay-close"><i class="icon icon-close"></i></a>'), n.b("\n"), n.b("\n" + i), n.b('<div class="content">'), n.b("\n" + i), n.b('  <div class="detail carousel"></div>'), n.b("\n" + i), n.b('  <div class="thumbnails-scroller">'), n.b("\n" + i), n.b('    <ul class="thumbnails"></ul>'), n.b("\n" + i), n.b("  </div>"), n.b("\n" + i), n.b("</div>"), n.b("\n"), n.b("\n" + i), n.b('<div class="controls">'), n.b("\n" + i), n.b('  <a href="#" class="prev">'), n.b("\n" + i), n.b('    <i class="icon icon-angle-left"></i>'), n.b("\n" + i), n.b("  </a>"), n.b("\n" + i), n.b('  <a href="#" class="next">'), n.b("\n" + i), n.b('    <i class="icon icon-angle-right"></i>'), n.b("\n" + i), n.b("  </a>"), n.b("\n" + i), n.b("</div>"), n.b("\n"), n.b("\n"), n.fl()
    },
    partials: {},
    subs: {}
}), templates["gallery-tabs-buttons"] = new Hogan.Template({
    code: function(e, t, i) {
        var n = this;
        return n.b(i = i || ""), n.b("<li>"), n.b(n.v(n.f("activeId", e, t, 0))), n.b('<a data-gallery-id="'), n.b(n.v(n.f("id", e, t, 0))), n.b('" class="'), n.b(n.v(n.f("classes", e, t, 0))), n.b('" href="#">'), n.b(n.v(n.f("name", e, t, 0))), n.b("</a></li></li>"), n.b("\n"), n.fl()
    },
    partials: {},
    subs: {}
}), templates["overlay-framework"] = new Hogan.Template({
    code: function(e, t, i) {
        var n = this;
        return n.b(i = i || ""), n.b("\n" + i), n.b('<a href="#" class="overlay-close">'), n.b("\n" + i), n.b('  <i class="icon icon-close"></i>'), n.b("\n" + i), n.b("</a>"), n.b("\n"), n.b("\n"), n.fl()
    },
    partials: {},
    subs: {}
}), templates["subnav-hero"] = new Hogan.Template({
    code: function(e, t, i) {
        var n = this;
        return n.b(i = i || ""), n.b('<div class="subnav-hero">'), n.b("\n" + i), n.s(n.f("prev", e, t, 1), e, t, 0, 37, 275, "{{ }}") && (n.rs(e, t, function(e, t, n) {
            n.b('  <div class="subnav-hero--left">'), n.b("\n" + i), n.b('    <a href="'), n.b(n.v(n.d("prev.URL", e, t, 0))), n.b('" class="subnav-hero-button" target="'), n.b(n.v(n.d("prev.Target", e, t, 0))), n.b('">'), n.b("\n" + i), n.b('      <div class="button button-round"><i class="icon icon-angle-left"></i></div>'), n.b("\n" + i), n.b("      "), n.b(n.v(n.d("prev.Title", e, t, 0))), n.b("\n" + i), n.b("    </a>"), n.b("\n" + i), n.b("  </div>"), n.b("\n" + i)
        }), e.pop()), n.s(n.f("next", e, t, 1), e, t, 0, 296, 536, "{{ }}") && (n.rs(e, t, function(e, t, n) {
            n.b('  <div class="subnav-hero--right">'), n.b("\n" + i), n.b('    <a href="'), n.b(n.v(n.d("next.URL", e, t, 0))), n.b('" class="subnav-hero-button" target="'), n.b(n.v(n.d("next.Target", e, t, 0))), n.b('">'), n.b("\n" + i), n.b("      "), n.b(n.v(n.d("next.Title", e, t, 0))), n.b("\n" + i), n.b('      <div class="button button-round"><i class="icon icon-angle-right"></i></div>'), n.b("\n" + i), n.b("    </a>"), n.b("\n" + i), n.b("  </div>"), n.b("\n" + i)
        }), e.pop()), n.b("</div>"), n.fl()
    },
    partials: {},
    subs: {}
}), templates["connect-vehicle-overlay"] = new Hogan.Template({
    code: function(e, t, i) {
        var n = this;
        return n.b(i = i || ""), n.b('<a href="#" class="overlay-close"><i class="icon icon-close"></i></a>'), n.b("\n"), n.b("\n" + i), n.b('<div class="card-title">'), n.b("\n" + i), n.b("    <hgroup>"), n.b("\n" + i), n.b("        <h6></h6>"), n.b("\n" + i), n.b("        <h3>"), n.b(n.v(n.d("translate.MyVolvo.Vehicle.Frontend_MyVolvo_Car_Connect_Title", e, t, 0))), n.b("</h3>"), n.b("\n" + i), n.b("    </hgroup>"), n.b("\n" + i), n.b('    <i class="icon icon-car"></i>'), n.b("\n" + i), n.b("</div>"), n.b("\n"), n.b("\n" + i), n.b('<div class="card-content">'), n.b("\n" + i), n.b("    <p>"), n.b(n.v(n.d("translate.MyVolvo.Vehicle.Frontend_MyVolvo_Confirm_Information", e, t, 0))), n.b("</p>"), n.b("\n" + i), n.b("    <p>"), n.b(n.v(n.d("translate.MyVolvo.General.Frontend_MyVolvo_ThankYou", e, t, 0))), n.b("</p>"), n.b("\n" + i), n.b("</div>"), n.b("\n"), n.b("\n"), n.b("\n" + i), n.b('<div class="card-content vehicle-overlay-details">'), n.b("\n" + i), n.b('    <div class="card-content">'), n.b("\n" + i), n.b('        <div class="vehicle-image">'), n.b("\n" + i), n.b('            <img src="'), n.b(n.v(n.f("ImageUrl", e, t, 0))), n.b('" alt="'), n.b(n.v(n.f("ModelDescription", e, t, 0))), n.b('" />'), n.b("\n" + i), n.b("        </div>"), n.b("\n"), n.b("\n" + i), n.b('        <div class="vehicle-data">'), n.b("\n" + i), n.b('            <ul class="data-list">'), n.b("\n" + i), n.b("                <li>"), n.b("\n" + i), n.b('                    <span class="label">'), n.b(n.v(n.d("translate.MyVolvo.Vehicle.Frontend_MyVolvo_Vehicle_ModelName", e, t, 0))), n.b("</span>"), n.b("\n" + i), n.b("                    <strong>"), n.b(n.v(n.f("ModelDescription", e, t, 0))), n.b("</strong>"), n.b("\n" + i), n.b("                </li>"), n.b("\n" + i), n.s(n.f("DontShowModelYear", e, t, 1), e, t, 1, 0, 0, "") || (n.b("                <li>"), n.b("\n" + i), n.b('                    <span class="label">'), n.b(n.v(n.d("translate.MyVolvo.Vehicle.Frontend_MyVolvo_Vehicle_ModelYear", e, t, 0))), n.b("</span>"), n.b("\n" + i), n.b("                    <strong>"), n.b(n.v(n.f("ModelYear", e, t, 0))), n.b("</strong>"), n.b("\n" + i), n.b("                </li>"), n.b("\n" + i)), n.b("                <li>"), n.b("\n" + i), n.b('                    <span class="label">'), n.b(n.v(n.d("translate.MyVolvo.Vehicle.Frontend_MyVolvo_Vehicle_Color", e, t, 0))), n.b("</span>"), n.b("\n" + i), n.b("                    <strong>"), n.b(n.v(n.f("ColorDescription", e, t, 0))), n.b("</strong>"), n.b("\n" + i), n.b("                </li>"), n.b("\n" + i), n.s(n.f("GearboxDescription", e, t, 1), e, t, 0, 1459, 1687, "{{ }}") && (n.rs(e, t, function(e, t, n) {
            n.b("                <li>"), n.b("\n" + i), n.b('                    <span class="label">'), n.b(n.v(n.d("translate.MyVolvo.Vehicle.Frontend_MyVolvo_Vehicle_Gearbox", e, t, 0))), n.b("</span>"), n.b("\n" + i), n.b("                    <strong>"), n.b(n.v(n.f("GearboxDescription", e, t, 0))), n.b("</strong>"), n.b("\n" + i), n.b("                </li>"), n.b("\n" + i)
        }), e.pop()), n.s(n.f("UpholsteryDescription", e, t, 1), e, t, 0, 1751, 1985, "{{ }}") && (n.rs(e, t, function(e, t, n) {
            n.b("                <li>"), n.b("\n" + i), n.b('                    <span class="label">'), n.b(n.v(n.d("translate.MyVolvo.Vehicle.Frontend_MyVolvo_Vehicle_Upholstery", e, t, 0))), n.b("</span>"), n.b("\n" + i), n.b("                    <strong>"), n.b(n.v(n.f("UpholsteryDescription", e, t, 0))), n.b("</strong>"), n.b("\n" + i), n.b("                </li>"), n.b("\n" + i)
        }), e.pop()), n.b("            </ul>"), n.b("\n"), n.b("\n" + i), n.b('            <ul class="data-list">'), n.b("\n" + i), n.b("                <li>"), n.b("\n" + i), n.b('                    <span class="label">'), n.b(n.v(n.d("translate.MyVolvo.Vehicle.Frontend_MyVolvo_Vehicle_Vin", e, t, 0))), n.b("</span>"), n.b("\n" + i), n.b("                    <strong>"), n.b(n.v(n.f("VinId", e, t, 0))), n.b("</strong>"), n.b("\n" + i), n.b("                </li>"), n.b("\n" + i), n.s(n.f("LicensePlate", e, t, 1), e, t, 0, 2295, 2524, "{{ }}") && (n.rs(e, t, function(e, t, n) {
            n.b("                <li>"), n.b("\n" + i), n.b('                    <span class="label">'), n.b(n.v(n.d("translate.MyVolvo.Vehicle.Frontend_MyVolvo_Vehicle_LicensePlate", e, t, 0))), n.b("</span>"), n.b("\n" + i), n.b("                    <strong>"), n.b(n.v(n.f("LicensePlate", e, t, 0))), n.b("</strong>"), n.b("\n" + i), n.b("                </li>"), n.b("\n" + i)
        }), e.pop()), n.s(n.f("StructureWeek", e, t, 1), e, t, 0, 2576, 2807, "{{ }}") && (n.rs(e, t, function(e, t, n) {
            n.b("                <li>"), n.b("\n" + i), n.b('                    <span class="label">'), n.b(n.v(n.d("translate.MyVolvo.Vehicle.Frontend_MyVolvo_Vehicle_StructureWeek", e, t, 0))), n.b("</span>"), n.b("\n" + i), n.b("                    <strong>"), n.b(n.v(n.f("StructureWeek", e, t, 0))), n.b("</strong>"), n.b("\n" + i), n.b("                </li>"), n.b("\n" + i)
        }), e.pop()), n.b("                <li>"), n.b("\n" + i), n.b('                    <span class="label">'), n.b(n.v(n.d("translate.MyVolvo.Vehicle.Frontend_MyVolvo_Vehicle_Country", e, t, 0))), n.b("</span>"), n.b("\n" + i), n.b("                    <strong>"), n.b(n.v(n.f("Country", e, t, 0))), n.b("</strong>"), n.b("\n" + i), n.b("                </li>"), n.b("\n" + i), n.s(n.f("Owner", e, t, 1), e, t, 0, 3054, 3288, "{{ }}") && (n.rs(e, t, function(e, t, n) {
            n.b('                <li class="ownerField">'), n.b("\n" + i), n.b('                    <span class="label">'), n.b(n.v(n.d("translate.MyVolvo.Vehicle.Frontend_MyVolvo_Vehicle_Owner", e, t, 0))), n.b("</span>"), n.b("\n" + i), n.b("                    <strong>"), n.b(n.v(n.f("Owner", e, t, 0))), n.b("</strong>"), n.b("\n" + i), n.b("                </li>"), n.b("\n" + i)
        }), e.pop()), n.s(n.f("Owner", e, t, 1), e, t, 1, 0, 0, "") || (n.b('                <li class="ownerField">'), n.b("\n" + i), n.b('                  <span class="label">'), n.b(n.v(n.d("translate.MyVolvo.Vehicle.Frontend_MyVolvo_Vehicle_Owner", e, t, 0))), n.b("</span>"), n.b("\n" + i), n.b("                  <strong>"), n.b(n.v(n.d("translate.MyVolvo.Vehicle.No_Owner", e, t, 0))), n.b("</strong>"), n.b("\n" + i), n.b("                </li>"), n.b("\n" + i)), n.b("            </ul>"), n.b("\n" + i), n.b("        </div>"), n.b("\n" + i), n.b("    </div>"), n.b("\n" + i), n.b("</div>"), n.b("\n"), n.b("\n"), n.b("\n" + i), n.b('<div class="card-content account-form form-wrapper">'), n.b("\n"), n.b("\n" + i), n.b('    <div class="form-item vehicle-relationship">'), n.b("\n" + i), n.b("        <label>"), n.b(n.v(n.d("translate.MyVolvo.Vehicle.Frontend_MyVolvo_Vehicle_Ownership_Relationship", e, t, 0))), n.b("</label>"), n.b("\n" + i), n.s(n.f("Owner", e, t, 1), e, t, 0, 3870, 4110, "{{ }}") && (n.rs(e, t, function(e, t, n) {
            n.b("        <fieldset>"), n.b("\n" + i), n.b('            <input id="radio1" name="relationship" checked type="radio" value="1">'), n.b("\n" + i), n.b('            <label for="radio1">'), n.b(n.v(n.d("translate.MyVolvo.Vehicle.Frontend_MyVolvo_Vehicle_Correct_Owner", e, t, 0))), n.b("</label>"), n.b("\n" + i), n.b("        </fieldset>"), n.b("\n" + i)
        }), e.pop()), n.b("        <fieldset>"), n.b("\n" + i), n.b('            <input id="radio2" name="relationship" '), n.s(n.f("Owner", e, t, 1), e, t, 1, 0, 0, "") || n.b(" checked "), n.b(' type="radio" value="2">'), n.b("\n" + i), n.b('            <label for="radio2">'), n.b(n.v(n.d("translate.MyVolvo.Vehicle.Frontend_MyVolvo_Vehicle_I_Own_It", e, t, 0))), n.b("</label>"), n.b("\n" + i), n.b("        </fieldset>"), n.b("\n" + i), n.b("        <fieldset>"), n.b("\n" + i), n.b('            <input id="radio3" name="relationship" type="radio" value="3">'), n.b("\n" + i), n.b('            <label for="radio3">'), n.b(n.v(n.d("translate.MyVolvo.Vehicle.Frontend_MyVolvo_Vehicle_Someone_Own_It", e, t, 0))), n.b("</label>"), n.b("\n" + i), n.b("        </fieldset>"), n.b("\n" + i), n.b("    </div>"), n.b("\n"), n.b("\n" + i), n.b('    <div class="form-item form-pair vehicle-date">'), n.b("\n"), n.b("\n" + i), n.b('        <div class="dateholder">'), n.b("\n" + i), n.b("            <label>"), n.b("\n" + i), n.b("                <span>"), n.b(n.v(n.d("translate.MyVolvo.Vehicle.Frontend_MyVolvo_Vehicle_Date_Of_Purchase", e, t, 0))), n.b("</span>"), n.b("\n" + i), n.b('                <span class="form-req">*</span>'), n.b("\n" + i), n.b("            </label>"), n.b("\n" + i), n.b('            <div class="form-datepicker">'), n.b("\n" + i), n.b('                <input class="datepicker" id="date" name="date" />'), n.b("\n" + i), n.b('                <span class="form-error">'), n.b(n.v(n.d("translate.MyVolvo.General.Missing_date", e, t, 0))), n.b("</span>"), n.b("\n" + i), n.b("            </div>"), n.b("\n" + i), n.b("        </div>"), n.b("\n" + i), n.b("    </div>"), n.b("\n"), n.b("\n" + i), n.b('    <div class="form-item form-actions">'), n.b("\n" + i), n.b('        <a href="#next" class="button">'), n.b(n.v(n.d("translate.MyVolvo.General.Frontend_MyVolvo_Next", e, t, 0))), n.b("</a>"), n.b("\n" + i), n.b('        <a href="#confirm" class="button">'), n.b(n.v(n.d("translate.MyVolvo.General.Frontend_MyVolvo_Confirm", e, t, 0))), n.b("</a>"), n.b("\n" + i), n.b('        <a href="#cancel">'), n.b(n.v(n.d("translate.MyVolvo.General.Frontend_MyVolvo_Cancel", e, t, 0))), n.b("</a>"), n.b("\n" + i), n.b("    </div> "), n.b("\n" + i), n.b('    <div class="form-item misc-info" id="additionalInfo">'), n.b("\n" + i), n.b("        <br>"), n.b("\n" + i), n.b("        <small>"), n.b(n.v(n.d("translate.MyVolvo.General.Frontend_MyVolvo_SingleAsterisk", e, t, 0))), n.b("</small>"), n.b("\n" + i), n.b("    </div>"), n.b("\n" + i), n.b("</div>"), n.b("\n"), n.fl()
    },
    partials: {},
    subs: {}
}), templates["service-bookings-overlay-carousel-item"] = new Hogan.Template({
    code: function(e, t, i) {
        var n = this;
        return n.b(i = i || ""), n.b("\n" + i), n.b('<div class="card-title">'), n.b("\n" + i), n.b("  <hgroup>"), n.b("\n" + i), n.b("    <h6></h6>"), n.b("\n" + i), n.b("    <h3>"), n.b(n.v(n.d("translate.MyVolvo.Vehicle.Frontend_MyVolvo_UpcomingBooking", e, t, 0))), n.b("</h3>"), n.b("\n" + i), n.b("  </hgroup>"), n.b("\n" + i), n.b('  <i class="icon icon-calendar"></i>'), n.b("\n" + i), n.b("</div>"), n.b("\n"), n.b("\n" + i), n.b('<div class="card-content vehicle-overlay-details">'), n.b("\n"), n.b("\n" + i), n.b('  <div class="vehicle-data">'), n.b("\n" + i), n.b('    <ul class="data-list">'), n.b("\n" + i), n.b("      <li>"), n.b("\n" + i), n.b('        <span class="label">'), n.b(n.v(n.d("translate.MyVolvo.Vehicle.Frontend_MyVolvo_BookingNumber", e, t, 0))), n.b("</span>"), n.b("\n" + i), n.b("        <strong>"), n.b(n.v(n.f("BookingNumber", e, t, 0))), n.b("</strong>"), n.b("\n" + i), n.b("      </li>"), n.b("\n" + i), n.b("      <li>"), n.b("\n" + i), n.b('        <span class="label">'), n.b(n.v(n.d("translate.MyVolvo.Vehicle.Frontend_MyVolvo_DateTime", e, t, 0))), n.b("</span>"), n.b("\n" + i), n.s(n.f("DateTimes", e, t, 1), e, t, 0, 578, 897, "{{ }}") && (n.rs(e, t, function(e, t, n) {
            n.b("        <strong>"), n.b("\n" + i), n.b("          "), n.b(n.v(n.f("Date", e, t, 0))), n.b("<br />"), n.b("\n" + i), n.s(n.f("DropOff", e, t, 1), e, t, 0, 643, 738, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                n.b("          "), n.b(n.v(n.d("translate.MyVolvo.Vehicle.Frontend_MyVolvo_DropOff", e, t, 0))), n.b(": "), n.b(n.v(n.f("DropOff", e, t, 0))), n.b("<br />"), n.b("\n" + i)
            }), e.pop()), n.s(n.f("PickUp", e, t, 1), e, t, 0, 772, 859, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                n.b("          "), n.b(n.v(n.d("translate.MyVolvo.Vehicle.Frontend_MyVolvo_PickUp", e, t, 0))), n.b(": "), n.b(n.v(n.f("PickUp", e, t, 0))), n.b("\n" + i)
            }), e.pop()), n.b("        </strong>"), n.b("\n" + i)
        }), e.pop()), n.b("      </li>"), n.b("\n" + i), n.s(n.f("Dealer", e, t, 1), e, t, 0, 941, 1161, "{{ }}") && (n.rs(e, t, function(e, t, n) {
            n.b("      <li>"), n.b("\n" + i), n.b('        <span class="label">'), n.b(n.v(n.d("translate.MyVolvo.Vehicle.Frontend_MyVolvo_Vehicle_Dealer", e, t, 0))), n.b("</span>"), n.b("\n" + i), n.b("        <strong>"), n.b("\n" + i), n.b('          <a href="'), n.b(n.v(n.f("Link", e, t, 0))), n.b('" target="_blank">'), n.b(n.v(n.f("Name", e, t, 0))), n.b("</a>"), n.b("\n" + i), n.b("        </strong>"), n.b("\n" + i), n.b("      </li>"), n.b("\n" + i)
        }), e.pop()), n.b("      <!--<li>"), n.b("\n" + i), n.b('        <span class="label">'), n.b(n.v(n.d("translate.MyVolvo.Vehicle.Frontend_MyVolvo_Vehicle_ServiceDescription", e, t, 0))), n.b("</span>"), n.b("\n" + i), n.b("        <strong>"), n.b(n.v(n.f("ServiceDescription", e, t, 0))), n.b("</strong>"), n.b("\n" + i), n.b("      </li>-->"), n.b("\n" + i), n.b("    </ul>"), n.b("\n" + i), n.b('    <ul class="data-list">'), n.b("\n" + i), n.b("      <li>"), n.b("\n" + i), n.b('        <span class="label">'), n.b(n.v(n.d("translate.MyVolvo.General.Frontend_MyVolvo_Car", e, t, 0))), n.b("</span>"), n.b("\n" + i), n.b("        <strong>"), n.b(n.v(n.f("ModelDescription", e, t, 0))), n.b("</strong>"), n.b("\n" + i), n.b("      </li>"), n.b("\n" + i), n.b("      <li>"), n.b("\n" + i), n.b('        <span class="label">'), n.b(n.v(n.d("translate.MyVolvo.Vehicle.Frontend_MyVolvo_Vehicle_Vin", e, t, 0))), n.b("</span>"), n.b("\n" + i), n.b("        <strong>"), n.b(n.v(n.f("VinId", e, t, 0))), n.b("</strong>"), n.b("\n" + i), n.b("      </li>"), n.b("\n" + i), n.b("      <li>"), n.b("\n" + i), n.b('        <span class="label">'), n.b(n.v(n.d("translate.MyVolvo.General.Frontend_MyVolvo_Status", e, t, 0))), n.b("</span>"), n.b("\n" + i), n.b("        <strong>"), n.b(n.v(n.f("Status", e, t, 0))), n.b("</strong>"), n.b("\n" + i), n.b("      </li>"), n.b("\n" + i), n.b("    </ul>"), n.b("\n" + i), n.b("  </div>"), n.b("\n"), n.b("\n" + i), n.b('  <div class="vehicle-image">'), n.b("\n" + i), n.b('    <img src="'), n.b(n.v(n.f("VehicleImageUrl", e, t, 0))), n.b('" alt="'), n.b(n.v(n.f("VehicleModelName", e, t, 0))), n.b('" />'), n.b("\n" + i), n.b("  </div>"), n.b("\n"), n.b("\n"), n.b("\n" + i), n.b("</div>"), n.b("\n"), n.b("\n" + i), n.b('<!--<table class="vehicle-overlay-table">'), n.b("\n" + i), n.b("  <tbody>"), n.b("\n" + i), n.s(n.f("Operations", e, t, 1), e, t, 0, 2057, 2222, "{{ }}") && (n.rs(e, t, function(e, t, n) {
            n.b("      <tr>"), n.b("\n" + i), n.b('        <td class="operation-description">'), n.b(n.v(n.f("OperationDescription", e, t, 0))), n.b("</td>"), n.b("\n" + i), n.b('        <td class="operation-price">'), n.b(n.v(n.f("TotalOperationPrice", e, t, 0))), n.b("</td>"), n.b("\n" + i), n.b("      </tr>"), n.b("\n" + i)
        }), e.pop()), n.b("  </tbody>"), n.b("\n" + i), n.b("  <tfoot>"), n.b("\n" + i), n.b("    <tr>"), n.b("\n" + i), n.b("      <td>"), n.b(n.v(n.d("translate.MyVolvo.Vehicle.Frontend_MyVolvo_EstimatedCost", e, t, 0))), n.b("</td>"), n.b("\n" + i), n.b('      <td class="total-price">'), n.b(n.v(n.f("TotalEstimatedPrice", e, t, 0))), n.b("</td>"), n.b("\n" + i), n.b("    </tr>"), n.b("\n" + i), n.b("  </tfoot>"), n.b("\n" + i), n.b("</table>-->"), n.b("\n"), n.b("\n" + i), n.b('<div class="card-content">'), n.b("\n" + i), n.s(n.f("DontShowEdit", e, t, 1), e, t, 1, 0, 0, "") || (n.b('  <a href="'), n.b(n.v(n.d("EditBooking.Link", e, t, 0))), n.b('" class="card-cta desktop">'), n.b("\n" + i), n.b("    <span>"), n.b(n.v(n.d("translate.MyVolvo.Vehicle.Frontend_MyVolvo_EditBooking", e, t, 0))), n.b("</span>"), n.b("\n" + i), n.b('    <i class="icon icon-arrow"></i>'), n.b("\n" + i), n.b("  </a>"), n.b("\n" + i), n.b('  <a style="display:none;" href="'), n.b(n.v(n.d("EditBooking.LinkForMobileDevice", e, t, 0))), n.b('" class="card-cta mobile">'), n.b("\n" + i), n.b("    <span>"), n.b(n.v(n.d("translate.MyVolvo.Vehicle.Frontend_MyVolvo_EditBooking", e, t, 0))), n.b("</span>"), n.b("\n" + i), n.b('    <i class="icon icon-arrow"></i>'), n.b("\n" + i), n.b("  </a>"), n.b("\n" + i)), n.s(n.f("CantEditMessage", e, t, 1), e, t, 0, 2918, 2945, "{{ }}") && (n.rs(e, t, function(e, t, n) {
            n.b("    "), n.b(n.v(n.f("CantEditMessage", e, t, 0))), n.b("\n" + i)
        }), e.pop()), n.b("</div>"), n.b("\n"), n.fl()
    },
    partials: {},
    subs: {}
}), templates["remove-vehicle-overlay"] = new Hogan.Template({
    code: function(e, t, i) {
        var n = this;
        return n.b(i = i || ""), n.b('<a href="#" class="overlay-close"><i class="icon icon-close"></i></a>'), n.b("\n"), n.b("\n" + i), n.b('<div class="card-title">'), n.b("\n" + i), n.b("  <hgroup>"), n.b("\n" + i), n.b("    <h6></h6>"), n.b("\n" + i), n.b("    <h3>"), n.b(n.v(n.d("translate.MyVolvo.Vehicle.Frontend_MyVolvo_Car_Disconnect_Title", e, t, 0))), n.b("</h3>"), n.b("\n" + i), n.b("  </hgroup>"), n.b("\n" + i), n.b('  <i class="icon icon-car"></i>'), n.b("\n" + i), n.b("</div>"), n.b("\n"), n.b("\n"), n.b("\n" + i), n.b('<div class="card-content vehicle-overlay-details">'), n.b("\n" + i), n.b('  <div class="card-content">'), n.b("\n" + i), n.b('    <div class="vehicle-image">'), n.b("\n" + i), n.b('      <img src="'), n.b(n.v(n.f("ImageUrl", e, t, 0))), n.b('" alt="'), n.b(n.v(n.f("ModelDescription", e, t, 0))), n.b('" />'), n.b("\n" + i), n.b("    </div>"), n.b("\n"), n.b("\n" + i), n.b('    <div class="vehicle-data">'), n.b("\n" + i), n.b('      <ul class="data-list">'), n.b("\n" + i), n.s(n.f("ModelDescription", e, t, 1), e, t, 0, 528, 714, "{{ }}") && (n.rs(e, t, function(e, t, n) {
            n.b("        <li>"), n.b("\n" + i), n.b('          <span class="label">'), n.b(n.v(n.d("translate.MyVolvo.Vehicle.Frontend_MyVolvo_Vehicle_ModelName", e, t, 0))), n.b("</span>"), n.b("\n" + i), n.b("          <strong>"), n.b(n.v(n.f("ModelDescription", e, t, 0))), n.b("</strong>"), n.b("\n" + i), n.b("        </li>"), n.b("\n" + i)
        }), e.pop()), n.s(n.f("DontShowModelYear", e, t, 1), e, t, 1, 0, 0, "") || (n.b("        <li>"), n.b("\n" + i), n.b('          <span class="label">'), n.b(n.v(n.d("translate.MyVolvo.Vehicle.Frontend_MyVolvo_Vehicle_ModelYear", e, t, 0))), n.b("</span>"), n.b("\n" + i), n.b("          <strong>"), n.b(n.v(n.f("ModelYear", e, t, 0))), n.b("</strong>"), n.b("\n" + i), n.b("        </li>"), n.b("\n" + i)), n.s(n.f("ColorDescription", e, t, 1), e, t, 0, 997, 1179, "{{ }}") && (n.rs(e, t, function(e, t, n) {
            n.b("        <li>"), n.b("\n" + i), n.b('          <span class="label">'), n.b(n.v(n.d("translate.MyVolvo.Vehicle.Frontend_MyVolvo_Vehicle_Color", e, t, 0))), n.b("</span>"), n.b("\n" + i), n.b("          <strong>"), n.b(n.v(n.f("ColorDescription", e, t, 0))), n.b("</strong>"), n.b("\n" + i), n.b("        </li>"), n.b("\n" + i)
        }), e.pop()), n.s(n.f("GearboxDescription", e, t, 1), e, t, 0, 1232, 1418, "{{ }}") && (n.rs(e, t, function(e, t, n) {
            n.b("        <li>"), n.b("\n" + i), n.b('          <span class="label">'), n.b(n.v(n.d("translate.MyVolvo.Vehicle.Frontend_MyVolvo_Vehicle_Gearbox", e, t, 0))), n.b("</span>"), n.b("\n" + i), n.b("          <strong>"), n.b(n.v(n.f("GearboxDescription", e, t, 0))), n.b("</strong>"), n.b("\n" + i), n.b("        </li>"), n.b("\n" + i)
        }), e.pop()), n.s(n.f("UpholsteryDescription", e, t, 1), e, t, 0, 1476, 1668, "{{ }}") && (n.rs(e, t, function(e, t, n) {
            n.b("        <li>"), n.b("\n" + i), n.b('          <span class="label">'), n.b(n.v(n.d("translate.MyVolvo.Vehicle.Frontend_MyVolvo_Vehicle_Upholstery", e, t, 0))), n.b("</span>"), n.b("\n" + i), n.b("          <strong>"), n.b(n.v(n.f("UpholsteryDescription", e, t, 0))), n.b("</strong>"), n.b("\n" + i), n.b("        </li>"), n.b("\n" + i)
        }), e.pop()), n.b("      </ul>"), n.b("\n"), n.b("\n" + i), n.b('      <ul class="data-list">'), n.b("\n" + i), n.b("        <li>"), n.b("\n" + i), n.b('          <span class="label">'), n.b(n.v(n.d("translate.MyVolvo.Vehicle.Frontend_MyVolvo_Vehicle_Vin", e, t, 0))), n.b("</span>"), n.b("\n" + i), n.b("          <strong>"), n.b(n.v(n.f("VinId", e, t, 0))), n.b("</strong>"), n.b("\n" + i), n.b("        </li>"), n.b("\n" + i), n.s(n.f("LicensePlate", e, t, 1), e, t, 0, 1922, 2107, "{{ }}") && (n.rs(e, t, function(e, t, n) {
            n.b("        <li>"), n.b("\n" + i), n.b('          <span class="label">'), n.b(n.v(n.d("translate.MyVolvo.Vehicle.Frontend_MyVolvo_Vehicle_LicensePlate", e, t, 0))), n.b("</span>"), n.b("\n" + i), n.b("          <strong>"), n.b(n.v(n.f("LicensePlate", e, t, 0))), n.b("</strong>"), n.b("\n" + i), n.b("        </li>"), n.b("\n" + i)
        }), e.pop()), n.s(n.f("StructureWeek", e, t, 1), e, t, 0, 2151, 2338, "{{ }}") && (n.rs(e, t, function(e, t, n) {
            n.b("        <li>"), n.b("\n" + i), n.b('          <span class="label">'), n.b(n.v(n.d("translate.MyVolvo.Vehicle.Frontend_MyVolvo_Vehicle_StructureWeek", e, t, 0))), n.b("</span>"), n.b("\n" + i), n.b("          <strong>"), n.b(n.v(n.f("StructureWeek", e, t, 0))), n.b("</strong>"), n.b("\n" + i), n.b("        </li>"), n.b("\n" + i)
        }), e.pop()), n.b("        <li>"), n.b("\n" + i), n.b('          <span class="label">'), n.b(n.v(n.d("translate.MyVolvo.Vehicle.Frontend_MyVolvo_Vehicle_Country", e, t, 0))), n.b("</span>"), n.b("\n" + i), n.b("          <strong>Sweden</strong>"), n.b("\n" + i), n.b("        </li>"), n.b("\n" + i), n.b("      </ul>"), n.b("\n" + i), n.b("    </div>"), n.b("\n" + i), n.b("  </div>"), n.b("\n" + i), n.b("</div>"), n.b("\n"), n.b("\n"), n.b("\n" + i), n.b('<div class="card-content account-form form-wrapper">'), n.b("\n"), n.b("\n" + i), n.b('  <div class="form-item form-actions">'), n.b("\n" + i), n.b('    <a href="#confirm" class="button">'), n.b(n.v(n.d("translate.MyVolvo.General.Frontend_MyVolvo_Disconnect", e, t, 0))), n.b("</a>"), n.b("\n" + i), n.b('    <a href="#cancel">'), n.b(n.v(n.d("translate.MyVolvo.General.Frontend_MyVolvo_Cancel", e, t, 0))), n.b("</a>"), n.b("\n" + i), n.b("  </div>"), n.b("\n"), n.b("\n" + i), n.b("</div>"), n.b("\n"), n.fl()
    },
    partials: {},
    subs: {}
}), templates["vehicle-documents-card"] = new Hogan.Template({
    code: function(e, t, i) {
        var n = this;
        return n.b(i = i || ""), n.b('<ul class="documents-card-list scrollbar-inner">'), n.b("\n" + i), n.s(n.f("documents", e, t, 1), e, t, 0, 67, 637, "{{ }}") && (n.rs(e, t, function(e, t, n) {
            n.b("    <li onclick=\"window.open('"), n.s(n.f("Content", e, t, 1), e, t, 0, 110, 123, "{{ }}") && (n.rs(e, t, function(e, t, i) {
                i.b(" "), i.b(i.v(i.f("Content", e, t, 0))), i.b(" ")
            }), e.pop()), n.b(" ','_blank');\" "), n.s(n.f("NoOwnersManual", e, t, 1), e, t, 0, 169, 195, "{{ }}") && (n.rs(e, t, function(e, t, i) {
                i.b(' class="no-owners-manual" ')
            }), e.pop()), n.b(">"), n.b("\n" + i), n.b("        "), n.s(n.f("Id", e, t, 1), e, t, 0, 231, 267, "{{ }}") && (n.rs(e, t, function(e, t, i) {
                i.b('<i class="icon icon-z_download"></i>')
            }), e.pop()), n.b(" "), n.b("\n" + i), n.b("        "), n.s(n.f("NoOwnersManual", e, t, 1), e, t, 0, 303, 342, "{{ }}") && (n.rs(e, t, function(e, t, i) {
                i.b(' <i class="icon icon-viewwebsite"></i> ')
            }), e.pop()), n.b("\n" + i), n.b("        <strong>"), n.b("\n" + i), n.b("            "), !n.s(n.f("NoOwnersManual", e, t, 1), e, t, 1, 0, 0, ""), n.b(n.v(n.d("Metadata.DisplayName", e, t, 0))), n.s(n.f("NoOwnersManual", e, t, 1), e, t, 1, 0, 0, "") || n.b("\n" + i), n.b("        </strong>"), n.b("\n" + i), n.s(n.f("NoOwnersManual", e, t, 1), e, t, 0, 550, 603, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                n.b("        <small>"), n.b(n.t(n.f("NoOwnersManual", e, t, 0))), n.b("</small>"), n.b("\n" + i)
            }), e.pop()), n.b("    </li>"), n.b("\n" + i)
        }), e.pop()), n.b("</ul>"), n.b("\n"), n.fl()
    },
    partials: {},
    subs: {}
}), templates["service-history-card-row"] = new Hogan.Template({
    code: function(e, t, i) {
        var n = this;
        return n.b(i = i || ""), n.b('<td class="action"><i class="icon icon-plus"></i></td>'), n.b("\n" + i), n.b('<td class="service-description">'), n.b("\n" + i), n.b("  <strong>"), n.b(n.v(n.f("LocalizedDate", e, t, 0))), n.b("</strong>"), n.b("\n" + i), n.b("  <small>"), n.b(n.v(n.f("ServiceDescription", e, t, 0))), n.b("</small>"), n.b("\n" + i), n.b("</td>"), n.b("\n" + i), n.b('<td class="service-data">'), n.b("\n" + i), n.b('  <span class="mileage">'), n.b(n.v(n.f("OdometerOut", e, t, 0))), n.b("</span>"), n.b("\n" + i), n.b("  "), n.s(n.f("TotalRepairOrderPrice", e, t, 1), e, t, 0, 272, 324, "{{ }}") && (n.rs(e, t, function(e, t, i) {
            i.b('<span class="cost"> '), i.b(i.v(i.f("TotalRepairOrderPrice", e, t, 0))), i.b("</span>")
        }), e.pop()), n.b("\n" + i), n.b("</td>"), n.b("\n"), n.fl()
    },
    partials: {},
    subs: {}
}), templates["service-history-overlay-carousel-item"] = new Hogan.Template({
    code: function(e, t, i) {
        var n = this;
        return n.b(i = i || ""), n.b('<div class="card-title">'), n.b("\n" + i), n.b("  <hgroup>"), n.b("\n" + i), n.b("    <h6></h6>"), n.b("\n" + i), n.b("    <h3>"), n.b(n.v(n.f("LocalizedDate", e, t, 0))), n.b("</h3>"), n.b("\n" + i), n.b("  </hgroup>"), n.b("\n" + i), n.b('  <i class="icon icon-car"></i>'), n.b("\n" + i), n.b("</div>"), n.b("\n"), n.b("\n" + i), n.b('<div class="card-content vehicle-overlay-details">'), n.b("\n" + i), n.b("  "), n.b("\n" + i), n.b('  <div class="vehicle-data">'), n.b("\n" + i), n.b('    <ul class="data-list">'), n.b("\n" + i), n.b("      <li>"), n.b("\n" + i), n.b('        <span class="label">'), n.b(n.v(n.d("translate.MyVolvo.Vehicle.Frontend_MyVolvo_Vehicle_RepairId", e, t, 0))), n.b("</span>"), n.b("\n" + i), n.b("        <strong>"), n.b(n.v(n.f("RepairOrderNumber", e, t, 0))), n.b("</strong>"), n.b("\n" + i), n.b("      </li>"), n.b("\n"), n.b("\n" + i), n.b("      <li>"), n.b("\n" + i), n.b('        <span class="label">'), n.b(n.v(n.d("translate.MyVolvo.Vehicle.Frontend_MyVolvo_Vehicle_Dealer", e, t, 0))), n.b("</span>"), n.b("\n" + i), n.b("        <strong>"), n.b(n.v(n.f("PartnerCode", e, t, 0))), n.b("</strong>"), n.b("\n" + i), n.b("      </li>"), n.b("\n"), n.b("\n" + i), n.b("      <li>"), n.b("\n" + i), n.b('        <span class="label">'), n.b(n.v(n.d("translate.MyVolvo.Vehicle.Frontend_MyVolvo_Vehicle_ServiceAdvisor", e, t, 0))), n.b("</span>"), n.b("\n" + i), n.b("        <strong>"), n.b(n.v(n.f("ServiceAdvisor", e, t, 0))), n.b("</strong>"), n.b("\n" + i), n.b("      </li>"), n.b("\n" + i), n.b("    </ul>"), n.b("\n"), n.b("\n" + i), n.b('    <ul class="data-list">'), n.b("\n" + i), n.b("      <li>"), n.b("\n" + i), n.b('        <span class="label">'), n.b(n.v(n.d("translate.MyVolvo.Vehicle.Frontend_MyVolvo_Vehicle_Mileage", e, t, 0))), n.b("</span>"), n.b("\n" + i), n.b("        <strong>"), n.b(n.v(n.f("OdometerOut", e, t, 0))), n.b("</strong>"), n.b("\n" + i), n.b("      </li>"), n.b("\n"), n.b("\n" + i), n.b("      <li>"), n.b("\n" + i), n.b('        <span class="label">'), n.b(n.v(n.d("translate.MyVolvo.Vehicle.Frontend_MyVolvo_Vehicle_ServiceDescription", e, t, 0))), n.b("</span>"), n.b("\n" + i), n.b("        <strong>"), n.b(n.v(n.f("ServiceDescription", e, t, 0))), n.b("</strong>"), n.b("\n" + i), n.b("      </li>"), n.b("\n" + i), n.b("    </ul>"), n.b("\n" + i), n.b("  </div>"), n.b("\n"), n.b("\n" + i), n.b('  <div class="vehicle-image">'), n.b("\n" + i), n.b('    <img src="'), n.b(n.v(n.f("VehicleImageUrl", e, t, 0))), n.b('" alt="'), n.b(n.v(n.f("VehicleModelName", e, t, 0))), n.b('" />'), n.b("\n" + i), n.b("  </div>"), n.b("\n"), n.b("\n" + i), n.b("</div>"), n.b("\n"), n.b("\n" + i), n.b('<div class="card-content vehicle-overlay-service">  '), n.b("\n" + i), n.b("  "), n.b("\n" + i), n.s(n.f("TotalRepairOrderPrice", e, t, 1), e, t, 0, 1345, 1501, "{{ }}") && (n.rs(e, t, function(e, t, n) {
            n.b('  <div class="total-cost"><span>'), n.b(n.v(n.d("translate.MyVolvo.Vehicle.Frontend_MyVolvo_Vehicle_TotalCost", e, t, 0))), n.b(":</span><strong>"), n.b(n.v(n.f("TotalRepairOrderPrice", e, t, 0))), n.b("</strong></div>"), n.b("\n" + i)
        }), e.pop()), n.b("\n" + i), n.b('  <div class="accordion">'), n.b("\n" + i), n.s(n.f("Operations", e, t, 1), e, t, 0, 1576, 2223, "{{ }}") && (n.rs(e, t, function(e, t, n) {
            n.b("      <div>"), n.b("\n" + i), n.b('        <div class="accordion-panel-toggle"><span class="label">'),
                n.b(n.v(n.f("OperationDescription", e, t, 0))), n.b('</span><i class="icon accordion-arrow icon-angle-down"></i></div>'), n.b("\n" + i), n.b('        <ul class="accordion-content">'), n.b("\n" + i), n.s(n.f("Parts", e, t, 1), e, t, 0, 1802, 1920, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                    n.b('          <li><span class="label">'), n.b(n.v(n.f("PartDescription", e, t, 0))), n.b('</span><span class="value">'), n.b(n.v(n.f("TotalPrice", e, t, 0))), n.b("</span></li>"), n.b("\n" + i)
                }), e.pop()), n.b("        </ul>"), n.b("\n" + i), n.s(n.f("TotalOperationPrice", e, t, 1), e, t, 0, 1979, 2179, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                    n.b('          <div class="accordion-footer"><span class="label">'), n.b(n.v(n.d("translate.MyVolvo.Vehicle.Frontend_MyVolvo_Vehicle_TotalCost", e, t, 0))), n.b(':</span><span class="value">'), n.b(n.v(n.f("TotalOperationPrice", e, t, 0))), n.b("</span></div>"), n.b("\n" + i)
                }), e.pop()), n.b("      </div>"), n.b("\n" + i)
        }), e.pop()), n.b("  </div>"), n.b("\n"), n.b("\n" + i), n.b("</div>"), n.b("\n"), n.fl()
    },
    partials: {},
    subs: {}
}), templates["vehicle-info-card"] = new Hogan.Template({
    code: function(e, t, i) {
        var n = this;
        return n.b(i = i || ""), n.s(n.f("ImageUrl", e, t, 1), e, t, 0, 13, 101, "{{ }}") && (n.rs(e, t, function(e, t, n) {
            n.b('<div class="card-content vehicle-info-image">'), n.b("\n" + i), n.b('  <img src="'), n.b(n.v(n.f("ImageUrl", e, t, 0))), n.b('" alt="">'), n.b("\n" + i), n.b("</div>"), n.b("\n" + i)
        }), e.pop()), n.b("\n" + i), n.b('<div class="card-content vehicle-info-data">'), n.b("\n" + i), n.b('  <ul class="data-list">'), n.b("\n" + i), n.b("    <li>"), n.b("\n" + i), n.b('      <span class="label">'), n.b(n.v(n.d("translate.MyVolvo.Vehicle.Frontend_MyVolvo_Vehicle_ModelName", e, t, 0))), n.b("</span>"), n.b("\n" + i), n.b("      <strong>"), n.b(n.v(n.f("ModelDescription", e, t, 0))), n.b("</strong>"), n.b("\n" + i), n.b("    </li>"), n.b("\n" + i), n.s(n.f("DontShowModelYear", e, t, 1), e, t, 1, 0, 0, "") || (n.b("    <li>"), n.b("\n" + i), n.b('      <span class="label">'), n.b(n.v(n.d("translate.MyVolvo.Vehicle.Frontend_MyVolvo_Vehicle_ModelYear", e, t, 0))), n.b("</span>"), n.b("\n" + i), n.b("      <strong>"), n.b(n.v(n.f("ModelYear", e, t, 0))), n.b("</strong>"), n.b("\n" + i), n.b("    </li>"), n.b("\n" + i)), n.b("    <li>"), n.b("\n" + i), n.b('      <span class="label">'), n.b(n.v(n.d("translate.MyVolvo.Vehicle.Frontend_MyVolvo_Vehicle_Color", e, t, 0))), n.b("</span>"), n.b("\n" + i), n.b("      <strong>"), n.b(n.v(n.f("ColorDescription", e, t, 0))), n.b("</strong>"), n.b("\n" + i), n.b("    </li>"), n.b("\n" + i), n.s(n.f("LicensePlate", e, t, 1), e, t, 0, 733, 898, "{{ }}") && (n.rs(e, t, function(e, t, n) {
            n.b("    <li>"), n.b("\n" + i), n.b('      <span class="label">'), n.b(n.v(n.d("translate.MyVolvo.Vehicle.Frontend_MyVolvo_Vehicle_LicensePlate", e, t, 0))), n.b("</span>"), n.b("\n" + i), n.b("      <strong>"), n.b(n.v(n.f("LicensePlate", e, t, 0))), n.b("</strong>"), n.b("\n" + i), n.b("    </li>"), n.b("\n" + i)
        }), e.pop()), n.b("    <li>"), n.b("\n" + i), n.b('      <span class="label">'), n.b(n.v(n.d("translate.MyVolvo.Vehicle.Frontend_MyVolvo_Vehicle_Vin", e, t, 0))), n.b("</span>"), n.b("\n" + i), n.b("      <strong>"), n.b(n.v(n.f("VinId", e, t, 0))), n.b("</strong>"), n.b("\n" + i), n.b("    </li>"), n.b("\n" + i), n.b("  </ul>"), n.b("\n" + i), n.b("</div>"), n.b("\n"), n.b("\n" + i), n.b('<div class="card-content">'), n.b("\n" + i), n.b('  <a class="card-cta" href="#">'), n.b("\n" + i), n.b("    <span>"), n.b(n.v(n.d("translate.MyVolvo.Vehicle.Frontend_MyVolvo_Vehicle_CarSpecifications", e, t, 0))), n.b("</span>"), n.b("\n" + i), n.b('    <i class="icon icon-plus"></i>'), n.b("\n" + i), n.b("  </a>"), n.b("\n" + i), n.b("</div>"), n.b("\n"), n.fl()
    },
    partials: {},
    subs: {}
}), templates["vehicle-info-overlay"] = new Hogan.Template({
    code: function(e, t, i) {
        var n = this;
        return n.b(i = i || ""), n.b("\n" + i), n.b('<a href="#" class="overlay-close"><i class="icon icon-close"></i></a>'), n.b("\n"), n.b("\n" + i), n.b('<div class="card-title">'), n.b("\n" + i), n.b("    <hgroup>"), n.b("\n" + i), n.b("        <h6>"), n.b(n.v(n.d("translate.MyVolvo.Vehicle.Frontend_MyVolvo_Vehicle_MyCar", e, t, 0))), n.b("</h6>"), n.b("\n" + i), n.b("        <h3>"), n.b(n.v(n.f("ModelDescription", e, t, 0))), n.b("</h3>"), n.b("\n" + i), n.b("    </hgroup>"), n.b("\n" + i), n.b('    <i class="icon icon-car"></i>'), n.b("\n" + i), n.b("</div>"), n.b("\n"), n.b("\n" + i), n.b('<div class="card-content vehicle-overlay-details">'), n.b("\n"), n.b("\n"), n.b("\n" + i), n.b('    <div class="vehicle-image">'), n.b("\n" + i), n.b('        <img src="'), n.b(n.v(n.f("ImageUrl", e, t, 0))), n.b('" alt="'), n.b(n.v(n.f("ModelDescription", e, t, 0))), n.b('" />'), n.b("\n" + i), n.b("    </div>"), n.b("\n"), n.b("\n" + i), n.b('    <div class="vehicle-data">'), n.b("\n" + i), n.b('        <ul class="data-list">'), n.b("\n" + i), n.b("            <li>"), n.b("\n" + i), n.b('                <span class="label">'), n.b(n.v(n.d("translate.MyVolvo.Vehicle.Frontend_MyVolvo_Vehicle_ModelName", e, t, 0))), n.b("</span>"), n.b("\n" + i), n.b("                <strong>"), n.b(n.v(n.f("ModelDescription", e, t, 0))), n.b("</strong>"), n.b("\n" + i), n.b("            </li>"), n.b("\n" + i), n.s(n.f("DontShowModelYear", e, t, 1), e, t, 1, 0, 0, "") || (n.b("            <li>"), n.b("\n" + i), n.b('                <span class="label">'), n.b(n.v(n.d("translate.MyVolvo.Vehicle.Frontend_MyVolvo_Vehicle_ModelYear", e, t, 0))), n.b("</span>"), n.b("\n" + i), n.b("                <strong>"), n.b(n.v(n.f("ModelYear", e, t, 0))), n.b("</strong>"), n.b("\n" + i), n.b("            </li>"), n.b("\n" + i)), n.s(n.f("ColorDescription", e, t, 1), e, t, 0, 993, 1199, "{{ }}") && (n.rs(e, t, function(e, t, n) {
            n.b("            <li>"), n.b("\n" + i), n.b('                <span class="label">'), n.b(n.v(n.d("translate.MyVolvo.Vehicle.Frontend_MyVolvo_Vehicle_Color", e, t, 0))), n.b("</span>"), n.b("\n" + i), n.b("                <strong>"), n.b(n.v(n.f("ColorDescription", e, t, 0))), n.b("</strong>"), n.b("\n" + i), n.b("            </li>"), n.b("\n" + i)
        }), e.pop()), n.s(n.f("GearboxDescription", e, t, 1), e, t, 0, 1256, 1466, "{{ }}") && (n.rs(e, t, function(e, t, n) {
            n.b("            <li>"), n.b("\n" + i), n.b('                <span class="label">'), n.b(n.v(n.d("translate.MyVolvo.Vehicle.Frontend_MyVolvo_Vehicle_Gearbox", e, t, 0))), n.b("</span>"), n.b("\n" + i), n.b("                <strong>"), n.b(n.v(n.f("GearboxDescription", e, t, 0))), n.b("</strong>"), n.b("\n" + i), n.b("            </li>"), n.b("\n" + i)
        }), e.pop()), n.s(n.f("UpholsteryDescription", e, t, 1), e, t, 0, 1528, 1744, "{{ }}") && (n.rs(e, t, function(e, t, n) {
            n.b("            <li>"), n.b("\n" + i), n.b('                <span class="label">'), n.b(n.v(n.d("translate.MyVolvo.Vehicle.Frontend_MyVolvo_Vehicle_Upholstery", e, t, 0))), n.b("</span>"), n.b("\n" + i), n.b("                <strong>"), n.b(n.v(n.f("UpholsteryDescription", e, t, 0))), n.b("</strong>"), n.b("\n" + i), n.b("            </li>"), n.b("\n" + i)
        }), e.pop()), n.b("        </ul>"), n.b("\n"), n.b("\n" + i), n.b('        <ul class="data-list">'), n.b("\n" + i), n.b("            <li>"), n.b("\n" + i), n.b('                <span class="label">'), n.b(n.v(n.d("translate.MyVolvo.Vehicle.Frontend_MyVolvo_Vehicle_Vin", e, t, 0))), n.b("</span>"), n.b("\n" + i), n.b("                <strong>"), n.b(n.v(n.f("VinId", e, t, 0))), n.b("</strong>"), n.b("\n" + i), n.b("            </li>"), n.b("\n" + i), n.s(n.f("LicensePlate", e, t, 1), e, t, 0, 2026, 2235, "{{ }}") && (n.rs(e, t, function(e, t, n) {
            n.b("            <li>"), n.b("\n" + i), n.b('                <span class="label">'), n.b(n.v(n.d("translate.MyVolvo.Vehicle.Frontend_MyVolvo_Vehicle_LicensePlate", e, t, 0))), n.b("</span>"), n.b("\n" + i), n.b("                <strong>"), n.b(n.v(n.f("LicensePlate", e, t, 0))), n.b("</strong>"), n.b("\n" + i), n.b("            </li>"), n.b("\n" + i)
        }), e.pop()), n.s(n.f("StructureWeek", e, t, 1), e, t, 0, 2283, 2494, "{{ }}") && (n.rs(e, t, function(e, t, n) {
            n.b("            <li>"), n.b("\n" + i), n.b('                <span class="label">'), n.b(n.v(n.d("translate.MyVolvo.Vehicle.Frontend_MyVolvo_Vehicle_StructureWeek", e, t, 0))), n.b("</span>"), n.b("\n" + i), n.b("                <strong>"), n.b(n.v(n.f("StructureWeek", e, t, 0))), n.b("</strong>"), n.b("\n" + i), n.b("            </li>"), n.b("\n" + i)
        }), e.pop()), n.b("            <li>"), n.b("\n" + i), n.b('                <span class="label">'), n.b(n.v(n.d("translate.MyVolvo.Vehicle.Frontend_MyVolvo_Vehicle_Country", e, t, 0))), n.b("</span>"), n.b("\n" + i), n.b("                <strong>"), n.b(n.v(n.f("Country", e, t, 0))), n.b("</strong>"), n.b("\n" + i), n.b("            </li>"), n.b("\n" + i), n.b("        </ul>"), n.b("\n" + i), n.b("    </div>"), n.b("\n" + i), n.b("</div>"), n.b("\n"), n.b("\n" + i), n.b('<div class="card-content">'), n.b("\n" + i), n.s(n.f("Options", e, t, 1), e, t, 0, 2775, 2997, "{{ }}") && (n.rs(e, t, function(e, t, n) {
            n.b("    <h3>"), n.b(n.v(n.d("translate.MyVolvo.Vehicle.Frontend_MyVolvo_Vehicle_Options", e, t, 0))), n.b("</h3>"), n.b("\n" + i), n.b('    <ul class="check-list">'), n.b("\n" + i), n.b("        <li>"), n.b("\n" + i), n.b('            <i class="icon icon-checkmark"></i>'), n.b("\n" + i), n.b("            "), n.b(n.v(n.f("Description", e, t, 0))), n.b("\n" + i), n.b("        </li>"), n.b("\n" + i), n.b("    </ul>"), n.b("\n" + i)
        }), e.pop()), n.b("</div>"), n.b("\n"), n.fl()
    },
    partials: {},
    subs: {}
}), templates["car-comparison-cta"] = new Hogan.Template({
    code: function(e, t, i) {
        var n = this;
        return n.b(i = i || ""), n.b('<div class="cc-ctas">'), n.b("\n" + i), n.b('	<div class="cc-ctas--link car-comparison-print">'), n.b("\n" + i), n.b('		<a href=""><span class="icon icon-print"></span>'), n.b(n.v(n.d("translate.Print", e, t, 0))), n.b("</a>"), n.b("\n" + i), n.b("	</div>"), n.b("\n" + i), n.b("</div>"), n.b("\n"), n.fl()
    },
    partials: {},
    subs: {}
}), templates["car-comparison-highlights"] = new Hogan.Template({
    code: function(e, t, i) {
        var n = this;
        return n.b(i = i || ""), n.b("  <!-- Highlights -->"), n.b("\n" + i), n.b('  <div class="box">'), n.b("\n" + i), n.s(n.f("data", e, t, 1), e, t, 0, 55, 1063, "{{ }}") && (n.rs(e, t, function(e, t, n) {
            n.b('    <h3 class="box-header box-header--secondary">'), n.b(n.v(n.f("Label", e, t, 0))), n.b("</h3>"), n.b("\n"), n.b("\n" + i), n.b('    <table class="cc-table">'), n.b("\n" + i), n.s(n.f("Items", e, t, 1), e, t, 0, 166, 1046, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                n.b('      <tr class="header" data-lightbox-id="'), n.b(n.v(n.f("FieldName", e, t, 0))), n.b('" data-lightbox-title="'), n.b(n.v(n.f("Label", e, t, 0))), n.b('">'), n.b("\n" + i), n.b("        <th>"), n.b("\n" + i), n.b('              <span class="label">'), n.b(n.v(n.f("Label", e, t, 0))), n.b("</span>"), n.b("\n" + i), n.b('              <div class="lb-content">'), n.b(n.v(n.f("Description", e, t, 0))), n.b("</div>"), n.b("\n" + i), n.b('              <span class="cc-info-icon lightbox"></span>'), n.b("\n" + i), n.b("        </th>"), n.b("\n" + i), n.b('        <th><span class="cc-info-icon lightbox"></span></th>'), n.b("\n" + i), n.b("        <th></th>"), n.b("\n" + i), n.b("      </tr>"), n.b("\n" + i), n.b("      "), n.b("\n" + i), n.s(n.f("HasSubItems", e, t, 1), e, t, 0, 576, 849, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                    n.s(n.f("SubItems", e, t, 1), e, t, 0, 600, 827, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                        n.b("              <tr>"), n.b("\n" + i), n.s(n.d(".", e, t, 1), e, t, 0, 642, 792, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                            n.b("                <td>"), n.b("\n"), n.b("\n" + i), n.b('                <h6 class="cc-header--small">'), n.b(n.v(n.f("Label", e, t, 0))), n.b("</h6>"), n.b("\n" + i), n.b("                  "), n.b(n.v(n.f("Value", e, t, 0))), n.b("\n"), n.b("\n" + i), n.b("                </td>"), n.b("\n" + i)
                        }), e.pop()), n.b("            </tr>"), n.b("\n" + i)
                    }), e.pop())
                }), e.pop()), n.b("\n" + i), n.s(n.f("HasSubItems", e, t, 1), e, t, 1, 0, 0, "") || (n.b("          <tr>"), n.b("\n" + i), n.s(n.f("Values", e, t, 1), e, t, 0, 930, 974, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                    n.b("              <td>"), n.b(n.v(n.d(".", e, t, 0))), n.b("</td>"), n.b("\n" + i)
                }), e.pop()), n.b("          <tr>"), n.b("\n" + i)), n.b("\n"), n.b("\n" + i), n.b("      </tr>"), n.b("\n" + i)
            }), e.pop())
        }), e.pop()), n.b("      <!--"), n.b("\n" + i), n.b("      <tr>"), n.b("\n" + i), n.b('        <th><span class="cc-info-icon lightbox">Combined Fuel Consumption</span></th>'), n.b("\n" + i), n.b("        <th></th>"), n.b("\n" + i), n.b("        <th></th>"), n.b("\n" + i), n.b("      </tr>"), n.b("\n" + i), n.b("      <tr>"), n.b("\n" + i), n.b("        <td>6.9 l/100km</td>"), n.b("\n" + i), n.b("        <td>6.2 l/100km</td>"), n.b("\n" + i), n.b("        <td>304 hk</td>"), n.b("\n" + i), n.b("      </tr>"), n.b("\n" + i), n.b("      <tr>"), n.b("\n" + i), n.b('        <th><span class="cc-info-icon lightbox">CO2 Emissions</span></th>'), n.b("\n" + i), n.b("        <th></th>"), n.b("\n" + i), n.b("        <th></th>"), n.b("\n" + i), n.b("      </tr>"), n.b("\n" + i), n.b("      <tr>"), n.b("\n" + i), n.b("        <td>144 g/km</td>"), n.b("\n" + i), n.b("        <td>139 g/km</td>"), n.b("\n" + i), n.b("        <td>119 g/km</td>"), n.b("\n" + i), n.b("      </tr>"), n.b("\n" + i), n.b("      <tr>"), n.b("\n" + i), n.b('        <th><span class="cc-info-icon lightbox">Tax Band</span></th>'), n.b("\n" + i), n.b("        <th></th>"), n.b("\n" + i), n.b("        <th></th>"), n.b("\n" + i), n.b("      </tr>"), n.b("\n" + i), n.b("      <tr>"), n.b("\n" + i), n.b('        <td><span class="cc-circle">F</span></td>'), n.b("\n" + i), n.b('        <td><span class="cc-circle">E</span></td>'), n.b("\n" + i), n.b('        <td><span class="cc-circle">E</span></td>'), n.b("\n" + i), n.b("      </tr>"), n.b("\n" + i), n.b("      <tr>"), n.b("\n" + i), n.b('        <th><span class="cc-info-icon lightbox">Horsepower</span></th>'), n.b("\n" + i), n.b("        <th></th>"), n.b("\n" + i), n.b("        <th></th>"), n.b("\n" + i), n.b("      </tr>"), n.b("\n" + i), n.b("      <tr>"), n.b("\n" + i), n.b("        <td>245 hk</td>"), n.b("\n" + i), n.b("        <td>245 hk</td>"), n.b("\n" + i), n.b("        <td>304 hk</td>"), n.b("\n" + i), n.b("      </tr>"), n.b("\n" + i), n.b("      <tr>"), n.b("\n" + i), n.b('        <th><span class="cc-info-icon lightbox">Acceleration (0-100 km/h)</span></th>'), n.b("\n" + i), n.b("        <th></th>"), n.b("\n" + i), n.b("        <th></th>"), n.b("\n" + i), n.b("      </tr>"), n.b("\n" + i), n.b("      <tr>"), n.b("\n" + i), n.b("        <td>6,5 s</td>"), n.b("\n" + i), n.b("        <td>6,3 s</td>"), n.b("\n" + i), n.b("        <td>6 s</td>"), n.b("\n" + i), n.b("      </tr>"), n.b("\n"), n.b("\n" + i), n.b("      <tr>"), n.b("\n" + i), n.b('        <th><span class="cc-info-icon lightbox">Environmental class</span></th>'), n.b("\n" + i), n.b("        <th></th>"), n.b("\n" + i), n.b("        <th></th>"), n.b("\n" + i), n.b("      </tr>"), n.b("\n" + i), n.b("      <tr>"), n.b("\n" + i), n.b("        <td>Euro 5b+</td>"), n.b("\n" + i), n.b("        <td>Euro 5b+</td>"), n.b("\n" + i), n.b("        <td>Euro 6b</td>"), n.b("\n" + i), n.b("      </tr>"), n.b("\n"), n.b("\n" + i), n.b("      <tr>"), n.b("\n" + i), n.b('        <th><span class="cc-info-icon lightbox">Overall Safety, Euro NCAP</span></th>'), n.b("\n" + i), n.b("        <th></th>"), n.b("\n" + i), n.b("        <th></th>"), n.b("\n" + i), n.b("      </tr>"), n.b("\n" + i), n.b("      <tr>"), n.b("\n" + i), n.b("        <td>"), n.b("\n" + i), n.b('          <i class="icon icon-star cc-star"></i>'), n.b("\n" + i), n.b('          <i class="icon icon-star cc-star"></i>'), n.b("\n" + i), n.b('          <i class="icon icon-star cc-star"></i>'), n.b("\n" + i), n.b('          <i class="icon icon-star cc-star"></i>'), n.b("\n" + i), n.b('          <i class="icon icon-star cc-star"></i>'), n.b("\n" + i), n.b("        </td>"), n.b("\n" + i), n.b("        <td>"), n.b("\n" + i), n.b('          <i class="icon icon-star cc-star"></i>'), n.b("\n" + i), n.b('          <i class="icon icon-star cc-star"></i>'), n.b("\n" + i), n.b('          <i class="icon icon-star cc-star"></i>'), n.b("\n" + i), n.b('          <i class="icon icon-star cc-star"></i>'), n.b("\n" + i), n.b('          <i class="icon icon-star cc-star"></i>'), n.b("\n" + i), n.b("        </td>"), n.b("\n" + i), n.b("        <td>"), n.b("\n" + i), n.b('          <i class="icon icon-star cc-star"></i>'), n.b("\n" + i), n.b('          <i class="icon icon-star cc-star"></i>'), n.b("\n" + i), n.b('          <i class="icon icon-star cc-star"></i>'), n.b("\n" + i), n.b('          <i class="icon icon-star cc-star"></i>'), n.b("\n" + i), n.b('          <i class="icon icon-star cc-star"></i>'), n.b("\n" + i), n.b("        </td>"), n.b("\n" + i), n.b("      </tr>"), n.b("\n"), n.b("\n" + i), n.b("      <tr>"), n.b("\n" + i), n.b('        <th><span class="cc-info-icon lightbox">City Safety</span></th>'), n.b("\n" + i), n.b("        <th></th>"), n.b("\n" + i), n.b("        <th></th>"), n.b("\n" + i), n.b("      </tr>"), n.b("\n" + i), n.b("      <tr>"), n.b("\n" + i), n.b('        <td><span class="icon icon-checkmark"></span></td>'), n.b("\n" + i), n.b('        <td><span class="icon icon-checkmark"></span></td>'), n.b("\n" + i), n.b('        <td><span class="icon icon-checkmark"></span></td>'), n.b("\n" + i), n.b("      </tr>"), n.b("\n"), n.b("\n" + i), n.b("      <tr>"), n.b("\n" + i), n.b('        <th><span class="cc-info-icon lightbox">Trunk Space</span></th>'), n.b("\n" + i), n.b("        <th></th>"), n.b("\n" + i), n.b("        <th></th>"), n.b("\n" + i), n.b("      </tr>"), n.b("\n" + i), n.b("      <tr>"), n.b("\n" + i), n.b("        <td>480 l</td>"), n.b("\n" + i), n.b("        <td>380 l</td>"), n.b("\n" + i), n.b("        <td>430 l</td>"), n.b("\n" + i), n.b("      </tr>"), n.b("\n"), n.b("\n" + i), n.b("      <tr>"), n.b("\n" + i), n.b('        <th><span class="cc-info-icon lightbox">Towing Capacity</span></th>'), n.b("\n" + i), n.b("        <th></th>"), n.b("\n" + i), n.b("        <th></th>"), n.b("\n" + i), n.b("      </tr>"), n.b("\n" + i), n.b("      <tr>"), n.b("\n" + i), n.b("        <td>1800 kg</td>"), n.b("\n" + i), n.b("        <td>1600 kg</td>"), n.b("\n" + i), n.b("        <td>1600 kg</td>"), n.b("\n" + i), n.b("      </tr>-->"), n.b("\n" + i), n.b("    </table>"), n.b("\n" + i), n.b("  </div>"), n.b("\n" + i), n.b("  <!-- / Highlights -->"), n.b("\n"), n.fl()
    },
    partials: {},
    subs: {}
}), templates["car-comparison-selector-group"] = new Hogan.Template({
    code: function(e, t, i) {
        var n = this;
        return n.b(i = i || ""), n.b('<div class="car-selector-overlay-car-group">'), n.b("\n" + i), n.b('	<a href="#" class="car-selector-overlay-drop-down">'), n.b("\n" + i), n.b("		"), n.b(n.v(n.f("GroupName", e, t, 0))), n.b("\n" + i), n.b('		<i class="icon icon-angle-up"></i>'), n.b("\n" + i), n.b("	</a>"), n.b("\n" + i), n.b('	<ul class="car-selector-overlay-cars on">'), n.b("\n" + i), n.b("		"), n.b("\n" + i), n.b("	</ul>"), n.b("\n" + i), n.b("</div>"), n.fl()
    },
    partials: {},
    subs: {}
}), templates["car-comparison-selector-item"] = new Hogan.Template({
    code: function(e, t, i) {
        var n = this;
        return n.b(i = i || ""), n.b('<li class="car-selector-overlay-item" data-model-id="'), n.b(n.v(n.f("ModelId", e, t, 0))), n.b('">	'), n.b("\n" + i), n.b("<!-- 	"), n.s(n.f("ModelNameCore", e, t, 1), e, t, 0, 92, 600, "{{ }}") && (n.rs(e, t, function(e, t, n) {
            n.b("\n" + i), n.s(n.f("ModelNamePrefix", e, t, 1), e, t, 0, 115, 250, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                n.b('		<a href="#" class="car-selector-overlay-item-title">'), n.b("\n" + i), n.b("			<small>"), n.b(n.t(n.f("ModelNamePrefix", e, t, 0))), n.b("</small>"), n.b("\n" + i), n.b("			<h3>"), n.b(n.v(n.f("ModelNameCore", e, t, 0))), n.b("</h3>"), n.b("\n" + i), n.b("		</a>"), n.b("\n" + i)
            }), e.pop()), n.s(n.f("ModelNameSuffix", e, t, 1), e, t, 0, 293, 440, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                n.b('		<a href="#" class="car-selector-overlay-item-title small-after">'), n.b("\n" + i), n.b("			<h3>"), n.b(n.v(n.f("ModelNameCore", e, t, 0))), n.b("</h3>"), n.b("\n" + i), n.b("			<small>"), n.b(n.t(n.f("ModelNameSuffix", e, t, 0))), n.b("</small>"), n.b("\n" + i), n.b("		</a>"), n.b("\n" + i)
            }), e.pop()), n.s(n.f("ModelNameSuffix", e, t, 1), e, t, 1, 0, 0, "") || (n.b('		<a href="#" class="car-selector-overlay-item-title">'), n.b("\n" + i), n.b("			<h3>"), n.b(n.v(n.f("ModelNameCore", e, t, 0))), n.b("</h3>"), n.b("\n" + i), n.b("		</a>"), n.b("\n" + i))
        }), e.pop()), n.s(n.f("ModelNameCore", e, t, 1), e, t, 1, 0, 0, "") || (n.b('	<a href="#" class="car-selector-overlay-item-title">'), n.b("\n" + i), n.b("		<h3>"), n.b(n.v(n.f("ModelDisplayName", e, t, 0))), n.b("</h3>"), n.b("\n" + i), n.b("	</a>"), n.b("\n" + i), n.b("	")), n.b(" -->"), n.b("\n"), n.b("\n" + i), n.s(n.f("NameType1", e, t, 1), e, t, 0, 771, 865, "{{ }}") && (n.rs(e, t, function(e, t, n) {
            n.b('	<a href="#" class="car-selector-overlay-item-title">'), n.b("\n" + i), n.b("		<h3>"), n.b(n.v(n.f("ModelDisplayName", e, t, 0))), n.b("</h3>"), n.b("\n" + i), n.b("	</a>"), n.b("\n" + i)
        }), e.pop()), n.s(n.f("NameType2", e, t, 1), e, t, 0, 895, 986, "{{ }}") && (n.rs(e, t, function(e, t, n) {
            n.b('	<a href="#" class="car-selector-overlay-item-title">'), n.b("\n" + i), n.b("		<h3>"), n.b(n.v(n.f("ModelNameCore", e, t, 0))), n.b("</h3>"), n.b("\n" + i), n.b("	</a>"), n.b("\n" + i)
        }), e.pop()), n.s(n.f("NameType3", e, t, 1), e, t, 0, 1016, 1146, "{{ }}") && (n.rs(e, t, function(e, t, n) {
            n.b('	<a href="#" class="car-selector-overlay-item-title">'), n.b("\n" + i), n.b("		<small>"), n.b(n.t(n.f("ModelNamePrefix", e, t, 0))), n.b("</small>"), n.b("\n" + i), n.b("		<h3>"), n.b(n.v(n.f("ModelNameCore", e, t, 0))), n.b("</h3>"), n.b("\n" + i), n.b("	</a>"), n.b("\n" + i)
        }), e.pop()), n.s(n.f("NameType4", e, t, 1), e, t, 0, 1176, 1318, "{{ }}") && (n.rs(e, t, function(e, t, n) {
            n.b('	<a href="#" class="car-selector-overlay-item-title small-after">'), n.b("\n" + i), n.b("		<h3>"), n.b(n.v(n.f("ModelNameCore", e, t, 0))), n.b("</h3>"), n.b("\n" + i), n.b("		<small>"), n.b(n.t(n.f("ModelNameSuffix", e, t, 0))), n.b("</small>"), n.b("\n" + i), n.b("	</a>"), n.b("\n" + i)
        }), e.pop()), n.b("\n" + i), n.b('	<div class="car-selector-overlay-item-img">'), n.b("\n" + i), n.b('		<img alt="" src="'), n.b(n.v(n.f("CarImage", e, t, 0))), n.b('?w=197" srcset="'), n.b(n.v(n.f("CarImage", e, t, 0))), n.b("?w=197 1x, "), n.b(n.v(n.f("CarImage", e, t, 0))), n.b('?w=394 2x" sizes="" class="car-selector-overlay-item-img--default">'), n.b("\n" + i), n.b("	</div>"), n.b("\n" + i), n.s(n.f("Price", e, t, 1), e, t, 0, 1548, 1588, "{{ }}") && (n.rs(e, t, function(e, t, n) {
            n.b('	<div class="price">'), n.b(n.v(n.f("Price", e, t, 0))), n.b("</div>"), n.b("\n" + i)
        }), e.pop()), n.s(n.f("ShortDescription", e, t, 1), e, t, 0, 1621, 1678, "{{ }}") && (n.rs(e, t, function(e, t, n) {
            n.b('	<div class="custom-copy">'), n.b(n.v(n.f("ShortDescription", e, t, 0))), n.b("</div>"), n.b("\n" + i)
        }), e.pop()), n.b("</li>"), n.fl()
    },
    partials: {},
    subs: {}
}), templates["car-comparison-specs"] = new Hogan.Template({
    code: function(e, t, i) {
        var n = this;
        return n.b(i = i || ""), n.b("  <!-- Technical specifications -->"), n.b("\n" + i), n.b('  <div class="box" id="technical-specs">'), n.b("\n" + i), n.s(n.f("data", e, t, 1), e, t, 0, 90, 2122, "{{ }}") && (n.rs(e, t, function(e, t, n) {
            n.b('    <h3 class="box-header box-header--secondary">'), n.b(n.v(n.f("Title", e, t, 0))), n.b("</h3>"), n.b("\n" + i), n.b('    <ul class="accordion standard-accordion cc-accordion">'), n.b("\n"), n.b("\n"), n.b("\n" + i), n.b("      <!-- Capacity -->"), n.b("\n" + i), n.s(n.f("cats", e, t, 1), e, t, 0, 257, 2096, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                n.b("      <li>"), n.b("\n" + i), n.b('        <div class="accordion-panel-toggle cc-accordion-toggle">'), n.b("\n" + i), n.b('          <span class="cc-accordion-toggle-copy">'), n.b(n.v(n.f("CategoryName", e, t, 0))), n.b("</span>"), n.b("\n" + i), n.b('          <i class="icon accordion-arrow icon-angle-down cc-accordion-icon"></i>'), n.b("\n" + i), n.b("        </div>"), n.b("\n" + i), n.b('        <div class="accordion-content">'), n.b("\n" + i), n.b('          <table class="cc-table">'), n.b("\n" + i), n.s(n.f("Items", e, t, 1), e, t, 0, 602, 2008, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                    n.b("\n"), n.b("\n" + i), n.s(n.f("HasSubItems", e, t, 1), e, t, 0, 633, 1412, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                        n.b('              <tr class="cc-spec-subheader header" data-lightbox-id="'), n.b(n.v(n.f("FieldName", e, t, 0))), n.b('" data-lightbox-title="'), n.b(n.v(n.f("Label", e, t, 0))), n.b('">'), n.b("\n" + i), n.b("                <th>"), n.b("\n" + i), n.b('                  <span class="label">'), n.b(n.v(n.f("Label", e, t, 0))), n.b("</span>"), n.b("\n" + i), n.b('                  <span class="cc-info-icon lightbox"></span>'), n.b("\n" + i), n.b("                </th>"), n.b("\n" + i), n.b('                <th><span class="cc-info-icon lightbox"></span></th>'), n.b("\n" + i), n.b("                <th></th>"), n.b("\n" + i), n.b("              </tr>"), n.b("\n"), n.b("\n" + i), n.s(n.f("SubItems", e, t, 1), e, t, 0, 1056, 1386, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                            n.b('              <tr class="subitem-labels">'), n.b("\n" + i), n.s(n.f("Labels", e, t, 1), e, t, 0, 1126, 1210, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                                n.b('                <td><h6 class="cc-header--small">'), n.b(n.v(n.d(".", e, t, 0))), n.b("</h6></td>"), n.b("\n" + i)
                            }), e.pop()), n.b("              </tr>"), n.b("\n" + i), n.b("              <tr>"), n.b("\n" + i), n.s(n.f("Values", e, t, 1), e, t, 0, 1288, 1340, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                                n.b("                  <td>"), n.b(n.v(n.d(".", e, t, 0))), n.b("</td>"), n.b("\n" + i)
                            }), e.pop()), n.b("              </tr>"), n.b("\n" + i)
                        }), e.pop())
                    }), e.pop()), n.b("\n" + i), n.s(n.f("HasSubItems", e, t, 1), e, t, 1, 0, 0, "") || (n.b('              <tr class="header" data-lightbox-id="'), n.b(n.v(n.f("FieldName", e, t, 0))), n.b('" data-lightbox-title="'), n.b(n.v(n.f("Label", e, t, 0))), n.b('">'), n.b("\n" + i), n.b("                <th>"), n.b("\n" + i), n.b('                  <span class="label">'), n.b(n.v(n.f("Label", e, t, 0))), n.b("</span>"), n.b("\n" + i), n.b('                  <span class="cc-info-icon lightbox"></span>'), n.b("\n" + i), n.b("                </th>"), n.b("\n" + i), n.b('                <th><span class="cc-info-icon lightbox"></span></th>'), n.b("\n" + i), n.b("                <th></th>"), n.b("\n" + i), n.b("              </tr>"), n.b("\n" + i), n.b("              <tr>"), n.b("\n" + i), n.s(n.f("Values", e, t, 1), e, t, 0, 1881, 1933, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                        n.b("                  <td>"), n.b(n.v(n.d(".", e, t, 0))), n.b("</td>"), n.b("\n" + i)
                    }), e.pop()), n.b("              </tr>"), n.b("\n" + i)), n.b("\n"), n.b("\n" + i)
                }), e.pop()), n.b("          </table>"), n.b("\n" + i), n.b("        </div>"), n.b("\n" + i), n.b("      </li>"), n.b("\n" + i), n.b("      <!-- / Capacity -->"), n.b("\n" + i)
            }), e.pop()), n.b("\n" + i), n.b("    </ul>"), n.b("\n" + i)
        }), e.pop()), n.b("  </div>"), n.b("\n" + i), n.b("  <!-- / Technical specifications -->"), n.b("\n"), n.fl()
    },
    partials: {},
    subs: {}
}), templates["car-selector-slot"] = new Hogan.Template({
    code: function(e, t, i) {
        var n = this;
        return n.b(i = i || ""), n.b('<div class="car-selector-form js-car-selector-form car-selector-form--pristine">'), n.b("\n" + i), n.b('  <i class="icon icon-close car-selector-remove"></i>'), n.b("\n"), n.b("\n" + i), n.b('  <div class="car-selector-name js-car-selector-name car-selector-info"></div>'), n.b("\n"), n.b("\n" + i), n.b('  <img class="js-car-selector-picture car-selector-picture car-selector-picture--placeholder" alt="" src="" data-placeholder-src="">'), n.b("\n"), n.b("\n" + i), n.b('  <div class="engine-selector-name js-engine-selector-name car-selector-info"></div>'), n.b("\n"), n.b("\n" + i), n.b('  <div class="dropdown-wrapper car-selector-input js-engine-dropdown">'), n.b("\n" + i), n.b('    <i class="dropdown-angle icon icon-angle-down"></i>'), n.b("\n" + i), n.b('    <select class="dropdown-fallback js-engine-fallback-select select" data-defaultLabel="'), n.b(n.v(n.d("translate.Chooseengine", e, t, 0))), n.b('">'), n.b("\n" + i), n.b('      <option selected="selected" disabled="disabled">'), n.b(n.v(n.d("translate.Chooseengine", e, t, 0))), n.b("</option>"), n.b("\n" + i), n.b("    </select>"), n.b("\n"), n.b("\n" + i), n.b('    <a class="dropdown-active-item" href="#">'), n.b(n.v(n.d("translate.Chooseengine", e, t, 0))), n.b("</a>"), n.b("\n" + i), n.b('    <ul class="dropdown js-engine-select"></ul>'), n.b("\n" + i), n.b("  </div>"), n.b("\n"), n.b("\n" + i), n.b('  <div class="cta-wrapper">'), n.b("\n" + i), n.b('    <div class="car-selector-explore">'), n.b("\n" + i), n.b('      <a href="#">'), n.b(n.v(n.d("translate.Explore", e, t, 0))), n.b("</a>"), n.b("\n" + i), n.b("    </div>"), n.b("\n"), n.b("\n" + i), n.b('    <div class="text-center car-selector-build">'), n.b("\n" + i), n.b('      <a href="#">'), n.b(n.v(n.d("translate.BuildYourOwn", e, t, 0))), n.b("</a>"), n.b("\n" + i), n.b("    </div> "), n.b("\n" + i), n.b("  </div>"), n.b("\n"), n.b("\n" + i), n.b("</div>"), n.b("\n"), n.b("\n" + i), n.b('<div class="car-selector-cta js-car-selector-cta">'), n.b("\n" + i), n.b('  <span class="car-selector-cta-icon">+</span>'), n.b("\n" + i), n.b('  <span class="cta-link">'), n.b(n.v(n.d("translate.Addmodel", e, t, 0))), n.b("</span>"), n.b("\n" + i), n.b("</div>"), n.b("\n"), n.fl()
    },
    partials: {},
    subs: {}
}), templates["car-comparison-tool-cta"] = new Hogan.Template({
    code: function(e, t, i) {
        var n = this;
        return n.b(i = i || ""), n.b('<div class="cctool-ctas">'), n.b("\n" + i), n.b('	<div class="cctool-ctas--link car-comparison-tool-print">'), n.b("\n" + i), n.b('		<a href=""><span class="icon icon-print"></span>'), n.b(n.v(n.d("translate.Print", e, t, 0))), n.b("</a>"), n.b("\n" + i), n.b("	</div>"), n.b("\n" + i), n.b("</div>"), n.b("\n"), n.fl()
    },
    partials: {},
    subs: {}
}), templates["car-comparison-tool-highlights"] = new Hogan.Template({
    code: function(e, t, i) {
        var n = this;
        return n.b(i = i || ""), n.b("  <!-- Highlights -->"), n.b("\n" + i), n.b('  <div class="box">'), n.b("\n" + i), n.s(n.f("data", e, t, 1), e, t, 0, 55, 1015, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                n.b("\n" + i), n.b('    <table class="cctool-table">'), n.b("\n" + i), n.s(n.f("Items", e, t, 1), e, t, 0, 106, 998, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                    n.b('      <tr class="header" data-lightbox-id="'), n.b(n.v(n.f("FieldName", e, t, 0))), n.b('" data-lightbox-title="'), n.b(n.v(n.f("Label", e, t, 0))), n.b('">'), n.b("\n" + i), n.b("        <th>"), n.b("\n" + i), n.b('              <span class="label">'), n.b(n.v(n.f("Label", e, t, 0))), n.b("</span>"), n.b("\n" + i), n.b('              <div class="lb-content">'), n.b(n.v(n.f("Description", e, t, 0))), n.b("</div>"), n.b("\n" + i), n.b('              <span class="cctool-info-icon lightbox"></span>'), n.b("\n" + i), n.b("        </th>"), n.b("\n" + i), n.b('        <th><span class="cctool-info-icon lightbox"></span></th>'), n.b("\n" + i), n.b("        <th></th>"), n.b("\n" + i), n.b("      </tr>"), n.b("\n" + i), n.b("      "), n.b("\n" + i), n.s(n.f("HasSubItems", e, t, 1), e, t, 0, 524, 801, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                        n.s(n.f("SubItems", e, t, 1), e, t, 0, 548, 779, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                            n.b("              <tr>"), n.b("\n" + i), n.s(n.d(".", e, t, 1), e, t, 0, 590, 744, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                                n.b("                <td>"), n.b("\n"), n.b("\n" + i), n.b('                <h6 class="cctool-header--small">'), n.b(n.v(n.f("Label", e, t, 0))), n.b("</h6>"), n.b("\n" + i), n.b("                  "), n.b(n.v(n.f("Value", e, t, 0))), n.b("\n"), n.b("\n" + i), n.b("                </td>"), n.b("\n" + i)
                            }), e.pop()), n.b("            </tr>"), n.b("\n" + i)
                        }), e.pop())
                    }), e.pop()), n.b("\n" + i), n.s(n.f("HasSubItems", e, t, 1), e, t, 1, 0, 0, "") || (n.b("          <tr>"), n.b("\n" + i), n.s(n.f("Values", e, t, 1), e, t, 0, 882, 926, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                        n.b("              <td>"), n.b(n.v(n.d(".", e, t, 0))), n.b("</td>"), n.b("\n" + i)
                    }), e.pop()), n.b("          <tr>"), n.b("\n" + i)), n.b("\n"), n.b("\n" + i), n.b("      </tr>"), n.b("\n" + i)
                }), e.pop())
            }), e.pop()), n.b("      <!--"), n.b("\n" + i), n.b("      <tr>"), n.b("\n" + i), n.b('        <th><span class="cctool-info-icon lightbox">Combined Fuel Consumption</span></th>'), n.b("\n" + i), n.b("        <th></th>"), n.b("\n" + i), n.b("        <th></th>"), n.b("\n" + i), n.b("      </tr>"), n.b("\n" + i), n.b("      <tr>"), n.b("\n" + i), n.b("        <td>6.9 l/100km</td>"), n.b("\n" + i), n.b("        <td>6.2 l/100km</td>"), n.b("\n" + i), n.b("        <td>304 hk</td>"), n.b("\n" + i), n.b("      </tr>"), n.b("\n" + i), n.b("      <tr>"), n.b("\n" + i), n.b('        <th><span class="cctool-info-icon lightbox">CO2 Emissions</span></th>'), n.b("\n" + i), n.b("        <th></th>"), n.b("\n" + i), n.b("        <th></th>"), n.b("\n" + i), n.b("      </tr>"), n.b("\n" + i), n.b("      <tr>"), n.b("\n" + i), n.b("        <td>144 g/km</td>"), n.b("\n" + i), n.b("        <td>139 g/km</td>"), n.b("\n" + i), n.b("        <td>119 g/km</td>"), n.b("\n" + i), n.b("      </tr>"), n.b("\n" + i), n.b("      <tr>"), n.b("\n" + i), n.b('        <th><span class="cctool-info-icon lightbox">Tax Band</span></th>'), n.b("\n" + i), n.b("        <th></th>"), n.b("\n" + i), n.b("        <th></th>"), n.b("\n" + i), n.b("      </tr>"), n.b("\n" + i), n.b("      <tr>"), n.b("\n" + i), n.b('        <td><span class="cctool-circle">F</span></td>'), n.b("\n" + i), n.b('        <td><span class="cctool-circle">E</span></td>'), n.b("\n" + i), n.b('        <td><span class="cctool-circle">E</span></td>'), n.b("\n" + i), n.b("      </tr>"), n.b("\n" + i), n.b("      <tr>"), n.b("\n" + i), n.b('        <th><span class="cctool-info-icon lightbox">Horsepower</span></th>'), n.b("\n" + i), n.b("        <th></th>"), n.b("\n" + i), n.b("        <th></th>"), n.b("\n" + i), n.b("      </tr>"), n.b("\n" + i), n.b("      <tr>"), n.b("\n" + i), n.b("        <td>245 hk</td>"), n.b("\n" + i), n.b("        <td>245 hk</td>"), n.b("\n" + i), n.b("        <td>304 hk</td>"), n.b("\n" + i), n.b("      </tr>"), n.b("\n" + i), n.b("      <tr>"), n.b("\n" + i), n.b('        <th><span class="cctool-info-icon lightbox">Acceleration (0-100 km/h)</span></th>'), n.b("\n" + i), n.b("        <th></th>"), n.b("\n" + i), n.b("        <th></th>"), n.b("\n" + i), n.b("      </tr>"), n.b("\n" + i), n.b("      <tr>"), n.b("\n" + i), n.b("        <td>6,5 s</td>"), n.b("\n" + i), n.b("        <td>6,3 s</td>"), n.b("\n" + i), n.b("        <td>6 s</td>"), n.b("\n" + i), n.b("      </tr>"), n.b("\n"), n.b("\n" + i), n.b("      <tr>"), n.b("\n" + i), n.b('        <th><span class="cctool-info-icon lightbox">Environmental class</span></th>'),
            n.b("\n" + i), n.b("        <th></th>"), n.b("\n" + i), n.b("        <th></th>"), n.b("\n" + i), n.b("      </tr>"), n.b("\n" + i), n.b("      <tr>"), n.b("\n" + i), n.b("        <td>Euro 5b+</td>"), n.b("\n" + i), n.b("        <td>Euro 5b+</td>"), n.b("\n" + i), n.b("        <td>Euro 6b</td>"), n.b("\n" + i), n.b("      </tr>"), n.b("\n"), n.b("\n" + i), n.b("      <tr>"), n.b("\n" + i), n.b('        <th><span class="cctool-info-icon lightbox">Overall Safety, Euro NCAP</span></th>'), n.b("\n" + i), n.b("        <th></th>"), n.b("\n" + i), n.b("        <th></th>"), n.b("\n" + i), n.b("      </tr>"), n.b("\n" + i), n.b("      <tr>"), n.b("\n" + i), n.b("        <td>"), n.b("\n" + i), n.b('          <i class="icon icon-star cctool-star"></i>'), n.b("\n" + i), n.b('          <i class="icon icon-star cctool-star"></i>'), n.b("\n" + i), n.b('          <i class="icon icon-star cctool-star"></i>'), n.b("\n" + i), n.b('          <i class="icon icon-star cctool-star"></i>'), n.b("\n" + i), n.b('          <i class="icon icon-star cctool-star"></i>'), n.b("\n" + i), n.b("        </td>"), n.b("\n" + i), n.b("        <td>"), n.b("\n" + i), n.b('          <i class="icon icon-star cctool-star"></i>'), n.b("\n" + i), n.b('          <i class="icon icon-star cctool-star"></i>'), n.b("\n" + i), n.b('          <i class="icon icon-star cctool-star"></i>'), n.b("\n" + i), n.b('          <i class="icon icon-star cctool-star"></i>'), n.b("\n" + i), n.b('          <i class="icon icon-star cctool-star"></i>'), n.b("\n" + i), n.b("        </td>"), n.b("\n" + i), n.b("        <td>"), n.b("\n" + i), n.b('          <i class="icon icon-star cctool-star"></i>'), n.b("\n" + i), n.b('          <i class="icon icon-star cctool-star"></i>'), n.b("\n" + i), n.b('          <i class="icon icon-star cctool-star"></i>'), n.b("\n" + i), n.b('          <i class="icon icon-star cctool-star"></i>'), n.b("\n" + i), n.b('          <i class="icon icon-star cctool-star"></i>'), n.b("\n" + i), n.b("        </td>"), n.b("\n" + i), n.b("      </tr>"), n.b("\n"), n.b("\n" + i), n.b("      <tr>"), n.b("\n" + i), n.b('        <th><span class="cctool-info-icon lightbox">City Safety</span></th>'), n.b("\n" + i), n.b("        <th></th>"), n.b("\n" + i), n.b("        <th></th>"), n.b("\n" + i), n.b("      </tr>"), n.b("\n" + i), n.b("      <tr>"), n.b("\n" + i), n.b('        <td><span class="icon icon-checkmark"></span></td>'), n.b("\n" + i), n.b('        <td><span class="icon icon-checkmark"></span></td>'), n.b("\n" + i), n.b('        <td><span class="icon icon-checkmark"></span></td>'), n.b("\n" + i), n.b("      </tr>"), n.b("\n"), n.b("\n" + i), n.b("      <tr>"), n.b("\n" + i), n.b('        <th><span class="cctool-info-icon lightbox">Trunk Space</span></th>'), n.b("\n" + i), n.b("        <th></th>"), n.b("\n" + i), n.b("        <th></th>"), n.b("\n" + i), n.b("      </tr>"), n.b("\n" + i), n.b("      <tr>"), n.b("\n" + i), n.b("        <td>480 l</td>"), n.b("\n" + i), n.b("        <td>380 l</td>"), n.b("\n" + i), n.b("        <td>430 l</td>"), n.b("\n" + i), n.b("      </tr>"), n.b("\n"), n.b("\n" + i), n.b("      <tr>"), n.b("\n" + i), n.b('        <th><span class="cctool-info-icon lightbox">Towing Capacity</span></th>'), n.b("\n" + i), n.b("        <th></th>"), n.b("\n" + i), n.b("        <th></th>"), n.b("\n" + i), n.b("      </tr>"), n.b("\n" + i), n.b("      <tr>"), n.b("\n" + i), n.b("        <td>1800 kg</td>"), n.b("\n" + i), n.b("        <td>1600 kg</td>"), n.b("\n" + i), n.b("        <td>1600 kg</td>"), n.b("\n" + i), n.b("      </tr>-->"), n.b("\n" + i), n.b("    </table>"), n.b("\n" + i), n.b("  </div>"), n.b("\n" + i), n.b("  <!-- / Highlights -->"), n.b("\n"), n.fl()
    },
    partials: {},
    subs: {}
}), templates["car-comparison-tool-selector-group"] = new Hogan.Template({
    code: function(e, t, i) {
        var n = this;
        return n.b(i = i || ""), n.b('<div class="carcomparisontool-selector-overlay-carcomparisontool-group">'), n.b("\n" + i), n.b('    <a href="#" class="carcomparisontool-selector-overlay-drop-down">'), n.b("\n" + i), n.b("        "), n.b(n.v(n.f("GroupName", e, t, 0))), n.b("\n" + i), n.b('        <i class="icon icon-angle-up"></i>'), n.b("\n" + i), n.b("    </a>"), n.b("\n" + i), n.b('    <ul class="carcomparisontool-selector-overlay-carscomparisontool on"></ul>'), n.b("\n" + i), n.b("</div>"), n.fl()
    },
    partials: {},
    subs: {}
}), templates["car-comparison-tool-selector-item"] = new Hogan.Template({
    code: function(e, t, i) {
        var n = this;
        return n.b(i = i || ""), n.b('<li class="carcomparisontool-selector-overlay-item" data-model-id="'), n.b(n.v(n.f("ModelId", e, t, 0))), n.b('">'), n.b("\n" + i), n.b("    <!-- 	"), n.s(n.f("ModelNameCore", e, t, 1), e, t, 0, 109, 851, "{{ }}") && (n.rs(e, t, function(e, t, n) {
            n.b("\n" + i), n.s(n.f("ModelNamePrefix", e, t, 1), e, t, 0, 142, 347, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                n.b('            <a href="#" class="carcomparisontool-selector-overlay-item-title">'), n.b("\n" + i), n.b("                <small>"), n.b(n.t(n.f("ModelNamePrefix", e, t, 0))), n.b("</small>"), n.b("\n" + i), n.b("                <h3>"), n.b(n.v(n.f("ModelNameCore", e, t, 0))), n.b("</h3>"), n.b("\n" + i), n.b("            </a>"), n.b("\n" + i)
            }), e.pop()), n.s(n.f("ModelNameSuffix", e, t, 1), e, t, 0, 400, 617, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                n.b('            <a href="#" class="carcomparisontool-selector-overlay-item-title small-after">'), n.b("\n" + i), n.b("                <h3>"), n.b(n.v(n.f("ModelNameCore", e, t, 0))), n.b("</h3>"), n.b("\n" + i), n.b("                <small>"), n.b(n.t(n.f("ModelNameSuffix", e, t, 0))), n.b("</small>"), n.b("\n" + i), n.b("            </a>"), n.b("\n" + i)
            }), e.pop()), n.s(n.f("ModelNameSuffix", e, t, 1), e, t, 1, 0, 0, "") || (n.b('            <a href="#" class="carcomparisontool-selector-overlay-item-title">'), n.b("\n" + i), n.b("                <h3>"), n.b(n.v(n.f("ModelNameCore", e, t, 0))), n.b("</h3>"), n.b("\n" + i), n.b("            </a>"), n.b("\n" + i))
        }), e.pop()), n.s(n.f("ModelNameCore", e, t, 1), e, t, 1, 0, 0, "") || (n.b('        <a href="#" class="carcomparisontool-selector-overlay-item-title">'), n.b("\n" + i), n.b("            <h3>"), n.b(n.v(n.f("ModelDisplayName", e, t, 0))), n.b("</h3>"), n.b("\n" + i), n.b("        </a>"), n.b("\n" + i), n.b("        ")), n.b(" -->"), n.b("\n" + i), n.s(n.f("NameType1", e, t, 1), e, t, 0, 1076, 1199, "{{ }}") && (n.rs(e, t, function(e, t, n) {
            n.b('    <a href="#" class="carcomparisontool-selector-overlay-item-title">'), n.b("\n" + i), n.b("        <h3>"), n.b(n.v(n.f("ModelDisplayName", e, t, 0))), n.b("</h3>"), n.b("\n" + i), n.b("    </a>"), n.b("\n" + i)
        }), e.pop()), n.s(n.f("NameType2", e, t, 1), e, t, 0, 1232, 1352, "{{ }}") && (n.rs(e, t, function(e, t, n) {
            n.b('    <a href="#" class="carcomparisontool-selector-overlay-item-title">'), n.b("\n" + i), n.b("        <h3>"), n.b(n.v(n.f("ModelNameCore", e, t, 0))), n.b("</h3>"), n.b("\n" + i), n.b("    </a>"), n.b("\n" + i)
        }), e.pop()), n.s(n.f("NameType3", e, t, 1), e, t, 0, 1385, 1550, "{{ }}") && (n.rs(e, t, function(e, t, n) {
            n.b('    <a href="#" class="carcomparisontool-selector-overlay-item-title">'), n.b("\n" + i), n.b("        <small>"), n.b(n.t(n.f("ModelNamePrefix", e, t, 0))), n.b("</small>"), n.b("\n" + i), n.b("        <h3>"), n.b(n.v(n.f("ModelNameCore", e, t, 0))), n.b("</h3>"), n.b("\n" + i), n.b("    </a>"), n.b("\n" + i)
        }), e.pop()), n.s(n.f("NameType4", e, t, 1), e, t, 0, 1583, 1760, "{{ }}") && (n.rs(e, t, function(e, t, n) {
            n.b('    <a href="#" class="carcomparisontool-selector-overlay-item-title small-after">'), n.b("\n" + i), n.b("        <h3>"), n.b(n.v(n.f("ModelNameCore", e, t, 0))), n.b("</h3>"), n.b("\n" + i), n.b("        <small>"), n.b(n.t(n.f("ModelNameSuffix", e, t, 0))), n.b("</small>"), n.b("\n" + i), n.b("    </a>"), n.b("\n" + i)
        }), e.pop()), n.b("\n" + i), n.b('    <div class="carcomparisontool-selector-overlay-item-img">'), n.b("\n" + i), n.b('        <img alt="" src="'), n.b(n.v(n.f("CarImage", e, t, 0))), n.b('?w=400" srcset="'), n.b(n.v(n.f("CarImage", e, t, 0))), n.b("?w=400 1x, "), n.b(n.v(n.f("CarImage", e, t, 0))), n.b('?w=800 2x" sizes="" class="carcomparisontool-selector-overlay-item-img--default"> <!--OD-84-Modified-->'), n.b("\n" + i), n.b("    </div>"), n.b("\n" + i), n.s(n.f("Price", e, t, 1), e, t, 0, 2055, 2104, "{{ }}") && (n.rs(e, t, function(e, t, n) {
            n.b('    <div class="carprice">'), n.b(n.v(n.f("Price", e, t, 0))), n.b("</div>"), n.b("\n" + i)
        }), e.pop()), n.s(n.f("ShortDescription", e, t, 1), e, t, 0, 2140, 2206, "{{ }}") && (n.rs(e, t, function(e, t, n) {
            n.b('    <div class="carcustom-copy">'), n.b(n.v(n.f("ShortDescription", e, t, 0))), n.b("</div>"), n.b("\n" + i)
        }), e.pop()), n.b("</li>"), n.fl()
    },
    partials: {},
    subs: {}
}), templates["car-comparison-tool-selector-slot"] = new Hogan.Template({
    code: function(e, t, i) {
        var n = this;
        return n.b(i = i || ""), n.b('<div class="car-comparison-tool-selector-form js-car-comparison-tool-selector-form car-comparison-tool-selector-form--pristine">'), n.b("\n" + i), n.b('    <i class="icon icon-close car-comparison-tool-selector-remove"></i>'), n.b("\n" + i), n.b('    <div class="car-comparison-tool-selector-name js-car-comparison-tool-selector-name car-comparison-tool-selector-info"></div>'), n.b("\n" + i), n.b('    <div class="car-selector-price js-car-selector-price car-selector-info"></div>'), n.b("\n" + i), n.b('    <img class="js-car-comparison-tool-selector-picture car-comparison-tool-selector-picture car-comparison-tool-selector-picture--placeholder" alt="" src="" data-placeholder-src="">'), n.b("\n" + i), n.b('    <div class="car-engine-selector-name js-car-engine-selector-name car-comparison-tool-selector-info"></div>'), n.b("\n" + i), n.b('    <div class="dropdown-wrapper car-comparison-tool-selector-input js-car-engine-dropdown">'), n.b("\n" + i), n.b('        <i class="dropdown-angle icon icon-angle-down"></i>'), n.b("\n" + i), n.b('        <select class="dropdown-fallback js-car-engine-fallback-select car-select" data-defaultlabel="'), n.b(n.v(n.d("translate.Chooseengine", e, t, 0))), n.b('">'), n.b("\n" + i), n.b('            <option selected="selected" disabled="disabled">'), n.b(n.v(n.d("translate.Chooseengine", e, t, 0))), n.b("</option>"), n.b("\n" + i), n.b("        </select>"), n.b("\n" + i), n.b('        <a class="dropdown-active-item" href="#">'), n.b(n.v(n.d("translate.Chooseengine", e, t, 0))), n.b("</a>"), n.b("\n" + i), n.b('        <ul class="dropdown js-car-engine-select"></ul>'), n.b("\n" + i), n.b("    </div>"), n.b("\n" + i), n.b('    <div class="car-cta-wrapper">'), n.b("\n" + i), n.b('        <div class="car-text-center car-comparison-tool-selector-build">'), n.b("\n" + i), n.b('            <a href="#">'), n.b(n.v(n.d("translate.BuildYourOwn", e, t, 0))), n.b("</a>"), n.b("\n" + i), n.b("        </div>"), n.b("\n" + i), n.b('        <div class="car-text-center car-comparison-tool-selector-build Small">'), n.b("\n" + i), n.b('            <a href="#">'), n.b(n.v(n.d("translate.BuildYourOwnSmall", e, t, 0))), n.b("</a>"), n.b("\n" + i), n.b("        </div>"), n.b("\n" + i), n.b('        <div class="car-comparison-tool-selector-explore">'), n.b("\n" + i), n.b('            <a href="#">'), n.b(n.v(n.d("translate.Explore", e, t, 0))), n.b("</a>"), n.b("\n" + i), n.b("        </div>"), n.b("\n" + i), n.b("    </div>"), n.b("\n" + i), n.b("    <!--OD-2-Started-->"), n.b("\n" + i), n.b('    <div class="car-selector-change">'), n.b("\n" + i), n.b('        <a href="#">'), n.b(n.v(n.d("translate.Change", e, t, 0))), n.b("</a>"), n.b("\n" + i), n.b("    </div>"), n.b("\n" + i), n.b("    <!--OD-2-Ended-->"), n.b("\n" + i), n.b("</div>"), n.b("\n"), n.b("\n" + i), n.b('<div class="car-comparison-tool-selector-cta js-car-comparison-tool-selector-cta">'), n.b("\n" + i), n.b('    <span class="car-comparison-tool-selector-cta-icon">+</span>'), n.b("\n" + i), n.b('    <span class="car-cta-link">'), n.b(n.v(n.d("translate.Addmodel", e, t, 0))), n.b("</span>"), n.b("\n" + i), n.b("</div>"), n.b("\n"), n.fl()
    },
    partials: {},
    subs: {}
}), templates["car-comparison-tool-specs"] = new Hogan.Template({
    code: function(e, t, i) {
        var n = this;
        return n.b(i = i || ""), n.b("  <!-- Technical specifications -->"), n.b("\n" + i), n.b("<!-- OD-2-Started -->"), n.b("\n" + i), n.b('<div class="js-cctool-selector">'), n.b("\n" + i), n.s(n.f("data", e, t, 1), e, t, 0, 104, 414, "{{ }}") && (n.rs(e, t, function(e, t, n) {
            n.b('    <ul class="accordion-panel-header-group spec">'), n.b("\n" + i), n.s(n.f("cats", e, t, 1), e, t, 0, 173, 390, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                n.b('        <a class="accordion-panel-header" id="'), n.b(n.v(n.f("CategoryName", e, t, 0))), n.b('">'), n.b("\n" + i), n.b('            <li class="accordion-panel-category" style="display: inline;">'), n.b("\n" + i), n.b("                "), n.b(n.v(n.f("CategoryName", e, t, 0))), n.b("\n" + i), n.b("            </li>"), n.b("\n" + i), n.b("        </a>"), n.b("\n" + i)
            }), e.pop()), n.b("    </ul>"), n.b("\n" + i)
        }), e.pop()), n.s(n.f("data", e, t, 1), e, t, 0, 437, 721, "{{ }}") && (n.rs(e, t, function(e, t, n) {
            n.b('    <div class="cc-dropdown">'), n.b("\n" + i), n.b('        <i class="dropdown-angle icon icon-angle-down"></i>'), n.b("\n" + i), n.b('        <span class="selected"></span>'), n.b("\n" + i), n.b("        <ul>"), n.b("\n" + i), n.s(n.f("cats", e, t, 1), e, t, 0, 605, 682, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                n.b('            <li id="'), n.b(n.v(n.f("CategoryName", e, t, 0))), n.b('">'), n.b(n.v(n.f("CategoryName", e, t, 0))), n.b("</li>"), n.b("\n" + i)
            }), e.pop()), n.b("        </ul>"), n.b("\n" + i), n.b("    </div>"), n.b("\n" + i)
        }), e.pop()), n.b("</div>"), n.b("\n"), n.b("\n" + i), n.b("<!-- OD-2-Ended -->"), n.b("\n" + i), n.b('<div class="box" id="technical-specs">'), n.b("\n" + i), n.s(n.f("data", e, t, 1), e, t, 0, 811, 3091, "{{ }}") && (n.rs(e, t, function(e, t, n) {
            n.b('    <ul class="accordion standard-accordion cctool-accordion">'), n.b("\n"), n.b("\n" + i), n.b("        <!-- Capacity -->"), n.b("\n" + i), n.s(n.f("cats", e, t, 1), e, t, 0, 919, 3066, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                n.b('        <li id="'), n.b(n.v(n.f("CategoryName", e, t, 0))), n.b('">'), n.b("\n" + i), n.b('            <div class="cctool-accordion-toggle">'), n.b("\n" + i), n.b('                <span class="cctool-accordion-toggle-copy">'), n.b(n.v(n.f("CategoryName", e, t, 0))), n.b("</span>"), n.b("\n" + i), n.b("            </div>"), n.b("\n" + i), n.b('            <div class="accordion-content">'), n.b("\n" + i), n.b('                <table class="cctool-table">'), n.b("\n" + i), n.s(n.f("Items", e, t, 1), e, t, 0, 1230, 2961, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                    n.b("\n"), n.b("\n" + i), n.s(n.f("HasSubItems", e, t, 1), e, t, 0, 1269, 2217, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                        n.b('                    <tr class="cctool-spec-subheader header" data-lightbox-id="'), n.b(n.v(n.f("FieldName", e, t, 0))), n.b('" data-lightbox-title="'), n.b(n.v(n.f("Label", e, t, 0))), n.b('">'), n.b("\n" + i), n.b("                        <th>"), n.b("\n" + i), n.b('                            <span class="label">'), n.b(n.v(n.f("Label", e, t, 0))), n.b("</span>"), n.b("\n" + i), n.b('                            <span class="cctool-info-icon lightbox"></span>'), n.b("\n" + i), n.b("                        </th>"), n.b("\n" + i), n.b('                        <th><span class="cctool-info-icon lightbox"></span></th>'), n.b("\n" + i), n.b("                        <th></th>"), n.b("\n" + i), n.b("                    </tr>"), n.b("\n" + i), n.s(n.f("SubItems", e, t, 1), e, t, 0, 1773, 2183, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                            n.b('                    <tr class="subitem-labels">'), n.b("\n" + i), n.s(n.f("Labels", e, t, 1), e, t, 0, 1857, 1961, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                                n.b('                        <td><h6 class="cctool-header--small">'), n.b(n.v(n.d(".", e, t, 0))), n.b("</h6></td>"), n.b("\n" + i)
                            }), e.pop()), n.b("                    </tr>"), n.b("\n" + i), n.b("                    <tr>"), n.b("\n" + i), n.s(n.f("Values", e, t, 1), e, t, 0, 2059, 2125, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                                n.b("                        <td>"), n.b(n.v(n.d(".", e, t, 0))), n.b("</td>"), n.b("\n" + i)
                            }), e.pop()), n.b("                    </tr>"), n.b("\n" + i)
                        }), e.pop())
                    }), e.pop()), n.b("\n" + i), n.s(n.f("HasSubItems", e, t, 1), e, t, 1, 0, 0, "") || (n.b('                    <tr class="header" data-lightbox-id="'), n.b(n.v(n.f("FieldName", e, t, 0))), n.b('" data-lightbox-title="'), n.b(n.v(n.f("Label", e, t, 0))), n.b('">'), n.b("\n" + i), n.b("                        <th>"), n.b("\n" + i), n.b('                            <span class="label">'), n.b(n.v(n.f("Label", e, t, 0))), n.b("</span>"), n.b("\n" + i), n.b('                            <span class="cctool-info-icon lightbox"></span>'), n.b("\n" + i), n.b("                        </th>"), n.b("\n" + i), n.b('                        <th><span class="cctool-info-icon lightbox"></span></th>'), n.b("\n" + i), n.b("                        <th></th>"), n.b("\n" + i), n.b("                    </tr>"), n.b("\n" + i), n.b('                    <tr class="tech-info">'), n.b("\n" + i), n.s(n.f("Values", e, t, 1), e, t, 0, 2798, 2864, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                        n.b("                        <td>"), n.b(n.v(n.d(".", e, t, 0))), n.b("</td>"), n.b("\n" + i)
                    }), e.pop()), n.b("                    </tr>"), n.b("\n" + i)), n.b("\n"), n.b("\n" + i)
                }), e.pop()), n.b("                </table>"), n.b("\n" + i), n.b("            </div>"), n.b("\n" + i), n.b("        </li>"), n.b("\n" + i), n.b("        <!-- / Capacity -->"), n.b("\n" + i)
            }), e.pop()), n.b("\n" + i), n.b("    </ul>"), n.b("\n" + i)
        }), e.pop()), n.b("</div>"), n.b("\n" + i), n.b("<!-- / Technical specifications -->"), n.b("\n"), n.fl()
    },
    partials: {},
    subs: {}
}), templates["feature-overlay"] = new Hogan.Template({
    code: function(e, t, i) {
        var n = this;
        return n.b(i = i || ""), n.b("<header>"), n.b("\n" + i), n.b("    <h5>"), n.b(n.v(n.f("title", e, t, 0))), n.b("</h5>"), n.b("\n" + i), n.b('    <a href="#" class="overlay-close"><i class="icon icon-close"></i></a>'), n.b("\n" + i), n.b("</header>"), n.b("\n" + i), n.b('<div class="feature-overlay-content">'), n.b("\n" + i), n.b("    "), n.b(n.t(n.f("htmlContent", e, t, 0))), n.b("\n" + i), n.b("</div>"), n.b("\n"), n.fl()
    },
    partials: {},
    subs: {}
}), templates["readmoreoverlay-temp"] = new Hogan.Template({
    code: function(e, t, i) {
        var n = this;
        return n.b(i = i || ""), n.b('<div class="overlay-content">'), n.b("\n" + i), n.b("    "), n.b(n.t(n.f("htmlContent", e, t, 0))), n.b("\n" + i), n.b("</div>"), n.b("\n"), n.fl()
    },
    partials: {},
    subs: {}
}), templates["individual-review"] = new Hogan.Template({
    code: function(e, t, i) {
        var n = this;
        return n.b(i = i || ""), n.b("<!--OD-12-Individual Review Model Started-->"), n.b("\n" + i), n.b('<div class="filter-sort-box">'), n.b("\n" + i), n.b('    <div class="filter-sort">'), n.b("\n" + i), n.b('        <div class="bg-color">'), n.b("\n" + i), n.b('            <div class="review-wrap">'), n.b("\n" + i), n.b('                <div class="filter-reviews">'), n.b("\n" + i), n.b("                    "), n.b(n.v(n.f("TotalNoOfReviewers", e, t, 0))), n.b(" "), n.b(n.v(n.d("translate.Reviews", e, t, 0))), n.b("\n" + i), n.b("                </div>"), n.b("\n" + i), n.b("            </div>"), n.b("\n" + i), n.b('            <div class="sf-align">'), n.b("\n" + i), n.b('                <div class="select-wrap">'), n.b("\n" + i), n.b('                    <div class="filter-by">'), n.b("\n" + i), n.b('                        <div class="filter-by-txt reevoo-track">'), n.b(n.v(n.d("translate.FilterBy", e, t, 0))), n.b("</div>"), n.b("\n" + i), n.b('                        <select class="select-style js-engine-filer-select">'), n.b("\n" + i), n.b('                            <option value="all">'), n.b(n.v(n.d("translate.AllPurchasers", e, t, 0))), n.b("</option>"), n.b("\n" + i), n.b('                            <option value="commuter">'), n.b(n.v(n.d("translate.Commuter", e, t, 0))), n.b("</option>"), n.b("\n" + i), n.b('                            <option value="motability">'), n.b(n.v(n.d("translate.Motability", e, t, 0))), n.b("</option>"), n.b("\n" + i), n.b('                            <option value="motorway-driver">'), n.b(n.v(n.d("translate.Motorwaydriver", e, t, 0))), n.b("</option>"), n.b("\n" + i), n.b('                            <option value="parent">'), n.b(n.v(n.d("translate.Parent", e, t, 0))), n.b("</option>"), n.b("\n" + i), n.b('                            <option value="recreational">'), n.b(n.v(n.d("translate.Recreational", e, t, 0))), n.b("</option>"), n.b("\n" + i), n.b("                        </select>"), n.b("\n" + i), n.b("                    </div>"), n.b("\n" + i), n.b('                    <div class="sort-by">'), n.b("\n" + i), n.b('                        <div class="sort-by-txt reevoo-track">'), n.b(n.v(n.d("translate.SortBy", e, t, 0))), n.b("</div>"), n.b("\n" + i), n.b('                        <select class="select-style js-engine-sortBy-select">'), n.b("\n" + i), n.b('                            <option value="recent">'), n.b(n.v(n.d("translate.MostRecent", e, t, 0))), n.b("</option>"), n.b("\n" + i), n.b('                            <!--<option value="helpful">'), n.b(n.v(n.d("translate.MostHelpful", e, t, 0))), n.b("</option>-->"), n.b("\n" + i), n.b('                            <option value="score_asc">'), n.b(n.v(n.d("translate.LowestScore", e, t, 0))), n.b("</option>"), n.b("\n" + i), n.b('                            <option value="score_desc">'), n.b(n.v(n.d("translate.HighestScore", e, t, 0))), n.b("</option>"), n.b("\n" + i), n.b("                        </select>"), n.b("\n" + i), n.b("                    </div>"), n.b("\n" + i), n.b("                </div>"), n.b("\n" + i), n.b("            </div>"), n.b("\n" + i), n.b('            <div class="clear"></div>'), n.b("\n" + i), n.b("        </div>"), n.b("\n" + i), n.b("    </div>"), n.b("\n" + i), n.b("</div>"), n.b("\n"), n.b("\n" + i), n.s(n.f("IndividualReview", e, t, 1), e, t, 0, 1975, 5771, "{{ }}") && (n.rs(e, t, function(e, t, n) {
            n.b('<div class="main-page-block">'), n.b("\n" + i), n.b('    <div id="content">'), n.b("\n" + i), n.b('        <div class="wraper">'), n.b("\n" + i), n.b('            <div class="main-line-chart-box">'), n.b("\n" + i), n.b('                <div class="main_star_block">'), n.b("\n" + i), n.b('                    <div class="star_block">'), n.b("\n" + i), n.b('                        <div class="reviews-star">'), n.b("\n" + i), n.b('                            <div class="star-ratings-css">'), n.b("\n" + i), n.b('                                <div class="star-ratings-css-top" style="width: '), n.b(n.v(n.f("OverallAverageRating", e, t, 0))), n.b('%"><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div>'), n.b("\n" + i), n.b('                                <div class="star-ratings-css-bottom"><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div>'), n.b("\n" + i), n.b("                            </div>"), n.b("\n" + i), n.b("                        </div>"), n.b("\n"), n.b("\n" + i), n.b('                        <div class="clear"></div>'), n.b("\n" + i), n.b("                    </div>"), n.b("\n" + i), n.b("                </div>"), n.b("\n"), n.b("\n" + i), n.b('                <div class="show-details">'), n.b(n.v(n.d("translate.ShowDetails", e, t, 0))), n.b("</div>"), n.b("\n" + i), n.b('                <div class="hide-details">'), n.b(n.v(n.d("translate.HideDetails", e, t, 0))), n.b("</div>"), n.b("\n" + i), n.b('                <div class="line-charts">'), n.b("\n" + i), n.s(n.f("ReviewCategoryItems", e, t, 1), e, t, 0, 3037, 3610, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                n.b('                    <div class="line-chart">'), n.b("\n" + i), n.b('                        <div class="chart-block-style">'), n.b("\n" + i), n.b('                            <div class="chart-title-style">'), n.b(n.v(n.f("CategoryName", e, t, 0))), n.b("</div>"), n.b("\n" + i), n.b('                            <div class="line-progress chart-progress-style"></div>'), n.b("\n" + i), n.b('                            <div class="clear"></div>'), n.b("\n" + i), n.b("                        </div>"), n.b("\n" + i), n.b('                        <div class="progress-counter">'), n.b("\n" + i), n.b('                            <span class="progres-bar" data="'), n.b(n.v(n.f("AverageRating", e, t, 0))), n.b('"></span>'), n.b("\n" + i), n.b("                        </div>"), n.b("\n" + i), n.b("                    </div>"), n.b("\n"), n.b("\n" + i)
            }), e.pop()), n.b("                </div>"), n.b("\n" + i), n.b('                <div class="reviewer-name">'), n.b("\n" + i), n.b("                    "), n.b(n.v(n.f("ReviewrsName", e, t, 0))), n.b("\n" + i), n.b("                </div>"), n.b("\n" + i), n.b('                <div class="reviewer-location">'), n.b("\n" + i), n.b("                    "), n.b(n.v(n.f("Location", e, t, 0))), n.b("\n" + i), n.b("                </div>"), n.b("\n" + i), n.b('                <div class="review-select">'), n.b("\n" + i), n.b('                    <div class="reviewer-parent">'), n.b(n.v(n.f("Segment", e, t, 0))), n.b("</div>"), n.b("\n" + i), n.b('                    <div class="clear"></div>'), n.b("\n" + i), n.b("                </div>"), n.b("\n" + i), n.b('                <div class="series-name">'), n.b("\n" + i), n.b("                    "), n.b(n.v(n.f("SeriesName", e, t, 0))), n.b("\n" + i), n.b("                </div>"), n.b("\n" + i), n.b('                <div class="reviewer-buy-date">'), n.b("\n" + i), n.b("                    "), n.b(n.v(n.d("translate.Purchased", e, t, 0))), n.b(" "), n.b(n.v(n.f("PurchasedDate", e, t, 0))), n.b("\n" + i), n.b("                </div>"), n.b("\n" + i), n.b('                <div class="publisher">'), n.b("\n" + i), n.b("                    "), n.b(n.v(n.d("translate.Published", e, t, 0))), n.b(" "), n.b(n.v(n.f("PublishedDate", e, t, 0))), n.b("\n" + i), n.b("                </div>"), n.b("\n" + i), n.b("            </div>"), n.b("\n" + i), n.b('            <div class="pager">'), n.b("\n" + i), n.b('                <div style="width:100%;">'), n.b("\n" + i), n.b('                    <div class="pros">'), n.b("\n" + i), n.b('                        <span class="plus">'), n.b(n.v(n.d("translate.Plus", e, t, 0))), n.b('</span><span class="plus-title">'), n.b(n.v(n.d("translate.Pros", e, t, 0))), n.b("</span>"), n.b("\n" + i), n.b('                        <div class="txtwrap">'), n.b("\n" + i), n.b('                            <div class="txtcontainer txt">'), n.b("\n" + i), n.b('                                <span class="description">'), n.b("\n" + i), n.b("                                    "), n.b(n.v(n.f("Pros", e, t, 0))), n.b("\n" + i), n.b("                                </span>"), n.b("\n" + i), n.b("                            </div>"), n.b("\n" + i), n.b("                        </div>"), n.b("\n" + i), n.b("                    </div>"), n.b("\n" + i), n.b('                    <div class="cons">'), n.b("\n" + i), n.b('                        <span class="minus">'), n.b(n.v(n.d("translate.Minus", e, t, 0))), n.b('</span><span class="minus-title">'), n.b(n.v(n.d("translate.Cons", e, t, 0))), n.b("</span>"), n.b("\n" + i), n.b('                        <div class="txtwrap">'), n.b("\n" + i), n.b('                            <div class="txtcontainer txt">'), n.b("\n" + i), n.b('                                <span class="description">'), n.b("\n" + i), n.b("                                    "), n.b(n.v(n.f("Cons", e, t, 0))), n.b("\n" + i), n.b("                                </span>"), n.b("\n" + i), n.b("                            </div>"), n.b("\n" + i), n.b("                        </div>"), n.b("\n" + i), n.b("                    </div>"), n.b("\n" + i), n.b("                </div>"), n.b("\n" + i), n.b('                <div class="readmore">'), n.b("\n" + i), n.b('                    <div class="more">'), n.b(n.v(n.d("translate.ReadMore", e, t, 0))), n.b("</div>"), n.b("\n" + i), n.b('                    <div class="less">'), n.b(n.v(n.d("translate.ReadLess", e, t, 0))), n.b("</div>"), n.b("\n" + i), n.b("                </div>"), n.b("\n" + i), n.b("            </div>"), n.b("\n" + i), n.b("        </div>"), n.b("\n" + i), n.b("    </div>"), n.b("\n" + i), n.b("</div>"), n.b("\n" + i)
        }), e.pop()), n.b("\n" + i), n.b('<div class="pagination reevoo-track">'), n.b("\n" + i), n.b('    <div class="gray-bg ">'), n.b("\n" + i), n.b('        <div class="page-list">'), n.b("\n" + i), n.b('            <ul class="page-number">'), n.b("\n" + i), n.b('                <li class="page-li-style">'), n.b("\n" + i), n.b('                    <a class="page-number-list page-active js-button-first " title="1">'), n.b(n.v(n.d("translate.FirstPage", e, t, 0))), n.b("</a>"), n.b("\n" + i), n.b("                </li>"), n.b("\n" + i), n.b('                <li id="pagination_dot_1" class="page-li-style">'), n.b("\n" + i), n.b('                    <div class="js-pagination-label">'), n.b(n.v(n.d("translate.Pagination", e, t, 0))), n.b("</div>"), n.b("\n" + i), n.b("                </li>"), n.b("\n" + i), n.b('                <li class="page-li-style">'), n.b("\n" + i), n.b('                    <a id="Id2" class="page-number-list js-button-second"></a>'), n.b("\n"), n.b("\n" + i), n.b("                </li>"), n.b("\n" + i), n.b('                <li class="page-li-style">'), n.b("\n" + i), n.b('                    <a id="Id3" class="page-number-list js-button-third"></a>'), n.b("\n" + i), n.b("                </li>"), n.b("\n" + i), n.b('                <li class="page-li-style">'), n.b("\n" + i), n.b('                    <a id="Id4" class="page-number-list js-button-fourth"></a>'), n.b("\n" + i), n.b("                </li>"), n.b("\n" + i), n.b('                <li class="page-li-style">'), n.b("\n" + i), n.b('                    <a id="Id5" class="page-number-list js-button-fifth"></a>'), n.b("\n" + i), n.b("                </li>"), n.b("\n" + i), n.b('                <li id="pagination_dot_2" class="page-li-style cl-inv-pagination__list__item-1">'), n.b("\n" + i), n.b('                    <span class="js-pagination-label">'), n.b(n.v(n.d("translate.Pagination", e, t, 0))), n.b("</span>"), n.b("\n" + i), n.b("                </li>"), n.b("\n" + i), n.b('                <li class="page-li-style">'), n.b("\n" + i), n.b('                    <a class="page-number-list js-button-last" title="'), n.b(n.v(n.f("TotalPages", e, t, 0))), n.b('">10</a>'), n.b("\n" + i), n.b("                </li>"), n.b("\n" + i), n.b("            </ul>"), n.b("\n" + i), n.b('            <div class="page-swichers">'), n.b("\n" + i), n.b('                <div class="page-swichers-prev js-engine-previous-click">'), n.b("\n" + i), n.b("                    <span>"), n.b(n.v(n.d("translate.Previous", e, t, 0))), n.b("</span>"), n.b("\n" + i), n.b("                </div>"), n.b("\n" + i), n.b('                <div class="page-swichers-next js-engine-next-click">'), n.b("\n" + i), n.b("                    <span>"), n.b(n.v(n.d("translate.Next", e, t, 0))), n.b("</span>"), n.b("\n" + i), n.b("                </div>"), n.b("\n" + i), n.b("            </div>"), n.b("\n" + i), n.b("        </div>"), n.b("\n" + i), n.b("    </div>"), n.b("\n" + i), n.b("</div>"), n.b("\n" + i), n.b("<!--OD_12-IndividualReview Ended-->"), n.b("\n"), n.fl()
    },
    partials: {},
    subs: {}
}), templates["slider-overlay-temp"] = new Hogan.Template({
    code: function(e, t, i) {
        var n = this;
        return n.b(i = i || ""), n.b('<div class="slider-overlay-content">'), n.b("\n" + i), n.b("    "), n.b(n.t(n.f("htmlContent", e, t, 0))), n.b("\n" + i), n.b("</div>"), n.b("\n"), n.fl()
    },
    partials: {},
    subs: {}
}), templates["fyv-level-one"] = new Hogan.Template({
    code: function(e, t, i) {
        var n = this;
        return n.b(i = i || ""), n.s(n.f("level", e, t, 1), e, t, 0, 12, 239, "{{ }}") && (n.rs(e, t, function(e, t, n) {
            n.b('  <li class="level-1 level" data-level-id="'), n.b(n.v(n.d("Level1Answer.ID", e, t, 0))), n.b('">'), n.b("\n" + i), n.b('    <img src="'), n.b(n.v(n.d("Level1Answer.Image", e, t, 0))), n.b('" alt="" class="image" />'), n.b("\n" + i), n.b('    <p class="title">'), n.b(n.v(n.d("Level1Answer.Title", e, t, 0))), n.b("</p>"), n.b("\n" + i), n.b("    <p>"), n.b(n.v(n.d("Level1Answer.Text", e, t, 0))), n.b("</p>"), n.b("\n" + i), n.b("  </li>"), n.b("\n" + i)
        }), e.pop()), n.fl()
    },
    partials: {},
    subs: {}
}), templates["fyv-level-root"] = new Hogan.Template({
    code: function(e, t, i) {
        var n = this;
        return n.b(i = i || ""), n.b('<div class="level level-root" style="'), n.b(n.v(n.d("level.style", e, t, 0))), n.b(';">'), n.b("\n" + i), n.b("  <div>"), n.b("\n" + i), n.b("    <div>"), n.b("\n" + i), n.b('      <div class="top-row v-center-parent">'), n.b("\n" + i), n.b('        <div class="back v-center"><i class="icon icon-angle-left"></i></div>'), n.b("\n" + i), n.b('        <h3 class="v-center">'), n.b(n.v(n.f("rootLabel", e, t, 0))), n.b("</h3>"), n.b("\n" + i), n.b('        <div class="reload-placeholder"><i class="icon"></i></div>'), n.b("\n" + i), n.b("      </div>"), n.b("\n" + i), n.b("      <h1>"), n.b(n.v(n.f("question", e, t, 0))), n.b("</h1>"), n.b("\n" + i), n.b('      <ul class="buttons"></ul>'), n.b("\n" + i), n.b("    </div>"), n.b("\n" + i), n.b("  </div>"), n.b("\n" + i), n.b("</div>"), n.fl()
    },
    partials: {},
    subs: {}
}), templates["fyv-level-three-results"] = new Hogan.Template({
    code: function(e, t, i) {
        var n = this;
        return n.b(i = i || ""), n.b("\n" + i), n.b('<div class="results level-results" data-results-id="'), n.b(n.v(n.d("results.Title", e, t, 0))), n.b('">'), n.b("\n" + i), n.b('  <div class="background"  data-src="'), n.b(n.v(n.d("prevLevel.BackgroundImage", e, t, 0))), n.b('"></div>'), n.b("\n" + i), n.b('  <div class="fyv-content">'), n.b("\n" + i), n.b('    <div class="top-row v-center-parent">'), n.b("\n" + i), n.b('      <div class="back v-center"><i class="icon icon-angle-left"></i></div>'), n.b("\n" + i), n.b('      <h3 class="m-center v-center">'), n.b(n.v(n.d("results.Title", e, t, 0))), n.b("</h3>"), n.b("\n" + i), n.b('      <div class="reload reset v-center"><i class="icon icon-reload"></i></div>'), n.b("\n" + i), n.b("    </div>"), n.b("\n" + i), n.b("    "), n.b("\n" + i), n.b('    <h1 class="m-center">'), n.b(n.v(n.d("results.SubTitle", e, t, 0))), n.b("</h1>"), n.b("\n" + i), n.b('    <ul class="results-details items-list">'), n.b("\n" + i), n.b('      <li class="results-item wrapper">'), n.b("\n" + i), n.b('        <div class="fluid image show-for-not-lt-ie9" style="background-image:url(\''),
            n.b(n.v(n.d("results.ModelImage", e, t, 0))), n.b("')\"></div>"), n.b("\n" + i), n.b('        <img class="show-for-lt-ie9" src="'), n.b(n.v(n.d("results.ModelImage", e, t, 0))), n.b('"/>'), n.b("\n" + i), n.b("      </li>"), n.b("\n" + i), n.b('      <li class="results-item">'), n.b("\n" + i), n.b("        <p>"), n.b(n.t(n.d("results.Description", e, t, 0))), n.b("</p>"), n.b("\n" + i), n.s(n.f("disclaimer", e, t, 1), e, t, 0, 889, 930, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                n.b("        <p>"), n.b(n.v(n.f("disclaimer", e, t, 0))), n.b("</p>"), n.b("\n" + i)
            }), e.pop()), n.b('        <div class="show-for-large-up">'), n.b("\n" + i), n.b('          <ul class="inline v-center-parent ">'), n.b("\n" + i), n.b('            <li class="v-center"><a class="button" href="'), n.b(n.v(n.d("results.BuildURL", e, t, 0))), n.b('">Build Your '), n.b(n.v(n.f("modelName", e, t, 0))), n.b("</a></li>"), n.b("\n" + i), n.b('            <li class="v-center"><a class="button no-border" href="//www.volvocars.com/us/find-a-dealer">Locate Dealer</a></li>'), n.b("\n" + i), n.b("          </ul>"), n.b("\n" + i), n.b("        </div>"), n.b("\n" + i), n.b('        <ul class="show-for-medium">'), n.b("\n" + i), n.b('          <li><a class="button" href="'), n.b(n.v(n.d("results.BuildURL", e, t, 0))), n.b('">Build Your '), n.b(n.v(n.f("modelName", e, t, 0))), n.b("</a></li>"), n.b("\n" + i), n.b('          <li><a class="button no-border" href="//www.volvocars.com/us/find-a-dealer">Locate Dealer</a></li>'), n.b("\n" + i), n.b("        </ul>"), n.b("\n" + i), n.b("      </li>"), n.b("\n" + i), n.b("    </ul>"), n.b("\n" + i), n.b('    <ul class="buttons theme-dark">'), n.s(n.d("results.Features", e, t, 1), e, t, 0, 1643, 2014, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                n.b("<li"), n.b("\n" + i), n.b('          class="level2 wrapper"'), n.b("\n" + i), n.b('          data-feature-id="'), n.b(n.v(n.f("ID", e, t, 0))), n.b('"'), n.b("\n" + i), n.b("          style=\"background-image:url('"), n.b(n.v(n.f("Image", e, t, 0))), n.b("')\""), n.b("\n" + i), n.b("          >"), n.b("\n" + i), n.b('          <div class="fluid ">'), n.b("\n" + i), n.b('            <p class="m-center">'), n.b(n.v(n.f("Text", e, t, 0))), n.b("</p>"), n.b("\n" + i), n.b('            <div class="button-wrapper">'), n.b("\n" + i), n.b('              <div class="button m-center">'), n.b(n.v(n.f("Title", e, t, 0))), n.b("</div>"), n.b("\n" + i), n.b("            </div>"), n.b("\n" + i), n.b("          </div>"), n.b("\n" + i), n.b("        </li>")
            }), e.pop()), n.b("\n" + i), n.b("    </ul>"), n.b("\n" + i), n.b('    <div class="show-for-small">'), n.b("\n" + i), n.b('      <p><a class="button no-border" href="//www.volvocars.com/us/find-a-dealer">Locate Dealer</a></p>'), n.b("\n" + i), n.b("    </div>"), n.b("\n"), n.b("\n" + i), n.b("  </div>"), n.b("\n" + i), n.b("</div>"), n.b("\n"), n.fl()
    },
    partials: {},
    subs: {}
}), templates["fyv-level-two"] = new Hogan.Template({
    code: function(e, t, i) {
        var n = this;
        return n.b(i = i || ""), n.b('<div class="level level-2" style="display:none;" data-level-one-id="'), n.b(n.v(n.d("prevLevel.ID", e, t, 0))), n.b('">'), n.b("\n" + i), n.b('  <div class="background" data-src="'), n.b(n.v(n.d("prevLevel.BackgroundImage", e, t, 0))), n.b('"></div>'), n.b("\n" + i), n.b("  <div>"), n.b("\n" + i), n.b('    <div class="top-row v-center-parent">'), n.b("\n" + i), n.b('      <div class="back v-center"><i class="icon icon-angle-left"></i></div>'), n.b("\n" + i), n.b('      <h3 class="v-center">'), n.b(n.v(n.d("prevLevel.Title", e, t, 0))), n.b("</h3>"), n.b("\n" + i), n.b('      <div class="reload-placeholder"><i class="icon"></i></div>'), n.b("\n" + i), n.b("    </div>"), n.b("\n" + i), n.b("    <h1>"), n.b(n.v(n.d("prevLevel.FollowUpQuestion", e, t, 0))), n.b("</h1>"), n.b("\n" + i), n.b('    <ul class="buttons">'), n.b("\n" + i), n.s(n.f("level", e, t, 1), e, t, 0, 512, 701, "{{ }}") && (n.rs(e, t, function(e, t, n) {
            n.b('        <li data-level-id="'), n.b(n.v(n.f("ID", e, t, 0))), n.b('">'), n.b("\n" + i), n.b('          <img src="'), n.b(n.v(n.f("Image", e, t, 0))), n.b('" alt="" class="image" />'), n.b("\n" + i), n.b('          <p class="title">'), n.b(n.v(n.f("Title", e, t, 0))), n.b("</p>"), n.b("\n" + i), n.b("          <p>"), n.b(n.v(n.f("Text", e, t, 0))), n.b("</p>"), n.b("\n" + i), n.b("        </li>"), n.b("\n" + i)
        }), e.pop()), n.b("    </ul>"), n.b("\n" + i), n.b("  </div>"), n.b("\n" + i), n.b("</div>"), n.b("\n"), n.fl()
    },
    partials: {},
    subs: {}
}), templates["fyv-overlay"] = new Hogan.Template({
    code: function(e, t, i) {
        var n = this;
        return n.b(i = i || ""), n.b('<a href="#" class="overlay-close"><i class="icon icon-close"></i></a>'), n.b("\n" + i), n.b('<div class="content">'), n.b("\n" + i), n.b('  <div class="detail carousel">'), n.b("\n" + i), n.b('    <ul class="inline">'), n.b("\n" + i), n.b('      <li class="image"><img src="'), n.b(n.v(n.d("data.DetailImage", e, t, 0))), n.b('"/></li>'), n.b("\n" + i), n.b('      <li class="copy">'), n.b("\n" + i), n.b("        <h2>"), n.b(n.v(n.d("data.Title", e, t, 0))), n.b("</h2>"), n.b("\n" + i), n.b("        <p>"), n.b(n.v(n.d("data.Description", e, t, 0))), n.b("</p>"), n.b("\n" + i), n.b("      </li>"), n.b("\n" + i), n.b("    </ul>"), n.b("\n" + i), n.b("  </div>"), n.b("\n" + i), n.b("</div>"), n.b("\n"), n.fl()
    },
    partials: {},
    subs: {}
}), templates["story-stream-item"] = new Hogan.Template({
    code: function(e, t, i) {
        var n = this;
        return n.b(i = i || ""), n.b('<div class="story-stream-item" '), n.s(n.f("meta", e, t, 1), e, t, 0, 40, 91, "{{ }}") && (n.rs(e, t, function(e, t, i) {
            i.s(i.f("modelId", e, t, 1), e, t, 0, 52, 79, "{{ }}") && (i.rs(e, t, function(e, t, i) {
                i.b('data-model-id="'), i.b(i.v(i.f("modelId", e, t, 0))), i.b('"')
            }), e.pop())
        }), e.pop()), n.b(">"), n.b("\n"), n.b("\n" + i), n.s(n.f("media", e, t, 1), e, t, 0, 115, 488, "{{ }}") && (n.rs(e, t, function(e, t, n) {
            n.b('  <div class="ss-header '), n.s(n.f("video", e, t, 1), e, t, 0, 150, 159, "{{ }}") && (n.rs(e, t, function(e, t, i) {
                i.b("has-video")
            }), e.pop()), n.b('">'), n.b("\n" + i), n.b("    "), n.s(n.f("image", e, t, 1), e, t, 0, 186, 224, "{{ }}") && (n.rs(e, t, function(e, t, i) {
                i.b('<img class="ss-image" src="'), i.b(i.v(i.f("src", e, t, 0))), i.b('" />')
            }), e.pop()), n.b("\n" + i), n.s(n.f("video", e, t, 1), e, t, 0, 249, 466, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                n.s(n.f("youtube", e, t, 1), e, t, 0, 268, 449, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                    n.b('        <iframe class="ss-video ss-youtube" type="text/html" frameborder="0" allowfullscreen="" src="'), n.b(n.v(n.f("url", e, t, 0))), n.b('?rel=0&amp;autohide=1&amp;showinfo=0&amp;enablejsapi=1"></iframe>'), n.b("\n" + i)
                }), e.pop())
            }), e.pop()), n.b("  </div>"), n.b("\n" + i)
        }), e.pop()), n.b("\n" + i), n.s(n.f("body", e, t, 1), e, t, 0, 511, 737, "{{ }}") && (n.rs(e, t, function(e, t, n) {
            n.b('  <div class="ss-body">'), n.b("\n" + i), n.b("    "), n.s(n.f("title", e, t, 1), e, t, 0, 550, 568, "{{ }}") && (n.rs(e, t, function(e, t, i) {
                i.b("<h4>"), i.b(i.v(i.f("title", e, t, 0))), i.b("</h4>")
            }), e.pop()), n.b("\n" + i), n.b("    "), n.s(n.f("text_truncated", e, t, 1), e, t, 0, 602, 629, "{{ }}") && (n.rs(e, t, function(e, t, i) {
                i.b("<p>"), i.b(i.t(i.f("text_truncated", e, t, 0))), i.b("</p>")
            }), e.pop()), n.b("\n" + i), n.b("    "), n.s(n.f("posted", e, t, 1), e, t, 0, 664, 714, "{{ }}") && (n.rs(e, t, function(e, t, i) {
                i.b('<small class="ss-posted">Posted '), i.b(i.v(i.f("posted", e, t, 0))), i.b("</small>")
            }), e.pop()), n.b("\n" + i), n.b("  </div>"), n.b("\n" + i)
        }), e.pop()), n.b("\n" + i), n.s(n.f("footer", e, t, 1), e, t, 0, 761, 1205, "{{ }}") && (n.rs(e, t, function(e, t, n) {
            n.b('  <div class="ss-footer">'), n.b("\n" + i), n.b('    <a href="'), n.b(n.v(n.f("contentUrl", e, t, 0))), n.b('" target="_blank">'), n.b("\n" + i), n.b("      "), n.s(n.f("avatar", e, t, 1), e, t, 0, 851, 897, "{{ }}") && (n.rs(e, t, function(e, t, i) {
                i.b('<img class="ss-footer-avatar" src="'), i.b(i.v(i.f("src", e, t, 0))), i.b('" />')
            }), e.pop()), n.b("\n" + i), n.b("      "), n.s(n.f("title", e, t, 1), e, t, 0, 925, 1015, "{{ }}") && (n.rs(e, t, function(e, t, i) {
                i.b('<h3 class="ss-footer-title '), i.s(i.f("subtitle", e, t, 1), e, t, 0, 965, 977, "{{ }}") && (i.rs(e, t, function(e, t, i) {
                    i.b("has-subtitle")
                }), e.pop()), i.b('">'), i.b(i.v(i.f("prefix", e, t, 0))), i.b(i.v(i.f("text", e, t, 0))), i.b("</h3>")
            }), e.pop()), n.b("\n" + i), n.b("      "), n.s(n.f("subtitle", e, t, 1), e, t, 0, 1045, 1097, "{{ }}") && (n.rs(e, t, function(e, t, i) {
                i.b('<p class="ss-footer-subtitle">'), i.b(i.v(i.f("prefix", e, t, 0))), i.b(i.v(i.f("text", e, t, 0))), i.b("</p>")
            }), e.pop()), n.b("\n" + i), n.b("      "), n.s(n.f("icon", e, t, 1), e, t, 0, 1126, 1175, "{{ }}") && (n.rs(e, t, function(e, t, i) {
                i.b('<i class="ss-footer-icon icon icon-'), i.b(i.v(i.f("icon", e, t, 0))), i.b('"></i>')
            }), e.pop()), n.b("\n" + i), n.b("    </a>"), n.b("\n" + i), n.b("  </div>"), n.b("\n" + i)
        }), e.pop()), n.b("\n" + i), n.b("</div>"), n.b("\n"), n.fl()
    },
    partials: {},
    subs: {}
}), templates["story-stream-overlay"] = new Hogan.Template({
    code: function(e, t, i) {
        var n = this;
        return n.b(i = i || ""), n.b('<div class="story-stream-overlay">'), n.b("\n"), n.b("\n" + i), n.b('  <i class="overlay-close icon icon-close"></i>'), n.b("\n"), n.b("\n" + i), n.s(n.f("media", e, t, 1), e, t, 0, 97, 470, "{{ }}") && (n.rs(e, t, function(e, t, n) {
            n.b('  <div class="ss-header '), n.s(n.f("video", e, t, 1), e, t, 0, 132, 141, "{{ }}") && (n.rs(e, t, function(e, t, i) {
                i.b("has-video")
            }), e.pop()), n.b('">'), n.b("\n" + i), n.b("    "), n.s(n.f("image", e, t, 1), e, t, 0, 168, 206, "{{ }}") && (n.rs(e, t, function(e, t, i) {
                i.b('<img class="ss-image" src="'), i.b(i.v(i.f("src", e, t, 0))), i.b('" />')
            }), e.pop()), n.b("\n" + i), n.s(n.f("video", e, t, 1), e, t, 0, 231, 448, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                n.s(n.f("youtube", e, t, 1), e, t, 0, 250, 431, "{{ }}") && (n.rs(e, t, function(e, t, n) {
                    n.b('        <iframe class="ss-video ss-youtube" type="text/html" frameborder="0" allowfullscreen="" src="'), n.b(n.v(n.f("url", e, t, 0))), n.b('?rel=0&amp;autohide=1&amp;showinfo=0&amp;enablejsapi=1"></iframe>'), n.b("\n" + i)
                }), e.pop())
            }), e.pop()), n.b("  </div>"), n.b("\n" + i)
        }), e.pop()), n.b("\n" + i), n.s(n.f("body", e, t, 1), e, t, 0, 493, 689, "{{ }}") && (n.rs(e, t, function(e, t, n) {
            n.b('  <div class="ss-body">'), n.b("\n" + i), n.b("    "), n.s(n.f("title", e, t, 1), e, t, 0, 532, 550, "{{ }}") && (n.rs(e, t, function(e, t, i) {
                i.b("<h4>"), i.b(i.v(i.f("title", e, t, 0))), i.b("</h4>")
            }), e.pop()), n.b("\n" + i), n.b("    "), n.s(n.f("text", e, t, 1), e, t, 0, 574, 591, "{{ }}") && (n.rs(e, t, function(e, t, i) {
                i.b("<p>"), i.b(i.t(i.f("text", e, t, 0))), i.b("</p>")
            }), e.pop()), n.b("\n" + i), n.b("    "), n.s(n.f("posted", e, t, 1), e, t, 0, 616, 666, "{{ }}") && (n.rs(e, t, function(e, t, i) {
                i.b('<small class="ss-posted">Posted '), i.b(i.v(i.f("posted", e, t, 0))), i.b("</small>")
            }), e.pop()), n.b("\n" + i), n.b("  </div>"), n.b("\n" + i)
        }), e.pop()), n.b("\n" + i), n.s(n.f("footer", e, t, 1), e, t, 0, 713, 1157, "{{ }}") && (n.rs(e, t, function(e, t, n) {
            n.b('  <div class="ss-footer">'), n.b("\n" + i), n.b('    <a href="'), n.b(n.v(n.f("contentUrl", e, t, 0))), n.b('" target="_blank">'), n.b("\n" + i), n.b("      "), n.s(n.f("avatar", e, t, 1), e, t, 0, 803, 849, "{{ }}") && (n.rs(e, t, function(e, t, i) {
                i.b('<img class="ss-footer-avatar" src="'), i.b(i.v(i.f("src", e, t, 0))), i.b('" />')
            }), e.pop()), n.b("\n" + i), n.b("      "), n.s(n.f("title", e, t, 1), e, t, 0, 877, 967, "{{ }}") && (n.rs(e, t, function(e, t, i) {
                i.b('<h3 class="ss-footer-title '), i.s(i.f("subtitle", e, t, 1), e, t, 0, 917, 929, "{{ }}") && (i.rs(e, t, function(e, t, i) {
                    i.b("has-subtitle")
                }), e.pop()), i.b('">'), i.b(i.v(i.f("prefix", e, t, 0))), i.b(i.v(i.f("text", e, t, 0))), i.b("</h3>")
            }), e.pop()), n.b("\n" + i), n.b("      "), n.s(n.f("subtitle", e, t, 1), e, t, 0, 997, 1049, "{{ }}") && (n.rs(e, t, function(e, t, i) {
                i.b('<p class="ss-footer-subtitle">'), i.b(i.v(i.f("prefix", e, t, 0))), i.b(i.v(i.f("text", e, t, 0))), i.b("</p>")
            }), e.pop()), n.b("\n" + i), n.b("      "), n.s(n.f("icon", e, t, 1), e, t, 0, 1078, 1127, "{{ }}") && (n.rs(e, t, function(e, t, i) {
                i.b('<i class="ss-footer-icon icon icon-'), i.b(i.v(i.f("icon", e, t, 0))), i.b('"></i>')
            }), e.pop()), n.b("\n" + i), n.b("    </a>"), n.b("\n" + i), n.b("  </div>"), n.b("\n" + i)
        }), e.pop()), n.b("\n" + i), n.b("</div>"), n.b("\n"), n.fl()
    },
    partials: {},
    subs: {}
});
var vc = vc || {};
$.fx.speeds._default = 200, $.support.transition || ($.fn.transition = $.fn.animate),
    function() {
        "use strict";
        vc.mixin = function(e) {
            e && _.each(Array.prototype.slice.call(arguments, 1), function(t) {
                _.each(["initialize", "remove"], function(i) {
                    if (i in e && i in t) {
                        var n = e[i];
                        e[i] = function() {
                            t[i].apply(this, arguments), n.apply(this, arguments)
                        }
                    }
                }), _.defaults(e, t)
            })
        }, vc.inherits = function(e, t) {
            function i() {}
            i.prototype = t.prototype, e.superClass_ = t.prototype, e.prototype = new i, e.prototype.constructor = e
        }, vc.Stack = function() {
            this.items = []
        }, vc.Stack.prototype = {
            size: function() {
                return this.items.length
            },
            push: function(e) {
                this.items.push(e)
            },
            pop: function() {
                return this.items.pop()
            }
        }, vc.timeDiff = function(e, t) {
            var i = {},
                n = e.getTime() - t.getTime();
            return i.days = Math.floor(n / 864e5), n -= 864e5 * i.days, i.hours = Math.floor(n / 36e5), n -= 36e5 * i.hours, i.minutes = Math.floor(n / 6e4), n -= 6e4 * i.minutes, i.seconds = Math.floor(n / 1e3), i
        }, vc.dateDiff = function(e, t, i) {
            i = i || !1;
            var n = 6e4,
                s = 60 * n,
                o = 24 * s,
                a = 30 * o,
                r = 365 * o,
                l = e - t,
                c = i ? "approximately " : "";
            switch (!0) {
                case n > l:
                    c += Math.round(l / 1e3) + " seconds ago";
                    break;
                case s > l:
                    c += Math.round(l / n) + " minutes ago";
                    break;
                case o > l:
                    c += Math.round(l / s) + " hours ago";
                    break;
                case a > l:
                    c += Math.round(l / o) + " days ago";
                    break;
                case r > l:
                    c += Math.round(l / a) + " months ago";
                    break;
                default:
                    c += Math.round(l / r) + " years ago"
            }
            return c
        }, vc.numberWithLeadingZeroes = function(e, t) {
            for (var i = e + ""; i.length < t;) i = "0" + i;
            return i
        }, vc.getRandomInt = function(e, t) {
            return Math.floor(Math.random() * (t - e)) + e
        }, vc.getRandomString = function(e) {
            for (var t = ""; t.length < e;) t += Math.random().toString(36).substr(2, 1)
        }, String.prototype.alphanumerical = String.prototype.strip || function() {
            return this.replace(/\W/g, "")
        }, String.prototype.stripHTML = String.prototype.stripHTML || function() {
            return $("<div>").html(this).text()
        }, String.prototype.trunc = String.prototype.trunc || function(e, t, i) {
            function n(e) {
                var t, i, n, s = "";
                for (t = 0, i = e.size(); i > t; ++t) n = e.pop(), s += "</" + e.tag + ">";
                return s
            }
            t = t || !1, i = i || "";
            var s, o = this,
                a = /<\/?\w+(\s+\w+="[^"]*")*>/g.exec(o);
            if (a && t) {
                for (var r, l, c, d = "", h = 0, p = !0, b = new vc.Stack; p && (p = /<\/?\w+(\s+\w+="[^"]*")*>/g.exec(o));) {
                    if (r = p[0], l = p.index, h + l > e) {
                        d += o.substring(0, e - h), d += n(b);
                        break
                    }
                    h += l, d += o.substring(0, l), -1 === r.indexOf("</") ? (c = r.indexOf(" "), c = -1 === c ? r.indexOf(">") : c, b.push({
                        tag: r.substring(1, c),
                        html: r
                    })) : b.pop(), d += r, o = o.substring(l + r.length)
                }
                s = 0 === h || h > e
            } else s = o.length > e, d = o;
            return d = s ? d.substr(0, e - 1) + "&hellip;" : d, d = s && i.length > 0 ? d + " " + i : d
        }
    }(),
    function() {
        "use strict";
        vc.Translations = {
            toJSON: function() {
                return _.extend(Backbone.Model.prototype.toJSON.call(this), {
                    translate: vc.dictionary
                })
            }
        }
    }(),
    function() {
        "use strict";
        vc.TranslationBase = Backbone.Model.extend({
            toJSON: function() {
                return _.extend(Backbone.Model.prototype.toJSON.call(this), {
                    translate: vc.dictionary
                })
            }
        })
    }(),
    function() {
        "use strict";
        vc.CarouselItem = Backbone.Model.extend({
            defaults: {
                active: !1
            }
        })
    }(),
    function() {
        "use strict";
        vc.GalleryItem = vc.CarouselItem.extend({
            defaults: _.extend({}, _.result(vc.CarouselItem.prototype, "defaults"), {
                zoom: 1
            })
        })
    }(),
    function() {
        "use strict";
        vc.GalleryTab = Backbone.Model.extend({
            defaults: {
                active: !1
            },
            activate: function(e) {
                this.gallery.activate(e)
            },
            activateTab: function(e, t) {
                if (this.active = !0, this.gallery = new vc.GalleryItemCollection, this.gallery.id = this.get("id"), !this.view) {
                    var i = new vc.GalleryTabsOverlay({
                        collection: this.gallery,
                        tabs: this.collection
                    });
                    i.tabs = this.collection, i.rootUrl = "galleries/" + this.collection.id + "/", this.view = i.render().el
                }
                this.gallery.reset(this.get("images")), vc.app.$mask.append(this.view), this.set({
                    active: !0
                }), this.gallery.activate(t)
            },
            removeMask: function() {
                $(this.view).remove(), delete this.view
            }
        })
    }(),
    function() {
        "use strict";
        vc.ChartItem = Backbone.Model.extend({
            getBarChartData: function() {
                return this
            },
            getDoughnutChartData: function() {
                return this.attributes
            }
        })
    }(),
    function() {
        "use strict";
        vc.Dealer = vc.TranslationBase.extend({
            idAttribute: "DealerId",
            defaults: {
                active: !1,
                number: 1
            },
            initialize: function() {
                _.bindAll(this, "activate")
            },
            activate: function() {
                this.collection.activate(this)
            },
            getFormattedDistance: function() {
                var e = this.get("distance");
                return "us" === vc.settings.marketId && e ? (62137e-8 * e).toFixed(1) + " mi" : e >= 1e3 ? (e / 1e3).toFixed(1) + " km" : 1e3 >= e ? e.toFixed(1) + " m" : void 0
            },
            toJSON: function() {
                var e = vc.TranslationBase.prototype.toJSON.call(this);
                e.humanReadableDistance = this.getFormattedDistance();
                var t = vc.settings.dealerLocatorUrl + "#map",
                    i = this.get("GeoCode");
                if (i) {
                    var n = 12;
                    t += "/at/" + i.Latitude + "," + i.Longitude + "/zoom/" + n, e.mapUrl = t
                }
                return e
            }
        })
    }(),
    function() {
        "use strict";
        vc.DealerData = Backbone.Model.extend({
            url: "/data/dealers/",
            fetched: !1,
            searchingByDealerName: !1,
            json: null,
            minDealers: 3,
            initialize: function() {
                this.listenTo(vc.app, "dealer-name-search", this.isSearchingByDealerName)
            },
            isSearchingByDealerName: function(e) {
                this.searchingByDealerName = e
            },
            latLng: function(e) {
                var t;
                return t = "undefined" != typeof BMap ? new BMap.Point(e.lng, e.lat) : new google.maps.LatLng(e.lat, e.lng)
            },
            latLngBounds: function(e, t) {
                var i;
                return "undefined" != typeof BMap ? (i = new BMap.Bounds(e, t), i.contains = function(e) {
                    return i.containsPoint(e)
                }) : i = new google.maps.LatLngBounds(e, t), i
            },
            computeDistanceBetween: function(e, t, i) {
                var n;
                return n = "undefined" != typeof BMap ? vc.DealerLocator.BaiduMap.getMap().getDistance(e, t) : google.maps.geometry.spherical.computeDistanceBetween(e, t, i)
            },
            search: function() {
                var e = $.Deferred(),
                    t = this,
                    i = Array.prototype.slice.apply(arguments),
                    n = i.splice(0, 1)[0];
                if (this.fetched) e.resolve(this[n].apply(this, i));
                else {
                    if (this.deferred) {
                        var s = $.Deferred();
                        return this.deferred.then(function() {
                            s.resolve(t[n].apply(t, i))
                        }), s
                    }
                    var o = $("#dealer-service-filter").attr("value");
                    o = null != o && "undefined" != typeof o && "" != o && "undefined" != o ? " and " + o : "";
                    var a = $("#dealer-item-translations").attr("value"),
                        r = $("#1-city").text(),
                        l = $("#2-address").text(),
                        c = $("#3-telephone").text(),
                        d = $("#4-email").text(),
                        h = $("#5-website").text(),
                        p = $("#6-google-map").text(),
                        b = {
                            marketSegment: vc.settings.marketSegment,
                            expand: "Services,Urls",
                            format: "json",
                            northToSouthSearch: vc.settings.northToSouthSearch,
                            filter: "MarketId eq '" + (vc.settings.marketId || "sv") + "' and LanguageId eq '" + (vc.settings.languageId || "sv") + "'" + o
                        };
                    vc.settings.dc && (b = {
                        marketSegment: vc.settings.marketSegment,
                        format: "json",
                        northToSouthSearch: vc.settings.northToSouthSearch,
                        filter: "MarketId eq '" + (vc.settings.marketId || "sv") + "' and LanguageId eq '" + (vc.settings.languageId || "sv") + "'" + o
                    }), "True" == vc.settings.enableservicetypetab && (b = $(".locator-sales.sales-enabled").length > 0 ? {
                        marketSegment: vc.settings.marketSegment,
                        format: "json",
                        expand: "Services,Urls",
                        northToSouthSearch: vc.settings.northToSouthSearch,
                        filter: "MarketId eq '" + (vc.settings.marketId || "sv") + "' and LanguageId eq '" + (vc.settings.languageId || "sv") + "' and (Services/any(s: s/ServiceType eq 'new_car_sales') or (Services/any(s: s/ServiceType eq 'new_car_sales') and Services/any(s: s/ServiceType eq 'workshop')))"
                    } : {
                        marketSegment: vc.settings.marketSegment,
                        format: "json",
                        expand: "Services,Urls",
                        northToSouthSearch: vc.settings.northToSouthSearch,
                        filter: "MarketId eq '" + (vc.settings.marketId || "sv") + "' and LanguageId eq '" + (vc.settings.languageId || "sv") + "' and (Services/any(s: s/ServiceType eq 'workshop') or (Services/any(s: s/ServiceType eq 'new_car_sales') and Services/any(s: s/ServiceType eq 'workshop')))"
                    }), this.fetch({
                        sort: !1,
                        add: !0,
                        remove: !0,
                        merge: !1,
                        cache: !0,
                        data: b,
                        success: function(t) {
                            t.fetched = !0;
                            var s = t.attributes;
                            for (var o in s) null != a && "" != a && "undefined" != typeof a ? (s[o].SeeInAMapTranslation = a, s[o].CityLabelTranslation = r, s[o].AddressLabelTranslation = l, s[o].TelephoneLabelTranslation = c, s[o].EmailLabelTranslation = d, s[o].WebsiteLabelTranslation = h, s[o].GoogleMapLabelTranslation = p) : (s[o].SeeInAMapTranslation = a || "See in a map", s[o].CityLabelTranslation = r || "City", s[o].AddressLabelTranslation = l || "Address", s[o].TelephoneLabelTranslation = c || "Telephone", s[o].EmailLabelTranslation = d || "E-mail dealer", s[o].WebsiteLabelTranslation = h || "Go to Webiste", s[o].GoogleMapLabelTranslation = p || "Get Directions");
                            t.attributes = s, t.set("value", _.clone(t.attributes)), e.resolve(t[n].apply(t, i))
                        }
                    }), this.deferred = e
                }
                return e.promise()
            },
            findDealersInBox: function(e) {
                return this.searchingByDealerName ? $.Deferred().reject() : this.search("_findDealersInBox", e)
            },
            _findDealersInBox: function(e) {
                var t, i = e.data,
                    n = [],
                    s = this.get("value"),
                    o = this.latLng({
                        lat: i.bottomRightlatitude,
                        lng: i.topLeftlongitude
                    }),
                    a = this.latLng({
                        lat: i.topLeftlatitude,
                        lng: i.bottomRightlongitude
                    }),
                    r = this.latLngBounds(o, a);
                for (var l in s) s[l].GeoCode && (t = this.latLng({
                    lat: s[l].GeoCode.Latitude,
                    lng: s[l].GeoCode.Longitude
                }), r.contains(t) && n.push(s[l]));
                return n
            },
            findDealersByRadius: function(e) {
                return this.searchingByDealerName ? $.Deferred().reject() : this.search("_findDealersByRadius", e)
            },
            _findDealersByRadius: function(e) {
                var t, i = e.data,
                    n = [],
                    s = this.get("value"),
                    o = this.latLng({
                        lat: i.latitude,
                        lng: i.longitude
                    }),
                    a = i.radius;
                for (var r in s) s[r].GeoCode && (t = this.latLng({
                    lat: s[r].GeoCode.Latitude,
                    lng: s[r].GeoCode.Longitude
                }), this.computeDistanceBetween(o, t) <= a && n.push(s[r]));
                return n
            },
            getDealerNames: function(e) {
                return this.search("_getDealerNames", e)
            },
            _getDealerNames: function() {
                var e, t = [],
                    i = this.get("value");
                for (var n in i) i[n].Name && (e = i[n].Name.trim(), t[t.length - 1] !== e && t.push(e));
                return t
            },
            findDealersByName: function(e) {
                this.isSearchingByDealerName(!0);
                var t, i = [],
                    n = this.get("value");
                e = e.trim().toLowerCase();
                for (var s in n) n[s].Name && (t = n[s].Name.trim().toLowerCase(), -1 !== t.indexOf(e) && i.push(n[s]));
                return i
            },
            findDealerById: function(e, t) {
                return this.search("_findDealerById", e, t)
            },
            _findDealerById: function(e, t) {
                var i = this.get("value");
                t = t || "DealerId";
                for (var n in i)
                    if (i[n][t] && i[n][t] === e) return i[n];
                return !1
            },
            getMinBounds: function(e) {
                var t = this;
                if (this.fetched) return $.Deferred().resolve(t._getMinBounds(e));
                var i = $.Deferred();
                return this.deferred.then(function() {
                    i.resolve(t._getMinBounds(e))
                }), i
            },
            _getMinBounds: function(e) {
                var t, i = this.get("value"),
                    n = this.minDealers,
                    s = this.latLngBounds(e.location, e.location),
                    o = s.getCenter(),
                    a = [];
                for (var r in i)
                    if (i[r].GeoCode)
                        if (t = this.latLng({
                                lat: i[r].GeoCode.Latitude,
                                lng: i[r].GeoCode.Longitude
                            }), a.length < n) a.push(t), a = a.sort();
                        else
                            for (var l = 0, c = a.length; c > l; ++l)
                                if (this.computeDistanceBetween(o, t) < this.computeDistanceBetween(o, a[l])) {
                                    a.splice(l, 0, t), a.pop();
                                    break
                                }
                for (var d = 0, h = a.length; h > d; ++d) s.extend(a[d]);
                return s
            }
        })
    }(),
    function() {
        "use strict";
        vc.DealerPickerModel = vc.Dealer.extend({
            toJSON: function() {
                var e = vc.Dealer.prototype.toJSON.call(this);
                return e
            }
        })
    }(),
    function() {
        "use strict";
        vc.EditionsItem = Backbone.Model.extend({})
    }(),
    function() {
        "use strict";
        vc.ManualsItem = Backbone.Model.extend({
            getYears: function() {
                return _.clone(this.attributes)
            },
            getModels: function() {
                return _.clone(this.attributes)
            },
            getManuals: function() {
                return _.clone(this.attributes)
            }
        })
    }(),
    function() {
        "use strict";
        vc.CarModel = Backbone.Model.extend({
            urlRoot: "/data/car-comparison/GetCategorizedCars",
            toJSON: function() {
                return _.extend(Backbone.Model.prototype.toJSON.call(this), {
                    translate: vc.dictionary.CarComparison
                })
            }
        })
    }(),
    function() {
        "use strict";
        vc.CarVariant = Backbone.Model.extend({
            urlRoot: "/data/car-comparison/GetCarDetails"
        })
    }(),
    function() {
        "use strict";
        vc.CarOverlayModel = Backbone.Model.extend({
            urlRoot: "/data/car-comparison/GetHelpText"
        })
    }(),
    function() {
        "use strict";
        vc.SubnavHeroModel = Backbone.Model.extend({})
    }(),
    function() {
        "use strict";
        vc.InterActiveVideoModel = Backbone.Model.extend({
            urlRoot: "/Static/data/interactive-video.json"
        })
    }(),
    function() {
        "use strict";
        vc.Notification = Backbone.Model.extend({
            what: !1,
            linkedBar: !1,
            linkedDropdown: !1,
            url: !1,
            initialize: function(e) {
                void 0 !== e && "string" == typeof e ? (this.url = vc.settings.marketSegment + "/data/myvolvo/notifications/" + e, this.what = e) : this.url = vc.settings.marketSegment + "/data/myvolvo/notifications/" + e.id
            },
            setDropdown: function(e) {
                this.linkedDropdown = e
            },
            setBar: function(e) {
                this.linkedBar = e
            },
            destroy: function(e) {
                return this.linkedDropdown && this.linkedDropdown.parentNode.removeChild(this.linkedDropdown), this.linkedBar && this.linkedBar.parentNode.removeChild(this.linkedBar), Backbone.Model.prototype.destroy.call(this, e)
            },
            defaults: {
                target: ["bar"],
                type: "",
                removeAfter: !1,
                fixed: !1
            }
        })
    }(),
    function() {
        "use strict";
        vc.StoryStreamItem = Backbone.Model.extend({
            parse: function(e) {
                if ("undefined" != typeof e.content_items && e.content_items && e.content_items.length > 0) {
                    var t = e.content_items[0],
                        i = 140;
                    e.parsed = {
                        meta: {},
                        media: {},
                        body: {},
                        footer: {
                            title: {},
                            subtitle: {}
                        }
                    }, "undefined" != typeof t.source_content_item_id && t.source_content_item_id && t.source_content_item_id.length > 0 ? (e.id = t.source_content_item_id.toString().toLowerCase().alphanumerical(), e.parsed.meta.modelId = e.id) : (e.id = vc.getRandomString(), e.parsed.meta.modelId = e.id), e.parsed.meta.feedType = "undefined" != typeof t.feed_type && t.feed_type && t.feed_type.length > 0 ? t.feed_type.toString().toLowerCase() : "", e.parsed.meta.contentUrl = "undefined" != typeof t.url && t.url && t.url.length > 0 ? t.url : "", e.parsed.meta.permalink = "undefined" != typeof t.permalink && t.permalink && t.permalink.length > 0 ? t.permalink : "";
                    var n = e.parsed.meta.feedType;
                    "undefined" != typeof t.images && t.images && t.images.length > 0 && (e.parsed.media.image = {
                        src: "undefined" != typeof t.images[0].original && t.images[0].original && t.images[0].original.length > 0 ? t.images[0].original : "",
                        sizes: "undefined" != typeof t.images[0].sizes && t.images[0].sizes && t.images[0].sizes.length > 0 ? t.images[0].sizes : ""
                    }), "undefined" != typeof t.videos && t.videos && t.videos.length > 0 && (e.parsed.media.video = {
                        name: "undefined" != typeof t.videos[0].name && t.videos[0].name && t.videos[0].name.length > 0 ? t.videos[0].name : "",
                        url: "undefined" != typeof t.videos[0].url && t.videos[0].url && t.videos[0].url.length > 0 ? t.videos[0].url : ""
                    }, e.parsed.media.video[n] = !0), e.parsed.body.title = "undefined" != typeof t.title && t.title && t.title.length > 0 ? t.title : "", "undefined" != typeof t.body && t.body && t.body.length > 0 ? (e.parsed.body.text = t.body, e.parsed.body.text_truncated = e.parsed.body.text.trunc(i, !0, '<a href="#" class="ss-overlay-show">Read more</a>')) : (e.parsed.body.text = "", e.parsed.body.text_truncated = ""), e.parsed.body.posted = "undefined" != typeof t.publish_date && t.publish_date && t.publish_date.length > 0 ? vc.dateDiff(new Date, new Date(t.publish_date)) : "", "undefined" != typeof t.avatar_url && t.avatar_url && t.avatar_url.length > 0 && (e.parsed.footer.avatar = {
                        src: t.avatar_url
                    }), e.parsed.footer.contentUrl = e.parsed.meta.contentUrl, e.parsed.footer.title.text = "undefined" != typeof t.author && t.author && t.author.length > 0 ? t.author : "", e.parsed.footer.subtitle.text = "undefined" != typeof t.source && t.source && t.source.length > 0 ? t.source : "", e.parsed.footer.icon = n ? n : "";
                    var s = ["instagram"],
                        o = ["twitter", "facebook"],
                        a = ["twitter", "instagram"],
                        r = ["youtube", "instagram"],
                        l = ["youtube"];
                    e.parsed.footer.title.prefix = s.indexOf(n) > -1 ? "@" : "", e.parsed.footer.subtitle.prefix = o.indexOf(n) > -1 ? "@" : "", e.parsed.body.title = a.indexOf(n) > -1 ? "" : e.parsed.body.title, e.parsed.footer.subtitle = r.indexOf(n) > -1 ? "" : e.parsed.footer.subtitle, e.parsed.media.image = l.indexOf(n) > -1 ? "" : e.parsed.media.image
                }
                return e
            }
        })
    }(),
    function() {
        "use strict";
        vc.CarouselItemCollection = Backbone.Collection.extend({
            model: vc.CarouselItem,
            circular: !0,
            activate: function(e) {
                var t = {};
                t[this.model.prototype.idAttribute] = e;
                var i, n = e ? this.findWhere(t) : this.first(),
                    s = this.indexOf(n),
                    o = "left";
                this.forEach(function(e, t) {
                    i = e.get("active"), e.set({
                        next: !1,
                        prev: !1
                    }), s !== t || i ? i && t !== s && (e.set({
                        active: !1,
                        direction: o
                    }), o = "right") : (e.set({
                        active: !0,
                        direction: o
                    }), o = "right")
                })
            },
            activeItem: function() {
                return this.findWhere({
                    active: !0
                })
            },
            prevItem: function() {
                var e = this.indexOf(this.activeItem()),
                    t = this.at(e - 1);
                return t || !this.circular ? t : this.last()
            },
            nextItem: function() {
                var e = this.indexOf(this.activeItem()),
                    t = this.at(e + 1);
                return t || !this.circular ? t : this.first()
            }
        })
    }(),
    function() {
        "use strict";
        vc.GalleryItemCollection = vc.CarouselItemCollection.extend({
            model: vc.GalleryItem
        })
    }(),
    function() {
        "use strict";
        vc.GalleryTabCollection = Backbone.Collection.extend({
            model: vc.GalleryTab,
            parse: function(e) {
                return e.galleries
            },
            activate: function(e, t, i) {
                var n = this.findWhere({
                    active: !0
                });
                n.id !== t && this.activateTab(this.id, t, i), n.activate(i)
            },
            activateTab: function(e, t, i) {
                var n = this.findWhere({
                        active: !0
                    }),
                    s = t ? this.findWhere({
                        id: t
                    }) : this.first();
                return n && (n.set({
                    active: !1
                }), n.removeMask()), s.activateTab(t, i), s
            }
        })
    }(),
    function() {
        "use strict";
        vc.DealerCollection = Backbone.Collection.extend({
            model: null,
            url: "",
            searchedName: "",
            initialize: function() {
                this.listenTo(this, "sort", this.sorted)
            },
            sorted: function() {
                this.each(function(e, t) {
                    e.set("number", t + 1)
                }), this.trigger("numbered")
            },
            activate: function(e) {
                this.each(function(t) {
                    t.set("active", t === e)
                }), vc.settings.dc && this.setShippingCosts(e)
            },
            setShippingCosts: function(e) {
                var t = $("#selectedDealerHiddenId"),
                    i = "undefined";
                null != t && $("#selectedDealerHiddenId").val(e.id), $(".accordion-panel-toggle").removeClass("selected"), $(".accordion-panel-toggle").each(function() {
                    return $(this).attr("data-dealer-id") === e.id ? ($(this).addClass("selected"), !1) : void 0
                });
                var n = $("html").attr("lang"),
                    s = $(".part-of-order-preview .dealer-locator-wp").data(),
                    o = this;
                $.ajax({
                    type: "GET",
                    url: "/data/transport",
                    data: {
                        dealerId: e.id,
                        lang: n,
                        marketSegment: vc.settings.marketSegment,
                        campaignName: s.campaignName,
                        carModelTechnicalName: s.carModelTechnicalName
                    },
                    dataType: "json",
                    success: function(e) {
                        i = e, "string" != typeof i && o.setMoneyAmountsWhichDependOnShippingPrice(i)
                    }
                })
            },
            comparator: function(e) {
                return e.marker && this.visitorPosition ? (e.set("distance", google.maps.geometry.spherical.computeDistanceBetween(this.visitorPosition, e.marker.getPosition())), e.get("distance")) : null
            },
            findDealersByName: function(e) {
                this.set(vc.dealerData.findDealersByName(e)), this.trigger("dealer-name-selected"), this.trigger("sync", this)
            },
            parse: function(e) {
                return e.value
            }
        })
    }(),
    function() {
        "use strict";
        vc.DealerPickerCollection = vc.DealerCollection.extend({
            model: vc.DealerPickerModel,
            url: "https://vdf.volvocars.com/OData/VDF.svc/FindDealersByRadius",
            fetch: function(e) {
                var t = this,
                    i = 40233.5,
                    n = {
                        BOX: "_findDealersInBox",
                        RADIUS: "_findDealersByRadius"
                    };
                vc.dealerData.getMinBounds(e.data.geometry).done(function(s) {
                    e.data.bottomRightlatitude = s.getSouthWest().lat(), e.data.bottomRightlongitude = s.getNorthEast().lng(), e.data.topLeftlatitude = s.getNorthEast().lat(), e.data.topLeftlongitude = s.getSouthWest().lng();
                    var o = new google.maps.LatLng(e.data.latitude, e.data.longitude),
                        a = s.getNorthEast(),
                        r = s.getSouthWest(),
                        l = new google.maps.LatLng(a.lat(), r.lng()),
                        c = new google.maps.LatLng(r.lat(), a.lng()),
                        d = google.maps.geometry.spherical.computeDistanceBetween(o, r),
                        h = google.maps.geometry.spherical.computeDistanceBetween(o, a),
                        p = google.maps.geometry.spherical.computeDistanceBetween(o, l),
                        b = google.maps.geometry.spherical.computeDistanceBetween(o, c),
                        v = Math.max(d, h, p, b, i);
                    e.data.radius = v, t.set(vc.dealerData[n.RADIUS](e), e), t.trigger("sync", t)
                }).fail(function() {
                    t.trigger("error")
                })
            },
            findDealerById: function(e, t) {
                var i = this;
                vc.dealerData.findDealerById(e, t).done(function(e) {
                    i.set(e), i.trigger("sync", i)
                })
            }
        })
    }(),
    function() {
        "use strict";
        vc.EditionsCollection = Backbone.Collection.extend({
            model: vc.EditionsItem,
            url: "/data/car-editions?sc_site=" + vc.settings.sc_site
        })
    }(),
    function() {
        "use strict";
        vc.NavigationPanelCollection = Backbone.Collection.extend({
            model: Backbone.Model.extend({
                defaults: {
                    active: !1
                }
            }),
            activate: function(e) {
                var t = this.findWhere({
                        active: !0
                    }),
                    i = this.get(e);
                i && t !== i && (t ? (t.set({
                    active: !1,
                    aniamated: !0
                }), i.set({
                    active: !0,
                    aniamated: !0
                })) : i.set({
                    active: !0,
                    aniamated: !1
                }))
            },
            activateFirst: function() {
                this.length > 0 && this.activate(this.at(0).id)
            }
        })
    }(),
    function() {
        "use strict";
        vc.NotificationCollection = Backbone.Collection.extend({
            model: vc.Notification,
            initialize: function() {
                this.listenTo(this, "change:target", this.targetChanged)
            },
            parse: function(e, t) {
                for (var i = 1, n = {}, s = 0; s < e.length; s++) void 0 !== n[e[s].id] && (e[s].id = e[s].id + "_" + i, i++), n[e[s].id] = !0;
                return e
            },
            targetChanged: function(e, t) {
                t.length || this.remove(e)
            }
        })
    }(),
    function() {
        "use strict";
        vc.GalleryRouter = Backbone.Router.extend({
            initialize: function() {
                this.route("", "nonGalleryRoute"), this.route(/galleries\/([^\/]+)\/?([^\/]+)?\/?([^\/]+)?/i, "galleriesRoute"), this.route(/gallery\/([^\/]+)\/?([^\/]+)?/i, "galleryRoute")
            },
            nonGalleryRoute: function() {
                this.currentGallery && (this.currentGallery = null, vc.app.trigger("mask:hide")), this.currentGalleries && (this.currentGalleries = null, vc.app.trigger("mask:hide"))
            },
            galleryRoute: function(e, t) {
                var i = this,
                    n = "/media-gallery/" + e;
                if ("frontend" === e && (n = "/static/data/galleryGrid.json"), this.currentGallery) this.currentGallery.url !== n, this.currentGallery.activate(t);
                else {
                    this.currentGallery = new vc.GalleryItemCollection, this.currentGallery.url = n, this.currentGallery.id = e;
                    var s = new vc.GalleryOverlay({
                        collection: this.currentGallery
                    });
                    vc.app.$mask.append(s.render().el), this.currentGallery.fetch({
                        reset: !0
                    }).then(function() {
                        i.currentGallery.activate(t), $(".thumbnails-scroller").hide()
                    })
                }
            },
            galleriesRoute: function(e, t, i) {
                var n = this,
                    s = "/" + vc.settings.marketId + "/media-gallery/tabbed/" + e;
                "1" !== e && "2" !== e || (s = "/static/data/galleries.json"), this.currentGalleries ? (this.currentGalleries.url !== s, this.currentGalleries.activate(e, t, i)) : (this.currentGalleries = new vc.GalleryTabCollection,
                    this.currentGalleries.url = s, this.currentGalleries.id = e, this.currentGalleries.fetch({
                        reset: !0
                    }).then(function() {
                        n.currentGalleries.activateTab(e, t, i)
                    }))
            },
            launchGalleryOverlay: function() {}
        })
    }(),
    function() {
        "use strict";
        vc.StoryCarouselRouter = Backbone.Router.extend({
            initialize: function(e) {
                this.collection = e.collection;
                var t = new RegExp(this.collection.id + "(\\/([^\\/]+))?");
                this.route(t, "carouselRoute")
            },
            carouselRoute: function(e, t) {
                this.collection.activate(t)
            }
        })
    }(),
    function() {
        "use strict";
        vc.NavigationPanelRouter = Backbone.Router.extend({
            initialize: function(e) {
                this.items = e
            },
            routes: {
                "panel/:id": "panelRoute",
                "*path": "defaultRoute"
            },
            panelRoute: function(e) {
                this.items.activate(e)
            },
            defaultRoute: function() {
                this.items.activateFirst()
            }
        })
    }(),
    function() {
        "use strict";
        vc.ElementFillContainer = {
            initialize: function() {
                _.bindAll(this, "updateFiller", "calculateFillerSize"), this.elementFillContainer = {
                    fillers: []
                }
            },
            updateFillers: function() {
                _.each(this.elementFillContainer.fillers, this.updateFiller)
            },
            updateFiller: function(e) {
                var t = {};
                t = this.calculateFillerSize(e, t), t = this.calculateFillerPosition(e, t), e.el.css(t)
            },
            calculateFillerSize: function(e, t) {
                e.container.is(":visible") || (e.container = this.getContainer(e.container));
                var i = e.container.width(),
                    n = e.container.height(),
                    s = i / n;
                return e.aspectRatio > s && "contain" !== e.method || e.aspectRatio < s && "contain" === e.method ? (t.height = n, t.width = Math.ceil(n * e.aspectRatio)) : (t.height = Math.ceil(i / e.aspectRatio), t.width = i), t
            },
            calculateFillerPosition: function(e, t) {
                var i = e.container.width() || 0,
                    n = e.container.height() || 0;
                return t.left = Math.floor(-(t.width - i) * e.alignment[0]), t.top = Math.floor(-(t.height - n) * e.alignment[1]), t
            },
            startFillingContainer: function(e) {
                if (e = e || {}, _.defaults(e, {
                        container: this.$el,
                        method: "crop",
                        aspectRatio: 16 / 9,
                        alignment: [.5, .5]
                    }), !e.el) throw new Error('No "el" was provided to "startFillingContainer"');
                e.el = e.el instanceof $ ? e.el : $(e.el), this.elementFillContainer.fillers.length || this.listenTo(vc.app, "resize", this.updateFillers), this.elementFillContainer.fillers.push(e), this.updateFiller(e)
            },
            stopFillingContainer: function(e) {
                if (e) {
                    e instanceof $ && (e = e[0]);
                    for (var t = 0; t < this.elementFillContainer.fillers.length; t++) e === this.elementFillContainer.fillers[t].el[0] && (this.elementFillContainer.fillers.splice(t, 1), t--)
                } else this.elementFillContainer.fillers = [];
                this.elementFillContainer.fillers.length || this.stopListening(vc.app, "resize", this.updateFillers)
            },
            getContainer: function(e) {
                for (var t = e.parents(), i = t.length, n = 0; i > n; n++)
                    if ($(t[n]).is(":visible")) return $(t[n])
            }
        }
    }(),
    function() {
        "use strict";
        vc.ResponsiveVideo = {
            videoFormats: ["webm", "mp4"],
            initialize: function() {
                _.bindAll(this, "createVideo", "videoStartedPlaying"), this.listenTo(vc.app, "device:changed", this.deviceChanged)
            },
            deviceChanged: function() {
                this.hasVideo() && this.createVideo()
            },
            createVideo: function() {
                var e = this.getVideoVersion();
                if (!e || 0 === e.length) return void(this.$bgVideo && this.stopVideo());
                var t = document.createElement("video");
                t.preload = "auto", t.autoplay = "autoplay", t.loop = "loop", t.muted = "muted", _.each(e, function(e) {
                    var i = e.slice(e.lastIndexOf(".") + 1, e.length),
                        n = document.createElement("source");
                    n.src = e, n.type = "video/" + i, t.appendChild(n)
                });
                var i = document.createElement("object"),
                    n = {
                        data: "/Static/mediaelement/flashmediaelement.swf",
                        width: "100%",
                        height: "100%",
                        bgcolor: "",
                        id: "flash-fallback"
                    };
                _.extend(i, n), i.type = "application/x-shockwave-flash";
                var s = [{
                    name: "movie",
                    value: "/Static/mediaelement/flashmediaelement.swf"
                }, {
                    name: "flashvars",
                    value: "autoplay=" + !!t.autoplay + "&controls=" + !!t.controls + "&startvolume=" + (t.muted ? 0 : 100) + "&file=" + e[0]
                }, {
                    name: "allowfullscreen",
                    value: "false"
                }, {
                    name: "allowscriptaccess",
                    value: "always"
                }, {
                    name: "seamlesstabbing",
                    value: "true"
                }, {
                    name: "wmode",
                    value: "opaque"
                }];
                if (_.each(s, function(e) {
                        var t = document.createElement("param");
                        _.extend(t, e), i.appendChild(t)
                    }), t.appendChild(i), this.disableAutoplay && (t.removeAttribute("autoplay"), t.controls = "controls", t.poster = this.poster, this.$el.find("video").each(function() {
                        $(this).remove()
                    }), this.$el.append(t), !this.hasVideo())) {
                    var o = $(this.$el.children("video")[0]);
                    o.css({
                        height: "389px"
                    }), o.mediaelementplayer({
                        videoHeight: 389,
                        enableAutosize: !0,
                        pluginHeight: 389
                    }), $(o.children(".me-plugin object")[0]).css({
                        height: "389px"
                    })
                }
                $(t).one("playing", this.videoStartedPlaying)
            },
            stopVideo: function() {
                this.$bgVideo.remove(), this.$bgVideo = null
            },
            videoStartedPlaying: function(e) {
                var t = $(e.currentTarget);
                t.length && (this.$bgVideo && (t[0].currentTime = this.$bgVideo[0].currentTime, this.stopVideo()), this.$bgVideo = t, this.$el.append(this.$bgVideo), this.$bgVideo[0].play())
            },
            parseVideoVariants: function(e) {
                if (!e) return null;
                var t = {};
                return _.each(e.split(";"), function(e) {
                    var i = e.split(":"),
                        n = i[0],
                        s = i[1].split(",");
                    t[n] = s
                }), t
            },
            hasVideo: function(e) {
                return e = e || this.$el, Modernizr.video && !!e.data("video")
            },
            getVideoVersion: function(e) {
                e = e || this.$el, this.videoVariants || (this.videoVariants = this.parseVideoVariants(e.data("video")));
                var t = this.videoVariants[vc.app.currentDevice.name];
                if (t) return t;
                for (var i = 0; i < vc.app.devices.length; i++) {
                    var n = vc.app.devices[i];
                    if (n.minWidth < vc.app.currentDevice.minWidth && (t = this.videoVariants[n.name])) break
                }
                return t
            }
        }
    }(),
    function() {
        "use strict";
        vc.ScrollSpy = {
            scrollSpyDevices: {
                small: !0,
                medium: !0,
                large: !0,
                "extra-large": !0
            },
            initialize: function() {
                _.bindAll(this, "spyScrolled", "isViewScrolled"), this.spyListeners = [], this._spyHalfVisible = [], this._spyVisible = [], this.addSpyListeners(this.$el), this.listenTo(vc.app, "app:scrolled", this.isViewScrolled)
            },
            addSpyListeners: function(e) {
                this.spyListeners.push(e)
            },
            isViewScrolled: function(e) {
                e = e || vc.app.$window.scrollTop();
                for (var t = this.spyListeners.length; t--;) this.spyScrolled(e, this.spyListeners[t])
            },
            spyVisible: function(e) {
                return !e && this.spyListeners && (e = this.spyListeners[0]), -1 !== _.indexOf(this._spyVisible, e[0])
            },
            spyHalfVisible: function(e) {
                return !e && this.spyListeners && (e = this.spyListeners[0]), -1 !== _.indexOf(this._spyHalfVisible, e[0])
            },
            spyScrolled: function(e, t) {
                var i = t.offset(),
                    n = e + vc.app.$window.height(),
                    s = i.top,
                    o = t.height(),
                    a = s + o / 2,
                    r = s + o,
                    l = t[0],
                    c = this.spyVisible(t),
                    d = this.spyHalfVisible(t),
                    h = this.spyScrollOffset || 0;
                !c && n > s + h && r > e ? (t.trigger("scroll-spy:enter-viewport"), this._spyVisible.push(l)) : c && !d && n > a && r > e ? (t.trigger("scroll-spy:half-mark"), this._spyHalfVisible.push(l)) : c && (s > n || e > r) && (t.trigger("scroll-spy:leave-viewport"), this._spyVisible = _.without(this._spyVisible, l), this._spyHalfVisible = _.without(this._spyVisible, l))
            }
        }
    }(),
    function() {
        "use strict";
        vc.PreloadImages = {
            downloadImage: function(e) {
                var t = Q.defer(),
                    i = document.createElement("img");
                return i.onload = function() {
                    t.resolve(i)
                }, i.onerror = function() {
                    t.reject(new Error(e + " could not be downloaded"))
                }, i.src = e, t.promise
            },
            downloadImages: function(e) {
                var t = this,
                    i = [];
                return _.each(e, function(e) {
                    i.push(t.downloadImage(e))
                }), Q.all(i)
            }
        }
    }(),
    function() {
        "use strict";
        vc.HammerView = {
            killHammerEvents: function(e) {
                e.preventDefault(), e.stopPropagation(), e.gesture && (e.gesture.stopPropagation(), e.gesture.preventDefault())
            }
        }
    }(),
    function() {
        "use strict";
        vc.DealerAutocomplete = {
            enableAutocomplete: function(e, t) {
                var i = this;
                vc.dealerData.getDealerNames().done(function(n) {
                    e.autocomplete({
                        lookup: n,
                        zIndex: 999,
                        onSelect: function(e) {
                            e.value !== i.collection.searchedName && (i.collection.findDealersByName(e.value), i.collection.searchedName = e.value)
                        },
                        onInvalidateSelection: function() {
                            i.collection.searchedName = "", vc.app.trigger("dealer-name-search", !1)
                        },
                        beforeRender: function(e) {
                            if ("function" == typeof t)
                                for (var i = t(), n = e.children(), s = null, o = null, a = null, r = i.length - 1; r >= 0; r--) {
                                    for (o = !1, s = -1; !o && s < n.length - 1;) s++, o = n[s].innerText === i[r];
                                    o && (a = n.eq(s).clone(), e.remove('[data-index="' + s + '"]').prepend(a))
                                }
                        }
                    })
                })
            }
        }
    }(),
    function() {
        "use strict";
        vc.Nav = Backbone.View.extend({
            initialize: function() {
                if (this.$html = vc.app.$html, this.isTransparent = this.$html.hasClass("is-nav-transparent"), this.navDrop = this.$html.find("#nav-drop"), this.navDropContainer = this.navDrop.find(".nav-drop-container"), this.markActiveItem(), this.$html.removeClass("is-nav-transparent"), this.drops = {}, this.currentDrop = null, this.listenTo(vc.app, "navdrop:close", this.hideDrop), this.listenTo(vc.app, "navdrop:closeSlide", this.hideDropSlide), this.state = "closed", !this.$el.hasClass("nav-drop")) {
                    this.navPrimary = this.$el.find(".nav-list-prim"), this.navLogo = this.$el.find(".nav-logo img");
                    var e = this;
                    this.navPrimary.ready(function() {
                        setTimeout(function() {
                            e.startPrimaryWidth = e.navPrimary.width(), e.startLogoPosition = e.navLogo.position().left, e.fontFlow(!0)
                        }, 50)
                    }), $(window).on("resize", function() {
                        e.fontFlow(!1)
                    })
                }
            },
            timeout: null,
            events: {
                'mouseenter .js-drop:not(".is-icon")': function(e) {
                    if ("slideClosing" !== this.state && "closing" !== this.state) {
                        var t = this,
                            i = e;
                        clearTimeout(vc.app.navTimeoutOpenDrop), clearTimeout(vc.app.navTimeoutCloseDrop), vc.app.navTimeoutOpenDrop = setTimeout(function() {
                            t.openDrop(i)
                        }, 350)
                    }
                },
                'mouseleave .js-drop:not(".is-icon")': function(e) {
                    var t = this,
                        i = e;
                    vc.app.navTimeoutCloseDrop = setTimeout(function() {
                        t.delayClose(i)
                    }, 350)
                },
                "click .js-drop": "toggleDrop",
                "click .js-slide": "toggleDrop"
            },
            markActiveItem: function() {
                $(".nav-list-item[data-active-item=true]").addClass("on")
            },
            changeBackground: function() {
                if (this.isTransparent) {
                    var e = vc.app.$window.scrollTop(),
                        t = 0 >= e ? "addClass" : "removeClass";
                    this.$html[t]("is-nav-transparent")
                }
            },
            toggleDrop: function(e) {
                if (e.preventDefault(), "opening" !== this.state) {
                    var t = $(e.currentTarget),
                        i = t.data("nav-drop-id"),
                        n = this.getDrop(i);
                    if (n === this.currentDrop && !t.hasClass("js-slide")) return this.$html.hasClass("no-csstransitions") && (this.blockHoverOpen = !0), this.hideDrop();
                    this.hideDrop(), this.showDrop(n, i, t)
                }
            },
            getDrop: function(e) {
                return e in this.drops || (this.drops[e] = new vc.NavDropItem({
                    el: e
                })), this.drops[e]
            },
            openDrop: function(e) {
                var t = this,
                    i = $(e.currentTarget),
                    n = i.data("nav-drop-id"),
                    s = this.getDrop(n);
                return this.$html.hasClass("no-csstransitions") && this.blockHoverOpen ? void(this.blockHoverOpen = !1) : (this.clearTimeout(e), null !== this.currentDrop && s !== this.currentDrop && t.hideDrop(), this.state = "opening", void t.showDrop(s, n, i))
            },
            showDrop: function(e, t, i) {
                i.hasClass("js-slide") ? e.forward() : e.show(), vc.app.trigger("mask:show"), this.$html.find(".nav-list-item").removeClass("on"), this.$html.find(".nav-list").find('[data-nav-drop-id="' + t + '"]').addClass("on"), this.navDrop.addClass("on"), this.$html.addClass("nav-drop-on"), $(window).width() < 481 && ($(".nav-list .nav-list-item i.icon.icon-close").css({
                    display: "block",
                    "font-weight": "bold"
                }), $(".nav-list .nav-list-item i.menu-nav").css("display", "none")), this.currentDrop = e;
                var n = this;
                setTimeout(function() {
                    n.state = "opened"
                }, 550)
            },
            delayClose: function(e) {
                this.clearTimeout(e), this.state = "closing", vc.app.navTimeout = setTimeout(function() {
                    e && e.preventDefault(), vc.app.trigger("navdrop:close")
                }, 200)
            },
            hideDrop: function() {
                this.currentDrop && (this.currentDrop.hide(), vc.app.trigger("mask:hide"), this.navDrop.removeClass("on"), this.$html.removeClass("nav-drop-on"), this.$html.find(".nav-list-item").removeClass("on"), this.markActiveItem(), $(window).width() < 481 && ($(".nav-list .nav-list-item i.icon.icon-close").css("display", "none"), $(".nav-list .nav-list-item i.menu-nav").css("display", "block")), this.currentDrop = null, this.state = "closed")
            },
            hideDropSlide: function() {
                if (!this.currentDrop) return void(this.state = "closed");
                var e = this;
                Q().then(function() {
                    e.state = "slideClosing"
                }).then(function() {
                    e.navDrop.removeClass("on")
                }).then(function() {
                    e.$html.find(".nav-list-item").removeClass("on")
                }).then(function() {
                    e.markActiveItem()
                }).then(function() {
                    return Q().delay(1e3)
                }).then(function() {
                    vc.app.trigger("mask:hide")
                }).then(function() {
                    e.currentDrop.hide()
                }).then(function() {
                    e.currentDrop = null
                }).then(function() {
                    e.$html.removeClass("nav-drop-on")
                }).then(function() {
                    e.state = "closed"
                }).done()
            },
            fontFlow: function(e) {
                var t = this.navLogo.position().left,
                    i = 0,
                    n = this.navPrimary.width(),
                    s = this.navPrimary.offset(),
                    o = t < this.startLogoPosition ? -1 : t === this.startLogoPosition ? 0 : 1,
                    a = function(e, n) {
                        return n = 6 | n, s.left + e - i >= t - n
                    },
                    r = .875;
                1 > o && a(n) ? (14 === parseInt(this.$el.css("font-size"), 10) && this.$html.addClass("force-mobile"), this.$el.css("font-size", 14), e && (n *= r, a(n) ? this.$html.addClass("force-mobile") : "14px" === this.$el.css("font-size"))) : 1 === o && (this.$html.hasClass("force-mobile") && !a(this.startPrimaryWidth * r, 50) ? this.$html.removeClass("force-mobile") : vc.app.isMobile() && !this.$html.hasClass("force-mobile") && a(n, 50) ? this.$html.addClass("force-mobile") : a(this.startPrimaryWidth) || this.$html.css("font-size", 16)), this.startLogoPosition = t, this.startPrimaryWidth < n && (this.startPrimaryWidth = n), this.navPrimary.css("visibility", "visible"), this.startLogoPosition + 50 >= this.$el.find(".nav-list-sec").position().left && this.$html.addClass("force-mobile")
            },
            clearTimeout: function(e) {
                e && e.preventDefault(), vc.app.navTimeout && (clearTimeout(vc.app.navTimeout), vc.app.navTimeout = null)
            }
        })
    }(),
    function() {
        "use strict";
        vc.NavDrop = vc.Nav.extend({
            events: {
                "click .js-drop": "toggleDrop",
                "click .js-slide": "toggleDrop",
                "mouseover .nav-drop-hotzone": "delayClose",
                "mouseenter .nav-drop-container.on": function(e) {
                    this.clearTimeout(e), clearTimeout(vc.app.navTimeoutOpenDrop), clearTimeout(vc.app.navTimeoutCloseDrop)
                },
                "mouseleave .nav-drop-container.on": "delayClose",
                "mouseover .nav-drop-close": function(e) {
                    this.clearTimeout(e), clearTimeout(vc.app.navTimeoutOpenDrop), clearTimeout(vc.app.navTimeoutCloseDrop)
                },
                "click .nav-drop-close": "delayClose"
            },
            close: function(e) {
                e && e.preventDefault(), vc.app.trigger("navdrop:closeSlide")
            }
        })
    }(),
    function() {
        "use strict";
        vc.NavDropItem = Backbone.View.extend({
            initialize: function() {
                var e = vc.app.$html;
                this.navDrop = e.find("#nav-drop"), this.navDropContainer = this.navDrop.find(".nav-drop-container"), this.navDropItems = this.navDrop.find(".nav-drop-items"), this.listenTo(vc.app, "app:escapeKeyPressed", this.close)
            },
            events: {
                "click .nav-drop-item-back": "back",
                "click .nav-drop-item-toggle": "toggleDropItem"
            },
            addClasses: function(e) {
                e.parents(".nav-drop-container").addClass("on"), e.parent(".nav-drop-items").addClass("on"), e.addClass("on")
            },
            removeClasses: function(e) {
                this.navDropContainer.removeClass("on"), this.navDropItems.removeClass("on"), e.removeClass("on")
            },
            close: function(e) {
                e && e.preventDefault(), vc.app.trigger("navdrop:close")
            },
            show: function() {
                this.addClasses(this.$el)
            },
            hide: function() {
                void 0 === this.el && (this.$el = this.navDropItems.find(".nav-drop-item.on")), this.removeClasses(this.$el)
            },
            forward: function() {
                this.navDropItems.addClass("on"), this.addClasses(this.$el)
            },
            back: function() {
                this.removeClasses(this.$el)
            },
            toggleDropItem: function(e) {
                e.preventDefault();
                var t = $(e.currentTarget).siblings(".nav-drop-body-row"),
                    i = $(e.currentTarget).find(".icon");
                t.toggleClass("on"), i.toggleClass("icon-angle-down icon-angle-up")
            }
        })
    }(),
    function() {
        "use strict";
        vc.NavDropFilter = Backbone.View.extend({
            initialize: function() {
                _.bindAll(this, "fetchData", "renderEditions", "clickedEditionsList", "clickedEditionsDropdown", "toggleEditions");
                var e = vc.app.$html;
                this.navDrop = e.find("#nav-drop"), this.navDropCars = this.navDrop.find(".nav-drop-cars"), this.fetchData()
            },
            events: {
                "click .nav-drop-filter-item": "clickedEditionsList",
                "change .nav-drop-filter-dropdown .dropdown-fallback": "clickedEditionsDropdown"
            },
            fetchData: function() {
                this.collection = new vc.EditionsCollection, this.collection.fetch()
            },
            renderEditions: function(e) {
                var t = this.collection.get(e),
                    i = this.navDropCars.find(".nav-drop-body-item");
                if (t && i) {
                    i.removeClass("filter-active");
                    for (var n = 0, s = t.attributes.carModels, o = s.length; o > n; n++) {
                        var a = i.filter("[data-model-id=" + s[n].car_id + "]");
                        if (a) {
                            var r = a.find(".nav-drop-body-item-title h3"),
                                l = a.find(".nav-drop-body-item-title .small-before"),
                                c = a.find(".nav-drop-body-item-title .small-after"),
                                d = a.find(".nav-drop-body-item-title"),
                                h = a.find(".nav-drop-body-item-subtitle"),
                                p = a.find(".nav-drop-body-item-img--default"),
                                b = a.find(".nav-drop-body-item-img--hover"),
                                v = a.find(".nav-drop-body-item-img-link");
                            a.addClass("filter-active"), r.text(s[n].car_name ? s[n].car_name : s[n].car_title), l.html(s[n].car_name_prefix), c.html(s[n].car_name_suffix), d.attr("href", s[n].url), h.html(s[n].price + " &nbsp;"), p.attr("src", s[n].img["default"]), b.attr("src", s[n].img.hover), v.attr("href", s[n].url)
                        }
                    }
                }
            },
            clickedEditionsList: function(e) {
                e.preventDefault();
                var t = $(e.currentTarget),
                    i = t.data("filterTag"),
                    n = this.navDrop.find(".nav-drop-filter-dropdown .dropdown a[data-filter-tag=" + i + "]");
                n.last().trigger("click")
            },
            clickedEditionsDropdown: function(e) {
                e.preventDefault();
                var t = $(e.currentTarget),
                    i = t.find("option:selected").last().data("filterTag"),
                    n = this.navDrop.find(".nav-drop-filter-item[data-filter-tag=" + i + "]");
                this.toggleEditions(n), this.renderEditions(i)
            },
            toggleEditions: function(e) {
                var t = this.navDrop.find(".nav-drop-filter-item");
                t.removeClass("filter-active"), e.addClass("filter-active"), e.hasClass("filter-default") ? this.navDropCars.removeClass("filter-active") : this.navDropCars.addClass("filter-active")
            }
        })
    }(),
    function() {
        "use strict";
        vc.SubNav = Backbone.View.extend({
            initialize: function() {
                _.bindAll(this, "toggleSubnav", "initSubnavHero"), this.$html = $("html"), this.$html.addClass("is-subnav-fixed"), this.$subnavToggle = this.$el.find(".subnav-toggle"), this.offsets = {
                    "extra-large": 70,
                    large: 70,
                    medium: 70,
                    small: 50
                }, this.offset = this.offsets[vc.app.currentDevice.name], this.listenTo(vc.app, "device:changed", this.deviceChanged), this.listenTo(vc.app, "app:scrolled", this.changePosition), this.$el.hasClass("subnav-hero-enabled") && this.initSubnavHero()
            },
            events: {
                "click .subnav-toggle": "toggleSubnav"
            },
            toggleSubnav: function(e) {
                vc.app.currentWidth < vc.app.breakpoints.subnav.large && (e.preventDefault(), this.$subnavToggle.find(".subnav-toggle-icon").toggleClass("icon-angle-down icon-angle-up"), this.$el.toggleClass("on"))
            },
            deviceChanged: function() {
                this.offset = this.offsets[vc.app.currentDevice.name]
            },
            changePosition: function() {
                var e = vc.app.$window.scrollTop(),
                    t = e > this.offset;
                this.$html.toggleClass("is-subnav-fixed-on", t)
            },
            initSubnavHero: function() {
                var e = this.$html.find(".hero");
                e && new vc.SubnavHero({
                    el: e[0],
                    subnavHeroUrl: this.$el.data("subnavHeroUrl")
                })
            }
        })
    }(),
    function() {
        "use strict";
        vc.IconNavigation = Backbone.View.extend({
            initialize: function() {
                this.listenTo(vc.app, "resize", this.layout), _.bindAll(this, "next"), _.bindAll(this, "prev")
            },
            events: {
                "click .prev": "prev",
                "click .next": "next"
            },
            layout: function() {
                var e = this.$(".scroll"),
                    t = this.$(".scroll ul"),
                    i = this.$(".scroll li");
                i.css("height", "");
                var n = -1;
                i.each(function() {
                    var e = $(this).height();
                    e > n && (n = e)
                }), i.css("height", n);
                var s = e.width();
                s > 769 && i.length > 6 && (230 * i.length > s ? t.width(230 * i.length) : t.width("100%"));
                var o = t.width();
                o > s ? this.$el.addClass("icon-nav-overflow") : this.$el.removeClass("icon-nav-overflow")
            },
            prev: function(e) {
                e.preventDefault(), this.$(".scroll").animate({
                    scrollLeft: "-=200"
                }, 100)
            },
            next: function(e) {
                e.preventDefault(), this.$(".scroll").animate({
                    scrollLeft: "+=200"
                }, 100)
            },
            render: function() {
                this.layout()
            }
        })
    }(),
    function() {
        "use strict";
        vc.NavScroll = Backbone.View.extend({
            initialize: function() {
                var e = this;
                this.$html = vc.app.$html, this.navScroll = vc.app.$html.find(".navScroll"), this.navScroll.fadeOut(), this.footerContainer = vc.app.$html.find(".footer"), this.listenTo(vc.app, "app:scrolled", this.bodyScrolled), $(window).on("resize", function() {
                    e.bodyScrolled()
                }), this.bodyScrolled()
            },
            scrollTop: 0,
            bigEnough: !1,
            timeout: null,
            events: {},
            showScroll: function() {
                0 === this.scrollTop && this.bigEnough ? this.navScroll.removeClass("backtotop").fadeIn("slow") : this.scrollTop > 1200 && this.bigEnough && this.navScroll.addClass("backtotop").fadeIn("slow")
            },
            hideScroll: function() {
                this.navScroll.fadeOut(0)
            },
            bodyScrolled: function() {
                var e = this;
                this.bigEnough = vc.app.$window.width() >= 1024, this.scrollTop = vc.app.$window.scrollTop(), this.scrollTop > 0 ? this.navScroll.addClass("right") : this.navScroll.removeClass("right"), this.timeout && clearTimeout(this.timeout), this.bigEnough && (this.scrollTop <= 1200 && this.hideScroll(), this.timeout = setTimeout(function() {
                    e.showScroll()
                }, 750))
            }
        })
    }(),
    function() {
        "use strict";
        vc.SubnavHero = Backbone.View.extend({
            tmpl: templates["subnav-hero"],
            initialize: function(e) {
                _.bindAll(this, "fetchData", "renderSubnavHero"), this.options = e, this.model = new vc.SubnavHeroModel, this.fetchData()
            },
            fetchData: function() {
                var e = this;
                this.model.fetch({
                    url: this.options.subnavHeroUrl,
                    success: function(t, i) {
                        e.renderSubnavHero(i)
                    },
                    error: function() {}
                })
            },
            renderSubnavHero: function(e) {
                this.$el.append(this.tmpl.render(e))
            }
        })
    }(),
    function() {
        "use strict";
        vc.Overlay = Backbone.View.extend({
            className: "overlay",
            tmpl: templates["overlay-framework"],
            initialize: function() {
                this.listenTo(vc.app, "mask:hide", this.remove), this.listenTo(vc.app, "mask:show", this.show), this.model && this.listenTo(this.model, "sync", this.render)
            },
            events: {
                click: "clicked",
                "click .overlay-close": "close",
                "click .slider-overlay-fullscreen": "fullscreen",
                "click .slider-video-player": "stopVideo",
                "mouseenter .slider-video-player": "mouseEnterVideo",
                "mouseleave .slider-video-player": "mouseLeaveVideo",
                "click .readmore-video-player": "stopRMOVideo",
                "click .js-videoWrapper": "Playexternalvideo",
                "mouseenter .readmore-video-player": "mouseEnterRMOVideo",
                "mouseleave .readmore-video-player": "mouseLeaveRMOVideo",
                "click .readmore-overlay .icon-fullscreen": "readmoreOverlayFullscreen",
                "click .readmore-video-player .mejs-controls .mejs-volume-button": "mouseEnterRMOVolumeButton",
                "click .slider-video-player .mejs-controls .mejs-volume-button": "mouseEnterVolumeButton"
            },
            keyboardEvents: {
                esc: "close"
            },
            readmoreOverlayFullscreen: function(e) {
                e.preventDefault(), e.stopPropagation(), $("#mask").addClass("readmore-overlay-fullscreen");
                var t = ($("#mask .overlay-close.icon.icon-close").html(), $("#mask.readmore-overlay-fullscreen .image-content-area").html());
                $("#mask").empty(), $("#mask").prepend('<div class="overlay-close icon icon-close"></div> '), $("#mask").prepend(t)
            },
            Playexternalvideo: function(e) {
                var t = $("#IframeextOverlay");
                if (t.length > 0) {
                    e.preventDefault();
                    var i = $(".js-videoWrapper"),
                        n = t.data("src");
                    t.attr("src", n + "&autoplay=1"), i.addClass("videoWrapperActive")
                }
            },
            clicked: function(e) {
                e.stopPropagation()
            },
            close: function(e) {
                e.preventDefault(), e.stopPropagation(), vc.app.trigger("mask:hide")
            },
            fullscreen: function(e) {
                e.preventDefault(), e.stopPropagation();
                var t = $(".overlay.slider-overlay.overlay-show");
                if (t.addClass("overlay-fullscreen"), $(window).width() < 769) {
                    var i = $("#mask");
                    i.length > 0 ? i.addClass("slider-portrait") : i.removeClass("slider-portrait")
                }
                $("#mask div.overlay").hasClass("overlay-fullscreen") && $("#mask").addClass("img-slider-fullscreen")
            },
            customScrollBar: function(e, t) {
                function i(e) {
                    var t = e || window.event,
                        i = [].slice.call(arguments, 1),
                        n = 0,
                        s = 0,
                        o = 0;
                    return e = $.event.fix(t), e.type = "mousewheel", t.wheelDelta && (n = t.wheelDelta / 120), t.detail && (n = -t.detail / 3), o = n, void 0 !== t.axis && t.axis === t.HORIZONTAL_AXIS && (o = 0, s = n), void 0 !== t.wheelDeltaY && (o = t.wheelDeltaY / 120), void 0 !== t.wheelDeltaX && (s = t.wheelDeltaX / 120), i.unshift(e, n, s, o), ($.event.dispatch || $.event.handle).apply(this, i)
                }
                var n = {
                        skin: void 0,
                        hScroll: !0,
                        vScroll: !0,
                        updateOnWindowResize: !0,
                        animationSpeed: 300,
                        onCustomScroll: void 0,
                        swipeSpeed: 1,
                        wheelSpeed: 40,
                        fixedThumbWidth: void 0,
                        fixedThumbHeight: void 0
                    },
                    s = function(e, t) {
                        this.$element = $(e), this.options = t, this.addScrollableClass(), this.addSkinClass(), this.addScrollBarComponents(), this.options.vScroll && (this.vScrollbar = new o(this, new r)), this.options.hScroll && (this.hScrollbar = new o(this, new a)), this.$element.data("scrollable", this), this.initKeyboardScrolling(), this.bindEvents()
                    };
                s.prototype = {
                    addScrollableClass: function() {
                        this.$element.hasClass("scrollable") || (this.scrollableAdded = !0, this.$element.addClass("scrollable"))
                    },
                    removeScrollableClass: function() {
                        this.scrollableAdded && this.$element.removeClass("scrollable")
                    },
                    addSkinClass: function() {
                        "string" != typeof this.options.skin || this.$element.hasClass(this.options.skin) || (this.skinClassAdded = !0, this.$element.addClass(this.options.skin))
                    },
                    removeSkinClass: function() {
                        this.skinClassAdded && this.$element.removeClass(this.options.skin)
                    },
                    addScrollBarComponents: function() {
                        this.assignViewPort(), 0 == this.$viewPort.length && (this.$element.wrapInner('<div class="viewport" />'), this.assignViewPort(), this.viewPortAdded = !0), this.assignOverview(), 0 == this.$overview.length && (this.$viewPort.wrapInner('<div class="overview" />'), this.assignOverview(), this.overviewAdded = !0), this.addScrollBar("vertical", "prepend"), this.addScrollBar("horizontal", "append")
                    },
                    removeScrollbarComponents: function() {
                        this.removeScrollbar("vertical"), this.removeScrollbar("horizontal"), this.overviewAdded && this.$element.unwrap(), this.viewPortAdded && this.$element.unwrap()
                    },
                    removeScrollbar: function(e) {
                        this[e + "ScrollbarAdded"] && this.$element.find(".scroll-bar." + e).remove()
                    },
                    assignViewPort: function() {
                        this.$viewPort = this.$element.find(".viewport")
                    },
                    assignOverview: function() {
                        this.$overview = this.$viewPort.find(".overview")
                    },
                    addScrollBar: function(e, t) {
                        0 == this.$element.find(".scroll-bar." + e).length && (this.$element[t]("<div class='scroll-bar " + e + "'><div class='thumb'></div></div>"), this[e + "ScrollbarAdded"] = !0)
                    },
                    resize: function(e) {
                        this.vScrollbar && this.vScrollbar.resize(e), this.hScrollbar && this.hScrollbar.resize(e)
                    },
                    scrollTo: function(e) {
                        this.vScrollbar && this.vScrollbar.scrollToElement(e), this.hScrollbar && this.hScrollbar.scrollToElement(e)
                    },
                    scrollToXY: function(e, t) {
                        this.scrollToX(e), this.scrollToY(t)
                    },
                    scrollToX: function(e) {
                        this.hScrollbar && this.hScrollbar.scrollOverviewTo(e, !0)
                    },
                    scrollToY: function(e) {
                        this.vScrollbar && this.vScrollbar.scrollOverviewTo(e, !0)
                    },
                    remove: function() {
                        this.removeScrollableClass(), this.removeSkinClass(), this.removeScrollbarComponents(), this.$element.data("scrollable", null), this.removeKeyboardScrolling(), this.vScrollbar && this.vScrollbar.remove(), this.hScrollbar && this.hScrollbar.remove()
                    },
                    setAnimationSpeed: function(e) {
                        this.options.animationSpeed = e
                    },
                    isInside: function(e, t) {
                        var i = $(e),
                            n = $(t),
                            s = i.offset(),
                            o = n.offset();
                        return s.top >= o.top && s.left >= o.left && s.top + i.height() <= o.top + n.height() && s.left + i.width() <= o.left + n.width()
                    },
                    initKeyboardScrolling: function() {
                        var e = this;
                        this.elementKeydown = function(t) {
                            document.activeElement === e.$element[0] && (e.vScrollbar && e.vScrollbar.keyScroll(t), e.hScrollbar && e.hScrollbar.keyScroll(t))
                        }, this.$element.attr("tabindex", "-1").keydown(this.elementKeydown)
                    },
                    removeKeyboardScrolling: function() {
                        this.$element.removeAttr("tabindex").unbind("keydown", this.elementKeydown)
                    },
                    bindEvents: function() {
                        this.options.onCustomScroll && this.$element.on("customScroll", this.options.onCustomScroll)
                    }
                };
                var o = function(e, t) {
                    this.scrollable = e, this.sizing = t, this.$scrollBar = this.sizing.scrollBar(this.scrollable.$element), this.$thumb = this.$scrollBar.find(".thumb"), this.setScrollPosition(0, 0), this.resize(), this.initMouseMoveScrolling(), this.initMouseWheelScrolling(), this.initTouchScrolling(), this.initMouseClickScrolling(), this.initWindowResize()
                };
                o.prototype = {
                    resize: function(e) {
                        this.scrollable.$viewPort.height($("#mask").height()), this.sizing.size(this.scrollable.$viewPort, this.sizing.size(this.scrollable.$element)), this.viewPortSize = this.sizing.size(this.scrollable.$viewPort), $("#mask .readmore-overlay .viewport .image-content-link").css("width", this.scrollable.$viewPort.width() + "px"), this.overviewSize = this.sizing.size(this.scrollable.$overview), this.ratio = this.viewPortSize / this.overviewSize, this.sizing.size(this.$scrollBar, this.viewPortSize), this.thumbSize = this.calculateThumbSize(), this.sizing.size(this.$thumb, this.thumbSize), this.maxThumbPosition = this.calculateMaxThumbPosition(), this.maxOverviewPosition = this.calculateMaxOverviewPosition(), this.enabled = this.overviewSize > this.viewPortSize, void 0 === this.scrollPercent && (this.scrollPercent = 0), this.enabled ? this.rescroll(e) : this.setScrollPosition(0, 0), this.$scrollBar.toggle(this.enabled)
                    },
                    calculateThumbSize: function() {
                        var e, t = this.sizing.fixedThumbSize(this.scrollable.options);
                        return e = t ? t : this.ratio * this.viewPortSize, 50
                    },
                    initMouseMoveScrolling: function() {
                        var e = this;
                        this.$thumb.mousedown(function(t) {
                            e.enabled && e.startMouseMoveScrolling(t)
                        }), this.documentMouseup = function(t) {
                            e.stopMouseMoveScrolling(t)
                        }, $(document).mouseup(this.documentMouseup), this.documentMousemove = function(t) {
                            e.mouseMoveScroll(t)
                        }, $(document).mousemove(this.documentMousemove), this.$thumb.click(function(e) {
                            e.stopPropagation()
                        })
                    },
                    removeMouseMoveScrolling: function() {
                        this.$thumb.unbind(), $(document).unbind("mouseup", this.documentMouseup), $(document).unbind("mousemove", this.documentMousemove)
                    },
                    initMouseWheelScrolling: function() {
                        var e = this;
                        this.scrollable.$element.mousewheel(function(t, i, n, s) {
                            e.enabled && e.mouseWheelScroll(n, s) && (t.stopPropagation(), t.preventDefault())
                        })
                    },
                    removeMouseWheelScrolling: function() {
                        this.scrollable.$element.unbind("mousewheel")
                    },
                    initTouchScrolling: function() {
                        if (document.addEventListener) {
                            var e = this;
                            this.elementTouchstart = function(t) {
                                e.enabled && e.startTouchScrolling(t)
                            }, this.scrollable.$element[0].addEventListener("touchstart", this.elementTouchstart), this.documentTouchmove = function(t) {
                                e.touchScroll(t)
                            }, document.addEventListener("touchmove", this.documentTouchmove), this.elementTouchend = function(t) {
                                e.stopTouchScrolling(t)
                            }, this.scrollable.$element[0].addEventListener("touchend", this.elementTouchend)
                        }
                    },
                    removeTouchScrolling: function() {
                        document.addEventListener && (this.scrollable.$element[0].removeEventListener("touchstart", this.elementTouchstart), document.removeEventListener("touchmove", this.documentTouchmove), this.scrollable.$element[0].removeEventListener("touchend", this.elementTouchend))
                    },
                    initMouseClickScrolling: function() {
                        var e = this;
                        this.scrollBarClick = function(t) {
                            e.mouseClickScroll(t)
                        }, this.$scrollBar.click(this.scrollBarClick)
                    },
                    removeMouseClickScrolling: function() {
                        this.$scrollBar.unbind("click", this.scrollBarClick)
                    },
                    initWindowResize: function() {
                        if (this.scrollable.options.updateOnWindowResize) {
                            var e = this;
                            this.windowResize = function() {
                                e.resize()
                            }, $(window).resize(this.windowResize)
                        }
                    },
                    removeWindowResize: function() {
                        $(window).unbind("resize", this.windowResize)
                    },
                    isKeyScrolling: function(e) {
                        return null != this.keyScrollDelta(e)
                    },
                    keyScrollDelta: function(e) {
                        for (var t in this.sizing.scrollingKeys)
                            if (t == e) return this.sizing.scrollingKeys[e](this.viewPortSize);
                        return null
                    },
                    startMouseMoveScrolling: function(e) {
                        this.mouseMoveScrolling = !0, $("html").addClass("not-selectable"), this.setUnselectable($("html"), "on"), this.setScrollEvent(e)
                    },
                    stopMouseMoveScrolling: function(e) {
                        this.mouseMoveScrolling = !1, $("html").removeClass("not-selectable"), this.setUnselectable($("html"), null)
                    },
                    setUnselectable: function(e, t) {
                        e.attr("unselectable") != t && (e.attr("unselectable", t), e.find(":not(input)").attr("unselectable", t))
                    },
                    mouseMoveScroll: function(e) {
                        if (this.mouseMoveScrolling) {
                            var t = this.sizing.mouseDelta(this.scrollEvent, e);
                            this.scrollThumbBy(t), this.setScrollEvent(e)
                        }
                    },
                    startTouchScrolling: function(e) {
                        e.touches && 1 == e.touches.length && (this.setScrollEvent(e.touches[0]), this.touchScrolling = !0, e.stopPropagation())
                    },
                    touchScroll: function(e) {
                        if (this.touchScrolling && e.touches && 1 == e.touches.length) {
                            var t = -this.sizing.mouseDelta(this.scrollEvent, e.touches[0]) * this.scrollable.options.swipeSpeed,
                                i = this.scrollOverviewBy(t);
                            i && (e.stopPropagation(), e.preventDefault(), this.setScrollEvent(e.touches[0]))
                        }
                    },
                    stopTouchScrolling: function(e) {
                        this.touchScrolling = !1, e.stopPropagation()
                    },
                    mouseWheelScroll: function(e, t) {
                        var i = -this.sizing.wheelDelta(e, t) * this.scrollable.options.wheelSpeed;
                        return 0 != i ? this.scrollOverviewBy(i) : void 0
                    },
                    mouseClickScroll: function(e) {
                        var t = this.viewPortSize - 20;
                        e["page" + this.sizing.scrollAxis()] < this.$thumb.offset()[this.sizing.offsetComponent()] && (t = -t), this.scrollOverviewBy(t)
                    },
                    keyScroll: function(e) {
                        var t = e.which;
                        this.enabled && this.isKeyScrolling(t) && this.scrollOverviewBy(this.keyScrollDelta(t)) && e.preventDefault()
                    },
                    scrollThumbBy: function(e) {
                        var t = this.thumbPosition();
                        t += e, t = this.positionOrMax(t, this.maxThumbPosition);
                        var i = this.scrollPercent;
                        this.scrollPercent = t / this.maxThumbPosition;
                        var n = t * this.maxOverviewPosition / this.maxThumbPosition;
                        return this.setScrollPosition(n, t), i != this.scrollPercent ? (this.triggerCustomScroll(i), !0) : !1
                    },
                    thumbPosition: function() {
                        return this.$thumb.position()[this.sizing.offsetComponent()]
                    },
                    scrollOverviewBy: function(e) {
                        var t = this.overviewPosition() + e;
                        return this.scrollOverviewTo(t, !1)
                    },
                    overviewPosition: function() {
                        return -this.scrollable.$overview.position()[this.sizing.offsetComponent()]
                    },
                    scrollOverviewTo: function(e, t) {
                        e = this.positionOrMax(e, this.maxOverviewPosition);
                        var i = this.scrollPercent;
                        this.scrollPercent = e / this.maxOverviewPosition;
                        var n = this.scrollPercent * this.maxThumbPosition;
                        return t ? this.setScrollPositionWithAnimation(e, n) : this.setScrollPosition(e, n), i != this.scrollPercent ? (this.triggerCustomScroll(i), !0) : !1
                    },
                    positionOrMax: function(e, t) {
                        return 0 > e ? 0 : e > t ? t : e
                    },
                    triggerCustomScroll: function(e) {
                        this.scrollable.$element.trigger("customScroll", {
                            scrollAxis: this.sizing.scrollAxis(),
                            direction: this.sizing.scrollDirection(e, this.scrollPercent),
                            scrollPercent: 100 * this.scrollPercent
                        })
                    },
                    rescroll: function(e) {
                        if (e) {
                            var t = this.positionOrMax(this.overviewPosition(), this.maxOverviewPosition);
                            this.scrollPercent = t / this.maxOverviewPosition;
                            var i = this.scrollPercent * this.maxThumbPosition;
                            this.setScrollPosition(t, i)
                        } else {
                            var i = this.scrollPercent * this.maxThumbPosition,
                                t = this.scrollPercent * this.maxOverviewPosition;
                            this.setScrollPosition(t, i)
                        }
                    },
                    setScrollPosition: function(e, t) {
                        this.$thumb.css(this.sizing.offsetComponent(), t + "px"), this.scrollable.$overview.css(this.sizing.offsetComponent(), -e + "px")
                    },
                    setScrollPositionWithAnimation: function(e, t) {
                        var i = {},
                            n = {};
                        i[this.sizing.offsetComponent()] = t + "px", this.$thumb.animate(i, this.scrollable.options.animationSpeed), n[this.sizing.offsetComponent()] = -e + "px", this.scrollable.$overview.animate(n, this.scrollable.options.animationSpeed)
                    },
                    calculateMaxThumbPosition: function() {
                        var e = window.navigator.userAgent,
                            t = e.indexOf("MSIE"),
                            i = 0;
                        return i = t > 0 ? 60 : navigator.userAgent.match(/Trident\/7\./) ? 60 : 70, $("#mask .readmoreoverlay").height() - i
                    },
                    calculateMaxOverviewPosition: function() {
                        return this.sizing.size(this.scrollable.$overview) - this.sizing.size(this.scrollable.$viewPort)
                    },
                    setScrollEvent: function(e) {
                        var t = "page" + this.sizing.scrollAxis();
                        this.scrollEvent && this.scrollEvent[t] == e[t] || (this.scrollEvent = {
                            pageX: e.pageX,
                            pageY: e.pageY
                        })
                    },
                    scrollToElement: function(e) {
                        var t = $(e);
                        if (this.sizing.isInside(t, this.scrollable.$overview) && !this.sizing.isInside(t, this.scrollable.$viewPort)) {
                            var i = t.offset(),
                                n = this.scrollable.$overview.offset();
                            this.scrollable.$viewPort.offset();
                            this.scrollOverviewTo(i[this.sizing.offsetComponent()] - n[this.sizing.offsetComponent()], !0)
                        }
                    },
                    remove: function() {
                        this.removeMouseMoveScrolling(), this.removeMouseWheelScrolling(), this.removeTouchScrolling(), this.removeMouseClickScrolling(), this.removeWindowResize()
                    }
                };
                var a = function() {};
                a.prototype = {
                    size: function(e, t) {
                        return t ? e.width(t) : e.width()
                    },
                    minSize: function(e) {
                        return parseInt(e.css("min-width")) || 0
                    },
                    fixedThumbSize: function(e) {
                        return e.fixedThumbWidth
                    },
                    scrollBar: function(e) {
                        return e.find(".scroll-bar.horizontal")
                    },
                    mouseDelta: function(e, t) {
                        return t.pageX - e.pageX
                    },
                    offsetComponent: function() {
                        return "left"
                    },
                    wheelDelta: function(e, t) {
                        return e
                    },
                    scrollAxis: function() {
                        return "X"
                    },
                    scrollDirection: function(e, t) {
                        return t > e ? "right" : "left"
                    },
                    scrollingKeys: {
                        37: function(e) {
                            return -10
                        },
                        39: function(e) {
                            return 10
                        }
                    },
                    isInside: function(e, t) {
                        var i = $(e),
                            n = $(t),
                            s = i.offset(),
                            o = n.offset();
                        return s.left >= o.left && s.left + i.width() <= o.left + n.width()
                    }
                };
                var r = function() {};
                r.prototype = {
                    size: function(e, t) {
                        var i = 0;
                        return i = $("#mask .readmoreoverlay .no-cta-links").length > 0 ? 140 : 170, $("#mask .readmoreoverlay.no-media").length > 0 && (i += 200), t ? e.height(t) : e.height() - i
                    },
                    minSize: function(e) {
                        return parseInt(e.css("min-height")) || 0
                    },
                    fixedThumbSize: function(e) {
                        return e.fixedThumbHeight
                    },
                    scrollBar: function(e) {
                        return e.find(".scroll-bar.vertical")
                    },
                    mouseDelta: function(e, t) {
                        return t.pageY - e.pageY
                    },
                    offsetComponent: function() {
                        return "top"
                    },
                    wheelDelta: function(e, t) {
                        return t
                    },
                    scrollAxis: function() {
                        return "Y"
                    },
                    scrollDirection: function(e, t) {
                        var i = t > e ? "down" : "up";
                        return "up" == i ? $(".readmore-overlay .image-content-link").css("box-shadow", "none") : $(".readmore-overlay .image-content-link").css("box-shadow", "0px -15px 0px 0px rgba(255, 255, 255, 0.5)"), i
                    },
                    scrollingKeys: {
                        38: function(e) {
                            return -10
                        },
                        40: function(e) {
                            return 10
                        },
                        33: function(e) {
                            return -(e - 20)
                        },
                        34: function(e) {
                            return e - 20
                        }
                    },
                    isInside: function(e, t) {
                        var i = $(e),
                            n = $(t),
                            s = i.offset(),
                            o = n.offset();
                        return s.top >= o.top && s.top + i.height() <= o.top + n.height()
                    }
                };
                var l = ["DOMMouseScroll", "mousewheel"];
                if ($.event.fixHooks)
                    for (var c = l.length; c;) $.event.fixHooks[l[--c]] = $.event.mouseHooks;
                if ($.event.special.mousewheel = {
                        setup: function() {
                            if (this.addEventListener)
                                for (var e = l.length; e;) this.addEventListener(l[--e], i, !1);
                            else this.onmousewheel = i
                        },
                        teardown: function() {
                            if (this.removeEventListener)
                                for (var e = l.length; e;) this.removeEventListener(l[--e], i, !1);
                            else this.onmousewheel = null
                        }
                    }, $.fn.extend({
                        mousewheel: function(e) {
                            return e ? this.bind("mousewheel", e) : this.trigger("mousewheel")
                        },
                        unmousewheel: function(e) {
                            return this.unbind("mousewheel", e)
                        }
                    }), void 0 == e && (e = n), "string" == typeof e) {
                    var d = $(this).data("scrollable");
                    d && d[e](t)
                } else {
                    if ("object" != typeof e) throw "Invalid type of options";
                    e = $.extend(n, e), new s($("#mask .readmore-overlay"), e)
                }
            },
            show: function() {
                var e = this;
                setTimeout(function() {
                    e.$el.addClass("overlay-show"), vc.app.trigger("overlay:enabled"), $(".readmore-overlay").length > 0 && e.customScrollBar(), $("#mask .image-content-link").appendTo($("#mask .readmore-overlay")), $("#mask .overlay-close").appendTo($("#mask .readmore-overlay")), $(window).width() < 769 && $("#mask .readmoreoverlay").length > 0 && jQuery("#mask .readmoreoverlay").click(), $("#mask div").hasClass("readmore-video-player") && $("#mask .image-content-area").addClass("overlay-video-container")
                }, 10)
            },
            remove: function() {
                $("#mask.readmore-overlay-fullscreen").empty(), $("#mask").removeClass("readmore-overlay-fullscreen"), this.$el.addClass("overlay-hide"), vc.app.trigger("overlay:disabled");
                var e = _.bind(Backbone.View.prototype.remove, this);
                setTimeout(e, 500)
            },
            render: function() {
                return this.model ? this.$el.html(this.tmpl.render(this.model.toJSON())) : this.$el.html(this.tmpl.render()), vc.app.trigger("mask:show"), this
            },
            stopRMOVideo: function() {
                var e = $(".readmore-video-player .mejs-overlay-button-wrapper .mejs-overlay-button");
                e.css("background-image", "url(/Static/mediaelement/bigplay.png)")
            },
            mouseEnterRMOVideo: function() {
                if (0 == $(".readmore-video-player .mejs-overlay-button-wrapper .mejs-overlay-button:visible").length) {
                    var e = $(".readmore-video-player .mejs-overlay-button-wrapper");
                    e.css("display", "table");
                    var t = $(".readmore-video-player .mejs-overlay-button-wrapper .mejs-overlay-button");
                    t.css("background-image", "url(/Static/mediaelement/bigpause.png)")
                }
            },
            mouseLeaveRMOVideo: function() {
                var e = $(".readmore-video-player .mejs-overlay-button-wrapper .mejs-overlay-button").css("background-image"),
                    t = /\"|\'|\)/g;
                if ("bigplay.png" != e.split("/").pop().replace(t, "")) {
                    var i = $(".readmore-video-player .mejs-overlay-button-wrapper");
                    i.css("display", "none");
                    var n = $(".readmore-video-player .mejs-overlay-button-wrapper .mejs-overlay-button");
                    n.css("background-image", "url(/Static/mediaelement/bigplay.png)")
                }
            },
            mouseEnterRMOVolumeButton: function() {
                var e = $(".readmore-video-player .mejs-overlay-button-wrapper .mejs-overlay-button").css("background-image"),
                    t = /\"|\'|\)/g;
                if ("bigpause.png" == e.split("/").pop().replace(t, "")) {
                    var i = $(".readmore-video-player .mejs-overlay-button-wrapper");
                    i.css("display", "none")
                }
            },
            stopVideo: function() {
                var e = $(".mejs-overlay-button-wrapper .mejs-overlay-button");
                e.css("background-image", "url(/Static/mediaelement/bigplay.png)")
            },
            mouseEnterVideo: function() {
                if (0 == $(".mejs-overlay-button-wrapper .mejs-overlay-button:visible").length) {
                    var e = $(".mejs-overlay-button-wrapper");
                    e.css("display", "table");
                    var t = $(".mejs-overlay-button-wrapper .mejs-overlay-button");
                    t.css("background-image", "url(/Static/mediaelement/bigpause.png)")
                }
            },
            mouseLeaveVideo: function() {
                var e = $(".mejs-overlay-button-wrapper .mejs-overlay-button").css("background-image"),
                    t = /\"|\'|\)/g;
                if ("bigplay.png" != e.split("/").pop().replace(t, "")) {
                    var i = $(".mejs-overlay-button-wrapper");
                    i.css("display", "none");
                    var n = $(".mejs-overlay-button-wrapper .mejs-overlay-button");
                    n.css("background-image", "url(/Static/mediaelement/bigplay.png)")
                }
            },
            mouseEnterVolumeButton: function() {
                var e = $(".mejs-overlay-button-wrapper .mejs-overlay-button").css("background-image"),
                    t = /\"|\'|\)/g;
                if ("bigpause.png" == e.split("/").pop().replace(t, "")) {
                    var i = $(".mejs-overlay-button-wrapper");
                    i.css("display", "none")
                }
            }
        })
    }(),
    function() {
        "use strict";
        vc.AccordionItem = Backbone.View.extend({
            tagName: "li",
            initialize: function(e) {
                _.bindAll(this, "togglerClicked", "resizedWindow"), this.animate = e.animate, this.displayType = "block", $(window).on("resize", this.resizedWindow)
            },
            events: {
                "click .accordion-panel-toggle": "togglerClicked"
            },
            setExpanded: function(e) {
                this.animate && $.support.transition ? (this.clearDealerValue(e), this.animateExpanded(e)) : (this.$el.toggleClass("expanded", e), this.resizedWindow()), this.$arrow && this.$arrow.toggleClass("icon-angle-down", !e).toggleClass("icon-angle-up", e)
            },
            clearDealerValue: function(e) {
                if (!e) {
                    var t = $("#selectedDealerHiddenId");
                    "undefined" != typeof t.val() && ($("#selectedDealerHiddenId").val(""), this.unsetMoneyAmountsWhichDependOnInvalidShippingPrice())
                }
            },
            animateExpanded: function(e) {
                var t = this,
                    i = this.$(".accordion-content");
                if (!e) return void i.transition({
                    height: 0
                }, function() {
                    i.parent().toggleClass("expanded", e), t.trigger("expanded")
                });
                i = this.$(".accordion-content").css({
                    display: this.displayType,
                    height: "auto"
                });
                var n = i.height();
                i.css({
                    height: 0
                }).transition({
                    height: n
                }, function() {
                    i.parent().toggleClass("expanded", e)
                })
            },
            togglerClicked: function(e) {
                e.preventDefault();
                var t = !this.$el.hasClass("expanded");
                this.setExpanded(t)
            },
            resizedWindow: function() {
                var e = this.$(".accordion-content").css({
                        height: "auto"
                    }),
                    t = e.height(),
                    i = this.$el.hasClass("expanded");
                i ? e.css({
                    height: t
                }) : e.css({
                    height: 0
                })
            },
            render: function() {
                return this.$arrow = this.$(".accordion-arrow"), this
            }
        })
    }(),
    function() {
        "use strict";
        vc.AccordionTableItem = vc.AccordionItem.extend({
            tagName: "tr",
            initialize: function(e) {
                _.bindAll(this, "togglerClicked", "resizedWindow"), this.animate = e.animate, this.content = this.$(".accordion-content"), this.displayType = "table", $(window).on("resize", this.resizedWindow)
            },
            setExpanded: function(e) {
                if (this.animate && $.support.transition) this.animateExpanded(e);
                else {
                    var t = this.$el.find("> td:first-child");
                    t.toggleClass("expanded", e), t.hasClass("expanded") ? t.removeClass("collapsed") : t.addClass("collapsed")
                }
                this.$arrow.toggleClass("icon-angle-down", !e).toggleClass("icon-angle-up", e)
            },
            togglerClicked: function(e) {
                e.preventDefault();
                var t = this.content.length > 0 ? !this.content.parent().hasClass("expanded") : !1;
                this.setExpanded(t)
            },
            animateExpanded: function(e) {
                var t = this,
                    i = this.content;
                if (!e) return void i.fadeOut().transition({
                    display: "block",
                    height: 0
                }, function() {
                    i.parent().toggleClass("expanded", e), t.trigger("expanded")
                });
                i = this.content.css({
                    display: this.displayType,
                    height: "auto"
                });
                var n = i.height();
                i.css({
                    height: 0
                }).transition({
                    height: n,
                    display: this.displayTable
                }, function() {
                    i.parent().toggleClass("expanded", e)
                })
            }
        })
    }(),
    function() {
        "use strict";
        vc.Accordion = Backbone.View.extend({
            className: "accordion",
            itemView: vc.AccordionItem,
            render: function() {
                this.animate = void 0 !== this.$el.data("animate");
                var e = this,
                    t = "";
                switch (this.$el.length > 0 && (t = this.$el[0].tagName.toLowerCase()), t) {
                    case "ol":
                    case "ul":
                        this.childTag = "li";
                        break;
                    case "table":
                        this.childTag = "tbody > tr", this.itemView = vc.AccordionTableItem;
                        break;
                    default:
                        this.childTag = "div"
                }
                return this.$("> " + this.childTag).each(function(t, i) {
                    var n = new e.itemView({
                        el: i,
                        animate: this.animate
                    });
                    n.render()
                }), this
            }
        })
    }(),
    function() {
        "use strict";
        vc.StoryAccordionItem = vc.AccordionItem.extend({
            initialize: function(e) {
                _.bindAll(this, "buttonClicked", "itemClicked", "modelChanged", "animateExpanded"), this.animate = e.animate, this.displayType = "block", $(window).on("resize", this.resizedWindow), this.listenTo(this.model, "change", this.modelChanged)
            },
            events: {
                "click .accordion-panel-toggle": "buttonClicked",
                click: "itemClicked"
            },
            buttonClicked: function() {
                var e = this.model.collection.where({
                    active: !0
                });
                e && e.forEach(function(e) {
                    e.set({
                        active: !1
                    })
                }), this.model.set({
                    active: !0
                })
            },
            itemClicked: function() {
                this.trigger("storyAccordionItem:clicked")
            },
            resizedWindow: function() {},
            modelChanged: function(e) {
                var t = e.changedAttributes();
                "active" in t && (this.setExpanded(t.active), this.video && this.video.player.pause())
            },
            getVideo: function(e) {
                if (e) {
                    var t = {},
                        i = e.split(";");
                    return _.each(i, function(e) {
                        var i = e.split(":");
                        t[i[0]] = i[1].split(",")
                    }), t
                }
            },
            determineVideoToDisplay: function(e) {
                if (e) {
                    var t = $(window).width();
                    return t > 1e3 && e.large ? e.large : t > 500 && e.medium ? e.medium : e.small ? e.small : e.large || e.medium || e.small
                }
            },
            animateExpanded: function(e) {
                this.animationCount = this.animationCount + 1 || 1, 1 === this.animationCount && e && this.model.collection.first() === this.model ? setTimeout(function() {
                    vc.AccordionItem.prototype.animateExpanded.call(this, e)
                }.bind(this), 0) : vc.AccordionItem.prototype.animateExpanded.call(this, e)
            },
            render: function() {
                var e = this;
                return this.$(".accordion-content-video").each(function() {
                    if (this.getAttribute("data-video")) {
                        var t = $(this),
                            i = $("img", t),
                            n = i.attr("src"),
                            s = $("a", e.$el).first().attr("id");
                        if (t.length > 0) {
                            t.attr("id", s + "-modal");
                            var o = e.getVideo(t.data("video"));
                            o = e.determineVideoToDisplay(o);
                            var a = '<video id="' + s + '-video" width="100%" height="100%" style="width:100%; height:100%;" poster="' + n + '" controls="controls" class="mediaelement" preload="none">';
                            a += '<source type="video/mp4" src="' + o[1] + '" title="480p SD" />', o.length > 1 && (a += '<source type="video/webm" src="' + o[0] + '" title="480p SD" />'), a += '<object width="100%" height="100%" style="width:100%; height:100%;" type="application/x-shockwave-flash" data="/Static/mediaelement/flashmediaelement.swf">', a += '<param name="movie" value="/Static/mediaelement/flashmediaelement.swf" />', a += '<param name="flashvars" value="controls=true&amp;file=' + o[1] + '" />', a += '<img src="' + n + '" width="100%" height="100%" style="width:100%; height:100%;" alt="No video playback capabilities" />', a += "</object>", a += "</video>", t.append(a), setTimeout(function() {
                                e.video = new vc.Video({
                                    el: t
                                }), i.hide()
                            }, 100)
                        }
                    }
                }), this
            }
        })
    }(),
    function() {
        "use strict";
        vc.StoryAccordion = vc.Accordion.extend({
            itemView: null,
            initialize: function() {
                _.bindAll(this, "createButton", "adjustNavigationHeight"), this.collection = new vc.CarouselItemCollection, this.createButtonsForAll(), this.mobileWidth = 769, this.autoRunInterval = 5e3, this.triggerAutoRun(), $(window).on("resize", this.adjustNavigationHeight)
            },
            triggerAutoRun: function() {
                var e, t, i;
                this.autoRun = setInterval(_.bind(function() {
                    vc.app.$window.width() < this.mobileWidth || (e = this.collection.findWhere({
                        active: !0
                    }), t = this.collection.indexOf(e), i = this.collection.at(t + 1), e.set({
                        active: !1
                    }), i ? i.set({
                        active: !0
                    }) : this.collection.first().set({
                        active: !0
                    }))
                }, this), this.autoRunInterval)
            },
            disableAutoRun: function() {
                this.autoRun && (clearInterval(this.autoRun), this.autoRun = !1)
            },
            createButtonsForAll: function() {
                this.$el.find("li").each(this.createButton)
            },
            createButtonsForItem: function(e) {
                var t = this.collection.indexOf(e),
                    i = this.$el.find("li").eq(t);
                this.createButton(e, i)
            },
            createButton: function(e, t) {
                var i = $(t);
                this.animate = void 0 !== this.$el.data("animate");
                var n = this.collection.add({
                        id: i.attr("id")
                    }),
                    s = new vc.StoryAccordionItem({
                        el: t,
                        model: n,
                        animate: !0
                    });
                0 === e && n.set({
                    active: !0
                }), n.view = s.render(), this.listenTo(s, "storyAccordionItem:clicked", this.disableAutoRun)
            },
            adjustNavigationHeight: function() {
                var e = this.$(".accordion-content-video").first().height();
                e && this.$el.height(e)
            },
            render: function() {
                setTimeout(function() {
                    this.adjustNavigationHeight()
                }.bind(this), 0)
            }
        })
    }(),
    function() {
        "use strict";
        vc.LanguageTunnel = Backbone.View.extend({
            initialize: function() {
                _.bindAll(this, "resizedWindow", "setSize", "regionToggle"), $(window).on("resize", this.resizedWindow), this.$regions = this.$el.find(".lt-regions"), this.setSize(), this.fadeInBackground()
            },
            events: {
                "click .lt-region-toggle": "regionToggle"
            },
            regionToggle: function(e) {
                if (e.preventDefault(), !(vc.app.currentDevice.minWidth >= 480)) {
                    var t = $(e.currentTarget).siblings(".lt-countries"),
                        i = $(e.currentTarget).find(".icon");
                    t.toggle(), i.hasClass("icon-angle-down") ? i.removeClass("icon-angle-down").addClass("icon-angle-up") : i.removeClass("icon-angle-up").addClass("icon-angle-down")
                }
            },
            fadeInBackground: function() {
                var e = $(".lt-background"),
                    t = "data-temp-src",
                    i = $(".lt-background-container");
                e.hide(), e.attr(t, e.attr("src")), e.attr("src", ""), i.show(), e.one("load", function() {
                    e.fadeIn({
                        duration: 400
                    })
                }).attr("src", e.attr(t)).each(function() {
                    this.complete && $(this).load()
                })
            },
            resizedWindow: function() {
                if (vc.app.currentDevice.minWidth >= 480) {
                    var e = this.$regions.find(".lt-countries"),
                        t = this.$regions.find(".lt-region-toggle icon");
                    e.show(), t.removeClass("icon-angle-down").addClass("icon-angle-up")
                }
                this.setSize()
            },
            setSize: function() {
                var e = $(".lt-content-wrapper").outerHeight(),
                    t = window.innerHeight,
                    i = e > t ? e : t;
                this.$el.css("height", i)
            }
        })
    }(),
    function() {
        "use strict";
        vc.CarouselItemView = Backbone.View.extend({
            className: "carousel-item",
            initialize: function() {
                this.listenTo(this.model, "change", this.modelChanged)
            },
            modelChanged: function(e) {
                var t = e.changedAttributes();
                "active" in t && this.$el.toggleClass("active", t.active)
            }
        })
    }(),
    function() {
        "use strict";
        vc.Carousel = Backbone.View.extend({
            initialize: function() {
                _.bindAll(this, "dragStart", "drag", "dragEnd", "next", "prev"), this.listenTo(this.collection, "change:active", this.activeItemChanged)
            },
            hammerEvents: function() {
                return Modernizr.touch ? {
                    dragleft: "dragStart",
                    dragright: "dragStart"
                } : {}
            },
            activeItemChanged: function(e, t) {
                if (this.dragging) return this.animateDragChange(e, t);
                var i = e.get("direction");
                return t ? this.animateActivate(e, i) : this.animateDeactivate(e, i)
            },
            animateActivate: function(e, t) {
                var i = "left" === t ? "-2%" : "2%",
                    n = $.support.transform ? {
                        x: i,
                        opacity: 0
                    } : {
                        left: i,
                        opacity: 0
                    },
                    s = $.support.transform ? {
                        x: "0%",
                        opacity: 1
                    } : {
                        left: "0%",
                        opacity: 1
                    };
                _.extend(n, {
                    display: "block"
                }), e.view.$el.stop().css(n).transition(s, 500)
            },
            animateDeactivate: function(e, t) {
                var i = "left" === t ? "-2%" : "2%",
                    n = $.support.transform ? {
                        x: "0%",
                        opacity: 1
                    } : {
                        left: "0%",
                        opacity: 1
                    },
                    s = $.support.transform ? {
                        x: i,
                        opacity: 0
                    } : {
                        left: i,
                        opacity: 0
                    };
                e.view.$el.stop().css(n), $.when(e.view.$el.transition(s, 500)).then(function() {
                    e.get("active") || e.view.$el.hide()
                })
            },
            animateDragChange: function(e, t) {
                var i;
                if (t) i = $.support.transform ? {
                    x: "0%"
                } : {
                    left: "0%"
                };
                else {
                    var n, s = e.get("direction");
                    n = "left" === s ? "-" + this.getDragAdjustment() + "%" : this.getDragAdjustment() + "%", i = $.support.transform ? {
                        x: n
                    } : {
                        left: n
                    }
                }
                e.view.$el.transition(i)
            },
            dragStart: function(e) {
                if (!this.dragging) {
                    this.dragging = !0, this.killHammerEvents(e), this.currentItem = this.collection.activeItem(), this.prevItem = this.collection.prevItem(), this.nextItem = this.collection.nextItem();
                    var t = {
                        opacity: 1,
                        filter: "alpha(opacity=100)"
                    };
                    this.currentItem.view.$el.show().css(t), this.prevItem && this.prevItem.view.$el.show().css(t), this.nextItem && this.nextItem.view.$el.show().css(t), this.$el.toggleClass("dragging", this.dragging), vc.app.$body.hammer({
                        dragLockToAxis: !0,
                        dragBlockHorizontal: !0
                    }).on("dragleft." + this.cid, this.drag).on("dragright." + this.cid, this.drag).on("dragend." + this.cid, this.dragEnd)
                }
            },
            drag: function(e) {
                this.killHammerEvents(e);
                var t = this.dragPercent = Math.round(e.gesture.deltaX / this.$el.width() * 100);
                this.transitionItem(this.currentItem, t + "%", !0), this.transitionItem(this.prevItem, t - this.getDragAdjustment() + "%", !0), this.transitionItem(this.nextItem, t + this.getDragAdjustment() + "%", !0)
            },
            getDragAdjustment: function() {
                return 100
            },
            dragEnd: function(e) {
                this.killHammerEvents(e), this.dragPercent = 0, vc.app.$body.hammer().off("." + this.cid);
                var t = Math.abs(e.gesture.deltaX) / this.$el.width() * 100,
                    i = t * Math.max(1, e.gesture.velocityX);
                if (i > 30) {
                    var n = e.gesture.direction === Hammer.DIRECTION_LEFT,
                        s = !1;
                    if (n && this.nextItem ? (this.next(), s = !0) : this.prevItem && (this.prev(), s = !0), s) return this.dragging = !1, void this.$el.toggleClass("dragging", this.dragging)
                }
                this.transitionItem(this.currentItem, "0%"), this.transitionItem(this.prevItem, "-" + this.getDragAdjustment() + "%"), this.transitionItem(this.nextItem, this.getDragAdjustment() + "%"), this.dragging = !1, this.$el.toggleClass("dragging", this.dragging)
            },
            transitionItem: function(e, t, i) {
                if (e) {
                    var n = $.support.transform ? {
                        x: t
                    } : {
                        left: t
                    };
                    return i ? e.view.$el.css(n) : e.view.$el.transition(n)
                }
            },
            next: function() {
                var e = this.collection.nextItem();
                this.collection.activate(e.id)
            },
            prev: function() {
                var e = this.collection.prevItem();
                this.collection.activate(e.id)
            }
        }), vc.mixin(vc.Carousel.prototype, vc.HammerView)
    }(),
    function() {
        "use strict";
        vc.EnginePicker = Backbone.View.extend({
            initialize: function() {
                $(".picker-group.fuel-picker .picker-item").on("click", this.pickerLinkClicked)
            },
            pickerLinkClicked: function(e) {
                e.preventDefault(), $(".picker-group.fuel-picker .picker-item").removeClass("active");
                var t = $(this);
                t.addClass("active");
                var i = t.find(".picker-link"),
                    n = "#" + i.attr("data-toggle");
                $(".picker-group.engine-picker").hide(), $(n).show()
            }
        })
    }(),
    function() {
        "use strict";
        var e = 1,
            t = [],
            i = [],
            n = [],
            s = null,
            o = null,
            a = function() {
                for (var t = n.filter(function(e, t) {
                        return $.inArray(t, i) < 0
                    }), s = 0, o = n.length - e; o > s; s++) t[s].checked = !1;
                r.getSelectedEngines()
            },
            r = {
                initialize: function() {
                    t = $('.pick-engine-box input[name="engine"]'), t.on("change", this.validate), s = $('select[name="feature-set"]').on("change", function() {
                        r.toggleFeature(s.val())
                    }), $(".dropdown a").on("click", function(e) {
                        r.toggleFeature($(e.target).data("dropdown"))
                    }), this.getMaxAllowed(), this.setCheckedQuanity(), this.toggleEngines(), this.toggleFeature(s.val()), o = new vc.FeatureOptions.Model, $(window).on("resize", function() {
                        r.resize()
                    }), $("a.lightbox").bind("click", function(e) {
                        e.preventDefault(), r.showOverlay($(e.target))
                    })
                },
                showOverlay: function(e) {
                    o.set("title", e.attr("title")).set("htmlContent", $(e.attr("href")).html());
                    var t = new vc.FeatureOptions.Overlay({
                        model: o
                    });
                    vc.app.$mask.append(t.render().el)
                },
                toggleFeature: function(e) {
                    var t = $(".feature-option.active"),
                        i = $("#" + e);
                    t.length > 0 && t.removeClass("active"), i.addClass("active");
                    var n = i.find("li:not(.heading-row-parent)");
                    0 === n.filter(".expanded").length && n.eq(0).addClass("expanded").find("i").addClass("icon-angle-up").removeClass("icon-angle-down"), $(window).trigger("resize")
                },
                toggleEngines: function() {
                    $.each(t, function(e, t) {
                        r.toggleEngine($(t))
                    }), n.length >= 2 ? $(".specs-info-wrapper colgroup col:last-child,.feature-option colgroup col:last-child").css("display", "table-column") : $(".specs-info-wrapper colgroup col:last-child,.feature-option colgroup col:last-child").hide()
                },
                toggleEngine: function(e) {
                    e.is(":checked") ? r.showEngine(e.attr("value")) : r.hideEngine(e.attr("value"))
                },
                showEngine: function(e) {
                    $('[rel="' + e + '"]').show()
                },
                hideEngine: function(e) {
                    $('[rel="' + e + '"]').hide()
                },
                getSelectedEngines: function() {
                    n = t.filter(":checked")
                },
                setCheckedQuanity: function(i) {
                    i || (i = e);
                    for (var n = 0; i > n; n++) t.eq(n).attr("checked", !0);
                    r.getSelectedEngines()
                },
                validate: function(t) {
                    r.getSelectedEngines(), t.target.checked === !0 ? (i.push(t.target), i.length > e && i.shift(), n.length > e && a()) : t.target.checked === !1 && 0 === n.length && (t.target.checked = !0), r.toggleEngines(), $(".accordion-content").css({
                        height: "auto"
                    })
                },
                resize: function() {
                    if (this.getMaxAllowed(), r.getSelectedEngines(), n.length > e) {
                        for (var t = 0; t < i.length - e; t++) i.shift();
                        a()
                    }
                    r.toggleEngines()
                },
                getMaxAllowed: function() {
                    var t = $(".pick-engine-box .max-allowed:visible");
                    e = t.length > 0 ? parseInt(t.data("max-allowed-compare"), 10) : 1
                }
            };
        vc.USEnginePicker = Backbone.View.extend(r)
    }(),
    function() {
        "use strict";
        var e = null,
            t = {
                initialize: function() {
                    e = new vc.SliderOptions.Model, $(window).on("resize", function() {
                        t.changePosition(), t.changeLandscape()
                    }), $(window).on("load", function() {
                        t.changePosition()
                    }), $("a.slider-overlay-background").bind("click", function(e) {
                        e.preventDefault(), t.showOverlay(jQuery(this), !0), t.changeIconPosition()
                    }), $("a.slider-overlay-readmore").bind("click", function(e) {
                        e.preventDefault(), t.showOverlay(jQuery(this), !1), t.changeIconPosition()
                    }), $("a.category-0").bind("click", function(e) {
                        e.preventDefault(), t.showCategory(jQuery(this), 0), t.changePosition()
                    }), $("a.category-1").bind("click", function(e) {
                        e.preventDefault(), t.showCategory(jQuery(this), 1), t.changePosition()
                    }), $("a.category-2").bind("click", function(e) {
                        e.preventDefault(), t.showCategory(jQuery(this), 2), t.changePosition()
                    }), $("a.prev").bind("click", function(e) {
                        e.preventDefault(), t.prevClick(jQuery(this))
                    }), $("a.next").bind("click", function(e) {
                        e.preventDefault(), t.nextClick(jQuery(this))
                    })
                },
                prevClick: function() {
                    if ($(".slider-carousel.active .carousel-slide.first").is(":animated") || $(".slider-carousel.active .carousel-slide.second").is(":animated") || $(".slider-carousel.active .carousel-slide.third").is(":animated")) return !1;
                    var e = 0,
                        t = 28,
                        i = 56,
                        n = 84,
                        s = -28,
                        o = $(".slider-carousel.active .carousel-slide.third.visible"),
                        a = $(".slider-carousel.active .carousel-slide"),
                        r = a.index(o),
                        l = a.length,
                        c = $(window).width();
                    a.removeClass("visible"), a.removeClass("first"), a.removeClass("second"), a.removeClass("third"), a.removeClass("last");
                    for (var d = r, h = 0; l > h; d--, h++) {
                        var p, b;
                        0 > d && (d = l - 1), 0 == h && (a.eq(d).addClass("last"), p = i * c / 100, b = n * c / 100, a.eq(d).css({
                            left: p,
                            positon: "absolute"
                        }), $(".slider-carousel.active .carousel-slide.last").animate({
                            left: b,
                            positon: "absolute"
                        }, 800), a.eq(d).addClass("visible")), 1 == h && (a.eq(d).addClass("third"), p = t * c / 100, b = i * c / 100, a.eq(d).css({
                            left: p,
                            positon: "absolute"
                        }), $(".slider-carousel.active .carousel-slide.third").animate({
                            left: b,
                            positon: "absolute"
                        }, 800), a.eq(d).addClass("visible")), 2 == h && (a.eq(d).addClass("second"), p = e * c / 100, b = t * c / 100, a.eq(d).css({
                            left: p,
                            positon: "absolute"
                        }), $(".slider-carousel.active .carousel-slide.second").animate({
                            left: b,
                            positon: "absolute"
                        }, 800), a.eq(d).addClass("visible")), 3 == h && (a.eq(d).addClass("first"), p = s * c / 100, b = e * c / 100, a.eq(d).css({
                            left: p,
                            positon: "absolute"
                        }), $(".slider-carousel.active .carousel-slide.first").animate({
                            left: b,
                            positon: "absolute"
                        }, 800), a.eq(d).addClass("visible")), h > 3 && (n += 28, p = 109 * c / 100, a.eq(d).css({
                            left: p,
                            positon: "absolute"
                        }))
                    }
                },
                nextClick: function() {
                    if ($(".slider-carousel.active .carousel-slide.first").is(":animated") || $(".slider-carousel.active .carousel-slide.second").is(":animated") || $(".slider-carousel.active .carousel-slide.third").is(":animated")) return !1;
                    var e = 0,
                        t = 28,
                        i = 56,
                        n = 84,
                        s = -28,
                        o = $(".slider-carousel.active .carousel-slide.first.visible"),
                        a = $(".slider-carousel.active .carousel-slide"),
                        r = a.index(o),
                        l = a.length,
                        c = $(window).width();
                    a.removeClass("visible"), a.removeClass("first"), a.removeClass("second"), a.removeClass("third"), a.removeClass("last");
                    for (var d = r, h = 0; l > h; d++, h++) {
                        var p, b;
                        d >= l && (d = 0), 0 == h && (a.eq(d).addClass("last"), p = e * c / 100, b = s * c / 100, a.eq(d).css({
                            left: p,
                            positon: "absolute"
                        }), $(".slider-carousel.active .carousel-slide.last").animate({
                            left: b,
                            positon: "absolute"
                        }, 800), a.eq(d).addClass("visible")), 1 == h && (a.eq(d).addClass("first"), p = t * c / 100, b = e * c / 100, a.eq(d).css({
                            left: p,
                            positon: "absolute"
                        }), $(".slider-carousel.active .carousel-slide.first").animate({
                            left: b,
                            positon: "absolute"
                        }, 800), a.eq(d).addClass("visible"), a.eq(d).addClass("active")), 2 == h && (a.eq(d).addClass("second"), p = i * c / 100, b = t * c / 100, $(".slider-carousel.active .carousel-slide.second").animate({
                            left: b,
                            positon: "absolute"
                        }, 800), a.eq(d).css({
                            left: p,
                            positon: "absolute"
                        }), a.eq(d).addClass("visible")), 3 == h && (a.eq(d).addClass("third"), p = n * c / 100, b = i * c / 100, a.eq(d).css({
                            left: p,
                            positon: "absolute"
                        }), $(".slider-carousel.active .carousel-slide.third").animate({
                            left: b,
                            positon: "absolute"
                        }, 800), a.eq(d).addClass("visible")), h > 3 && (n += 28, p = n * c / 100, a.eq(d).css({
                            left: p,
                            positon: "absolute"
                        }))
                    }
                },
                changeLandscape: function() {
                    var e = $(window).width();
                    if (769 > e) {
                        var t = $("#mask");
                        t.length > 0 && (window.innerHeight > window.innerWidth ? (t.removeClass("slider-landscape"), t.addClass("slider-portrait")) : (t.removeClass("slider-portrait"), t.addClass("slider-landscape")))
                    }
                },
                changeViewPartHeight: function() {
                    var e = 0;
                    $(".slider-carousel.active .carousel-slide").each(function() {
                        $(this).height() > e && (e = $(this).height())
                    }), $(".slider-carousel").height(e)
                },
                changeIconPosition: function() {
                    var e = $(".slider-overlay-content .top").height(),
                        t = e - 50;
                    if ($(".slider-overlay-fullscreen").css("top", t), $("div#mask").find("iframe").length > 0 && $("div#mask").find("img").length > 0) {
                        var i = $("div#mask").find("img").height();
                        i > 0 && $("div#mask").find("iframe").css("height", i), $("div#mask").find("img").css("display", "none")
                    }
                },
                changePosition: function() {
                    var e = 0,
                        t = 28,
                        i = 56,
                        n = -28,
                        s = $(window).width();
                    if (481 > s) {
                        var o = $(".slider-carousel.active .carousel-slide");
                        o.css({
                            left: 0,
                            positon: "absolute"
                        })
                    } else {
                        var a = $(".slider-carousel.active .carousel-slide.first"),
                            r = $(".slider-carousel.active .carousel-slide.second"),
                            l = $(".slider-carousel.active .carousel-slide.third"),
                            c = $(".slider-carousel.active .carousel-slide.last"),
                            d = e * s / 100,
                            h = t * s / 100,
                            p = i * s / 100,
                            b = n * s / 100;
                        a.css({
                            left: d,
                            positon: "absolute"
                        }), r.css({
                            left: h,
                            positon: "absolute"
                        }), l.css({
                            left: p,
                            positon: "absolute"
                        }), c.css({
                            left: b,
                            positon: "absolute"
                        })
                    }
                    this.changeIconPosition(), this.changeViewPartHeight()
                },
                showOverlay: function(t, i) {
                    $("html").addClass("slider-scroll"), $("#mask").removeClass("slider-landscape"), $("#mask").removeClass("slider-portrait");
                    var n = $(".carousel-slide-content"),
                        s = t.attr("href"),
                        o = t.attr("title");
                    n.find(".slider-video-player").removeAttr("data-control"), i ? n.find(".slider-video-player").attr("data-control", "true") : n.find(".slider-video-player").attr("data-control", "false");
                    var a = n.find("#" + s).html();
                    e.set("title", o).set("htmlContent", a);
                    var r = new vc.SliderOptions.Overlay({
                        model: e
                    });
                    vc.app.$mask.append(r.render().el);
                    var l = $("#slider-icon-close");
                    $("div#new-slider-icon-close").length > 0 && $("#new-slider-icon-close").css("display", "block"), 0 == $("div#mask").find("div#new-slider-icon-close").length && (l.prependTo(vc.app.$mask), $("div#mask").find("div#slider-icon-close").attr("id", "new-slider-icon-close"), $("#new-slider-icon-close").css("display", "block").addClass("new-slider-overlay-close")), this.changeIconPosition()
                },
                showCategory: function(e, t) {
                    var i = $(".slider-category"),
                        n = $(".slider-category.category-" + t);
                    i.removeClass("button-active"), n.addClass("button-active");
                    var s = $(".slider-carousel"),
                        o = $(".slider-carousel.category-" + t);
                    s.removeClass("active"), o.addClass("active")
                }
            };
        vc.SliderOverlay = Backbone.View.extend(t)
    }(), $(document).ready(function() {
        if ($(".slider-container").length && $(window).width() <= 481) {
            var e = !1,
                t = !1;
            $(".slider-category.button-small").each(function(i, n) {
                n.text.indexOf(" ") >= 0 && (n.text.length >= 9 && (e = !0), n.text.length >= 9 && n.text.length <= 19 && (t = !0))
            }), e ? e && t && $(".slider-container .story-buttons li .button").css("padding", "5px 10px") : $(".slider-container .story-buttons li .button").css("line-height", "40px")
        }
    }),
    function() {
        "use strict";
        var e = null,
            t = {
                initialize: function() {
                    if (null != this.model) {
                        var t = "#" + this.model.attributes.ID;
                        if ($(t).length > 0) {
                            var i = $(t).html();
                            e = new vc.ReadMoreOverlay.Model, e.set("htmlContent", i);
                            var n = new vc.ReadMoreOverlay.Overlay({
                                model: e
                            });
                            vc.app.$mask.append(n.render().el), 0 == $("#mask .readmoreoverlay-top-section").length && $("#mask .readmoreoverlay").addClass("no-media")
                        }
                    }
                }
            };
        vc.ReadMoreOverlayObject = Backbone.View.extend(t)
    }(),
    function() {
        "use strict";
        vc.Filter = Backbone.View.extend({
            initialize: function() {
                _.bindAll(this, "updateResults"), this.$categories = $("#categories"), this.$countries = $("#countries")
            },
            events: {
                "change .filters select": "updateResults"
            },
            updateResults: function() {
                var e = this.$countries.val(),
                    t = this.$categories.val();
                this.$items = this.$el.find(".filter-item"), this.$items.addClass("hidden"), "none" === t && "none" !== e ? this.$items.filter('div[data-country="' + e + '"]').removeClass("hidden") : "none" !== t && "none" === e ? this.$items.filter('div[data-category="' + t + '"]').removeClass("hidden") : "none" !== t && "none" !== e ? this.$items.filter('div[data-category="' + t + '"]').filter('div[data-country="' + e + '"]').removeClass("hidden") : this.$items.removeClass("hidden"), console.log(this.$items);
                var i = !0;
                this.$items.each(function() {
                    $(this).hasClass("hidden") || (i = !1)
                }), i ? ($(".filter-item-titles").addClass("hidden"), $(".no-results").removeClass("hidden")) : ($(".filter-item-titles").removeClass("hidden"), $(".no-results").addClass("hidden"))
            }
        })
    }(),
    function() {
        "use strict";
        vc.Tabs = Backbone.View.extend({
            initialize: function() {},
            events: {
                "click .tabs-button": "clickTab"
            },
            clickTab: function(e) {
                e.preventDefault();
                var t = $(e.currentTarget),
                    i = $(e.delegateTarget),
                    n = t.data("tabs-item"),
                    s = i.find('li[data-tabs-item="' + n + '"]');
                i.find(".tabs-button").removeClass("tabs-button-active"), i.find(".tabs-item").removeClass("tabs-item-active"), t.addClass("tabs-button-active"), s.addClass("tabs-item-active")
            }
        })
    }(),
    function() {
        "use strict";
        vc.HeroGroup = Backbone.View.extend({
            initialize: function() {
                _.bindAll(this, "heroToggled", "leftGroup"), this.listenTo(vc.app, "device:changed", this.deviceChanged)
            },
            events: function() {
                return vc.app.currentDevice.minWidth >= 769 && Modernizr.video ? {
                    "mouseenter .hero-content": "heroToggled",
                    mouseleave: "leftGroup"
                } : {}
            },
            hammerEvents: function() {
                return Modernizr.touch && Modernizr.video ? {
                    "tap .hero-content": "heroToggled"
                } : {}
            },
            deviceChanged: function() {
                this.undelegateEvents(), this.delegateEvents()
            },
            heroToggled: function(e) {
                var t = $(e.currentTarget),
                    i = t.siblings(".hero-background");
                this.$backgrounds.css({
                    opacity: 0,
                    filter: "alpha(opacity=0)"
                }), i.css({
                    opacity: 1,
                    filter: "alpha(opacity=100)"
                }), this.$backgrounds.find("video").each(function(e, t) {
                    t.pause()
                }), i.find("video").each(function(e, t) {
                    t.play()
                })
            },
            leftGroup: function() {
                this.$backgrounds.css({
                    opacity: 0,
                    filter: "alpha(opacity=0)"
                }), this.$backgrounds.first().css({
                    opacity: 1,
                    filter: "alpha(opacity=100)"
                }), this.$backgrounds.first().find("video").each(function(e, t) {
                    t.play()
                })
            },
            render: function() {
                return this.$backgrounds = this.$(".hero-background"), this
            }
        })
    }(),
    function() {
        "use strict";
        vc.PDPHeroGroup = Backbone.View.extend({
            initialize: function() {
                _.bindAll(this, "heroToggled", "leftGroup"), this.listenTo(vc.app, "device:changed", this.deviceChanged)
            },
            events: function() {
                return vc.app.currentDevice.minWidth >= 769 && Modernizr.video ? {
                    "click .hero-content,.hero-content-pagination-hover": "heroToggled"
                } : {}
            },
            hammerEvents: function() {
                return Modernizr.touch && Modernizr.video ? {
                    "tap .hero-content": "heroToggled"
                } : {}
            },
            deviceChanged: function() {
                this.undelegateEvents(), this.delegateEvents()
            },
            heroToggled: function(e) {
                var t = $(e.currentTarget),
                    i = t.siblings(".hero-background");
                this.$backgrounds.css({
                    opacity: 0,
                    filter: "alpha(opacity=0)"
                }), i.css({
                    opacity: 1,
                    filter: "alpha(opacity=100)"
                }), this.$backgrounds.find("video").each(function(e, t) {
                    t.pause()
                }), i.find("video").each(function(e, t) {
                    t.play()
                })
            },
            HoverGroup: function() {
                this.$backgrounds.first().css({
                    opacity: 1,
                    filter: "alpha(opacity=100)"
                })
            },
            leftGroup: function() {
                this.$backgrounds.first().css({
                    opacity: 1,
                    filter: "alpha(opacity=100)"
                }), this.$backgrounds.first().find("video").each(function(e, t) {
                    t.play()
                })
            },
            render: function() {
                return this.$backgrounds = this.$(".hero-background"), this
            }
        })
    }(),
    function() {
        "use strict";
        vc.HeroShortcuts = Backbone.View.extend({
            initialize: function() {
                this.listenTo(vc.app, "resize", this.resize), this.activeIndex = -1, this.buttonsLength = this.$(".scroll ul li").length, this.$scroll = this.$(".scroll"), this.$scrollContent = this.$(".scroll ul"), this.$dots = this.$(".dots a"), this.update();
                var e = this;
                this.$scroll.on("scroll", function() {
                    e.update()
                })
            },
            events: {
                "click .dots a": "dotClicked"
            },
            update: function() {
                var e = this.getMostCenteredButton();
                e !== this.activeIndex && (this.activeIndex = e, this.$dots.removeClass("active"), this.$dots.eq(this.activeIndex).addClass("active"))
            },
            resize: function() {
                this.getMostCenteredButton() !== this.activeIndex && this.scrollToButton(this.activeIndex, 0)
            },
            dotClicked: function(e) {
                e.preventDefault(), this.scrollToButton($(e.target).index())
            },
            snap: function() {
                var e = this.getMostCenteredButton();
                this.scrollToButton(e)
            },
            scrollToButton: function(e, t) {
                var i = e / (this.buttonsLength - 1),
                    n = this.$scroll.width(),
                    s = this.$scrollContent.width(),
                    o = (s - n) * i;
                this.$scroll.animate({
                    scrollLeft: o
                }, t)
            },
            getMostCenteredButton: function() {
                var e = this.$scroll.width(),
                    t = this.$scrollContent.width(),
                    i = this.$scroll.scrollLeft(),
                    n = i / (t - e),
                    s = Math.floor(n * this.buttonsLength);
                return s = Math.min(s, this.buttonsLength - 1), s = Math.max(s, 0)
            },
            render: function() {
                return this
            }
        })
    }(),
    function() {
        "use strict";
        vc.HeroBackground = Backbone.View.extend({
            initialize: function() {
                _.bindAll(this, "imageloaded")
            },
            enteredViewport: function() {
                this.$el.parents(".hero").addClass("hero-visible")
            },
            videoStartedPlaying: function() {
                vc.ResponsiveVideo.videoStartedPlaying.apply(this, arguments);
                var e = parseFloat(this.$el.data("aspect-ratio"));
                this.startFillingContainer({
                    el: this.$bgVideo,
                    aspectRatio: e ? e : 16 / 9
                }), this.stopFillingContainer(this.$bgImg), _.defer(_.bind(function() {
                    this.$bgVideo.toggleClass("playing", !0), this.$bgImg.toggleClass("hide-img", !0)
                }, this))
            },
            stopVideo: function() {
                vc.ResponsiveVideo.stopVideo.apply(this, arguments), this.$bgImg.toggleClass("hide-img", !1), this.stopFillingContainer(this.$bgVideo)
            },
            render: function() {
                this.$bgImg = this.$("img");
                var e = parseFloat(this.$el.data("aspect-ratio")),
                    t = {
                        el: this.$bgImg,
                        method: this.$el.data("scale-method"),
                        aspectRatio: e ? e : 16 / 9
                    },
                    i = this.$el.data("alignment");
                if (i) {
                    for (var n = i.split(","), s = 0; s < n.length; s++) {
                        var o = parseFloat(n[s]);
                        _.isNaN(o) && (o = .5), n[s] = o
                    }
                    n.length < 2 && n.push(.5), t.alignment = n
                }
                return this.startFillingContainer(t), this.hasVideo() && this.createVideo(), this.$bgImg.length && this.$bgImg[0].naturalHeight ? this.imageloaded() : this.$bgImg.on("load", this.imageloaded), this
            },
            imageloaded: function() {
                this.$el.parents(".hero").addClass("hero-loaded")
            }
        }), vc.mixin(vc.HeroBackground.prototype, vc.ElementFillContainer, vc.ResponsiveVideo)
    }(),
    function() {
        "use strict";
        vc.StandardHero = Backbone.View.extend({
            minHeights: {
                small: 300,
                medium: 550,
                large: 600,
                "extra-large": 600
            },
            initialize: function() {
                _.bindAll(this, "setSize", "onHeroBackgroundLoaded"), $(window).on("resize." + this.cid, this.setSize), this.openPopup()
            },
            setSize: function() {
                var e = this.minHeights[vc.app.currentDevice.name],
                    t = Math.max(e, Math.floor(.8 * vc.app.$window.height()));
                $(".hero-half-height").length > 0 && $(window).width() > 769 && (t /= 2), 300 == e ? this.$el.css({
                    height: e
                }) : this.$el.css({
                    height: t
                }), this.$el.css({
                    height: t
                })
            },
            remove: function() {
                $(window).off("resize." + this.cid), Backbone.View.prototype.remove.call(this)
            },
            render: function() {
                return this.setSize(), this.heroBackground = new vc.HeroBackground({
                    el: this.$(".hero-background")
                }), this.heroBackground.render(), $(this).trigger("HeroBackgroundLoaded"), this
            },
            onHeroBackgroundLoaded: function() {},
            openPopup: function() {
                $(".hero-ctas a").on("click", function(e) {
                    if ($(window).width() > 480) {
                        var t = $(this);
                        t.is("[href*='popup=1']") && (e.preventDefault(), t.magnificPopup({
                            items: {
                                src: '<div class="hero-popup"><iframe src="' + t.attr("href") + '"></iframe></div>',
                                type: "inline"
                            },
                            closeBtnInside: !1
                        }).magnificPopup("open"))
                    }
                })
            }
        })
    }(),
    function() {
        "use strict";
        vc.FullscreenHero = vc.StandardHero.extend({
            setSize: function() {
                this.$el.css({
                    height: Math.max(vc.app.$window.height(), this.getMinHeight())
                })
            },
            getMinHeight: function() {
                var e = $(".nav").height() || 0,
                    t = this.$el.find(".hero-content-box").height() || 0;
                return 2 * e + t
            }
        })
    }(),
    function() {
        "use strict";
        vc.VideoHero = vc.StandardHero.extend({
            initialize: function() {
                this.$videoEl = this.$el.find("video"), this.elHeight = this.$videoEl.outerHeight(), this.$videoInner = this.$el.find(".video-hero-inner"), this.elInnerHeight = this.$videoInner.outerHeight(), this.$mobileContent = this.$el.find(".hero-content-box-mobile"), this.mobileContentHeight = this.$mobileContent.outerHeight(), this.$videoBackground = this.$el.find(".hero-background"), this.$videoContent = this.$el.find(".hero-content-align"), this.$videoBottomBar = this.$el.find(".video-hero-bottom"), this.$videoContentButton = this.$el.find(".content-play-button"), this.isIE = /MSIE|Trident/.test(navigator.userAgent), this.$innerHeight = this.$el.find(".video-hero-inner"), this.isMobile = $(window).width() < 677, this.count = 0, _.bindAll(this, "toggleVideo", "playVideo", "pauseVideo", "onVideoEnded", "onVideoLoaded"), _.extend(this.events, vc.StandardHero.prototype.events), this.setEvents()
            },
            events: {
                "click .mejs-overlay-play": "toggleVideo",
                "click .hero-content-align": "playVideo",
                "click video": "pauseVideo",
                "resize window": "onResize",
                HeroBackgroundLoaded: "onHeroBackgroundLoaded"
            },
            setSize: function() {
                var e = this.mobileContentHeight;
                this.isMobile && (this.$el.height(this.elHeight + e), this.$videoInner.height(this.$videoInner.outerHeight() - e), this.count = 0)
            },
            adjustSize: function() {
                var e = this.mobileContentHeight,
                    t = this.$videoInner.outerHeight(),
                    i = (t + e >= this.elHeight, [{
                        w: 0,
                        h: 350
                    }, {
                        w: 481,
                        h: 550
                    }, {
                        w: 769,
                        h: 750
                    }, {
                        w: 1266,
                        h: 800
                    }]);
                this.isMobile = $(window).width() < 677;
                for (var n = 0; n < i.length; n++)
                    if (this.isMobile) {
                        var s = this.$mobileContent.outerHeight();
                        if ($(window).width() > i[n].w) {
                            this.$el.height(i[n].h + s), this.$videoInner.height(this.$el.height() - s);
                            break
                        }
                    } else $(window).width() >= i[n].w && $([this.$el, this.$videoInner]).each(function() {
                        this.height(i[n].h)
                    }), this.count = 0;
                this.heroBackground = new vc.HeroBackground({
                    el: this.$(".hero-background")
                }), this.heroBackground.render()
            },
            setEvents: function() {
                var e = this;
                this.stretchVideo(), this.$videoEl.on("ended", this.onVideoEnded), this.$videoEl.on("pause", this.pauseVideo), this.$videoEl.on("play", this.playVideo), this.$videoEl.on("loadedmetadata", this.onVideoLoaded), this.$videoEl.attr("autoplay") && e.playVideo(), $(window).on("resize", this.throttle(function() {
                    e.stretchVideo(), e.adjustSize()
                }, 200))
            },
            onHeroBackgroundLoaded: function() {
                this.$el.addClass("loaded")
            },
            onVideoLoaded: function() {},
            toggleVideo: function(e) {
                $([this.$videoContent, this.$videoBackground, this.$videoBottomBar, this.$videoContentButton]).each(function() {
                    this.toggleClass("active")
                })
            },
            pauseVideo: function(e) {
                this.$videoEl.get(0).pause(), $([this.$videoContent, this.$videoBackground, this.$videoBottomBar, this.$videoContentButton]).each(function() {
                    this.addClass("active")
                }), $(this.$videoContent).css({
                    "pointer-events": "auto"
                })
            },
            playVideo: function(e) {
                this.$videoEl.get(0).play(), this.$videoEl.addClass("active"), this.$videoContentButton.addClass("played"), $([this.$videoContent, this.$videoBackground, this.$videoBottomBar, this.$videoContentButton]).each(function() {
                    this.removeClass("active")
                }), $(this.$videoContent).css({
                    "pointer-events": "none"
                })
            },
            onVideoEnded: function(e) {
                $(this.$videoEl).removeClass("active"), $([this.$videoContent, this.$videoBackground, this.$videoBottomBar, this.$videoContentButton]).each(function() {
                    this.addClass("active")
                }), $(this.$videoContent).css({
                    "pointer-events": "auto"
                })
            },
            stretchVideo: function() {
                this.isIE && this.$videoEl.css({
                    transform: "scale(1.35)"
                })
            },
            throttle: function(e, t, i) {
                t || (t = 250);
                var n, s;
                return function() {
                    var o = i || this,
                        a = +new Date,
                        r = arguments;
                    n && n + t > a ? (clearTimeout(s), s = setTimeout(function() {
                        n = a, e.apply(o, r)
                    }, t)) : (n = a, e.apply(o, r))
                }
            },
            getMinHeight: function() {
                var e = $(".nav").height() || 0,
                    t = this.$el.find(".hero-content-box").height() || 0;
                return 2 * e + t
            }
        })
    }(),
    function() {
        "use strict";
        vc.SwipeCarousel = Backbone.View.extend({
            initialize: function() {
                _.bindAll(this, "dragStart", "dragEnd", "next", "prev")
            },
            hammerEvents: function() {
                return Modernizr.touch ? {
                    dragleft: "dragStart",
                    dragright: "dragStart"
                } : {}
            },
            dragStart: function(e) {
                if (this.killHammerEvents(e), !this.dragging) {
                    this.dragging = !0;
                    var t = $(".slider-carousel.active .carousel-slide"),
                        i = $(".slider-carousel.active .carousel-slide.active"),
                        n = t.index(i),
                        s = t.index(i) - 1,
                        o = t.index(i) + 1;
                    0 > s && (s = t.length - 1), o > t.length - 1 && (o = 0), this.currentItem = t.eq(n), this.prevItem = t.eq(s), this.nextItem = t.eq(o);
                    var a = $(".slider-carousel.active .slider-dot-button"),
                        r = $(".slider-carousel.active .slider-dot-button.button-active");
                    a.index(r);
                    this.prevDotIndex = a.index(r) - 1, this.nextDotIndex = a.index(r) + 1, this.prevDotIndex < 0 && (this.prevDotIndex = a.length - 1), this.nextDotIndex > a.length - 1 && (this.nextDotIndex = 0), this.dots = a, vc.app.$body.hammer({
                        dragLockToAxis: !0,
                        dragBlockHorizontal: !0
                    }).on("dragleft." + this.cid, this.drag).on("dragright." + this.cid, this.drag).on("dragend." + this.cid, this.dragEnd), this.dragging = !1
                }
            },
            dragEnd: function(e) {
                this.killHammerEvents(e), this.dragPercent = 0, vc.app.$body.hammer().off("." + this.cid);
                var t = Math.abs(e.gesture.deltaX) / this.$el.width() * 100,
                    i = (t * Math.max(1, e.gesture.velocityX), e.gesture.direction === Hammer.DIRECTION_LEFT);
                i ? this.next() : this.prev()
            },
            next: function() {
                this.currentItem.addClass("slide-image-carousel-next");
                var e = this;
                setTimeout(function() {
                    e.nextItem.addClass("active"), e.currentItem.removeClass("active"), e.currentItem.removeClass("slide-image-carousel-next");
                    var t = $(".slider-carousel.active .slider-dot-button");
                    t.removeClass("button-active"), t.eq(e.nextDotIndex).addClass("button-active")
                }, 300)
            },
            prev: function() {
                this.currentItem.addClass("slide-image-carousel-prev");
                var e = this;
                setTimeout(function() {
                    e.prevItem.addClass("active"), e.currentItem.removeClass("active"), e.currentItem.removeClass("slide-image-carousel-prev");
                    var t = $(".slider-carousel.active .slider-dot-button");
                    t.removeClass("button-active"), t.eq(e.prevDotIndex).addClass("button-active")
                }, 300)
            },
            killHammerEvents: function(e) {
                e.preventDefault(), e.stopPropagation(), e.gesture && (e.gesture.stopPropagation(), e.gesture.preventDefault())
            }
        });
        new vc.SwipeCarousel
    }(),
    function() {
        "use strict";
        vc.Countdown = Backbone.View.extend({
            initialize: function() {
                var e, t = this.$el.find(".to"),
                    i = new Date(t.attr("data-countdown-to")),
                    n = t.find(".days .value"),
                    s = t.find(".hours .value"),
                    o = t.find(".minutes .value"),
                    a = t.find(".seconds .value"),
                    r = function() {
                        e = vc.timeDiff(i, new Date), n.html(vc.numberWithLeadingZeroes(e.days > 0 ? e.days : 0, 2)), s.html(vc.numberWithLeadingZeroes(e.days > 0 ? e.hours : 0, 2)), o.html(vc.numberWithLeadingZeroes(e.days > 0 ? e.minutes : 0, 2)), a.html(vc.numberWithLeadingZeroes(e.days > 0 ? e.seconds : 0, 2))
                    };
                r(), e.days > 0 ? setInterval(r, 1e3) : this.$el.hide()
            }
        })
    }(),
    function() {
        "use strict";
        vc.Background = Backbone.View.extend({
            minWidth: 1024,
            initialize: function() {
                vc.settings.dc || (vc.app.$window.on("resize." + this.cid, _.bind(this.setImageSize, this)), this.setImageSize())
            },
            setImageSize: function() {
                var e = this.$el.find("img");
                if (vc.app.$window.width() < this.minWidth) {
                    var t = this.minWidth - vc.app.$window.width(),
                        i = t / 2;
                    e.css({
                        width: this.minWidth,
                        "max-width": this.minWidth,
                        left: -i
                    })
                } else e.css({
                    width: "100%",
                    "max-width": "100%",
                    left: "0"
                })
            }
        })
    }(),
    function() {
        "use strict";
        vc.Pagination = Backbone.View.extend({
            initialize: function() {
                _.bindAll(this, "buttonClick"), this.listenTo(this.model, "change:numberOfPages", this.render), this.listenTo(this.model, "change:currentPageIndex", this.currentPageChanged)
            },
            events: {
                "click li .button": "buttonClick"
            },
            currentPageChanged: function(e, t) {
                this.$(".button").removeClass("button-active").eq(t).addClass("button-active")
            },
            buttonClick: function(e) {
                e.preventDefault();
                var t = this.$(".button").index(e.currentTarget);
                this.model.set("currentPageIndex", t)
            }
        })
    }(),
    function() {
        "use strict";
        vc.StoryCarouselItem = Backbone.View.extend({}), vc.mixin(vc.StoryCarouselItem.prototype, vc.ResponsiveVideo)
    }(),
    function() {
        "use strict";
        vc.StoryCarouselCarousel = vc.Carousel.extend({
            initialize: function() {
                vc.Carousel.prototype.initialize.apply(this, arguments), _.bindAll(this, "createItemView")
            },
            events: {
                "scroll-spy:half-mark": "halfVisible",
                "scroll-spy:enter-viewport": "enteredViewport",
                "scroll-spy:leave-viewport": "leftViewport"
            },
            halfVisible: function() {},
            enteredViewport: function() {
                Mousetrap.bind("right", this.next), Mousetrap.bind("left", this.prev)
            },
            leftViewport: function() {
                Mousetrap.unbind(["right", "left"])
            },
            createItemView: function(e, t) {
                var i = $(t),
                    n = this.collection.add({
                        id: i.attr("id")
                    }),
                    s = new vc.StoryCarouselItem({
                        el: t,
                        model: n
                    });
                n.view = s.render()
            },
            render: function() {
                return 1 === this.$("> li").length ? $(this.el).closest(".story-carousel").addClass("story-carousel-single") : this.$("> li").each(this.createItemView), this
            }
        }), vc.mixin(vc.StoryCarouselCarousel.prototype, vc.ScrollSpy)
    }(),
    function() {
        "use strict";
        vc.StoryCarouselButton = Backbone.View.extend({
            initialize: function(e) {
                this.router = e.router, this.listenTo(this.model, "change:active", this.activeChanged)
            },
            events: {
                click: "clicked"
            },
            activeChanged: function(e, t) {
                this.$el.toggleClass("button-active", t)
            },
            clicked: function(e) {
                e.preventDefault();
                var t = this.model.collection.id + "/" + this.model.id;
                this.router.navigate(t, {
                    trigger: !0
                })
            }
        })
    }(),
    function() {
        "use strict";
        vc.StoryCarousel = Backbone.View.extend({
            initialize: function() {
                _.bindAll(this, "createButtonsForItem", "createButton"), this.collection = new vc.CarouselItemCollection, this.collection.id = this.$el.attr("id"), this.listenTo(this.collection, "change:active", this.activeChanged), this.router = new vc.StoryCarouselRouter({
                    collection: this.collection
                })
            },
            createButtonsForAll: function() {
                this.collection.forEach(this.createButtonsForItem)
            },
            createButtonsForItem: function(e) {
                var t = this.collection.indexOf(e),
                    i = this.$buttons.find(".button").eq(t),
                    n = this.$dots.find(".button").eq(t);
                this.createButton(e, i), this.createButton(e, n)
            },
            createButton: function(e, t) {
                var i = new vc.StoryCarouselButton({
                    router: this.router,
                    model: e,
                    el: t
                });
                i.render()
            },
            render: function() {
                this.$buttons = this.$(".story-buttons"), this.$dots = this.$(".story-dots"), this.carousel = new vc.StoryCarouselCarousel({
                    el: this.$(".carousel"),
                    collection: this.collection
                }), this.carousel.render();
                var e = this.collection.first();
                return e && e.set({
                    active: !0
                }), this.createButtonsForAll(), this
            }
        })
    }(),
    function() {
        "use strict";
        vc.StoryStream = Backbone.View.extend({
            tmpl: templates["story-stream-item"],
            overlay: templates["story-stream-overlay"],
            initialize: function() {
                _.bindAll(this, "getTheme", "fetchData", "fetchSuccess", "fetchError", "renderStream"), this.collection = new vc.StoryStreamItemCollection, this.$storyStreamItems = this.$el.find(".story-stream-items"), this.storyName = this.$el.data("storyName"), this.isotopeSettings = {
                    percentPosition: !0,
                    itemSelector: ".story-stream-item",
                    layoutMode: "masonry"
                }, this.getTheme(), this.fetchData()
            },
            events: {
                "click .ss-overlay-show": "showOverlay"
            },
            getTheme: function() {
                this.$el.hasClass("theme-dark") ? this.theme = "theme-dark" : this.$el.hasClass("theme-white") ? this.theme = "theme-white" : this.theme = ""
            },
            fetchData: function(e) {
                this.collection.fetch({
                    storyName: this.storyName,
                    success: this.fetchSuccess,
                    error: this.fetchError
                })
            },
            fetchSuccess: function(e) {
                this.renderStream(e)
            },
            fetchError: function() {
                throw new Error("Could not fetch Story Stream items")
            },
            renderStream: function(e) {
                this.$storyStreamItems.empty(), this.$storyStreamItems.hide();
                for (var t = $("<div>"), i = 0, n = e.models.length; n > i; i++) {
                    var s = e.models[i].attributes.parsed;
                    t.append(this.tmpl.render(s))
                }
                this.$storyStreamItems.append(t.html());
                var o = _.clone(this);
                imagesLoaded(o.$storyStreamItems, function() {
                    o.$storyStreamItems.show(), o.$storyStreamItems.isotope(o.isotopeSettings)
                })
            },
            showOverlay: function(e) {
                e.preventDefault();
                var t = $(e.target),
                    i = t.parents(".story-stream-item"),
                    n = this.collection.get(i.data("modelId")),
                    s = new vc.StoryStream.Overlay({
                        model: n.attributes.parsed,
                        theme: this.theme
                    });
                vc.app.$mask.append(s.render().el)
            }
        })
    }(),
    function() {
        "use strict";
        vc.StoryStream.Overlay = vc.Overlay.extend({
            className: vc.Overlay.prototype.className + " story-stream-overlay-wrapper",
            tmpl: templates["story-stream-overlay"],
            initialize: function(e) {
                vc.Overlay.prototype.initialize.apply(this, arguments), _.bindAll(this, "setTheme", "render"), this.options = e, this.setTheme()
            },
            setTheme: function() {
                this.options && this.options.theme && this.$el.addClass(this.options.theme)
            },
            render: function() {
                return this.model && (this.$el.html(this.tmpl.render(this.model)), vc.app.trigger("mask:show"), this.listenToOnce(this, "overlay:enabled", this.centerOverlay())), this
            },
            centerOverlay: function() {
                var e = this;
                setTimeout(function() {
                    var t = e.$el,
                        i = $(window).height(),
                        n = t.height(),
                        s = i - n;
                    s > 0 ? t.css("top", s / 2) : t.css("top", "")
                }, 300)
            }
        })
    }(),
    function() {
        "use strict";
        vc.GalleryOverlayCarousel = vc.Carousel.extend({
            initialize: function() {
                vc.Carousel.prototype.initialize.apply(this, arguments), _.bindAll(this, "createImageForItem"), this.listenTo(this.collection, "change:zoom", this.itemZoomed)
            },
            itemZoomed: function(e, t) {
                t > 1 ? this.undelegateEvents() : this.delegateEvents()
            },
            activeItemChanged: function(e, t) {
                if (t) {
                    var i = this.collection.prevItem(),
                        n = this.collection.nextItem(),
                        s = [i, e, n];
                    _(s).each(this.createImageForItem)
                }
                vc.Carousel.prototype.activeItemChanged.call(this, e, t)
            },
            createImageForItem: function(e) {
                e.view || (e.view = new vc.GalleryOverlayImage({
                    model: e
                }), e.view.rootUrl = this.rootUrl, this.$el.append(e.view.render().el))
            }
        })
    }(),
    function() {
        "use strict";
        vc.GalleryOverlayThumbnail = Backbone.View.extend({
            tagName: "li",
            tmpl: templates["gallery-overlay-thumbnail"],
            initialize: function() {
                _.bindAll(this, "clicked"), this.listenTo(this.model, "change:active", this.activeChanged)
            },
            events: {
                "click a": "clicked"
            },
            clicked: function(e) {
                e.preventDefault();
                var t = (this.rootUrl || "gallery/") + this.model.collection.id;
                t += "/" + this.model.id, vc.galleryRouter.navigate(t, {
                    trigger: !0,
                    replace: !0
                })
            },
            activeChanged: function(e, t) {
                this.$el.toggleClass("active", t)
            },
            render: function() {
                return this.$el.html(this.tmpl.render(this.model.toJSON())), this
            }
        })
    }(),
    function() {
        "use strict";
        vc.GalleryOverlayImage = vc.CarouselItemView.extend({
            tagName: "img",
            maxZoom: 4,
            imageVersions: [480, 768, 1024, 2048, 4096],
            initialize: function() {
                vc.CarouselItemView.prototype.initialize.apply(this, arguments), _.bindAll(this, "determineSrc", "setSrc", "calculatePanBounds", "ensurePanBounds", "pinch", "pinchEnd", "pan", "panEnd", "toggleZoom"), this.x = this.y = 0, this.determineSrc = _.throttle(this.determineSrc, 300), this.calculatePanBounds = _.throttle(this.calculatePanBounds, 300), this.listenTo(this.model, "change:active", this.activeChanged), this.listenTo(vc.app, "resize", this.determineSrc)
            },
            activeChanged: function() {
                this.bindHammer()
            },
            bindHammer: function() {
                Modernizr.touch && $.support.transform && $.support.transition && (this.model.get("active") ? this.hammer().on("pinch." + this.cid, this.pinch).on("doubletap." + this.cid, this.toggleZoom) : this.hammer().off("." + this.cid))
            },
            determineSrc: function() {
                for (var e, t = window.devicePixelRatio || 1, i = this.$el.width() * t * this.model.attributes.zoom, n = 0; n < this.imageVersions.length && (e = this.imageVersions[n], !(e >= i)); n++);
                if (this.currentWidth !== e) {
                    this.currentWidth = e;
                    var s = this.model.get("src") + "?w=" + e;
                    this.downloadImage(s).then(this.setSrc)
                }
            },
            setSrc: function(e) {
                var t = this;
                t.$el.one("load", function() {
                    t.$el.trigger("src:set"), $(window).resize()
                }), this.el.src = e.src
            },
            toggleZoom: function(e) {
                this.killHammerEvents(e);
                var t = this.model.get("zoom") > 1 ? 1 : this.maxZoom;
                this.zoomToScale(t, !0), this.model.set({
                    zoom: t
                })
            },
            zoomToScale: function(e, t) {
                return e > 1 && !this.panAttached ? (this.panAttached = !0, this.hammer().on("drag.pan" + this.cid, this.pan).on("dragend.pan" + this.cid, this.panEnd)) : 1 === e && this.panAttached && (this.panAttached = !1, this.hammer().off(".pan" + this.cid)), t ? void $.when(this.$el.transition({
                    scale: e
                })).then(this.determineSrc).then(this.calculatePanBounds).then(this.ensurePanBounds) : (this.$el.css({
                    scale: e
                }), void this.determineSrc())
            },
            pinch: function(e) {
                this.killHammerEvents(e);
                var t = this.model.get("zoom");
                this.pinchScale = Math.min(this.maxZoom, Math.max(1, t * e.gesture.scale)), this.zoomToScale(this.pinchScale), this.pinching || (vc.app.$body.hammer().on("release." + this.cid, this.pinchEnd), this.pinching = !0)
            },
            pinchEnd: function(e) {
                this.killHammerEvents(e), this.pinching = !1, this.scale = this.pinchScale, vc.app.$body.hammer().off("release." + this.cid), this.model.set({
                    zoom: this.scale
                }), this.calculatePanBounds(), this.ensurePanBounds()
            },
            pan: function(e) {
                this.killHammerEvents(e);
                var t = this.model.attributes.zoom,
                    i = (e.gesture.deltaX + this.x) * t / this.$el.width() * 100,
                    n = (e.gesture.deltaY + this.y) * t / this.$el.height() * 100;
                this.$el.css({
                    x: i,
                    y: n
                })
            },
            panEnd: function(e) {
                this.killHammerEvents(e);
                var t = this.model.attributes.zoom;
                this.x = (e.gesture.deltaX + this.x) * t / this.$el.width() * 100, this.y = (e.gesture.deltaY + this.y) * t / this.$el.height() * 100, vc.app.$body.hammer().off("." + this.cid), this.ensurePanBounds()
            },
            calculatePanBounds: function() {
                var e = {
                    width: this.$el.width(),
                    height: this.$el.height()
                };
                this.maxX = (e.width - e.width / this.scale) / 2, this.maxY = (e.height - e.height / this.scale) / 2
            },
            ensurePanBounds: function() {
                this.x > this.maxX ? this.x = this.maxX : this.x < -this.maxX && (this.x = -this.maxX), this.y > this.maxY ? this.y = this.maxY : this.y < -this.maxY && (this.y = -this.maxY), this.$el.transition({
                    x: this.x,
                    y: this.y
                })
            },
            render: function() {
                return this.$el.toggleClass("active", this.model.get("active")), this.bindHammer(), _.defer(this.determineSrc), this
            }
        }), vc.mixin(vc.GalleryOverlayImage.prototype, vc.PreloadImages, vc.HammerView)
    }(),
    function() {
        "use strict";
        var e = 16 / 9;
        vc.GalleryOverlay = vc.Overlay.extend({
            className: vc.Overlay.prototype.className + " gallery-overlay",
            tmpl: templates["gallery-overlay"],
            thumbnailWidth: 92,
            thumbnailsHeight: 58,
            padding: 42,
            scrollTop: 0,
            scrollLeft: 0,
            initialize: function() {
                vc.Overlay.prototype.initialize.apply(this, arguments), _.bindAll(this, "itemAdded", "setSize", "next", "prev"), this.listenTo(this.collection, "add", this.itemAdded), this.listenTo(this.collection, "reset", this.itemsReset), this.listenTo(this.collection, "change:active", this.activeItemChanged), this.listenTo(vc.app, "resize", this.setSize), this.pinching = !1
            },
            events: _.extend({}, _.result(vc.Overlay.prototype, "events"), {
                "click .prev": "prev",
                "click .next": "next",
                "src:set": "onSrcSet"
            }),
            keyboardEvents: _.extend({}, _.result(vc.Overlay.prototype, "keyboardEvents"), {
                left: "prev",
                right: "next"
            }),
            setSize: function() {
                if (this.carousel) {
                    var t, i, n, s = vc.app.$window.width() / vc.app.$window.height();
                    s > e ? (t = vc.app.$window.height(), i = t * e - this.thumbnailsHeight - this.padding) : (i = vc.app.$window.width(), t = i / e + this.thumbnailsHeight + this.padding), n = (vc.app.$window.height() - t) / 2, 0 > n && (i -= t - vc.app.$window.height(), t = vc.app.$window.height(), n = 0), this.$el.css({
                        height: t,
                        width: i,
                        top: n
                    }), this.alignArrows()
                }
            },
            alignArrows: function() {
                var e = this.$arrows.outerHeight(),
                    t = this.$arrows.find("i");
                t.css({
                    top: (e - t.height()) / 2
                })
            },
            itemAdded: function(e) {
                var t = new vc.GalleryOverlayThumbnail({
                    model: e
                });
                t.rootUrl = this.rootUrl, this.$thumbnails.append(t.render().el)
            },
            itemsReset: function(e) {
                this.$thumbnails.empty(), this.$thumbnails.css({
                    width: this.thumbnailWidth * e.length
                }), e.each(this.itemAdded)
            },
            activeItemChanged: function(e, t) {
                if (t) {
                    var i = this.collection.indexOf(e),
                        n = this.thumbnailWidth * (i + 1),
                        s = this.$thumbnailsScroller.width(),
                        o = this.$thumbnailsScroller.scrollLeft();
                    n > o + s ? this.$thumbnailsScroller.animate({
                        scrollLeft: n + this.thumbnailWidth / 2 - s
                    }) : n - this.thumbnailWidth < o && this.$thumbnailsScroller.animate({
                        scrollLeft: n - 1.5 * this.thumbnailWidth
                    })
                }
            },
            next: function(e) {
                e && e.preventDefault();
                var t = this.collection.nextItem(),
                    i = (this.rootUrl || "gallery/") + this.collection.id + "/" + t.id;
                vc.galleryRouter.navigate(i, {
                    trigger: !0,
                    replace: !0
                })
            },
            prev: function(e) {
                e && e.preventDefault();
                var t = this.collection.prevItem(),
                    i = (this.rootUrl || "gallery/") + this.collection.id + "/" + t.id;
                vc.galleryRouter.navigate(i, {
                    trigger: !0,
                    replace: !0
                })
            },
            remove: function() {
                vc.galleryRouter.navigate("", {
                    trigger: !0
                }), vc.Overlay.prototype.remove.call(this), $(window).scrollTop(this.scrollTop), $(window).scrollLeft(this.scrollLeft)
            },
            render: function() {
                return vc.Overlay.prototype.render.call(this), this.scrollTop = $(window).scrollTop(), this.scrollLeft = $(window).scrollLeft(), this.carousel = new vc.GalleryOverlayCarousel({
                    collection: this.collection,
                    el: this.$(".carousel")
                }).render(), this.$thumbnailsScroller = this.$(".thumbnails-scroller"), this.$thumbnails = this.$(".thumbnails"), this.$detail = this.$(".detail"), this.$arrows = this.$(".prev, .next"), _.defer(this.setSize), this
            },
            onSrcSet: function() {
                this.alignArrows()
            }
        }), vc.mixin(vc.GalleryOverlay.prototype, vc.ElementFillContainer, vc.PreloadImages)
    }(),
    function() {
        "use strict";
        vc.GalleryTabsOverlay = vc.GalleryOverlay.extend({
            events: _.extend({}, _.result(vc.GalleryOverlay.prototype, "events"), {
                "click a[data-gallery-id]": "switchGallery"
            }),
            switchGallery: function(e) {
                e.preventDefault();
                var t = $(e.currentTarget).data("gallery-id"),
                    i = "galleries/" + this.collection.id + "/" + t;
                vc.galleryRouter.navigate(i, {
                    trigger: !0
                })
            },
            render: function() {
                vc.GalleryOverlay.prototype.render.call(this);
                var e = this,
                    t = $('<div class="gallery-tabs-buttons-container"></div>'),
                    i = $('<ul class="gallery-tabs-buttons clearfix"></ul>'),
                    n = "button button-opaque button-light button-small";
                return this.tabs.models.forEach(function(t) {
                    i.append(templates["gallery-tabs-buttons"].render(_.extend({
                        classes: e.collection.id === t.get("id") ? n + " button-active" : n
                    }, t.attributes)))
                }), t.append(i), this.$el.prepend(t), this
            }
        })
    }(),
    function() {
        "use strict";
        vc.Gallery = Backbone.View.extend({
            initialize: function() {
                _.bindAll(this, "openGallery"), vc.galleryRouter || (vc.galleryRouter = new vc.GalleryRouter)
            },
            events: {
                "click .trigger-gallery": "openGallery"
            },
            openGallery: function(e) {
                if (e.preventDefault(), !vc.app.isPageEditor) {
                    var t = this.$el.data("gallery-id"),
                        i = $(e.currentTarget),
                        n = i.data("item-id"),
                        s = "gallery/" + t;
                    n && (s += "/" + n), vc.galleryRouter.navigate(s, {
                        trigger: !0
                    })
                }
            }
        })
    }(),
    function() {
        "use strict";
        vc.GalleryTabs = Backbone.View.extend({
            initialize: function() {
                vc.galleryRouter || (vc.galleryRouter = new vc.GalleryRouter), this.tabs = this.$el.find(".gallery-tab"), this.activeTab = this.tabs.eq(0), this.activeTab.addClass("active")
            },
            events: {
                "click .trigger-gallery": "openGallery",
                "click a[data-gallery-tab-id]": "switchGallery"
            },
            openGallery: function(e) {
                if (e.preventDefault(), !vc.app.isPageEditor) {
                    var t = this.$el.data("galleries-id"),
                        i = $(e.currentTarget),
                        n = i.data("gallery-id"),
                        s = i.data("item-id"),
                        o = "galleries/" + t;
                    n && (o += "/" + n), s && (o += "/" + s), vc.galleryRouter.navigate(o, {
                        trigger: !0
                    })
                }
            },
            switchGallery: function(e) {
                var t = e.currentTarget.attributes["data-gallery-tab-id"].value;
                this.galleryId = t, $("[data-gallery-tab-id]").each(function(e, i) {
                    t === i.attributes["data-gallery-tab-id"].value ? $(i).addClass("button-active") : $(i).removeClass("button-active")
                }), this.activeTab.removeClass("active"), this.activeTab = this.$el.find('[data-gallery-id="' + t + '"]'), this.activeTab.addClass("active")
            }
        })
    }(),
    function() {
        "use strict";
        vc.GalleryGrid = Backbone.View.extend({
            initialize: function() {
                function e() {
                    function e(e) {
                        var t = n(".mobile-grid li:last-child");
                        l && (t = n(".mobile-grid ." + e + " li:last-child")), "list-item" === t.css("display") && n(".mobile-moreButton").fadeOut("slow")
                    }

                    function t(e) {
                        $(a + ".gallery-set .column[data-type=" + e + "]").find("li").clone().appendTo(a + "." + e + " ul"), e || $(a + ".gallery-set .column").find("li").clone().appendTo(a + ".noCat ul")
                    }
                    var i = "";
                    if (0 === n(".mobile-grid > div").length && (l ? $.each(r, function(e) {
                            var s = r[e].getAttribute("data-tab");
                            i = '<div class="' + s + '"><ul></ul></div>', n(".mobile-grid").append(i), t(s)
                        }) : (i = '<div class="noCat"><ul></ul></div>', n(".mobile-grid").append(i), t())), n(".gallery-set").remove(), l) {
                        var s = n(".gallery-tabs-buttons li:first-child a");
                        n(".mobile-grid div").hide(), n(".mobile-grid div." + s[0].getAttribute("data-tab")).show(), s.addClass("button-active"), n(".mobile-grid ." + s[0].getAttribute("data-tab") + " li").hide(), n(".mobile-grid ." + s[0].getAttribute("data-tab") + " li:lt(4)").show(), n(".gallery-tabs-buttons a").click(function(e) {
                            e.preventDefault(), n(".mobile-moreButton").show(), s = $(this), n(".gallery-tabs-buttons li a").removeClass("button-active"), s.addClass("button-active"), n(".mobile-grid div").hide(), n(".mobile-grid div." + s[0].getAttribute("data-tab")).show(), n(".mobile-grid ." + s[0].getAttribute("data-tab") + " li").hide(), n(".mobile-grid ." + s[0].getAttribute("data-tab") + " li:lt(4)").show()
                        })
                    } else n(".mobile-grid li").hide(), n(".mobile-grid li:lt(4)").show();
                    n(".moreButton").click(function(t) {
                        l ? (n(".mobile-grid ." + s[0].getAttribute("data-tab") + " li:not(:visible):lt(3)").fadeIn("slow", function() {}), e(s[0].getAttribute("data-tab"))) : (n(".mobile-grid li:not(:visible):lt(3)").fadeIn("slow", function() {}), e()), t.preventDefault()
                    })
                }

                function t() {
                    var e, t = this.owl.currentItem,
                        i = n(".gallery-tabs-buttons li:first-child a");
                    $.each(r, function(s) {
                        i = r[s].getAttribute("data-tab"), e = n(".gallery-set .column[data-type=" + i + "]").first().parents(".owl-item").index(), t >= e && ($(r).removeClass("button-active"), n(".gallery-tabs-buttons li a[data-tab=" + i + "]").addClass("button-active"))
                    })
                }

                function i() {
                    function e() {
                        var e;
                        r.click(function(t) {
                            var i = n(".gallery-tabs-buttons li:first-child a");
                            i = $(this), e = n(".gallery-set .column[data-type=" + i[0].getAttribute("data-tab") + "]").first().parents(".owl-item").index(), r.removeClass("button-active"), i.addClass("button-active"), s.goTo(e), t.preventDefault()
                        })
                    }

                    function t() {
                        "block" === i.css("display") ? (l && (n(".gallery-tabs-buttons-container").css("display", "block"), e()), n(".grid-angle").removeClass("hide")) : (n(".gallery-tabs-buttons-container").css("display", "none"), n(".grid-angle").addClass("hide")), n(".gallery-set").length > 0 ? n(".mobile-moreButton").hide() : n(".mobile-moreButton").show()
                    }
                    var i = n(".owl-controls");
                    t(), $(window).on("resize", function() {
                        window.resizeEvt, $(window).resize(function() {
                            clearTimeout(window.resizeEvt), window.resizeEvt = setTimeout(function() {
                                t()
                            }, 250)
                        })
                    })
                }

                function n(e) {
                    return $(a + e)
                }
                var s, o = this,
                    a = "#" + o.el.id + " ",
                    r = n(".gallery-tabs-buttons li a"),
                    l = r.length > 0,
                    c = n(".gallery-set"),
                    d = {
                        items: 4,
                        itemsCustom: !1,
                        itemsDesktop: [1199, 4],
                        itemsDesktopSmall: [980, 3],
                        itemsTablet: [768, 2],
                        itemsTabletSmall: [568, 4],
                        slideSpeed: 400,
                        paginationSpeed: 400,
                        rewindSpeed: 400,
                        navigation: !1,
                        rewindNav: !0,
                        scrollPerPage: !0,
                        afterInit: i,
                        afterAction: t,
                        pagination: !0,
                        paginationNumbers: !1,
                        responsive: !0,
                        responsiveRefreshRate: 200,
                        responsiveBaseWidth: window,
                        baseClass: "owl-carousel",
                        addClassActive: !1
                    },
                    h = document.location.href.split("#")[1];
                void 0 !== h && $("a[name]").parent().addClass("anchore-active"), window.matchMedia("(max-width: 767px) and (orientation: landscape), (max-height: 767px) and (orientation: portrait)").matches ? e() : (c.owlCarousel(d), s = n(".owl-carousel").data("owlCarousel")), n(".next").on("click", function() {
                    c.trigger("owl.next")
                }), n(".prev").on("click", function() {
                    c.trigger("owl.prev")
                }), $(window).on("resize", function() {
                    $(".mfp-wrap .mfp-video").length > 0 && o.videoRatio(), $(".image-map .hotspot").length > 0 && o.appendHotspots()
                })
            },
            player: null,
            mfpEventOpen: !1,
            mfpCurrentElement: 0,
            mfpTotalElements: 0,
            render: function() {
                var e, t = this,
                    i = "#" + t.el.id + " ";
                e = $(i + ".trigger-gallery");
                var n, s, o, a, r, l, c, d = [],
                    h = [];
                e.each(function(t) {
                    if (n = e[t].getAttribute("data-item-id"), s = e[t].getAttribute("data-item-type"), o = e[t].getAttribute("data-item-src"), a = e[t].getAttribute("data-item-mp4"), r = e[t].getAttribute("data-item-webm"), l = e[t].getAttribute("data-externalsrc"), c = e[t].getAttribute("data-ssenable"), "image" === s) {
                        var i = e[t].getAttribute("data-item-hashotspots");
                        if (i)
                            for (var p = $(e[t]).find(".hotspots span"), b = 0, v = 0, u = "", f = "", m = 0; m < Number(p.length); m++) b = p[m].getAttribute("data-item-hotspotX"), v = p[m].getAttribute("data-item-hotspotY"), u = p[m].getAttribute("data-item-hotspotTitle"), f = p[m].innerHTML, 0 === m ? h[t] = '<a class="hotspot" style="left:' + b + "%;top:" + v + '%" data-title="' + u + '" data-content="' + f + '">i</a>' : h[t] += '<a class="hotspot" style="left:' + b + "%;top:" + v + '%" data-title="' + u + '" data-content="' + f + '">i</a>';
                        d.push({
                            src: o
                        })
                    } else if ("video" === s)
                        if (l.length > 0) {
                            if (1 == c) var g = '<div class="mfp-video mfp-ext-video"><img class="imgposter" src="' + o + '" /><iframe id="' + n + '" class="js-GalleryGrid-videoIframe video-active" data-src="' + l + '" src="" frameborder="0" allowtransparency="true" allowfullscreen></iframe><div class="mfp-counter"><div class="mfp-contpage"><span class="current-item">%curr%</span> / <span class="total-items">%total%</span></div> <ul class="hero-social social"><li><a href="#" class="social-sharelink" onclick="onGallerygridFbShare();return false"><i class="icon icon-facebook"></i><span>Share</span></a></li><li><a href="#" class="social-sharelink" onclick="onGallerygridTwitterShare();return false"><i class="icon icon-twitter"></i><span>Tweet</span></a></li><li><a href="#" class="social-sharelink" onclick="GallerygridsendEmail();return false"><i class="icon icon-email"></i><span>Email</span></a></li></ul></div></div><div class="mfp-close icon-close"></div>';
                            else var g = '<div class="mfp-video mfp-ext-video"><img class="imgposter" src="' + o + '" /><iframe id="' + n + '" class="js-GalleryGrid-videoIframe video-active" data-src="' + l + '" src="" frameborder="0" allowtransparency="true" allowfullscreen></iframe><div class="mfp-counter"><div class="mfp-contpage"><span class="current-item">%curr%</span> / <span class="total-items">%total%</span></div></div></div><div class="mfp-close icon-close"></div>';
                            d.push({
                                src: g,
                                type: "inline"
                            })
                        } else o = 1 == c ? '<div class="mfp-video"><video id="' + n + '" class="mediaelement" width="100%" height="100%" poster="' + o + '" controls preload="none"><source type="video/mp4" src="' + a + '" /><source type="video/webm" src="' + r + '" /><object width="100%" height="100%" style="width:100%; height:100%;" type="application/x-shockwave-flash" data="/Static/mediaelement/flashmediaelement.swf"><param name="movie" value="/Static/mediaelement/flashmediaelement.swf" /><param name="flashvars" value="controls=true&amp;file=' + a + '" /><img src="' + o + '" width="100%" height="100%" style="width:100%; height:100%;" alt="No video playback capabilities" /></object></video><div class="mfp-counter"><div class="mfp-contpage"><span class="current-item">%curr%</span> / <span class="total-items">%total%</span></div> <ul class="hero-social social"><li><a href="#" class="social-sharelink" onclick="onGallerygridFbShare();return false"><i class="icon icon-facebook"></i><span>Share</span></a></li><li><a href="#" class="social-sharelink" onclick="onGallerygridTwitterShare();return false"><i class="icon icon-twitter"></i><span>Tweet</span></a></li><li><a href="#" class="social-sharelink" onclick="GallerygridsendEmail();return false"><i class="icon icon-email"></i><span>Email</span></a></li></ul></div></div><div class="mfp-close icon-close"></div>' : '<div class="mfp-video"><video id="' + n + '" class="mediaelement" width="100%" height="100%" poster="' + o + '" controls preload="none"><source type="video/mp4" src="' + a + '" /><source type="video/webm" src="' + r + '" /><object width="100%" height="100%" style="width:100%; height:100%;" type="application/x-shockwave-flash" data="/Static/mediaelement/flashmediaelement.swf"><param name="movie" value="/Static/mediaelement/flashmediaelement.swf" /><param name="flashvars" value="controls=true&amp;file=' + a + '" /><img src="' + o + '" width="100%" height="100%" style="width:100%; height:100%;" alt="No video playback capabilities" /></object></video><div class="mfp-counter"><div class="mfp-contpage"><span class="current-item">%curr%</span> / <span class="total-items">%total%</span></div></div></div><div class="mfp-close icon-close"></div>', d.push({
                            src: o,
                            type: "inline"
                        })
                });
                var p;
                $(i + ".trigger-gallery").first().trigger("click"), $(i + ".trigger-gallery").on("click", function(e) {
                    e.preventDefault(), e.stopPropagation();
                    var n = this;
                    p = 0, $(i + ".trigger-gallery").each(function() {
                        return this === n ? !1 : void p++
                    });
                    var s = "";
                    s = 1 == c ? '<div class="mfp-counter"><div class="mfp-contpage"><span>%curr%</span> / %total%</div><ul class="hero-social social"><li><a href="#" class="social-sharelink" onclick="onGallerygridFbShare();return false"><i class="icon icon-facebook"></i><span>Share</span></a></li><li><a href="#" class="social-sharelink" onclick="onGallerygridTwitterShare();return false"><i class="icon icon-twitter"></i><span>Tweet</span></a></li><li><a href="#" class="social-sharelink" onclick="GallerygridsendEmail();return false"><i class="icon icon-email"></i><span>Email</span></a></li></ul></div>' : '<div class="mfp-counter"><div class="mfp-contpage"><span>%curr%</span> / %total%</div></div>', $.magnificPopup.open({
                        key: "grid-popup",
                        items: d,
                        gallery: {
                            enabled: !0,
                            preload: [0, 2],
                            arrowMarkup: '<div title="%title%" class="icon icon-angle-%dir% arrow"></div>',
                            tCounter: s
                        },
                        type: "image",
                        image: {
                            markup: '<div class="mfp-figure"><figure><div class="image-map"></div><img class="mfp-img"><figcaption><div class="mfp-bottom-bar"><div class="mfp-counter"></div></div></figcaption></figure></div><div class="mfp-close icon icon-close"></div>',
                            verticalFit: !0
                        },
                        closeOnContentClick: !1,
                        closeOnBgClick: !0,
                        callbacks: {
                            open: function() {
                                function e() {
                                    var e = window.navigator.userAgent,
                                        t = e.indexOf("MSIE");
                                    return t > 0 ? parseInt(e.substring(t + 5, e.indexOf(".", t))) : navigator.userAgent.match(/Trident\/7\./) ? 11 : 0
                                }
                                $("html").addClass("gmg-magnific-active"), t.mfpEventOpen = !0;
                                var i = $.magnificPopup.instance;
                                i.goTo(p);
                                var n = Boolean($.fn.mfpFastClick),
                                    s = n ? "mfpFastClick" : "click",
                                    o = this;
                                o.isIOS && (console.log("iOS"), $(".mfp-gallery .arrow").off("click"), $(".mfp-gallery .arrow").off("mfpFastClick"), $(".mfp-gallery .icon-angle-left").on(s, function() {
                                    return o.prev(), !1
                                }), $(".mfp-gallery .icon-angle-right").on(s, function() {
                                    return o.next(), !1
                                })), e() > 0 || $(".mfp-container").swipe({
                                    swipe: function(e, t) {
                                        switch (t) {
                                            case "left":
                                                i.next();
                                                break;
                                            case "right":
                                                i.prev();
                                                break;
                                            case "down":
                                                $(".mfp-content").fadeOut(300, function() {
                                                    i.close()
                                                });
                                                break;
                                            case "up":
                                                $(".mfp-content").fadeOut(300, function() {
                                                    i.close()
                                                })
                                        }
                                    }
                                })
                            },
                            afterChange: function() {
                                console.log("Change"), t.removeHotspots(), t.seekVideo[$.magnificPopup.instance.index] = !1, t.videoReady[$.magnificPopup.instance.index] = !1, $(".mfp-wrap .mfp-video").length > 0 && ($(".mfp-wrap .mfp-video .video-active").length > 0 ? (t.mfpEventOpen || $("iframe").css("height", "0"), t.AssignPageIndex($("iframe").attr("id"), t.mfpEventOpen), $(".mfp-video").on("click", function(e) {
                                    e.preventDefault();
                                    var t = $(e.currentTarget),
                                        i = $(t).find("iframe"),
                                        n = .95 * $(".mfp-wrap .mfp-video").height();
                                    i.css("height", n);
                                    var s = $(".mfp-video"),
                                        o = i.data("src");
                                    i.attr("src", o + "&autoplay=1"), s.addClass("videoGridWrapperActive")
                                })) : t.initGridVideo($("video").attr("id"), t.mfpEventOpen)), t.mfpEventOpen = !1
                            },
                            imageLoadComplete: function() {
                                $(".mfp-image-holder").length > 0 && t.appendHotspots(h[$.magnificPopup.instance.index])
                            },
                            close: function() {
                                $("html").removeClass("gmg-magnific-active"), t.savedPositions = [], t.seekVideo = [], t.videoReady = []
                            }
                        }
                    })
                })
            },
            AssignPageIndex: function(e, t) {
                if (t) {
                    var i = $(".mfp-video"),
                        n = $("#" + e),
                        s = n.data("src");
                    n.attr("src", s + "&autoplay=1"), i.addClass("videoGridWrapperActive")
                }
                var o = this,
                    a = $.magnificPopup.instance,
                    r = a.currItem.index + 1,
                    l = a.items.length;
                if ($(".mfp-video .mfp-counter .mfp-contpage > .current-item").html(r), $(".mfp-video .mfp-counter .mfp-contpage > .total-items").html(l), o.videoRatio(), t) {
                    var c = $("#" + e),
                        d = .95 * $(".mfp-wrap .mfp-video").height();
                    c.css("height", d)
                }
            },
            appendHotspots: function(e) {
                function t() {
                    var e = $(".mfp-image-holder .mfp-content"),
                        t = $(".mfp-image-holder figure .image-map");
                    t.innerHeight(e.innerHeight() - 90), t.innerWidth(e.innerWidth()), clearInterval(n)
                }
                var i = this;
                $(".image-map .hotspot").length > 0 && void 0 !== e && i.removeHotspots();
                var n;
                $(".image-map .hotspot").length > 0 && void 0 === e ? n = setInterval(t, 300) : t(), void 0 !== e && $(".mfp-content .image-map").append(e), $("a.hotspot").webuiPopover({
                    placement: "auto",
                    width: "auto",
                    height: "auto",
                    trigger: "click",
                    animation: "pop",
                    arrow: !0,
                    title: "",
                    content: "",
                    closeable: !1,
                    padding: !0,
                    type: "html",
                    backdrop: !0,
                    dismissible: !0
                })
            },
            removeHotspots: function() {
                console.log("removing"), $(".image-map .hotspot").remove(), $(".webui-popover-backdrop").hide(), $(".webui-popover").hide()
            },
            savedPositions: [],
            seekVideo: [],
            videoReady: [],
            initGridVideo: function(e, t) {
                var i = this,
                    n = t;
                if ($.each($.magnificPopup.instance.items, function(e) {
                        i.videoReady[e] = !1, i.seekVideo[e] = !1
                    }), mejs) {
                    var s = _.keys(mejs.players);
                    _.each(s, function(e) {
                        mejs.players[e].container && mejs.players[e].remove()
                    })
                }
                i.player = new MediaElementPlayer("#" + e, {
                    success: function(e, t) {
                        e.addEventListener("ended", function() {}, !1), e.addEventListener("loadedmetadata", function() {
                            void 0 !== i.savedPositions[$.magnificPopup.instance.index] && (i.videoReady[$.magnificPopup.instance.index] = !0)
                        }, !1), e.addEventListener("canplay", function() {}, !1), e.addEventListener("timeupdate", function() {
                            i.seekVideo[$.magnificPopup.instance.index] && (i.savedPositions[$.magnificPopup.instance.index] = Math.round(e.currentTime), console.log("seeking video[" + $.magnificPopup.instance.index + "] (" + i.seekVideo[$.magnificPopup.instance.index] + "): " + e.currentTime))
                        }, !1)
                    },
                    enablePluginDebug: !1,
                    plugins: ["flash", "silverlight", "youtube", "vimeo"],
                    type: "",
                    pluginPath: "/Static/mediaelement/",
                    flashName: "flashmediaelement.swf",
                    silverlightName: "silverlightmediaelement.xap",
                    defaultVideoWidth: 480,
                    defaultVideoHeight: 270,
                    videoWidth: -1,
                    videoHeight: -1,
                    pluginWidth: -1,
                    pluginHeight: -1,
                    audioWidth: 400,
                    audioHeight: 30,
                    startVolume: .5,
                    loop: !1,
                    enableAutosize: !0,
                    timerRate: 250,
                    features: ["progress", "socialshare", "volume", "fullscreen", "tracks"],
                    alwaysShowControls: !1,
                    iPadUseNativeControls: !0,
                    iPhoneUseNativeControls: !0,
                    AndroidUseNativeControls: !0,
                    alwaysShowHours: !1,
                    showTimecodeFrameCount: !1,
                    framesPerSecond: 25,
                    enableKeyboard: !0,
                    pauseOtherPlayers: !0,
                    keyActions: []
                });
                var o, a = $.magnificPopup.instance,
                    r = a.currItem.index + 1,
                    l = a.items.length;
                if ($(".mfp-video .mfp-counter .mfp-contpage > .current-item").html(r), $(".mfp-video .mfp-counter .mfp-contpage > .total-items").html(l), i.videoRatio(), n) i.player.play(), i.seekVideo[$.magnificPopup.instance.index] = !0;
                else if (void 0 !== i.savedPositions[$.magnificPopup.instance.index]) $(".mejs-mediaelement video, .mejs-mediaelement .mejs-poster").attr("visibility", "hidden"), i.player.play(), o = setInterval(function() {
                    i.videoReady[$.magnificPopup.instance.index] && (i.player.setCurrentTime(i.savedPositions[$.magnificPopup.instance.index]), i.player.pause(), i.seekVideo[$.magnificPopup.instance.index] = !0, i.videoReady[$.magnificPopup.instance.index] = !1, $(".mejs-mediaelement video, , .mejs-mediaelement .mejs-poster").attr("visibility", "visible"), clearInterval(o))
                }, 100);
                else var c = setInterval(function() {
                    i.seekVideo[$.magnificPopup.instance.index] = !0, clearInterval(c)
                }, 1e3)
            },
            videoRatio: function() {
                var e = $(window).innerHeight(),
                    t = $(window).innerWidth(),
                    i = e / t;
                if (.5625 > i) {
                    var n = e - 80,
                        s = 1.7777 * n;
                    $(".mfp-video").innerWidth(s), $(".mfp-video").innerHeight(n)
                } else {
                    var o = t - 132,
                        a = .5625 * o;
                    $(".mfp-video").innerHeight(a), $(".mfp-video").innerWidth(o)
                }
            },
            checkTabs: function(e, t) {
                var i = ".column li." + e;
                if ($(i).length > 0) {
                    var n = $(i).first().parents(".owl-item").index(),
                        s = "." + e + "-button";
                    return $(s).click(function() {
                        t.goTo(n)
                    }), !0
                }
                return !1
            }
        })
    }(), /*window.fbAsyncInit = function() {
        null == _FbAppId && (_FbAppId = "1");
        var e = _FbAppId;
        FB.init({
            appId: e,
            cookie: !0,
            xfbml: !0,
            version: "v2.5"
        })
    },
    function(e, t, i) {
        var n, s = e.getElementsByTagName(t)[0];
        e.getElementById(i) || (n = e.createElement(t), n.id = i, n.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.0", s.parentNode.insertBefore(n, s))
    }(document, "script", "facebook-jssdk"),
	*/
    function() {
        "use strict";
        vc.TwoCols = Backbone.View.extend({
            initialize: function() {}
        })
    }(),
    function() {
        "use strict";
        vc.StoryGrid = Backbone.View.extend({
            events: {
                "click .js-storyGrid-videoWrapper": "showVideoOverlay"
            },
            showVideoOverlay: function(e) {
                var t = $(e.currentTarget),
                    i = $(t).find("iframe").clone(),
                    n = i.data("src");
                i.addClass("video-active");
                var s = '<div class="overlay-close YouTubeVideo-overlay-close icon icon-close" style="display: block;"></div>';
                i.attr("src", n + "&autoplay=1"), vc.app.$mask.append(s), vc.app.$mask.append(i), vc.app.trigger("mask:show")
            },
            render: function() {
                return this.$(".video-grid-item").each(function(e, t) {
                    var i = new vc.VideoStoryGridItem({
                        el: t
                    });
                    i.render()
                }), this
            }
        }), vc.VideoStoryGridItem = Backbone.View.extend({
            videoStartedPlaying: function() {
                vc.ResponsiveVideo.videoStartedPlaying.apply(this, arguments), _.defer(_.bind(function() {
                    this.$bgVideo.toggleClass("playing"), this.$bgImg.toggleClass("hide-img")
                }, this))
            },
            render: function() {
                this.$bgImg = this.$("img"), this.hasVideo() && this.createVideo()
            }
        }), vc.mixin(vc.VideoStoryGridItem.prototype, vc.ResponsiveVideo)
    }(),
    function() {
        "use strict";
        vc.Dropdown = Backbone.View.extend({
            initialize: function() {
                _.bindAll(this, "dropdownToggle", "dropdownClose", "dropdownItem", "detectMobile", "clicked", "resetDropdown", "disableDropdown", "enableDropdown"), this.$dropdown = this.$el.children(".dropdown"), this.$dropdownActive = this.$el.children(".dropdown-active-item"), this.$dropdownFallback = this.$el.children(".dropdown-fallback"), this.detectMobile()
            },
            events: {
                "click .dropdown-active-item, .dropdown-angle": "dropdownToggle",
                "click .dropdown a": "dropdownItem"
            },
            clicked: function(e) {
                e.preventDefault();
                var t = this.$dropdownActive;
                t.is(e.target) || 0 !== t.has(e.target).length || this.dropdownClose()
            },
            detectMobile: function() {
                vc.app.isMobile() && this.$el.addClass("mobile")
            },
            dropdownToggle: function(e) {
                e.preventDefault(), e.stopPropagation(), this.$el.hasClass("disabled") || (this.$el.hasClass("active") ? this.dropdownClose() : (this.$el.addClass("active"), vc.app.$body.on("click." + this.cid, this.clicked)))
            },
            dropdownClose: function() {
                this.$el.removeClass("active"), vc.app.$body.off("." + this.cid)
            },
            dropdownItem: function(e) {
                var t = $(e.currentTarget),
                    i = t.data("dropdown"),
                    n = t.html();
                this.$dropdownActive.html(n), this.$dropdownActive.data("dropdownActive", i), this.$dropdownFallback.children("option").removeProp("selected").removeAttr("selected"), this.$dropdownFallback.children('option[value="' + i + '"]').prop("selected", !0).attr("selected", "selected"), this.$dropdownFallback.trigger("change"), this.$el.removeClass("active")
            },
            resetDropdown: function() {
                var e = this.$dropdownFallback.data("defaultLabel");
                this.$dropdown.empty(), this.$dropdownFallback.empty(), this.$dropdownActive.data("dropdownActive", e), this.$dropdownActive.html(e), this.$dropdownFallback.append($("<option></option>").val(e).html(e).attr({
                    selected: "selected",
                    disabled: "disabled"
                }))
            },
            disableDropdown: function() {
                this.$el.addClass("disabled"), this.$dropdownFallback.prop("disabled", "disabled")
            },
            enableDropdown: function() {
                this.$el.removeClass("disabled"), this.$dropdownFallback.prop("disabled", !1)
            }
        })
    }(),
    function() {
        "use strict";
        vc.CarConfig = Backbone.View.extend({
            initialize: function() {
                this.offset = 50, this.$html = $("html"), this.$html.addClass("is-car-config")
            }
        })
    }(),
    function() {
        "use strict";
        vc.Video = Backbone.View.extend({
            initialize: function(e) {
                _.bindAll(this, "loadPlayer"), this.options = e;
                var t = this.options.element || this.$el;
                this.$mediaelement = t.find(".mediaelement"), this.$mediaelementId = this.$mediaelement.attr("id"), "undefined" != typeof this.$mediaelementId && this.loadPlayer(this.$mediaelementId)
            },
            events: {
                "click .mejs-overlay-play": "togglePlayer",
                "click .js-videoWrapper": "startvideo"
            },
            startvideo: function(e) {
                e.preventDefault();
                var t = $(".js-videoWrapper"),
                    i = $("#Iframeyoutube"),
                    n = i.data("src");
                i.attr("src", n + "&autoplay=1"), t.addClass("videoWrapperActive")
            },
            loadPlayer: function(e) {
                this.player = new MediaElementPlayer("#" + e, {
                    enablePluginDebug: !1,
                    plugins: ["flash", "silverlight", "youtube", "vimeo"],
                    type: "",
                    pluginPath: "/Static/mediaelement/",
                    flashName: "flashmediaelement.swf",
                    silverlightName: "silverlightmediaelement.xap",
                    defaultVideoWidth: 480,
                    defaultVideoHeight: 270,
                    videoWidth: -1,
                    videoHeight: -1,
                    pluginWidth: -1,
                    pluginHeight: -1,
                    audioWidth: 400,
                    audioHeight: 30,
                    startVolume: .5,
                    loop: !1,
                    enableAutosize: !0,
                    timerRate: 250,
                    features: ["progress", "socialshare", "volume", "fullscreen", "tracks"],
                    alwaysShowControls: !0,
                    iPadUseNativeControls: !0,
                    iPhoneUseNativeControls: !0,
                    AndroidUseNativeControls: !0,
                    alwaysShowHours: !1,
                    showTimecodeFrameCount: !1,
                    framesPerSecond: 25,
                    enableKeyboard: !0,
                    pauseOtherPlayers: !0,
                    keyActions: []
                })
            }
        })
    }(),
    function() {
        "use strict";
        vc.FindYourVolvo = Backbone.View.extend({
            events: {
                "click .start": "startEvent",
                "click li[data-level-id]": "levelChangeEvent",
                "click [data-feature-id] .button": "showModalEvent",
                "click .back": "backEvent",
                "click .reset": "reset",
                "click .overlay .overlay-close": "close"
            },
            levelsEndpoint: "/" + vc.settings.marketId + "/findmyvolvo?id=",
            resultsEndpoint: "/" + vc.settings.marketId + "/findmyvolvo?resultid=",
            levelRootTemplate: templates["fyv-level-root"],
            levelOneChoicesTemplate: templates["fyv-level-one"],
            levelTwoChoicesTemplate: templates["fyv-level-two"],
            levelThreeResultsTemplate: templates["fyv-level-three-results"],
            initialize: function() {
                this.fyvOverlayModel = new Backbone.Model, this.$(".loadError").hide(), this.state = "start", this.levelChange.bind(this), this.start.bind(this), this.getData.bind(this), this.$(".loadError").on("click", this.getData.bind(this)), this.rootLabel = this.$(".level-start>h2").text() || "Find Your Car", this.firstQuestion = this.$el.attr("data-level-one-prompt"), this.modelName = this.$el.attr("data-model-name");
                var e = null !== document.location.href.match(/:3000/);
                e && (this.dev = !0, vc.dictionary = {
                    FindYourVolvo: {
                        Disclaimer: "*: This is a dev only example disclaimer."
                    }
                }, setInterval(function() {
                    document.title = "!# Find My Volvo"
                }, 1e3), $(".content").css({
                    paddingTop: "70px"
                }), this.levelsEndpoint = "/Static/fyv-levels-mock.json", this.resultsEndpoint = "/Static/fyv-results-mock.json"), this.disclaimer = ((vc.dictionary || {}).FindYourVolvo || {}).Disclaimer, this.getData(), this.render()
            },
            setState: function(e) {
                this.state = e, this.render()
            },
            getData: function() {
                if (void 0 === this.levels) {
                    this.$(".loading").show(), this.$(".load-overlay").show(), this.$(".loadError").hide();
                    var e = this.$el.attr("data-id");
                    this.dev && (e = ""), $.ajax({
                        url: this.levelsEndpoint + e,
                        dataType: "json",
                        context: this
                    }).success(function(e) {
                        this.levels = e, this.generateLevels(), this.render(), this.$(".load-overlay").hide(), this.$(".loadError").hide()
                    }).fail(function() {
                        this.$(".load-overlay").show(), this.$(".loadError").show()
                    }).always(function() {
                        this.$(".loading").hide()
                    })
                }
            },
            generateLevels: function(e) {
                e = e || this.levels, $($(this.el).find(".fyv-content")[0]).append(this.levelRootTemplate.render({
                    level: e,
                    question: this.firstQuestion,
                    rootLabel: this.rootLabel
                })), $($(this.el).find(".buttons")[0]).append(this.levelOneChoicesTemplate.render({
                    level: e
                }));
                for (var t = 0; t < e.length; t++) {
                    var i = e[t],
                        n = this.levelTwoChoicesTemplate.render({
                            level: i.Level2Answer,
                            prevLevel: i.Level1Answer
                        });
                    $($(this.el).find(".fyv-content")[0]).append(n)
                }
                this.$(".background").not(":visible").each(function() {
                    $(this).data("src", this.src), this.src = ""
                }), this.listenTo(vc.app, "resize", this.resize), this.resize(), this.levelsGenerated = !0
            },
            resize: function() {
                this.$(".background").each(function() {
                    var e = $(window).width(),
                        t = $(this).data("src"),
                        i = "";
                    481 > e ? i = t + "?h=480" : 769 > e ? i = t + "?h=768" : 1266 > e && (i = t + "?h=1280"), "" === i && (i = t + "?w=1920"), $(this).css({
                        backgroundImage: "url('" + i + "')"
                    })
                })
            },
            start: function() {
                this.setState("root"), this.render()
            },
            render: function() {
                if ("start" === this.state) $($(this.el).find(".image-mask")[0]).hide(), this.$(".level-start").show(), this.$(".level-root").hide(), this.$(".results").hide(), this.$(".background").removeClass("faded");
                else if ("root" === this.state) $($(this.el).find(".image-mask")[0]).show(), this.$(".level-start").hide(), this.$(".level-root").show(), this.$(".level-2").hide(), this.$(".results").hide(), this.$(".background").addClass("faded");
                else if ("results" === this.state) $($(this.el).find(".image-mask")[0]).hide(), this.$(".level-start").hide(), this.$(".level-root").hide(), this.$(".level-2").hide(), this.$(".results").replaceWith(this.levelThreeResultsTemplate.render({
                    modelName: this.modelName,
                    results: this.results,
                    prevLevel: this.getLevelTwo(this.lastLevel2Id),
                    disclaimer: this.disclaimer
                })), this.resize(), this.$(".overlays .overlay").hide(), $(".results").show(), this.$(".background").addClass("faded");
                else {
                    var e = this.state;
                    $($(this.el).find(".image-mask")[0]).hide();
                    var t = this.$('[data-level-id="' + e + '"]');
                    t.show(), this.$(".level-root").hide(), this.$(".level-2").hide(), this.$('.level-2[data-level-one-id="' + e + '"]').show(), this.$(".background").addClass("faded"), $(".results").hide()
                }
            },
            showModalEvent: function(e) {
                var t = $(e.target).parents("[data-feature-id]")[0];
                void 0 === t && (t = e.target);
                var i = $(t).attr("data-feature-id");
                this.fyvOverlayModel.set("model", this.getFeatureById(i));
                var n = new vc.FindYourVolvoOverlay({
                    model: this.fyvOverlayModel
                });
                vc.app.$mask.append(n.render().el)
            },
            getFeatureById: function(e) {
                if (void 0 === e) return !1;
                for (var t = this.results.Features.length - 1; t >= 0; t--) {
                    var i = this.results.Features[t];
                    if (i.ID === e) return i
                }
            },
            startEvent: function(e) {
                e = e || window.event;
                var t = e.originalEvent.target || e.target,
                    i = $(t).parents(".level-root")[0];
                return this.start(i), !1
            },
            back: function(e) {
                void 0 === e ? this.setState("start") : $(e).hasClass("results") ? this.setState(this.lastLevel1Id) : this.setState("root")
            },
            reset: function() {
                this.setState("start")
            },
            backEvent: function(e) {
                e = e || window.event;
                var t = e.originalEvent.target || e.target,
                    i = t;
                return i = $(t).parents("[data-level-one-id]")[0] || $(t).parents("[data-level-id]")[0], void 0 === i && (i = $(t).hasClass("reset") ? t : $(t).parents("[data-results-id]")[0]), this.back(i), !1
            },
            levelChangeEvent: function(e) {
                e = e || window.event;
                var t = e.originalEvent.target || e.target,
                    i = t;
                void 0 === $(i).attr("data-level-id") && (i = $(t).parents("[data-level-id]")[0]), this.levelChange(t, i)
            },
            close: function(e) {
                if (e.currentTarget) {
                    var t = $(e.currentTarget.parentElement);
                    t.hasClass("overlay") && t.removeClass("overlay-show")
                } else $(".overlay.overlay-show").removeClass("overlay-show");
                $("#mask").removeClass("enabled fade-in")
            },
            isIdFromlevelOne: function(e) {
                for (var t = this.levels.length - 1; t >= 0; t--)
                    if (this.levels[t].Level1Answer.ID === e) return "level1";
                return !1
            },
            getLevelTwo: function(e) {
                for (var t = this.levels.length - 1; t >= 0; t--)
                    for (var i = this.levels[t].Level2Answer.length - 1; i >= 0; i--)
                        if (this.levels[t].Level2Answer[i].ID === e) return this.levels[t].Level2Answer[i];
                return !1
            },
            levelChange: function(e, t) {
                var i = $(t).attr("data-level-id");
                $(window).width() < 768 && $("html, body").scrollTop($(this.el).offset().top), this.isIdFromlevelOne(i) ? (this.lastLevel1Id = i, this.setState(i)) : void 0 !== i && "" !== i && (this.lastLevel2Id = i, this.$(".load-overlay").show(), this.$(".loading").show(), this.dev && (i = ""), $.ajax({
                    url: this.resultsEndpoint + i,
                    dataType: "json",
                    context: this
                }).success(function(e) {
                    this.results = e, this.setState("results"), this.$(".load-overlay").hide(), this.$(".loadError").hide()
                }).fail(function() {
                    this.$(".load-overlay").show(), this.$(".loadError").show()
                }).always(function() {
                    this.$(".loading").hide()
                }))
            }
        })
    }(),
    function() {
        "use strict";
        vc.CarComparison = Backbone.View.extend({
            initialize: function() {
                $(".content").css({
                    overflow: "hidden"
                }), this.isSticky = !1, this.$header = this.$(".js-car-comparison-header"), this.$stickyTreshold = this.$(".js-car-comparison-treshold"), this.navHeight = 0, this.initialHeaderPosition = this.$header.position().top, this.listenTo(vc.app, "app:scrolled", this.handleStickiness), this.listenTo(vc.app, "resize", this.resize), this.isMobileSelectOpen = !1, vc.CarComparisonHeader = new vc.CarComparisonHeader({
                    el: this.$(".car-selector-slot")
                }), vc.CarComparisonData = new vc.CarComparisonData({
                    el: this.$(".car-comparison-data .car-comparison-box-wrapper")
                }), vc.CarComparisonSelector = new vc.CarComparisonSelector({
                    el: this.$(".car-selector-overlay .outer-container .container")
                }), this.slots = [{}, {}, {}], this.listenTo(vc.CarComparisonHeader, "car:changed", this.carSelected), this.listenTo(vc.CarComparisonSelector, "car:changed", this.carSelected), this.listenTo(vc.CarComparisonHeader, "engine:changed", this.updateEngine), this.listenTo(vc.CarComparisonHeader, "slot:reset", this.resetSlot), this.listenTo(vc.CarComparisonHeader, "form:clicked", this.selectClicked), this.listenTo(vc.CarComparisonSelector, "overlay:closed", this.overlayClosed), this.listenTo(vc.CarComparisonSelector, "overlay:force", this.overlayForce), this.listenTo(vc.CarComparisonHeader, "carData:loaded", this.cardDataLoaded), this.listenTo(vc.CarComparisonHeader, "car:deeplinked", this.carDeepLinked), this.preload(), this.resize()
            },
            preload: function() {
                var e = 0;
                document.location.search.replace(new RegExp("([^?=&]+)(=([^&]*))?", "g"), function(t, i, n, s) {
                    "modelid" === i.toLowerCase() ? vc.CarComparisonHeader.setSelected(e, s) : vc.CarComparisonHeader.setSelected(e, i, s), e++
                }), vc.CarComparisonHeader.fetchCars()
            },
            cardDataLoaded: function() {
                vc.CarComparisonSelector.render(vc.CarComparisonHeader.cars.attributes.AllCars)
            },
            carSelected: function(e, t) {
                vc.CarComparisonHeader.selectCar(e, t)
            },
            resetSlot: function(e) {
                this.slots[e] = {}, vc.CarComparisonData.render(this.slots)
            },
            updateEngine: function(e) {
                var t = new vc.CarVariant,
                    i = this;
                t.fetch({
                    data: $.param({
                        variantId: e.engine,
                        modelId: e.model,
                        sc_site: vc.settings.sc_site
                    }),
                    success: _.bind(function(t) {
                        i.slots[e.slot] = t.toJSON(), vc.CarComparisonData.render(i.slots)
                    })
                })
            },
            selectClicked: function(e) {
                vc.CarComparisonSelector.show(e), $("html, body").animate({
                    scrollTop: 0
                }, 400)
            },
            overlayClosed: function(e) {
                vc.CarComparisonHeader.forceClearSlot(e)
            },
            events: {
                "click .js-update-comparison": "scrollToHeader",
                "click .car-comparison-print": "print",
                "click .dropdown-fallback": "selectOpen",
                "change .dropdown-fallback": "selectClosed",
                "blur .dropdown-fallback": "selectClosed",
                "click .close-selector-overlay": "closeOverlay",
                "click .car-selector-overlay-scrim": "closeOverlay"
            },
            selectOpen: function() {
                this.isMobileSelectOpen = !0
            },
            selectClosed: function() {
                this.isMobileSelectOpen = !1
            },
            closeOverlay: function() {
                vc.CarComparisonSelector.closeOverlay()
            },
            resize: function() {
                var e = $(".nav").height();
                e !== this.navHeight && (this.navHeight = e, this.$header.css("top", e), this.handleStickiness())
            },
            handleStickiness: function() {
                var e = 0;
                this.isMobileSelectOpen || (!this.isSticky && $(window).scrollTop() + this.navHeight > this.$stickyTreshold.position().top && (this.isSticky = !0, this.$header.addClass("car-comparision-header--sticky").css("top", this.navHeight), e = this.$header.find(".box-header").height() + this.$stickyTreshold.height() + this.navHeight + parseInt(this.$header.find(".box").css("marginBottom").replace("px", ""), 10), this.$header.after('<div class="car-comparision-header-placeholder" style="height: ' + e + 'px"></div>')), this.isSticky && $(window).scrollTop() < this.$(".car-comparision-header-placeholder").position().top && (this.isSticky = !1, this.$header.removeClass("car-comparision-header--sticky"), this.$(".car-comparision-header-placeholder").remove()))
            },
            scrollToHeader: function(e) {
                e.preventDefault(), $("html, body").animate({
                    scrollTop: this.initialHeaderPosition - 1
                }, 400)
            },
            print: function(e) {
                e.preventDefault(), window.print()
            },
            overlayForce: function() {
                vc.CarComparisonHeader.forceClick()
            },
            carDeepLinked: function() {
                vc.CarComparisonSelector.hasDeepLinked = !0
            }
        })
    }(),
    function() {
        "use strict";
        vc.CarComparisonHeader = Backbone.View.extend({
            tmpl: templates["car-selector-slot"],
            events: {
                "change .js-engine-fallback-select": "selectEngine",
                "click .car-selector-remove": "resetSlot",
                "click .js-car-selector-cta": "showFormSlot"
            },
            initialize: function() {
                this.cars = new vc.CarModel, this.selected = [{
                    model: null,
                    engine: null
                }, {
                    model: null,
                    engine: null
                }, {
                    model: null,
                    engine: null
                }]
            },
            preload: function() {
                var e = this,
                    t = 0,
                    i = null;
                document.location.search.replace(new RegExp("([^?=&]+)(=([^&]*))?", "g"), function(n, s, o, a) {
                    if ("modelid" === s.toLowerCase()) {
                        if (!a) return;
                        e.selected[t] = {
                            model: a
                        }
                    } else e.selected[t] = {
                        model: s,
                        engine: a
                    };
                    e.trigger("car:deeplinked"), i = $(".car-selector-slot-" + (t + 1)), e.showFormSlot({
                        target: i,
                        deepLink: !0,
                        model: e.selected[t]
                    }), t++
                })
            },
            fetchCars: function() {
                this.cars.fetch({
                    data: $.param({
                        sc_site: vc.settings.sc_site
                    }),
                    success: _.bind(function() {
                        this.render(), this.preload(), this.trigger("carData:loaded")
                    }, this)
                })
            },
            render: function() {
                return this.$el.html(this.tmpl.render(this.cars.toJSON())), _.each(this.$(".js-engine-dropdown"), _.bind(function(e) {
                    this.disableDropdown(e)
                }, this)), _.each(this.$(".dropdown-wrapper"), function(e) {
                    new vc.Dropdown({
                        el: e
                    })
                }), this
            },
            showFormSlot: function(e) {
                e.preventDefault && e.preventDefault();
                var t = $(e.target).closest(".car-selector-slot");
                t.find(".js-car-selector-form").addClass("car-selector-form--visible");
                var i = parseInt(t.closest(".car-selector-slot").attr("data-slot"), 10);
                e.deepLink ? this.trigger("car:changed", i, e.model.model) : this.trigger("form:clicked", i)
            },
            hideFormSlot: function(e) {
                e.preventDefault && e.preventDefault();
                var t = $(e.target).closest(".car-selector-slot");
                t.find(".js-car-selector-form").removeClass("car-selector-form--visible")
            },
            selectCar: function(e, t) {
                var i = $(".car-selector-slot-" + (e + 1)),
                    n = t,
                    s = i.find(".js-engine-dropdown"),
                    o = i.find(".js-car-selector-picture"),
                    a = i.find(".js-car-selector-picture-side"),
                    r = i.find(".js-car-selector-name"),
                    l = i.find(".js-engine-selector-name"),
                    c = i.find(".car-selector-explore a"),
                    d = i.find(".car-selector-build a"),
                    h = this.getSelectedCar(n),
                    p = parseInt(i.closest(".car-selector-slot").attr("data-slot"), 10);
                o.attr({
                    src: h.CarImage
                }).removeClass("car-selector-picture--placeholder"), a.attr({
                    src: h.CarImageHover
                }).removeClass("car-selector-picture-side--placeholder"), i.find(".js-car-selector-form").removeClass("car-selector-form--pristine"), "" !== h.ModelNameCore ? "" !== h.ModelNamePrefix ? (r.html("<small>" + h.ModelNamePrefix + "</small><h3>" + h.ModelNameCore + "</h3>"), r.removeClass("small-after")) : (r.html("<h3>" + h.ModelNameCore + "</h3><small>" + h.ModelNameSuffix + "</small>"), r.addClass("small-after")) : r.html("<h3>" + h.ModelDisplayName + "</h3>"), this.selected[p].model = h.ModelId, h.CarBuilderUrl ? d.attr("href", h.CarBuilderUrl).show() : d.hide(), h.PdpUrl ? c.attr("href", h.PdpUrl).show() : c.hide(), h.Variants.length > 0 ? (this.setDropdownData(h, "VariantId", "DisplayName", s), this.selectVariantDropdown(s, this.selected[p].engine ? this.selected[p].engine : h.Variants[0].VariantId), this.enableDropdown(s)) : (l.text(""), this.emptyDropdown(s), this.disableDropdown(s))
            },
            getSelectedCar: function(e) {
                if (1 === this.cars.attributes.AllCars.length) return _.findWhere(this.cars.attributes.AllCars[0].Cars, {
                    ModelId: e
                });
                var t;
                return _.each(this.cars.attributes.AllCars, function(i) {
                    _.each(i.Cars, function(i) {
                        i.ModelId === e && (t = i)
                    })
                }), t
            },
            selectEngine: function(e) {
                var t = $(e.target).closest(".car-selector-slot"),
                    i = t.find(".js-engine-selector-name"),
                    n = $(e.target).val() || t.find(".js-engine-fallback-select option:selected").val(),
                    s = parseInt(t.closest(".car-selector-slot").attr("data-slot"), 10),
                    o = t.find(".js-engine-fallback-select option:selected").text();
                i.text(o), this.selected[s].engine = n, this.trigger("engine:changed", {
                    slot: s,
                    engine: n,
                    model: this.selected[s].model
                })
            },
            forceClearSlot: function(e) {
                $(".car-selector-slot-" + (e + 1)).find(".car-selector-remove").click();
            },
            resetSlot: function(e) {
                e.preventDefault();
                var t = $(e.target).closest(".car-selector-slot"),
                    i = t.find(".js-car-selector-picture-side"),
                    n = t.find(".js-engine-selector-name"),
                    s = t.find(".js-car-selector-name"),
                    o = t.find(".car-selector-build a"),
                    a = parseInt(t.closest(".car-selector-slot").attr("data-slot"), 10);
                this.resetDropdown(t.find(".js-car-dropdown")), this.emptyDropdown(t.find(".js-engine-dropdown")), this.disableDropdown(t.find(".js-engine-dropdown")), this.resetSelectedCar(a), i.attr({
                    src: ""
                }), n.text(""), s.text(""), o.attr("href", "#"), this.trigger("slot:reset", a), t.find(".js-car-selector-form").addClass("car-selector-form--pristine"), this.hideFormSlot(e)
            },
            setDropdownData: function(e, t, i, n) {
                var s = $(n).children(".dropdown"),
                    o = $(n).children(".dropdown-fallback");
                this.emptyDropdown(n);
                for (var a = e.Variants, r = null, l = null, c = 0; c < a.length; c++) r = $('<li subject="' + a[c][t] + '"><a href="#" data-dropdown="' + a[c][t] + '">' + a[c][i] + "</a></li>"), l = $('<option value="' + a[c][t] + '">' + a[c][i] + "</option>"), s.append(r), o.append(l)
            },
            isAlreadySelected: function(e, t) {
                var i = !1,
                    n = 0;
                do i = this.selected[n].model === e && this.selected[n].engine === t, n++; while (!i && n < this.selected.length);
                return i
            },
            emptyDropdown: function(e) {
                var t = $(e).children(".dropdown"),
                    i = $(e).children(".dropdown-fallback"),
                    n = $(e).find(".dropdown-active-item"),
                    s = i.attr("data-defaultLabel");
                t.empty(), i.empty(), n.data("dropdownActive", s), n.html(s), i.append($("<option></option>").val(s).html(s).attr({
                    selected: "selected",
                    disabled: "disabled"
                }))
            },
            restoreDefaultOption: function(e) {
                var t = $(e).children(".dropdown-fallback"),
                    i = t.attr("data-defaultLabel"),
                    n = t.find('option[value="' + i + '"]');
                n.length || t.prepend($("<option></option>").val(i).html(i).attr({
                    disabled: "disabled"
                }))
            },
            resetDropdown: function(e) {
                var t = $(e).children(".dropdown-fallback"),
                    i = $(e).find(".dropdown-active-item"),
                    n = t.attr("data-defaultLabel");
                i.data("dropdownActive", n), i.html(n), t.find("option[selected=selected]").removeProp("selected").removeAttr("selected");
                var s = t.find("option[data-defaultLabel]");
                s.length ? s.prop("selected", !0).attr("selected", "selected") : t.find("option:first").prop("selected", !0).attr("selected", "selected")
            },
            selectVariantDropdown: function(e, t) {
                this.selectDropdownItem(e, t), this.selectEngine({
                    target: e
                })
            },
            selectModelDropdown: function(e, t) {
                this.selectDropdownItem(e, t), this.selectCar({
                    target: e
                })
            },
            selectDropdownItem: function(e, t) {
                var i = $(e).children(".dropdown"),
                    n = i.find('[data-dropdown="' + t + '"]').parent().index(),
                    s = $(e).children(".dropdown-fallback"),
                    o = $(e).find(".dropdown-active-item"),
                    a = i.find("li").eq(n).find("a").text();
                o.text(a), s.find("option[selected=selected]").remove(), s.find("option").eq(n).prop("selected", !0).attr({
                    selected: "selected"
                })
            },
            disableDropdown: function(e) {
                var t = $(e).closest(".dropdown-wrapper"),
                    i = $(e).children(".dropdown-fallback");
                t.addClass("disabled"), i.prop("disabled", "disabled")
            },
            enableDropdown: function(e) {
                var t = $(e).closest(".dropdown-wrapper"),
                    i = $(e).children(".dropdown-fallback");
                t.removeClass("disabled"), i.prop("disabled", !1)
            },
            scrollToTop: function() {
                var e = $(".js-car-comparison-header").position().top,
                    t = $(".car-comparision-header-placeholder");
                t.length && (e = t.position().top), $("html, body").animate({
                    scrollTop: e - 1
                }, 400)
            },
            resetSelectedCar: function(e) {
                $('li[subject="' + this.selected[e].engine + '"]').show(), $('option[value="' + this.selected[e].engine + '"]').show(), this.selected[e] = {
                    model: null,
                    engine: null
                }
            },
            setSelected: function(e, t, i) {
                this.selected[e] = {
                    model: t,
                    engine: i
                }
            },
            forceClick: function() {
                $(".car-selector-slot-1").children(".js-car-selector-cta").click()
            }
        })
    }(),
    function() {
        "use strict";
        vc.CarComparisonData = Backbone.View.extend({
            highlights: templates["car-comparison-highlights"],
            specs: templates["car-comparison-specs"],
            ctas: templates["car-comparison-cta"],
            events: {
                "click .lightbox": "showLightbox"
            },
            initialize: function() {
                this.carOverlayModel = new vc.CarOverlayModel, this.getLightboxData()
            },
            getLightboxData: function() {
                this.carOverlayModel.fetch({
                    data: $.param({
                        sc_site: vc.settings.sc_site
                    }),
                    success: _.bind(function() {
                        this.render()
                    }, this)
                })
            },
            render: function(e) {
                var t = this.getFirstUsedSlotIndex(e);
                if (t !== !1) {
                    var i = {
                        Hightlights: this.buildHighlightObject(e, t),
                        Specs: this.buildSpecsObject(e, t)
                    };
                    this.$el.empty();
                    var n = "";
                    null !== i.Hightlights && (n += this.highlights.render({
                        data: i.Hightlights
                    })), n += this.specs.render({
                        data: i.Specs
                    }), n += this.ctas.render({
                        translate: vc.dictionary.CarComparison
                    }), this.$el.html(n), _.each(this.$el.find("tr.header"), function(e) {
                        "" === $(e).data("lightbox-id") ? $(e).addClass("suppress-info") : "" === this.carOverlayModel.attributes[$(e).data("lightbox-id")] ? $(e).addClass("suppress-info") : $(e).removeClass("suppress-info")
                    }, this), this.$el.stop().fadeTo("fast", 1), _.each(this.$(".standard-accordion"), function(e) {
                        $(e).find("li:first-child").addClass("expanded").find(".accordion-arrow").addClass("icon-angle-up").removeClass("icon-angle-down");
                        var t = new vc.Accordion({
                            el: e
                        });
                        t.render()
                    })
                } else $(this.$el).fadeOut(function() {
                    $(this).empty()
                });
                return this
            },
            showLightbox: function(e) {
                e.preventDefault();
                var t = $(e.target),
                    i = t.parents("tr").data("lightbox-id"),
                    n = t.parents("tr").data("lightbox-title");
                this.carOverlayModel.set("title", n).set("htmlContent", this.carOverlayModel.attributes[i]);
                var s = new vc.FeatureOptions.Overlay({
                    model: this.carOverlayModel
                });
                vc.app.$mask.append(s.render().el)
            },
            getFirstUsedSlotIndex: function(e) {
                var t = null,
                    i = 0;
                if (e)
                    do _.isEmpty(e[i]) ? i++ : t = !0; while (!t && i < e.length);
                return !e || i >= e.length ? !1 : i
            },
            buildHighlightObject: function(e, t) {
                if (null !== e[t].Highlights) {
                    for (var i = e[t].Highlights, n = {
                            Label: i.Title,
                            Items: []
                        }, s = {}, o = 0, a = i.Items.length; a > o; o++) {
                        s = {
                            Label: i.Items[o].Label,
                            Description: i.Items[o].Description,
                            HasSubItems: null !== i.Items[o].SubItems,
                            SubItems: [],
                            Values: []
                        };
                        var r = 0;
                        if (s.HasSubItems)
                            for (var l = 0, c = this.getHighlightsMaxSubItems(e, o); c > l; l++)
                                for (s.SubItems[l] = [], r = 0; 3 > r; r++) s.SubItems[l].push(_.isEmpty(e[r]) || _.isEmpty(e[r].Highlights.Items[o].SubItems[l]) ? {
                                    Label: "",
                                    Value: ""
                                } : e[r].Highlights.Items[o].SubItems[l]);
                        else
                            for (r = 0; 3 > r; r++) s.Values.push(_.isEmpty(e[r]) ? "" : e[r].Highlights.Items[o].Value);
                        n.Items.push(s)
                    }
                    return n
                }
                return null
            },
            getHighlightsMaxSubItems: function(e, t) {
                for (var i = [], n = 0, s = e.length; s > n; n++) e[n] && e[n].Highlights && e[n].Highlights.Items && e[n].Highlights.Items[t] && e[n].Highlights.Items[t].SubItems && i.push(e[n].Highlights.Items[t].SubItems.length);
                return i.length ? _.max(i) : 0
            },
            getSpecsMaxSubItems: function(e, t, i) {
                for (var n = [], s = 0, o = e.length; o > s; s++) e[s] && e[s].Specs && e[s].Specs.Categories && e[s].Specs.Categories[t] && e[s].Specs.Categories[t].Items && e[s].Specs.Categories[t].Items[i] && e[s].Specs.Categories[t].Items[i].SubItems && n.push(e[s].Specs.Categories[t].Items[i].SubItems.length);
                return n.length ? _.max(n) : 0
            },
            buildSpecsObject: function(e, t) {
                var i = e[t].Specs,
                    n = {},
                    s = {},
                    o = {},
                    a = {
                        Title: i.Title,
                        cats: []
                    };
                if (!e[t]) return {};
                for (var r = 0, l = i.Categories.length; l > r; r++) {
                    n = {
                        CategoryId: i.Categories[r].CategoryId,
                        CategoryName: i.Categories[r].CategoryName,
                        Items: []
                    };
                    for (var c = 0, d = i.Categories[r].Items.length; d > c; c++) {
                        s = {
                            FieldName: i.Categories[r].Items[c].FieldName,
                            Label: i.Categories[r].Items[c].Label,
                            HasSubItems: null !== i.Categories[r].Items[c].SubItems,
                            SubItems: [],
                            Values: []
                        };
                        var h = 0;
                        if (s.HasSubItems)
                            for (var p = 0, b = this.getSpecsMaxSubItems(e, r, c); b > p; p++) {
                                for (o = {
                                        Labels: [],
                                        ItemId: i.Categories[r].Items[c].SubItems[p] ? i.Categories[r].Items[c].SubItems[p].ItemId : "",
                                        Values: []
                                    }, h = 0; 3 > h; h++) o.Labels.push(_.isEmpty(e[h]) || _.isEmpty(e[h].Specs.Categories[r].Items[c].SubItems[p]) ? "" : e[h].Specs.Categories[r].Items[c].SubItems[p].Label), o.Values.push(_.isEmpty(e[h]) || _.isEmpty(e[h].Specs.Categories[r].Items[c].SubItems[p]) ? "" : e[h].Specs.Categories[r].Items[c].SubItems[p].Value);
                                s.SubItems.push(o)
                            } else
                                for (h = 0; 3 > h; h++) s.Values.push(_.isEmpty(e[h]) ? "" : e[h].Specs.Categories[r].Items[c].Value);
                        n.Items.push(s)
                    }
                    a.cats.push(n)
                }
                return a
            }
        })
    }(),
    function() {
        "use strict";
        vc.CarComparisonSelector = Backbone.View.extend({
            groupTemplate: templates["car-comparison-selector-group"],
            itemTemplate: templates["car-comparison-selector-item"],
            events: {
                "click .car-selector-overlay-item": "carSelected"
            },
            currentSlotNumber: null,
            hasClicked: !1,
            hasClickedTimer: null,
            hasDeepLinked: !1,
            initialize: function() {
                this.$scrim = $(".car-selector-overlay-scrim")
            },
            render: function(e) {
                this.carData = e, this.setupGroups();
                var t = this;
                this.hasClickedTimer = _.delay(this.onClickedTimer, 2e3, t)
            },
            setupGroups: function() {
                if (1 === this.carData.length) {
                    var e = $(this.groupTemplate.render({
                        GroupName: vc.dictionary.CarComparison.AllModels
                    }));
                    e.addClass("single-group"), _.each(this.carData[0].Cars, function(t, i) {
                        "" !== t.ModelNameCore ? "" !== t.ModelNamePrefix ? t.NameType3 = "3" : "" !== t.ModelNameSuffix ? t.NameType4 = "4" : t.NameType2 = "2" : t.NameType1 = "1";
                        var n = $(this.itemTemplate.render(t));
                        (i + 1) % 4 === 0 && 0 !== i && n.addClass("last"), e.find(".car-selector-overlay-cars").append(n)
                    }, this), this.$el.append(e)
                } else _.each(this.carData, function(e) {
                    var t = $(this.groupTemplate.render({
                        GroupName: e.CarCategoryName
                    }));
                    t.addClass("multi-group"), _.each(e.Cars, function(e) {
                        "" !== e.ModelNameCore ? "" !== e.ModelNamePrefix ? e.NameType3 = "3" : "" !== e.ModelNameSuffix ? e.NameType4 = "4" : e.NameType2 = "2" : e.NameType1 = "1";
                        var i = $(this.itemTemplate.render(e));
                        t.find(".car-selector-overlay-cars").append(i)
                    }, this), this.$el.append(t)
                }, this), this.$el.find(".car-selector-overlay-car-group").last().addClass("last");
                this.$el.find(".car-selector-overlay-car-group").children(".car-selector-overlay-drop-down").on("click", function() {
                    $(this).next(".car-selector-overlay-cars").toggleClass("on"), $(this).find(".icon").toggleClass("icon-angle-up icon-angle-down")
                })
            },
            show: function(e) {
                this.hasClicked || (this.hasClicked = !0, clearTimeout(this.hasClickedTimer)), this.currentSlotNumber = e, $(this.$el.parents(".car-selector-overlay")).fadeIn(), this.$scrim.fadeIn()
            },
            closeOverlay: function() {
                this.trigger("overlay:closed", this.currentSlotNumber), $(this.$el.parents(".car-selector-overlay")).fadeOut(), this.$scrim.fadeOut()
            },
            carSelected: function(e) {
                this.trigger("car:changed", this.currentSlotNumber, $(e.target).closest(".car-selector-overlay-item").data("model-id")), $(this.$el.parents(".car-selector-overlay")).fadeOut(), this.$scrim.fadeOut()
            },
            onClickedTimer: function(e) {
                e.hasDeepLinked || e.trigger("overlay:force")
            }
        })
    }(),
    function() {
        "use strict";
        vc.InlineCarCompare = Backbone.View.extend({
            initialize: function() {
                this.models = $(".inline-car-compare-models"), this.selected({
                    target: $("select:first", this.$el)
                })
            },
            events: {
                "change .model-select": "selectImage",
                "change .dropdown-fallback": "selected"
            },
            selectImage: function(e) {
                var t = $("option:selected", e.target).attr("data-image"),
                    i = $(e.target).attr("data-slot");
                t && $("li[data-slot=" + i + "] img", this.models).attr("src", t).removeClass("placeholder")
            },
            selected: function(e) {
                var t = $(e.target),
                    i = parseInt(t.attr("data-slot"), 10),
                    n = (i + 1) % 2,
                    s = $(".dropdown[data-slot=" + n + "]", this.$el),
                    o = $("select[data-slot=" + n + "]", this.$el);
                s.find("li").show(), s.find('li[subject="' + t.val() + '"]').hide(), o.find("option").attr("disabled", null).removeProp("disabled"), o.find('option[value="' + t.val() + '"]').attr("disabled", "disabled").prop("disabled", !0)
            }
        })
    }(),
    function() {
        "use strict";
        vc.Interactive = Backbone.View.extend({
            initialize: function() {
                _.bindAll(this, "halfVisible", "enteredViewport", "leftViewport", "windowScrolled", "windowResized"), this.spyScrollOffset = 190, this.$el.hasClass("media-stream") && this.addSpyListeners(this.$el.find(".items > ul > li")), this.listenTo(vc.app, "resize", this.windowResized), this.fixedHero()
            },
            events: {
                "scroll-spy:half-mark": "halfVisible",
                "scroll-spy:enter-viewport": "enteredViewport",
                "scroll-spy:leave-viewport": "leftViewport"
            },
            fixedHero: function() {
                this.$el.hasClass("hero-fixed") && "extra-large" === vc.app.currentDevice.name ? (this.$hero = this.$el.find("> div"), this.$heroContent = $(".hero-content", this.$el), this.$heroBackground = $(".hero-background", this.$el), this.heroHeight = this.$hero.height(), this.cssTransforms3D = $("html").hasClass("csstransforms3d")) : this.$hero = null
            },
            halfVisible: function(e) {},
            enteredViewport: function(e) {
                $(e.target).addClass("enterInteractive"), this.$hero && (this.windowScrolled(), this.listenTo(vc.app, "app:scrolled", this.windowScrolled))
            },
            leftViewport: function() {
                this.$hero && vc.app.$window.off("scroll.hero")
            },
            windowScrolled: function() {
                if (this.heroHeight) {
                    var e = vc.app.$window.scrollTop(),
                        t = 1 - e / this.heroHeight;
                    if (!(t > 1 || 0 > t)) {
                        this.$hero.css({
                            opacity: t,
                            filter: "alpha(opacity=" + 100 * t + ")"
                        });
                        var i = e / 2 * -1,
                            n = e / 3 * -1;
                        this.cssTransforms3D ? (this.$heroContent.css({
                            transform: "translate3D(0, " + i + "px, 0)"
                        }), this.$heroBackground.css({
                            transform: "translate3D(0, " + n + "px, 0)"
                        })) : (this.$heroContent.css({
                            top: i + "px"
                        }), this.$heroBackground.css({
                            top: n + "px"
                        }))
                    }
                }
            },
            windowResized: function() {
                this.fixedHero()
            },
            render: function() {
                return this.isViewScrolled(), this
            }
        }), vc.mixin(vc.Interactive.prototype, vc.ScrollSpy)
    }();
var dealerPicker1;
! function() {
    "use strict";
    vc.DealerPicker = Backbone.View.extend({
        initialize: function() {
            if (_.bindAll(this, "search", "getKey", "startSearch", "getDealers", "addOne", "activate", "reinitCollection"), this.collection = new vc.DealerPickerCollection, this.$input = this.$("input[name=dealer-picker-query]"), this.$dealerId = this.$("#dealerId"), this.$vccDealerId = this.$("#vccDealerId"), this.$customId = this.$("#customId"), this.$results = this.$(".dealer-picker-results"), this.$selectedName = this.$(".selected-dealer-name"), this.useStandardGMSearch = !1, this.previousSearch = "", this.previousResults = "", vc.DealerLocator ? (this.originalZoom = vc.DealerLocator.map._map.getZoom(), this.originalCenter = vc.DealerLocator.map._map.getCenter()) : this.originalZoom = 4, this.listenTo(this.collection, "add", this.addOne), this.listenTo(this.collection, "sync", this.synced), this.listenTo(this.collection, "change", this.activate), this.listenTo(this.collection, "error", this.error), this.listenTo(this.collection, "change:active", this.activeDealerChanged), "undefined" == typeof wffm && this.enableAutocomplete(this.$input), window.setTimeout(function() {
                    dealerPicker1.checkForPrefill()
                }, 1100), dealerPicker1 = this, "undefined" != typeof wffm) {
                var e = $(".wffm-dealer-locator-search#useGoogleMapsStandardSearch");
                e.length > 0 && (this.useStandardGMSearch = "true" === e.val().toLowerCase(), this.useStandardGMSearch && google.maps.event.addListener(vc.DealerLocator.map._map, "idle", function() {
                    setTimeout(function() {
                        0 == dealerPicker1.collection.length ? (dealerPicker1.setClassName("dealer-noresults"), dealerPicker1.previousResults = "noresults") : dealerPicker1.previousResults = "results"
                    }, 3e3)
                }))
            }
        },
        reinitCollection: function() {
            this.collection.reset(), this.collection = new vc.DealerPickerCollection, this.listenTo(this.collection, "add", this.addOne), this.listenTo(this.collection, "sync", this.synced), this.listenTo(this.collection, "change", this.activate), this.listenTo(this.collection, "error", this.error), this.listenTo(this.collection, "change:active", this.activeDealerChanged)
        },
        events: {
            "keypress input": "getKey",
            "click button": "startSearch",
            "click .dealer-selected-change": "reset"
        },
        checkForPrefill: function() {
            var e = this.$dealerId.val(),
                t = this.$vccDealerId.val();
            (e || t) && "function" == typeof this.collection.findDealerById && (this.setClassName("dealer-loading dealer-prefill"), e ? this.collection.findDealerById(e) : this.collection.findDealerById(t, "VccDealerId"))
        },
        activeDealerChanged: function() {},
        search: function() {
            var e = this,
                t = this.$input.val(),
                i = new google.maps.Geocoder;
            this.setClassName("dealer-loading"), i.geocode({
                address: t,
                region: vc.settings.marketId
            }, function(i, n) {
                if (n === google.maps.GeocoderStatus.OK) {
                    e.collection instanceof vc.DealerPickerCollection || e.reinitCollection();
                    var s = _(i).first();
                    s ? "undefined" != typeof wffm && e.useStandardGMSearch ? e.previousSearch == t && "noresults" == e.previousResults ? e.setClassName("dealer-noresults") : "undefined" != typeof s.geometry.bounds ? vc.DealerLocator.map._map.fitBounds(s.geometry.bounds) : e.setClassName("dealer-badlocation") : (e.collection.visitorPosition = new google.maps.LatLng(s.geometry.location.lat(), s.geometry.location.lng()), e.collection.searchGeometry = s.geometry, e.getDealers(), e.centerOnMarkers(e.collection.models)) : e.setClassName("dealer-badlocation")
                } else n === google.maps.GeocoderStatus.ZERO_RESULTS ? e.setClassName("dealer-badlocation") : e.setClassName("dealer-error");
                e.previousSearch = t
            })
        },
        startSearch: function(e) {
            return e.preventDefault(), this.search(), !1
        },
        getKey: function(e) {
            return 13 === e.keyCode ? (this.search(), this.$input.blur(), !1) : void 0
        },
        getDealers: function() {
            this.collection.fetch({
                sort: !0,
                add: !0,
                remove: !0,
                merge: !1,
                cache: !0,
                data: {
                    format: "json",
                    latitude: this.collection.visitorPosition.lat(),
                    longitude: this.collection.visitorPosition.lng(),
                    geometry: this.collection.searchGeometry,
                    languageId: "'" + (vc.settings.languageId || "sv") + "'",
                    marketId: "'" + (vc.settings.marketId || "se") + "'"
                }
            })
        },
        centerOnMarkers: function(e) {
            var t = new google.maps.LatLngBounds;
            if (e.length > 0) {
                for (var i = 0; i < e.length; i++) {
                    var n = new google.maps.LatLng(e[i].attributes.GeoCode.Latitude, e[i].attributes.GeoCode.Longitude);
                    t.extend(n)
                }
                vc.DealerLocator.map._map.fitBounds(t), google.maps.event.trigger(vc.DealerLocator.map._map, "resize")
            } else vc.DealerLocator.map._map.setCenter(new google.maps.LatLng(bestMatch.geometry.location))
        },
        reset: function(e) {
            e.preventDefault(), this.$results.empty(), this.$input.val(""), this.$dealerId.val(""), this.$vccDealerId.val(""), "undefined" != typeof wffm && wffm && (this.$selectedName.text(""), this.$customId.val("")), this.setClassName(""), "undefined" != typeof vc.DealerLocator ? (vc.DealerLocator.map._map.setZoom(this.originalZoom), this.originalCenter && vc.DealerLocator.map._map.setCenter(this.originalCenter), this.collection.activate(), this.render()) : this.collection.activate(), vc.app.trigger("dealer-name-search", !1)
        },
        error: function() {
            this.setClassName("dealer-error")
        },
        setClassName: function(e) {
            var t = ["dealer-loading", "dealer-results", "dealer-selected", "dealer-error", "dealer-noresults", "dealer-badlocation", "dealer-prefill"];
            this.$el.removeClass(t.join(" ")).addClass(e)
        },
        addOne: function(e) {
            var t = e.get("GeoCode");
            e.marker = {
                LatLng: new google.maps.LatLng(t.Latitude, t.Longitude),
                getPosition: function() {
                    return this.LatLng
                }
            }, e.view = new vc.DealerPickerItem({
                model: e,
                className: "dealer-picker-item"
            })
        },
        synced: function() {
            this.collection.length > 0 ? (this.collection.sort(), this.render(), 0 === $(".map-container").css("opacity") && ($(".map-container").css("opacity", "1"), $(".map-container").css("zoom", "1"))) : this.setClassName("dealer-noresults")
        },
        activate: function() {
            var e = this.collection.findWhere({
                active: !0
            });
            e && ("undefined" == typeof wffm && this.setClassName("dealer-selected"), this.$dealerId.val(e.get("DealerId")), this.$vccDealerId.val(e.get("VccDealerId")), "undefined" != typeof wffm && (this.$selectedName.text(e.get("Name")), this.$customId.val(e.get("CustomId"))), vc.app.trigger("dealer-added", {
                "dealrer-id": e.get("DealerId")
            }), "undefined" != typeof wffm && wffm && this.$selectedName.text(e.get("Name")))
        },
        render: function() {
            var e = this.collection,
                t = this.$results;
            e.length && (this.setClassName("dealer-results"), t.empty(), e.each(function(e) {
                null !== e.view && void 0 !== e.view || (e.view = new vc.DealerPickerItem({
                    model: e,
                    className: "dealer-picker-item"
                })), t.append(e.view.render().el)
            }), "undefined" == typeof wffm && 1 === e.length && e.at(0).set("active", !0), $("span.preselectDealer").length > 0 && ($("span.preselectDealer").remove(), e.at(0).set("active", !0), e.at(0).activate(), this.activate()))
        }
    }), vc.mixin(vc.DealerPicker.prototype, vc.DealerAutocomplete)
}(),
function() {
    "use strict";
    vc.DealerPickerItem = Backbone.View.extend({
        tmpl: templates["dealer-picker-item"],
        initialize: function() {
            _.bindAll(this, "dealerClicked"), this.listenTo(this.model, "remove", this.remove), this.listenTo(this.model, "change", this.dealerChanged)
        },
        events: {
            "click ": "dealerClicked"
        },
        dealerChanged: function(e) {
            var t = e.changedAttributes();
            t && "active" in t && (this.$el.toggleClass("active", t.active), "undefined" != typeof dealerPicker1 && dealerPicker1 && dealerPicker1.activate())
        },
        dealerClicked: function(e) {
            return "a" === e.target.tagName.toLowerCase() ? !0 : (e.preventDefault(), this.model.activate(), "undefined" != typeof dealerPicker1 && dealerPicker1 && dealerPicker1.activate(), void this.attachDealerInfo())
        },
        render: function() {
            return this.$el.html(this.tmpl.render(this.model.toJSON())), this.delegateEvents(this.events), this.$number = this.$(".dealer-marker span"), this.$distance = this.$(".dealer-distance"), this
        },
        attachDealerInfo: function() {
            "undefined" != typeof wffm && ReplaceDealerToken()
        }
    })
}(),
function() {
    "use strict";
    var e = function(e) {
        var t = e.target.value;
        $(window).scrollTop($("#" + t).offset().top)
    };
    vc.Offers = Backbone.View.extend({
        initialize: function() {
            this.collection = new vc.CarouselItemCollection, this.router = new vc.StoryCarouselRouter({
                collection: this.collection
            }), _.bindAll(this, "createItemView", "createDots"), $(".anchor-select select").on("change", e)
        },
        createItemView: function(e, t) {
            var i = $(t),
                n = this.collection.add({
                    id: i.attr("id")
                }),
                s = new vc.CarouselItemView({
                    el: t,
                    model: n
                });
            n.view = s.render(), 0 === e && n.set({
                active: !0
            })
        },
        createDots: function() {
            var e = this,
                t = this.$el.find(".offer-dots");
            this.collection.forEach(function(i) {
                var n = e.collection.indexOf(i),
                    s = t.find(".button").eq(n),
                    o = new vc.StoryCarouselButton({
                        router: e.router,
                        model: i,
                        el: s
                    });
                o.render()
            })
        },
        render: function() {
            var e = this.$el.find(".carousel");
            return e.length && (this.carousel = new vc.Carousel({
                el: this.$el.find(".carousel"),
                collection: this.collection
            }), this.carousel.render(), this.$el.find(".offers-list>li").each(this.createItemView), this.createDots()), this
        }
    })
}(),
function() {
    "use strict";
    var e = {
        el: null,
        contentEl: null,
        dockingElement: null,
        initialize: function(e) {
            this.el = $(e.el), this.contentEl = this.el.find(".sticky-content"), this._isStickyShowOnScroll() && (this.showOnScroll($(window).scrollTop()), this.listenTo(vc.app, "app:scrolled", this.showOnScroll))
        },
        showOnScroll: function(e) {
            this.el.hasClass("sticky-dock") && (this.el.position().top <= $(window).innerHeight() + e ? this.el.addClass("sticky-docked") : this.el.removeClass("sticky-docked")), e > 0 ? this.contentEl.fadeIn() : this.contentEl.fadeOut()
        },
        _isStickyToTop: function() {
            return this.contentEl.hasClass("sticky-content--top")
        },
        _isStickyToBottom: function() {
            return this.contentEl.hasClass("sticky-content--bottom")
        },
        _isStickyShowOnScroll: function() {
            return this.contentEl.hasClass("sticky-content--onscroll")
        }
    };
    vc.StickyElement = Backbone.View.extend(e)
}(),
function() {
    "use strict";
    vc.blog = Backbone.View.extend({
        initialize: function() {
            this.handleEvents()
        },
        handleEvents: function() {
            var e = $(window).width() < 770;
            this.toggleEl($(".archive-title"), e), this.initStickyKit(e), this.onClick(e), this.onResize()
        },
        initStickyKit: function(e) {
            var t = $(".blog-spacer"),
                i = $(".blog-info-col").outerHeight(),
                n = $(".blog-main-col, .blog-info-col");
            if (e) $(".blog-spacer").css("min-height", "auto"), n.trigger("sticky_kit:detach");
            else {
                var s = $("#nav").outerHeight();
                n.stick_in_parent({
                    offset_top: s
                }), t.css("min-height", i)
            }
        },
        toggleEl: function(e, t) {
            t ? $(e).addClass("toggled-in") : $(e).removeClass("toggled-in")
        },
        onClick: function(e) {
            var t = this;
            $(".archive-title").on("click", function(e) {
                e.preventDefault(), $(this).toggleClass("toggled-in")
            }), $(".icon-link.like").on("click", function(e) {
                e.preventDefault(), t.addLike(this)
            })
        },
        onResize: function(e) {
            var t = this;
            $(window).on("resize", t.throttle(function(e) {
                var i = $(window).width() < 770;
                t.initStickyKit(i), t.toggleEl($(".archive-title"), i)
            }, 500))
        },
        addLike: function(e) {
            var t = "/blog/services/api/BlogApi/AddLike/",
                i = $(e).attr("data-id");
            $.ajax({
                url: t + i,
                type: "GET",
                dataType: "json",
                success: function(t) {
                    "Success" === t.Result ? $(e).find(".no-cont").html(t.LikeCount) : console.log("already liked"), $(e).find("i.fa").removeClass("fa-thumbs-o-up").addClass("fa-thumbs-up"), $(e).addClass("liked")
                },
                error: function(e, t, i) {
                    console.log("request failed : " + t)
                }
            })
        },
        throttle: function(e, t, i) {
            t || (t = 250);
            var n, s;
            return function() {
                var o = i || this,
                    a = +new Date,
                    r = arguments;
                n && n + t > a ? (clearTimeout(s), s = setTimeout(function() {
                    n = a, e.apply(o, r)
                }, t)) : (n = a, e.apply(o, r))
            }
        }
    })
}(),
function() {
    "use strict";
    vc.CorporateComm = Backbone.View.extend({
        initialize: function() {
            _.bindAll(this, "switchTabs", "tabsresize", "singleItem", "updateSelectedItem", "goToItem", "triggerClickItem"), this.par = $(".tabsContainer").parent(), this.currentTab = !1, this.years = $(".tabsContainer").detach(), this.$scrollNav = $(".scroll-nav"), this.$scrollNavItems = this.$scrollNav.find("a"), this.$selectedItem = this.$scrollNavItems.filter(".selected"), this.selectedItemPos = this.$scrollNavItems.index(this.$selectedItem), this.switchTabs(0), this.tabsresize(), this.render()
        },
        switchTabs: function(e) {
            this.currentTab && $(this.currentTab).detach(), this.par.append(this.years[e]), this.currentTab = this.years[e], $(".investor-relations tr.Blank td").append("&nbsp;")
        },
        tabsresize: function() {
            var e = $("#corporateTabs #tabs li"),
                t = e.length,
                i = 101 / t - 1 + "%";
            t > 1 ? ($("#corporateTabs #tabs li").css("width", i), $("#corporateTabs #tabs li a").click(function() {
                var e = $(this).attr("id");
                $(this).hasClass("inactive") && ($("#corporateTabs #tabs li a").addClass("inactive"), $(this).removeClass("inactive"), $("#corporateTabs .container").hide(), $("#corporateTabs #" + e + "Content").fadeIn("slow"))
            })) : $("#corporateTabs #tabs").hide()
        },
        singleItem: function(e) {
            var t = e.page.size;
            return 1 === t
        },
        updateSelectedItem: function() {
            this.$selectedItem = this.$scrollNavItems.filter(".selected"), this.selectedItemPos = this.$scrollNavItems.index(this.$selectedItem)
        },
        goToItem: function(e) {
            this.$scrollNav.trigger("to.owl.carousel", [e, 100, !0])
        },
        triggerClickItem: function(e) {
            if (this.singleItem(e)) {
                var t = e.item.index;
                this.$scrollNavItems.eq(t).trigger("click")
            }
        },
        events: {
            "changed.owl.carousel": function(e) {
                this.triggerClickItem(e)
            },
            "resize.owl.carousel": function(e) {
                this.updateSelectedItem(e)
            },
            "resized.owl.carousel": function(e) {
                this.singleItem(e) && this.goToItem(this.selectedItemPos)
            },
            "click .scroll-nav a": function(e) {
                var t = $(e.currentTarget);
                this.$scrollNavItems.removeClass("selected"), t.addClass("selected");
                var i = this.$scrollNavItems.index(e.currentTarget);
                return this.switchTabs(i), this.tabsresize(), !1
            }
        },
        render: function() {
            $(".js-financial-results").owlCarouselX({
                nav: !0,
                stagePadding: 60,
                startPosition: this.selectedItemPos,
                responsive: {
                    0: {
                        items: 1,
                        nav: !0,
                        stagePadding: 60
                    },
                    480: {
                        items: this.$scrollNavItems.length >= 4 ? 4 : this.$scrollNavItems.length,
                        nav: this.$scrollNavItems.length >= 4,
                        stagePadding: this.$scrollNavItems.length > 4 ? 60 : !1
                    },
                    1200: {
                        items: this.$scrollNavItems.length >= 7 ? 7 : this.$scrollNavItems.length,
                        nav: this.$scrollNavItems.length >= 7,
                        stagePadding: this.$scrollNavItems.length > 7 ? 60 : !1
                    }
                }
            }), $(".js-key-financial-data").owlCarouselX({
                startPosition: this.selectedItemPos,
                responsive: {
                    0: {
                        items: 1,
                        nav: !0,
                        stagePadding: 60
                    },
                    480: {
                        items: this.$scrollNavItems.length >= 2 ? 2 : this.$scrollNavItems.length,
                        nav: this.$scrollNavItems.length >= 2,
                        stagePadding: this.$scrollNavItems.length > 2 ? 60 : !1
                    },
                    1200: {
                        items: this.$scrollNavItems.length >= 4 ? 4 : this.$scrollNavItems.length,
                        nav: this.$scrollNavItems.length >= 4,
                        stagePadding: this.$scrollNavItems.length > 4 ? 60 : !1
                    }
                }
            }), $(".scroll-nav ul li:first-child a").addClass("selected")
        }
    })
}(),
function() {
    "use strict";
    vc.ManualsDropdown = vc.Dropdown.extend({
        initialize: function() {
            vc.Dropdown.prototype.initialize.apply(this, arguments), _.bindAll(this, "fetchData", "setDropdownData", "clickedYear", "clickedModel", "resetDropdown"), this.model = new vc.ManualsItem
        },
        events: {
            "click .manuals-dropdown-year .dropdown li": "clickedYear",
            "click .manuals-dropdown-model .dropdown li": "clickedModel",
            "change .manuals-dropdown-year .dropdown-fallback": "clickedYear",
            "change .manuals-dropdown-model .dropdown-fallback": "clickedModel"
        },
        fetchData: function(e, t) {
            e = e || null, t = t || null;
            var i = "/data/owners-manuals/listmanuals",
                n = i + (e ? "?year=" + e : "") + (e && t ? "&model=" + t : "");
            this.model.fetch({
                url: n,
                async: !1
            })
        },
        setDropdownData: function(e, t, i) {
            var n = $(i).children(".dropdown"),
                s = $(i).children(".dropdown-fallback");
            this.resetDropdown(i);
            for (var o = 0; o < e[t].length; o++) n.append('<li><a href="#" data-dropdown="' + e[t][o] + '">' + e[t][o] + "</a></li>"), s.append('<option value="' + e[t][o] + '">' + e[t][o] + "</option>")
        },
        resetDropdown: function(e) {
            var t = $(e).children(".dropdown"),
                i = $(e).children(".dropdown-fallback"),
                n = $(e).find(".dropdown-active-item"),
                s = i.data("defaultLabel");
            t.empty(), i.empty(), n.data("dropdownActive", s), n.html(s), i.append($("<option></option>").val(s).html(s).attr({
                selected: "selected",
                disabled: "disabled"
            }))
        },
        setResultsList: function(e) {
            var t = $("#volvo").find(".manuals-wrapper").find(".results-list-wrapper"),
                i = t.find(".results-list");
            i.empty();
            for (var n = 0; n < e.Manuals.length; n++) i.append('<li class="result-item"><div class="result-item-info"><div class="year">' + e.Manuals[n].year + '</div><div class="description">' + e.Manuals[n].desc + '</div></div><div class="result-item-button"><a class="button button-small button-opaque" target="_blank" href="' + e.Manuals[n].url + '">Download</a></div></li>');
            t.show()
        },
        clickedYear: function() {
            var e = this.$el.find(".manuals-dropdown-year .dropdown-fallback option:selected").last().text();
            this.fetchData(e), this.setDropdownData(this.model.getModels(), "Models", this.$el.children(".manuals-dropdown-model"))
        },
        clickedModel: function() {
            var e = this.$el.find(".manuals-dropdown-year .dropdown-fallback option:selected").last().text(),
                t = this.$el.find(".manuals-dropdown-model .dropdown-fallback option:selected").last().text();
            this.fetchData(e, t), this.setResultsList(this.model.getManuals())
        }
    })
}(),
function() {
    "use strict";
    vc.ManualsDropdownItem = vc.ManualsDropdown.extend({
        initialize: function() {
            vc.ManualsDropdown.prototype.initialize.apply(this, arguments), this.$el.hasClass("manuals-dropdown-year") && (this.fetchData(), this.setDropdownData(this.model.getYears(), "Years", this.$el)), this.$el.hasClass("manuals-dropdown-model")
        },
        events: {}
    })
}(),
function() {
    "use strict";
    vc.Chart = Backbone.View.extend({
        initialize: function() {
            _.bindAll(this, "setOptions", "hexToRgb", "fetchData", "createChart", "scrolledIntoView", "select", "createChart");
            var e = this;
            this.model = new vc.ChartItem, this.listenTo(this.model, "sync", this.createChart), this.listenTo(this.model, "error", this.dataError), this.$el.parents(".charts-container").bind("visible", function() {
                e.createChart(), e.delegateEvents()
            }), this.canvas = this.$el.find("canvas"), this.setOptions(), this.fetchData()
        },
        events: {
            "click canvas": "select",
            "mousemove canvas": "select",
            "mouseout canvas": "select",
            "scroll-spy:half-mark": "scrolledIntoView"
        },
        setOptions: function() {
            this.commonOptions = {
                responsive: !0,
                showTooltips: !1
            }
        },
        fetchData: function() {
            this.url = this.$el.data("chart-url"), this.model.fetch({
                url: this.url
            })
        },
        scrolledIntoView: function() {
            this.createChart()
        },
        createChart: function() {},
        dataError: function() {},
        hexToRgb: function(e) {
            e = e.replace(/^#/, "");
            var t = parseInt(e, 16),
                i = t >> 16 & 255,
                n = t >> 8 & 255,
                s = 255 & t;
            return [i, n, s]
        },
        select: function() {},
        render: function() {
            this.isViewScrolled()
        }
    }), vc.mixin(vc.Chart.prototype, vc.ScrollSpy)
}(),
function() {
    "use strict";
    vc.BarChart = vc.Chart.extend({
        initialize: function() {
            vc.Chart.prototype.initialize.apply(this, arguments), this.unit = this.$el.data("chart-unit") || ""
        },
        setOptions: function() {
            vc.Chart.prototype.setOptions.apply(this, arguments), this.chartOptions = _.extend({}, this.commonOptions, {
                scaleShowGridLines: !1,
                showScale: !0,
                scaleLineColor: "rgba(0, 0, 0, 0)",
                scaleGridLineWidth: 0,
                scaleShowLabels: !1,
                scaleFontColor: "rgba(255, 255, 255, .5)",
                scaleSteps: 0,
                barShowStroke: !1,
                barValueSpacing: 5
            }), this.fillColor = "rgba(255, 255, 255, 1)", this.fillColorUnselected = "rgba(255, 255, 255, .5)", this.style = "Bar"
        },
        createChart: function() {
            var e = this.model.get("data");
            this.$el.is(":visible") && !this.chart && e && this.spyVisible && (e.datasets[0].fillColor = this.fillColor, this.ctx = this.canvas.get(0).getContext("2d"), this.chart = new Chart(this.ctx)[this.style](e, this.chartOptions))
        },
        select: function(e) {
            var t = this,
                i = new Date;
            this.selectDelayHash = i;
            var n = this.chart.getBarsAtEvent(e),
                s = this.model.get("data"),
                o = this.fillColor,
                a = this.fillColorUnselected;
            "mousemove" === e.type && n[0] === this.selected || (n && n.length && s && s.datasets[0] && s.datasets[0].dataLocalized && n[0] !== this.selected ? (n = this.selected = n[0], n.fillColor = o, this.$el.find("var").html(s.datasets[0].dataLocalized[n.index] + " " + this.unit).addClass("value-visible"), this.chart.eachBars(function(e) {
                e !== n && (e.fillColor = a)
            }), this.chart.update()) : setTimeout(function() {
                t.selectDelayHash === i && (t.chart.eachBars(function(e) {
                    e.fillColor = o
                }), t.$el.find("var").removeClass("value-visible").html("&nbsp;"), t.selected = null, t.chart.update())
            }, 100))
        }
    })
}(),
function() {
    "use strict";
    vc.DoughnutChart = vc.Chart.extend({
        initialize: function() {
            vc.Chart.prototype.initialize.apply(this, arguments), _.bindAll(this, "setColors", "createTable", "selectSegment", "unselectSegment")
        },
        setOptions: function() {
            vc.Chart.prototype.setOptions.apply(this, arguments), this.chartOptions = _.extend({}, this.commonOptions, {
                animationEasing: "easeOutQuad",
                segmentShowStroke: !1,
                percentageInnerCutout: 70,
                animationSteps: 50
            }), this.colorSettings = {
                startColor: "#1b597f",
                endColor: "#dee6ed",
                highlightColor: "#1b597f",
                fillAlphaUnselected: ".4",
                fillAlphaSelected: "1"
            }, this.style = "Doughnut"
        },
        createChart: function() {
            var e = this.model.get("data");
            !this.chart && e && this.spyVisible() && (this.setColors(e, this.colorSettings.startColor, this.colorSettings.endColor, this.colorSettings.highlightColor), this.ctx = this.canvas.get(0).getContext("2d"), this.chart = new Chart(this.ctx)[this.style](e, this.chartOptions), this.setOriginColors(), this.createTable(e), this.setValueMode(e))
        },
        setValueMode: function(e) {
            var t = _.any(e, function(e) {
                return e.originalValue && 0 !== e.originalValue
            });
            t === !0 && this.$el.addClass("is-with-original-value")
        },
        setOriginColors: function() {
            Chart.helpers.each(this.chart.segments, function(e) {
                e.originColor = e.fillColor
            })
        },
        select: function(e) {
            var t = this.chart.getSegmentsAtEvent(e),
                i = t[0];
            "mousemove" === e.type && i === this.previouslySelected || (t && t.length && i !== this.previouslySelected ? (this.highlight(t[0]), this.previouslySelected = t[0]) : (this.resetHighlight(), this.previouslySelected = null))
        },
        highlight: function(e) {
            var t = this;
            this.highlightLegend(e), Chart.helpers.each(this.chart.segments, function(i) {
                i === e ? i.fillColor = i.highlightColor : (i.fillColor = i.originColor, t.setSegmentAlpha(i, .2))
            }), this.chart.update()
        },
        resetHighlight: function() {
            Chart.helpers.each(this.chart.segments, function(e) {
                e.fillColor = e.originColor
            }), this.clearHighlightedLegends(), this.chart.update()
        },
        selectSegment: function(e) {
            this.setSegmentAlpha(e, this.colorSettings.fillAlphaSelected)
        },
        unselectSegment: function(e) {
            this.setSegmentAlpha(e, this.colorSettings.fillAlphaUnselected)
        },
        highlightLegend: function(e) {
            this.clearHighlightedLegends(), this.$el.find("li.legend-row").addClass("dimmed");
            var t = this.getLegendRowFromSegment(e);
            t.removeClass("dimmed"), t.addClass("selected")
        },
        getLegendRowFromSegment: function(e) {
            return this.$el.find('li[data-label="' + e.label + '"]')
        },
        clearHighlightedLegends: function() {
            this.$el.find("li.legend-row").removeClass("selected"), this.$el.find("li.legend-row").removeClass("dimmed")
        },
        setSegmentAlpha: function(e, t) {
            var i = e.fillColor.split(",");
            i[3] = t + ")", e.fillColor = i.join(",")
        },
        setColors: function(e, t, i, n) {
            t = this.hexToRgb(t), i = this.hexToRgb(i), n = this.hexToRgb(n);
            for (var s = [], o = 0; 3 > o; o++) s[o] = Math.round((t[o] - i[o]) / _.size(e));
            var a = t;
            _.each(e, function(e) {
                e.color = "rgba(" + a[0] + "," + a[1] + "," + a[2] + ",1)", e.highlight = "rgba(" + n[0] + "," + n[1] + "," + n[2] + ",1)";
                for (var t = 0; 3 > t; t++) a[t] -= s[t]
            })
        },
        createTable: function(e) {
            var t = this,
                i = this.$el.find(".chart-table");
            _.each(e, function(e) {
                var n = $("<li>", {
                        "class": "legend-row",
                        "data-label": e.label
                    }),
                    s = $("<span>", {
                        "class": "chart-table-1"
                    }),
                    o = $("<i>", {
                        "class": "button button-dot"
                    });
                o.css("background-color", e.color), s.append(o), s.append(e.label);
                var a = $("<span>", {
                    "class": "chart-table-2"
                });
                e.valueLocalized && e.originalValue && 0 !== e.originalValue && e.originalValueLocalized ? a.html(e.originalValueLocalized + ' <span class="chart-table-percentage">(' + e.valueLocalized + " %)</span>") : e.valueLocalized && a.html(e.valueLocalized + " %"), n.append([s, a]), n.on("mouseover", function() {
                    Chart.helpers.each(t.chart.segments, function(i) {
                        i.label === e.label && t.highlight(i)
                    })
                }), i.on("mouseout", function() {
                    t.resetHighlight()
                }), i.append(n)
            })
        }
    })
}(),
function() {
    "use strict";
    vc.BarChartCarousel = Backbone.View.extend({
        initialize: function() {
            this.$navigators = this.$el.find(".carousel-navigators"), this.$leftNavigator = this.$navigators.find(".left-navigator"), this.$rightNavigator = this.$navigators.find(".right-navigator"), this.$indicatorsContainer = this.$navigators.find(".indicators-container"), this.$indicators = this.$navigators.find(".indicators"), this.$list = this.$el.find(".carousel-list"), this.selectedIndex = 0, this.maxSelectedIndex = this.$list.children().length, this.$rightNavigator.on("click", _.bind(this.navigateRight, this)), this.$leftNavigator.on("click", _.bind(this.navigateLeft, this)), this.setListVisibility(), this.initializeIndicators(), this.setActiveIndicator(), this.setNavigatorHeightInRelationToContent(), vc.app.$window.on("resize", _.bind(this.setNavigatorHeightInRelationToContent, this))
        },
        initializeIndicators: function() {
            for (var e = 0; e < this.maxSelectedIndex; e++) {
                var t = $('<li class="indicator" data-index="' + e + '" />');
                t.on("click", _.bind(this.handleIndicatorClick, this)), this.$indicators.append(t)
            }
        },
        handleIndicatorClick: function(e) {
            var t = $(e.currentTarget);
            this.selectedIndex = Number(t.data("index")), this.setActiveIndicator(), this.setListVisibility()
        },
        setNavigatorHeightInRelationToContent: function() {
            var e = this.$navigators.parent().height();
            this.$leftNavigator.css("height", e), this.$rightNavigator.css("height", e), this.$indicatorsContainer.css("top", e + this.$el.offset().top - this.$indicatorsContainer.outerHeight())
        },
        setActiveIndicator: function() {
            var e = this;
            _.each(this.$indicators.children(), function(t, i) {
                t = $(t), i === e.selectedIndex ? (t.addClass("active"), t.children().trigger("visible")) : t.removeClass("active")
            })
        },
        setListVisibility: function() {
            var e = this;
            _.each(this.$list.children(), function(t, i) {
                t = $(t), i === e.selectedIndex ? (t.addClass("visible"), t.children().trigger("visible")) : t.removeClass("visible")
            }), e.setNavigatorHeightInRelationToContent()
        },
        changeSelectedIndex: function(e) {
            this.selectedIndex += e, this.selectedIndex < 0 ? this.selectedIndex = this.maxSelectedIndex - 1 : this.selectedIndex >= this.maxSelectedIndex && (this.selectedIndex = 0)
        },
        navigateLeft: function() {
            this.changeSelectedIndex(-1), this.setListVisibility(), this.setActiveIndicator()
        },
        navigateRight: function() {
            this.changeSelectedIndex(1), this.setListVisibility(), this.setActiveIndicator()
        }
    })
}(),
function(e) {
    "use strict";
    vc.InteractiveVideo = Backbone.View.extend({
        initialize: function() {
            this.model = new vc.InterActiveVideoModel, e("html").addClass("interactive-video")
        },
        render: function() {
            var t = this;
            t.model.fetch({
                success: function(i) {
                    var n = document.documentMode && document.documentMode < 10,
                        s = JSON.parse("" + e("#" + e("div[id^=iv-dynamic-json-]", t.el)[0].id).html()),
                        o = s;
                    o.mainMovieSettings = e.extend(s.mainMovieSettings, i.attributes.mainMovieSettings), o.mainMovieSettings.primary = n ? "flash" : "primary";
                    for (var a = 0; a < s.hotspots.length; a++) o.hotspots[a] = e.extend(s.hotspots[a], i.attributes.hotspotSettings), o.hotspots[a].video && (o.hotspots[a].videodata.primary = n ? "flash" : "primary", o.hotspots[a].videodata.stagevideo = !1, o.hotspots[a].videodata.aspectratio = i.attributes.mainMovieSettings.aspectratio, o.hotspots[a].videodata.width = i.attributes.mainMovieSettings.width, o.hotspots[a].videodata.skin = i.attributes.mainMovieSettings.skin, WURFL.is_mobile && -1 === WURFL.form_factor.indexOf("Tablet") || (o.hotspots[a].videodata.image = ""));
                    t.interactivePlayerSetup(o, t.el)
                }
            })
        },
        interactivePlayerSetup: function(t, i) {
            function n(t) {
                u && 0 === f && (f = jwplayer(b).getDuration(), e.each(v, function(e, t) {
                    t.begin = f, t.end = f + 3
                })), s(t.position)
            }

            function s(t) {
                for (var i = p.context.id.split("interactive-video-")[1], n = 0; n < v.length; n++) {
                    var s = i + "-" + n;
                    if (v[n].begin <= t && v[n].end >= t) {
                        if (!v[n].show)
                            if (v[n].video) {
                                var b = document.createElement("div");
                                b.id = "sub-movie-" + s;
                                var u, f, m = "sub-movie-" + s,
                                    g = v[n].width + "%",
                                    y = v[n].thumbnailText;
                                u = c(v[n].gridPosition.column), f = d(v[n].gridPosition.row), C.append(b), e("#" + m).css({
                                    height: h(v[n].width),
                                    width: g
                                }), e("#" + m).append('<div id="submovie-container-' + s + '" style=display:none;"><div id="video-wrapper-' + s + '" class="video-wrapper-' + s + '"></div></div>'), e("#" + m).append('<a class="video-preview-' + s + '" href="#submovie-container-' + s + '" title="' + y + '"><span class="play-icon"></span><img src="' + v[n].thumbnailSrc + '"><span class="preview-overlay">' + v[n].thumbnailText + "</span></a>"), v[n].show = !0, v[n].videodata.id = "sub-movie-" + s, jwplayer("video-wrapper-" + s).setup(v[n].videodata).onReady(a(m, u, f, "video-wrapper-" + s)), r(".video-preview-", s, n, !1), WURFL.is_mobile && l("video-wrapper-" + s)
                            } else {
                                var w = document.createElement("a"),
                                    k = document.createElement("figure"),
                                    S = document.createElement("figcaption"),
                                    x = document.createElement("span"),
                                    I = document.createElement("img");
                                w.id = "spot-" + s, w.href = "javascript(void);", w.className = "gallery-popup-" + s, w.style.left = c(v[n].gridPosition.column), w.style.top = d(v[n].gridPosition.row), w.title = v[n].thumbnailText, I.src = v[n].thumbnailSrc, I.alt = v[n].thumbnailText, x.innerHTML = v[n].thumbnailText, S.appendChild(x), k.appendChild(I), k.appendChild(S), w.appendChild(k), e(w).css({
                                    width: v[n].width + "%",
                                    height: h(v[n].width)
                                }), $.append(w), w.style.opacity = 1, v[n].show = !0, r($.selector + " > a." + w.className, s, n, !0)
                            }
                    } else v[n].show && (v[n].video ? o(document.getElementById("sub-movie-" + s), s, !0) : o(document.getElementById("spot-" + s), s, !1), v[n].show = !1)
                }
            }

            function o(e, t, i) {
                var n = e;
                i && jwplayer("video-wrapper-" + t).remove(), document.getElementById(n.id).parentNode.removeChild(document.getElementById(n.id))
            }

            function a(t, i, n, s) {
                var o = document.getElementById(t);
                o.style.left = i, o.style.top = n, jwplayer(s).onComplete(function() {
                    e.magnificPopup.close()
                })
            }

            function r(t, i, n, s) {
                s ? e(t).magnificPopup({
                    items: v[n].galleryItems,
                    gallery: {
                        enabled: !0,
                        tCounter: '<div class="mfp-counter">%curr% / %total%</div>'
                    },
                    type: "image",
                    image: {
                        markup: '<div class="mfp-figure"><div class="mfp-title"></div><div class="mfp-close"></div><div class="mfp-img"></div><div class="mfp-bottom-bar"><div class="mfp-counter"></div></div></div>',
                        titleSrc: function() {
                            return this.ev[0].title
                        },
                        verticalFit: !0
                    },
                    closeOnBgClick: !1,
                    closeMarkup: '<button title="%title%" type="button" class="mfp-close"><i class="icon icon-close"></i></button>',
                    callbacks: {
                        beforeOpen: function() {
                            jwplayer(b).pause(!0)
                        },
                        open: function() {
                            this.bgOverlay.add(this.wrap).prependTo(p), this.wrap.find(".mfp-arrow-left").detach().appendTo(this.wrap.find(".mfp-content")), this.wrap.find(".mfp-arrow-right").detach().appendTo(this.wrap.find(".mfp-content"));
                            var t = this;
                            e(".mfp-gallery .mfp-content").on("click", ".mfp-close", function() {
                                t.close()
                            })
                        },
                        afterClose: function() {
                            jwplayer(b).pause(!1);
                            var i = e(t).parentsUntil(".interactive-video-player-container").last().parent().offset();
                            e("html, body").scrollTop(i.top - 70)
                        }
                    }
                }) : e(t + i).magnificPopup({
                    type: "inline",
                    closeMarkup: '<button title="%title%" type="button" class="mfp-close"><i class="icon icon-close"></i></button>',
                    tClose: "Close (Esc)",
                    closeOnBgClick: !1,
                    callbacks: {
                        beforeOpen: function() {
                            jwplayer(b).pause(!0)
                        },
                        open: function() {
                            var t = this.currItem.el[0].hash.split("#submovie-container-")[1];
                            e(".mfp-content #submovie-container-" + t).css("display", "block"), this.bgOverlay.add(this.wrap).prependTo(p);
                            var n = this;
                            e(".mfp-content #submovie-container-" + t).on("click", ".mfp-close", function() {
                                n.close()
                            }), e(e.magnificPopup.instance.container[0]).find(".mfp-close").after('<div class="mfp-title"></div>'), e(e.magnificPopup.instance.container[0]).find(".mfp-title").html(this.ev[0].title);
                            var s = e("#video-wrapper-" + i).parent().innerWidth(),
                                o = Math.round(s * (9 / 16));
                            jwplayer("video-wrapper-" + i).resize(s, o), jwplayer("video-wrapper-" + i).stop(), jwplayer("video-wrapper-" + i).play(!0)
                        },
                        afterClose: function() {
                            var n = e(t + i).parentsUntil(".interactive-video-player-container").last().parent().offset();
                            e("html, body").scrollTop(n.top - 70), u || jwplayer(b).pause(!1)
                        }
                    }
                })
            }

            function l(e) {
                jwplayer(e).onDisplayClick(function(e) {
                    var t = jwplayer(e.id).getState();
                    void 0 === t || "IDLE" === t || "PAUSED" === t ? jwplayer(e.id).play(!0) : jwplayer(e.id).play(!1)
                })
            }

            function c(e) {
                var t = 6.4,
                    i = 15.16;
                return t + e * i + "%"
            }

            function d(e) {
                var t = 7.64,
                    i = 15.97;
                return t + e * i + "%"
            }

            function h(t) {
                return Math.round(t / 100 * e(window).width() * (9 / 16) + 1) + "px"
            }
            var p = e(".interactive-video-player-container", i),
                b = e("div[id^=main-movie-]", i)[0].id,
                v = [],
                u = t.mainMovieSettings.displaySummary,
                f = 0;
            if (jwplayer(b).setup(t.mainMovieSettings), WURFL.is_mobile && jwplayer(b).onDisplayClick(function(t) {
                    var i = jwplayer(t.id).getState();
                    void 0 === i || "IDLE" === i || "PAUSED" === i ? jwplayer(t.id).play(!0) : jwplayer(t.id).play(!1), e("div[id^=video-wrapper].jwplayer").each(function(t) {
                        jwplayer(e(this).attr("id")).pause(!0)
                    })
                }), WURFL.is_mobile && -1 === WURFL.form_factor.indexOf("Tablet")) {
                var m = p,
                    g = p.context.id.split("interactive-video-")[1];
                e.each(t.hotspots, function(t, i) {
                    if (i.video) {
                        var n = g + "-" + t,
                            s = e('<div class="sub-movie"><div class="mobile-video-title"></div><div id="video-wrapper-' + n + '"></div></div>');
                        m.after(s), m = s, s.find(".mobile-video-title").html(i.thumbnailText), i.videodata.width = "100%", jwplayer("video-wrapper-" + n).setup(i.videodata), jwplayer("video-wrapper-" + n).onDisplayClick(function(t) {
                            var i = jwplayer(t.id).getState();
                            void 0 === i || "IDLE" === i || "PAUSED" === i ? jwplayer(t.id).play(!0) : jwplayer(t.id).play(!1), jwplayer(b).pause(!0), e("div[id^=video-wrapper].jwplayer").each(function(i) {
                                t.id !== e(this).attr("id") && jwplayer(e(this).attr("id")).pause(!0)
                            })
                        })
                    }
                })
            } else if (u) {
                var y = 0,
                    w = 3;
                e.each(t.hotspots, function(e, t) {
                    return t.video && (t.gridPosition.column = 4 - 2 * y, t.gridPosition.row = 3, v.push(t), y++, y === w) ? !1 : void 0
                })
            } else e.each(t.hotspots, function(e, t) {
                v.push(t)
            });
            var $ = e(".galleries", i),
                C = e(".videos", i);
            jwplayer(b).onPlay(function() {
                for (var t = 0; t < v.length; t++) e("#" + v[t].id).length > 0 && jwplayer(v[t].id).pause(!0)
            }), jwplayer(b).onTime(n), e(window).resize(function() {
                e("div[id^=sub-movie-], a[id^=spot-]").each(function() {
                    var t = 26.48;
                    e(this).css({
                        height: h(t)
                    })
                });
                var t = e(".mfp-content div[id^=video-wrapper-].jwplayer");
                if (t.length > 0) {
                    console.log("videoWrappersOnPage: " + t);
                    var i = t[0].id,
                        n = e("#" + i).parent().innerWidth(),
                        s = Math.round(n * (9 / 16));
                    jwplayer(i).resize(n, s)
                }
            })
        }
    })
}($),
function() {
    "use strict";
    vc.interactiveTimeline = Backbone.View.extend({
        initialize: function() {
            this.dataUrl = this.$el.data("url"), this.timelineSelector = "#" + this.$el.find(".vcc-timeline").attr("id"), VCC.timelineMain.run(this.timelineSelector)
        },
        render: function() {
            return this
        }
    })
}(),
function() {
    "use strict";
    vc.FeatureOptions = {}
}(),
function() {
    "use strict";
    vc.FeatureOptions.Model = Backbone.Model.extend({
        defaults: {
            title: "",
            htmlContent: ""
        }
    })
}(),
function() {
    "use strict";
    vc.FeatureOptions.Overlay = vc.Overlay.extend({
        className: vc.Overlay.prototype.className + " feature-overlay",
        tmpl: templates["feature-overlay"],
        initialize: function() {
            vc.Overlay.prototype.initialize.apply(this, arguments)
        },
        remove: function() {
            return this.model.set("active", !1), vc.Overlay.prototype.remove.call(this)
        },
        render: function() {
            this.model ? this.$el.html(this.tmpl.render(this.model.toJSON())) : this.$el.html(this.tmpl.render());
            var e = this.$el.find(".feature-video-player");
            if (e.length > 0) {
                e.attr("id", e.attr("id") + "-modal");
                var t = e.data("videos").split(","),
                    i = '<video id="' + e.attr("id") + '-video" width="100%" height="100%" style="width:100%; height:100%;" poster="' + e.data("poster") + '" controls="controls" class="mediaelement" preload="none">';
                i += '<source type="video/mp4" src="' + t[0] + '" title="480p SD" />', t.length > 1 && (i += '<source type="video/webm" src="' + t[1] + '" title="480p SD" />'), i += '<object width="100%" height="100%" style="width:100%; height:100%;" type="application/x-shockwave-flash" data="/Static/mediaelement/flashmediaelement.swf">', i += '<param name="movie" value="/Static/mediaelement/flashmediaelement.swf" />', i += '<param name="flashvars" value="controls=true&amp;file=' + t[0] + '" />', i += '<img src="' + e.data("poster") + '" width="100%" height="100%" style="width:100%; height:100%;" alt="No video playback capabilities" />', i += "</object>", i += "</video>", e.append(i), setTimeout(function() {
                    new vc.Video({
                        el: e
                    })
                }, 100)
            }
            return vc.app.trigger("mask:show"), this
        }
    })
}(),
function() {
    "use strict";
    vc.SliderOptions = {}
}(),
function() {
    "use strict";
    vc.SliderOptions.Model = Backbone.Model.extend({
        defaults: {
            title: "",
            htmlContent: ""
        }
    })
}(),
function() {
    "use strict";
    vc.SliderOptions.Overlay = vc.Overlay.extend({
        className: vc.Overlay.prototype.className + " slider-overlay",
        tmpl: templates["slider-overlay-temp"],
        initialize: function() {
            vc.Overlay.prototype.initialize.apply(this, arguments)
        },
        remove: function() {
            return this.model.set("active", !1), vc.Overlay.prototype.remove.call(this)
        },
        render: function() {
            this.model ? this.$el.html(this.tmpl.render(this.model.toJSON())) : this.$el.html(this.tmpl.render());
            var e = this.$el.find(".slider-video-player");
            if (e.length > 0) {
                var t = e.data("externalsrc"),
                    i = e.data("poster");
                if (t.length > 0) {
                    var n = '<img class="imgposter" src="' + i + '" /><iframe id="IframeSlideryoutube" class="js-Slider-videoIframe slider-video-active video-active" src="' + t + '&autoplay=1" frameborder="0" allowtransparency="true" allowfullscreen></iframe>';
                    e.append(n)
                } else {
                    e.attr("id", e.attr("id") + "-modal");
                    var s = e.data("videos").split(","),
                        o = '<video id="' + e.attr("id") + '-video" width="100%" height="100%" style="width:100%; height:100%;" poster="' + e.data("poster");
                    e.data("control") && (o += '"autoplay="autoplay"'), o += e.data("control") + '"controls="controls" class="mediaelement" preload="none">', o += '<source type="video/mp4" src="' + s[0] + '" title="480p SD" />', s.length > 1 && (o += '<source type="video/webm" src="' + s[1] + '" title="480p SD" />'), o += '<object width="100%" height="100%" style="width:100%; height:100%;" type="application/x-shockwave-flash" data="/Static/mediaelement/flashmediaelement.swf">', o += '<param name="movie" value="/Static/mediaelement/flashmediaelement.swf" />', o += '<param name="flashvars" value="controls=true&amp;file=' + s[0] + '" />', o += '<img src="' + e.data("poster") + '" width="100%" height="100%" style="width:100%; height:100%;" alt="No video playback capabilities" />', o += "</object>", o += "</video>", e.append(o), setTimeout(function() {
                        new vc.Video({
                            el: e
                        })
                    }, 100)
                }
            }
            return vc.app.trigger("mask:show"), this
        }
    })
}(),
function() {
    "use strict";
    vc.ReadMoreOverlay = {}
}(),
function() {
    "use strict";
    vc.ReadMoreOverlay.Model = Backbone.Model.extend({
        defaults: {
            htmlContent: ""
        }
    }), vc.ReadMoreOverlay.InitializeModel = Backbone.Model.extend({
        defaults: {
            id: ""
        }
    })
}(),
function() {
    "use strict";
    vc.ReadMoreOverlay.Overlay = vc.Overlay.extend({
        className: vc.Overlay.prototype.className + " readmoreoverlay",
        tmpl: templates["readmoreoverlay-temp"],
        initialize: function() {
            vc.Overlay.prototype.initialize.apply(this, arguments)
        },
        render: function() {
            this.model ? this.$el.html(this.tmpl.render(this.model.toJSON())) : this.$el.html(this.tmpl.render());
            var e = this.$el.find(".readmore-video-player");
            if (e.length > 0) {
                var t = e.data("externalsrc"),
                    i = e.data("poster");
                if (t.length > 0) {
                    var n = ' <div class="videoWrapper videoWrapper169 js-videoWrapper">  <img class="imgposter" src="' + i + '" /><iframe id="IframeextOverlay" class="videoIframe js-Slider-videoIframe src="" slider-video-active video-active" data-src="' + t + '" frameborder="0" allowtransparency="true" allowfullscreen></iframe> </div>';
                    e.append(n)
                } else {
                    e.attr("id", e.attr("id") + "-modal");
                    var s = e.data("videos").split(","),
                        o = '<video id="' + e.attr("id") + '-video" width="100%" height="100%" style="width:100%; height:100%;" poster="' + e.data("poster");
                    e.data("control") && (o += '"autoplay="autoplay"'), o += e.data("control") + '"controls="controls" class="mediaelement" preload="none">', o += '<source type="video/mp4" src="' + s[0] + '" title="MP4 Video" />', s.length > 1 && (o += '<source type="video/webm" src="' + s[1] + '" title="WebM Video" />'), s.length > 2 && (o += '<source type="video/youtube" src="' + s[2] + '" title="YouTube Video" />'), o += '<object width="100%" height="100%" style="width:100%; height:100%;" type="application/x-shockwave-flash" data="/Static/mediaelement/flashmediaelement.swf">', o += '<param name="movie" value="/Static/mediaelement/flashmediaelement.swf" />', o += '<param name="flashvars" value="controls=true&amp;file=' + s[0] + '" />', o += '<img src="' + e.data("poster") + '" width="100%" height="100%" style="width:100%; height:100%;" alt="No video playback capabilities" />', o += "</object>", o += "</video>", e.append(o), setTimeout(function() {
                        new vc.Video({
                            el: e
                        })
                    }, 100)
                }
            }
            return vc.app.trigger("mask:show"), this
        }
    })
}(),
function() {
    "use strict";
    var e = {
        initialize: function() {
            $(".prev").bind("click", function(t) {
                t.preventDefault(), e.prevClick(jQuery(this))
            }), $(".next").bind("click", function(t) {
                t.preventDefault(), e.nextClick(jQuery(this))
            })
        },
        prevClick: function() {
            var e = $(".glance-col"),
                t = $(".glance-col.enabled"),
                i = (t.first(), t.last()),
                n = e.index(t) - 1,
                s = e.eq(n),
                o = e.index(t) + 2,
                a = e.eq(o);
            i.removeClass("enabled"), i.addClass("disabled"), s.removeClass("disabled"), s.addClass("enabled"), e.removeClass("fourth"), a.addClass("fourth"), this.navigationClick()
        },
        nextClick: function() {
            var e = $(".glance-col"),
                t = $(".glance-col.enabled"),
                i = t.first(),
                n = (t.last(), e.index(t) + 4),
                s = e.eq(n);
            i.removeClass("enabled"), i.addClass("disabled"), s.removeClass("disabled"), s.addClass("enabled"), e.removeClass("fourth"), s.addClass("fourth"), this.navigationClick()
        },
        navigationClick: function() {
            $(".glance-col.first.disabled").length ? ($(".prev").removeClass("disabled"), $(".prev").addClass("enabled")) : ($(".prev").addClass("disabled"), $(".prev").removeClass("enabled")), $(".glance-col.last.enabled").length ? ($(".next").removeClass("enabled"), $(".next").addClass("disabled")) : ($(".next").addClass("enabled"), $(".next").removeClass("disabled"))
        }
    };
    vc.SpecificationGlance = Backbone.View.extend(e)
}(),
function() {
    "use strict";
    vc.SpecificationCarousel = Backbone.View.extend({
        initialize: function() {
            _.bindAll(this, "dragStart", "dragEnd", "next", "prev")
        },
        hammerEvents: function() {
            return Modernizr.touch ? {
                dragleft: "dragStart",
                dragright: "dragStart"
            } : {}
        },
        dragStart: function(e) {
            if (this.killHammerEvents(e), !this.dragging) {
                this.dragging = !0;
                var t = $(".glance-col"),
                    i = $(".glance-col.active"),
                    n = t.index(i),
                    s = t.index(i) - 1,
                    o = t.index(i) + 1;
                0 > s && (s = t.length - 1), o > t.length - 1 && (o = 0), this.currentItem = t.eq(n), this.prevItem = t.eq(s), this.nextItem = t.eq(o);
                var a = $(".spec-glan-dot-button"),
                    r = $(".spec-glan-dot-button.button-active"),
                    l = a.index(r),
                    c = a.index(r) - 1,
                    d = a.index(r) + 1;
                0 > c && (c = a.length - 1), d > a.length - 1 && (d = 0), this.currentDotItem = a.eq(l), this.prevDotItem = a.eq(c), this.nextDotItem = a.eq(d), vc.app.$body.hammer({
                    dragLockToAxis: !0,
                    dragBlockHorizontal: !0
                }).on("dragleft." + this.cid, this.drag).on("dragright." + this.cid, this.drag).on("dragend." + this.cid, this.dragEnd), this.dragging = !1
            }
        },
        dragEnd: function(e) {
            this.killHammerEvents(e), this.dragPercent = 0, vc.app.$body.hammer().off("." + this.cid);
            var t = Math.abs(e.gesture.deltaX) / this.$el.width() * 100,
                i = (t * Math.max(1, e.gesture.velocityX), e.gesture.direction === Hammer.DIRECTION_LEFT);
            i ? this.next() : this.prev()
        },
        next: function() {
            $(".glance-col").removeClass("prev-slide"), $(".glance-col").removeClass("next-slide");
            var e = this.currentItem,
                t = this.nextItem;
            e.addClass("prev-slide"), setTimeout(function() {
                e.removeClass("active")
            }, 500), setTimeout(function() {
                t.addClass("active")
            }, 500), this.currentDotItem.removeClass("button-active"), this.nextDotItem.addClass("button-active")
        },
        prev: function() {
            $(".glance-col").removeClass("prev-slide"), $(".glance-col").removeClass("next-slide");
            var e = this.currentItem,
                t = this.prevItem;
            e.addClass("next-slide"), setTimeout(function() {
                e.removeClass("active")
            }, 500), setTimeout(function() {
                t.addClass("active")
            }, 500), this.currentDotItem.removeClass("button-active"), this.prevDotItem.addClass("button-active")
        },
        killHammerEvents: function(e) {
            e.preventDefault(), e.stopPropagation(), e.gesture && (e.gesture.stopPropagation(), e.gesture.preventDefault())
        }
    });
    new vc.SpecificationCarousel
}(),
function() {
    "use strict";
    var e = {
        initialize: function() {
            function e() {
                t = "progress-" + i, n.css("opacity", .99), n.each(function(e) {
                    i <= $(this).attr("data") && 100 >= i && ($(this).removeClass("progress-" + (i - 1)), $(this).addClass("progress-" + i), $(this).find(".proc").text(i))
                }), 100 >= i && i++
            }
            var t, i = 0,
                n = $(".progress-radial");
            $(".reviews-overlay");
            setInterval(function() {
                e()
            }, 10), $(window).on("resize.carousel", function() {
                n.css("opacity", 1)
            })
        }
    };
    vc.ScoreBreakdown = Backbone.View.extend(e)
}(), $(document).ready(function() {
        function e(e) {
            var t, i = 0,
                n = $(".progress-radial");
            $(".overlay");
            setInterval(function() {
                t = "progress-" + i, n.each(function(e) {
                    i <= $(this).attr("data") && 100 >= i && ($(this).removeClass(), $(this).addClass("progres progress-radial progress-" + i), $(this).find(".proc").text(i))
                }), 100 >= i && i++
            }, 10)
        }
        $("#review-lineup").owlCarousel({
            items: 4,
            lazyLoad: !0,
            navigation: !0,
            slideSpeed: 800,
            itemsTablet: [768, 3],
            scrollPerPage: !0
        });
        var t = $("#review-lineup");
        t.owlCarousel(), $(".model-lineup-nav .next").click(function() {
            t.trigger("owl.next")
        }), $(".model-lineup-nav .prev").click(function() {
            t.trigger("owl.prev")
        }), $(".reviews-carousel").owlCarousel({
            afterMove: e,
            items: 8,
            navigation: !1,
            slideSpeed: 800,
            itemsDesktop: [1025, 8],
            itemsDesktopSmall: [1024, 5],
            itemsTablet: [768, 5],
            itemsMobile: [480, 3],
            pagination: !1
        });
        var i = $(".reviews-carousel");
        i.owlCarousel()
    }),
    function() {
        "use strict";
        vc.IndividualReviewModel = Backbone.Model.extend({
            urlRoot: "/data/reevoo/",
            toJSON: function() {
                return _.extend(Backbone.Model.prototype.toJSON.call(this), {
                    translate: vc.dictionary.Reevoo
                })
            }
        })
    }(),
    function() {
        "use strict";
        var e = {
            tmpl: templates["individual-review"],
            events: {
                "change .js-engine-filer-select": "selectFilterReview",
                "change .js-engine-sortBy-select": "selectSortReview",
                "click .js-engine-previous-click": "selectPrevious",
                "click .js-engine-next-click": "selectNext",
                "click .show-details": "showChart",
                "click .hide-details": "hideDetails",
                "click .more": "moreClick",
                "click .less": "lessClick",
                "click .js-button-first": "onFirstPageClicked",
                "click .js-button-last": "onLastPageClicked",
                "click .js-button-second": "onSecondPageClicked",
                "click .js-button-third": "onThirdPageClicked",
                "click .js-button-fourth": "onFourthPageClicked",
                "click .js-button-fifth": "onFifthPageClicked"
            },
            $btnFirst: null,
            $btnLast: null,
            $btnSecond: null,
            $btnThrid: null,
            $btnFourth: null,
            $btnFifth: null,
            currentPage: 0,
            totalPages: 0,
            initialize: function() {
                this.reviewModel = new vc.IndividualReviewModel, _.bindAll(this, "render", "update"), review.setting.modelCode && this.reviewModel.fetch({
                    data: $.param({
                        filterValue: "all",
                        sortValue: "recent",
                        pageNumber: "1",
                        reevooAPIUrl: review.setting.reevooUrl,
                        reevooTRKRef: review.setting.reevooTrkRef,
                        reevooLanguageCode: review.setting.reevooLanguageCode,
                        reevooAPIKey: review.setting.reevooAPIKey,
                        reevooAPIID: review.setting.reevooAPIID,
                        modelCode: review.setting.modelCode,
                        reviewsPerPage: review.setting.reevooReviewsPerPage,
                        language: review.setting.language
                    }),
                    success: _.bind(function() {
                        this.render(), this.preLoad(), this.update()
                    }, this)
                })
            },
            update: function() {
                this.$btnFirst = this.$el.find(".js-button-first"), this.$btnLast = this.$el.find(".js-button-last"), this.$btnSecond = this.$el.find(".js-button-second"), this.$btnThrid = this.$el.find(".js-button-third"), this.$btnFourth = this.$el.find(".js-button-fourth"), this.$btnFifth = this.$el.find(".js-button-fifth"), this.totalPages = Math.ceil(this.reviewModel.get("TotalPages")), this.currentPage = Math.ceil(this.reviewModel.get("CurrentPage")), this.$btnSecond.attr("title", "2"), this.$btnThrid.attr("title", "3"), this.$btnFourth.attr("title", "4"), this.$btnFifth.attr("title", "5"), $("#pagination_dot_1").addClass("hidden"), $("#pagination_dot_2").addClass("hidden"), 1 == this.reviewModel.get("TotalPages") ? (this.$btnFirst.parent().addClass("hidden"), this.$btnSecond.parent().addClass("hidden"), this.$btnThrid.parent().addClass("hidden"), this.$btnFourth.parent().addClass("hidden"), this.$btnFifth.parent().addClass("hidden"), $("#pagination_dot_1").addClass("hidden"), $("#pagination_dot_2").addClass("hidden")) : 2 == this.reviewModel.get("TotalPages") ? (this.$btnSecond.attr("title", "2"), this.$btnThrid.parent().addClass("hidden"), this.$btnFourth.parent().addClass("hidden"), this.$btnFifth.parent().addClass("hidden"), $("#pagination_dot_1").addClass("hidden"), $("#pagination_dot_2").addClass("hidden")) : 3 == this.reviewModel.get("TotalPages") ? (this.$btnSecond.attr("title", "2"), this.$btnThrid.attr("title", "3"), this.$btnFourth.parent().addClass("hidden"), this.$btnFifth.parent().addClass("hidden"), $("#pagination_dot_1").addClass("hidden"), $("#pagination_dot_2").addClass("hidden")) : 4 == this.reviewModel.get("TotalPages") ? (this.$btnSecond.attr("title", "2"), this.$btnThrid.attr("title", "3"), this.$btnFourth.attr("title", "4"), this.$btnFifth.parent().addClass("hidden"), $("#pagination_dot_1").addClass("hidden"), $("#pagination_dot_2").addClass("hidden")) : 5 == this.reviewModel.get("TotalPages") ? (this.$btnSecond.attr("title", "2"), this.$btnThrid.attr("title", "3"), this.$btnFourth.attr("title", "4"), this.$btnFifth.attr("title", "5"), $("#pagination_dot_1").addClass("hidden"), $("#pagination_dot_2").addClass("hidden")) : this.reviewModel.get("CurrentPage") > 4 && Math.ceil(this.reviewModel.get("TotalPages")) > 5 && this.reviewModel.get("CurrentPage") < Math.ceil(this.reviewModel.get("TotalPages")) - 3 ? (this.$btnSecond.parent().addClass("hidden"), this.$btnThrid.attr("title", this.reviewModel.get("CurrentPage") - 1), this.$btnFourth.attr("title", this.reviewModel.get("CurrentPage")), this.$btnFifth.attr("title", this.reviewModel.get("CurrentPage") + 1), $("#pagination_dot_1").removeClass("hidden"), $("#pagination_dot_2").removeClass("hidden")) : this.reviewModel.get("CurrentPage") <= 4 && Math.ceil(this.reviewModel.get("TotalPages")) > 5 ? ($("#pagination_dot_1").addClass("hidden"), $("#pagination_dot_2").removeClass("hidden")) : this.reviewModel.get("CurrentPage") == Math.ceil(this.reviewModel.get("TotalPages")) ? (this.$btnSecond.attr("title", this.reviewModel.get("CurrentPage") - 4), this.$btnThrid.attr("title", this.reviewModel.get("CurrentPage") - 3), this.$btnFourth.attr("title", this.reviewModel.get("CurrentPage") - 2), this.$btnFifth.attr("title", this.reviewModel.get("CurrentPage") - 1), $("#pagination_dot_1").removeClass("hidden")) : this.reviewModel.get("CurrentPage") > 4 && Math.ceil(this.reviewModel.get("TotalPages")) > 5 && this.reviewModel.get("CurrentPage") + 3 >= Math.ceil(this.reviewModel.get("TotalPages")) && (this.$btnSecond.attr("title", Math.ceil(this.reviewModel.get("TotalPages")) - 4), this.$btnThrid.attr("title", Math.ceil(this.reviewModel.get("TotalPages")) - 3), this.$btnFourth.attr("title", Math.ceil(this.reviewModel.get("TotalPages")) - 2), this.$btnFifth.attr("title", Math.ceil(this.reviewModel.get("TotalPages")) - 1), $("#pagination_dot_1").removeClass("hidden"), $("#pagination_dot_2").addClass("hidden")), Math.ceil(this.reviewModel.get("TotalPages")) < 6 && (this.$btnLast.parent().addClass("hidden"), $("#pagination_dot_1").addClass("hidden"), $("#pagination_dot_2").addClass("hidden")), this.reviewModel.get("CurrentPage") == this.$btnFirst.attr("title") ? (this.$btnFirst.addClass("page-active"), this.$btnSecond.removeClass("page-active"), this.$btnThrid.removeClass("page-active"), this.$btnFourth.removeClass("page-active"), this.$btnFifth.removeClass("page-active"), this.$btnLast.removeClass("page-active")) : this.reviewModel.get("CurrentPage") == this.$btnSecond.attr("title") ? (this.$btnSecond.addClass("page-active"), this.$btnFirst.removeClass("page-active"), this.$btnThrid.removeClass("page-active"), this.$btnFourth.removeClass("page-active"), this.$btnFifth.removeClass("page-active"), this.$btnLast.removeClass("page-active")) : this.reviewModel.get("CurrentPage") == this.$btnThrid.attr("title") ? (this.$btnThrid.addClass("page-active"), this.$btnFirst.removeClass("page-active"), this.$btnSecond.removeClass("page-active"), this.$btnFourth.removeClass("page-active"), this.$btnFifth.removeClass("page-active"), this.$btnLast.removeClass("page-active")) : this.reviewModel.get("CurrentPage") == this.$btnFourth.attr("title") ? (this.$btnFourth.addClass("page-active"), this.$btnFirst.removeClass("page-active"), this.$btnSecond.removeClass("page-active"), this.$btnThrid.removeClass("page-active"), this.$btnFifth.removeClass("page-active"), this.$btnLast.removeClass("page-active")) : this.reviewModel.get("CurrentPage") == this.$btnFifth.attr("title") ? (this.$btnFifth.addClass("page-active"), this.$btnFirst.removeClass("page-active"), this.$btnSecond.removeClass("page-active"), this.$btnThrid.removeClass("page-active"), this.$btnFourth.removeClass("page-active"), this.$btnLast.removeClass("page-active")) : this.reviewModel.get("CurrentPage") == Math.ceil(this.reviewModel.get("TotalPages")) && (this.$btnLast.addClass("page-active"), this.$btnFirst.removeClass("page-active"), this.$btnSecond.removeClass("page-active"), this.$btnThrid.removeClass("page-active"), this.$btnFourth.removeClass("page-active"), this.$btnFifth.removeClass("page-active")), this.updateTitle()
            },
            updateTitle: function() {
                this.$btnLast.html(Math.ceil(this.reviewModel.get("TotalPages"))), this.$btnSecond.html($("#Id2").attr("title")), this.$btnThrid.html($("#Id3").attr("title")),
                    this.$btnFourth.html($("#Id4").attr("title")), this.$btnFifth.html($("#Id5").attr("title"))
            },
            onFirstPageClicked: function(e) {
                var t = $(".individual-review-model"),
                    i = this.$btnFirst.attr("title"),
                    n = t.find(".js-engine-filer-select option:selected").val(),
                    s = t.find(".js-engine-sortBy-select option:selected").val();
                this.reviewModel.fetch({
                    data: $.param({
                        filterValue: n,
                        sortValue: s,
                        pageNumber: i,
                        reevooAPIUrl: review.setting.reevooUrl,
                        reevooTRKRef: review.setting.reevooTrkRef,
                        reevooLanguageCode: review.setting.reevooLanguageCode,
                        reevooAPIKey: review.setting.reevooAPIKey,
                        reevooAPIID: review.setting.reevooAPIID,
                        modelCode: review.setting.modelCode,
                        reviewsPerPage: review.setting.reevooReviewsPerPage,
                        language: review.setting.language
                    }),
                    success: _.bind(function(e) {
                        this.render(), this.preLoad(), this.update()
                    }, this)
                })
            },
            onLastPageClicked: function() {
                var e = this.$btnLast.attr("title"),
                    t = $(".individual-review-model"),
                    i = t.find(".js-engine-filer-select option:selected").val(),
                    n = t.find(".js-engine-sortBy-select option:selected").val();
                this.reviewModel.fetch({
                    data: $.param({
                        filterValue: i,
                        sortValue: n,
                        pageNumber: e,
                        reevooAPIUrl: review.setting.reevooUrl,
                        reevooTRKRef: review.setting.reevooTrkRef,
                        reevooLanguageCode: review.setting.reevooLanguageCode,
                        reevooAPIKey: review.setting.reevooAPIKey,
                        reevooAPIID: review.setting.reevooAPIID,
                        modelCode: review.setting.modelCode,
                        reviewsPerPage: review.setting.reevooReviewsPerPage,
                        language: review.setting.language
                    }),
                    success: _.bind(function(e) {
                        this.render(), this.preLoad(), this.update()
                    }, this)
                })
            },
            onSecondPageClicked: function() {
                var e = this.$btnSecond.attr("title"),
                    t = $(".individual-review-model"),
                    i = t.find(".js-engine-filer-select option:selected").val(),
                    n = t.find(".js-engine-sortBy-select option:selected").val();
                this.reviewModel.fetch({
                    data: $.param({
                        filterValue: i,
                        sortValue: n,
                        pageNumber: e,
                        reevooAPIUrl: review.setting.reevooUrl,
                        reevooTRKRef: review.setting.reevooTrkRef,
                        reevooLanguageCode: review.setting.reevooLanguageCode,
                        reevooAPIKey: review.setting.reevooAPIKey,
                        reevooAPIID: review.setting.reevooAPIID,
                        modelCode: review.setting.modelCode,
                        reviewsPerPage: review.setting.reevooReviewsPerPage,
                        language: review.setting.language
                    }),
                    success: _.bind(function(e) {
                        this.render(), this.preLoad(), this.update()
                    }, this)
                })
            },
            onThirdPageClicked: function() {
                var e = this.$btnThrid.attr("title"),
                    t = $(".individual-review-model"),
                    i = t.find(".js-engine-filer-select option:selected").val(),
                    n = t.find(".js-engine-sortBy-select option:selected").val();
                this.reviewModel.fetch({
                    data: $.param({
                        filterValue: i,
                        sortValue: n,
                        pageNumber: e,
                        reevooAPIUrl: review.setting.reevooUrl,
                        reevooTRKRef: review.setting.reevooTrkRef,
                        reevooLanguageCode: review.setting.reevooLanguageCode,
                        reevooAPIKey: review.setting.reevooAPIKey,
                        reevooAPIID: review.setting.reevooAPIID,
                        modelCode: review.setting.modelCode,
                        reviewsPerPage: review.setting.reevooReviewsPerPage,
                        language: review.setting.language
                    }),
                    success: _.bind(function(e) {
                        this.render(), this.preLoad(), this.update()
                    }, this)
                })
            },
            onFourthPageClicked: function() {
                var e = this.$btnFourth.attr("title"),
                    t = $(".individual-review-model"),
                    i = t.find(".js-engine-filer-select option:selected").val(),
                    n = t.find(".js-engine-sortBy-select option:selected").val();
                this.reviewModel.fetch({
                    data: $.param({
                        filterValue: i,
                        sortValue: n,
                        pageNumber: e,
                        reevooAPIUrl: review.setting.reevooUrl,
                        reevooTRKRef: review.setting.reevooTrkRef,
                        reevooLanguageCode: review.setting.reevooLanguageCode,
                        reevooAPIKey: review.setting.reevooAPIKey,
                        reevooAPIID: review.setting.reevooAPIID,
                        modelCode: review.setting.modelCode,
                        reviewsPerPage: review.setting.reevooReviewsPerPage,
                        language: review.setting.language
                    }),
                    success: _.bind(function(e) {
                        this.render(), this.preLoad(), this.update(), this.update()
                    }, this)
                })
            },
            onFifthPageClicked: function() {
                var e = this.$btnFifth.attr("title"),
                    t = $(".individual-review-model"),
                    i = t.find(".js-engine-filer-select option:selected").val(),
                    n = t.find(".js-engine-sortBy-select option:selected").val();
                this.reviewModel.fetch({
                    data: $.param({
                        filterValue: i,
                        sortValue: n,
                        pageNumber: e,
                        reevooAPIUrl: review.setting.reevooUrl,
                        reevooTRKRef: review.setting.reevooTrkRef,
                        reevooLanguageCode: review.setting.reevooLanguageCode,
                        reevooAPIKey: review.setting.reevooAPIKey,
                        reevooAPIID: review.setting.reevooAPIID,
                        modelCode: review.setting.modelCode,
                        reviewsPerPage: review.setting.reevooReviewsPerPage,
                        language: review.setting.language
                    }),
                    success: _.bind(function(e) {
                        this.render(), this.preLoad(), this.update()
                    }, this)
                })
            },
            preLoad: function() {
                if (!this.reviewModel.get("PreviousPage")) {
                    var e = $(".individual-review-model");
                    e.find(".js-engine-previous-click").hide()
                }
                if (!this.reviewModel.get("NextPage")) {
                    var e = $(".individual-review-model");
                    e.find(".js-engine-next-click").hide()
                }
                if (this.reviewModel.get("FilterValue")) {
                    var e = $(".individual-review-model");
                    e.find(".js-engine-filer-select option[value='" + this.reviewModel.get("FilterValue") + "']").prop("selected", !0), e.find(".js-engine-sortBy-select option[value='" + this.reviewModel.get("SortValue") + "']").prop("selected", !0), e.find(".js-engine-filer-select option[value='" + this.reviewModel.get("FilterValue") + "']").prop("disabled", !0), e.find(".js-engine-sortBy-select option[value='" + this.reviewModel.get("SortValue") + "']").prop("disabled", !0)
                }
                var t = $(".wraper");
                _.each(t, function(e) {
                    var t = $(e).find(".pager");
                    _.each(t, function(t) {
                        $(t).height() > "270" && ($(t).addClass("readmore-display"), $(e).addClass("readmore-display"))
                    })
                })
            },
            render: function() {
                this.reviewModel.get("TotalNoOfReviewers") && this.$el.html(this.tmpl.render(this.reviewModel.toJSON()))
            },
            selectFilterReview: function(e) {
                var t = $(".individual-review-model"),
                    i = t.find(".js-engine-sortBy-select option:selected").val(),
                    n = $(e.target).val();
                this.reviewModel.fetch({
                    data: $.param({
                        filterValue: n,
                        sortValue: i,
                        pageNumber: "1",
                        reevooAPIUrl: review.setting.reevooUrl,
                        reevooTRKRef: review.setting.reevooTrkRef,
                        reevooLanguageCode: review.setting.reevooLanguageCode,
                        reevooAPIKey: review.setting.reevooAPIKey,
                        reevooAPIID: review.setting.reevooAPIID,
                        modelCode: review.setting.modelCode,
                        reviewsPerPage: review.setting.reevooReviewsPerPage,
                        language: review.setting.language
                    }),
                    success: _.bind(function(e) {
                        this.render(e), this.preLoad(), this.update()
                    }, this)
                })
            },
            selectSortReview: function(e) {
                var t = $(".individual-review-model"),
                    i = t.find(".js-engine-filer-select option:selected").val(),
                    n = $(e.target).val();
                this.reviewModel.fetch({
                    data: $.param({
                        filterValue: i,
                        sortValue: n,
                        pageNumber: "1",
                        reevooAPIUrl: review.setting.reevooUrl,
                        reevooTRKRef: review.setting.reevooTrkRef,
                        reevooLanguageCode: review.setting.reevooLanguageCode,
                        reevooAPIKey: review.setting.reevooAPIKey,
                        reevooAPIID: review.setting.reevooAPIID,
                        modelCode: review.setting.modelCode,
                        reviewsPerPage: review.setting.reevooReviewsPerPage,
                        language: review.setting.language
                    }),
                    success: _.bind(function(e) {
                        this.render(), this.preLoad(), this.update()
                    }, this)
                })
            },
            selectPrevious: function() {
                var e = this.reviewModel.get("PreviousPage"),
                    t = $(".individual-review-model"),
                    i = t.find(".js-engine-sortBy-select option:selected").val(),
                    n = t.find(".js-engine-filer-select option:selected").val();
                this.reviewModel.fetch({
                    data: $.param({
                        filterValue: n,
                        sortValue: i,
                        pageNumber: e,
                        reevooAPIUrl: review.setting.reevooUrl,
                        reevooTRKRef: review.setting.reevooTrkRef,
                        reevooLanguageCode: review.setting.reevooLanguageCode,
                        reevooAPIKey: review.setting.reevooAPIKey,
                        reevooAPIID: review.setting.reevooAPIID,
                        modelCode: review.setting.modelCode,
                        reviewsPerPage: review.setting.reevooReviewsPerPage,
                        language: review.setting.language
                    }),
                    success: _.bind(function(e) {
                        this.render(), this.preLoad(), this.update()
                    }, this)
                })
            },
            selectNext: function() {
                var e = this.reviewModel.get("NextPage"),
                    t = $(".individual-review-model"),
                    i = t.find(".js-engine-sortBy-select option:selected").val(),
                    n = t.find(".js-engine-filer-select option:selected").val();
                this.reviewModel.fetch({
                    data: $.param({
                        filterValue: n,
                        sortValue: i,
                        pageNumber: e,
                        reevooAPIUrl: review.setting.reevooUrl,
                        reevooTRKRef: review.setting.reevooTrkRef,
                        reevooLanguageCode: review.setting.reevooLanguageCode,
                        reevooAPIKey: review.setting.reevooAPIKey,
                        reevooAPIID: review.setting.reevooAPIID,
                        modelCode: review.setting.modelCode,
                        reviewsPerPage: review.setting.reevooReviewsPerPage,
                        language: review.setting.language
                    }),
                    success: _.bind(function(e) {
                        this.render(), this.preLoad(), this.update()
                    }, this)
                })
            },
            showChart: function(e) {
                var t = $(e.target),
                    i = t.parent().find(".line-chart");
                _.each(i, function(e) {
                    var t = $(e),
                        i = t.find(".progress-counter span"),
                        n = t.find(".line-progress");
                    _.each(i, function() {
                        var e = i.attr("data"),
                            t = (i.css("width", e + "%"), i),
                            s = t.attr("style");
                        s = s.replace("width:", ""), s = s.substr(0, s.length - 1);
                        var o, a = 0,
                            r = parseInt(s),
                            l = a,
                            c = function() {
                                l++, n.html(l + "<span class='chart-procent-style'>%</span>"), l === r && clearInterval(o)
                            };
                        o = setInterval(c, 1e3 / (r + 1))
                    })
                });
                var n = t.parent().find(".line-charts");
                n.slideDown("slow"), t.parent().find(".show-details").hide(), t.parent().find(".hide-details").show()
            },
            hideDetails: function(e) {
                var t = $(e.target),
                    i = t.parent().find(".line-charts");
                i.slideUp("fast"), t.parent().find(".hide-details").hide(), t.parent().find(".show-details").show()
            },
            moreClick: function(e) {
                var t = $(e.target),
                    i = t.parent().parent();
                i.addClass("more-height"), i.removeClass("less-height"), t.hide(), t.parent().parent().find(".less").show()
            },
            lessClick: function(e) {
                var t = $(e.target),
                    i = t.parent().parent();
                i.removeClass("more-height"), t.hide(), t.parent().parent().find(".more").show()
            }
        };
        vc.IndividualReviewsObject = Backbone.View.extend(e)
    }(),
    function() {
        "use strict";
        vc.ExteriorFeatureOne = Backbone.View.extend({
            initialize: function() {
                this.openPopup()
            },
            openPopup: function() {
                $(".extf-one a").on("click", function(e) {
                    if ($(window).width() > 480) {
                        var t = $(this);
                        t.is("[href*='popup=1']") && (e.preventDefault(), t.magnificPopup({
                            items: {
                                src: '<div class="hero-popup"><iframe src="' + t.attr("href") + '"></iframe></div>',
                                type: "inline"
                            },
                            closeBtnInside: !1
                        }).magnificPopup("open"))
                    }
                })
            }
        })
    }(),
    function() {
        "use strict";
        var e = null;
        vc.ExteriorFeatureTwo = Backbone.View.extend({
            initialize: function() {
                this.openPopup()
            },
            events: {
                "click a.readmore-overlay-link": "showReadMoreOverlay",
                "click .js-ExteriorTwo-videoWrapper": "showVideoOverlay"
            },
            showReadMoreOverlay: function(t) {
                t.preventDefault();
                var i = t.currentTarget.attributes.href.value;
                e = new vc.ReadMoreOverlay.InitializeModel, e.set("ID", i);
                new vc.ReadMoreOverlayObject({
                    model: e
                })
            },
            showVideoOverlay: function(e) {
                var t = $(e.currentTarget),
                    i = $(t).find("iframe").clone(),
                    n = i.data("src");
                i.addClass("video-active");
                var s = '<div class="overlay-close YouTubeVideo-overlay-close icon icon-close" style="display: block;"></div>';
                i.attr("src", n + "&autoplay=1"), vc.app.$mask.append(s), vc.app.$mask.append(i), vc.app.trigger("mask:show")
            },
            openPopup: function() {
                $(".extf-two a").on("click", function(e) {
                    if ($(window).width() > 480) {
                        var t = $(this);
                        t.is("[href*='popup=1']") && (e.preventDefault(), t.magnificPopup({
                            items: {
                                src: '<div class="hero-popup"><iframe src="' + t.attr("href") + '"></iframe></div>',
                                type: "inline"
                            },
                            closeBtnInside: !1
                        }).magnificPopup("open"))
                    }
                })
            }
        })
    }(),
    function() {
        "use strict";
        var e = null;
        vc.ExteriorFeatureThree = Backbone.View.extend({
            initialize: function() {},
            events: {
                "click .extf-container .extf-image .grid .video": "showVideoOverlay",
                "click a.readmore-overlay-link": "showReadMoreOverlay"
            },
            showVideoOverlay: function(e) {
                var t = $(e.currentTarget),
                    i = $(t).find(".video-popup").data("externalsrc");
                if (i.length > 1) {
                    $.magnificPopup.close();
                    var n = '<iframe id="IframeExteriorTwoyoutube" class="videoIframe js-ExteriorTwo-videoIframe video-active" src="' + i + '&autoplay=1" frameborder="0" allowtransparency="true" allowfullscreen></iframe>',
                        s = '<div class="overlay-close YouTubeVideo-overlay-close icon icon-close" style="display: block;"></div>';
                    vc.app.$mask.append(s), vc.app.$mask.append(n), vc.app.trigger("mask:show")
                }
            },
            showReadMoreOverlay: function(t) {
                t.preventDefault();
                var i = t.currentTarget.attributes.href.value;
                e = new vc.ReadMoreOverlay.InitializeModel, e.set("ID", i);
                new vc.ReadMoreOverlayObject({
                    model: e
                })
            },
            render: function() {
                var e, t = this;
                $(".video-popup").magnificPopup({
                    fixedContentPos: !1,
                    items: {
                        src: $('<div class="video-popup-container"><div class="mfp-title">Film Title</div><video id="video-id-1"class="mediaelement"width="100%" height="100%"style="width:100%; height:100%;"poster=""controls="controls"preload="auto"src="/Static/videos/XC90.mp4"></video></div>'),
                        type: "inline"
                    },
                    closeMarkup: '<button title="%title%" type="button" class="mfp-close"><i class="icon icon-close"></i></button>',
                    callbacks: {
                        open: function() {
                            var i = this;
                            $(".mfp-content .video-popup-container").on("click", ".mfp-close", function() {
                                i.close()
                            });
                            var n, s, o = this.st.el[0].attributes;
                            $.each(o, function(t, i) {
                                "data-id" === i.name && (e = i.value), "data-video-poster" === i.name && (n = i.value), "data-video-file" === i.name && (s = i.value)
                            });
                            var a = this.st.el[0].title;
                            $(this.currItem.src[0]).find("video")[0].id = e, $(this.currItem.src[0]).find(".mfp-title")[0].innerHTML = a;
                            var r, l = this.st.el[0].attributes;
                            $.each(l, function(e, t) {
                                "data-mfp-src" === t.name && (r = t.value)
                            }), t.initVideo(this, e, r)
                        },
                        close: function() {}
                    }
                })
            },
            player: null,
            initVideo: function(e, t, i) {
                if (this.render(), mejs) {
                    var n = _.keys(mejs.players);
                    _.each(n, function(e) {
                        mejs.players[e].container && mejs.players[e].remove()
                    })
                }
                this.player = new MediaElementPlayer("#" + t, {
                    success: function(e, t) {
                        e.addEventListener("ended", function(e) {
                            $.magnificPopup.instance.close()
                        }, !1)
                    },
                    enablePluginDebug: !1,
                    startVolume: .5,
                    loop: !1,
                    timerRate: 250,
                    features: ["playpause", "progress", "volume", "fullscreen", "tracks"],
                    iPadUseNativeControls: !0,
                    iPhoneUseNativeControls: !0,
                    AndroidUseNativeControls: !0,
                    alwaysShowHours: !1,
                    showTimecodeFrameCount: !1,
                    framesPerSecond: 25,
                    enableKeyboard: !0,
                    pauseOtherPlayers: !0,
                    keyActions: []
                }), this.player.setSrc(i), this.player.play()
            }
        })
    }(),
    function() {
        "use strict";
        vc.EventCalendar = Backbone.View.extend({
            initialize: function() {},
            render: function() {
                var e = $(".outlook-link").find("input").attr("value"),
                    t = null,
                    i = function(e) {
                        var i = new Blob([e], {
                            type: "text/plain"
                        });
                        return null !== t && window.URL.revokeObjectURL(t), t = window.URL.createObjectURL(i)
                    };
                $("#js-download-link").attr("href", i(e))
            }
        })
    }(),
    function() {
        "use strict";
        vc.TimeSaverCalculator = Backbone.View.extend({
            initialize: function() {},
            render: function() {
                var e = this;
                $(".calc-input a").on("click", function(t) {
                    t.preventDefault();
                    var i = $(".calc-input > input").val();
                    if (0 === i.length || "" === i || e.unchanged) return !1;
                    var n = $("#minuteUnitLabel").val(),
                        s = $("#hourUnitLabel").val(),
                        o = $("#dayUnitLabel").val(),
                        a = $("#oneWayTrip").val(),
                        r = $("#DaysPerYear").val(),
                        l = e.minutesToString(i, a, r, n, s, o);
                    $(".calc-result .result-time p").html(l), $(".calc-result").toggleClass("show");
                    var c = $(".calc-result .result-time p").innerHeight() + 40,
                        d = $(".calc-result .result-text").innerHeight();
                    $(".calc-result").hasClass("show") ? $(".calc-result").innerHeight(c + d) : $(".calc-result").innerHeight(0), e.unchanged = !0
                }), $(".calc-input > input").on("keydown", function(t) {
                    e.unchanged = !1, $(".time-saver-calc .calc-result").removeClass("show"), $(".time-saver-calc .calc-result").innerHeight(0), 13 == t.keyCode && $(".calc-input a").trigger("click"), -1 !== $.inArray(t.keyCode, [46, 8, 9, 27, 13, 110, 190]) || 65 == t.keyCode && t.ctrlKey === !0 || 67 == t.keyCode && t.ctrlKey === !0 || 88 == t.keyCode && t.ctrlKey === !0 || t.keyCode >= 35 && t.keyCode <= 39 || (t.shiftKey || t.keyCode < 48 || t.keyCode > 57) && (t.keyCode < 96 || t.keyCode > 105) && t.preventDefault()
                })
            },
            minutesToString: function(e, t, i, n, s, o) {
                var a = e * i;
                "1" === t && (a = 2 * a);
                var r = String(o),
                    l = String(s),
                    c = String(n),
                    d = {};
                d[r] = 1440, d[l] = 60, d[c] = 1;
                var h = [];
                for (var p in d) {
                    var b = Math.floor(a / d[p]);
                    0 !== b && h.push(" " + b + " " + p), a %= d[p]
                }
                return h
            },
            unchanged: !1
        })
    }(),
    function() {
        "use strict";
        vc.CarCampaignConfigurator = Backbone.View.extend({
            properties: {
                selectedColorData: void 0,
                versionIndex: void 0,
                selectedDealer: void 0,
                selectedVariantId: void 0,
                jsonData: void 0
            },
            events: {
                "click .campaign-color-selector a": "carColorChanged",
                "click .select-model button": "carVersionChanged",
                "click .no-dealer-selected a": "scrollToDealerLocatorClicked",
                "click .button-back": "backCarouselImage",
                "click .button-next": "nextCarouselImage",
                "click .continue-to-payment": "continueToPaymentClicked"
            },
            initialize: function() {
                _.bindAll(this, "carColorChanged", "initDealerLocator", "windowResized"), $(window).on("resize.app", _.throttle(this.windowResized, 100))
            },
            render: function() {
                var e = this;
                this.$el.find(".campaign-color-selector a").each(function() {
                    var t = e.getColorData($(this).attr("data-car-color"));
                    t && 0 !== t.quantity || $(this).addClass("out-of-stock")
                });
                var t = e.getDefaultColorData();
                this.properties.selectedColorData = t, t.rally.quantity > 0 ? this.properties.versionIndex = 0 : t.sunset.quantity > 0 && (this.properties.versionIndex = 1), this.configureGui();
                var i = setInterval(function() {
                    vc.DealerLocator && vc.DealerLocator.App && !vc.DealerLocator.app && (clearInterval(i), e.initDealerLocator())
                }, 500)
            },
            windowResized: function() {
                this.equalizeVersionBlocks()
            },
            showCarouselForSelectedColor: function() {
                this.$el.find(".story-carousel").each(function() {
                    return "visible" === $(this).css("visibility") ? ($(this).css({
                        visibility: "hidden"
                    }), !1) : void 0
                }), this.$el.find(".story-carousel[data-car-color='" + this.properties.selectedColorData.color + "']").css({
                    visibility: "visible"
                })
            },
            carColorChanged: function(e) {
                e.preventDefault();
                var t = $(e.currentTarget);
                if (!t.hasClass("selected") && !t.hasClass("out-of-stock")) {
                    this.$el.find(".campaign-color-selector a.selected").removeClass("selected"), t.addClass("selected");
                    var i = this.getColorData(t.attr("data-car-color"));
                    this.properties.selectedColorData = i, 0 === this.properties.versionIndex && 0 === this.properties.selectedColorData.rally.quantity ? this.properties.versionIndex = 1 : 1 === this.properties.versionIndex && 0 === this.properties.selectedColorData.sunset.quantity && (this.properties.versionIndex = 0), this.configureGui()
                }
            },
            carVersionChanged: function(e) {
                e.preventDefault();
                var t = $(e.currentTarget),
                    i = t.parent().parent();
                if (!i.hasClass("il-option-selected") && !t.hasClass("button-disabled")) {
                    this.$el.find(".car-version").toggleClass("il-option").toggleClass("il-option-selected");
                    var n = this.$el.find(".car-version");
                    $(n[0]).hasClass("il-option-selected") ? this.properties.versionIndex = 0 : this.properties.versionIndex = 1, this.selectVersion(), this.setOrderDetails()
                }
            },
            scrollToDealerLocatorClicked: function(e) {
                e.preventDefault();
                var t = this;
                $("html, body").animate({
                    scrollTop: t.$el.find(".dealer-locator-title").offset().top - 90
                }, 500)
            },
            backCarouselImage: function(e) {
                e.preventDefault();
                for (var t = $(e.currentTarget), i = t.closest(".story-carousel").find(".story-dots .button-dot"), n = 0; n < i.length; n++)
                    if ($(i[n]).hasClass("button-active")) {
                        0 === n ? $(i[i.length - 1]).click() : $(i[n - 1]).click();
                        break
                    }
            },
            nextCarouselImage: function(e) {
                e.preventDefault();
                for (var t = $(e.currentTarget), i = t.closest(".story-carousel").find(".story-dots .button-dot"), n = 0; n < i.length; n++)
                    if ($(i[n]).hasClass("button-active")) {
                        n === i.length - 1 ? $(i[0]).click() : $(i[n + 1]).click();
                        break
                    }
            },
            getDefaultColorData: function() {
                var e = null;
                return $.each(this.getData().stock, function() {
                    return this.quantity > 0 ? (e = this, !1) : void 0
                }), e
            },
            getColorData: function(e) {
                var t = $.grep(this.getData().stock, function(t) {
                    return t.color === e
                });
                return 0 === t.length ? null : t[0]
            },
            i18n: function(e) {
                return this.getData().dictionary[e]
            },
            initDealerLocator: function() {
                var e = this;
                Modernizr.geolocation = !1, vc.app.stopListening(vc.app, "mask:show"), vc.DealerLocator.App.prototype.setHeight = function() {}, vc.DealerLocator.Form.prototype.updateHeight = function() {
                    e.$el.find(".dealer-locator-list-scroller").css("padding-top", "0px")
                };
                var t = vc.DealerLocator.Form.prototype.submitSearch;
                vc.DealerLocator.Form.prototype.submitSearch = function(i) {
                    t.bind(vc.DealerLocator.app.form)(i), e.setNearBySearchTerm()
                }, vc.DealerLocator.DealerCollection.prototype.fetch = function(t) {
                    if (parseInt($(".dealer-locator-map").attr("data-preload"), 10)) {
                        $(".map-container").outerWidth(!0) - $(".map-container").outerWidth() >= 0 && (t.data.bottomRightlatitude = -90, t.data.bottomRightlongitude = 180, t.data.topLeftlatitude = 90, t.data.topLeftlongitude = -180);
                        var i = this;
                        vc.dealerData.findDealersInBox(t).done(function(n) {
                            var s = [];
                            $.each(n, function() {
                                $.inArray(this.DealerId, e.getData().polestarDealers) > -1 && s.push(this)
                            }), i.set(s, t), i.trigger("sync", i)
                        })
                    } else Backbone.Collection.prototype.fetch.call(this, t)
                }, vc.DealerLocator.AccordionItem.prototype.tmpl = templates["car-campaign-dealer-accordion-item"];
                var i = new vc.DealerLocator.Locator,
                    n = new vc.DealerLocator.DealerCollection;
                vc.DealerLocator.map.init(), vc.DealerLocator.router = new vc.DealerLocator.Router({
                    model: i
                });
                var s = this.$el.find(".car-campaign-dealer-locator").addClass("dealer-locator");
                vc.DealerLocator.app = new vc.DealerLocator.App({
                    el: s,
                    collection: n,
                    model: i
                }).render(), this.listenTo(vc.DealerLocator.app.collection, "change:active", this.activeDealerChanged), this.listenTo(vc.DealerLocator.app.collection, "dealer-name-selected", this.dealerNameSelected)
            },
            setNearBySearchTerm: function() {
                var e = vc.DealerLocator.app.form.$search.val();
                e = e.replace(/(?:^\w|[A-Z]|\b\w)/g, function(e) {
                    return e.toUpperCase()
                }), e ? (this.$el.find(".dealer-search-term").text(e), this.$el.find(".dealer-search-term-container").show()) : this.$el.find(".dealer-search-term-container").hide()
            },
            dealerNameSelected: function() {
                this.setNearBySearchTerm()
            },
            activeDealerChanged: function() {
                var e = this;
                if (this.$el.find(".accordion-panel-toggle").removeClass("selected"), this.properties.selectedDealer = vc.DealerLocator.app.collection.findWhere({
                        active: !0
                    }), this.properties.selectedDealer) {
                    var t = this.properties.selectedDealer.get("Name") + ", " + this.properties.selectedDealer.get("City");
                    this.$el.find(".no-dealer-selected").hide(), this.$el.find(".selected-dealer").text(t).show(), this.$el.find(".accordion-panel-toggle").each(function() {
                        return $(this).attr("data-dealer-id") === e.properties.selectedDealer.get("DealerId") ? ($(this).addClass("selected"), !1) : void 0
                    });
                    var i = this.$el.find(".form-content h4");
                    i.find("span").text(this.properties.selectedDealer.get("Name")), i.removeClass("visibly-hidden")
                } else this.$el.find(".selected-dealer").hide(), this.$el.find(".no-dealer-selected").show(), this.$el.find(".form-content h4").addClass("visibly-hidden");
                this.setOrderDetails()
            },
            configureGui: function() {
                var e = this.properties.selectedColorData;
                this.showCarouselForSelectedColor();
                var t = this.$el.find(".select-model");
                this.configureVersionBlock($(t[0]), e.rally), this.configureVersionBlock($(t[1]), e.sunset), this.selectVersion(), this.equalizeVersionBlocks(), this.setOrderDetails()
            },
            configureVersionBlock: function(e, t) {
                0 === t.quantity ? e.find("button").addClass("button-disabled") : e.find("button").removeClass("button-disabled"), e.find(".version-availability").text(t.availability), e.find(".car-version-price").text(t.total), e.find(".car-color").text(this.properties.selectedColorData.color)
            },
            equalizeVersionBlocks: function() {
                var e = 0;
                this.$el.find(".model-info").height("auto").each(function() {
                    $(this).height() > e && (e = $(this).height())
                }).height(e)
            },
            selectVersion: function() {
                var e = this.$el.find(".car-version");
                0 === this.properties.versionIndex ? ($(e[1]).removeClass("il-option-selected").addClass("il-option"), $(e[0]).removeClass("il-option").addClass("il-option-selected"), $(e[0]).find("button").text(this.i18n("selected")), $(e[1]).find("button").text(this.i18n("select"))) : 1 === this.properties.versionIndex && ($(e[0]).removeClass("il-option-selected").addClass("il-option"), $(e[1]).removeClass("il-option").addClass("il-option-selected"), $(e[0]).find("button").text(this.i18n("select")), $(e[1]).find("button").text(this.i18n("selected"))), this.equalizeVersionBlocks()
            },
            setOrderDetails: function() {
                this.$el.find(".car-color").text(this.properties.selectedColorData.color);
                var e = 0 === this.properties.versionIndex ? this.properties.selectedColorData.rally : this.properties.selectedColorData.sunset;
                this.properties.selectedVariantId = e.variantId, this.$el.find(".car-deposit").text(e.deposit), this.$el.find(".car-price").text(e.total);
                var t = 0 === this.properties.versionIndex ? this.i18n("rallyVersion") : this.i18n("sunsetVersion");
                this.$el.find(".ordered-version").text(t), this.properties.selectedDealer ? (this.$el.find(".car-ready-to-order").text(this.i18n("readyToOrder")), this.$el.find(".continue-to-payment").removeClass("button-disabled")) : (this.$el.find(".car-ready-to-order").text(this.i18n("pickDealer")), this.$el.find(".continue-to-payment").addClass("button-disabled"))
            },
            getData: function() {
                return this.properties.jsonData || (this.properties.jsonData = JSON.parse(this.$el.find(".car-campaign-json-data").val())), this.properties.jsonData
            },
            continueToPaymentClicked: function(e) {
                if (e.preventDefault(), this.properties.selectedDealer) {
                    var t = this.createHiddenFieldValues(),
                        i = $("#login_form");
                    i.find("[name=variantId]").val(t.variantId), i.find("[name=dealerId]").val(t.dealerId), i.trigger("submit")
                }
            },
            createHiddenFieldValues: function() {
                return {
                    variantId: this.properties.selectedVariantId,
                    dealerId: this.properties.selectedDealer.id
                }
            }
        })
    }(),
    function() {
        "use strict";
        vc.CarCampaignOrderForm = Backbone.View.extend({
            events: {
                "change #Country": "countryChanged"
            },
            initialize: function() {
                _.bindAll(this, "countryChanged")
            },
            render: function() {},
            countryChanged: function(e) {
                var t = $(e.currentTarget).find("option:selected").val(),
                    i = this.$el.find(".country-of-purchase-code").text();
                t !== i ? this.$el.find(".different-country-warning").show() : this.$el.find(".different-country-warning").hide()
            }
        })
    }(),
    function() {
        "use strict";
        vc.CarComparisonTool = Backbone.View.extend({
            initialize: function() {
                $(".content").css({
                    overflow: "hidden"
                }), this.isSticky = !1, this.$header = this.$(".js-car-comparison-tool-header"), this.$stickyTreshold = this.$(".js-car-comparison-tool-treshold"), this.navHeight = 0, this.initialHeaderPosition = this.$header.position().top, this.listenTo(vc.app, "app:scrolled", this.handleStickiness), this.listenTo(vc.app, "resize", this.resize), this.isMobileSelectOpen = !1, vc.CarComparisonToolHeader = new vc.CarComparisonToolHeader({
                    el: this.$(".car-comparison-tool-selector-slot")
                }), vc.CarComparisonToolData = new vc.CarComparisonToolData({
                    el: this.$(".car-comparison-tool-data .car-comparison-tool-box-wrapper")
                }), vc.CarComparisonToolSelector = new vc.CarComparisonToolSelector({
                    el: this.$(".carcomparisontool-selector-overlay .outer-container .container")
                }), this.slots = [{}, {}, {}], this.listenTo(vc.CarComparisonToolHeader, "car:changed", this.carSelected), this.listenTo(vc.CarComparisonToolSelector, "car:changed", this.carSelected), this.listenTo(vc.CarComparisonToolHeader, "engine:changed", this.updateEngine), this.listenTo(vc.CarComparisonToolHeader, "slot:reset", this.resetSlot), this.listenTo(vc.CarComparisonToolHeader, "form:clicked", this.selectClicked), this.listenTo(vc.CarComparisonToolSelector, "overlay:closed", this.overlayClosed), this.listenTo(vc.CarComparisonToolSelector, "overlay:force", this.overlayForce), this.listenTo(vc.CarComparisonToolHeader, "carData:loaded", this.cardDataLoaded), this.listenTo(vc.CarComparisonToolHeader, "car:deeplinked", this.carDeepLinked), this.preload(), this.resize()
            },
            preload: function() {
                var e = 0;
                document.location.search.replace(new RegExp("([^?=&]+)(=([^&]*))?", "g"), function(t, i, n, s) {
                    "modelid" === i.toLowerCase() ? vc.CarComparisonToolHeader.setSelected(e, s) : vc.CarComparisonToolHeader.setSelected(e, i, s), e++
                }), vc.CarComparisonToolHeader.fetchCars()
            },
            cardDataLoaded: function() {
                vc.CarComparisonToolSelector.render(vc.CarComparisonToolHeader.cars.attributes.AllCars)
            },
            carSelected: function(e, t) {
                vc.CarComparisonToolHeader.selectCar(e, t)
            },
            resetSlot: function(e) {
                this.slots[e] = {}, vc.CarComparisonToolData.render(this.slots)
            },
            updateEngine: function(e) {
                var t = new vc.CarVariant,
                    i = this;
                t.fetch({
                    data: $.param({
                        variantId: e.engine,
                        modelId: e.model,
                        sc_site: vc.settings.sc_site
                    }),
                    success: _.bind(function(t) {
                        i.slots[e.slot] = t.toJSON(), vc.CarComparisonToolData.render(i.slots)
                    })
                })
            },
            selectClicked: function(e) {
                vc.CarComparisonToolSelector.show(e), $("html, body").animate({
                    scrollTop: 0
                }, 400)
            },
            overlayClosed: function(e) {
                vc.CarComparisonToolHeader.forceClearSlot(e)
            },
            events: {
                "click .js-update-car-comparison-tool": "scrollToHeader",
                "click .car-comparison-tool-print": "print",
                "click .dropdown-fallback": "selectOpen",
                "change .dropdown-fallback": "selectClosed",
                "blur .dropdown-fallback": "selectClosed",
                "click .car-close-selector-overlay": "closeOverlay",
                "click .carcomparisontool-selector-overlay-scrim": "closeOverlay"
            },
            selectOpen: function() {
                this.isMobileSelectOpen = !0
            },
            selectClosed: function() {
                this.isMobileSelectOpen = !1
            },
            closeOverlay: function() {
                vc.CarComparisonToolSelector.closeOverlay()
            },
            resize: function() {
                var e = $(".nav").height();
                e !== this.navHeight && (this.navHeight = e, this.$header.css("top", e), this.handleStickiness())
            },
            handleStickiness: function() {
                var e = 0;
                this.isMobileSelectOpen || (!this.isSticky && $(window).scrollTop() + this.navHeight > this.$stickyTreshold.position().top && (this.isSticky = !0, this.$header.addClass("car-comparision-tool-header--sticky").css("top", this.navHeight), e = $(".js-cctool-selector").height() + this.$stickyTreshold.height() + this.navHeight, this.$header.after('<div class="car-comparision-tool-header-placeholder" style="height: 362px"></div>'), $(".accordion-panel-header-group").addClass("sticky"), $(".cc-dropdown").addClass("sticky"), $(".car-selector-price").addClass("car-selector-price--sticky")), this.isSticky && $(window).scrollTop() < this.$(".car-comparision-tool-header-placeholder").position().top && (this.isSticky = !1, this.$header.removeClass("car-comparision-tool-header--sticky"), this.$(".car-comparision-tool-header-placeholder").remove(), $(".accordion-panel-header-group").removeClass("sticky"), $(".cc-dropdown").removeClass("sticky"), $(".car-selector-price").removeClass("car-selector-price--sticky")))
            },
            scrollToHeader: function(e) {
                e.preventDefault(), $("html, body").animate({
                    scrollTop: this.initialHeaderPosition - 1
                }, 400)
            },
            print: function(e) {
                e.preventDefault(), window.print()
            },
            overlayForce: function() {
                vc.CarComparisonToolHeader.forceClick()
            },
            carDeepLinked: function() {
                vc.CarComparisonToolSelector.hasDeepLinked = !0
            }
        })
    }(),
    function() {
        "use strict";
        vc.CarComparisonToolData = Backbone.View.extend({
            highlights: templates["car-comparison-tool-highlights"],
            specs: templates["car-comparison-tool-specs"],
            ctas: templates["car-comparison-tool-cta"],
            events: {
                "click .lightbox": "showLightbox",
                "click .accordion-panel-header": "showAccordionPanel",
                "click .cc-dropdown": "showAccordionPanelSmall",
                "click .cc-dropdown ul li": "changeCategorySelection"
            },
            initialize: function() {
                this.carOverlayModel = new vc.CarOverlayModel, this.getLightboxData()
            },
            getLightboxData: function() {
                this.carOverlayModel.fetch({
                    data: $.param({
                        sc_site: vc.settings.sc_site
                    }),
                    success: _.bind(function() {
                        this.render()
                    }, this)
                })
            },
            render: function(e) {
                var t = this.getFirstUsedSlotIndex(e);
                if (t !== !1) {
                    var i = {
                        Specs: this.buildSpecsObject(e, t)
                    };
                    this.$el.empty();
                    var n = "";
                    null !== i.Hightlights && (n += this.highlights.render({
                        data: i.Hightlights
                    })), n += this.specs.render({
                        data: i.Specs
                    }), n += this.ctas.render({
                        translate: vc.dictionary.CarComparisonTool
                    }), this.$el.html(n), _.each(this.$el.find("tr.header"), function(e) {
                        "" === $(e).data("lightbox-id") ? $(e).addClass("suppress-info") : "" === this.carOverlayModel.attributes[$(e).data("lightbox-id")] ? $(e).addClass("suppress-info") : $(e).removeClass("suppress-info")
                    }, this), this.$el.stop().fadeTo("fast", 1), _.each(this.$(".standard-accordion"), function(e) {
                        $(e).find("li").addClass("expanded"), $(".accordion-panel-header-group a li:first").addClass("highlighed"), $(".cc-dropdown span").text($(".cc-dropdown ul li:first").attr("id")), $(e).find("li:first-child").addClass("selected"), $(".cc-dropdown ul li:first").addClass("selected");
                        var t = new vc.Accordion({
                            el: e
                        });
                        t.render()
                    })
                } else $(this.$el).fadeOut(function() {
                    $(this).empty()
                });
                return this
            },
            showLightbox: function(e) {
                e.preventDefault();
                var t = $(e.target),
                    i = t.parents("tr").data("lightbox-id"),
                    n = t.parents("tr").data("lightbox-title");
                this.carOverlayModel.set("title", n).set("htmlContent", this.carOverlayModel.attributes[i]);
                var s = new vc.FeatureOptions.Overlay({
                    model: this.carOverlayModel
                });
                vc.app.$mask.append(s.render().el)
            },
            showAccordionPanel: function(e) {
                var t = "li[id='" + e.currentTarget.id + "']",
                    i = $(t)[1],
                    n = 0,
                    s = 0,
                    o = 0,
                    a = 0,
                    r = $(window).width(),
                    l = 110,
                    c = 40;
                1024 >= r && (c = 20), 1024 >= r && (l = 90);
                var d = $(".accordion-panel-category");
                d.addClass("highlighed-inactive"), n = $(".carcomparisontool-selector").height(), s = $(".accordion-panel-header-group").outerHeight(!0), o = $("#nav").height(), a = $(".car-comparision-tool-header--sticky").length ? i.offsetTop + (n + s + o) - c : i.offsetTop + (n + s) - o - l, i && $("html, body").animate({
                    scrollTop: a
                }, 1500, function() {
                    d.removeClass("highlighed-inactive")
                })
            },
            showAccordionPanelSmall: function(e) {
                $(".cc-dropdown").children("ul").slideToggle(150);
                var t = $(".js-cctool-selector .dropdown-angle");
                return t.hasClass("icon-angle-down") ? (t.removeClass("icon-angle-down"), t.addClass("icon-angle-up"), !1) : (t.removeClass("icon-angle-up"), t.addClass("icon-angle-down"), !1)
            },
            changeCategorySelection: function(e) {
                var t = e.target.id;
                $(".cc-dropdown span").text(t);
                var i = "li[id='" + t + "']",
                    n = $(".cctool-accordion").find(i),
                    s = $(".cc-dropdown").find(i);
                n.length > 0 && ($(".cctool-accordion li").removeClass("selected"), n.addClass("selected"), $(".cc-dropdown li").removeClass("selected"), s.addClass("selected"));
                var o = 0,
                    a = 0,
                    r = 0,
                    l = 0;
                $(".car-comparision-tool-header--sticky").length && (r = $("#nav").height(), o = $(".js-car-comparison-tool-treshold").outerHeight(), l = $(".cc-dropdown").outerHeight(), a = n.offset().top - (r + o + l), n.length && $("html, body").animate({
                    scrollTop: a
                }, 1500))
            },
            getFirstUsedSlotIndex: function(e) {
                var t = null,
                    i = 0;
                if (e)
                    do _.isEmpty(e[i]) ? i++ : t = !0; while (!t && i < e.length);
                return !e || i >= e.length ? !1 : i
            },
            buildHighlightObject: function(e, t) {
                if (null !== e[t].Highlights) {
                    for (var i = e[t].Highlights, n = {
                            Label: i.Title,
                            Items: []
                        }, s = {}, o = 0, a = i.Items.length; a > o; o++) {
                        s = {
                            Label: i.Items[o].Label,
                            Description: i.Items[o].Description,
                            HasSubItems: null !== i.Items[o].SubItems,
                            SubItems: [],
                            Values: []
                        };
                        var r = 0;
                        if (s.HasSubItems)
                            for (var l = 0, c = this.getHighlightsMaxSubItems(e, o); c > l; l++)
                                for (s.SubItems[l] = [], r = 0; 3 > r; r++) s.SubItems[l].push(_.isEmpty(e[r]) || _.isEmpty(e[r].Highlights.Items[o].SubItems[l]) ? {
                                    Label: "",
                                    Value: ""
                                } : e[r].Highlights.Items[o].SubItems[l]);
                        else
                            for (r = 0; 3 > r; r++) s.Values.push(_.isEmpty(e[r]) ? "" : e[r].Highlights.Items[o].Value);
                        n.Items.push(s)
                    }
                    return n
                }
                return null
            },
            getHighlightsMaxSubItems: function(e, t) {
                for (var i = [], n = 0, s = e.length; s > n; n++) e[n] && e[n].Highlights && e[n].Highlights.Items && e[n].Highlights.Items[t] && e[n].Highlights.Items[t].SubItems && i.push(e[n].Highlights.Items[t].SubItems.length);
                return i.length ? _.max(i) : 0
            },
            getSpecsMaxSubItems: function(e, t, i) {
                for (var n = [], s = 0, o = e.length; o > s; s++) e[s] && e[s].Specs && e[s].Specs.Categories && e[s].Specs.Categories[t] && e[s].Specs.Categories[t].Items && e[s].Specs.Categories[t].Items[i] && e[s].Specs.Categories[t].Items[i].SubItems && n.push(e[s].Specs.Categories[t].Items[i].SubItems.length);
                return n.length ? _.max(n) : 0
            },
            buildSpecsObject: function(e, t) {
                var i = e[t].Specs,
                    n = {},
                    s = {},
                    o = {},
                    a = {
                        Title: i.Title,
                        cats: []
                    };
                if (!e[t]) return {};
                for (var r = 0, l = i.Categories.length; l > r; r++) {
                    n = {
                        CategoryId: i.Categories[r].CategoryId,
                        CategoryName: i.Categories[r].CategoryName,
                        Items: []
                    };
                    for (var c = 0, d = i.Categories[r].Items.length; d > c; c++) {
                        s = {
                            FieldName: i.Categories[r].Items[c].FieldName,
                            Label: i.Categories[r].Items[c].Label,
                            HasSubItems: null !== i.Categories[r].Items[c].SubItems,
                            SubItems: [],
                            Values: []
                        };
                        var h = 0;
                        if (s.HasSubItems)
                            for (var p = 0, b = this.getSpecsMaxSubItems(e, r, c); b > p; p++) {
                                for (o = {
                                        Labels: [],
                                        ItemId: i.Categories[r].Items[c].SubItems[p] ? i.Categories[r].Items[c].SubItems[p].ItemId : "",
                                        Values: []
                                    }, h = 0; 3 > h; h++) o.Labels.push(_.isEmpty(e[h]) || _.isEmpty(e[h].Specs.Categories[r].Items[c].SubItems[p]) ? "" : e[h].Specs.Categories[r].Items[c].SubItems[p].Label), o.Values.push(_.isEmpty(e[h]) || _.isEmpty(e[h].Specs.Categories[r].Items[c].SubItems[p]) ? "" : e[h].Specs.Categories[r].Items[c].SubItems[p].Value);
                                s.SubItems.push(o)
                            } else
                                for (h = 0; 3 > h; h++) s.Values.push(_.isEmpty(e[h]) ? "" : e[h].Specs.Categories[r].Items[c].Value);
                        n.Items.push(s)
                    }
                    a.cats.push(n)
                }
                return a
            }
        })
    }(),
    function() {
        "use strict";
        vc.CarComparisonToolHeader = Backbone.View.extend({
            tmpl: templates["car-comparison-tool-selector-slot"],
            events: {
                "change .js-car-engine-fallback-select": "selectEngine",
                "click .car-comparison-tool-selector-remove": "resetSlot",
                "click .js-car-comparison-tool-selector-cta": "showFormSlot",
                "click .car-selector-change": "showFormSlot"
            },
            initialize: function() {
                this.cars = new vc.CarModel, this.selected = [{
                    model: null,
                    engine: null
                }, {
                    model: null,
                    engine: null
                }, {
                    model: null,
                    engine: null
                }]
            },
            preload: function() {
                var e = this,
                    t = 0,
                    i = null;
                document.location.search.replace(new RegExp("([^?=&]+)(=([^&]*))?", "g"), function(n, s, o, a) {
                    if ("modelid" === s.toLowerCase()) {
                        if (!a) return;
                        e.selected[t] = {
                            model: a
                        }
                    } else e.selected[t] = {
                        model: s,
                        engine: a
                    };
                    e.trigger("car:deeplinked"), i = $(".car-comparison-tool-selector-slot-" + (t + 1)), e.showFormSlot({
                        target: i,
                        deepLink: !0,
                        model: e.selected[t]
                    }), t++
                })
            },
            fetchCars: function() {
                this.cars.fetch({
                    data: $.param({
                        sc_site: vc.settings.sc_site
                    }),
                    success: _.bind(function() {
                        this.render(), this.preload(), this.trigger("carData:loaded")
                    }, this)
                })
            },
            render: function() {
                return this.$el.html(this.tmpl.render(this.cars.toJSON())), _.each(this.$(".js-car-engine-dropdown"), _.bind(function(e) {
                    this.disableDropdown(e)
                }, this)), _.each(this.$(".dropdown-wrapper"), function(e) {
                    new vc.Dropdown({
                        el: e
                    })
                }), this
            },
            showFormSlot: function(e) {
                e.preventDefault && e.preventDefault();
                var t = $(e.target).closest(".car-comparison-tool-selector-slot");
                t.find(".js-car-comparison-tool-selector-form").addClass("car-comparison-tool-selector-form--visible");
                var i = parseInt(t.closest(".car-comparison-tool-selector-slot").attr("data-slot"), 10);
                e.deepLink ? this.trigger("car:changed", i, e.model.model) : this.trigger("form:clicked", i)
            },
            hideFormSlot: function(e) {
                e.preventDefault && e.preventDefault();
                var t = $(e.target).closest(".car-comparison-tool-selector-slot");
                t.find(".js-car-comparison-tool-selector-form").removeClass("car-comparison-tool-selector-form--visible")
            },
            selectCar: function(e, t) {
                var i = $(".car-comparison-tool-selector-slot-" + (e + 1)),
                    n = t,
                    s = i.find(".js-car-engine-dropdown"),
                    o = i.find(".js-car-comparison-tool-selector-picture"),
                    a = i.find(".js-car-comparison-tool-selector-picture-side"),
                    r = i.find(".js-car-comparison-tool-selector-name"),
                    l = i.find(".js-car-selector-price"),
                    c = i.find(".js-car-engine-selector-name"),
                    d = i.find(".car-comparison-tool-selector-explore a"),
                    h = i.find(".car-comparison-tool-selector-build a"),
                    p = this.getSelectedCar(n),
                    b = parseInt(i.closest(".car-comparison-tool-selector-slot").attr("data-slot"), 10),
                    v = p.CarImage + "?w=400",
                    u = p.CarImageHover + "?w=400";
                o.attr({
                    src: v
                }).removeClass("car-comparison-tool-selector-picture--placeholder"), a.attr({
                    src: u
                }).removeClass("car-comparison-tool-selector-picture-side--placeholder"), i.find(".js-car-comparison-tool-selector-form").removeClass("car-comparison-tool-selector-form--pristine"), "" !== p.ModelNameCore ? "" !== p.ModelNamePrefix ? (r.html("<small>" + p.ModelNamePrefix + "</small><h3>" + p.ModelNameCore + "</h3>"), r.removeClass("small-after")) : (r.html("<h3>" + p.ModelNameCore + "</h3><small>" + p.ModelNameSuffix + "</small>"), r.addClass("small-after")) : r.html("<h3>" + p.ModelDisplayName + "</h3>"), "" !== p.Price && l.html("<h6>" + p.Price + "</h6>"), this.selected[b].model = p.ModelId, p.CarBuilderUrl ? h.attr("href", p.CarBuilderUrl).show() : h.hide(), p.PdpUrl ? d.attr("href", p.PdpUrl).show() : d.hide(), p.Variants.length > 0 ? (this.setDropdownData(p, "VariantId", "DisplayName", s), this.selectVariantDropdown(s, this.selected[b].engine ? this.selected[b].engine : p.Variants[0].VariantId), this.enableDropdown(s)) : (c.text(""), this.emptyDropdown(s), this.disableDropdown(s))
            },
            getSelectedCar: function(e) {
                if (1 === this.cars.attributes.AllCars.length) return _.findWhere(this.cars.attributes.AllCars[0].Cars, {
                    ModelId: e
                });
                var t;
                return _.each(this.cars.attributes.AllCars, function(i) {
                    _.each(i.Cars, function(i) {
                        i.ModelId === e && (t = i)
                    })
                }), t
            },
            selectEngine: function(e) {
                var t = $(e.target).closest(".car-comparison-tool-selector-slot"),
                    i = t.find(".js-car-engine-selector-name"),
                    n = $(e.target).val() || t.find(".js-car-engine-fallback-select option:selected").val(),
                    s = parseInt(t.closest(".car-comparison-tool-selector-slot").attr("data-slot"), 10),
                    o = t.find(".js-car-engine-fallback-select option:selected").text();
                i.text(o), this.selected[s].engine = n, this.trigger("engine:changed", {
                    slot: s,
                    engine: n,
                    model: this.selected[s].model
                })
            },
            forceClearSlot: function(e) {
                $(".car-comparison-tool-selector-slot-" + (e + 1)).find(".car-comparison-tool-selector-remove").click()
            },
            resetSlot: function(e) {
                e.preventDefault();
                var t = $(e.target).closest(".car-comparison-tool-selector-slot"),
                    i = t.find(".js-car-comparison-tool-selector-picture-side"),
                    n = t.find(".js-car-engine-selector-name"),
                    s = t.find(".js-car-comparison-tool-selector-name"),
                    o = t.find(".car-comparison-tool-selector-build a"),
                    a = parseInt(t.closest(".car-comparison-tool-selector-slot").attr("data-slot"), 10);
                this.resetDropdown(t.find(".js-car-comparison-tool-dropdown")), this.emptyDropdown(t.find(".js-car-engine-dropdown")), this.disableDropdown(t.find(".js-car-engine-dropdown")), this.resetSelectedCar(a), i.attr({
                    src: ""
                }), n.text(""), s.text(""), o.attr("href", "#"), t.find(".js-car-comparison-tool-selector-form").addClass("car-comparison-tool-selector-form--pristine"), this.hideFormSlot(e), this.trigger("slot:reset", a)
            },
            setDropdownData: function(e, t, i, n) {
                var s = $(n).children(".dropdown"),
                    o = $(n).children(".dropdown-fallback");
                this.emptyDropdown(n);
                for (var a = e.Variants, r = null, l = null, c = 0; c < a.length; c++) r = $('<li subject="' + a[c][t] + '"><a href="#" data-dropdown="' + a[c][t] + '">' + a[c][i] + "</a></li>"), l = $('<option value="' + a[c][t] + '">' + a[c][i] + "</option>"), s.append(r), o.append(l)
            },
            isAlreadySelected: function(e, t) {
                var i = !1,
                    n = 0;
                do i = this.selected[n].model === e && this.selected[n].engine === t, n++; while (!i && n < this.selected.length);
                return i
            },
            emptyDropdown: function(e) {
                var t = $(e).children(".dropdown"),
                    i = $(e).children(".dropdown-fallback"),
                    n = $(e).find(".dropdown-active-item"),
                    s = i.attr("car-data-defaultLabel");
                t.empty(), i.empty(), n.data("dropdownActive", s), n.html(s), i.append($("<option></option>").val(s).html(s).attr({
                    selected: "selected",
                    disabled: "disabled"
                }))
            },
            restoreDefaultOption: function(e) {
                var t = $(e).children(".dropdown-fallback"),
                    i = t.attr("car-data-defaultLabel"),
                    n = t.find('option[value="' + i + '"]');
                n.length || t.prepend($("<option></option>").val(i).html(i).attr({
                    disabled: "disabled"
                }))
            },
            resetDropdown: function(e) {
                var t = $(e).children(".dropdown-fallback"),
                    i = $(e).find(".dropdown-active-item"),
                    n = t.attr("car-data-defaultLabel");
                i.data("dropdownActive", n), i.html(n), t.find("option[selected=selected]").removeProp("selected").removeAttr("selected");
                var s = t.find("option[data-defaultLabel]");
                s.length ? s.prop("selected", !0).attr("selected", "selected") : t.find("option:first").prop("selected", !0).attr("selected", "selected")
            },
            selectVariantDropdown: function(e, t) {
                this.selectDropdownItem(e, t), this.selectEngine({
                    target: e
                })
            },
            selectModelDropdown: function(e, t) {
                this.selectDropdownItem(e, t), this.selectCar({
                    target: e
                })
            },
            selectDropdownItem: function(e, t) {
                var i = $(e).children(".dropdown"),
                    n = i.find('[data-dropdown="' + t + '"]').parent().index(),
                    s = $(e).children(".dropdown-fallback"),
                    o = $(e).find(".dropdown-active-item"),
                    a = i.find("li").eq(n).find("a").text();
                o.text(a), s.find("option[selected=selected]").remove(), s.find("option").eq(n).prop("selected", !0).attr({
                    selected: "selected"
                })
            },
            disableDropdown: function(e) {
                var t = $(e).closest(".dropdown-wrapper"),
                    i = $(e).children(".dropdown-fallback");
                t.addClass("disabled"), i.prop("disabled", "disabled")
            },
            enableDropdown: function(e) {
                var t = $(e).closest(".dropdown-wrapper"),
                    i = $(e).children(".dropdown-fallback");
                t.removeClass("disabled"), i.prop("disabled", !1)
            },
            scrollToTop: function() {
                var e = $(".js-car-comparison-tool-header").position().top,
                    t = $(".car-comparision-tool-header-placeholder");
                t.length && (e = t.position().top), $("html, body").animate({
                    scrollTop: e - 1
                }, 400)
            },
            resetSelectedCar: function(e) {
                $('li[subject="' + this.selected[e].engine + '"]').show(), $('option[value="' + this.selected[e].engine + '"]').show(), this.selected[e] = {
                    model: null,
                    engine: null
                }
            },
            setSelected: function(e, t, i) {
                this.selected[e] = {
                    model: t,
                    engine: i
                }
            },
            forceClick: function() {
                $(".car-comparison-tool-selector-slot-1").children(".js-car-comparison-tool-selector-cta").click()
            }
        })
    }(),
    function() {
        "use strict";
        vc.CarComparisonToolSelector = Backbone.View.extend({
            groupTemplate: templates["car-comparison-tool-selector-group"],
            itemTemplate: templates["car-comparison-tool-selector-item"],
            events: {
                "click .carcomparisontool-selector-overlay-item": "carSelected"
            },
            currentSlotNumber: null,
            hasClicked: !1,
            hasClickedTimer: null,
            hasDeepLinked: !1,
            initialize: function() {
                this.$scrim = $(".carcomparisontool-selector-overlay-scrim")
            },
            render: function(e) {
                this.carData = e, this.setupGroups();
                var t = this;
                this.hasClickedTimer = _.delay(this.onClickedTimer, 2e3, t)
            },
            setupGroups: function() {
                if (1 === this.carData.length) {
                    var e = $(this.groupTemplate.render({
                        GroupName: vc.dictionary.CarComparisonTool.AllModels
                    }));
                    e.addClass("single-group"), _.each(this.carData[0].Cars, function(t, i) {
                        "" !== t.ModelNameCore ? "" !== t.ModelNamePrefix ? t.NameType3 = "3" : "" !== t.ModelNameSuffix ? t.NameType4 = "4" : t.NameType2 = "2" : t.NameType1 = "1";
                        var n = $(this.itemTemplate.render(t));
                        (i + 1) % 4 === 0 && 0 !== i && n.addClass("last"), e.find(".carcomparisontool-selector-overlay-carscomparisontool").append(n)
                    }, this), this.$el.append(e)
                } else _.each(this.carData, function(e) {
                    var t = $(this.groupTemplate.render({
                        GroupName: e.CarCategoryName
                    }));
                    t.addClass("multi-group"), _.each(e.Cars, function(e) {
                        "" !== e.ModelNameCore ? "" !== e.ModelNamePrefix ? e.NameType3 = "3" : "" !== e.ModelNameSuffix ? e.NameType4 = "4" : e.NameType2 = "2" : e.NameType1 = "1";
                        var i = $(this.itemTemplate.render(e));
                        t.find(".carcomparisontool-selector-overlay-carscomparisontool").append(i)
                    }, this), this.$el.append(t)
                }, this), this.$el.find(".carcomparisontool-selector-overlay-carcomparisontool-group").last().addClass("last");
                this.$el.find(".carcomparisontool-selector-overlay-carcomparisontool-group").children(".carcomparisontool-selector-overlay-drop-down").on("click", function() {
                    $(this).next(".carcomparisontool-selector-overlay-carscomparisontool").toggleClass("on"), $(this).find(".icon").toggleClass("icon-angle-up icon-angle-down")
                })
            },
            show: function(e) {
                this.hasClicked || (this.hasClicked = !0, clearTimeout(this.hasClickedTimer)), this.currentSlotNumber = e, $(this.$el.parents(".carcomparisontool-selector-overlay")).fadeIn(), this.$scrim.fadeIn()
            },
            closeOverlay: function() {
                this.trigger("overlay:closed", this.currentSlotNumber), $(this.$el.parents(".carcomparisontool-selector-overlay")).fadeOut(), this.$scrim.fadeOut()
            },
            carSelected: function(e) {
                this.trigger("car:changed", this.currentSlotNumber, $(e.target).closest(".carcomparisontool-selector-overlay-item").data("model-id")), $(this.$el.parents(".carcomparisontool-selector-overlay")).fadeOut(), this.$scrim.fadeOut()
            },
            onClickedTimer: function(e) {
                e.hasDeepLinked || e.trigger("overlay:force")
            }
        })
    }(),
    function() {
        "use strict";
        vc.NavigationPanel = Backbone.View.extend({
            initialize: function() {
                _.bindAll(this, "dropdownChanged"), this.collection = new vc.NavigationPanelCollection, this.listenTo(this.collection, "change:active", this.activeItemChanged);
                for (var e = this.$(".navigation-panel-content > div").toArray(), t = 0; t < e.length; t++) this.collection.add({
                    id: e[t].getAttribute("data-panel")
                });
                this.router = new vc.NavigationPanelRouter(this.collection)
            },
            events: {
                "change .navigation-panel-menu .menu-dropdown select": "dropdownChanged"
            },
            dropdownChanged: function(e) {
                window.location.href = e.target.value
            },
            activeItemChanged: function(e, t) {
                var i = e.id,
                    n = this.$(".navigation-panel-menu a[href='#panel/" + i + "']").closest("li");
                n.toggleClass("active", t);
                var s = $(".navigation-panel-menu .menu-dropdown select");
                s[0].value != "#panel/" + i && (s[0].value = "#panel/" + i);
                var o = this.$(".navigation-panel-content div[data-panel=" + i + "]");
                t ? e.get("aniamated") ? o.delay(200).fadeIn(200) : o.fadeIn(0) : o.fadeOut(200)
            }
        })
    }(),
    function() {
        "use strict";
        var e = null;
        vc.ItemsList = Backbone.View.extend({
            initialize: function() {
                this.isIE8 = $("html").hasClass("lt-ie9"), this.normalizeButtons();
                var e = $("a.popup");
                e.length > 0 && this.setPopups(e), this.openPopup()
            },
            events: {
                "click a.readmore-overlay-link": "showReadMoreOverlay",
                "click .js-ItemList-videoWrapper": "showVideoOverlay"
            },
            showReadMoreOverlay: function(t) {
                t.preventDefault();
                var i = t.currentTarget.attributes.href.value;
                e = new vc.ReadMoreOverlay.InitializeModel, e.set("ID", i);
                new vc.ReadMoreOverlayObject({
                    model: e
                })
            },
            showVideoOverlay: function(e) {
                var t = $(e.currentTarget),
                    i = $(t).find("iframe").clone(),
                    n = i.data("src");
                i.addClass("video-active");
                var s = '<div class="overlay-close YouTubeVideo-overlay-close icon icon-close" style="display: block;"></div>';
                i.attr("src", n + "&autoplay=1"), vc.app.$mask.append(s), vc.app.$mask.append(i), vc.app.trigger("mask:show")
            },
            normalizeButtons: function() {
                var e = this.$el.find("a.button"),
                    t = 0,
                    i = this;
                this.stopListening(), e.css("min-height", "0px"), setTimeout(function() {
                    e.each(function(i) {
                        t = Math.max(t, parseInt(e.eq(i).css("height"), 10))
                    }), e.css("min-height", t), i.isIE8 || i.listenTo(vc.app, "resize", i.normalizeButtons)
                }, 100)
            },
            setPopups: function(e) {
                e.on("click", function(e) {
                    e.preventDefault();
                    var t = "#" + $(this).closest("li").find(".popup-content").attr("id");
                    $.magnificPopup.open({
                        closeMarkup: '<button class="mfp-close"><i class="icon icon-close"></i></button>',
                        callbacks: {
                            open: function() {
                                var e = this.content.find("button.mfp-close:first"),
                                    t = this.content.find(".extf-container:first");
                                e.appendTo(t);
                                var i = this;
                                this.content.on("click", ".mfp-close i, .popup-content, .extf.component", function(e) {
                                    e.target == this && i.close()
                                })
                            }
                        },
                        fixedContentPos: !1,
                        items: {
                            src: t,
                            type: "inline"
                        }
                    })
                })
            },
            openPopup: function() {
                $(".items-list a").on("click", function(e) {
                    if ($(window).width() > 480) {
                        var t = $(this);
                        t.is("[href*='popup=1']") && (e.preventDefault(), t.magnificPopup({
                            items: {
                                src: '<div class="hero-popup"><iframe src="' + t.attr("href") + '"></iframe></div>',
                                type: "inline"
                            },
                            closeBtnInside: !1
                        }).magnificPopup("open"))
                    }
                })
            }
        })
    }(),
    function() {
        "use strict";
        vc.SocialSharing = Backbone.View.extend({
            initialize: function() {
                _.bindAll(this, "shareLink", "shareWeChat"), this.shareUrl = encodeURIComponent(document.location), this.shareTitle = encodeURIComponent(document.title)
            },
            events: {
                "click .social-sharelink": "shareLink"
            },
            shareLink: function(e) {
                e.preventDefault();
                var t = $(e.currentTarget).data();
                if (t.sharelink)
                    if ($(e.currentTarget).children(".icon").hasClass("icon-wechat")) this.shareWeChat(t);
                    else {
                        var i = t.sharelink.replace("{{url}}", this.shareUrl).replace("{{title}}", this.shareTitle).replace("{{subject}}", t.sharesubject);
                        window.open(i, "_blank", "toolbar=0,location=0,menubar=0,height=500,width=500")
                    }
            },
            shareWeChat: function() {
                "undefined" == typeof WeixinJSBridge || WeixinJSBridge.invoke("shareTimeline", {
                    title: this.shareTitle,
                    link: this.shareUrl
                })
            }
        })
    }(),
    function() {
        "use strict";
        vc.FindYourVolvoOverlay = vc.Overlay.extend({
            className: vc.Overlay.prototype.className + " find-your-volvo-overlay",
            tmpl: templates["fyv-overlay"],
            initialize: function() {
                vc.Overlay.prototype.initialize.apply(this, arguments)
            },
            render: function() {
                return this.model ? this.$el.html(this.tmpl.render({
                    data: this.model.attributes.model
                })) : this.$el.html(this.tmpl.render({
                    data: "Feature load error. Sorry."
                })), vc.app.trigger("mask:show"), this
            }
        })
    }(),
    function() {
        "use strict";
        vc.Footer = Backbone.View.extend({
            initialize: function() {
                this.listenTo(vc.app, "device:changed", this.deviceChanged)
            },
            events: function() {
                return "small" !== vc.app.currentDevice.name ? {} : {
                    "change .select": "linkGroupNavigate"
                }
            },
            deviceChanged: function() {
                this.undelegateEvents(), this.delegateEvents()
            },
            linkGroupNavigate: function(e) {
                e.preventDefault();
                var t = $(e.currentTarget),
                    i = t.val();
                i && (document.location = i)
            }
        })
    }(),
    function() {
        "use strict";
        vc.TablularView = Backbone.View.extend({
            columnsSize: 0,
            initialize: function() {
                var e = this;
                this.parseRows(), this.columnsSize = this.$("thead > tr > th").length, this.adjustLayout(), $(window).on("resize", function() {
                    e.resizedWindow()
                })
            },
            injectColumnHeads: function(e, t) {
                var i = "",
                    n = this;
                t.eq(0).append('<i class="icon icon-angle-up"></i>'), t.eq(0).addClass("mobile-collapse").on("click", function() {
                    n.collapseSiblings($(this))
                });
                for (var s = 0, o = e.length; o > s; s++) i = e.eq(s).find("h5"), i.length > 0 && t.eq(s).attr("data-th", i.text())
            },
            parseRows: function() {
                for (var e = this.$("thead > tr > th"), t = this.$("tbody tr"), i = [], n = !1, s = 0, o = t.length; o > s; s++) i = t.eq(s).find(" > td"), 1 === i.length && i.find("table").length > 0 ? (this.createCollapseRow(i.eq(0)), n = !0) : i.length > 0 && this.injectColumnHeads(e, i);
                n && (this.$(".collapse-section").eq(0).addClass("expanded").find(".accordion-arrow").toggleClass("icon-angle-down icon-angle-up"), new vc.Accordion({
                    el: this.$el
                }).render())
            },
            createCollapseRow: function(e) {
                this.$el.hasClass("accordion") || this.$el.addClass("standard-accordion accordion"), e.addClass("collapse-section"), e.find("> p:first-child").addClass("accordion-panel-toggle").append('<i class="accordion-arrow icon icon-angle-down"></i>'), e.find("table").addClass("accordion-content accordion-panel-off")
            },
            collapseSiblings: function(e) {
                if (-1 === ["small", "medium"].indexOf(vc.app.currentDevice.name)) return !1;
                e.toggleClass("mobile-collapse--close"), e.find(".icon").toggleClass("icon-angle-up icon-angle-down");
                var t = e.parents("table");
                t.hasClass("accordion-content") && t.height("auto"), e.hasClass("mobile-collapse--close") ? e.siblings().hide() : e.siblings().show()
            },
            adjustLayout: function() {
                this.columnsSize > 4 && "medium" === vc.app.currentDevice.name ? this.$el.addClass("mobile-view") : this.$el.removeClass("mobile-view"), -1 === ["small", "medium"].indexOf(vc.app.currentDevice.name) && this.$("[data-th]").css("display", "")
            },
            resizedWindow: function() {
                this.adjustLayout()
            }
        })
    }(),
    function() {
        "use strict";
        vc.StepCard = Backbone.View.extend({
            initialize: function() {
                this.collection = new vc.CarouselItemCollection, this.listenTo(this.collection, "change:active", this.activeChanged), this.listenTo(vc.app, "resize", this.resize), _.bindAll(this, "next", "prev", "buttonClick", "resize")
            },
            events: {
                "click .prev": "prev",
                "click .next": "next",
                "click .pagination .button": "buttonClick"
            },
            next: function(e) {
                e && e.preventDefault(), this.carousel.next()
            },
            prev: function(e) {
                e && e.preventDefault(), this.carousel.prev()
            },
            resize: function() {
                this.layoutCarousel(0)
            },
            buttonClick: function(e) {
                e && e.preventDefault();
                var t = this.buttons.index(e.target),
                    i = this.collection.at(t);
                this.collection.activate(i.id)
            },
            activeChanged: function(e, t) {
                if (t) {
                    var i = this.collection.indexOf(e);
                    this.setActiveButton(i), this.layoutCarousel(200), this.$el.addClass("changed")
                } else e.view.$(".texts").animate({
                    opacity: 0
                }, 200)
            },
            setActiveButton: function(e) {
                this.buttons.removeClass("button-active"), this.buttons.eq(e).addClass("button-active")
            },
            layoutCarousel: function(e) {
                e = e || 0;
                var t = this.collection.activeItem();
                t.view.$(".texts").animate({
                    opacity: 1
                }, e), this.$(".carousel-content").animate({
                    height: t.view.$el.height()
                }, e)
            },
            render: function() {
                return this.buttons = this.$(".pagination .button"), this.carousel = new vc.StepCardCarousel({
                    collection: this.collection,
                    el: this.$(".carousel")
                }).render(), this.layoutCarousel(), this
            }
        })
    }(),
    function() {
        "use strict";
        vc.StepCardCarousel = vc.Carousel.extend({
            initialize: function() {
                vc.Carousel.prototype.initialize.apply(this, arguments), _.bindAll(this, "createItemView")
            },
            createItemView: function(e, t) {
                var i = $(t),
                    n = this.collection.add({
                        id: "item" + e
                    });
                i.hasClass("active") && (n.attributes.active = !0);
                var s = new vc.CarouselItemView({
                    el: t,
                    model: n
                });
                n.view = s.render()
            },
            render: function() {
                return this.$("> li").each(this.createItemView), this
            }
        })
    }(),
    function() {
        "use strict";
        vc.PDPSwipeCarousel = Backbone.View.extend({
            initialize: function() {
                _.bindAll(this, "dragStart", "drag", "dragEnd", "next", "prev")
            },
            hammerEvents: function() {
                return Modernizr.touch ? {
                    dragleft: "dragStart",
                    dragright: "dragStart"
                } : {}
            },
            dragStart: function(e) {
                if (this.killHammerEvents(e), !this.dragging) {
                    this.dragging = !0;
                    var t = $(".pdp-hero.hero .hero-content-align"),
                        i = $(".pdp-hero.hero .hero-content-align.selected"),
                        n = $(".pdp-hero.hero .hero-content-align"),
                        s = $(".pdp-hero.hero .hero-content-pagination-selected"),
                        o = $(".pdp-hero.hero .hero-content-pagination"),
                        a = $(".pdp-hero.hero .hero-background"),
                        r = t.index(i),
                        l = t.index(i) - 1,
                        c = t.index(i) + 1;
                    0 > l && (l = t.length - 1), c > t.length - 1 && (c = 0), this.currentItem = t.eq(r), this.prevItem = t.eq(l), this.nextItem = t.eq(c), this.currentBackgroundItem = a.eq(r), this.prevBackgroundItem = a.eq(l), this.nextBackgroundItem = a.eq(c), this.currentSlideContentItem = n.eq(r), this.prevSlideContentItem = n.eq(l), this.nextSlideContentItem = n.eq(c), this.currentSlidePaginationItem = s.eq(r), this.prevSlidePaginationItem = s.eq(l), this.nextSlidePaginationItem = s.eq(c), this.currentSlidePaginationselItem = o.eq(r), this.prevSlidePaginationselItem = o.eq(l), this.nextSlidePaginationselItem = o.eq(c), vc.app.$body.hammer({
                        dragLockToAxis: !0,
                        dragBlockHorizontal: !0
                    }).on("dragleft." + this.cid, this.drag).on("dragright." + this.cid, this.drag).on("dragend." + this.cid, this.dragEnd), this.dragging = !1
                }
            },
            drag: function(e) {
                this.killHammerEvents(e);
                var t = this.dragPercent = Math.round(e.gesture.deltaX / this.$el.width() * 100);
                $.support.transform ? (this.currentItem.view.$el.css({
                    x: t + "%"
                }), this.prevItem.view.$el.css({
                    x: t - 100 + "%"
                }), this.nextItem.view.$el.css({
                    x: t + 100 + "%"
                })) : (this.currentItem.view.$el.css({
                    left: t + "%"
                }), this.prevItem.view.$el.css({
                    left: t - 100 + "%"
                }), this.nextItem.view.$el.css({
                    left: t + 100 + "%"
                }))
            },
            dragEnd: function(e) {
                this.killHammerEvents(e), this.dragPercent = 0, vc.app.$body.hammer().off("." + this.cid);
                var t = Math.abs(e.gesture.deltaX) / this.$el.width() * 100,
                    i = (t * Math.max(1, e.gesture.velocityX), e.gesture.direction === Hammer.DIRECTION_LEFT);
                i ? this.next() : this.prev()
            },
            next: function() {
                var e = {
                        opacity: 1,
                        filter: "alpha(opacity=100)"
                    },
                    t = {
                        opacity: 0,
                        filter: "alpha(opacity=0)"
                    };
                this.currentBackgroundItem.css(t), this.prevBackgroundItem.css(t), this.nextBackgroundItem.css(e), this.currentItem.removeClass("selected"), this.nextItem.addClass("selected"), this.currentSlideContentItem.removeClass("selected"), this.nextSlideContentItem.addClass("selected"), this.currentSlidePaginationItem.css("display", "none"), this.nextSlidePaginationItem.css("display", "block"), this.currentSlidePaginationselItem.css("display", "block")
            },
            prev: function() {
                var e = {
                        opacity: 1,
                        filter: "alpha(opacity=100)"
                    },
                    t = {
                        opacity: 0,
                        filter: "alpha(opacity=0)"
                    };
                this.currentBackgroundItem.css(t), this.prevBackgroundItem.css(e), this.nextBackgroundItem.css(t), this.currentItem.removeClass("selected"), this.prevItem.addClass("selected"), this.currentSlideContentItem.removeClass("selected"), this.prevSlideContentItem.addClass("selected"), this.currentSlidePaginationItem.css("display", "none"), this.prevSlidePaginationItem.css("display", "block"), this.currentSlidePaginationselItem.css("display", "block")
            },
            killHammerEvents: function(e) {
                e.preventDefault(), e.stopPropagation(), e.gesture && (e.gesture.stopPropagation(), e.gesture.preventDefault())
            }
        });
        new vc.PDPSwipeCarousel
    }(),
    function() {
        "use strict";
        vc.VideoCard = Backbone.View.extend({
            initialize: function() {},
            events: {},
            updateCard: function() {
                console.log(titleHeight, videoHeight)
            },
            render: function() {
                return this
            },
            remove: function() {}
        })
    }(), jQuery(".button-View-More").click(function() {
        var e = $("#search_result").attr("count");
        viewMoreAction(!0, e)
    }), jQuery("#Home-Cross").click(function() {
        searchAction()
    }), jQuery(".nav-search a").click(function() {
        searchActionNewNavigation()
    }), jQuery(document).ready(function() {
        var e = document.getElementById("custom-search-wrap-exists");
        null != e && (ShowSearchBox(), viewMoreAction(!1, $("#search_result").attr("count")))
    }), jQuery(".search-input").keydown(function() {
        jQuery(".gstl_50").addClass("search-top"), jQuery(".gstl_51").addClass("search-top-searchresult")
    });
var searchEnabled = !1;
$(document).ready(function() {
        if (null != $("#search-input") && !vc.settings.dc)
            for (var e, t, i = document.querySelectorAll("input[placeholder]"), n = i.length, s = function(e) {
                    return this.value === this.getAttribute("data-placeholder") ? (this.setSelectionRange(0, 0), e.preventDefault(), e.stopPropagation(), !1) : void 0
                }, o = function(e) {
                    e.shiftKey && 16 === e.keyCode || 9 === e.keyCode || this.value === this.getAttribute("data-placeholder") && (this.value = "", this.className = "active", "password" === this.getAttribute("data-type") && (this.type = "password"))
                }, a = function() {
                    0 === this.value.length && (this.value = this.getAttribute("data-placeholder"), s.apply(this, arguments), this.className = "", "password" === this.type && (this.type = "text"))
                }, r = function(e) {
                    for (var t, s = 0; n > s; s++) t = i[s], t.value === t.getAttribute("data-placeholder") && (t.value = "")
                }, l = 0; n > l; l++) e = i[l], t = e.getAttribute("placeholder"), e.setAttribute("data-placeholder", t), e.removeAttribute("placeholder"), 0 === e.value.length ? (e.value = t, "password" === e.type && (e.type = "text")) : e.className = "active", e.addEventListener("focus", s, !1), e.addEventListener("drop", s, !1), e.addEventListener("click", s, !1), e.addEventListener("keydown", o, !1), e.addEventListener("keyup", a, !1), e.addEventListener("blur", a, !1), e.form.addEventListener("submit", r, !1)
    }), $(document).ready(function() {
        function e() {
            0 != d.height() && d.animate({
                height: "0"
            }, 1e3)
        }

        function t() {
            clearInterval(C), r(), i()
        }

        function i() {
            0 == d.height() && (d.css("height", "0"), d.animate({
                height: m + "px"
            }, 1e3))
        }

        function n() {
            var e = window.innerWidth;
            481 > e ? o() : s()
        }

        function s() {
            p.addClass("carusel-width-100"), 1 == v && b.addClass("carusel-width-100"), 2 == v && b.addClass("carusel-width-50"), 3 == v && b.addClass("carusel-width-33"), 4 == v && b.addClass("carusel-width-25"), 5 == v && b.addClass("carusel-width-20")
        }

        function o() {
            p.removeClass("wrap-carusel-width-100"), p.removeClass("carusel-width-100"), b.removeClass("carusel-width-100 carusel-width-50 carusel-width-33 carusel-width-25 carusel-width-20"), 1 == v && (b.addClass("carusel-width-100"), p.addClass("wrap-carusel-width-100")), 2 == v && (p.addClass("wrap-carusel-width-100"), b.addClass("carusel-width-50")), 3 == v && (p.addClass("wrap-carusel-width-100"), b.addClass("carusel-width-33"))
        }

        function a() {
            clearInterval(w), $(".pdp-sticky-cta").owlCarousel({
                items: 5,
                navigation: !1,
                slideSpeed: 800,
                itemsDesktop: [1025, 5],
                itemsDesktopSmall: [1024, 5],
                itemsTablet: [768, 5],
                itemsMobile: [480, 3.5],
                mouseDrag: !1,
                pagination: !1
            }), r(), t(), n()
        }

        function r() {
            C = setInterval(function() {
                e()
            }, 3e3)
        }

        function l() {
            var i = $(this).scrollTop();
            Math.abs(u - i) <= f || (i > u ? e() : i + $(window).height() < $(document).height() && t(), window.innerHeight + window.pageYOffset >= document.body.offsetHeight - 10 && t(), u = i)
        }! function(e, t, i) {
            var n = function(e, t, i) {
                var n;
                return function() {
                    function s() {
                        i || e.apply(o, a), n = null
                    }
                    var o = this,
                        a = arguments;
                    n ? clearTimeout(n) : i && e.apply(o, a), n = setTimeout(s, t || 100)
                }
            };
            jQuery.fn[t] = function(e) {
                return e ? this.bind("resize", n(e)) : this.trigger(t)
            }, jQuery.fn[i] = function(e) {
                return e ? this.bind("scroll", n(e)) : this.trigger(i)
            }
        }(jQuery, "smartresize", "smartscroll");
        var c, d = $(".pdp-sticky-cta"),
            h = $(".pdp-sticky-cta"),
            p = $(".pdp-sticky-cta .owl-wrapper"),
            b = $(".pdp-sticky-cta .owl-item"),
            v = 0,
            u = 0,
            f = 5,
            m = $(".pdp-sticky-cta").outerHeight(),
            g = $(".pdp-sticky-cta"),
            y = (g.offset(), $(this), $(".pdp-sticky-cta-menu"), $(".pdp-sticky-cta-menu a"));
        y.each(function() {
            v++
        }), h.on("touchstart", function() {
            clearInterval(C), i()
        }), h.on("touchend", function() {
            r()
        });
        var w;
        $(window).load(), w = setInterval(function() {
            "complete" == document.readyState && a()
        }, 11), $(window).smartresize(function() {
            setTimeout(n(), 0)
        }), h.hover(function() {
            clearInterval(C), i()
        }, function() {
            r()
        });
        var C;
        $(window).smartscroll(function(e) {
            c = !0
        }), setInterval(function() {
            c && (l(), c = !1)
        }, 250)
    }),
    function() {
        "use strict";
        vc.AModel = Backbone.Model.extend({
            spinner: !1,
            fetch: function(e) {
                var t = this;
                if (void 0 === e && (e = {}), e.spinner !== !1) {
                    if (e.spinner === !0 && (e.spinner = $(document.body)), t.spinner = new vc.Spinner({
                            container: e.spinner
                        }), void 0 !== e.success) var i = e.success;
                    else var i = function() {};
                    if (e.success = function(e, n, s) {
                            t.spinner.remove(), i.apply(t, arguments)
                        }, void 0 !== e.error) var n = e.error;
                    else var n = function() {};
                    e.error = function(e, i, s) {
                        if (t.spinner.remove(), void 0 !== s.errorMessage && s.errorMessage !== !1) {
                            var o = new vc.Notification(s.errorMessage);
                            o.fetch({
                                type: "POST",
                                success: function() {
                                    vc.app.notifications.add(o)
                                }
                            })
                        }
                        n.apply(t, arguments)
                    }
                }
                return Backbone.Model.prototype.fetch.call(this, e)
            }
        })
    }(),
    function() {
        "use strict";
        vc.ACarouselItem = vc.CarouselItem.extend({
            spinner: !1,
            fetch: function(e) {
                var t = this;
                if (void 0 === e && (e = {}), e.spinner !== !1) {
                    if (e.spinner === !0 && (e.spinner = $(document.body)), t.spinner = new vc.Spinner({
                            container: e.spinner
                        }), void 0 !== e.success) var i = e.success;
                    else var i = function() {};
                    if (e.success = function() {
                            t.spinner.remove(), i.apply(t, arguments)
                        }, void 0 !== e.error) var n = e.error;
                    else var n = function() {};
                    e.error = function() {
                        t.spinner.remove(), n.apply(t, arguments)
                    }
                }
                return Backbone.Model.prototype.fetch.call(this, e)
            }
        })
    }(),
    function() {
        "use strict";
        vc.ACollection = Backbone.Collection.extend({
            spinner: !1,
            fetch: function(e) {
                var t = this;
                if (void 0 === e && (e = {}), e.spinner !== !1) {
                    if (e.spinner === !0 && (e.spinner = $(document.body)), t.spinner = new vc.Spinner({
                            container: e.spinner
                        }), void 0 !== e.success) var i = e.success;
                    else var i = function() {};
                    if (e.success = function() {
                            t.spinner.remove(), i.apply(t, arguments)
                        }, void 0 !== e.error) var n = e.error;
                    else var n = function() {};
                    e.error = function() {
                        t.spinner.remove(), n.apply(t, arguments)
                    }
                }
                return Backbone.Collection.prototype.fetch.call(this, e);
            }
        })
    }(),
    function() {
        "use strict";
        vc.ACarouselItemCollection = vc.CarouselItemCollection.extend({
            spinner: !1,
            fetch: function(e) {
                var t = this;
                if (void 0 === e && (e = {}), e.spinner !== !1) {
                    if (e.spinner === !0 && (e.spinner = $(document.body)), t.spinner = new vc.Spinner({
                            container: e.spinner
                        }), void 0 !== e.success) var i = e.success;
                    else var i = function() {};
                    if (e.success = function() {
                            t.spinner.remove(), i.apply(t, arguments)
                        }, void 0 !== e.error) var n = e.error;
                    else var n = function() {};
                    e.error = function() {
                        t.spinner.remove(), n.apply(t, arguments)
                    }
                }
                return Backbone.Collection.prototype.fetch.call(this, e)
            }
        })
    }(),
    function() {
        "use strict";
        vc.Spinner = Backbone.View.extend({
            tmpl: templates.spinner,
            className: "spinner",
            body: !1,
            container: !1,
            initialize: function(e) {
                void 0 !== e && void 0 !== e.container && void 0 !== e.container[0] ? this.container = e.container[0] : this.container = document.body, this.render()
            },
            remove: function() {
                this.el.parentNode.removeChild(this.el)
            },
            render: function() {
                return document.body === this.container ? $(this.el).addClass("loading-spinner") : $(this.el).addClass("loading-spinner loading-spinner--contained"), this.el.innerHTML = this.tmpl.render(), this.container.appendChild(this.el), this
            }
        })
    }(),
    function() {
        "use strict";
        vc.VideoCardElement = vc.AModel.extend({
            holder: !1,
            addTrack: function(e) {
                void 0 === this.attributes.tracks && (this.attributes.tracks = []), this.attributes.tracks.push(e)
            },
            addSource: function(e) {
                void 0 === this.attributes.sources && (this.attributes.sources = []), this.attributes.sources.push(e)
            },
            activate: function() {
                this.holder && $(this.holder).addClass("active")
            },
            deactivate: function() {
                this.holder && $(this.holder).removeClass("active")
            }
        })
    }(),
    function() {
        "use strict";
        vc.VideoCardCollection = vc.ACollection.extend({
            model: vc.VideoCardElement,
            deactivate: function() {
                for (var e = 0; e < this.models.length; e++) this.models[e].deactivate()
            }
        })
    }();
var globalscope;
! function() {
    "use strict";
    vc.VideoCardManager = Backbone.View.extend({
        collection: !1,
        active: !1,
        player: !1,
        container: !1,
        initialize: function() {
            return 0 == $(".vehicle-video-card").length ? !1 : (this.collection = new vc.VideoCardCollection, this.container = $(".video-container")[0], this.linkStructure(), window.addEventListener("resize", this.updateCardSize), this.updateCardSize(), void $(".scrollbar-inner").scrollbar())
        },
        updateCardSize: function() {
            if (window.innerWidth > 1024) {
                $(".vehicle-video-card")[0].style.height = $(".video-container").height() + "px";
                var e = $(".scroll-wrapper.vido-list-container");
                e.length > 0 && (e[0].style.height = $(".video-container").height() - $(".vehicle-video-card .card-title").height() + "px")
            } else {
                $(".vehicle-video-card")[0].style.height = "auto";
                var e = $(".scroll-wrapper.vido-list-container");
                e.length > 0 && (e[0].style.height = "auto")
            }
        },
        linkStructure: function() {
            var e = this;
            $(".vehicle-video-card li").each(function() {
                var t = new vc.VideoCardElement;
                t.set({
                    id: $(this).data("id")
                }), t.holder = this, $(".track", this).each(function() {
                    t.addTrack({
                        src: $(this).data("src"),
                        label: $(this).data("label"),
                        kind: $(this).data("kind"),
                        srclang: $(this).data("srclang"),
                        "default": $(this).data("default")
                    })
                }), $(".source", this).each(function() {
                    t.addSource({
                        src: $(this).data("src"),
                        type: $(this).data("type"),
                        title: $(this).data("title")
                    })
                });
                var i = this;
                ! function(e, t) {
                    i.addEventListener("click", function(i) {
                        e.activate(t)
                    })
                }(e, t), e.collection.add(t)
            }).promise().done(function() {
                e.connectVideo()
            })
        },
        activate: function(e) {
            this.setActive(e), this.renderVideo(e)
        },
        renderVideo: function(e) {
            var t = '<video class="mediaelement video-guide-element" controls="controls" preload="none">';
            if (void 0 !== e.attributes.sources)
                for (var i = 0; i < e.attributes.sources.length; i++) t += "<source ", void 0 !== e.attributes.sources[i].src && (t += 'src="' + e.attributes.sources[i].src + '" '), void 0 !== e.attributes.sources[i].type && (t += 'type="' + e.attributes.sources[i].type + '" '), void 0 !== e.attributes.sources[i].title && (t += 'title="' + e.attributes.sources[i].title + '" '), t += "/>";
            if (void 0 !== e.attributes.tracks)
                for (var i = 0; i < e.attributes.tracks.length; i++) t += "<track ", void 0 !== e.tracks[i].src && (t += 'src="' + e.tracks[i].src + '" '), void 0 !== e.tracks[i].kind && (t += 'kind="' + e.kind[i].type + '" '), void 0 !== e.tracks[i].srclang && (t += 'srclang="' + e.srclang[i].type + '" '), void 0 !== e.tracks[i]["default"] && (t += 'default="default" '), void 0 !== e.tracks[i].label && (t += 'label="' + e.tracks[i].label + '" '), t += "/>";
            t += "</video>", this.container && $(this.container).html(t), this.upgradeVideo()
        },
        upgradeVideo: function() {
            $(".video-guide-element").length > 0 && (self.player = new MediaElementPlayer(".video-guide-element", {
                enablePluginDebug: !1,
                startVolume: .5,
                loop: !1,
                timerRate: 250,
                features: ["playpause", "progress", "volume", "fullscreen", "tracks"],
                iPadUseNativeControls: !0,
                iPhoneUseNativeControls: !0,
                AndroidUseNativeControls: !0,
                alwaysShowHours: !1,
                showTimecodeFrameCount: !1,
                framesPerSecond: 25,
                enableKeyboard: !0,
                pauseOtherPlayers: !0,
                keyActions: []
            }))
        },
        setActive: function(e) {
            e && (this.active = e, this.collection.deactivate(), this.active.activate())
        },
        connectVideo: function() {
            var e = $(".video-guide-element");
            e.length > 0 && this.setActive(this.collection.findWhere({
                id: e.data("id")
            })), this.upgradeVideo()
        }
    })
}(),
function() {
    "use strict";
    vc.ApiCard = Backbone.View.extend({
        modelType: Backbone.Model,
        contentTmpl: null,
        initialize: function() {
            this.modelType && (this.model = new this.modelType, this.listenTo(this.model, "sync", this.render), this.model.url = this.getModelUrl(), this.model.fetch({
                success: function() {
                    $(".card-spinner").hide()
                },
                error: function() {
                    $(".card-spinner img").hide(), $(".card-spinner").append("<p>The error Occured.</p>")
                }
            }).always(function() {
                $(".card-spinner").hide()
            }))
        },
        getModelUrl: function() {
            return this.$el.data("url")
        },
        render: function() {
            var e = this.$(".remote-content");
            return this.modelType ? (e.html(this.contentTmpl.render(this.model.toJSON())), this) : (e.html(this.contentTmpl.render()), this)
        }
    })
}(),
function() {
    "use strict";
    vc.ApiCollectionCard = vc.ApiCard.extend({})
}(),
function() {
    "use strict";
    vc.BasicOverlay = vc.Overlay.extend({
        className: vc.Overlay.prototype.className + " card-overlay basic-overlay",
        tmpl: templates["basic-overlay"],
        initialize: function(e) {
            vc.Overlay.prototype.initialize.call(this, arguments), this.contentURL = e.contentURL
        },
        close: function(e) {
            e.preventDefault(), e.stopPropagation(), vc.app.overlayRouter.navigate("", {
                trigger: !0
            })
        },
        render: function() {
            vc.Overlay.prototype.render.call(this);
            var e = this.$(".container");
            return e.load(this.contentURL), this
        }
    })
}(),
function() {
    "use strict";
    vc.CarouselOverlay = vc.Overlay.extend({
        className: vc.Overlay.prototype.className + " card-overlay carousel-overlay",
        tmpl: templates["carousel-overlay"],
        carouselItemView: null,
        initialize: function(e) {
            this.carouselItemView = e.carouselItemView, vc.Overlay.prototype.initialize.apply(this, arguments), _.bindAll(this, "next", "prev"), this.listenTo(this.collection, "change:active", this.activeChanged)
        },
        events: _.extend({}, _.result(vc.Overlay.prototype, "events"), {
            "click .prev": "prev",
            "click .next": "next"
        }),
        keyboardEvents: _.extend({}, _.result(vc.Overlay.prototype, "keyboardEvents"), {
            left: "prev",
            right: "next"
        }),
        close: function(e) {
            e.preventDefault(), e.stopPropagation(), vc.app.overlayRouter.navigate("", {
                trigger: !0
            })
        },
        next: function(e) {
            e && e.preventDefault();
            var t = this.collection.nextItem();
            return t ? void vc.app.overlayRouter.navigate(t.getRouterUrl(), {
                trigger: !0,
                replace: !0
            }) : void this.shake(this.collection.activeItem())
        },
        prev: function(e) {
            e && e.preventDefault();
            var t = this.collection.prevItem();
            return t ? void vc.app.overlayRouter.navigate(t.getRouterUrl(), {
                trigger: !0,
                replace: !0
            }) : void this.shake(this.collection.activeItem())
        },
        shake: function(e) {
            e.view.$el.toggleClass("shake", !0), setTimeout(function() {
                e.view.$el.toggleClass("shake", !1)
            }, 300)
        },
        activeChanged: function(e, t) {
            t && (this.$(".prev").toggle(!!this.collection.prevItem()), this.$(".next").toggle(!!this.collection.nextItem()))
        },
        render: function() {
            return vc.Overlay.prototype.render.call(this), this.carousel = new vc.OverlayCarousel({
                collection: this.collection,
                el: this.$(".carousel"),
                itemView: this.carouselItemView
            }).render(), this
        }
    })
}(),
function() {
    "use strict";
    vc.OverlayCarousel = vc.Carousel.extend({
        itemView: null,
        initialize: function(e) {
            this.itemView = e.itemView, vc.Carousel.prototype.initialize.apply(this, arguments), _.bindAll(this, "createViewForModel")
        },
        activeItemChanged: function(e, t) {
            if (t) {
                var i = this.collection.prevItem(),
                    n = this.collection.nextItem();
                this.createViewForModel(i, -this.getDragAdjustment() + "%"), this.createViewForModel(e, 0), this.createViewForModel(n, this.getDragAdjustment() + "%"), this.$el.height(e.view.$el.height())
            }
            vc.Carousel.prototype.activeItemChanged.call(this, e, t)
        },
        createViewForModel: function(e, t) {
            this.itemView && (e && !e.view ? (e.view = new this.itemView({
                model: e
            }), this.$el.append(e.view.render().el), this.transitionItem(e, t, !0)) : this.transitionItem(e, t, !1))
        },
        animateDragChange: function(e, t) {
            t && vc.app.overlayRouter.navigate(e.getRouterUrl(), {
                trigger: !1,
                replace: !0
            })
        },
        getDragAdjustment: function() {
            return Modernizr.touch ? 102 : 100
        }
    })
}(),
function() {
    "use strict";
    vc.OverlayRouter = Backbone.Router.extend({
        routes: {
            "": "defaultRoute",
            "vehicle-info/:vin": "vehicleInformation",
            "service-history-events/:vin(/:id)": "serviceHistoryEvents",
            "service-history-bookings/:vin(/:id)": "serviceHistoryBookings",
            "overlay/*id": "basicOverlay"
        },
        defaultRoute: function() {
            vc.app.$mask.hasClass("fixed") || (vc.app.trigger("mask:hide"), this.clearModels())
        },
        clearModels: function() {
            this.serviceHistory = null, this.serviceBookings = null
        },
        prepareOverlay: function() {
            this.clearModels(), vc.app.$mask.empty()
        },
        vehicleInformation: function(e) {
            var t = new vc.VehicleInfo;
            t.url = vc.settings.marketSegment + "/data/myvolvo/vehicleinfo/" + e, t.fetch();
            var i = new vc.VehicleInfoOverlay({
                model: t
            });
            vc.app.$mask.append(i.render().el)
        },
        serviceHistoryEvents: function(e, t) {
            if (this.serviceHistory && this.serviceHistory.vin === e) return void this.serviceHistory.activate(t);
            this.prepareOverlay();
            var i = this.serviceHistory = new vc.ServiceHistoryEventCollection;
            i.url = vc.settings.marketSegment + "/data/myvolvo/servicehistoryevents/" + e, i.fetch().then(function() {
                i.activate(t)
            });
            var n = new vc.CarouselOverlay({
                collection: i,
                carouselItemView: vc.ServiceHistoryOverlayCarouselItem
            });
            vc.app.$mask.append(n.render().el)
        },
        serviceHistoryBookings: function(e, t) {
            if (this.serviceBookings && this.serviceBookings.vin === e) return void this.serviceBookings.activate(t);
            this.prepareOverlay();
            var i = this.serviceBookings = new vc.ServiceBookingCollection;
            i.url = vc.settings.marketSegment + "/data/myvolvo/servicebookings/" + e, i.fetch().then(function() {
                i.activate(t)
            });
            var n = new vc.CarouselOverlay({
                collection: i,
                carouselItemView: vc.ServiceBookingsOverlayCarouselItem
            });
            vc.app.$mask.append(n.render().el)
        },
        basicOverlay: function(e) {
            this.prepareOverlay();
            var t = new vc.BasicOverlay({
                contentURL: vc.settings.marketSegment + "/data/overlay/" + e
            });
            vc.app.$mask.append(t.render().el)
        }
    })
}(),
function() {
    "use strict";
    vc.ServiceBooking = vc.AModel.extend({
        idAttribute: "BookingNumber",
        getRouterUrl: function() {
            var e = "service-history-bookings/" + this.get("Vin") + "/" + this.id;
            return e
        }
    }), _.extend(vc.ServiceBooking.prototype, vc.Translations)
}(),
function() {
    "use strict";
    vc.ServiceHistoryEvent = vc.CarouselItem.extend({
        idAttribute: "RepairOrderNumber",
        getRouterUrl: function() {
            var e = "service-history-events/" + this.get("Vin") + "/" + this.id;
            return e
        }
    }), _.extend(vc.ServiceHistoryEvent.prototype, vc.Translations)
}(),
function() {
    "use strict";
    vc.VehicleInfo = vc.AModel.extend({
        initialize: function(e) {
            e && (this.url = vc.settings.marketSegment + "/data/myvolvo/vehicleinfo/" + e)
        }
    }), _.extend(vc.VehicleInfo.prototype, vc.Translations)
}(),
function() {
    "use strict";
    vc.CustomerEditorField = vc.AModel.extend({
        idAttribute: "fieldname",
        validate: function(e) {
            return !this.get("required") || null !== e.value && "" !== e.value ? void 0 : "Invalid: A value is required."
        },
        toJSON: function() {
            var e = Backbone.Model.prototype.toJSON.call(this);
            if (e.stringValue = "", e.basvisible || this.collection.editOnly || (e.type = "hidden"), "select" === e.type) {
                e.isSelect = !0;
                var t = this.getSelectedOptionIndex();
                t > -1 && (e.options[t].selected = !0, e.stringValue = e.options[t].value)
            } else if ("input" === e.type) e.isInput = !0, "date" === e.subtype && ("undefined" != typeof e.value && "" !== e.value && null !== e.value ? e.value = moment(e.value, "YYYY-MM-DD").format(vc.settings.dateFormat.toUpperCase()) : e.value = ""), e.stringValue = e.value;
            else if ("hidden" === e.type) e.isHidden = !0, e.stringValue = e.value;
            else if ("checkbox" === e.type) e.isCheckbox = !0, "Positive" === e.value && (e.isChecked = !0);
            else if ("radio" === e.type) {
                e.isRadio = !0;
                var t = this.getRadioSelectedOptionIndex();
                t > -1 && (e.options[t].selected = !0)
            }
            return e
        },
        getSelectedOptionIndex: function() {
            for (var e = this.get("options"), t = this.get("value"), i = 0; i < e.length; i++)
                if (e[i].id === t) return i;
            return -1
        },
        getRadioSelectedOptionIndex: function() {
            var e = this.get("options"),
                t = this.get("value"),
                i = null;
            "Positive" === t ? i = "YES" : "Negative" === t && (i = "NO");
            for (var n = 0; n < e.length; n++)
                if (e[n].id === i) return n;
            return -1
        }
    })
}(),
function() {
    "use strict";
    vc.UserVehicleRelationship = vc.AModel.extend({
        initialize: function(e) {
            e && (this.url = vc.settings.marketSegment + "/data/myvolvo/vehiclerelations/" + e)
        }
    }), _.extend(vc.VehicleInfo.prototype, vc.Translations)
}(),
function() {
    "use strict";
    vc.VehicleDocuments = vc.AModel.extend({
        initialize: function() {}
    }), _.extend(vc.VehicleDocuments.prototype, vc.Translations)
}(),
function() {
    "use strict";
    vc.CustomerEditorFieldset = vc.ACollection.extend({
        model: vc.CustomerEditorField,
        parse: function(e) {
            return this.parseFieldset(e)
        },
        parseFieldset: function(e, t, i, n) {
            for (var s = [], o = 0; o < e.length; o++) {
                var a = e[o];
                t && (a.isSubcontrol = !0, "hidden" !== a.type ? (a.label = i, a.desc = n, i = null, n = null) : (a.label = null, a.desc = null)), a.subcontrols ? s.push.apply(s, this.parseFieldset(a.subcontrols, !0, a.label, a.desc)) : s.push(a)
            }
            return s
        }
    })
}(),
function() {
    "use strict";
    vc.ServiceHistoryEventCollection = vc.ACarouselItemCollection.extend({
        model: vc.ServiceHistoryEvent,
        circular: !1,
        parse: function(e) {
            return e.length && (this.vin = e[0].Vin), vc.CarouselItemCollection.prototype.parse.apply(this, arguments)
        }
    })
}(),
function() {
    "use strict";
    vc.ServiceBookingCollection = vc.ACarouselItemCollection.extend({
        model: vc.ServiceBooking,
        circular: !1,
        parse: function(e) {
            return e.length && (this.vin = e[0].Vin), vc.CarouselItemCollection.prototype.parse.apply(this, arguments)
        }
    })
}(),
function() {
    "use strict";
    vc.VehicleDocumentsCollection = vc.ACollection.extend({
        model: vc.VehicleDocuments
    })
}(),
function() {
    "use strict";
    vc.ServiceBookingsOverlayCarouselItem = vc.CarouselItemView.extend({
        tmpl: templates["service-bookings-overlay-carousel-item"],
        className: vc.CarouselItemView.prototype.className + " service-bookings-overlay-carousel-item",
        initialize: function() {
            _.bindAll(this, "render")
        },
        render: function() {
            this.$el.html(this.tmpl.render(this.model.toJSON()));
            var e = {
                Android: function() {
                    return navigator.userAgent.match(/Android/i)
                },
                BlackBerry: function() {
                    return navigator.userAgent.match(/BlackBerry/i)
                },
                iOS: function() {
                    return navigator.userAgent.match(/iPhone|iPod/i)
                },
                Opera: function() {
                    return navigator.userAgent.match(/Opera Mini/i)
                },
                Windows: function() {
                    return navigator.userAgent.match(/Windows Phone|IEMobile|WPDesktop|ZuneWP7/i)
                },
                any: function() {
                    return e.Android() || e.BlackBerry() || e.iOS() || e.Opera() || e.Windows()
                }
            };
            return e.any() && ($(".desktop").hide(), $(".mobile").show()), this
        }
    })
}(),
function() {
    "use strict";
    vc.VehicleDocumentsCard = Backbone.View.extend({
        template: templates["vehicle-documents-card"],
        initialize: function() {
            _.bindAll(this, "render"), this.collection = new vc.VehicleDocumentsCollection, this.listenTo(this.collection, "sync", this.render), this.collection.url = this.getModelUrl(), this.collection.fetch({
                spinner: $(".card-spinner"),
                success: function() {
                    $(".card-spinner")[0].style.display = "none"
                },
                error: function() {
                    $(".card-spinner").append("<p>An error Occured.</p>")
                }
            }).always(function() {})
        },
        events: {
            "click .documents-card-list li": "liClicked"
        },
        getModelUrl: function() {
            return this.$el.data("url")
        },
        liClicked: function(e) {
            var t = $(e.currentTarget),
                i = t.find("a .documents-card-link").attr("href");
            if (void 0 !== i) {
                var n = window.open(i, "_blank");
                void 0 === n && (location.href = i)
            }
        },
        render: function() {
            var e = this.$(".remote-content");
            return this.collection.models.length ? (e.html(this.template.render({
                documents: this.collection.toJSON()
            })), this.$el.find(".documents-card-list").scrollbar(), this) : (e.html(this.template.render()), this)
        }
    })
}(),
function() {
    "use strict";
    vc.VehicleInfoCard = vc.ApiCard.extend({
        modelType: vc.VehicleInfo,
        contentTmpl: templates["vehicle-info-card"],
        initialize: function() {
            vc.ApiCard.prototype.initialize.apply(this, arguments), _.bindAll(this, "openVehicleSpecifications")
        },
        events: {
            "click .card-cta": "openVehicleSpecifications"
        },
        openVehicleSpecifications: function(e) {
            e.preventDefault();
            var t = this.$el.data("vin");
            vc.app.overlayRouter.navigate("vehicle-info/" + t, {
                trigger: !0
            })
        }
    })
}(),
function() {
    "use strict";
    vc.VehicleInfoOverlay = vc.Overlay.extend({
        className: vc.Overlay.prototype.className + " card-overlay vehicle-info-overlay",
        tmpl: templates["vehicle-info-overlay"]
    })
}(),
function() {
    "use strict";
    vc.ServiceHistoryCardRow = Backbone.View.extend({
        tagName: "tr",
        tmpl: templates["service-history-card-row"],
        initialize: function() {
            _.bindAll(this, "rowClicked")
        },
        events: {
            click: "rowClicked"
        },
        rowClicked: function(e) {
            e.preventDefault(), vc.app.overlayRouter.navigate(this.model.getRouterUrl(), {
                trigger: !0
            })
        },
        render: function() {
            return this.$el.html(this.tmpl.render(this.model.toJSON())), this
        }
    })
}(),
function() {
    "use strict";
    vc.ServiceHistoryCard = Backbone.View.extend({
        initialize: function() {
            _.bindAll(this, "viewAllClicked", "itemAdded"), this.collection = new vc.ServiceHistoryEventCollection, this.listenTo(this.collection, "add", this.itemAdded)
        },
        events: {
            "click .view-all": "viewAllClicked"
        },
        viewAllClicked: function(e) {
            e.preventDefault();
            var t = "service-history-events/" + this.$el.data("vin");
            vc.app.overlayRouter.navigate(t, {
                trigger: !0
            })
        },
        itemAdded: function(e) {
            var t = new vc.ServiceHistoryCardRow({
                model: e
            });
            this.$tableBody.append(t.render().el)
        },
        render: function() {
            return this.$tableBody = this.$("table tbody"), this.collection.url = vc.settings.marketSegment + "/data/myvolvo/servicehistoryevents/" + this.$el.data("vin"), this.collection.fetch({
                spinner: $(".card-spinner"),
                success: function() {},
                error: function() {
                    $(".card-spinner").append("<p>The error Occured.</p>")
                }
            }).always(function() {}), this
        }
    })
}(),
function() {
    "use strict";
    vc.ServiceHistoryOverlayCarouselItem = vc.CarouselItemView.extend({
        tmpl: templates["service-history-overlay-carousel-item"],
        className: vc.CarouselItemView.prototype.className + " service-history-overlay-carousel-item",
        initialize: function() {
            vc.CarouselItemView.prototype.initialize.apply(this, arguments), _.bindAll(this, "render")
        },
        render: function() {
            return this.$el.html(this.tmpl.render(this.model.toJSON())), new vc.Accordion({
                el: this.$(".accordion")
            }).render(), this
        }
    })
}(),
function() {
    "use strict";
    vc.ConnectVehicle = Backbone.View.extend({
        initialize: function() {
            _.bindAll(this, "submit")
        },
        fetching: !1,
        events: {
            "click  .form-actions a": "submit"
        },
        submit: function(e) {
            if (e.preventDefault(), !this.fetching) {
                var t = this.$("*[name=vin]"),
                    i = $(t).closest(".form-item"),
                    n = t.val(),
                    s = this;
                if ("" === n) return s.clearErrorPlaceholder(i), i.toggleClass("invalid", !0), null;
                var o = new vc.VehicleInfo(n);
                this.fetching = !0, o.fetch({
                    success: function() {
                        s.fetching = !1, i.toggleClass("invalid", !1), o.state = "AddCar";
                        var e = new vc.ConnectVehicleOverlay({
                            model: o
                        });
                        vc.app.$mask.append(e.el)
                    },
                    error: function(e, t) {
                        s.fetching = !1, 404 === t.status || 204 === t.status ? (s.clearErrorPlaceholder(i), i.addClass("no-data")) : 400 === t.status ? (s.clearErrorPlaceholder(i), i.toggleClass("invalid", !0)) : (s.clearErrorPlaceholder(i), i.addClass("server-error"))
                    }
                })
            }
        },
        clearErrorPlaceholder: function(e) {
            e.removeClass("invalid"), e.removeClass("no-data"), e.removeClass("server-error")
        }
    })
}(),
function() {
    "use strict";
    vc.UpdateOwnerConnectVehicle = Backbone.View.extend({
        initialize: function() {
            _.bindAll(this, "submit")
        },
        fetching: !1,
        events: {
            "click  .form-actions": "submit"
        },
        submit: function(e) {
            if (e.preventDefault(), !this.fetching) {
                var t = $(e.currentTarget).attr("alt"),
                    i = $('[name="vin"][alt=' + t + "]"),
                    n = i.text(),
                    s = this,
                    o = new vc.VehicleInfo(n);
                this.fetching = !0, o.fetch({
                    success: function() {
                        s.fetching = !1;
                        var e = new vc.ConnectVehicleOverlay({
                            model: o
                        });
                        vc.app.$mask.append(e.render().el)
                    },
                    error: function() {
                        s.fetching = !1
                    }
                })
            }
        }
    })
}(),
function() {
    "use strict";
    var e = "2",
        t = null;
    vc.ConnectVehicleOverlay = vc.Overlay.extend({
        className: vc.Overlay.prototype.className + " card-overlay connect-vehicle-overlay",
        tmpl: templates["connect-vehicle-overlay"],
        clearAddressHash: !1,
        spinner: !1,
        initialize: function() {
            this.listenTo(vc.app, "overlay:disabled", this.callClose), _.bindAll(this, "formAction", "didntadd", "reload"), vc.Overlay.prototype.initialize.apply(this, arguments)
        },
        events: _.extend({}, _.result(vc.Overlay.prototype, "events"), {
            "click  .form-actions a": "formAction",
            "change input[name=relationship]": "relationshipChange"
        }),
        relationshipChange: function() {
            this.getSelectedRelationship() === e ? this.$(".vehicle-date").slideDown(300) : this.$(".vehicle-date").slideUp(300)
        },
        callClose: function(e) {},
        close: function(e) {
            e.preventDefault(), e.stopPropagation(), vc.app.trigger("mask:hide")
        },
        formAction: function(e) {
            e.preventDefault();
            var t = e.target.href,
                i = t.indexOf("#"),
                n = i > -1 ? t.substr(i + 1) : "";
            switch (n) {
                case "next":
                    this.submitRelationship();
                    break;
                case "confirm":
                    this.submitOwner();
                    break;
                case "cancel":
                    vc.app.trigger("mask:hide")
            }
        },
        getFormAction: function(e) {
            return this.$(".form-actions a[href='#" + e + "']")
        },
        getSelectedRelationship: function() {
            return this.$(".vehicle-relationship input[name='relationship']:checked").val()
        },
        updateModel: function() {
            var e = new vc.VehicleInfo(this.model.attributes.VinId);
            this.fetching = !0, e.fetch({
                success: function() {
                    self.fetching = !1, e.state = "SetOwner", $("#additionalInfo").show();
                    var t = new vc.ConnectVehicleOverlay({
                        model: e
                    });
                    $(".connect-vehicle-overlay").replaceWith(t.el)
                }
            })
        },
        validateDateComponent: function(e, t) {
            var i = this.$(".vehicle-date select[name='" + e + "']"),
                n = i.val(),
                s = $(i).closest(".form-item");
            return "" === n ? (s.toggleClass("invalid", !0), !1) : (s.toggleClass("invalid", !1), t[e] = n, !0)
        },
        setState: function(e) {
            "AddCar" === e ? ($(".ownerField").toggle(!1), this.getFormAction("confirm").toggle(!1)) : "SetOwner" === e && ($(".ownerField").toggle(!0), this.$(".vehicle-relationship").slideDown(300), this.$(".misc-info").slideDown(300), this.relationshipChange(), this.getFormAction("confirm").toggle(!0), this.getFormAction("next").toggle(!1)), t = e
        },
        reload: function() {
            setTimeout(function() {
                location.reload(!0)
            }, 1e3)
        },
        didntadd: function() {
            vc.app.trigger("mask:hide");
            var e = new vc.Notification("Cannot Add car");
            e.fetch({
                type: "POST",
                success: function() {
                    vc.app.notifications.add(e)
                }
            })
        },
        submitRelationship: function() {
            var e = this.model.get("VinId");
            this.spinner = new vc.Spinner;
            var t = this;
            return $.ajax({
                url: vc.settings.marketSegment + "/data/myvolvo/vehiclerelations/" + e,
                type: "POST"
            }).done(function() {
                t.removeSpinner();
                var i = new vc.UserVehicleRelationship(e);
                i.fetch({
                    success: function() {
                        void 0 !== i.get("type") ? t.updateModel() : t.didntadd()
                    },
                    error: function() {
                        t.didntadd()
                    }
                })
            }).fail(function() {
                t.removeSpinner()
            }).responseText
        },
        removeSpinner: function() {
            this.spinner && (this.spinner.remove(), this.spinner = !1)
        },
        submitOwner: function() {
            var t = {
                    relationship: this.getSelectedRelationship()
                },
                i = !0;
            if (t.relationship == e)
                if ("" == $("#date").val()) i = !1, $($("#date")[0].parentNode).addClass("invalid");
                else {
                    var n = moment(this.$("#date").val(), vc.settings.dateFormat.toUpperCase());
                    t.date = n.format("YYYY-MM"), "Invalid date" == t.date && (i = !1, $(".dateholder").addClass("invalid"))
                }
            if (i) {
                var s = this.model.get("VinId"),
                    o = this.model.get("Owner");
                if ("1" == t.relationship) location.reload(!0);
                else if ("2" == t.relationship) {
                    this.spinner = new vc.Spinner;
                    var a = this;
                    $.ajax({
                        url: vc.settings.marketSegment + "/data/myvolvo/vehicleownership/" + s,
                        data: {
                            ownershipStart: t.date + "-01"
                        },
                        type: "POST"
                    }).done(function() {
                        a.removeSpinner(), a.reload()
                    }).fail(function() {
                        a.removeSpinner(), a.reload()
                    })
                } else if ("3" == t.relationship) {
                    this.spinner = new vc.Spinner;
                    var a = this;
                    "" !== o && $.ajax({
                        url: vc.settings.marketSegment + "/data/myvolvo/vehiclerelations/" + s,
                        type: "DELETE"
                    }).done(function() {
                        a.removeSpinner(), this.reload()
                    }).fail(function() {
                        a.removeSpinner()
                    })
                }
                vc.app.trigger("mask:hide")
            }
        },
        render: function(e) {
            return vc.Overlay.prototype.render.apply(this, arguments), e && this.setState(e.state), $(".datepicker").pikaday({
                minDate: new Date(2004, 1),
                maxDate: new Date,
                format: vc.settings.dateFormat.toUpperCase(),
                container: $(".datepicker")[0].parentNode
            }), this
        }
    })
}(),
function() {
    "use strict";
    vc.ManageVehicle = Backbone.View.extend({
        initialize: function() {
            _.bindAll(this, "clickAction", "confirmRemove", "removeSuccess", "removeFail", "activateVehicle", "updateOwner")
        },
        events: {
            "click  .account-setting-actions a": "clickAction",
            "click  .account-car-set-main": "activateVehicle"
        },
        spinner: !1,
        clickAction: function(e) {
            e.preventDefault();
            var t = e.target.href,
                i = t.indexOf("#"),
                n = i > -1 ? t.substr(i + 1) : "";
            switch (n) {
                case "disconnect":
                    this.remove(!1);
                    break;
                case "updateOwner":
                    this.updateOwner(!1)
            }
        },
        remove: function() {
            var e = this.$el.data("vin"),
                t = new vc.VehicleInfo(e);
            t.fetch();
            var i = new vc.RemoveVehicleOverlay({
                model: t
            });
            i.render(), i.on("confirm", this.confirmRemove), vc.app.$mask.append(i.el)
        },
        updateOwner: function() {
            var e = this.$el.data("vin"),
                t = new vc.VehicleInfo(e);
            this.fetching = !0, t.fetch({
                errorMessage: "Cannot change owner",
                success: function() {
                    self.fetching = !1, t.state = "SetOwner";
                    var e = new vc.ConnectVehicleOverlay({
                        model: t
                    });
                    e.render(), vc.app.$mask.append(e.render().el)
                }
            })
        },
        confirmRemove: function() {
            var e = this.$el.data("vin"),
                t = $(".relationship-type-" + e).text(),
                i = vc.settings.marketSegment + "/data/myvolvo/vehiclerelations/";
            $(".my-cars").css("pointer-events", "none"), $(".my-cars").fadeTo("slow", .7), this.spinner = new vc.Spinner, "drives" === t.toLowerCase() ? ! function(t) {
                $.ajax({
                    url: i + e,
                    type: "DELETE"
                }).done(function() {
                    t.removeSuccess()
                }).fail(function() {
                    t.removeFail()
                })
            }(this) : "owns" === t.toLowerCase() && ! function(t) {
                $.ajax({
                    url: i + e,
                    type: "DELETE"
                }).done(function() {
                    i = vc.settings.marketSegment + "/data/myvolvo/vehicleownership/", $.ajax({
                        url: i + e,
                        type: "DELETE"
                    }).done(function() {
                        var e = new vc.Notification("Removal disclaimer");
                        e.fetch({
                            type: "POST",
                            success: function() {
                                vc.app.notifications.add(e)
                            }
                        }), t.removeSuccess()
                    }).fail(function() {
                        this.removeFail()
                    })
                }).fail(function() {
                    this.removeFail()
                })
            }(this)
        },
        removeSuccess: function() {
            this.$el.fadeOut(), $(".my-cars").fadeTo("slow", 1), this.removeSpinner(), $(".my-cars").css("pointer-events", "auto")
        },
        removeFail: function() {
            this.removeSpinner();
            var e = new vc.Notification("Could not remove vehicle");
            e.fetch({
                type: "POST",
                success: function() {
                    vc.app.notifications.add(e)
                }
            })
        },
        removeSpinner: function() {
            this.spinner && (this.spinner.remove(), this.spinner = !1)
        },
        activateVehicle: function() {
            var e = this.$el.data("vin"),
                t = vc.settings.marketSegment + "/data/myvolvo/activatevehicle/" + e;
            this.spinner = new vc.Spinner;
            var i = this;
            $.ajax({
                type: "POST",
                url: t
            }).done(function() {
                i.removeSpinner(), setTimeout(function() {
                    location.reload(!0)
                }, 1e3)
            }).fail(function() {
                i.removeSpinner()
            })
        }
    })
}(),
function() {
    "use strict";
    vc.RemoveVehicleOverlay = vc.Overlay.extend({
        className: vc.Overlay.prototype.className + " card-overlay remove-vehicle-overlay",
        tmpl: templates["remove-vehicle-overlay"],
        clearAddressHash: !1,
        initialize: function() {
            _.bindAll(this, "formAction"), vc.Overlay.prototype.initialize.apply(this, arguments)
        },
        events: _.extend({}, _.result(vc.Overlay.prototype, "events"), {
            "click  .form-actions a": "formAction"
        }),
        formAction: function(e) {
            e.preventDefault();
            var t = e.target.href,
                i = t.indexOf("#"),
                n = i > -1 ? t.substr(i + 1) : "";
            switch (n) {
                case "confirm":
                    vc.app.trigger("mask:hide"), this.trigger("confirm");
                    break;
                case "cancel":
                    vc.app.trigger("mask:hide")
            }
        }
    })
}(),
function() {
    "use strict";
    vc.CustomerEditor = Backbone.View.extend({
        cardTemplate: templates["customer-editor-card"],
        formTemplate: templates["customer-editor-form"],
        formPartials: {
            input: templates["customer-editor-form-input"],
            select: templates["customer-editor-form-select"],
            hidden: templates["customer-editor-form-hidden"],
            checkbox: templates["customer-editor-form-checkbox"],
            radio: templates["customer-editor-form-radio"]
        },
        spinner: !1,
        editOnly: !1,
        editMode: !1,
        initialize: function() {
            _.bindAll(this, "render", "clickAction", "submitForm"), this.editOnly = void 0 !== this.$el.data("edit-only"), this.editMode = this.editOnly, this.collection = new vc.CustomerEditorFieldset, this.collection.url = vc.settings.marketSegment + "/data/myvolvo/profilefields", this.collection.fetch({
                spinner: $(".card-spinner")
            }).then(this.render)
        },
        events: {
            "click .account-setting-actions a": "clickAction",
            "click .form-actions a": "clickAction"
        },
        clickAction: function(e) {
            e.preventDefault();
            var t = e.target.href,
                i = t.indexOf("#"),
                n = i > -1 ? t.substr(i + 1) : "";
            switch (n) {
                case "update":
                    this.setEditMode(!0);
                    break;
                case "save":
                    this.submitForm();
                    break;
                case "cancel":
                    this.setEditMode(!1)
            }
        },
        submitForm: function() {
            var e = this.collection,
                t = this.$("*[name]"),
                i = !0,
                n = {};
            if (t.each(function(t, s) {
                    var o = e.get(s.name),
                        a = null;
                    "checkbox" === o.attributes.type ? a = s.checked ? "Positive" : "Negative" : "radio" === o.attributes.type ? s.checked ? "YES" === s.value ? a = "Positive" : "NO" === s.value && (a = "Negative") : a = n[s.name] ? n[s.name] : "Neutral" : a = "date" === o.attributes.subtype ? moment(s.value, vc.settings.dateFormat.toUpperCase()).format("YYYY-MM-DD") : s.value, n[s.name] = encodeURIComponent(a);
                    var r = o.set("value", a, {
                            validate: !0
                        }),
                        l = $(s).closest(".form-item");
                    r || (i = !1), l.toggleClass("invalid", !r)
                }), this.fieldNotEmpty("Addresses[0].Type", t) || (this.fieldNotEmpty("Addresses[0].City", t) || this.fieldNotEmpty("Addresses[0].Country", t) || this.fieldNotEmpty("Addresses[0].AdministrativeArea", t) || this.fieldNotEmpty("Addresses[0].PostalCodeNumber", t) || this.fieldNotEmpty("Addresses[0].Line1", t) || this.fieldNotEmpty("Addresses[0].Line2", t) || this.fieldNotEmpty("Addresses[0].Line3", t) || this.fieldNotEmpty("Addresses[0].Line4", t)) && (n["Addresses[0].Type"] = "ADDR_HOME"), i) {
                $.each(n, function(e, t) {
                    n[e] = decodeURIComponent(t)
                });
                var s = this;
                s.spinner = new vc.Spinner, $.post(vc.settings.marketSegment + "/data/myvolvo/customer", n).always(function() {
                    s.spinner && (s.spinner.remove(), s.spinner = !1), location.reload()
                }), this.editOnly || this.setEditMode(!1)
            }
        },
        setEditMode: function(e) {
            this.editMode = e, this.render()
        },
        render: function() {
            this.collection.editOnly = this.editOnly;
            var e = {
                editOnly: this.editOnly,
                fieldset: this.collection.toJSON()
            };
            return this.editMode ? (this.$el.html(this.formTemplate.render(e, this.formPartials)), this.addValidation()) : this.$el.html(this.cardTemplate.render(e)), $(".customer-editor").fadeIn(), this
        },
        fieldNotEmpty: function(e, t) {
            for (var i = 0; i < t.length; i++)
                if (t[i].name === e) return !!t[i].value
        },
        addValidation: function() {
            $("form").each(function() {
                $(this).validate()
            }), $("#account-form").validate(), $.validator.addMethod("phoneNumber", function(e, t) {
                return e = e.replace(/\s+/g, ""), this.optional(t) || e.match(/^[0-9()\-+\/\\]+$/) && e.match(/(\D*\d){4}/)
            }, "Please specify a valid phone number"), $(".phoneNumber").each(function() {
                $(this).rules("add", {
                    phoneNumber: !0
                })
            }), $(".email").each(function() {
                $(this).rules("add", {
                    email: !0
                })
            }), $(".number").each(function() {
                $(this).rules("add", {
                    number: !0
                })
            }), $(".date").length > 0 && $(".date").pikaday({
                minDate: new Date(1900, 1),
                maxDate: new Date,
                format: vc.settings.dateFormat.toUpperCase(),
                container: $(".date")[0].parentNode
            })
        }
    })
}(),
function() {
    "use strict";
    vc.BookAServiceForm = Backbone.View.extend({
        initialize: function() {
            var e = this.$(".account-car.active").data("vin");
            this.selectedData.car = e, this.listenTo(vc.app, "dealer-added", this.dealerUpdate), this.listenTo(vc.app, "dealer-name-search", this.dealerUpdate),
                function(e) {
                    $(".xtime-form-container").bind("submit", function() {
                        return e.checkData()
                    })
                }(this)
        },
        checkData: function() {
            return this.selectedData.car === !1 || void 0 === this.selectedData.car || 0 == this.selectedData.provider || void 0 === this.selectedData.provider ? ($(".book-a-service-button").addClass("invalid"), !1) : ($(".book-a-service-button").removeClass("invalid"), !0)
        },
        selectedData: {
            car: !1,
            provider: !1
        },
        events: {
            "click .account-car": "carClicked"
        },
        dealerUpdate: function(e) {
            void 0 !== e && e !== !1 ? this.selectedData.provider = e["dealrer-id"] : this.selectedData.provider = !1
        },
        carClicked: function(e) {
            this.$(".account-car").removeClass("active");
            var t = $(e.currentTarget).addClass("active").data("vin");
            void 0 !== t && (this.selectedData.car = t, this.$("input[name=vin]").val(t))
        },
        render: function() {
            return $(function() {
                if (document.getElementById("xtime-iframe")) {
                    var e = '<div class="warning-container"><div class="warning-title"><hgroup><h3></h3></hgroup></div><div class="warning-body"></div></div>';
                    $(e).prependTo(".book-a-service-form");
                    var t = "Please make sure you have saved changes before leaving the booking!",
                        i = "If you leave this page your booking with any unsaved changes will be lost and you will have to start the booking process from the link in the email again.",
                        n = "If you leave this page your booking with any unsaved changes will be lost and you will have to start the booking process again.";
                    $(".warning-title h3").text(t), window.location.href.search("companyCode") > 0 && window.location.href.search("customerID") > 0 ? $(".warning-body").text(i) : $(".warning-body").text(n)
                }
            }), this
        }
    })
}(),
function() {
    "use strict";
    vc.PreferredDealerFooterBg = Backbone.View.extend({
        initialize: function() {
            _.bindAll(this, "imageloaded")
        },
        render: function() {
            this.$bgImg = this.$("img");
            var e = parseFloat(this.$el.data("aspect-ratio")),
                t = {
                    el: this.$bgImg,
                    method: this.$el.data("scale-method"),
                    aspectRatio: e ? e : 16 / 9
                },
                i = this.$el.data("alignment");
            if (i) {
                for (var n = i.split(","), s = 0; s < n.length; s++) {
                    var o = parseFloat(n[s]);
                    _.isNaN(o) && (o = .5), n[s] = o
                }
                n.length < 2 && n.push(.5), t.alignment = n
            }
            return this.startFillingContainer(t), this.$bgImg.length && this.$bgImg[0].naturalHeight ? this.imageloaded() : this.$bgImg.on("load", this.imageloaded), this
        },
        imageloaded: function() {
            this.$el.parents(".footer").addClass("footer-bg-loaded")
        }
    }), vc.mixin(vc.PreferredDealerFooterBg.prototype, vc.ElementFillContainer)
}(),
function() {
    "use strict";
    vc.NotificationDropdown = Backbone.View.extend({
        initialize: function() {
            this.collection = vc.app.notifications, this.listenTo(this.collection, "add", this.addOne), this.listenTo(this.collection, "update", this.updated), this.listenTo(this.collection, "change:target", this.updated)
        },
        events: {
            mouseenter: "enter",
            mouseleave: "leave"
        },
        enter: function() {
            this.$(".notification-list").stop().fadeIn({
                duration: 200,
                queue: !1
            })
        },
        leave: function() {
            this.$(".notification-list").stop().fadeOut({
                duration: 200,
                queue: !1
            })
        },
        addOne: function(e) {
            if (_.contains(e.get("target"), "dropdown")) {
                var t = new vc.NotificationRow({
                    model: e
                });
                e.setDropdown(t.el), this.$(".notification-list-items").append(t.render().el)
            }
        },
        updated: function() {
            var e = this.collection.any(function(e) {
                return _.contains(e.get("target"), "dropdown")
            });
            this.$(".notification-list").toggleClass("notification-list-empty", !e), this.updateBadge()
        },
        updateBadge: function() {
            var e = this.collection.countBy(function(e) {
                    return _.contains(e.get("target"), "dropdown") ? "badge" : "nobadge"
                }),
                t = this.$(".badge");
            e.badge ? (t.toggle(!0), t.html(e.badge)) : t.toggle(!1)
        }
    })
}(),
function() {
    "use strict";
    vc.NotificationRow = Backbone.View.extend({
        tagName: "li",
        tmpl: templates["notification-row"],
        events: {
            "click .singlelink": "linkedRemove"
        },
        render: function() {
            return this.$el.html(this.tmpl.render(this.model.toJSON())), this
        },
        linkedRemove: function(e) {
            e && e.preventDefault && e.preventDefault();
            var t = vc.app.notifications.findWhere({
                id: $(e.target).data("id")
            });
            return t && t.destroy({
                success: function() {
                    document.location.href = e.target.href
                },
                error: function() {
                    document.location.href = e.target.href
                }
            }), !1
        }
    })
}(),
function() {
    "use strict";
    vc.NotificationBar = Backbone.View.extend({
        usedIds: {},
        initialize: function() {
            this.collection = vc.app.notifications, this.listenTo(this.collection, "add", this.addOne), this.listenTo(this.collection, "update", this.updated), this.listenTo(this.collection, "change:target", this.updated)
        },
        addOne: function(e) {
            if (_.contains(e.get("target"), "bar") && void 0 === this.usedIds[e.attributes.id]) {
                var t = new vc.NotificationView({
                    model: e
                });
                e.setBar(t.el), this.$el.append(t.render().el), this.usedIds[e.attributes.id] = !0
            }
        },
        updated: function() {
            var e = this.collection.any(function(e) {
                return _.contains(e.get("target"), "bar")
            });
            vc.app.$html.toggleClass("has-notifications", e)
        }
    })
}(),
function() {
    "use strict";
    vc.NotificationView = Backbone.View.extend({
        className: "notification",
        tmpl: templates.notification,
        animationGrazeTime: 350,
        initialize: function() {
            _.bindAll(this, "hardRemove", "remove", "cancelRemove", "softRemove"), this.listenTo(this.model, "remove", this.hardRemove)
        },
        events: {
            "click .close": "hardRemove",
            "click .button": "linkedRemove",
            mouseover: "cancelRemove"
        },
        cancelRemove: function(e) {
            e && e.preventDefault(), this.$el.toggleClass("removing", !1), clearTimeout(this.removeTimeout)
        },
        hardRemove: function(e) {
            e && e.preventDefault && e.preventDefault();
            var t = vc.app.notifications.findWhere({
                id: $(e.target).data("id")
            });
            t && t.destroy(), this.undelegateEvents(), this.$el.toggleClass("removing", !0), setTimeout(this.remove, this.animationGrazeTime)
        },
        linkedRemove: function(e) {
            e && e.preventDefault && e.preventDefault();
            var t = vc.app.notifications.findWhere({
                id: $(e.target).data("id")
            });
            return t && t.destroy({
                success: function() {
                    document.location.href = e.target.href
                },
                error: function() {
                    document.location.href = e.target.href
                }
            }), !1
        },
        softRemove: function(e) {
            this.removeTimeout && clearTimeout(this.removeTimeout), this.$el.toggleClass("removing", !0), this.removeTimeout = setTimeout(this.remove, this.animationGrazeTime)
        },
        startRemove: function() {
            this.model.get("fixed") || (this.removeTimeout = setTimeout(this.softRemove, this.model.get("removeAfter")))
        },
        remove: function() {
            var e = this.model.get("target");
            return this.model.set("target", _.without(e, "bar")), Backbone.View.prototype.remove.call(this)
        },
        render: function() {
            var e = this.model.get("type");
            e && this.$el.addClass(e.toLowerCase());
            var t = this.tmpl.render(this.model.toJSON());
            return this.$el.html(t), this
        }
    })
}(),
function() {
    "use strict";
    vc.App = Backbone.View.extend({
        el: $("#volvo"),
        navTimeout: null,
        breakpoints: {
            "default": {
                "extra-large": 1025,
                large: 769,
                medium: 481,
                small: 0
            },
            nav: {
                "extra-large": 1025,
                large: 769,
                medium: 481,
                small: 0
            },
            subnav: {
                large: 1140,
                medium: 540,
                small: 0
            }
        },
        devices: [{
            name: "extra-large",
            minWidth: 1025
        }, {
            name: "large",
            minWidth: 769
        }, {
            name: "medium",
            minWidth: 480
        }, {
            name: "small",
            minWidth: 0
        }],
        components: {
            ".nav": vc.Nav,
            ".nav-drop": vc.NavDrop,
            ".nav-drop-filter": vc.NavDropFilter,
            ".subnav": vc.SubNav,
            ".notification-bar": vc.NotificationBar,
            ".notification-dropdown": vc.NotificationDropdown,
            ".navScroll": vc.NavScroll,
            ".hero-background": vc.HeroBackground,
            ".carousel-slide": vc.SwipeCarousel,
            ".pdp-hero.hero .hero-content-align": vc.PDPSwipeCarousel,
            ".slider-container": vc.SliderOverlay,
            ".readmore-overlay": vc.ReadMoreOverlayObject,
            ".container-glance": vc.SpecificationGlance,
            ".glance-col": vc.SpecificationCarousel,
            ".reviews-carousel": vc.ScoreBreakdown,
            ".individual-review-model": vc.IndividualReviewsObject,
            ".interactive-timeline": vc.interactiveTimeline,
            ".standard-hero": vc.StandardHero,
            ".fullscreen-hero": vc.FullscreenHero,
            ".hero-group": vc.HeroGroup,
            ".pdp-hero-group": vc.PDPHeroGroup,
            ".hero-shortcuts": vc.HeroShortcuts,
            ".video-hero": vc.VideoHero,
            ".video-player": vc.Video,
            ".configurable-video-player": vc.ConfigurableVideo,
            ".interactive-video-player": vc.InteractiveVideo,
            ".story-carousel": vc.StoryCarousel,
            ".engine-picker": vc.EnginePicker,
            ".tabs": vc.Tabs,
            ".lt-wrapper": vc.LanguageTunnel,
            ".standard-accordion": vc.Accordion,
            ".story-accordion": vc.StoryAccordion,
            ".background": vc.Background,
            ".story-grid": vc.StoryGrid,
            ".gallery": vc.Gallery,
            ".gallery-tabs": vc.GalleryTabs,
            ".gallery-grid": vc.GalleryGrid,
            ".two-cols-wrapper": vc.TwoCols,
            ".car-configurator": vc.CarConfig,
            ".dropdown-wrapper": vc.Dropdown,
            ".manuals-dropdown": vc.ManualsDropdown,
            ".manuals-dropdown-item": vc.ManualsDropdownItem,
            ".recall": vc.Recall,
            ".chart-bar": vc.BarChart,
            ".chart-doughnut": vc.DoughnutChart,
            ".bar-chart-carousel": vc.BarChartCarousel,
            ".will-fade-in": vc.Interactive,
            ".dealer-picker-component": vc.DealerPicker,
            ".offers-wrapper": vc.Offers,
            ".sticky": vc.StickyElement,
            ".bottomSync": vc.bottomSync,
            ".blog": vc.blog,
            ".us-engine-picker": vc.USEnginePicker,
            ".car-comparison": vc.CarComparison,
            ".car-comparison-tool": vc.CarComparisonTool,
            ".inline-car-compare": vc.InlineCarCompare,
            ".countdown": vc.Countdown,
            ".filterable": vc.Filter,
            ".navigation-panel": vc.NavigationPanel,
            ".items-list-wrapper": vc.ItemsList,
            ".icon-nav": vc.IconNavigation,
            ".social": vc.SocialSharing,
            ".footer": vc.Footer,
            ".tabular-layout>table": vc.TablularView,
            ".service-history-card": vc.ServiceHistoryCard,
            ".vehicle-documents-card": vc.VehicleDocumentsCard,
            ".vehicle-info-card": vc.VehicleInfoCard,
            ".step-card": vc.StepCard,
            ".customer-editor": vc.CustomerEditor,
            ".connect-vehicle": vc.ConnectVehicle,
            ".manage-vehicle": vc.ManageVehicle,
            ".book-a-service-form": vc.BookAServiceForm,
            ".js-corporate-comm": vc.CorporateComm,
            ".car-campaign-configurator": vc.CarCampaignConfigurator,
            ".campaign-order": vc.CarCampaignOrderForm,
            ".find-your-volvo": vc.FindYourVolvo,
            ".story-stream-wrapper": vc.StoryStream,
            ".extf-one": vc.ExteriorFeatureOne,
            ".extf-two": vc.ExteriorFeatureTwo,
            ".extf-three": vc.ExteriorFeatureThree,
            ".preferred-dealer-footer-bg": vc.PreferredDealerFooterBg,
            ".xc90demoapp": vc.XC90DemoApp,
            ".event-calendar": vc.EventCalendar,
            ".time-saver-calc": vc.TimeSaverCalculator
        },
        initialize: function() {
            _.bindAll(this, "documentKeyUp", "determineDevice", "scrolled", "resized", "maskClicked", "scrolledSticky"), this.$body = $("body"), this.$html = $("html"), this.$window = $(window), this.$mask = $("#mask"), this.lang = this.$html.attr("lang"), this.isPageEditor = this.$html.hasClass("is-page-editor"), this.scrollbarWidth = this.measureScrollbar(), this.currentWidth = $(window).width(), this.determineDevice({
                silent: !0
            });
            var e = _.bind(this.createComponents, this);
            _.defer(e), $(window).on("resize.app", _.throttle(this.resized, 100));
            var t = this;
            $(window).on("scroll.app", function() {
                window.requestAnimationFrame(t.scrolled), t.scrolledSticky()
            }), $(document).keyup(this.documentKeyUp), this.listenTo(this, "mask:show", this.showMask), this.listenTo(this, "mask:hide", this.hideMask), this.listenTo(this, "navDropdown:show", this.showDropdown), this.listenTo(this, "navDropdown:hide", this.hideDropdown), this.overlayRouter = new vc.OverlayRouter, this.notifications = new vc.NotificationCollection, this.listenTo(this, "notification", this.notificationReceived), this.videoGuideCard = new vc.VideoCardManager, _.defer(_.bind(this.fetchNotifications, this))
        },
        events: {
            "click #mask": "maskClicked",
            "click .js-scroll-top": "scrollToTop",
            "scroll-spy:enter-viewport": "interactiveEnterViewport",
            "scroll-spy:half-mark": "interactiveHalfViewport",
            "scroll-spy:leave-viewport": "interactiveLeaveViewport"
        },
        notificationReceived: function(e) {
            this.notifications.add(e)
        },
        measureScrollbar: function() {
            var e = 0,
                t = $("<div>", {
                    "class": "scrollbar-measure"
                });
            return $("body").append(t), "undefined" != typeof t[0].clientWidth && (e = t.width() - t[0].clientWidth, e = e / $("body").width() * 100), t.remove(), e
        },
        scrollToTop: function(e) {
            e.preventDefault();
            var t = this;
            $("html, body").animate({
                scrollTop: 0
            }, 400, function() {
                t.trigger("app:scrolled")
            })
        },
        maskClicked: function(e) {
            e.preventDefault(), this.trigger("mask:hide")
        },
        showMask: function() {
            $(document).height() > $(window).height() ? (this.$html.addClass("no-scroll").css("padding-right", this.scrollbarWidth + "%"), $(".nav-drop-on,.nav").length && ($(".nav-drop-on,.nav").css("padding-right", this.scrollbarWidth + "%"), $(".nav-drop-on,.nav-logo").css("padding-right", this.scrollbarWidth + "%"))) : (this.$html.addClass("no-scroll").css("padding-right", 0), $(".nav-drop-on,.nav").length && ($(".nav-drop-on,.nav").css("padding-right", 0), $(".nav-drop-on,.nav-logo").css("padding-right", 0))), this.$mask.addClass("enabled"), this.$mask.removeClass("disabled"), this.$mask.addClass("fade-in")
        },
        showDropdown: function() {
            var e = 0,
                t = 80;
            0 != this.scrollbarWidth && (e = this.scrollbarWidth * $("body").width() / 100), $(document).height() > $(window).height() ? (this.$html.addClass("no-scroll").css("padding-right", this.scrollbarWidth + "%"), "#primary-navigation-bar".length && ($("#primary-navigation-bar").css("padding-right", e + "px"), $("#primary-navigation-bar .logo-block").css("padding-right", e + "px")), $(".left-menu-opened #navigation-bar-content").length && (e += t, $(".left-menu-opened #navigation-bar-content").css("padding-right", e + "px"))) : (this.$html.addClass("no-scroll").css("padding-right", 0), $(".left-menu-opened #navigation-bar-content").length && $(".left-menu-opened #navigation-bar-content").css("padding-right", t), $("#primary-navigation-bar").length && ($("#primary-navigation-bar").css("padding-right", 0), $("#primary-navigation-bar .logo-block").css("padding-right", 0)))
        },
        hideDropdown: function() {
            var e = 80;
            this.$html.removeClass("no-scroll").css("padding-right", 0), $(".left-menu-opened #navigation-bar-content").length && $(".left-menu-opened #navigation-bar-content").css("padding-right", e), $("#primary-navigation-bar").length && ($("#primary-navigation-bar").css("padding-right", 0), $("#primary-navigation-bar .logo-block").css("padding-right", 0))
        },
        hideMask: function() {
            var e = this;
            this.$html.removeClass("no-scroll").css("padding-right", 0), $(".nav-drop-on,.nav").length && ($(".nav-drop-on,.nav").css("padding-right", 0), $(".nav-drop-on,.nav-logo").css("padding-right", 0)), this.$mask.addClass("disabled"), this.$mask.removeClass("enabled fade-in"), setTimeout(function() {
                e.$mask.removeClass("disabled")
            }, 400), $("#mask div.overlay").hasClass("overlay-fullscreen") && $("#mask").removeClass("img-slider-fullscreen"), $("#mask iframe.videoIframe").hasClass("video-active") && vc.app.$mask.empty()
        },
        documentKeyUp: function(e) {
            27 === e.which && this.trigger("app:escapeKeyPressed")
        },
        scrolled: function() {
            this.trigger("app:scrolled", this.$window.scrollTop())
        },
        scrolledSticky: function() {
            var e = $(".nav").height(),
                t = $(".car-comparision-tool-header--sticky").height();
            $(".accordion-panel-header-group.sticky").length && $(".accordion-panel-header-group.sticky").css("top", t + e), $(".cc-dropdown.sticky").length ? $(".cc-dropdown.sticky").css("top", t + e) : $(".cc-dropdown").css("top", "0");
            var i = $(".cctool-accordion li"),
                n = $(window),
                s = n.scrollTop(),
                o = $(".car-comparison-tool-header-box-wrapper").height(),
                a = $(".accordion-panel-header-group").outerHeight(),
                r = $("#nav").height(),
                l = s + o + a + r,
                c = (l + n.height(), !1);
            i.each(function() {
                var e = $(this).offset().top,
                    t = e + $(this).height(),
                    i = "a[id='" + this.id + "']",
                    n = $(i).find(".accordion-panel-category");
                l >= e && t > l ? ($(n).addClass("highlighed"), c = !0) : $(n).removeClass("highlighed")
            }), c || $(".accordion-panel-header-group a li:first").addClass("highlighed")
        },
        resized: function() {
            this.determineDevice(), this.currentWidth = $(window).width(), this.trigger("resize")
        },
        determineDevice: function(e) {
            for (var t, i = $(window).width(), n = 0; n < this.devices.length; n++)
                if (t = this.devices[n], i >= t.minWidth) {
                    if (this.currentDevice !== t) {
                        var s = this.currentDevice;
                        this.currentDevice = t, e && e.silent || this.trigger("device:changed", this.currentDevice, s)
                    }
                    break
                }
        },
        isMobile: function() {
            return Modernizr.touch || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Nokia|Mobile|Opera Mini/i.test(navigator.userAgent)
        },
        createComponents: function() {
            _.each(this.components, function(e, t) {
                e && $(t).each(function(t, i) {
                    var n = new e({
                        el: i
                    });
                    n.render()
                })
            }), $("body").hasClass("interactive") && new vc.Interactive
        },
        fetchNotifications: function() {
            ($(".notification-dropdown").length > 0 || $(".notification-bar").length > 0) && vc.settings && vc.settings.marketSegment && (this.notifications.url = vc.settings.marketSegment + "/data/myvolvo/notifications", this.notifications.fetch())
        },
        newWindow: function(e) {
            window.open(e, "_new")
        }
    })
}(), $(document).ready(function() {
        var e = getParameterByName("iframe");
        null != e && 1 == e && $("#volvo").contents().filter(function() {
            return 8 == this.nodeType
        }).each(function(e, t) {
            "UPPER IFRAME COMMENT" == t.nodeValue ? $(t).prevAll("div, nav").hide() : "LOWER IFRAME COMMENT" == t.nodeValue && $(t).nextAll("div, footer").hide()
        })
    }),
    function() {
        "use strict";
        vc.app = new vc.App, FastClick.attach(document.body), _.defer(function() {
            "start" in Backbone.history && !Backbone.History.started && Backbone.history.start({
                pushState: !1
            })
        }), vc.dealerData = new vc.DealerData
    }(), $(document).ready(function() {
        if ($(".pdp-hero-group .pdp-hero:first-child .hero-content").addClass("selected"), $(".pdp-hero-group .pdp-hero:first-child .hero-content-align").addClass("selected"), $(".pdp-hero-group-has-2 .hero-title-box h3").css("display", "block"), $(".pdp-hero-group-has-2 .pdp-hero:first-child .hero-content-pagination-selected").css("display", "block"), $(".pdp-hero-group-has-2 .pdp-hero:nth-child(2) .hero-content-pagination").css("display", "block"), $(".pdp-hero-group-has-3 .hero-title-box h3").css("display", "block"), $(".pdp-hero-group-has-3 .pdp-hero:first-child .hero-content-pagination-selected").css("display", "block"), $(".pdp-hero-group-has-3 .pdp-hero:nth-child(2) .hero-content-pagination").css("display", "block"), $(".pdp-hero-group-has-3 .pdp-hero:nth-child(3) .hero-content-pagination").css("display", "block"), $(".pdp-hero-group").hasClass("pdp-hero-group-has-2") || $(".pdp-hero-group").hasClass("pdp-hero-group-has-3")) {
            var e;
            e = setInterval("swapImages()", 7e3)
        }
        $(".pdp-hero-group .pdp-hero:first-child .hero-content,.pdp-hero-group .pdp-hero:first-child .hero-content-pagination-hover, .pdp-hero-group .pdp-hero:first-child .hero-content-pagination").hover(function() {
            ($(".pdp-hero-group").hasClass("pdp-hero-group-has-2") || $(".pdp-hero-group").hasClass("pdp-hero-group-has-3")) && clearInterval(e), $(".pdp-hero-group .pdp-hero:first-child .hero-content").hasClass("selected") || ($(".pdp-hero-group-has-2 .pdp-hero:first-child .hero-content-pagination").css("display", "none"), $(".pdp-hero-group-has-2 .pdp-hero:first-child .hero-content-pagination-hover").css("display", "block"), $(".pdp-hero-group-has-2 .pdp-hero:first-child .hero-content-pagination-selected").css("display", "none"), $(".pdp-hero-group-has-3 .pdp-hero:first-child .hero-content-pagination").css("display", "none"), $(".pdp-hero-group-has-3 .pdp-hero:first-child .hero-content-pagination-hover").css("display", "block"), $(".pdp-hero-group-has-3 .pdp-hero:first-child .hero-content-pagination-selected").css("display", "none"))
        }, function() {
            $(".pdp-hero-group .pdp-hero:nth-child(2) .hero-content").css("display", "block"), $(".pdp-hero-group-has-2 .pdp-hero:first-child .hero-content").hasClass("selected") || ($(".pdp-hero-group-has-2 .pdp-hero:first-child .hero-content-pagination-hover").css("display", "none"), $(".pdp-hero-group-has-2 .pdp-hero:first-child .hero-content-pagination").css("display", "block")), $(".pdp-hero-group-has-3 .pdp-hero:first-child .hero-content").hasClass("selected") || ($(".pdp-hero-group-has-3 .pdp-hero:first-child .hero-content-pagination-hover").css("display", "none"), $(".pdp-hero-group-has-3 .pdp-hero:first-child .hero-content-pagination").css("display", "block")), ($(".pdp-hero-group").hasClass("pdp-hero-group-has-2") || $(".pdp-hero-group").hasClass("pdp-hero-group-has-3")) && (e = setInterval("swapImages()", 7e3))
        }), $(".pdp-hero-group .pdp-hero:nth-child(2) .hero-content, .pdp-hero-group .pdp-hero:nth-child(2) .hero-content-pagination-hover, .pdp-hero-group .pdp-hero:nth-child(2) .hero-content-pagination").hover(function() {
            ($(".pdp-hero-group").hasClass("pdp-hero-group-has-2") || $(".pdp-hero-group").hasClass("pdp-hero-group-has-3")) && clearInterval(e), $(".pdp-hero-group .pdp-hero:nth-child(2) .hero-content").hasClass("selected") || ($(".pdp-hero-group-has-2 .pdp-hero:nth-child(2) .hero-content-pagination").css("display", "none"), $(".pdp-hero-group-has-2 .pdp-hero:nth-child(2) .hero-content-pagination-hover").css("display", "block"), $(".pdp-hero-group-has-2 .pdp-hero:nth-child(2) .hero-content-pagination-selected").css("display", "none"), $(".pdp-hero-group-has-3 .pdp-hero:nth-child(2) .hero-content-pagination").css("display", "none"), $(".pdp-hero-group-has-3 .pdp-hero:nth-child(2) .hero-content-pagination-hover").css("display", "block"), $(".pdp-hero-group-has-3 .pdp-hero:nth-child(2) .hero-content-pagination-selected").css("display", "none"))
        }, function() {
            ($(".pdp-hero-group").hasClass("pdp-hero-group-has-2") || $(".pdp-hero-group").hasClass("pdp-hero-group-has-3")) && (e = setInterval("swapImages()", 7e3)), $(".pdp-hero-group .pdp-hero:first-child .hero-content").css("display", "block"), $(".pdp-hero-group .pdp-hero:nth-child(3) .hero-content").css("display", "block"), $(".pdp-hero-group-has-2 .pdp-hero:nth-child(2) .hero-content").hasClass("selected") || $(".pdp-hero-group-has-2 .pdp-hero:nth-child(2) .hero-content-pagination").css("display", "block"), $(".pdp-hero-group-has-3 .pdp-hero:nth-child(2) .hero-content").hasClass("selected") || $(".pdp-hero-group-has-3 .pdp-hero:nth-child(2) .hero-content-pagination").css("display", "block"), $(".pdp-hero-group-has-2 .pdp-hero:nth-child(2) .hero-content-pagination-hover").css("display", "none"), $(".pdp-hero-group-has-3 .pdp-hero:nth-child(2) .hero-content-pagination-hover").css("display", "none")
        }), $(".pdp-hero-group .pdp-hero:nth-child(3) .hero-content, .pdp-hero-group .pdp-hero:nth-child(3) .hero-content-pagination-hover, .pdp-hero-group .pdp-hero:nth-child(3) .hero-content-pagination").hover(function() {
            ($(".pdp-hero-group").hasClass("pdp-hero-group-has-2") || $(".pdp-hero-group").hasClass("pdp-hero-group-has-3")) && clearInterval(e), $(".pdp-hero-group .pdp-hero:nth-child(3) .hero-content").hasClass("selected") || ($(".pdp-hero-group-has-3 .pdp-hero:nth-child(3) .hero-content-pagination").css("display", "none"), $(".pdp-hero-group-has-3 .pdp-hero:nth-child(3) .hero-content-pagination-hover").css("display", "block"), $(".pdp-hero-group-has-3 .pdp-hero:nth-child(3) .hero-content-pagination-selected").css("display", "none"))
        }, function() {
            ($(".pdp-hero-group").hasClass("pdp-hero-group-has-2") || $(".pdp-hero-group").hasClass("pdp-hero-group-has-3")) && (e = setInterval("swapImages()", 7e3)), $(".pdp-hero-group .pdp-hero:first-child .hero-content").css("display", "block"), $(".pdp-hero-group .pdp-hero:nth-child(2) .hero-content").css("display", "block"), $(".pdp-hero-group-has-3 .pdp-hero:nth-child(3) .hero-content").hasClass("selected") || $(".pdp-hero-group-has-3 .pdp-hero:nth-child(3) .hero-content-pagination").css("display", "block"), $(".pdp-hero-group-has-3 .pdp-hero:nth-child(3) .hero-content-pagination-hover").css("display", "none")
        }), $(".pdp-hero-group .pdp-hero:first-child .hero-content,.pdp-hero-group .pdp-hero:first-child .hero-content-pagination-hover").click(function() {
            $(".pdp-hero-group .pdp-hero:first-child .hero-content").hasClass("selected") || ($(".pdp-hero-group .pdp-hero:first-child .hero-content").addClass("selected"), $(".pdp-hero-group-has-2 .pdp-hero:nth-child(2) .hero-content-pagination").css("display", "block"), $(".pdp-hero-group-has-2 .pdp-hero:nth-child(2) .hero-content-pagination-hover").css("display", "none"), $(".pdp-hero-group-has-2 .pdp-hero:nth-child(2) .hero-content-pagination-selected").css("display", "none"), $(".pdp-hero-group-has-3 .pdp-hero:nth-child(2) .hero-content-pagination").css("display", "block"), $(".pdp-hero-group-has-3 .pdp-hero:nth-child(2) .hero-content-pagination-hover").css("display", "none"), $(".pdp-hero-group-has-3 .pdp-hero:nth-child(2) .hero-content-pagination-selected").css("display", "none"), $(".pdp-hero-group-has-3 .pdp-hero:nth-child(3) .hero-content-pagination").css("display", "block"), $(".pdp-hero-group-has-3 .pdp-hero:nth-child(3) .hero-content-pagination-hover").css("display", "none"), $(".pdp-hero-group-has-3 .pdp-hero:nth-child(3) .hero-content-pagination-selected").css("display", "none")), $(".pdp-hero-group .pdp-hero:first-child .hero-content-align").hasClass("selected") || $(".pdp-hero-group .pdp-hero:first-child .hero-content-align").addClass("selected"), $(".pdp-hero-group .pdp-hero:nth-child(2) .hero-content-align").removeClass("selected"), $(".pdp-hero-group .pdp-hero:nth-child(3) .hero-content-align").removeClass("selected"), $(".pdp-hero-group .pdp-hero:nth-child(2) .hero-content").removeClass("selected"), $(".pdp-hero-group .pdp-hero:nth-child(3) .hero-content").removeClass("selected"), $(".pdp-hero-group-has-2 .pdp-hero:first-child .hero-content-pagination").css("display", "none"), $(".pdp-hero-group-has-2 .pdp-hero:first-child .hero-content-pagination-hover").css("display", "none"), $(".pdp-hero-group-has-2 .pdp-hero:first-child .hero-content-pagination-selected").css("display", "block"), $(".pdp-hero-group-has-3 .pdp-hero:first-child .hero-content-pagination").css("display", "none"), $(".pdp-hero-group-has-3 .pdp-hero:first-child .hero-content-pagination-hover").css("display", "none"), $(".pdp-hero-group-has-3 .pdp-hero:first-child .hero-content-pagination-selected").css("display", "block")
        }), $(".pdp-hero-group .pdp-hero:nth-child(2) .hero-content,.pdp-hero-group .pdp-hero:nth-child(2) .hero-content-pagination-hover").click(function() {
            $(".pdp-hero-group .pdp-hero:first-child .hero-content").hasClass("selected") && ($(".pdp-hero-group-has-2 .pdp-hero:first-child .hero-content-pagination").css("display", "block"), $(".pdp-hero-group-has-2 .pdp-hero:first-child .hero-content-pagination-hover").css("display", "none"), $(".pdp-hero-group-has-2 .pdp-hero:first-child .hero-content-pagination-selected").css("display", "none"), $(".pdp-hero-group-has-3 .pdp-hero:first-child .hero-content-pagination").css("display", "block"), $(".pdp-hero-group-has-3 .pdp-hero:first-child .hero-content-pagination-hover").css("display", "none"), $(".pdp-hero-group-has-3 .pdp-hero:first-child .hero-content-pagination-selected").css("display", "none")), $(".pdp-hero-group .pdp-hero:nth-child(2) .hero-content").hasClass("selected") || ($(".pdp-hero-group-has-3 .pdp-hero:nth-child(3) .hero-content-pagination").css("display", "block"), $(".pdp-hero-group-has-3 .pdp-hero:nth-child(3) .hero-content-pagination-hover").css("display", "none"), $(".pdp-hero-group-has-3 .pdp-hero:nth-child(3) .hero-content-pagination-selected").css("display", "none")), $(".pdp-hero-group .pdp-hero:first-child .hero-content-align").removeClass("selected"), $(".pdp-hero-group .pdp-hero:nth-child(2) .hero-content-align").addClass("selected"), $(".pdp-hero-group .pdp-hero:nth-child(3) .hero-content-align").removeClass("selected"), $(".pdp-hero-group .pdp-hero:first-child .hero-content").removeClass("selected"), $(".pdp-hero-group .pdp-hero:nth-child(2) .hero-content").addClass("selected"), $(".pdp-hero-group .pdp-hero:nth-child(3) .hero-content").removeClass("selected"), $(".pdp-hero-group-has-2 .pdp-hero:nth-child(2) .hero-content-pagination").css("display", "none"), $(".pdp-hero-group-has-2 .pdp-hero:nth-child(2) .hero-content-pagination-hover").css("display", "none"), $(".pdp-hero-group-has-2 .pdp-hero:nth-child(2) .hero-content-pagination-selected").css("display", "block"), $(".pdp-hero-group-has-3 .pdp-hero:nth-child(2) .hero-content-pagination").css("display", "none"), $(".pdp-hero-group-has-3 .pdp-hero:nth-child(2) .hero-content-pagination-hover").css("display", "none"), $(".pdp-hero-group-has-3 .pdp-hero:nth-child(2) .hero-content-pagination-selected").css("display", "block")
        }), $(".pdp-hero-group .pdp-hero:nth-child(3) .hero-content,.pdp-hero-group .pdp-hero:nth-child(3) .hero-content-pagination-hover").click(function() {
            $(".pdp-hero-group .pdp-hero:first-child .hero-content").hasClass("selected") && ($(".pdp-hero-group-has-3 .pdp-hero:first-child .hero-content-pagination").css("display", "block"), $(".pdp-hero-group-has-3 .pdp-hero:first-child .hero-content-pagination-hover").css("display", "none"), $(".pdp-hero-group-has-3 .pdp-hero:first-child .hero-content-pagination-selected").css("display", "none")), $(".pdp-hero-group .pdp-hero:nth-child(2) .hero-content").hasClass("selected") && ($(".pdp-hero-group-has-3 .pdp-hero:nth-child(2) .hero-content-pagination").css("display", "block"), $(".pdp-hero-group-has-3 .pdp-hero:nth-child(2) .hero-content-pagination-hover").css("display", "none"), $(".pdp-hero-group-has-3 .pdp-hero:nth-child(2) .hero-content-pagination-selected").css("display", "none")), $(".pdp-hero-group .pdp-hero:first-child .hero-content-align").removeClass("selected"), $(".pdp-hero-group .pdp-hero:nth-child(2) .hero-content-align").removeClass("selected"), $(".pdp-hero-group .pdp-hero:nth-child(3) .hero-content-align").addClass("selected"), $(".pdp-hero-group .pdp-hero:first-child .hero-content").removeClass("selected"), $(".pdp-hero-group .pdp-hero:nth-child(3) .hero-content").addClass("selected"), $(".pdp-hero-group .pdp-hero:nth-child(2) .hero-content").removeClass("selected"), $(".pdp-hero-group-has-3 .pdp-hero:nth-child(3) .hero-content-pagination").css("display", "none"), $(".pdp-hero-group-has-3 .pdp-hero:nth-child(3) .hero-content-pagination-hover").css("display", "none"), $(".pdp-hero-group-has-3 .pdp-hero:nth-child(3) .hero-content-pagination-selected").css("display", "block")
        });
        var t = $(window).innerHeight()-200;
        if ($(".pdp-hero.hero.hero-half-height").length > 0 && $(window).width() > 769 && (t /= 2), $(".pdp-hero-group").css("height", t), $(window).resize(function() {
                var e = $(window).innerHeight()-200;
                $(".pdp-hero-group").css("height", e)
            }), $(window).width() < 480 && ($(".pdp-hero-group .pdp-hero .hero-content-align .hero-content-box").removeClass("right-align"), $(".pdp-hero-group .pdp-hero .hero-content-align .hero-content-box").addClass("left-align")), navigator.userAgent.match(/iPad/i) && null != navigator.userAgent.match(/iPad/i) && $(".icon-forward-round").css("display", "none"), !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            var i = $(".pdp-hero,.hero").height(),
                n = $(".hero").height() - 140 + "px",
                s = $(".pdp-hero,.hero").height() - 140 + "px";
            $(".hero-half-height").length > 0 && 300 == i ? $(".pdp-hero .hero-content-align").css("height", s) : ($(".pdp-hero .hero-content-align").css("height", n), $(".pdp-hero-group .pdp-hero .hero-content-align").css("height", "100%"))
        }
    }), $(document).ready(function() {
        function e() {
            $("#New-Main-Navigation").length > 0 && ($(window).width() > 1024 ? (a.css("display", "block"), o.css("display", "none"), l.css("display", "block"), r.css("display", "none"), n() ? (a.css("display", "none"), o.css("display", "block"), l.css("display", "none"), r.css("display", "block"), c.addClass("force-mobile")) : c.hasClass("force-mobile") && c.removeClass("force-mobile")) : (a.css("display", "none"), o.css("display", "block"), l.css("display", "none"), r.css("display", "block")), t($(".pdp-model-wrap"), $(".pdp-model-right-wrap")) ? $(".pdp-model-right-wrap").addClass("collide") : $(".pdp-model-right-wrap").removeClass("collide"))
        }

        function t(e, t) {
            var n = i(e),
                s = i(t);
            return !(n[0] < s[2] || n[2] > s[0] || n[1] < s[3] || n[3] > s[1])
        }

        function i(e) {
            var t = e.offset().left,
                i = e.offset().top,
                n = i + e.outerHeight(),
                s = t + e.outerWidth();
            return [n, s, i, t]
        }

        function n() {
            var e = $(".left-menu-block").last(),
                i = $(".right-menu-block").first(),
                n = $(".logo-block .logo-container");
            return !(!t(e, n) && !t(i, n))
        }

        function s(e) {
            var t = $(this).closest(".primary-nav-wrap"),
                i = $(this).closest(".primary-nav-wrap").find(".left-menu-content"),
                n = $(this).closest(".primary-nav-wrap").find(".nav-arrow-down"),
                s = $(this).closest(".primary-nav-wrap").find(".nav-arrow-up");
            if (e.preventDefault(), d.menutitle.removeClass("nav-active-class"), $(".nav-arrow-up").removeClass("nav-arrow-up").addClass("nav-arrow-down"), $(this).siblings().slideDown("slow"), $(this).parent(t).siblings().find(".left-menu-content").addClass("left-menu-closed").removeClass("left-menu-opened").hide(), i.hasClass("left-menu-opened")) vc.app.trigger("navDropdown:hide"), i.slideUp("slow").removeClass("left-menu-opened").addClass("left-menu-closed"), s.removeClass("nav-arrow-up").addClass("nav-arrow-down"), e.target.hasChildNodes("left-menu-title") ? d.menutitle.removeClass("nav-active-class") : $(this).parent().find(".left-menu-title").removeClass("nav-active-class"), $(this).parent().find(".navigation-bar-content").removeClass("new-main-menu-overflow"), $(this).parent().find("#navigation-bar-content").css("height", "");
            else if (i.hasClass("left-menu-closed")) {
                i.slideDown("slow").addClass("left-menu-opened").removeClass("left-menu-closed"), n.removeClass("nav-arrow-down").addClass("nav-arrow-up"), e.target.hasChildNodes("left-menu-title") ? $(this).addClass("nav-active-class") : $(this).parent().find(".left-menu-title").addClass("nav-active-class");
                var o = $(this).parent().find("#navigation-bar-content").outerHeight(),
                    a = $(this).parent().find(".main-own-about-wrap").height(),
                    r = $(this).parent().find(".select-menu-right-group").height(),
                    l = 0;
                if (l = a > r ? a : r, $(window).height() < o) {
                    $(this).parent().find(".navigation-bar-content").addClass("new-main-menu-overflow");
                    var c = $(this).parent().find(".navigation-bar-content").css("padding-bottom");
                    $(".new-main-menu-overflow").css("height", window.innerHeight - parseInt(c, 10))
                }
                $(".shop-separator").css("height", l + "px"), vc.app.trigger("navDropdown:show")
            }
        }
        var o = $("#Main-Navigation #nav"),
            a = $("#New-Main-Navigation"),
            r = $("#secondary-navigation"),
            l = $("#new-secondary-navigation"),
            c = vc.app.$html;
        $(window).resize(function() {
            e()
        }), $(window).load(function() {
            e()
        });
        var d = {
            menutitle: $(".left-menu-title"),
            closebtn: $(".close-drop-down"),
            searchbtn: $(".nav-search a"),
            arrowclick: $(".nav-arrow-down")
        };
        d.menutitle.on("click", s), d.arrowclick.on("click", s), d.closebtn.on("click", function() {
            var e = $(this).closest(".primary-nav-wrap").find(".left-menu-content"),
                t = $(this).closest(".primary-nav-wrap").find(".left-menu-title"),
                i = $(this).closest(".primary-nav-wrap").find(".nav-arrow-up");
            e.hasClass("left-menu-opened") && (e.slideUp("slow").removeClass("left-menu-opened").addClass("left-menu-closed"), t.removeClass("nav-active-class"), i.removeClass("nav-arrow-up").addClass("nav-arrow-down"), $(this).parent().removeClass("new-main-menu-overflow"), $(this).parent().css("height", ""), $("html").removeClass("new-main-menu-scroll-hidden"))
        }), $(document).on("keydown", function(e) {
            27 == e.keyCode && ($(".left-menu-content").slideUp("slow").removeClass("left-menu-opened").addClass("left-menu-closed"), $(".nav-arrow-up").removeClass("nav-arrow-up").addClass("nav-arrow-down"), $(".left-menu-title").removeClass("nav-active-class"), $(".navigation-bar-content").removeClass("new-main-menu-overflow"), $("#navigation-bar-content").css("height", ""), $("html").removeClass("new-main-menu-scroll-hidden"))
        }), $(document).click(function(e) {
            "nav" == e.target.id || $("#New-Main-Navigation #primary-navigation-bar").find(e.target).length || ($(".left-menu-content").slideUp("slow").removeClass("left-menu-opened").addClass("left-menu-closed"), $(".nav-arrow-up").removeClass("nav-arrow-up").addClass("nav-arrow-down"), $(".left-menu-title").removeClass("nav-active-class"), $(".navigation-bar-content").removeClass("new-main-menu-overflow"), $("#navigation-bar-content").css("height", ""), $("html").removeClass("new-main-menu-scroll-hidden"))
        }), d.searchbtn.on("click", function() {
            $(".left-menu-content").slideUp("slow").removeClass("left-menu-opened").addClass("left-menu-closed"), $(".nav-arrow-up").removeClass("nav-arrow-up").addClass("nav-arrow-down"), $(".left-menu-title").removeClass("nav-active-class"), $(".navigation-bar-content").removeClass("new-main-menu-overflow"), $("#navigation-bar-content").css("height", ""), $("html").removeClass("new-main-menu-scroll-hidden")
        });
        var h = $(this).find(".car-spec");
        h.mouseenter(function() {
            $(this).find(".car-price").hide(), $(this).find(".build-explore").show()
        }).mouseleave(function() {
            $(this).find(".car-price").show(), $(this).find(".build-explore").hide()
        })
    }), $(document).ready(function() {
        function e() {
            var e = $(this).scrollTop();
            console.log(e), Math.abs(n - e) <= s || (e > n && e > o ? (a.removeClass("navbar-fixed-top-nav").addClass("nav-up").animate({
                top: 0,
                height: "0px"
            }, 1), r.addClass("navbar-fixed").removeClass("navbar-fixed-top, nav-bar-absolute").animate({
                top: 0
            }, 1)) : e + $(window).height() < $(document).height() && (a.removeClass("nav-up").addClass("navbar-fixed-top-nav").animate({
                height: o
            }), r.addClass("navbar-fixed-top").removeClass("navbar-fixed").animate({
                top: 50
            })), 0 == e && (a.removeClass("navbar-fixed-top-nav"), r.removeClass("navbar-fixed-top"), r.addClass("nav-bar-absolute")), n = e)
        }
        if (vc.app.$window.width() <= 481) {
            $(".subnav-items .subnav-item-wrapper.subnav-wrap-mbl:last").css("border-bottom", "none"), $(this).find("#subnav").addClass("nav-bar-absolute");
            var t = $(this).find(".subnav-item-mobile");
            t.click(function() {
                t.removeClass("sec-nav-bar-active"), $(this).hasClass("sec-nav-bar-active") ? $(this).removeClass("sec-nav-bar-active") : $(this).addClass("sec-nav-bar-active")
            });
            var i, n = 0,
                s = 5,
                o = $(".force-sticky-nav").outerHeight(),
                a = $(".force-sticky-nav"),
                r = $(".subnav-dark");
            null != document.getElementById("subnav") && ($(window).scroll(function(e) {
                i = !0
            }), setInterval(function() {
                i && (e(), i = !1)
            }, 250))
        }
    }), $(".secnav-arrow.arrow-right").click(function(e) {
        var t = $(e.target);
        t.hasClass("arrow-right") ? ($(this).parent().find(".secnav-arrow").removeClass("arrow-right").addClass("arrow-top"), $(this).parent().parent().parent().find(".fourth-level-right-menu-drop").slideDown()) : ($(this).parent().find(".secnav-arrow").removeClass("arrow-top").addClass("arrow-right"), $(this).parent().parent().parent().find(".fourth-level-right-menu-drop").slideUp())
    }), $(document).on("keydown", function(e) {
        27 == e.keyCode && ($(".fourth-level-right-menu-drop").slideUp(), $(".arrow-top").removeClass("arrow-top").addClass("arrow-right"))
    }), $(document).click(function(e) {
        "fourth-level-navigation" == e.target.id || $("#fourth-level-navigation").find(e.target).length || ($(".fourth-level-right-menu-drop").slideUp(), $(".arrow-top").removeClass("arrow-top").addClass("arrow-right"))
    });