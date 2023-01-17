function getElement(selection) {
    const element = document.querySelector(selection);
    if (element) {
        return element;
    }
    throw new Error(
        `Please check "${selection}" selector, no such element exists`
    );
}

function Gallery(element) {
    this.container = element;
    this.list = [...element.querySelectorAll(".img")];
    // target function
    this.modal = getElement(".modal");
    this.mainImg = getElement(".main-img");
    this.imageName = getElement(".image-name");
    this.modalImages = getElement(".modal-images");

    this.closeBtn = getElement(".close-btn");
    this.nextBtn = getElement(".next-btn");
    this.prevBtn = getElement(".prev-btn");
    // self ref
    let self = this;
    // bind funtions
    // this.openModal = this.openModal.bind(this);
    this.container.addEventListener(
        "click",
        function(e) {
            // self.openModal();
            if (e.target.classList.contains("img")) {
                this.openModal(e.target, this.list);
            }
        }.bind(this)
    );
}
Gallery.prototype.openModal = function(selectedImage, list) {
    this.setMainImage(selectedImage);
    this.modal.classList.add("open");
};

Gallery.prototype.setMainImage = function(selectedImage) {
    this.mainImg.src = selectedImage.src;
    this.imageName.textContent = selectedImage.title;
};

const nature = new Gallery(getElement(".nature"));
const city = new Gallery(getElement(".city"));