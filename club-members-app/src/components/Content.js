import Card from "./Card"

const Content = ({ members, deleteMember }) => {
    return (
        <div className='flex flex-row gap-3 flex-wrap justify-center mx-4 mt-10'>
            {
                members.length ?
                    members.map(member => <Card key={member.id} member={member} deleteMember={deleteMember} />) :
                    <h3 className='font-bold text-red-500'>No Members found.</h3>
            }
        </div>
    )
}

export default Content
