let observer;
// create an observer if it doent exist and removes the ads 
function setEnabled(enabled) {
  if (enabled && !observer) {
    removeAds();
    observer = new MutationObserver(removeAds);
    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
  } else if (!enabled && observer) {
    observer.disconnect();
    observer = undefined;
  }
}

// reads the storage to know if the extension is enabled or not, if not value is set to false by default
browser.storage.local.get("toggled").then(({ toggled = false }) => {
  setEnabled(toggled);
});

// listens to when the popup switch is enabled and  calls set enabled

browser.runtime.onMessage.addListener((message) => {
  if (message.command === "toggle") {
    setEnabled(message.enabled);
  }
});

// Selects the classes of the elements responsible of the ad and removes them
function removeAds() {
  const ad = document.querySelector(".z0duZ");
  const flex = document.querySelector(".GssDD");
  if (ad) ad.remove();
  if (flex) flex.remove();
}



