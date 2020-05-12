ffmpeg -video_size 1920x1080 -framerate 25 -f avfoundation -pix_fmt uyvy422 -i "0:" -pix_fmt yuv420p -r 25 -s 1280x720 -c:v libx264 -crf 18 dynamic-background.mkv
