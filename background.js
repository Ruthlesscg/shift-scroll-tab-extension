chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  chrome.tabs.query({ currentWindow: true, active: true }, (tabs) => {
    const current = tabs[0];
    chrome.tabs.query({ currentWindow: true }, (allTabs) => {
      chrome.tabGroups.query({ windowId: chrome.windows.WINDOW_ID_CURRENT }, (groups) => {
        const collapsedGroupIds = groups
          .filter(g => g.collapsed)
          .map(g => g.id);

        const sorted = allTabs.sort((a, b) => a.index - b.index);

        // Grupsuz veya kapalı olmayan gruptaki sekmeleri dahil et
        const candidates = sorted.filter(t =>
          t.groupId === -1 || !collapsedGroupIds.includes(t.groupId)
        );

        if (candidates.length === 0) {
          sendResponse({ ok: false });
          return;
        }

        const idx = candidates.findIndex(t => t.id === current.id);
        let targetIndex;
        if (msg.direction === "next") {
          targetIndex = (idx + 1) % candidates.length;
        } else {
          targetIndex = (idx - 1 + candidates.length) % candidates.length;
        }

        chrome.tabs.update(candidates[targetIndex].id, { active: true });
        sendResponse({ ok: true });
      });
    });
  });
  return true;
});
