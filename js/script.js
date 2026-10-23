function init() {
    renderGallery();
    DIALOG.addEventListener("click", closeOnBackdropClick);
    DIALOG.addEventListener("keydown", handleArrowKeys);
}

init();
