import './App.css';

import Bmi from './Bmi'; // Import the Bmi component we created

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to My BMI Calculator</h1>
        {/* Render the Bmi component */}
        <Bmi />
      </header>
    </div>
  );
}

export default App;
