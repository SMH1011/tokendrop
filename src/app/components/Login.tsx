import { ConnectButton } from "thirdweb/react"
import { client } from "../client"

export default function login(){
    return(
        <div className="flex justify-center items-center">
     <ConnectButton client={client} />
    </div>

    );
}

