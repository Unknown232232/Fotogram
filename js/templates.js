/**
 * Erstellt das HTML für ein Thumbnail in der Galerie.
 */
function getThumbnailTemplate(photo, index) {
  return `
    <li class="gallery_item">
      <button class="gallery_button" type="button" onclick="openDialog(${index})" aria-label="Open photo ${photo.title}">
        <img class="gallery_image" src="${IMAGE_PATH}${photo.file}" alt="${photo.alt}" loading="lazy">
      </button>
    </li>
  `;
}

/**
 * Erstellt das HTML für die Großansicht eines Fotos.
 */
function getDialogTemplate(photo, index, total) {
  return `
    <div class="dialog_content">
      ${getDialogHeaderTemplate(photo.title)}
      <img class="dialog_image" src="${IMAGE_PATH}${photo.file}" alt="${photo.alt}">
      ${getDialogControlsTemplate(index, total)}
    </div>
  `;
}

/**
 * Erstellt den Kopfbereich der Großansicht mit Titel und Schließen-Button.
 */
function getDialogHeaderTemplate(title) {
  return `
    <div class="dialog_header">
      <h2 class="dialog_title" id="dialog-title">${title}</h2>
      <button class="dialog_close_button" type="button" data-action="close" onclick="closeDialog()" aria-label="Close photo view">
        <img class="dialog_close_icon" src="assets/icons/close.svg" alt="">
      </button>
    </div>
  `;
}

/**
 * Erstellt die Steuerung mit Zurück-Button, Zähler und Weiter-Button.
 */
function getDialogControlsTemplate(index, total) {
  return `
    <div class="dialog_controls">
      <button class="dialog_nav_button" type="button" data-action="previous" onclick="showPrevious()" aria-label="Previous photo">
        <img class="dialog_nav_icon" src="assets/icons/arrow-left.svg" alt="">
      </button>
      <p class="dialog_counter" aria-live="polite">${index + 1}/${total}</p>
      <button class="dialog_nav_button" type="button" data-action="next" onclick="showNext()" aria-label="Next photo">
        <img class="dialog_nav_icon" src="assets/icons/arrow-right.svg" alt="">
      </button>
    </div>
  `;
}
