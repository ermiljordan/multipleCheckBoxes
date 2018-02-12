const checkboxes = document.querySelectorAll('.inbox [type="checkbox"');

let lastChecked;
function handleCheck(e) {
// check if they have the shift key down.
// check if they are checking it.
let inBetween = false;
if (e.shiftKey && this.checked) {
  // go ahead and do as we please.
  // loop every single checkbox
  checkboxes.forEach(checkbox => {
    if(checkbox === this || checkbox === lastChecked) {
      inBetween = !inBetween;
    }
    if (inBetween) {
      checkbox.checked = true;
    }
  })
}
  lastChecked = this;
}


checkboxes.forEach(checkboxes => checkboxes.addEventListener('click', handleCheck));

