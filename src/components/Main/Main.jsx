import api from "../../utils/api.js";
import { useEffect, useState } from "react";
import Card from "../Card/Card.jsx";

export default function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick }) {
  const [userName, setUserName] = useState('')
  const [userDescription, setUserDescription] = useState('')
  const [userAvatar, setUserAvatar] = useState('')
  const [cards, setCards] = useState([])

  useEffect(() => {
    Promise.all([api.getInfo(), api.getCards()])
    .then(([dataUser, dataCards]) => {
        setUserName(dataUser.name)
        setUserDescription(dataUser.about)
        setUserAvatar(dataUser.avatar)
        dataCards.forEach(data => data.myId = dataUser._id)
        setCards(dataCards)
    })
  }, []);

  return (
    <main>
      <section className="profile">
        <div className="profile__container">
          <button className="profile__avatar-change" type="button" onClick={onEditAvatar}>
            <img className="profile__avatar" src={userAvatar} alt="Аватар пользователя" />
          </button>
          <div className="profile__info">
            <div className="profile__box-title">
              <h1 className="profile__name">{userName}</h1>
              <button
                className="profile__edit-button"
                type="button"
                aria-label="Изменить данные профиля"
                onClick={onEditProfile}
              />
            </div>
            <p className="profile__description">{userDescription}</p>
          </div>
        </div>
        <button
          className="profile__add-button"
          type="button"
          aria-label="Добавить карточку с фотографией"
          onClick={onAddPlace}
        />
      </section>
      <section className="elements">
        <ul className="elements__list">
            {cards.map(data => {
                return (
                  <Card card={data} key={data._id} onCardClick={onCardClick} />
                )
            })}
        </ul>
      </section>
    </main>
    )
};