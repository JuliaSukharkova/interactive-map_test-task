import { Hotel } from "@/types/hotel";
import styles from "./HotelCard.module.css";
import { Dispatch, SetStateAction } from "react";

interface HotelCardProps {
  hotel: Hotel;
  selectHotel: Hotel | null;
  setSelectedHotel: Dispatch<SetStateAction<Hotel | null>>;
}

export default function HotelCard({
  hotel,
  selectHotel,
  setSelectedHotel,
}: HotelCardProps) {
  const isSelected = selectHotel?.id === hotel.id;

  return (
    <div
      className={`${styles.card} ${isSelected ? styles.selected : ""}`}
      onClick={() => setSelectedHotel(hotel)}
    >
      <div className={styles.info}>
        <h1 className={styles.name}>{hotel.name}</h1>
        <p>{hotel.address}</p>
      </div>
      <p className={styles.price}>{hotel.price} $</p>
    </div>
  );
}
