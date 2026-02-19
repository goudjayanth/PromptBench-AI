def role_prompt(query):
    return f"""
    You are a customer support agent.
    Explain solution clearly.

    User: {query}
    """
