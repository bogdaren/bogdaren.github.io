import requests
import pytest

URL = 'https://api.pokemonbattle.me/v2'
TOKEN = '582dc01f69323f6a0a0ce4ce9b2eef91'
HEADERS = {'Content-Type' : 'application/json', 'trainer_token' : TOKEN}

def test_status_code():
    respone = requests.get(url = f'{URL}/trainers', params = {"trainer_id" : 332 })
    assert respone.status_code == 200