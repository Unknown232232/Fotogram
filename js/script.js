/**
 * Startet die Seite: rendert die Galerie und registriert die Dialog-Events.
 */
function init() {
  renderGallery();
  DIALOG.addEventListener("click", closeOnBackdropClick);
  DIALOG.addEventListener("keydown", handleArrowKeys);
}

init();
