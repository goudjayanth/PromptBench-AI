import ChatWindow from "./ChatWindow"
import PromptPanel from "./PromptPanel"
import InputBox from "./InputBox"
import { useState } from "react"
import axios from "axios"

function ChatLayout(){

const [messages,setMessages] = useState([])
const [analysis,setAnalysis] = useState(null)

const sendMessage = async (query)=>{

setMessages([...messages,{type:"user",text:query}])

// const res = await axios.get(
// `http://127.0.0.1:8000/test_prompt?query=${query}`
// )
const res = await axios.get(
`https://promptbench-ai.onrender.com/test_prompt?query=${query}`
)

setAnalysis(res.data)

setMessages(prev=>[
...prev,
{type:"bot",text:res.data.responses[res.data.best_prompt]}
])

}

return(
<div style={{display:"flex",height:"100vh"}}>

<ChatWindow messages={messages}/>

<PromptPanel analysis={analysis}/>

<InputBox sendMessage={sendMessage}/>

</div>
)

}

export default ChatLayout
