import { useEffect, useState } from 'react';

function App() {
  const [message, setMessage] = useState('');

useEffect(() => {
  fetch('http://a7443eb3efb79434284e6e8a0682b0af-864709235.ap-south-1.elb.amazonaws.com/api/message')
    .then(res => res.json())
    .then(data => setMessage(data.message))
    .catch(err => console.log(err));
}, []);

  return (
    <div style={{ padding: '40px', fontFamily: 'Arial' }}>
      <h1>React Frontend</h1>

      <h2>Message from Backend:</h2>

      <p>{message}</p>
    </div>
  );
}

export default App;
