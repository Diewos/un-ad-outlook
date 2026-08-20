//get checkbox element
const checkbox = document.getElementById("toggle_switch");


async function sendToggle(enabled) {
  await browser.storage.local.set({ toggled: enabled });

  const [tab] = await browser.tabs.query({ active: true, currentWindow: true });
  if (tab?.id) {
    try {
      await browser.tabs.sendMessage(tab.id, {
        command: "toggle",
        enabled
      });
    } catch (error) {
      console.warn("Could not reach the active tab", error);
    }
  }
}

browser.storage.local.get("toggled").then(({ toggled = false }) => {
  checkbox.checked = toggled;
});

checkbox.addEventListener("change", () => {
  sendToggle(checkbox.checked);
});








