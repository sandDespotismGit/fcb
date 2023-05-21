from bs4 import BeautifulSoup
import requests
url = 'https://ffuo.ru/team/1240664/application'
url_matches = 'https://ffuo.ru/team/1240664/calendar?season_id=10121044'
res_matches = requests.get(url_matches)
soup_matches = BeautifulSoup(res_matches.text, 'html.parser')
res = requests.get(url)
soup = BeautifulSoup(res.text, 'html.parser')
# print(
#     soup.find_all('span', {'class': 'composition-list__player-last-name'})
# )
# name_first = soup.find_all(
#     'span', {'class': 'composition-list__player-first-name'})
# name_sec = soup.find_all(
#     'span', {'class': 'composition-list__player-last-name'})
# games_num = soup.find_all(
#     'span', {'class': 'composition-list__player-games-number'})
# goals_num = soup.find_all(
#     'span', {'class': 'composition-list__player-goals-number'})
players = soup.find_all('div', {'class', 'composition-list__item-back'})
images = soup.find_all('div', {'class', 'composition-list__player-photo'})
matches = soup_matches.find_all(
    'li', {'class', 'schedule__matches-item js-calendar-match js-calendar-last-match'})
images = [img['src'] if 'https' in img['src'] else 'images/none.png' for img in soup.select(
    '.composition-list__player-photo > img')]
print(images)

cards_info = [player.get_text(' ', True).replace(',', '')
              for player in players]
images.pop(-1)
images.pop(-1)
images.pop(-1)
images.pop(-1)
images.pop(7)
images.pop(13)
images.pop(20)
cards_info.pop(-1)
cards_info.pop(-1)
cards_info.pop(-1)
cards_info.pop(-1)
js_cards = []
for i, card in enumerate(cards_info):
    card = card.split(' ')
    try:
        js_card = rf'<div class="card"><img src="{images[i]}" alt="Фото игрока"><p id="name">{card[5]} {card[4]}</p><p id="role">{card[6]}</p><button id="more">подробнее</button></div>'
    except:
        pass
    js_cards.append(js_card)
print(js_cards)
print(len(matches))

matches = [match.get_text(' ', True) for match in matches]
print(matches)
print(len(matches))
