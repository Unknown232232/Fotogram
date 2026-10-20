const GALLERY = document.getElementById("gallery");
const DIALOG = document.getElementById("photo-dialog");
const STEP_NEXT = 1;
const STEP_PREVIOUS = -1;
let currentIndex = 0;

/**
 * Rendert alle Thumbnails per innerHTML in die Galerie.
 */
function renderGallery() {
  GALLERY.innerHTML = PHOTOS.map(getThumbnailTemplate).join("");
}

/**
 * Rendert die Großansicht des aktuellen Fotos und setzt den Fokus zurück.
 */
function renderDialog(focusAction = "") {
  const PHOTO = PHOTOS[currentIndex];
  DIALOG.innerHTML = getDialogTemplate(PHOTO, currentIndex, PHOTOS.length);
  const FOCUS_TARGET = DIALOG.querySelector(`[data-action="${focusAction}"]`);
  if (FOCUS_TARGET) {
    FOCUS_TARGET.focus();
  }
}

/**
 * Öffnet die Großansicht für das Foto an der übergebenen Position.
 */
function openDialog(index) {
  currentIndex = index;
  renderDialog();
  DIALOG.showModal();
}

/**
 * Schließt die Großansicht.
 */
function closeDialog() {
  DIALOG.close();
}

/**
 * Wechselt um die angegebene Schrittweite zum nächsten oder vorherigen Foto.
 */
function changePhoto(step, action) {
  currentIndex = (currentIndex + step + PHOTOS.length) % PHOTOS.length;
  renderDialog(action);
}

/**
 * Zeigt das nächste Foto an.
 */
function showNext() {
  changePhoto(STEP_NEXT, "next");
}

/**
 * Zeigt das vorherige Foto an.
 */
function showPrevious() {
  changePhoto(STEP_PREVIOUS, "previous");
}

/**
 * Schließt die Großansicht, wenn auf den Hintergrund geklickt wird.
 */
function closeOnBackdropClick(event) {
  if (event.target === DIALOG) {
    closeDialog();
  }
}

/**
 * Blättert mit den Pfeiltasten durch die Großansicht.
 */
function handleArrowKeys(event) {
  if (event.key === "ArrowRight") {
    showNext();
  }
  if (event.key === "ArrowLeft") {
    showPrevious();
  }
}
