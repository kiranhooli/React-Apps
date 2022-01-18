import Content from './components/Content';
import Header from './components/Header'
import { useState, useEffect } from 'react'
import Form from './components/Form';

const API_URL = 'http://localhost:5000/members/'

function App() {
  const [members, setMembers] = useState([])
  const [formFlag, setFormFlag] = useState(false)
  useEffect(() => {
    async function fetchData() {
      let res = await fetch(API_URL)
      let data = await res.json()
      setMembers(data)
    }
    fetchData()
  }, [])

  const deleteMember = async (id) => {
    await fetch(API_URL + id, {
      method: 'DELETE'
    })
    setMembers(members.filter(member => member.id !== id))
  }

  const addMember = async (member) => {
    member = { id: Math.round(Math.random() * 1000), ...member }
    await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(member)
    })
    setMembers([...members, member])
    setFormFlag(false)
  }

  const toggleForm = () => {
    setFormFlag(!formFlag)
  }

  return (
    <div className="flex items-center flex-col h-screen">
      <div className='flex justify-between items-center'>
        <Header />
        <button className="shadow font-normal bg-gray-500 hover:bg-gray-400 focus:shadow-outline focus:outline-none text-white  py-2 px-4 mr-9  rounded sm:mr-0 sm:font-bold" type="button"
          onClick={toggleForm}
        >
          {formFlag ? 'Close Form' : 'Add a Member'}
        </button>
      </div>
      {formFlag && <Form addMember={addMember} />}
      <Content members={members} deleteMember={deleteMember} />
    </div>
  );
}

export default App;
