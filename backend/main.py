from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from services.prompt_tester import test_prompts
from chatbot.smart_support import best_prompt
import uvicorn

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def home():
    return {"message":"PromptBench Backend Running 🚀"}

@app.get("/test_prompt")
def run_test(query:str):

    responses = test_prompts(query)
    best = best_prompt(responses)

    return {
        "responses": responses,
        "best_prompt": best
    }

if __name__ == "__main__":
    uvicorn.run(app, host="127.0.0.1", port=8000)
