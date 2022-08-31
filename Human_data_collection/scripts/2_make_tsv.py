#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Script to generate the tsv file to explore examples
"""
import pandas as pd

# load files
file_ = open("../files/img_clipclap_coco_transf_frozen_gpt.txt").read().split("\n")
file_ = [i.split("\t") for i in file_]
del file_[2302]

df_ann = pd.read_csv("../files/human_data_merged.csv", index_col = 0)


# name existing columns and add useful ones
df_original = pd.DataFrame(file_, columns = ["acc model caption", "acc human caption", 
                                    "is_video", "model caption", "human caption", 
                                    "img_set", "target_idx"])


hum = list(zip(df_original['human caption'], df_original['target_idx'], df_original['img_set'], df_original['acc human caption']))
mod = list(zip(df_original['model caption'], df_original['target_idx'], df_original['img_set'], df_original['acc model caption']))


df_ann = df_ann[df_ann["is_check"] == 0]
df_mod = df_ann[df_ann['class_caption'] == "M"]
df_hum = df_ann[df_ann['class_caption'] == "H"]


acc_mod = []
for cap, tar, set_ in list(zip([i for i in df_mod['caption']],
                               [i for i in df_mod['target_idx']], 
                               [i for i in df_mod['image_set']])):
    for j in mod:
        if j[0] == cap and float(j[1]) == tar and j[2] == set_:
            acc_mod.append(int(j[3]))
assert len(acc_mod) == len(df_mod), "weird!"     

   
   
acc_hum = []
for cap, tar, set_ in list(zip([i for i in df_hum['caption']],
                               [i for i in df_hum['target_idx']], 
                               [i for i in df_hum['image_set']])):
    for j in hum:
        if j[0] == cap and float(j[1]) == tar and j[2] == set_:
            acc_hum.append(int(j[3]))
assert len(acc_hum) == len(df_hum), "weird!"  


df_ann2 = pd.concat([df_hum, df_mod])
df_ann2['model_guessed'] = acc_hum + acc_mod

assert len(df_ann2) == 2088, "mismatch!"


clicked = []
for line in df_ann2['mouse.clicked_name']:
    clicked.append(float(line.split("image_")[1]))
df_ann2['cleaned_guess'] = clicked

human_got = []
for i in list(zip(df_ann2['cleaned_guess'], df_ann2['target_idx'])):
    if i[0] == i[1]:
        human_got.append(1)
    else:
        human_got.append(0)
df_ann2['human_guessed'] = human_got



acc_hum_hum = []
acc_hum_mod = []
for hum, mod, tar, set_ in list(zip(df_original['human caption'], 
                df_original['model caption'],
                df_original['target_idx'], 
                df_original['img_set'])):
    try:
        h = df_ann2.loc[(df_ann2['caption'] == hum) & 
                    (df_ann2['image_set'] == set_) &
                    (df_ann2['target_idx'] == float(tar)), "human_guessed"].tolist()
        if  h != []:
            acc_hum_hum.append(h)
        elif h == []:
            acc_hum_hum.append(["not annotated"])
            
        m = df_ann2.loc[(df_ann2['caption'] == mod) & 
                    (df_ann2['image_set'] == set_) &
                    (df_ann2['target_idx'] == float(tar)), "human_guessed"].tolist()
        if  m != []:
            acc_hum_mod.append(m)
        elif m == []:
            acc_hum_mod.append(["not annotated"])
    except:
        pass                               
        


df_original['acc annot on model'] = [i[0] for i in acc_hum_mod]
df_original['acc annot on human'] = [i[0] for i in acc_hum_hum]

df_original = df_original[df_original['acc annot on model'] != "not annotated"]
df_original = df_original[df_original['acc annot on human'] != "not annotated"]


# generate the tsv
df_original.to_csv("../files/human_data_final.tsv", sep = "\t")


len(df_original.loc[df_original['acc annot on human'] == 1]) / len(df_original)
len(df_original.loc[df_original['acc annot on model'] == 1]) / len(df_original)








