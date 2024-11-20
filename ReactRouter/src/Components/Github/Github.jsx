import React, { useEffect,useState } from 'react'

function Github() {
    const data = githubInfo();
    // const [data, setData] = useState([]);
    // useEffect(() => {
    //     fetch('https://api.github.com/users/devmahesh-5')
    //     .then(res => res.json())
    //     .then(data => setData(data))
    //     .catch(err => console.log(err));
        
        
    // },[])
    return (
        <div className="bg-orange-400 text-3xl text-white p-16 text-center">Github Followers:{data.followers}</div>
    )
}

export default Github
export  const githubInfo = async () => {
    const res = await fetch('https://api.github.com/users/devmahesh-5');
    const data = await res.json();
    return data
}