def score_response(response):

    score = 0

    # 1. Clarity Check
    if len(response.split()) > 20:
        score += 2

    # 2. Step-by-step guidance
    if "step" in response.lower():
        score += 3

    # 3. Asking useful info
    if "order" in response.lower():
        score += 2

    # 4. Actionable instructions
    if "return" in response.lower():
        score += 2

    # 5. Politeness
    if "please" in response.lower():
        score += 1

    return score
