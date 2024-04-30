import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();

  const calculateMatch = function () {
    console.log('clicked!!');
    navigate('/result');
  };

  return (
    <>
      <img src="/src/assets/love.png" alt="love icon" className="logo" />
      <h2>Love Calculator</h2>

      <div>
        <div className="input_container">
          <input type="text" placeholder="Enter boy name" />
          <img src="/src/assets/boss.png" alt="boss icon" />
        </div>

        <div className="input_container">
          <input type="text" placeholder="Enter girl name" />
          <img src="/src/assets/woman.png" alt="boss icon" />
        </div>
      </div>

      <button onClick={calculateMatch}>Calculate</button>
    </>
  );
}
