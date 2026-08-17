function removeAds() {
  const ad = document.querySelector(".z0duZ");
  const flex = document.querySelector(".GssDD");
  if (ad) ad.remove();
  if (flex) flex.remove();
}

const observer = new MutationObserver(removeAds);
observer.observe(document.body, { childList: true, subtree: true });
