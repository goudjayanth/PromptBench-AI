from services.evaluator import score_response

def best_prompt(responses):

    scores = {}

    for key,value in responses.items():
        scores[key] = score_response(value)

    best = max(scores, key=scores.get)

    return best
