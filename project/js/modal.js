//modal
const modal = document.querySelector(".modal");
const modalBtn = document.querySelector("#btn-get");
const closeBtn = document.querySelector(".modal_close");


const openModal = () => {
    console.log('opened modal');
    modal.style.display = "block";
    document.body.style.overflowY = "hidden";
}

const closeModal = () => {
    modal.style.display = "none";
    document.body.style.overflowY = "";
    console.log('closed modal');
}

modalBtn.addEventListener("click", function () {
    openModal()

})

closeBtn.addEventListener("click", function () {
    closeModal()
})

modal.onclick = (event) => {
    if (event.target === modal) {
        closeModal()
    }
}


const openModalMouseMove = () => {
    window.removeEventListener("mousemove", openModalMouseMove);
    setTimeout(() => openModal(), 2000);
}

window.addEventListener("mousemove", openModalMouseMove);



let modalScrollShow = false

const ifScrollOfEnd = () => {
    if (!modalScrollShow && (window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        openModal()
        modalScrollShow = true
        window.removeEventListener('scroll', ifScrollOfEnd);
    }
}

window.addEventListener('scroll', ifScrollOfEnd);
