/**
 * ✏️ Append to selected memos
 *
 * Appends a string to the memo field on selected transactions
 * 
 * Example: tag transactions on a category you want to consolidate into
 * a more general category before deleting it (e.g. specific trip --> Vacations
 * and tagging the transactions with [france2025] for later reference)
 * 
 * Note: if using for tagging transactions, YNAB search strips characters
 * like '#'; use something like [tag] if you want to be able to search for
 * the string as a memo tag specifically
 *
 */

/**
 * Oneline bookmarklet
 * 
 * Copy this line into the URL field of a bookmark, then click it
 * while on your transactions page with the desired transactions
 * selected, then input the string you want to append to the
 * selected transactions' memos.
 */
javascript: (async function () { const appendStr = prompt("Enter text to append to memos:"); if (!appendStr) return; const delay = ms => new Promise(r => setTimeout(r, ms)); const rows = [...document.querySelectorAll(".ynab-grid-body-row.is-checked")]; if (!rows.length) { alert("No transactions selected!"); return; } const DELAY = 60; for (const row of rows) { row.scrollIntoView({ behavior: "smooth", block: "center" }); await delay(DELAY); const memoCell = row.querySelector(".ynab-grid-cell-memo"); const existingMemo = memoCell?.textContent?.trim() || ""; const newMemo = existingMemo.includes(appendStr) ? existingMemo : existingMemo + " " + appendStr; memoCell.dispatchEvent(new MouseEvent("click", { bubbles: true })); await delay(DELAY); memoCell.dispatchEvent(new MouseEvent("click", { bubbles: true })); await delay(DELAY); const memoInput = document.querySelector( ".ynab-grid-body-row.is-checked .ynab-grid-cell-memo input" ); if (!memoInput) { console.warn("Memo input not found, skipping row."); continue; } memoInput.value = newMemo; memoInput.dispatchEvent(new Event("input", { bubbles: true })); await delay(2 * DELAY); memoInput.dispatchEvent( new KeyboardEvent("keydown", { key: "Enter", code: "Enter", keyCode: 13, which: 13, bubbles: true, cancelable: true }) ); await delay(DELAY); } })();



//Formatted for readability
javascript: (async function () {
  const appendStr = prompt("Enter text to append to memos:");
  if (!appendStr) return;

  const delay = ms => new Promise(r => setTimeout(r, ms));
  const rows = [...document.querySelectorAll(".ynab-grid-body-row.is-checked")];
  if (!rows.length) {
    alert("No transactions selected!");
    return;
  }
  const DELAY = 60;
  for (const row of rows) {
    row.scrollIntoView({ behavior: "smooth", block: "center" });
    await delay(DELAY);

    const memoCell = row.querySelector(".ynab-grid-cell-memo");
    const existingMemo = memoCell?.textContent?.trim() || "";
    const newMemo = existingMemo.includes(appendStr)
      ? existingMemo
      : existingMemo + " " +appendStr;

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

    memoInput.value = newMemo;
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