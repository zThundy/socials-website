window.onload = function () {
    const elements = document.getElementsByClassName("sidebar-click");
    for (let i = 0; i < elements.length; i++) {
        elements[i].addEventListener("click", function (e) {
            try {
                // get data from dataset parent
                const data = e.target.parentElement.dataset;
                // scroll into view using data.id
                const element = document.getElementById(data.id);
                element.scrollIntoView({ behavior: "smooth", block: "start" });
            } catch (e) {
                console.warn("Element not found");
            }
        });
    }
}