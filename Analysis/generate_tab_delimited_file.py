import sys

import egg
import torch
import re

m = torch.load(str(sys.argv[1]))
out_file_name = str(sys.argv[2])

f = open(out_file_name, 'w')

for i in range(len(m.aux["acc"])):
 line="0\t"
 line=line + "0\t"
 line=line + "0\t"
 line=line + m.aux_input["decoded_messages"][i] + "\t"
 #captstring = (m.aux_input["decoded_captions"][i])
 #captstring = re.sub("\n", "", captstring)
 line=line + m.aux_input["decoded_captions"][i] + "\n"
 f.write(line)

f.close()
