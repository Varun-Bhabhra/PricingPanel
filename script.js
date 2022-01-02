const downArrow = document.querySelector('#downArrow');
const panels = document.querySelector('#panel_one');

window.onload = () => {
  document.querySelector('#loader-wrapper').style.display = "none";
  document.querySelector('#loader').style.display = "none";
}

downArrow.addEventListener('click', () => {
  panels.scrollIntoView({ behavior: 'smooth' })
})