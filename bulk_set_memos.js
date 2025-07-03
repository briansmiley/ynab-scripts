/**
 * ✏️ Bulk set memos
 *
 * Sets the memo field of all selected transactions to the same input string,
 * overwriting any existing memos
 *
 */

/**
 * Oneline bookmarklet
 *
 * Copy this line into the URL field of a bookmark, then click it
 * while on your transactions page with the desired transactions
 * selected, then input the string you want use for all the selected
 * transactions' memos. 
 * 
 * ‼️‼️THIS WILL OVERWRITE ANY EXISTING MEMOS ON THE SELECTED TRANSACTIONS‼️‼️
 * 
 */
javascript: (async function () { const delay = ms => new Promise(r => setTimeout(r, ms)); const rows = [...document.querySelectorAll(".ynab-grid-body-row.is-checked")]; if (rows.length < 1) { alert("No transactions selected!"); return; } const memoStr = prompt( `Enter text to set for memo for ${rows.length} selected transactions:` ); if (!memoStr) return; if (!rows.length) { alert("No transactions selected!"); return; } const DELAY = 60; for (const row of rows) { row.scrollIntoView({ behavior: "smooth", block: "center" }); await delay(DELAY); const memoCell = row.querySelector(".ynab-grid-cell-memo"); memoCell.dispatchEvent(new MouseEvent("click", { bubbles: true })); await delay(DELAY); memoCell.dispatchEvent(new MouseEvent("click", { bubbles: true })); await delay(DELAY); const memoInput = document.querySelector( ".ynab-grid-body-row.is-checked .ynab-grid-cell-memo input" ); if (!memoInput) { console.warn("Memo input not found, skipping row."); continue; } memoInput.value = memoStr; memoInput.dispatchEvent(new Event("input", { bubbles: true })); await delay(2 * DELAY); memoInput.dispatchEvent( new KeyboardEvent("keydown", { key: "Enter", code: "Enter", keyCode: 13, which: 13, bubbles: true, cancelable: true }) ); await delay(DELAY); } })();

//Formatted for readability
javascript: (async function () {
  const delay = ms => new Promise(r => setTimeout(r, ms));
  const rows = [...document.querySelectorAll(".ynab-grid-body-row.is-checked")];
  if (rows.length < 1) {
    alert("No transactions selected!");
    return;
  }
  const memoStr = prompt(
    `Enter text to set for memo for ${rows.length} selected transactions:`
  );
  if (!memoStr) return;
  if (!rows.length) {
    alert("No transactions selected!");
    return;
  }
  const DELAY = 60;
  for (const row of rows) {
    row.scrollIntoView({ behavior: "smooth", block: "center" });
    await delay(DELAY);

    const memoCell = row.querySelector(".ynab-grid-cell-memo");

    memoCell.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    await delay(DELAY);
    memoCell.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    await delay(DELAY);

    const memoInput = document.querySelector(
      ".ynab-grid-body-row.is-checked .ynab-grid-cell-memo input"
    );
    if (!memoInput) {
      console.warn("Memo input not found, skipping row.");
      continue;
    }

    memoInput.value = memoStr;
    memoInput.dispatchEvent(new Event("input", { bubbles: true }));
    await delay(2 * DELAY);

    memoInput.dispatchEvent(
      new KeyboardEvent("keydown", {
        key: "Enter",
        code: "Enter",
        keyCode: 13,
        which: 13,
        bubbles: true,
        cancelable: true
      })
    );

    await delay(DELAY);
  }
})();
