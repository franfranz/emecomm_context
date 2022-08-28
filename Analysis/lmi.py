import sys
import numpy as np

tot_freq_corpus_1 = int(sys.argv[1])
tot_freq_corpus_2 = int(sys.argv[2])
name = str(sys.argv[3])

log_N = np.log(tot_freq_corpus_1 + tot_freq_corpus_2)
log_corpus1 = np.log(tot_freq_corpus_1)
log_corpus2 = np.log(tot_freq_corpus_2)

ifile_name = name
ofile_name = "lmi_" + name 

ifile=open(ifile_name,'r')

lines=ifile.readlines()

f = open(ofile_name, 'w')

for line in lines:
    i_fields = line.strip().split('\t')
    count1 = int(i_fields[1])
    count2 = int(i_fields[2])
    if count1 == 0:
        log_count1 = 0
    else:
        log_count1 = np.log(count1)
    if count2 == 0:
        log_count2 = 0
    else:
        log_count2 = np.log(count2)
    count12 = count1+count2
    
    lmi1 = count1 *  (log_count1 + log_N - np.log(count12) - log_corpus1)
    lmi2 = count2 *  (log_count2 + log_N - np.log(count12) - log_corpus2)

    outline = i_fields[0] + "\t" + str(count1) + "\t" + str(lmi1) + "\t" + str(count2) + "\t" + str(lmi2) + "\n"
    f.write(outline)

f.close()
