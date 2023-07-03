export default function PopupWithForm({ name, title, titleButton, children, isOpen, onClose }) {
  return (
    <div className={`popup popup_type_${name} ${isOpen && 'popup_is-opened'}`}>
      <div className="popup__container">
        <h2 className={`popup__title`}>{title}</h2>
        <form
          className="popup__form"
          name={name}
          method="get"
          action="#"
          noValidate=""
        >
          {children}
          <button
            className="popup__save-button"
            type="submit"
          >
          {titleButton}
          </button>
        </form>
        <button
          className="popup__close-button"
          type="button"
          onClick={onClose}
        />
      </div>
    </div>
    )
};