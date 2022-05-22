export const add = (x, y) => {
  return {
    type: "ADD",
    payload: [parseInt(x), parseInt(y)],
  };
};

export const sub = (x, y) => {
  return {
    type: "SUBTRACT",
    payload: [parseInt(x), parseInt(y)],
  };
};

export const mul = (x, y) => {
  return {
    type: "MULTIPLY",
    payload: [parseInt(x), parseInt(y)],
  };
};

export const div = (x, y) => {
  return {
    type: "DIVIDE",
    payload: [parseInt(x), parseInt(y)],
  };
};

export const sin = (x) => {
  return {
    type: "SIN",
    payload: [parseInt(x)],
  };
};

export const cos = (x) => {
  return {
    type: "COS",
    payload: [parseInt(x)],
  };
};

export const tan = (x) => {
  return {
    type: "TAN",
    payload: [parseInt(x)],
  };
};

export const exp = (x) => {
  return {
    type: "EXP",
    payload: [parseInt(x)],
  };
};

export const log = (x) => {
  return {
    type: "LOG",
    payload: [parseInt(x)],
  };
};

export const pow = (x, y) => {
  return {
    type: "POWER",
    payload: [parseInt(x), parseInt(y)],
  };
};
export const clear =()=>{
  return {
    type: "CLEAR",
    payload: [],
  };
};