// Задание 1 - библиотека SimpleLightbox
// Выполняй это задание в файлах 01-gallery.html и 01-gallery.js. Разбей его на несколько подзадач:

// Добавь библиотеку SimpleLightbox как зависимость проекта используя npm (ссылка на CDN из твоей прошлой работы больше не нужна).
// Используй свой JavaScript код из предыдущей домашней работы, но выполни рефакторинг с учетом того, что библиотека была установлена через npm (синтаксис import/export).
// Для того чтобы подключить CSS код библиотеки в проект, необходимо добавить еще один импорт, кроме того который описан в документации.

// Описан в документации
//import SimpleLightbox from 'simplelightbox';
// Дополнительный импорт стилей
//import 'simplelightbox/dist/simple-lightbox.min.css';

// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

// получаем доступ к div где будет храниться коллекция
const galleryContainer = document.querySelector('.gallery');

// создаем переменую где будет храниться вся галерея
const galleryMarkup = createGalleryCardsMarkup(galleryItems);

// добавляем созданную галерею в разметку
galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);

function createGalleryCardsMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
     
        <a class="gallery__item" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>`;
    })
    .join('');
}

// отображение подписей к изображениям из атрибута alt. Пусть подпись будет снизу и появляется через 250 миллисекунд после открытия изображения.

const lightbox = new SimpleLightbox('.gallery a', {
  caption: true,
  captionType: 'attr',
  captionPosition: 'bottom',
  captionDelay: 250,
  captionsData: 'alt',
});

console.log(galleryItems);
