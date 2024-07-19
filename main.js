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

    const modal = document.getElementById("modal");
    const modalTitle = document.getElementById("modal-title");
    const modalBody = document.getElementById("modal-body");
    const modalClose = document.getElementById("modal-close");

    const modalConent = document.getElementById("modal-content");

    async function openModal(title, body) {
        modal.style.display = "flex";
        modalTitle.innerHTML = title;
        modalBody.innerHTML = body;

        // scale in animation with ease-in effect using scale()
        for (let i = 0; i <= 1.2; i += 0.05) {
            modalConent.style.transform = `scale(${i})`;
            await new Promise(resolve => setTimeout(resolve, 5));
        }

        // scale out animation with ease-out effect using scale()
        for (let i = 1.2; i >= 1; i -= 0.05) {
            modalConent.style.transform = `scale(${i})`;
            await new Promise(resolve => setTimeout(resolve, 5));
        }
    }

    modalClose.addEventListener("click", closeModal);
    async function closeModal() {
        // scale out animation with ease-out effect using scale()
        for (let i = 1; i > 0; i -= 0.05) {
            modalConent.style.transform = `scale(${i})`;
            await new Promise(resolve => setTimeout(resolve, 5));
        }

        modal.style.display = "none";
    }

    openModal("Welcome", "This is a simple modal window created using vanilla JavaScript. Click the close button to close the modal window.");
}