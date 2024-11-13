import PasswordList from "./PasswordList";
export default function History({ passwordList }) {
  return (
    <div className="history">
      <h2 className="title" style={{ textDecoration: "underline" }}>
        History
      </h2>
      <div className="password-list">
        <p style={{ textAlign: "center" }}>
          {passwordList.length <= 1 ? "No history" : null}
        </p>
        <PasswordList passwordList={passwordList} />
      </div>
    </div>
  );
}
