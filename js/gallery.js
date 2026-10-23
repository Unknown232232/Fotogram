const GALLERY = document.getElementById("gallery");
const DIALOG = document.getElementById("photo-dialog");
const STEP_NEXT = 1;
const STEP_PREVIOUS = -1;
let currentIndex = 0;

function renderGallery() {
    for (let i = 0; i < PHOTOS.length; i++) {
        GALLERY.innerHTML += getThumbnailTemplate(PHOTOS[i], i);
    }
}

function renderDialog(focusAction = "") {
    const PHOTO = PHOTOS[currentIndex];
    DIALOG.innerHTML = getDialogTemplate(PHOTO, currentIndex, PHOTOS.length);
    const FOCUS_TARGET = DIALOG.querySelector(`[data-action="${focusAction}"]`);
    if (FOCUS_TARGET) {
        FOCUS_TARGET.focus();
    }
}

function openDialog(index) {
    currentIndex = index;
    renderDialog();
    DIALOG.showModal();
}

function closeDialog() {
    DIALOG.close();
}

function changePhoto(step, action) {
    currentIndex = (currentIndex + step + PHOTOS.length) % PHOTOS.length; // Das % (Modulo) gibt den Rest einer Division zurück und sorgt dafür, dass die Galerie nach dem letzten Foto wieder beim ersten beginnt und vor dem ersten beim letzten.
    renderDialog(action);
}

function showNext() {
    changePhoto(STEP_NEXT, "next");
}

function showPrevious() {
    changePhoto(STEP_PREVIOUS, "previous");
}

function closeOnBackdropClick(event) {
    if (event.target === DIALOG) {
        closeDialog();
    }
}

function handleArrowKeys(event) {
    if (event.key === "ArrowRight") {
        showNext();
    }
    if (event.key === "ArrowLeft") {
        showPrevious();
    }
}
