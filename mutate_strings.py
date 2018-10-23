import json
import random
import string

# Method to change N characters from a string with random characters.
def changemorechars(s, chars, nchanges=2):
    length = len(s)
    word = list(s)

    remaining_chars = [ i for i in range(length) if i not in chars ]

    # This will select the two distinct index for us to replace
    k = random.sample(remaining_chars, nchanges)
    for index in k:
    	if word[index] not in ['\n','·',' ','.',',']:
	        # This will replace the characters at the specified index with 
	        # the generated characters
	        word[index] = random.choice(string.ascii_lowercase)
    # Finally print the string in the modified format.
    new_word = "".join(word)
    done_chars = chars + list(k)

    return new_word, done_chars

# Get the string to be modified
string_to_modify = "pes·qui·sar 1. v.int. Estudar algo detalhadamente,\nbuscando descobrir nova informação ou um novo\nentendimento. 2. v.int e v.td. Indagar, investigar, \nbuscar cuidadosamente. Procurar com diligência."

chars_list = []
all_mutations = [ string_to_modify ]
for i in range(16):
	new_word, done_chars = changemorechars(string_to_modify, chars_list, nchanges=4)
	all_mutations += [ new_word ]
	string_to_modify = new_word
	chars_list = done_chars

with open('all_mutations.json','w') as f:
	json.dump(all_mutations,f)


# Method to change N characters from a string with random characters.
def randomlyChangeNChar(word, value):
    length = len(word)
    word = list(word)
    # This will select the two distinct index for us to replace
    k = random.sample(range(0,length),value)
    for index in k:
        # This will replace the characters at the specified index with 
        # the generated characters
        word[index] = random.choice(string.ascii_lowercase)
    # Finally print the string in the modified format.
    return "" . join(word)

# Get the string to be modified
string_to_modify = "pesquisei"

# n_range = [0]
# for i in range(1,9):
# 	n_range += [i]*2

n_range = [0, 1,1,1,1, 2,2,2,2, 3,3,3,3, 4,4,4,4 ]	

# Function to replace 'n' characters at random
all_pesquisei = [ randomlyChangeNChar(string_to_modify, n) for n in n_range ]

with open('all_pesquisei.json','w') as f:
	json.dump(all_pesquisei,f)