import {useSelector} from 'react-redux';

export default function Profile() {
  const {currentUser} = useSelector((state) => state.user)
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl font-semibold text-center
      my-7'>Profile</h1>
      <form className='flex flex-col gap-3'>
        <img src={currentUser.avatar} alt="profile"
        className='rounded-full h-24 w-24 object-cover
        cursor-pointer self-center mt-2 '/>
        <input type="text" placeholder='Username' id='username' className='border p-3 rounded-xl'/>
        <input type="email" placeholder='Email' id='email' className='border p-3 rounded-xl'/>
        <input type="text" placeholder='Password' id='password' className='border p-3 rounded-xl'/>
        <button className='bg-slate-700 text-white p-3 rounded-xl
         uppercase hover:opacity-95'>Update</button>

     </form>
     <div className='flex justify-between mt-4'>
        <span className='text-red-700 cursor-pointer'>Delete account</span>
        <span className='text-red-700 cursor-pointer'>Sign out</span>
     </div>
    </div>
  )
}
