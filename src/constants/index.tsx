export const widthFactor: number = window.screen.width / 375;
export const heightFactor: number = window.screen.height / 860;

// export const scaleFactor = window.orientation == 0 ? heightFactor : widthFactor;

// export const scale: number = window.orientation
//   ? window.screen.height * scaleFactor
//   : window.screen.width * scaleFactor;

export const scaleFactor = window.orientation === 0 ? heightFactor : widthFactor;

export const scale: number = window.orientation===0
  ? window.screen.height * scaleFactor
  : window.screen.width * scaleFactor;

export const getNumber: Function = (num: number) =>
  window.orientation === 0 ? `${num}vw` : `${num}vh`;

export const getFont: Function = (fontsize: number) =>
  `${fontsize * scaleFactor}%`;
