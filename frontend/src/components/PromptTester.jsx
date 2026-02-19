// import { useState } from "react"
// import axios from "axios"
// import ResponseViewer from "./ResponseViewer"

// function PromptTester(){

// const [query,setQuery] = useState("")
// const [data,setData] = useState(null)

// const testPrompt = async () => {

// const res = await axios.get(
// `http://127.0.0.1:8000/test_prompt?query=${query}`
// )

// setData(res.data)

// }

// return(
// <div>

// <h2>PromptBench AI</h2>

// <input
// type="text"
// placeholder="Enter your query"
// value={query}
// onChange={(e)=>setQuery(e.target.value)}
// />

// <button onClick={testPrompt}>
// Test Prompt
// </button>

// {data && <ResponseViewer data={data}/>}

// </div>
// )

// }

// export default PromptTester
