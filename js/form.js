/**
 * Form Handling: Client-side Validation & RFQ Feedback
 */

export function initForm() {
  const form = document.getElementById('rfq-intake-form');
  if (!form) return;

  const projectName = document.getElementById('rfq-project-name');
  const tonnage = document.getElementById('rfq-tonnage');
  const email = document.getElementById('rfq-email');
  const specCode = document.getElementById('rfq-spec-code');
  const successAlert = document.getElementById('rfq-success-message');
  const submitBtn = document.getElementById('rfq-submit-btn');

  function validateEmail(val) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);
  }

  function setFieldError(field, hasError) {
    const formGroup = field.closest('.form-group');
    if (!formGroup) return;
    if (hasError) {
      formGroup.classList.add('has-error');
    } else {
      formGroup.classList.remove('has-error');
    }
  }

  // Real-time input error clearance
  [projectName, tonnage, email, specCode].forEach(field => {
    if (!field) return;
    field.addEventListener('input', () => {
      setFieldError(field, false);
      if (successAlert) successAlert.classList.remove('visible');
    });
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let isValid = true;

    // Validate Project Name
    if (!projectName.value.trim()) {
      setFieldError(projectName, true);
      isValid = false;
    } else {
      setFieldError(projectName, false);
    }

    // Validate Tonnage
    if (!tonnage.value.trim()) {
      setFieldError(tonnage, true);
      isValid = false;
    } else {
      setFieldError(tonnage, false);
    }

    // Validate Email
    if (!email.value.trim() || !validateEmail(email.value.trim())) {
      setFieldError(email, true);
      isValid = false;
    } else {
      setFieldError(email, false);
    }

    if (!isValid) return;

    // Simulated submission state
    const originalText = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<span>[ TRANSMITTING SPEC... ]</span>';

    setTimeout(() => {
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalText;
      if (successAlert) {
        successAlert.classList.add('visible');
      }
      form.reset();
    }, 900);
  });
}
