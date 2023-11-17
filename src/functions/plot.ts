export const default_margin = () => {
  return {
    t: 40, //top margin
    l: 20, //left margin
    r: 20, //right margin
    b: 20, //bottom margin
  };
};

export const default_config = ():any => {
  return {
    displaylogo: false,
    modeBarButtonsToRemove: [
      "zoom2d",
      "pan2d",
      "autoScale2d",
      "zoomIn2d",
      "zoomOut2d",
      "resetScale2d",
    ],
  };
};
