'use strict';

const removeWarning = () => {
  const el = document.querySelector('#warning');
  if (el) {
    el.style.display = 'none';
  } else {
    setTimeout(removeWarning, 100);
  }
};

removeWarning();
