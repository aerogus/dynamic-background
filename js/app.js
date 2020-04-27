/**
 * Background dynamique
 */

// 4 couleurs, codé en RGV décimal
const colors = new Array(
  [255, 255, 255],
  [ 53,  6,   11],
  [  0,  0,    0],
  [ 0,  62,   75]
);

const alpha = .5;

// nombre d'images par seconde voulu
const frameRate = 60;
// intervalle entre chaque calcul
const refresh = 1000 / frameRate;

// color table indices for: 
const colorIndices = [
  0, // current color left
  1, // next color left
  2, // current color right
  3  // next color right
];

// transition speed
const gradientSpeed = 0.002;

let step = 0;

function updateGradient()
{
  let c0_0 = colors[colorIndices[0]];
  let c0_1 = colors[colorIndices[1]];
  let c1_0 = colors[colorIndices[2]];
  let c1_1 = colors[colorIndices[3]];

  let istep = 1 - step;
  let r1 = Math.round(istep * c0_0[0] + step * c0_1[0]);
  let g1 = Math.round(istep * c0_0[1] + step * c0_1[1]);
  let b1 = Math.round(istep * c0_0[2] + step * c0_1[2]);
  let color1 = `rgba(${r1},${g1},${b1},${alpha})`;

  let r2 = Math.round(istep * c1_0[0] + step * c1_1[0]);
  let g2 = Math.round(istep * c1_0[1] + step * c1_1[1]);
  let b2 = Math.round(istep * c1_0[2] + step * c1_1[2]);
  let color2 = `rgba(${r2},${g2},${b2},${alpha})`;

  $('#background').css({background: `linear-gradient(90deg,${color1},${color2})`});

  step += gradientSpeed;
  if (step >= 1) {
    step %= 1;
    colorIndices[0] = colorIndices[1];
    colorIndices[2] = colorIndices[3];

    // pick two new target color indices
    // do not pick the same as the current one
    colorIndices[1] = (colorIndices[1] + Math.floor(1 + Math.random() * (colors.length - 1))) % colors.length;
    colorIndices[3] = (colorIndices[3] + Math.floor(1 + Math.random() * (colors.length - 1))) % colors.length;
  }
}

setInterval(updateGradient, refresh);

/**
 * passage en plein écran avec la touche Entrée
 */
document.addEventListener("keydown", (e) => {
  if (e.keyCode == 13) {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen(); 
      }
    }
  }
}, false);
