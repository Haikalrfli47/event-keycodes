const container = document.querySelector('.title');
const firstChild = container.querySelector('.txt');
window.addEventListener('keydown', function (e) {
  logic(e);
  container.style.backgroundColor = 'inherit';
  container.style.border = 'none';
});

function logic(e) {
  const div1 = eventKey(e.key);
  const div2 = eventKeyCode(e.keyCode);
  const div3 = eventCode(e.code);
  const kunci = this.document.querySelectorAll('.key');
  container.replaceChild(div1, container.firstElementChild);
  const first = container.firstElementChild;
  console.log(container.childElementCount);
  if (container.childElementCount > 3) {
    container.removeChild(kunci[1]);
    container.replaceChild(div2, first.nextElementSibling);
  }
}

function eventKey(key) {
  const small = document.createElement('small');
  small.innerText = 'event.key';
  const div = document.createElement('div');
  const p = document.createElement('p');
  if (key == ' ') {
    p.innerText = 'Space';
  } else {
    p.innerText = key;
  }
  div.appendChild(p);
  div.appendChild(small);
  div.classList.add('key');
  container.appendChild(div);
  return div;
}

function eventKeyCode(key) {
  const small = document.createElement('small');
  small.innerText = 'event.keyCode';
  const div = document.createElement('div');
  const p = document.createElement('p');
  p.innerText = key;
  div.appendChild(p);
  div.appendChild(small);
  div.classList.add('key');
  container.appendChild(div);
  return div;
}

function eventCode(key) {
  const small = document.createElement('small');
  small.innerText = 'event.code';
  const div = document.createElement('div');
  const p = document.createElement('p');
  p.innerText = key;
  div.appendChild(p);
  div.appendChild(small);
  div.classList.add('key');
  container.appendChild(div);
  return div;
}

//====================================
//Script from the author
//================================

// window.addEventListener('keydown', (event) => {
//   container.innerHTML = `
//   <div class="key">
//   ${event.key === ' ' ? 'Space' : event.key}
//   <small>event.key</small>
// </div>
// <div class="key">
//   ${event.keyCode}
//   <small>event.keyCode</small>
// </div>
// <div class="key">
//   ${event.code}
//   <small>event.code</small>
// </div>
//   `;
// });
