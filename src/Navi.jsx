import {Routes, Route, useNavigate} from 'react-router-dom';
import Cal from './Cal';
import { Com } from './Com';

export default function Navi() {
  const navigate = useNavigate();

  const navigateToContacts = () => {
    // 👇️ navigate to /contacts
    navigate('/con');
  };

  const navigateHome = () => {
    // 👇️ navigate to /
    navigate('/');
  };

  return (
    <div>
      <div>
        <button onClick={navigateHome}>Home</button>
        <hr />
        <button onClick={navigateToContacts}>Contacts</button>

        <Routes>
          <Route path="/con" element={<Com />} />
          <Route path="/" element={<Cal />} />
        </Routes>
      </div>
    </div>
  );
}

