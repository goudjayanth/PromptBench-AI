function PromptPanel({analysis}){

if(!analysis) return(
<div style={{flex:1,background:"#202123",color:"white"}}>
<h3 style={{textAlign:"center",marginTop:"20%"}}> No Analysis Yet</h3>
</div>
)

return(

<div style={{
flex:1,
background:"#202123",
color:"white",
padding:"10px"
}}>

<h3>Prompt Evaluation</h3>

<p><b>Zero:</b> {analysis.responses.zero}</p>
<p><b>Few:</b> {analysis.responses.few}</p>
<p><b>Role:</b> {analysis.responses.role}</p>
<p><b>CoT:</b> {analysis.responses.cot}</p>

<h2>Best: {analysis.best_prompt}</h2>

</div>

)

}

export default PromptPanel
