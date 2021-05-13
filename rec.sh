#!/usr/bin/env bash

##
# Enregistre l'écran 0 en full HD pendant 5 minutes
##

mkdir export

ffmpeg -t 00:05:00 \
  video_size 1920x1080 \
  -framerate 25 \
  -f avfoundation \
  -pix_fmt uyvy422 \
  -i "0:" \
  -pix_fmt yuv420p \
  -r 25 \
  -s 1280x720 \
  -c:v libx264 \
  -crf 18 \
  ./export/dynamic-background.mkv

