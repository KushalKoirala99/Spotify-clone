import { Icon } from "lucide-react"
import { house } from "@lucide/lab"


const Header = () => {
  return (
    <>
    <div className="flex justify-between bg-black ">
    <div>
     <Icon iconNode={house} size={40} color="white" strokeWidth={1}/>
    
    </div>
    <div>search bar</div>
    <div>user profile</div>
    </div>
    </>
  )
}

export default Header