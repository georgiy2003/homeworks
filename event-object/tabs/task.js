const tabs = Array.from(document.querySelectorAll('.tab'));
const tabContents = Array.from(document.querySelectorAll('.tab__content'));

tabs.forEach((tab, index) => {
  tab.addEventListener('click', () => {
    tabs.forEach(item => item.classList.remove('tab_active'));
    tabContents.forEach(item => item.classList.remove('tab__content_active'));

    tab.classList.add('tab_active');
    tabContents[index].classList.add('tab__content_active');
  });
});