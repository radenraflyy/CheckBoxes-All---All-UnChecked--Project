const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');
 const all = document.querySelector('#all')
let lastChecked = null;

  function handleCheck(e) {
    let inBetween = false;

    if (this.checked) {
      checkboxes.forEach(checkbox => {
        if (checkbox === this) {
          inBetween = !inBetween;
        }

        if (inBetween) {
          checkbox.checked = true;
        }
      });
    }

    if (!this.checked) {
      checkboxes.forEach(checkbox => {
        if (checkbox === this) {
          inBetween = !inBetween;
        }

        if (inBetween) {
          checkbox.checked = false;
        }
      });
    }

    lastChecked = this;
  }

  if (all) {
    all.addEventListener('click', handleCheck);
  }
// checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));
