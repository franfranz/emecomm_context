

library(pryr)

rm(list=ls())


# generate graphs for coco captions

inwd = "C:\\Data\\ALiEN\\contextual_emecomm\\COCO_captions"
graphwd = "C:\\Data\\ALiEN\\contextual_emecomm\\COCO_captions\\coco_graphs"

# input file names
lemma_coco_file = "lemma_coco_interaction.txt"
pos_coco_file = "pos_coco_interaction.txt"

# column names
lemmacols = list("word", "model", "human")
poscols = list ("pos", "model", "human")


#
# graphical settings

# colors
col_pal_02= cartography::carto.pal("green.pal", n1=4)
# use orange palette for coco
col_pal_01= cartography::carto.pal("orange.pal", n1=4)

# axes limits (y)
yax_lim_01 = c(0, 0.5)


#
# lemma captions
#
setwd(inwd)
datcoco_lemma0 = readr::read_table(lemma_coco_file)

datcoco_lemma = as.data.frame(datcoco_lemma0)
colnames(datcoco_lemma) = lemmacols




#
# split sets and discard zero: human 

datcoco_lemma_nozero_hum = datcoco_lemma[datcoco_lemma$human > 0, ]
coco_type_counts_hum = length(datcoco_lemma_nozero_hum$word)

# order
datcoco_lemma_nozero_hum_ord = datcoco_lemma_nozero_hum[order(datcoco_lemma_nozero_hum$human, decreasing = T), ]

# 
datcoco_lemma_nozero_hum_table = table(datcoco_lemma_nozero_hum$human)
datcoco_lemma_nozero_hum_table_df = as.data.frame(datcoco_lemma_nozero_hum_table)
colnames(datcoco_lemma_nozero_hum_table_df) = list("Counts", "Freq")

# check count
sum(datcoco_lemma_nozero_hum_table_df$Freq) == coco_type_counts_hum

# -normalized frequency (on total type counts)
datcoco_lemma_nozero_hum_table_df$Props_human = prop.table(datcoco_lemma_nozero_hum_table_df$Freq)


#
# split sets and discard zero: model 

datcoco_lemma_nozero_mod = datcoco_lemma[datcoco_lemma$model > 0, ]
coco_type_counts_mod = length(datcoco_lemma_nozero_mod$word)

# order
datcoco_lemma_nozero_mod_ord = datcoco_lemma_nozero_mod[order(datcoco_lemma_nozero_mod$model, decreasing = T), ]

# 
datcoco_lemma_nozero_mod_table = table(datcoco_lemma_nozero_mod$model)
datcoco_lemma_nozero_mod_table_df = as.data.frame(datcoco_lemma_nozero_mod_table)
colnames(datcoco_lemma_nozero_mod_table_df) = list("Counts", "Freq")

# check count
sum(datcoco_lemma_nozero_mod_table_df$Freq) == coco_type_counts_mod

# normalized frequency (on total type counts)
datcoco_lemma_nozero_mod_table_df$Props_model = prop.table(datcoco_lemma_nozero_mod_table_df$Freq)

#
# merge
#all_vid_props_lemma = merge(datvid_lemma_nozero_hum_table_df, datvid_lemma_nozero_mod_table_df, all.x = T) 

coco_prop_lemma=merge(datcoco_lemma_nozero_hum_table_df[, c("Counts", "Props_human")], 
                     datcoco_lemma_nozero_mod_table_df[, c("Counts", "Props_model")], 
                     by.x = "Counts",
                     by.y = "Counts",
                     all.x = T)
rownames(coco_prop_lemma) = coco_prop_lemma$Counts
coco_prop_lemma$Counts=NULL
coco_prop_lemma = as.matrix(coco_prop_lemma)



# plot
mygraph_lemmas_all_coco_prop %<a-% {
barplot(t(coco_prop_lemma), 
        beside = T, 
        main = "Proportion of types \n in human and neural captions",
        ylab = "", 
        xlab = "Type Count",
        ylim = yax_lim_01,
        col = col_pal_01[c(1,3)],
        border = col_pal_01[c(1,3)],
        #horiz=T
  )

  legend("topright", 
         legend = c("Human", "Neural"), 
         fill = col_pal_01[c(1,3)], bty = "n",
         cex=1.2
  )  
}

