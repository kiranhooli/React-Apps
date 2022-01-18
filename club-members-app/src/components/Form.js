import { useState } from 'react'
const Form = ({ addMember }) => {

    const [name, setName] = useState('')
    const [role, setRole] = useState('')
    let [showError, setShowError] = useState(false)

    const onSubmit = () => {

        if (name.length !== 0 && role.length !== 0) {
            setShowError(false)
            addMember({ name: name, role: role })
        } else {
            setShowError(true)
        }
    }

    return (
        <form className="w-full max-w-sm">
            <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                    <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-full-name">
                        Full Name
                    </label>
                </div>
                <div className="md:w-2/3">
                    <input value={name} onChange={(e) => setName(e.target.value)} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" />
                </div>
            </div>
            <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                    <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-password">
                        Role
                    </label>
                </div>
                <div className="md:w-2/3">
                    <input value={role} onChange={(e) => setRole(e.target.value)} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" />
                </div>
            </div>
            <div className="md:flex md:items-center">
                <div className="md:w-1/3"></div>
                <div className="md:w-2/3 flex gap-4">
                    <button onClick={onSubmit} className="shadow bg-gray-500 hover:bg-gray-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
                        Add
                    </button>
                    {showError && <p className='text-red-600 text-sm font-medium'>Please Enter Member Details</p>}
                </div>
            </div>
        </form>
    )
}

export default Form
