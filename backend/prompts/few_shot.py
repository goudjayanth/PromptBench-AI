def few_shot_prompt(query):
    return f"""
    Example:
    User: I want refund
    Bot: Sure! Provide order ID.

    Now answer:
    User: {query}
    """
