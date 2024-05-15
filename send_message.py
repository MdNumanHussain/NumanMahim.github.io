
import requests

def send_telegram_message(bot_token, chat_id, message):
    url = f'https://api.telegram.org/bot{bot_token}/sendMessage'
    data = {'chat_id': chat_id, 'text': message}
    response = requests.post(url, data=data)
    return response.json()

# Replace 'your_bot_token_here' with your bot's token
bot_token = '7073059910:AAE-KjA9a8wHzI9iDkmOfFa6EWuJhLcZOHQ'
chat_id = '7165607497'  # Replace with your chat ID
message = 'Hello, MD Numan! This is your first message from your new Telegram bot.'
send_telegram_message(bot_token, chat_id, message)
