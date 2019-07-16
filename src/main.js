'use strict';

const removeWarning = () => {
  const el = document.querySelector('#warning');
  if (el) {
    el.remove();
  } else {
    setTimeout(removeWarning, 100);
  }
}
removeWarning();
