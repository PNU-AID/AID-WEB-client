import './App.css';
import Login from './pages/Login';
import SignUp from './pages/SignUp';

function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen space-y-10 bg-gray-100">
      <h1 className="text-3xl font-bold">AID</h1>
      <Login />
      <SignUp />
    </div>
  );
}

export default App;
