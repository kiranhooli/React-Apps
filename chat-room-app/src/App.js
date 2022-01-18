import { auth } from './firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import SignIn from './components/SignIn'
import ChatRoom from './components/ChatRoom'

function App() {
  const [user] = useAuthState(auth)
  return (
    <div className="App">
      <section>
        {user ? <ChatRoom /> : <SignIn />}
      </section>
    </div>
  );
}

export default App;
