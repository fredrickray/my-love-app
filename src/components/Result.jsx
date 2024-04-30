import { useLocation, useNavigate } from "react-router-dom";

export default function Result() {
  const location = useLocation();
  const navigate = useNavigate();
  const { randomScore, loveMessage, name, crushName } = location.state;
  console.log(location.state)
  return (
    <>
      <img src="/src/assets/dating-unscreen.gif" alt="dating gif" className="logo" />
      <div className="submission_container">
        <div>
          <img className="submission_container_logo" src="/src/assets/boss.png" alt="boss icon" />
          <p>{name}</p>
        </div>

        <p>{randomScore}%</p>

        <div>
          <img className="submission_container_logo" src="/src/assets/woman.png" alt="boss icon" />
          <p>{crushName}</p>
        </div>
      </div>

      <p>{loveMessage}</p>

      <button onClick={() => navigate("/", { state: { name, crushName } })}>
        Calculate Again
      </button>
    </>
  );
}
