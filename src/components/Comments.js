import { CometChat } from "@cometchat-pro/chat";

const appID = process.env.REACT_APP_COMETCHAT_APP_ID
const region = process.env.REACT_APP_COMETCHAT_REGION
const appSetting = new CometChat.AppSettingsBuilder().subscribePresenceForAllUsers().setRegion(region).build()


// Test to see that the initialization works
CometChat.init(appID, appSetting).then(
  () => {
    console.log("Initialization Completed Successfully")
  },
  error => {
    console.log("Initialization Failed with Error", error)
  }
)

// Now we want to create a user function 
const authKey = process.env.REACT_APP_COMETCHAT_AUTH_KEY
const uid = "user1"
// const name = "Jonathan"

// let user = new CometChat.User(uid)
// user.setName(name)
// CometChat.createUser(user, authKey).then(
//   user => {
//     console.log("User created", user)
//   }, error => {
//     console.log("Error creating a new user", error)
//   }
// )

// The login user function 
CometChat.login(uid, authKey).then(
  user => {
    console.log("user logged in successfully", {user})
  }, 
  error => {
    console.log("Login failed", {error})
  }
)



function Chat(){
  return (
    <div style={{width: '800px', height:'800px' }}>
      <CometChatUI />
    </div>
  )
}

export default Chat