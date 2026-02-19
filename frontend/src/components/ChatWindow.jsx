function ChatWindow({messages}){

return(

<div style={{

background:"#4d4e58",
color:"white",
width:"20%", 
padding:"20px",
overflowY:"scroll"
}}>

{messages.map((msg,i)=>(
<div key={i}
style={{
background:msg.type==="user"?"#444654":"#2b2d31",
padding:"10px",
margin:"10px",
borderRadius:"8px"
}}
>
{msg.text}
</div>
))}

</div>

)

}

export default ChatWindow