mygraph_lemmas_all_coco_prop

  
# plot: top 20 frequency bands

coco_prop_lemma_top20 = head(coco_prop_lemma, 20)

mygraph_lemmastop20_coco_prop %<a-% {
  barplot(t(coco_prop_lemma_top20), 
          beside = T, 
          #main = "Lemma frequency spectrum in human and neural captions",
          ylab = "", 
          xlab = "Type Count",
          ylim = yax_lim_01,
          col = col_pal_01[c(1,3)],
          border = col_pal_01[c(1,3)]
  )
  
  legend("topright", 
         legend = c("Human", "Neural"), 
         fill = col_pal_01[c(1,3)], bty = "n",
         cex=1.2
  )  
}


#
# pos, in alphabetical order
#

setwd(inwd)
datcoco_pos0 = readr::read_table(pos_coco_file)

datcoco_pos = as.data.frame(datcoco_pos0)
colnames(datcoco_pos) = poscols


datcoco_pos_aord = datcoco_pos[order(datcoco_pos$pos), ]

# discard row marked as X?
datcoco_pos_aord = datcoco_pos_aord[c(1:14), ]

prop_pos_coco_hum_aord=as.matrix(prop.table(datcoco_pos_aord$human))
prop_pos_coco_mod_aord=as.matrix(prop.table(datcoco_pos_aord$model))

prop_pos_coco_aord=cbind(prop_pos_coco_hum_aord, prop_pos_coco_mod_aord)

rownames(prop_pos_coco_aord) = datcoco_pos_aord$pos

mygraph_pos_coco_props_all %<a-% {
  barplot(t(prop_pos_coco_aord), 
          beside = T, 
          col = col_pal_01[c(1,3)],
          border = col_pal_01[c(1,3)],
          las =3, 
          ylim= yax_lim_01,
          #  main = " Part-of-Speech frequency distribution in human and neural captions"
  )
  
  
  legend("topright", 
         legend = c("Human", "Neural"), 
         fill = col_pal_01[c(1,3)], bty = "n",
         cex=1.2
  ) 
}



# INPUT REQUIRED: paths
# 

# and generate a vector collecting the name of the graphs to plot
complete_graphlist=ls()[grep(("mygraph"), ls())]

# choose the plots you would like to print/save
graphlist=complete_graphlist #[c(1,3)]


# set directory 
setwd(graphwd)


# INPUT REQUIRED: choose graphical settings:
#
# size of output images: uncomment your preference 

#imagesize= "small" # gset1, for small, low-quality portable images
imagesize= "medium" # gset2, average 
#imagesize= "big" # gset3 is high-res raster image (for poster printing)

g_type="cairo" 
g_units="px" 

# gset 1 
g1_width=600 
g1_height=600 
g1_pointsize=12 
g1_res=100
rescom1=png
resext_1=".png"

# gset 2 
g2_width=1200 
g2_height=800 
g2_pointsize=9 
g2_res=200
rescom2=jpeg
resext_2=".jpeg"

# gset 3 
g3_width=2400 
g3_height=2400 
g3_pointsize=10 
g3_res=800
rescom3=tiff
resext_3=".tiff"

if (imagesize=="small"){
  g_width=  g1_width
  g_height= g1_height 
  g_pointsize= g1_pointsize 
  g_res= g1_res
  rescom=rescom1
  resext=resext_1
} else if (imagesize=="medium") {
  g_width=  g2_width
  g_height= g2_height 
  g_pointsize= g2_pointsize 
  g_res= g2_res
  rescom=rescom2
  resext=resext_2
} else if (imagesize=="big") {
  g_width=  g3_width
  g_height= g3_height 
  g_pointsize= g3_pointsize 
  g_res= g3_res
  rescom=rescom3
  resext=resext_3
} else {
  print("please select image size")
}


# save all graphs as images
for (eachgraph in graphlist) {
  thename=as.character(eachgraph)
  thefilename=paste0(thename, resext)
  rescom(filename=thefilename, 
         type=g_type, 
         units=g_units, 
         width=g_width, 
         height=g_height, 
         pointsize=g_pointsize, 
         res=g_res
  )
  eval(str2lang(eachgraph))
  dev.off()
}



