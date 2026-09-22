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
  initRfqForm();
  initContactForm();
}

/**
 * 1. Homepage RFQ Intake Form
 */
function initRfqForm() {
  const form = document.getElementById('rfq-intake-form');
  if (!form) return;

  const projectName = document.getElementById('rfq-project-name');
  const tonnage = document.getElementById('rfq-tonnage');
  const email = document.getElementById('rfq-email');
  const specCode = document.getElementById('rfq-spec-code');
  const successAlert = document.getElementById('rfq-success-message');
  const submitBtn = document.getElementById('rfq-submit-btn');

  [projectName, tonnage, email, specCode].forEach((field) => {
    if (!field) return;
    field.addEventListener('input', () => {
      setFieldError(field, false);
      if (successAlert) successAlert.classList.remove('visible');
    });
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let isValid = true;

    if (!projectName || !projectName.value.trim()) {
      setFieldError(projectName, true);
      isValid = false;
    } else {
      setFieldError(projectName, false);
    }

    if (!tonnage || !tonnage.value.trim()) {
      setFieldError(tonnage, true);
      isValid = false;
    } else {
      setFieldError(tonnage, false);
    }

    if (!email || !email.value.trim() || !validateEmail(email.value.trim())) {
      setFieldError(email, true);
      isValid = false;
    } else {
      setFieldError(email, false);
    }

    if (!isValid) return;

    if (submitBtn) {
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
      }, 800);
    }
  });
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
