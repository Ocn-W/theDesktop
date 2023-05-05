//OPEN CLOSE & TOGGLE BROWSER CONTAINER/TABS
const browserApp = document.querySelector('.browser-container');
const browserHeader = document.querySelector('.browser-header');
const browserTab = document.getElementById('browser');

const paintApp = document.querySelector('.paint-container');
const paintHeader = document.querySelector('.paint-header');
const paintTab = document.getElementById('paint');

const messengerApp = document.querySelector('.msngr-container');
const messengerHeader = document.querySelector('.msngr-header');
const messengerTab = document.getElementById('messenger');

function openBrowser() {
  browserApp.classList.remove('hidden');
  browserApp.style.zIndex = 1;
  paintApp.style.zIndex = 0;
  messengerApp.style.zIndex = 0;
}

function showBrowserTab() {
  browserTab.classList.remove('hidden');
  browserTab.classList.add('show');
}

function closeBrowser() {
  browserApp.classList.add('hidden');
  closeBrowserTab();
}

function closeBrowserTab() {
  if (browserTab.classList.contains('show')) {
    browserTab.classList.remove('show');
    browserTab.classList.add('hidden');
  }
}

function toggleBrowser() {
  if (browserTab.classList.contains('show')) {
    browserApp.classList.toggle('hidden');
    if(paintApp.style.zIndex !== 0 || messengerApp.style.zIndex !== 0) {
      paintApp.style.zIndex = 0;
      messengerApp.style.zIndex = 0;
      browserApp.style.zIndex = 1;
    }
  }
}

// OPEN  CLOSE & TOGGLE PAINT APP CONTAINER/TAB

function openPaint() {
  paintApp.classList.remove('hidden');
  paintApp.style.zIndex = 1;
  browserApp.style.zIndex = 0;
  messengerApp.style.zIndex = 0;
}

function showPaintTab() {
  paintTab.classList.remove('hidden');
  paintTab.classList.add('show');
}

function closePaint() {
  paintApp.classList.add('hidden');
  closePaintTab();
}

function closePaintTab() {
  if (paintTab.classList.contains('show')) {
    paintTab.classList.remove('show');
    paintTab.classList.add('hidden');
  }
}

function togglePaint() {
  if (paintTab.classList.contains('show')) {
    paintApp.classList.toggle('hidden');
    if(browserApp.style.zIndex !== 0 || messengerApp.style.zIndex !== 0) {
      browserApp.style.zIndex = 0;
      messengerApp.style.zIndex = 0;
      paintApp.style.zIndex = 1;
    }
  }
}

// OPEN  CLOSE & TOGGLE MESSENGER APP CONTAINER/TAB

function openMessenger() {
  messengerApp.classList.remove('hidden');
  messengerApp.style.zIndex = 1;
  browserApp.style.zIndex = 0;
  paintApp.style.zIndex = 0;
}

function showMsgTab() {
  messengerTab.classList.remove('hidden');
  messengerTab.classList.add('show');
}

function closeMessenger() {
  messengerApp.classList.add('hidden');
  closeMsgTab();
}

function closeMsgTab() {
  if (messengerTab.classList.contains('show')) {
    messengerTab.classList.remove('show');
    messengerTab.classList.add('hidden');
  }
}

function toggleMessenger() {
  if (messengerTab.classList.contains('show')) {
    messengerApp.classList.toggle('hidden');
    if(browserApp.style.zIndex !== 0 || paintApp.style.zIndex !== 0) {
      messengerApp.style.zIndex = 1;
      browserApp.style.zIndex = 0;
      paintApp.style.zIndex = 0;
    }
  }
}

// DRAG FUNCTION FOR BROWSER

// Set initial values for position tracking
let webDragging = false;
let dragStartX;
let dragStartY;
let initialX;
let initialY;

// When the user clicks or taps on the header, start dragging
browserHeader.addEventListener('mousedown', startBrowserDragging);
browserHeader.addEventListener('touchstart', startBrowserDragging);

function startBrowserDragging(e) {
  // Use e.touches if it's a touch event
  const touch = e.touches ? e.touches[0] : e;

  webDragging = true;
  browserApp.style.zIndex = 1;
  paintApp.style.zIndex = 0;
  messengerApp.style.zIndex = 0;
  // Record the starting position
  dragStartX = touch.clientX;
  dragStartY = touch.clientY;

  // Record the initial position of the appContainer
  const computedStyle = window.getComputedStyle(browserApp);
  initialX = parseInt(computedStyle.getPropertyValue('left'));
  initialY = parseInt(computedStyle.getPropertyValue('top'));

  // Prevent text selection during drag
  e.preventDefault();
}

