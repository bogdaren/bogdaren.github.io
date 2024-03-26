import requests

URL = 'https://api.pokemonbattle.me/v2'
TOKEN = '582dc01f69323f6a0a0ce4ce9b2eef91'
HEADERS = {'Content-Type' : 'application/json', 'trainer_token' : TOKEN}

# 1. Создание покемона
# 2. Смена Имени
# 3. Поймать в покебол

###########################################  CREATE POKEMON ######################################
body_create_pokemon = {
    "name": "generate",
    "photo": "generate"
}

response_create_pokemon = requests.post(url = f'{URL}/pokemons', headers = HEADERS, json = body_create_pokemon)
print(response_create_pokemon.text)

############################################## CHANGENAME POKEMON #################################################################
body_changename_pokemon = {    
    "pokemon_id": "14840",
    "name": "bogdarenchik"
}


response_changename_pokemon = requests.patch(url = f'{URL}/pokemons', headers = HEADERS, json = body_changename_pokemon)
print(response_changename_pokemon.text)

############################################## Поймать в покебол #################################################################

body_addpokeball_pokemon = {
        "pokemon_id": "14843"
}

response_addpokeball_pokemon = requests.post(url = f'{URL}/trainers/add_pokeball', headers = HEADERS, json = body_addpokeball_pokemon)
print(response_addpokeball_pokemon.text)