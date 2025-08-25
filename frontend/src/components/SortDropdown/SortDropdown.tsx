import styles from "./SortDropdown.module.css";

interface SortDropdownProps {
  sortBy: "cheaper" | "expensive" | null;
  sortedOnChange: (value: "cheaper" | "expensive" | null) => void;
}

export default function SortDropdown({
  sortBy,
  sortedOnChange,
}: SortDropdownProps) {
  return (
    <div className={styles.dropdown}>
      <label className={styles.label}>Sort by price</label>
      <select
        value={sortBy ?? "all"}
        onChange={(e) =>
          sortedOnChange(
            e.target.value === "all"
              ? null
              : (e.target.value as "cheaper" | "expensive")
          )
        }
        className={styles.select}
      >
        <option value="all">All</option>
        <option value="cheaper">Cheaper first</option>
        <option value="expensive">Expensive first</option>
      </select>
    </div>
  );
}
