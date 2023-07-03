import Header from "./Header/Header.jsx";
import Main from "./Main/Main.jsx";
import Footer from "./Footer/Footer.jsx";
import PopupWithForm from "./PopupWithForm/PopupWithForm.jsx";
import PopupImage from "./PopupImage/PopupImage.jsx";
import { useState } from "react";

function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isImagePopup, setImagePopup] = useState(false)
  const [selectedCard, setSelectedCard] = useState({})

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false)
    setIsAddPlacePopupOpen(false)
    setIsEditAvatarPopupOpen(false)
    setImagePopup(false)
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true)
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true)
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true)
  }

  //function handleDelete() {
  //}

  function handleCardClick(card) {
    setSelectedCard(card)
    setImagePopup(true)
  }

  return (
  <>
    <Header />

    <Main
      onEditProfile = {handleEditProfileClick}
      onAddPlace = {handleAddPlaceClick}
      onEditAvatar = {handleEditAvatarClick}
      onCardClick = {handleCardClick}
    />

    <Footer />

    <PopupWithForm
      name='edit-profile'
      title='Редактировать профиль'
      titleButton='Сохранить'
      isOpen = {isEditProfilePopupOpen}
      onClose = {closeAllPopups}
    > 
      <label className="popup__form-container">
        <input
          className="popup__input popup__input_type_name"
          placeholder="Введите имя"
          id="username"
          name="username"
          type="text"
          minLength={2}
          maxLength={40}
          required=""
        />
        <span className="popup__input-error" id="username-error" />
      </label>
      <label className="popup__form-container">
        <input
          className="popup__input popup__input_type_description"
          placeholder="Введите описание"
          id="description"
          name="description"
          type="text"
          minLength={2}
          maxLength={200}
          required=""
        />
        <span className="popup__input-error" id="description-error" />
      </label>
    </PopupWithForm>

    <PopupWithForm
      name='add-place'
      title='Новое место'
      titleButton='Создать'
      isOpen = {isAddPlacePopupOpen}
      onClose = {closeAllPopups}
    >
      <label className="popup__form-container">
        <input
          className="popup__input popup__input_type_title"
          placeholder="Название"
          id="title"
          name="title"
          type="text"
          minLength={2}
          maxLength={30}
          required=""
        />
        <span className="popup__input-error" id="title-error" />
      </label>
      <label className="popup__form-container">
        <input
          className="popup__input popup__input_type_image-link"
          placeholder="Ссылка на картинку"
          id="link"
          name="link"
          type="url"
          required=""
        />
          <span className="popup__input-error" id="link-error" />
      </label>
    </PopupWithForm>

    <PopupWithForm
      name='change-avatar'
      title='Обновить аватар'
      titleButton='Сохранить'
      isOpen = {isEditAvatarPopupOpen}
      onClose = {closeAllPopups}
    >
      <label className="popup__form-container">
        <input
          className="popup__input popup__input_type_avatar"
          placeholder="Ссылка на картинку"
          id="avatar"
          name="avatar"
          type="url"
          required=""
        />
        <span className="popup__input-error" id="avatar-error" />
      </label>
    </PopupWithForm>

    <PopupWithForm
      name='delete-card'
      title='Вы уверены?'
      titleButton='Да'
    />
    
    <PopupImage
      card={selectedCard}
      isOpen={isImagePopup}
      onClose={closeAllPopups}
    />

  </>
  );
}

export default App;