export default function Card({ card, onCardClick }) {
  return (
    <li className="element">
      <img className="element__img" src={card.link} alt={card.name} onClick={() => onCardClick({link: card.link, name: card.name})} />
      <div className="element__info">
        <h2 className="element__name">{card.name}</h2>
        <div className="element__box">
          <button
            className="element__like-button"
            type="button"
            aria-label="Поставить лайк"
          />
          <span className="element__counter-likes" />
        </div>
      </div>
      <button
        className="element__remove-button"
        type="button"
        aria-label="Удалить место"
      />
    </li>
    )
};