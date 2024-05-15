import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import love from "../assets/love.png";
import boyIcon from "../assets/boss.png";
import girlIcon from "../assets/woman.png";
import Swal from 'sweetalert2';
import { calculateLoveScore } from '../services/loveMatch'
import { matchConditions } from '../services/matchConditions'
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
        title: "Please enter both names to calculate the match",
        showConfirmButton: false,
        timer: 3000
      })
      // alert('Please enter both names to calculate the match.');
      return; // Exit the function if inputs are empty
    }

    if (name.toLowerCase() == "fredrick" || name.toLowerCase() == 'fred' || name.toLowerCase() == "tobe" || name.toLowerCase() == "tobechukwu" || name.toLowerCase() == "anyanwu" || crushName.toLowerCase() == 'fredrick' || crushName.toLowerCase() == 'fred' || crushName.toLowerCase() == 'tobe' || crushName.toLowerCase() == 'tobechukwu' || crushName.toLowerCase() == 'anyanwu') {
      Swal.fire({
        position: "top-right",
        toast: true,
        icon: "error",
        title: "Kai kai kai change that name fast 🙄👀",
        showConfirmButton: false,
        timer: 3500
      })
      return;
    }


    // calculate love score 

    const score = calculateLoveScore(name, crushName)

    // determine display message from love score 

    const loveMessage = matchConditions(score, crushName)

    // update lovescore state 
    setLoveScore(score)


    // const matchScore = calculateLoveScore(name, crushName)
    // setLoveScore(matchScore)  

    console.log('clicked!!');
    navigate('/result', { state: { score, loveMessage, name, crushName } });
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