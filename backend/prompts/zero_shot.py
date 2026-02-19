def zero_shot_prompt(query):
    return f"""
    Answer politely:
    User: {query}
    """
