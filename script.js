function autoFullScreen() {
  let iFrame = selectTheIFrame();
  
  let button = iFrame.contentWindow.document.querySelector(".vjs-fullscreen-control.vjs-control.vjs-button");
  button.click();
  // This works, but it won't let me do anything to the page because it must be a user action.
  // look into how to get the chrome extension to throw trusted events based on a trigger value.

}

window.onload = function() {
  autoFullScreen();
};

function selectTheIFrame() {
  let x = document.getElementsByTagName("iframe");
  for (let e of x) {
    if (e.id === "player") return e;
  }
  return null;
}
