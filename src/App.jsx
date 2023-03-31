
import { useEffect, useState } from 'react';
import { Navbar } from './components/Navbar';
import { Users } from './components/Users';
import { listado } from './helpers/listado';

export const App = () => {

    const [user, setUser] = useState([])
    

    const getUsers = async() =>{
        const {data} = await listado();
        setUser(data)
    }

    useEffect(() => {
      getUsers()
    }, [])
    
    

  return (
    <>
        <div className='container'>
            <Navbar/>
            <div className='users'>
                {
                    user.map((user,index)=>(
                        <Users key={index} user={user} index={index}/>
                    ))
                }
            </div>
        </div>
    </>
  )
}
