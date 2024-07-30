const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

window.onload = async function () {
    while (!loaded) {
        await sleep(1000);
    }

    console.log("Loaded");

    // get all elements with class "sidebar-click" with jquery
    $(".sidebar-click").click(function (e) {
        try {
            // get data from dataset parent
            const data = e.target.parentElement.dataset;
            // scroll into view using data.id
            const element = document.getElementById(data.id);
            element.scrollIntoView({ behavior: "smooth", block: "start" });
        } catch (e) {
            console.error("Element not found");
        }
    });

    $(".pbtn").click(function (e) {
        try {
            const data = e.target.dataset;
            if (data && data.url) {
                window.open(data.url, "_blank");
            } else {
                console.warn("Project not found");
            }
        } catch (e) {
            console.error("Element not found");
        }
    });

    $(".contact").click(function (e) {
        try {
            let data = e.target.dataset;
            if (!data.url) data = e.target.parentElement.dataset;

            console.log(data);
            console.log(typeof data.blank);

            if (data && data.url) {
                const isB = data.blank === "true" ? "_blank" : null;
                console.log(isB);
                window.open(data.url, isB);
            }
        } catch (e) {
            console.error("Element not found");
        }
    });

    let grandpa = false
    $(".sidebar-button").click(function (e) {
        try {
            const data = e.target.dataset;
            if (data && data.type) {
                switch (data.type) {
                    case "modal":
                        openModal("Test modal", "I was bored so I made a modal system, it's useless but it works.");
                        break;
                    case "grandpa":
                        if (grandpa) {
                            // change font-size of .content css class
                            $(".content").css("font-size", "20px");
                            // change text of button
                            e.target.innerHTML = "Grandpa Mode: <span style='color: red;'>Off</span>";
                        } else {
                            // change font-size of .content css class
                            $(".content").css("font-size", "30px");
                            // change text of button
                            e.target.innerHTML = "Grandpa Mode: <span style='color: green;'>On</span>";
                        }
                        grandpa = !grandpa;
                        break;
                    default:
                        console.warn("Type not found");
                        break;
                }
            }
        } catch (e) {
            console.error("Element not found");
        }
    });
}