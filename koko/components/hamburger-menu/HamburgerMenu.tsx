import styles from "./HamburgerMenu.module.css";

type HamburgerMenuProps = {
  onChange: (checked: boolean) => void;
};

export default function HamburgerMenu({ onChange }: HamburgerMenuProps) {
  return (
    <div className={styles["hamburger-menu"]}>
      <input
        id={styles.menu__toggle}
        type="checkbox"
        onChange={({ target: { checked } }) => onChange(checked)}
      />
      <label className={`${styles.menu__btn}`} htmlFor={styles.menu__toggle}>
        <span className="bg-koko-dark before:bg-koko-dark after:bg-koko-dark dark:bg-white before:dark:bg-white after:dark:bg-white"></span>
      </label>
    </div>
  );
}
