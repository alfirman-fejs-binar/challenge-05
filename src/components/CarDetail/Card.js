import PrimaryButton from "../Button/PrimaryButton";

export default function Card({ car }) {
  return (
    <div>
      <div>
        <img src={car?.image} alt={car?.name} />
      </div>
      <div>
        <p>{car?.name}</p>
        <ul>
          <li>
            <img src="/icons/fi_users.svg" alt="users" />
            <p>{car?.passenger}</p>
          </li>
          <li>
            <img src="/icons/fi_settings.svg" alt="settings" />
            <p>{car?.engine}</p>
          </li>
          <li>
            <img src="/icons/fi_calendar.svg" alt="settings" />
            <p>{car?.year}</p>
          </li>
        </ul>
        <div>
          <p>Total</p>
          <p>Rp {car?.price?.toLocaleString("id-ID")}</p>
        </div>
        <PrimaryButton>Lanjutkan Pembayaran</PrimaryButton>
      </div>
    </div>
  );
}
