/*
 * Sphinx javascript -- for bizstyle theme.
 *
 * This theme was created by referring to 'sphinxdoc'
 */
const initialiseBizStyle = () => {
    if (navigator.userAgent.indexOf("iPhone") > 0 || navigator.userAgent.indexOf("Android") > 0) {
        document.querySelector("li.nav-item-0 a").innerText = "Top"
    }
    const truncator = item => {if (item.textContent.length > 20) {
        item.title = item.innerText
        item.innerText = item.innerText.substr(0, 17) + "..."
      }
    }
    document.querySelectorAll("div.related:first ul li:not(.right) a").slice(1).forEach(truncator);
    document.querySelectorAll("div.related:last ul li:not(.right) a").slice(1).forEach(truncator);
}

window.addEventListener("resize",
  () => (document.querySelector("li.nav-item-0 a").innerText = (window.innerWidth <= 776) ? "Top" : "WRF-CTSM  documentation")
)

if (document.readyState !== "loading") initialiseBizStyle()
else document.addEventListener("DOMContentLoaded", initialiseBizStyle)