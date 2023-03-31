

export const Navbar = () => {
  return (
    <>
        <div className='nav-users'>
            <div className='input'>
                <p>Users</p>
                <input className="icono-placeholder" type="text" placeholder=" Search User" />
                
            </div>
            <div className='button'>
                <button className="reputacion">Reputation</button>
                <button className="newUsers">New Users</button>
                <button className="votors">Votors</button>
                <button className="editors">Editors</button>
                <button className="moderators">Moderators</button>
            </div>
        </div>
    </>
  )
}
