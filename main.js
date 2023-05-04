//OPEN CLOSE & TOGGLE APP CONTAINER

function closeApp() {
    app.classList.add('hidden');
    closeBrowserTab();
}

function openApp() {
    app.classList.remove('hidden');
}

function toggleApp() {
    if(browserTab.classList.contains('show')) {
        app.classList.toggle('hidden')    
    }
}

//OPEN AND CLOSE BROWSER TAB

const browserTab = document.getElementById('browser');

function showBrowserTab() {
    browserTab.classList.remove('hidden');
    browserTab.classList.add('show');
}

function closeBrowserTab() {
    if(browserTab.classList.contains('show')) {
        browserTab.classList.remove('show');
        browserTab.classList.add('hidden'); 
    }
}

// DRAG FUNCTION FOR APPS
// Get the element that we want to make draggable
const appContainer = document.querySelector('.app-container');
const appHeader = document.querySelector('.app-header');

// Set initial values for position tracking
let isDragging = false;
let dragStartX;
let dragStartY;
let initialX;
let initialY;

// When the user clicks on the header, start dragging
appHeader.addEventListener('mousedown', function(e) {
  isDragging = true;

  // Record the starting position
  dragStartX = e.clientX;
  dragStartY = e.clientY;

  // Record the initial position of the appContainer
  const computedStyle = window.getComputedStyle(appContainer);
  initialX = parseInt(computedStyle.getPropertyValue('left'));
  initialY = parseInt(computedStyle.getPropertyValue('top'));

  // Prevent text selection during drag
  e.preventDefault();
});

// When the user releases the mouse button, stop dragging
document.addEventListener('mouseup', function(e) {
  isDragging = false;
});

// When the user moves the mouse, update the position of the appContainer if we're currently dragging
document.addEventListener('mousemove', function(e) {
  if (isDragging) {
    // Calculate the new position
    const dragX = e.clientX - dragStartX;
    const dragY = e.clientY - dragStartY;
    const newX = initialX + dragX;
    const newY = initialY + dragY;

    // Set the new position of the appContainer
    appContainer.style.left = newX + 'px';
    appContainer.style.top = newY + 'px';
  }
});