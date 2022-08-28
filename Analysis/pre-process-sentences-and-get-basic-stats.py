import sys
import spacy
import numpy as np

nlp = spacy.load("en_core_web_sm")

name_prefix = str(sys.argv[1])

ifile_name = name_prefix + ".txt"
lemma_ofile_name = "lemma_" + name_prefix + ".txt"
pos_ofile_name = "pos_" + name_prefix + ".txt"

ifile=open(ifile_name,'r')

model_token_count = []
human_token_count = []

model_lemma_count = dict()
human_lemma_count = dict()

model_pos_count = dict()
human_pos_count = dict()

lemma_set = set()
pos_set = set()

intersection_over_union = []

lines=ifile.readlines()

caption_count = 0



for line in lines:
    
   
    caption_count = caption_count + 1
    current_line_fields = line.strip().split('\t')
    
    model_caption = nlp(current_line_fields[3])
    human_caption = nlp(current_line_fields[4])

    model_valid_lemmas = set()
    human_valid_lemmas = set()

    model_local_token_count = 0
    human_local_token_count = 0
    
    for token in model_caption:
        pos = token.pos_
        if (pos == "SPACE"):
            continue
        model_local_token_count = model_local_token_count + 1
        lemma = token.lemma_
        lemma_set.add(lemma)
        pos_set.add(pos)
        model_lemma_count[lemma] = model_lemma_count.get(lemma, 0) + 1
        model_pos_count[pos] = model_pos_count.get(pos, 0) + 1
        if (not(pos=="PUNCT" or token.is_stop)):
            model_valid_lemmas.add(lemma)

    for token in human_caption:
        pos = token.pos_
        if (pos == "SPACE"):
            continue
        human_local_token_count = human_local_token_count + 1
        lemma = token.lemma_
        lemma_set.add(lemma)
        pos_set.add(pos)
        human_lemma_count[lemma] = human_lemma_count.get(lemma, 0) + 1
        human_pos_count[pos] = human_pos_count.get(pos, 0) + 1
        if (not(pos=="PUNCT" or token.is_stop)):
            human_valid_lemmas.add(lemma)

    model_token_count.append(model_local_token_count)
    human_token_count.append(human_local_token_count)
    
    intersection_over_union.append(len(model_valid_lemmas & human_valid_lemmas) / len(model_valid_lemmas | human_valid_lemmas))

print("total captions: " + str(caption_count))
print("model sent length: " + str(np.mean(model_token_count)) + " (" + str(np.std(model_token_count)) + ")")
print("human sent length: " + str(np.mean(human_token_count)) + " (" + str(np.std(human_token_count)) + ")")
print("IOU: " + str(np.mean(intersection_over_union)) + " (" + str(np.std(intersection_over_union)) + ")")

f = open(lemma_ofile_name, 'w')

for lemma in lemma_set:
    model_lemma_count[lemma] = model_lemma_count.get(lemma, 0) + 0
    human_lemma_count[lemma] = human_lemma_count.get(lemma, 0) + 0

    out_line = lemma + "\t" + str(model_lemma_count[lemma]) + "\t" + str(human_lemma_count[lemma]) + "\n"
    f.write(out_line)

f.close()

f = open(pos_ofile_name, 'w')

for pos in pos_set:
    model_pos_count[pos] = model_pos_count.get(pos, 0) + 0
    human_pos_count[pos] = human_pos_count.get(pos, 0) + 0

    out_line = pos + "\t" + str(model_pos_count[pos]) + "\t" + str(human_pos_count[pos]) + "\n"
    f.write(out_line)

f.close()
