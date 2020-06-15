// Clipboard code from https://stackoverflow.com/a/60349158/5374560
function copy(text) {
  const textarea = document.createElement("textarea");
  textarea.style.cssText =
    "opacity:0; position:fixed; width:1px; height:1px; top:0; left:0;";
  textarea.value = text;
  document.body.appendChild(textarea);
  textarea.focus();
  textarea.select();
  document.execCommand("copy");
  textarea.remove();
}

function handleContextMenuClick(info, tab) {
  // console.log(info, tab);
  const url = new URL(info.pageUrl);
  url.hash = `#:~:text=${info.selectionText}`;
  copy(url.href);
}

chrome.contextMenus.create({
  title: "Copy link to text",
  contexts: ["selection"],
  onclick: handleContextMenuClick
});
