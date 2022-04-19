export default function PrimaryButton({ children, ...rest }) {
  return (
    <button className="primary-button" {...rest}>
      {children}
    </button>
  );
}
