const menu = document.getElementById('nav');
const toggle = document.getElementById('toggle');
let isMenuOpen = false;

window.onresize = reportWindowSize;

toggle.addEventListener('click', (e) => {
  if (isMenuOpen) {
    closeMenu()
  } else {
    openMenu()
  }
});

function reportWindowSize() {
  const width = window.innerWidth;
  console.log(width);
  if (width > 600) {
    openMenu()
  } else if (width < 600) {
    closeMenu()
  }
}

function closeMenu() {
  toggle.style.transform = 'translateY(0px)'
  menu.style.opacity = '0';
  isMenuOpen = false;
  menu.style.display = 'none';
}

function openMenu() {
  toggle.style.transform = 'translateY(20px)'
  menu.style.display = 'flex';
  menu.clientHeight;
  menu.style.opacity = '1';
  isMenuOpen = true;
}