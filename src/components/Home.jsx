import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import love from "../assets/love.png";
import boyIcon from "../assets/boss.png";
import girlIcon from "../assets/woman.png";
import Swal from 'sweetalert2';
export default function Home() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [crushName, setCrushName] = useState('');
  const [loveScore, setLoveScore] = useState(null);
  // const [loveMessage, setLoveMessage] = useState('');

  const calculateMatch = () => {
    if (!name.trim() || !crushName.trim()) {
      Swal.fire({
        position: "top-right",
        toast: true,
        icon: "error",
        color: "red",
        title: "Please en ter both names to calculate the match",
        showConfirmButton: false,
        timer: 2500
      })
      // alert('Please enter both names to calculate the match.');
      return; // Exit the function if inputs are empty
    }
    const randomScore = Math.floor(Math.random() * 100) + 1;
    setLoveScore(randomScore);
    let loveMessage;
    if (randomScore >= 90) {
      loveMessage = `Congratulations! You and ${crushName} are a match made in heaven! 💖`
      console.log(loveMessage);
    } else if (randomScore >= 80) {
      loveMessage`You and ${crushName} have a strong connection! Keep the love alive! ❤️`;
      console.log(loveMessage);
    } else if (randomScore >= 70) {
      loveMessage = `Wow! There's a spark between you and ${crushName}! 🌟`;
      console.log(loveMessage);
    } else if (randomScore >= 60) {
      loveMessage = `You and ${crushName} have potential! Nurture your relationship! 🌱`;
      console.log(loveMessage);
    } else if (randomScore >= 50) {
      loveMessage = `It's a decent start between you and ${crushName}. Keep exploring! 🔍`;
      console.log(loveMessage);
    } else if (randomScore >= 40) {
      loveMessage = `Hmm... You and ${crushName} might need to work on some things. 💔`;
      console.log(loveMessage);
    } else if (randomScore >= 30) {
      loveMessage = `There are differences between you and ${crushName}. Can you bridge them? 🌉`;
      console.log(loveMessage);
    } else if (randomScore >= 20) {
      loveMessage = `A little effort could go a long way in your relationship with ${crushName}. 🌠`;
      console.log(loveMessage);
    } else if (randomScore >= 10) {
      loveMessage = `It's early days for you and ${crushName}. Time will tell! ⏳`;
      console.log(loveMessage);
    } else {
      loveMessage = `Hmm... The stars seem undecided about your relationship with ${crushName}. 🌌`;
      console.log(loveMessage);
    }

    console.log('clicked!!');
    console.log(randomScore)
    console.log(loveMessage);
    navigate('/result', { state: { randomScore, loveMessage, name, crushName } });
  };

  return (
    <>
      <img src={love} alt="love icon" className="logo" />
      <h2>Love Calculator</h2>

      <div>
        <div className="input_container">
          <input
            type="text"
            placeholder="Enter boy name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <img src={boyIcon} alt="boss icon" />
        </div>

        <div className="input_container">
          <input
            type="text"
            placeholder="Enter girl name"
            value={crushName}
            onChange={(e) => setCrushName(e.target.value)}
          />
          <img src={girlIcon} alt="boss icon" />
        </div>
      </div>

      <button onClick={calculateMatch}>Calculate</button>
    </>
  );
}