// When the user releases the mouse button or lifts their finger, stop dragging
document.addEventListener('mouseup', stopBrowserDragging);
document.addEventListener('touchend', stopBrowserDragging);

function stopBrowserDragging(e) {
  webDragging = false;
}

//DRAG FUNCTION FOR PAINT | USES SAME INITIAL POS TRACKING VARIABLES
let paintDragging = false;

// When the user clicks or taps on the header, start dragging
paintHeader.addEventListener('mousedown', startPaintDragging);
paintHeader.addEventListener('touchstart', startPaintDragging);

function startPaintDragging(e) {
  // Use e.touches if it's a touch event
  const touch = e.touches ? e.touches[0] : e;

  paintDragging = true;
  paintApp.style.zIndex = 1;
  browserApp.style.zIndex = 0;
  messengerApp.style.zIndex = 0;
  // Record the starting position
  dragStartX = touch.clientX;
  dragStartY = touch.clientY;

  // Record the initial position of the appContainer
  const computedStyle = window.getComputedStyle(paintApp);
  initialX = parseInt(computedStyle.getPropertyValue('left'));
  initialY = parseInt(computedStyle.getPropertyValue('top'));

  // Prevent text selection during drag
  e.preventDefault();
}

// When the user releases the mouse button or lifts their finger, stop dragging
document.addEventListener('mouseup', stopPaintDragging);
document.addEventListener('touchend', stopPaintDragging);

function stopPaintDragging(e) {
  paintDragging = false;
}



//DRAG FUNCTION FOR MESSENGER | USES SAME INITIAL POS TRACKING VARIABLES
let messengerDragging = false;

// When the user clicks or taps on the header, start dragging
messengerHeader.addEventListener('mousedown', startMsgDragging);
messengerHeader.addEventListener('touchstart', startMsgDragging);

function startMsgDragging(e) {
  // Use e.touches if it's a touch event
  const touch = e.touches ? e.touches[0] : e;

  messengerDragging = true;
  messengerApp.style.zIndex = 1;
  browserApp.style.zIndex = 0;
  paintApp.style.zIndex = 0;
  // Record the starting position
  dragStartX = touch.clientX;
  dragStartY = touch.clientY;

  // Record the initial position of the appContainer
  const computedStyle = window.getComputedStyle(messengerApp);
  initialX = parseInt(computedStyle.getPropertyValue('left'));
  initialY = parseInt(computedStyle.getPropertyValue('top'));

  // Prevent text selection during drag
  e.preventDefault();
}

// When the user releases the mouse button or lifts their finger, stop dragging
document.addEventListener('mouseup', stopMsgDragging);
document.addEventListener('touchend', stopMsgDragging);

function stopMsgDragging(e) {
  messengerDragging = false;
}

// When the user moves their mouse or finger, update the position of the appContainer if we're currently dragging
document.addEventListener('mousemove', drag);
document.addEventListener('touchmove', drag);

function drag(e) {
  if (webDragging) {
    // Use e.touches if it's a touch event
    const touch = e.touches ? e.touches[0] : e;

    // Calculate the new position
    const dragX = touch.clientX - dragStartX;
    const dragY = touch.clientY - dragStartY;
    const newX = initialX + dragX;
    const newY = initialY + dragY;

    // Set the new position of the appContainer
    browserApp.style.left = newX + 'px';
    browserApp.style.top = newY + 'px';
  }
  if (paintDragging) {
    // Use e.touches if it's a touch event
    const touch = e.touches ? e.touches[0] : e;

    // Calculate the new position
    const dragX = touch.clientX - dragStartX;
    const dragY = touch.clientY - dragStartY;
    const newX = initialX + dragX;
    const newY = initialY + dragY;

    // Set the new position of the appContainer
    paintApp.style.left = newX + 'px';
    paintApp.style.top = newY + 'px';
  }
  if (messengerDragging) {
    // Use e.touches if it's a touch event
    const touch = e.touches ? e.touches[0] : e;

    // Calculate the new position
    const dragX = touch.clientX - dragStartX;
    const dragY = touch.clientY - dragStartY;
    const newX = initialX + dragX;
    const newY = initialY + dragY;

    // Set the new position of the appContainer
    messengerApp.style.left = newX + 'px';
    messengerApp.style.top = newY + 'px';
  }
}