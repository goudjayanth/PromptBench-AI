import { useState } from "react"

function InputBox({sendMessage}){

const [query,setQuery]=useState("")

return(

<div style={{
position:"fixed",
bottom:"9px",
width:"57%",
background:"#ffffff",
padding:"10px",
borderRadius:"30px",
marginLeft:"30%",
height:"40px",
}}>

<input
value={query}
onChange={(e)=>setQuery(e.target.value)}
placeholder="Ask me anything to test prompt performance."
style={{width:"80%",border:"0px",marginTop:"10px",marginLeft:"5px"}}
/>

<button onClick={()=>{
sendMessage(query)
setQuery("")
}}style={{width:"10%",height:"85%"}}>
Send
</button>

</div>

)

}

export default InputBox
