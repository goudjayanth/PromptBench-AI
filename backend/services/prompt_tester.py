from prompts.zero_shot import zero_shot_prompt
from prompts.few_shot import few_shot_prompt
from prompts.role_based import role_prompt
from prompts.cot import cot_prompt
from services.llm_service import generate_response

def test_prompts(query):

    prompts = {
        "zero": zero_shot_prompt(query),
        "few": few_shot_prompt(query),
        "role": role_prompt(query),
        "cot": cot_prompt(query)
    }

    responses = {}

    for key, value in prompts.items():
        responses[key] = generate_response(value)

    return responses
