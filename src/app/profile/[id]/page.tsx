export default function UserProfile({params}: any) {
    return (
        <div className="flex flex-col justify-center items-center h-screen py-2"> 
        <h1>Profile</h1>
        <hr/>
        <p className="text-4xl"> Profile Page         <span className="p-2 rounded bg-orange-400 text-black">
             {params.id}</span>
</p>
        </div>
    )
}