"use client";
import { Icon } from "leaflet";
import { Dispatch, SetStateAction } from "react";
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import styles from "./MapView.module.css";
import { Hotel } from "@/types/hotel";

interface MapViewProps {
  position: [number, number] | null;
  setPosition: Dispatch<SetStateAction<[number, number] | null>>;
  selectHotel: Hotel | null;
}

export default function MapView({
  position,
  setPosition,
  selectHotel,
}: MapViewProps) {
  const customIcon = new Icon({
    iconUrl: "/marker.svg",
    iconSize: [32, 32],
    iconAnchor: [16, 32],
  });
  const selectIcon = new Icon({
    iconUrl: "/marker-select.svg",
    iconSize: [32, 32],
    iconAnchor: [16, 32],
  });
  function LocationMarker() {
    useMapEvents({
      click(e) {
        setPosition([e.latlng.lat, e.latlng.lng]);
      },
    });
    return position ? <Marker position={position} icon={customIcon} /> : null;
  }

  return (
    <MapContainer center={[48.8566, 2.3522]} zoom={4} className={styles.map}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="© OpenStreetMap contributors"
      />
      <LocationMarker />
      {selectHotel ? (
        <Marker position={selectHotel.coords} icon={selectIcon} />
      ) : null}
    </MapContainer>
  );
}
