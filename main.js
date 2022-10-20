var press = function (button) {
    switch(button) {
        case "twitch":
            window.open("https://twitch.tv/zThundy__", "_blank");
            break;
        case 'twitter':
            window.open('https://twitter.com/zThundy__', '_blank');
            break;
        case "github":
            window.open('https://github.com/zThundy', '_blank');
            break;
        case "discord":
            window.open('https://discord.gg/JMkgfG2pK8', '_blank');
            break;
        case "tiktok":
            window.open('https://www.tiktok.com/@zthundy', '_blank');
            break;
        case "youtube":
            window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank');
            break;
        case "camera":
            window.open("https://youtu.be/oY6tCnu-1Do?t=71", "_blank");
            break;
    }
}

const expanded = {};
var expand = function(index) {
    switch(index) {
        case "twitch":
            if (!expanded[index]) expanded[index] = true;
            else expanded[index] = false;

            var elem = document.getElementById("twitch");
            var iframe = document.getElementById("twitch-embed");
            var icon = document.getElementById("twitch-i");
            var text = document.getElementById("twitch-text");

            if (expanded[index]) {
                elem.classList.add("expanded");
                icon.style = "display: none;";
                text.style = "display: none;";
                setTimeout(() => {
                    iframe.style = "display: block;";
                }, 100)
            } else {
                elem.classList.remove("expanded");
                iframe.style = "display: none;";
                icon.style = "display: block;";
                text.style = "display: block;";
            }
            break;
    }
}

var index = 0;
const myDiv = document.getElementById('pfp');
myDiv.setAttribute('draggable', false);
document.addEventListener('mouseover', (e) => {
    if (e.srcElement.id === "pfp") index++;
    if (index === 10) {
        index = 0;
        myDiv.setAttribute('src', 'images/cat.png');
        setTimeout(() => {
            myDiv.setAttribute('src', 'images/pfp.png');
            index = 0;
        }, 2000);
    }
});

const params = new Proxy(new URLSearchParams(window.location.search), { get: (searchParams, prop) => searchParams.get(prop) });
if (params.egg === "barrelroll" || params.egg === "zoomies") {
    document.body.classList.add(params.egg);
}

// let details = navigator.userAgent;
// let regexp = /android|iphone|kindle|ipad/i;
// let isMobileDevice = regexp.test(details);