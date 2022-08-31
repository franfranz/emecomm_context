#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
"""
import pandas as pd

df = pd.read_table("../files/human_data_final.tsv", index_col=0)

acc_human_on_human = len(df.loc[df['acc annot on human'] == 1]) / len(df)
acc_human_on_model = len(df.loc[df['acc annot on model'] == 1]) / len(df)

print("Accuracy humans on human captions:", acc_human_on_human)
print("Accuracy humans on neural captions:", acc_human_on_model)
