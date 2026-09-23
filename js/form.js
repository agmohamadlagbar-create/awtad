/**
 * Form Handling: RFQ Form (Home) and Contact Engineering Form (Contact Us)
 */

function validateEmail(val) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);
}

function setFieldError(field, hasError) {
  if (!field) return;
  const formGroup = field.closest('.form-group');
  if (!formGroup) return;
  if (hasError) {
    formGroup.classList.add('has-error');
  } else {
    formGroup.classList.remove('has-error');
  }
}

export function initForm() {
  initContactForm();
}

/**
 * 2. Contact Page Engagement Form
 */
function initContactForm() {
  const form = document.getElementById('contact-page-form');
  if (!form) return;

  const nameInput = document.getElementById('contact-name');
  const emailInput = document.getElementById('contact-email');
  const subjectSelect = document.getElementById('contact-subject');
  const messageInput = document.getElementById('contact-message');
  const feedback = document.getElementById('contact-form-feedback');
  const submitBtn = form.querySelector('button[type="submit"]');

  [nameInput, emailInput, subjectSelect, messageInput].forEach((field) => {
    if (!field) return;
    field.addEventListener('input', () => {
      setFieldError(field, false);
      if (feedback) feedback.classList.remove('visible');
    });
    field.addEventListener('change', () => {
      setFieldError(field, false);
    });
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let isValid = true;

    if (!nameInput || !nameInput.value.trim()) {
      setFieldError(nameInput, true);
      isValid = false;
    } else {
      setFieldError(nameInput, false);
    }

    if (!emailInput || !emailInput.value.trim() || !validateEmail(emailInput.value.trim())) {
      setFieldError(emailInput, true);
      isValid = false;
    } else {
      setFieldError(emailInput, false);
    }

    if (!subjectSelect || !subjectSelect.value) {
      setFieldError(subjectSelect, true);
      isValid = false;
    } else {
      setFieldError(subjectSelect, false);
    }

    if (!messageInput || !messageInput.value.trim()) {
      setFieldError(messageInput, true);
      isValid = false;
    } else {
      setFieldError(messageInput, false);
    }

    if (!isValid) return;

    if (submitBtn) {
      const originalHtml = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.innerHTML = '<span>[ TRANSMITTING TO DESK... ]</span>';

      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalHtml;
        if (feedback) {
          feedback.classList.add('visible');
        }
        form.reset();
      }, 800);
    }
  });
}
