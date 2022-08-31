#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Script to merge one annotation per batch in a file
"""

import pandas as pd
import os
import random
random.seed(9)


files = []
dir_ = os.listdir("../annotations")
dir_ = [i for i in dir_ if "clipclap" in i]
assert len(dir_) == 36, "wrong folder!"

dir_ = sorted(dir_, key=lambda x:int(x.split("clipclap")[1]))

# load file of annotators that had accuracy on human lower than our threshold to exclude them
dont = [i for i in open("../files/lower_than_threshold.txt").read().split("\n") if i != '']


# exclude files where annotators did not see the attention checks 
for num,i in enumerate(dir_, 1):
    folder = "../annotations/"+i
    this_batch_files = []    
    counter_good_files = 0
    
    for file_ in os.listdir(folder):
        counter_checks = 0
        data = pd.read_csv(folder + "/" + file_)
        if file_ not in dont:
            check_reply = data.loc[data['is_check'] == 1.0]['mouse.clicked_name'].tolist()
            check_real = data.loc[data['is_check'] == 1.0]['target_idx'].tolist()
            for x in list(zip(check_reply, check_real)):
                if float(x[0].split("image_")[1]) == x[1]:
                    counter_checks += 1
            if counter_checks >= 4:
                counter_good_files += 1
                if len(data) == 64:
                    data = data.drop([63]) # empty row
                else:
                    data = data
                    assert len(data) == 63, "weird!"
                this_batch_files.append(data)
        else:
            pass
    if this_batch_files != []:
        files.append([i, this_batch_files])


# random sample one annotation per batch when multiple valid
sampled_files = []
for name,i in files:
    if len(i) >1:
        sampled_files.append([name, random.sample(i, 1)[0]])
    else:
        sampled_files.append([name, i[0]])


# save all the annotation batches in one file
ann_df = pd.concat([i[1] for i in sampled_files])
ann_df.to_csv("../files/human_data_merged.csv")

