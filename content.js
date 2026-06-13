window.addEventListener("wheel", function(e) {
  if (e.shiftKey) {
    e.preventDefault();
    console.log("Shift+scroll yakalandı, yön:", e.deltaY > 0 ? "next" : "prev");
    chrome.runtime.sendMessage({
      direction: e.deltaY > 0 ? "next" : "prev"
    }, function(response) {
      console.log("Background cevabı:", response);
    });
  }
}, { passive: false });
