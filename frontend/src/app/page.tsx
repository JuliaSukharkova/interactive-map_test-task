"use client";
import { useEffect, useState } from "react";
import HotelCard from "@/components/HotelCard/HotelCard";
import SortDropdown from "@/components/SortDropdown/SortDropdown";
import MapView from "@/components/MapView/MapView";
import { getHotelsApi } from "@/api/getHotelsApi";
import { Hotel } from "@/types/hotel";
import styles from "./page.module.css";

export default function Home() {
  const [position, setPosition] = useState<[number, number] | null>(null);
  const [hotels, setHotels] = useState<Hotel[]>([]);
  const [sortBy, setSortBy] = useState<"cheaper" | "expensive" | null>(null);
  const [selectHotel, setSelectedHotel] = useState<Hotel | null>(null);

  const distance = (lat1: number, lng1: number, lat2: number, lng2: number) =>
    Math.sqrt(Math.pow(lat1 - lat2, 2) + Math.pow(lng1 - lng2, 2));

  useEffect(() => {
    if (position) {
      const getHotels = async () => {
        const data = await getHotelsApi();
        setHotels(data);
      };
      getHotels();
    }
  }, [position]);

  useEffect(() => {
    if (position) {
      setSelectedHotel(null);
    }
  }, [position]);

  const hotelsWithDistance = hotels
    .map((hotel) => ({
      ...hotel,
      distance: distance(
        position![0],
        position![1],
        hotel.coords[0],
        hotel.coords[1]
      ),
    }))
    .sort((a, b) => a.distance - b.distance)
    .slice(0, 5);

  const sortedHotels =
    sortBy === "cheaper"
      ? [...hotelsWithDistance].sort((a, b) => a.price - b.price)
      : sortBy === "expensive"
      ? [...hotelsWithDistance].sort((a, b) => b.price - a.price)
      : hotelsWithDistance;

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Interactive map</h1>
      <MapView
        position={position}
        setPosition={setPosition}
        selectHotel={selectHotel}
      />
      {position && <SortDropdown sortBy={sortBy} sortedOnChange={setSortBy} />}
      {position && hotels.length > 0 && (
        <div className={styles.card}>
          {sortedHotels.map((hotel) => (
            <HotelCard
              key={hotel.id}
              hotel={hotel}
              selectHotel={selectHotel}
              setSelectedHotel={setSelectedHotel}
            />
          ))}
        </div>
      )}
    </main>
  );
}
