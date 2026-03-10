/**
 * Template Name: __name__ - Admin & Dashboard Template
 * By (Author): __author__
 * Module/App (File Name): Plugins Clipboard
 */

const elements = document.querySelectorAll('[data-clipboard-target]')

if (elements && elements.length > 0) {
    new ClipboardJS(elements)
}
