import { withAuthenticator } from '@aws-amplify/ui-react'
const auth = ({signOut,user})=>{
    return (
        <div>
            <h1>{user.SignInDetails.loginId} </h1>
            <button onClick={signOut}>Sign out</button>
        </div>
    )
}
export default withAuthenticator(auth)