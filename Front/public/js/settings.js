


// Змінення для зʼявляючого вікна з повідомленням "Підключіться до API, щоб продовжити"

// Get the language button and modal
const languageButton = document.getElementById('change-language-button');
const languageModal = document.getElementById('language-modal');

// Open the language modal
languageButton.addEventListener('click', () => {
  languageModal.style.display = 'block';
});

// Close the language modal
const modalCloseButton = languageModal.querySelector('.modal-close');
modalCloseButton.addEventListener('click', () => {
  languageModal.style.display = 'none';
});

// Get the other buttons and API modal
const DatetimeButton = document.getElementById('change-datetime-button');
const signInOutButton = document.getElementById('sign-in-out-button');
const manageSubscriptionsButton = document.getElementById('manage-subscriptions-button');
const accountSettingsButton = document.getElementById('account-settings-button');
const deleteAccountButton = document.getElementById('delete-account-button');
const apiModal = document.getElementById('api-modal');

// Open the API modal for other buttons
DatetimeButton.addEventListener('click', () => {
    openApiModal();
  });


signInOutButton.addEventListener('click', () => {
  openApiModal();
});

manageSubscriptionsButton.addEventListener('click', () => {
  openApiModal();
});

accountSettingsButton.addEventListener('click', () => {
  openApiModal();
});

deleteAccountButton.addEventListener('click', () => {
  openApiModal();
});

// Open the API modal
function openApiModal() {
  apiModal.style.display = 'block';
}

// Close the API modal
const apiModalCloseButton = apiModal.querySelector('.modal-close');
apiModalCloseButton.addEventListener('click', () => {
  apiModal.style.display = 'none';
});
