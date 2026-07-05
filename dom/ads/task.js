const rotators = document.querySelectorAll('.rotator');

rotators.forEach(rotator => {
  const cases = Array.from(rotator.querySelectorAll('.rotator__case'));
  let index = 0;

  function rotate() {
    cases[index].classList.remove('rotator__case_active');

    index = (index + 1) % cases.length;

    const current = cases[index];
    current.classList.add('rotator__case_active');

    current.style.color = current.dataset.color;

    setTimeout(rotate, Number(current.dataset.speed));
  }

  cases[0].style.color = cases[0].dataset.color;

  setTimeout(rotate, Number(cases[0].dataset.speed));
});