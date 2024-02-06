/* -------------------------------------------------------------------------- */
/*                                  Constants                                 */
/* -------------------------------------------------------------------------- */

const initialCards = [
  {
    name: "Val Thorens",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/1-photo-by-moritz-feldmann-from-pexels.jpg",
  },
  {
    name: "Restaurant terrace",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/2-photo-by-ceiline-from-pexels.jpg",
  },
  {
    name: "An outdoor cafe",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/3-photo-by-tubanur-dogan-from-pexels.jpg",
  },
  {
    name: "A very long bridge, over the forest and through the trees",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/4-photo-by-maurice-laschet-from-pexels.jpg",
  },
  {
    name: "Tunnel with morning light",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/5-photo-by-van-anh-nguyen-from-pexels.jpg",
  },
  {
    name: "Mountain house",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/6-photo-by-moritz-feldmann-from-pexels.jpg",
  },
];

//profile elements
const profileName = document.querySelector(".profile__name");
const profileDescription = document.querySelector(".profile__description");

//edit-profile modal elements
const editProfileButton = document.querySelector(".profile__edit-button");
const editProfileModal = document.querySelector("#edit-profile-modal");
const editProfileModalCloseButton = editProfileModal.querySelector(
  ".modal__close-button"
);
const editProfileForm = editProfileModal.querySelector(".modal__form");
const editProfileNameInput = document.querySelector("#edit-profile-name-input");
const editProfileDescriptionInput = document.querySelector(
  "#edit-profile-description-input"
);

//card elements
const cardsList = document.querySelector(".cards__list");
const cardTemplate = document
  .querySelector("#card-template")
  .content.querySelector(".card");

/* -------------------------------------------------------------------------- */
/*                                  Functions                                 */
/* -------------------------------------------------------------------------- */

function openModal(modal) {
  modal.classList.add("modal_opened");
}

function closeModal(modal) {
  modal.classList.remove("modal_opened");
}

function handleEditProfileFormSubmit(e) {
  e.preventDefault();
  profileName.textContent = editProfileNameInput.value;
  profileDescription.textContent = editProfileDescriptionInput.value;
  closeModal(editProfileModal);
}

function handleEditProfileButtonClick() {
  editProfileNameInput.value = profileName.textContent;
  editProfileDescriptionInput.value = profileDescription.textContent;
  openModal(editProfileModal);
}

function getCardElement(data) {
  const cardElement = cardTemplate.cloneNode(true);
  const cardImage = cardElement.querySelector(".card__image");
  const cardTitle = cardElement.querySelector(".card__title");

  cardImage.src = data.link;
  cardImage.alt = data.name;
  cardTitle.textContent = data.name;

  return cardElement;
}

/* -------------------------------------------------------------------------- */
/*                               Event Listeners                              */
/* -------------------------------------------------------------------------- */

editProfileButton.addEventListener("click", handleEditProfileButtonClick);

editProfileModalCloseButton.addEventListener("mousedown", () => {
  closeModal(editProfileModal);
});

editProfileForm.addEventListener("submit", handleEditProfileFormSubmit);

/* -------------------------------------------------------------------------- */
/*                               Initialization                               */
/* -------------------------------------------------------------------------- */

initialCards.forEach((data) => {
  const cardElement = getCardElement(data);
  cardsList.append(cardElement);
});
