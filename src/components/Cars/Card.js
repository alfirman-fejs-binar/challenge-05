import { useNavigate } from "react-router-dom";
import PrimaryButton from "../Button/PrimaryButton";

export default function Card({ car }) {
  const push = useNavigate();
  return (
    <div onClick={() => push("/" + car.id)} className="rent-card">
      <div>
        <img src={car.image} alt={car.name} />
      </div>
      <p>{car.name}</p>
      <h6>Rp {car.price.toLocaleString("id-ID")} / hari</h6>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.{" "}
      </p>
      <ul>
        <li>
          <img src="/icons/fi_users.svg" alt="users" />
          <p>{car.passenger}</p>
        </li>
        <li>
          <img src="/icons/fi_settings.svg" alt="settings" />
          <p>{car.engine}</p>
        </li>
        <li>
          <img src="/icons/fi_calendar.svg" alt="settings" />
          <p>{car.year}</p>
        </li>
      </ul>
      <PrimaryButton>Pilih Mobil</PrimaryButton>
    </div>
  );
}
