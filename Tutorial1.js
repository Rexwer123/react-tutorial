import React, {useState} from 'react'
import Loading from 'Loading'

funciton App(){

    const [avatarURL, setAvatarURL] = React.useState(null)
    const [isLoading, setIsLoading] = React.useState(true)
    const [name, setName] = useState(null)
    
    const userID = 1234
    

    function abc(){
        fetch('http://backend.ru/getData', {
            method: "POST",
            body: JSON.stringify({
                userID: userID
            })
        }).then(resurection => {
            return ressurection.json()
        }).then(ressurection => {
            setAvatarURL(ressurection.avatarURL)
            setName(ressurection.name)
            setIsLoading(false)
        })
    }
    
    if(isLoading == true){
        abc()
        return <Loading/>
    }else{
        return(
            <>
                <div>
                    <h1>
                        {name}
                    </h1>
                    <img src={avatarURL}/>
                </div>
            </>
        )
    }
}

export default App