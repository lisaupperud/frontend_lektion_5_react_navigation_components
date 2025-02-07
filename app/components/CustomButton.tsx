import styles from "./CustomButton.module.css";


interface CustomButton {
    customButtonName: string
}


// className === class
// id === id (remains the same)
export function CustomButton(props: CustomButton) {
  return (
    <div>
        {/* med .btn åkallar vi cssen */}
        {/* utan styles.btn i måsvinge --> inte ett scope, utan ett objekt */}
      <button className={styles.btn}>{props.customButtonName}</button>
    </div>
  );
}
