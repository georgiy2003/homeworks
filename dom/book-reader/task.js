const book = document.getElementById('book');

const fontSizes = document.querySelectorAll('.font-size');

fontSizes.forEach(fontSize => {
  fontSize.addEventListener('click', (event) => {
    event.preventDefault();

    document.querySelector('.font-size_active').classList.remove('font-size_active');
    fontSize.classList.add('font-size_active');

    book.classList.remove('book_fs-small', 'book_fs-big');

    const size = fontSize.dataset.size;

    if (size) {
      book.classList.add(`book_fs-${size}`);
    }
  });
});


const textColors = document.querySelectorAll('[data-text-color]');

textColors.forEach(color => {
  color.addEventListener('click', (event) => {
    event.preventDefault();

    document.querySelector('.book__control_color .color_active').classList.remove('color_active');
    color.classList.add('color_active');

    book.classList.remove(
      'book_color-black',
      'book_color-gray',
      'book_color-whitesmoke'
    );

    book.classList.add(`book_color-${color.dataset.textColor}`);
  });
});


const bgColors = document.querySelectorAll('[data-bg-color]');

bgColors.forEach(color => {
  color.addEventListener('click', (event) => {
    event.preventDefault();

    document.querySelector('.book__control_background .color_active').classList.remove('color_active');
    color.classList.add('color_active');

    book.classList.remove(
      'book_bg-black',
      'book_bg-gray',
      'book_bg-white'
    );

    book.classList.add(`book_bg-${color.dataset.bgColor}`);
  });
});