import styles from "./CustomButton.module.css";


// className === class
// id === id (remains the same)
export function CustomButton() {
  return (
    <div>
        {/* med .btn åkallar vi cssen */}
      <button className={styles.btn}>Testing Button</button>
    </div>
  );
}
