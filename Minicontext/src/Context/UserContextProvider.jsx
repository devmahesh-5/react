import React from "react";
import UserContext from "./UserContext";
const UserContextProvider=({children})=>{
    const [user,setUser]=React.useState(null)
  return(
    <UserContext.Provider value={{user,setUser}}>
        {children}
        {/* children is a prop and it has excess of value (which is props of UserContextProvider which needs to be get from usercontext) */}
    </UserContext.Provider>
  )
}
export default UserContextProvider;