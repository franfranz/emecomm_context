#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
"""
import pandas as pd
import os
import scipy
import numpy as np


# FIRST SERIE OF ANNOTATIONS

files = []
dir_ = os.listdir("../annotations/")
dir_ = [i for i in dir_ if "clipclap" in i]

dir_ = sorted(dir_, key=lambda x:int(x.split("clipclap")[1]))
dont = ["PARTICIPANT_annotation_2022-06-16_04h16.08.481.csv"] # visually saw that it was not good. Folder clipclap33

# select files where annotators saw the checks
for num,i in enumerate(dir_, 1):
    folder = "../annotations/"+i
    this_batch_files = []    
    counter_good_files = 0
    
    for file_ in os.listdir(folder):
        counter_checks = 0
        data = pd.read_csv(folder + "/" + file_)
        if file_ not in dont:
            # count checks seen
            check_reply = data.loc[data['is_check'] == 1.0]['mouse.clicked_name'].tolist()
            check_real = data.loc[data['is_check'] == 1.0]['target_idx'].tolist()
            for x in list(zip(check_reply, check_real)):
                if float(x[0].split("image_")[1]) == x[1]:
                    counter_checks += 1
            # if saw more than 4 checks
            if counter_checks >= 4:
                counter_good_files += 1
                if len(data) == 64:
                    data = data.drop([63]) # empty row
                else:
                    data = data
                    assert len(data) == 63, "weird!"
                this_batch_files.append([file_, data])
        else:
            pass
    if this_batch_files != []:
        files.append([i, this_batch_files])
    #print(num, i, file_, counter_good_files)


files2 = []
for i in files:
    for j in i[1]:
        files2.append([i[0], j[0], j[1]])
        

files3 = []
for name, name2, file_ in files2:
    file_ = file_[file_['is_check'] != 1.0]
    clicked = []
    for line in file_['mouse.clicked_name']:
        clicked.append(float(line.split("image_")[1]))
    file_['cleaned_guess'] = clicked
    files3.append([name, name2, file_])
   

files4 = []
for name, name2, file_ in files3:
    tmp = []
    f = list(zip(file_['cleaned_guess'], file_['target_idx']))
    for i in f:
        if i[0] == i[1]:
            tmp.append(1)
        else:
            tmp.append(0)
    file_['human_guessed'] = tmp
    files4.append([name, name2, file_])
    

# compute accuracies per file
accuracies = []
for name, name2, file_ in files4:
    den = len(file_.loc[file_['class_caption'] == "H"])
    num = len(file_.loc[(file_['human_guessed'] == 1) & (file_['class_caption'] == "H")])
    print(name, name2, num/den)
    accuracies.append(num/den)


# we remove annotators with accuracy lower than a threshold
# after the first round of annotations, the threschold was computed as:
# threshold = np.mean(accuracies) - np.std(accuracies)
# and was:
threshold = 0.22401052864849363

for name, name2, file_ in files3:
    den = len(file_.loc[file_['class_caption'] == "H"])
    num = len(file_.loc[(file_['human_guessed'] == 1) & (file_['class_caption'] == "H")])
    acc = num/den
    if acc < threshold:
        dont.append(name2)

#___________________________

# SECOND SERIE OF ANNOTATIONS


new_ann = ["PARTICIPANT_annotation_2022-06-17_09h50.48.427.csv", 
           "PARTICIPANT_annotation_2022-06-17_06h36.40.262.csv", 
           "PARTICIPANT_annotation_2022-06-17_09h38.37.309.csv",
           "PARTICIPANT_annotation_2022-06-17_10h03.38.865.csv",
           "PARTICIPANT_annotation_2022-06-17_09h18.36.754.csv", 
           "PARTICIPANT_annotation_2022-06-17_10h27.39.700.csv", 
           "PARTICIPANT_annotation_2022-06-17_13h24.40.444.csv",
           "PARTICIPANT_annotation_2022-06-17_11h33.56.685.csv",
           "PARTICIPANT_annotation_2022-06-17_11h32.36.973.csv",
           "PARTICIPANT_annotation_2022-06-18_05h56.31.916.csv",
           "PARTICIPANT_annotation_2022-06-18_11h47.42.182.csv",
           "PARTICIPANT_annotation_2022-06-18_09h44.51.987.csv"]


files = []
dir_ = os.listdir("../annotations/")
dir_ = [i for i in dir_ if "clipclap" in i]

dir_ = sorted(dir_, key=lambda x:int(x.split("clipclap")[1]))


for num,i in enumerate(dir_, 1):
    folder = "../annotations/"+i   
    counter_good_files = 0
    for file_ in os.listdir(folder):
        counter_checks = 0
        data = pd.read_csv(folder + "/" + file_)
        if file_ not in dont and file_ in new_ann:
            # count checks seen
            check_reply = data.loc[data['is_check'] == 1.0]['mouse.clicked_name'].tolist()
            check_real = data.loc[data['is_check'] == 1.0]['target_idx'].tolist()
            for x in list(zip(check_reply, check_real)):
                if float(x[0].split("image_")[1]) == x[1]:
                    counter_checks += 1
            # if saw more than 4 checks
            if counter_checks >= 4:
                counter_good_files += 1
                if len(data) == 64:
                    data = data.drop([63]) # empty row
                else:
                    data = data
                    assert len(data) == 63, "weird!"
                files.append([file_, data])
        else:
            pass
    #print(num, i, file_, counter_good_files)


files3 = []
for name, file_ in files:
    file_ = file_[file_['is_check'] != 1.0]
    clicked = []
    for line in file_['mouse.clicked_name']:
        clicked.append(float(line.split("image_")[1]))
    file_['cleaned_guess'] = clicked
    files3.append([name, file_])
   

files4 = []
for name, file_ in files3:
    tmp = []
    f = list(zip(file_['cleaned_guess'], file_['target_idx']))
    for i in f:
        if i[0] == i[1]:
            tmp.append(1)
        else:
            tmp.append(0)
    file_['human_guessed'] = tmp
    files4.append([name, file_])
    


for name, file_ in files4:
    den = len(file_.loc[file_['class_caption'] == "H"])
    num = len(file_.loc[(file_['human_guessed'] == 1) & (file_['class_caption'] == "H")])
    acc = num/den
    print(name, num/den)
    if acc < threshold:
        dont.append(name)
    else:
        pass


# we save in a file the low quality annotations
with open("lower_than_threshold.txt", "w") as out:
    for i in dont:
        out.write(i + "\n")

    
    
    
    
