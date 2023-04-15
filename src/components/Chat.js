import { CometChat } from "@cometchat-pro/chat"
import { CometChatUsersWithMessages } from "@cometchat-pro/react-ui-kit";

// initialize the Comet Chat
const appID = process.env.REACT_APP_COMETCHAT_APP_ID
const region = process.env.REACT_APP_COMETCHAT_REGION
const appSetting = new CometChat.AppSettingsBuilder().subscribePresenceForAllUsers().setRegion(region).build();
CometChat.init(appID, appSetting).then(
  () => {
    console.log("Initialization has been completed successfully");
    // You can now call login function.
  },
  error => {
    console.log("Initialization failed with error:", error);
    // Check the reason for error and take appropriate action.
  }
);

// now we want to have a create user function 
// const authKey = process.env.REACT_APP_COMETCHAT_AUTH_KEY
// const uid = "user1"
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


// Now we will add a login function
const authKey = process.env.REACT_APP_COMETCHAT_AUTH_KEY
const uid = "user1" // will eventually be replaced so that it can be any user

CometChat.login(uid, authKey).then(
    user => {
      console.log("Login Successful:", { user });    
    },
    error => {
      console.log("Login failed with exception:", { error });    
    }
  )


function Chat() {
    return (
      <div className="cometchat-container" style={{width: '500px', height:'500px' }}>
        <CometChatUsersWithMessages className="chat"/>
      </div>
    )
}
export default Chat