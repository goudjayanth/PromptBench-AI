from config.groq_config import client

def generate_response(prompt):

    response = client.chat.completions.create(
        model="llama-3.3-70b-versatile",
        messages=[{"role":"user","content":prompt}]
    )

    return response.choices[0].message.content
