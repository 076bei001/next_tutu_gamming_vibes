const { detectContentType } = require("next/dist/server/image-optimizer")
const { useContext } = require("react")

exports.hendler = async () => {
       const guides =[
        {title: 'Beat all Zelda bosses like a boss', author: 'mario'},
        {title: 'Mario kart shortcuts you never knew existed', author: 'luigi'},
        {title: 'Ultimate Street Fighter Guide', author: 'chun-li'}
    ]
    
    if (context.clientContext.user){
        return{ // returns if user is logged in 
            statusCode: 200,
            body: JSON.stringify(guides)
        }
    }
    
    return {// returns if user not logged in 
        statusCode: 200,
        body: JSON.stringify({mssg: 'ah, ah, ah, you must be logged in to see this'})
    }
}
