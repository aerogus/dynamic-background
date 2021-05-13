#!/usr/bin/env bash

##
# Génère une version bouclable de la vidéo
# en produisant une version reverse et en la concaténant à la vidéo d'origine
##

cd export

ffmpeg -i dynamic-background.mkv -vf reverse -crf 18 dynamic-background-reverse.mkv

for f in dynamic-background.mkv dynamic-background-reverse.mkv; do echo "file '$f'" >> concat.txt; done

ffmpeg -f concat -safe 0 -i concat.txt -c copy dynamic-background-loop.mkv

rm concat.txt dynamic-background-reverse.mkv

cd ..

