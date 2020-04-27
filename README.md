# Fond d'écran dynamique

Voici un projet de fond d'écran dynamique paramétrable, utilisable pour vos sites web ou pour faire un joli habillage pour vos streams.

## Installation

Juste une dépendance pour la conversion sass -> css

```
npm install
```

## Paramétrage du gradient dynamique

Choix des couleurs en modifiant `js/app.js`

```
var colors = new Array(
  [240, 223, 92],
  [247, 153, 95],
  [243, 133, 57],
  [159,  80, 25]
);
```

(mini 4 couleurs, format RGB, en décimal)

## Paramétrage des blobs

Choix des couleurs en modifiant `css/app.scss`
```
// couleurs des blobs
// fetestival 2020
$colors: (
  #020714,
  #fba361,
  #ef7643
);
```

Le nombre de blobs dépend du nombre de `<span>` enfants de `<div id="background">`

## Construction

```
npm run scss-build
```

## Export en vidéo

L'animation prenant pas mal de temps CPU, on peut la précalculer en fichier video statique sans perte de qualité visible.
Pour cela on lance l'animation en plein écran avec son navigateur sur l'écran "1" et on exécute la commande :

```
ffmpeg -video_size 1920x1080 -framerate 60 -f avfoundation -pix_fmt uyvy422 -i "1:" -r 25 -s 1280x720 -c:v libx264 -crf 0 -preset ultrafast dynamic-background.mkv
```

