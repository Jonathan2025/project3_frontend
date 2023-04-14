import { CometChat } from "@cometchat-pro/chat";

const appID = process.env.REACT_APP_COMETCHAT_APP_ID
const region = process.env.REACT_APP_COMETCHAT_REGION
const appSetting = new CometChat.AppSettingsBuilder().subscribePresenceForAllUsers().setRegion(region).build()

CometChat.init(appID, appSetting).then(
  () => {
    console.log("Initialization Completed Successfully")
  },
  error => {
    console.log("Initialization Failed with Error", error)
  }
)

