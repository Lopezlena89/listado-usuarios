
export const Users = ({user,index}) => {
  return (
    <>
        <div className="compo-user">
            <div className="first">
                <div className="imagen"></div>
            </div>
            <div className="second">
                <p>{user.name}</p>
                <p>{user.address.city}</p>
                <button>{user.website}</button>
            </div>
        </div>
    </>
  )
}
