import styles from "./Modal.module.css";

export default function Modal(props) {
  const closeModal = (e) => {
    e.preventDefault();
    props.onCloseModal();
  };

  return (
    <>
      <div className={styles.backdrop}></div>
      <div className={styles.modal}>
        <div className={styles.modal_header}>
          <h1>Error!</h1>
        </div>
        <p className={styles.modal_message}>{props.errorMessage}</p>
        <button className={styles.error_button} onClick={closeModal}>
          OK
        </button>
      </div>
    </>
  );
}
