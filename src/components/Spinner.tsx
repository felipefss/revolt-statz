const spinnerStyle = {
  width: "3rem",
  height: "3rem",
};

export default function Spinner() {
  return (
    <div
      className="spinner-border text-primary"
      style={spinnerStyle}
      role="status"
    >
      <span className="visually-hidden">Loading...</span>
    </div>
  );
}
