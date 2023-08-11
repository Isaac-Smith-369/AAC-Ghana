import os
import shutil

# load files

# Main, feeling, colors, food, toys, veges, fruit, verbs, places, words, clothes, numbers, letters, people

# create a ts file

# delete unwanted files

# Categories
categories = {
    "Main": [],
    "Food": ["pizza", "bread", "cheese", "milk", "cake", "glass_of_water", "butter", "rice", "ice_cream", "chocolate", "egg", "soup", "chicken"],
    "Toys": ["ball", "computer", "mobile_phone", "teddy_bear", "doll", "cubes", "hoop", "board_game", "cards", "lego", "toy_car", "baloon", "puzzle", "bike", "tetris"],
    "Verbs": ["to_do", "to_ask", "to_dress", "to_drink", "to_eat", "to_go", "to_listen", "to_play", "to_sleep", "to_talk", "to_cook", "to_enter", "to_mix", "to_throw"],
    "Words": ["and", "or", "but", "although", "with", "without", "another", "the", "of", "to", "large", "medium", "small", "how"],
    "Fruits": ["apple", "banana", "strawberry", "cherry", "grapes", "grapefruit", "kiwi", "lemon", "watermelon", "orange", "olive", "pinapple", "pear", "peach", "berries"],
    "People": ["i", "he", "they", "mother", "father", "me", "she", "teacher", "sister", "brother", "you", "us", "we", "grandmother", "grandfather"],
    "Colors": ["red", "black", "white", "blue", "green", "purple", "brown", "pink", "grey", "dark_blue", "darl_green", "yellow", "orange"],
    "Places": ["home", "school", "zoo", "sea", "store", "park", "bathroom", "library", "cinema", "museum", "restaurant", "mall", "class", "swimming", "clinic"],
    "Clothes": ["trousers", "sweat_shirt", "shorts", "t_shirt", "socks", "shoes", "cap", "baseball_cap", "coat", "panties", "glasses", "sun_glasses", "scarf"],
    "Feeling": ["happy", "love", "sad", "suprised", "angry", "curious", "embarassed", "bore", "afraid", "ill", "hot", "cold"],
    "Numbers": ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"],
    "Letters": ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
    "Vegetables": ["avocado", "aubergine", "cucumber", "carrot", "celery", "cabbage", "green_pepper", "red_pepper", "tomato", "garlic", "corn", "potato"],
}

category_keys = list(categories.keys())

# Paths
parent_symbol_folder = 'C:/Users/isaac/Desktop/commTech/assets/EN-symbols'
symbol_folder = 'C:/Users/isaac/Desktop/commTech/assets/Symbols'

# Scan a directory
def scan_folder(path: str):
    for r, d, f in os.walk(path):
        return r, d, f

# Delete unwanted files from folder
def delete_unwanted_folders(path, key_word):
    root, dir, files = scan_folder(path)
    for f in files:
        if key_word in f:
            print(f"Removing {f}")
            os.remove(os.path.join(root, f))

# Create new folders for the categories in symbol folder
def create_category_folder(path: str):
    if not os.path.isdir(path):
        os.makedirs(path)

# Fill the category folders with the appropriate symbols
def populate_categories():
    for cat in category_keys:
        path = f"{symbol_folder}/{cat}"
        if os.path.isdir(path):
            for _, _, files in os.walk(parent_symbol_folder):
                for cat_item in categories[cat]:
                    for svg_file in files:
                        if cat_item in svg_file and len(svg_file) < (len(cat_item) + 5):
                            if cat_item in ["Letters", "People", "Words"]:
                                continue
                            # print(f"Found a match: {svg_file}")
                            src = f"{parent_symbol_folder}/{svg_file}"
                            dst = f"{symbol_folder}/{cat}"
                            if not os.path.isfile(f"{dst}/{svg_file}"):
                                shutil.copy2(src, dst)
                                # print("Copied file successfully")
                            else:
                                print(f"import {svg_file.capitalize().removesuffix('.svg')} from '../assets/Symbols/{cat}/{svg_file}'")
                                # print("File already exists")


def create_array_of_symbols(cat: str):
    arr = []
    r, d, f = scan_folder(f"{symbol_folder}/{cat}")
    for symbol in f:
        obj = symbol.capitalize().removesuffix(".svg")
        s = f"{obj}:{obj}({{width: w, height: h}})"
        arr.append(s)
    print(arr)



def create_categories():
    for cat in category_keys:
        create_category_folder(f"{symbol_folder}/{cat}")

def run():
    # populate_categories()
    for i in range(len(category_keys)):
        create_array_of_symbols(category_keys[i])


if __name__ == "__main__":
    run()