export const default_margin = () => {
  return {
    t: 40, //top margin
    l: 50, //left margin
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

export const dark_layout = ():any=>{
  return {
    paper_bgcolor: "#1C2127",
    plot_bgcolor: "#1C2127",
    font: {
      color: "white",
    },
    xaxis: {
      color: "white",
      linecolor: "#404854",
      zerolinecolor: "#404854",
    },
    yaxis: {
      color: "white",
      linecolor: "#383E47",
      zerolinecolor: "#383E47",
    },

    dragmode: false,
    showlegend: false,
  }
}