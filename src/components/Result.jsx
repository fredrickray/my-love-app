import { useLocation, useNavigate } from "react-router-dom";
import boyIcon from "../assets/boss.png";
import girlIcon from "../assets/woman.png";
import datingGif from "../assets/dating-unscreen.gif";

export default function Result() {
  const location = useLocation();
  const navigate = useNavigate();
  const { score, loveMessage, name, crushName } = location.state;
  console.log(location.state)
  return (
    <>
      <img src={datingGif} alt="dating gif" className="logo" />
      <div className="submission_container">
        <div>
          <img className="submission_container_logo" src={boyIcon} alt="boss icon" />
          <p>{name}</p>
        </div>

        <p>{score}%</p>

        <div>
          <img className="submission_container_logo" src={girlIcon} alt="boss icon" />
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
