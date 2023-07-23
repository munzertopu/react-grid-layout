export const setType =
  ({ key, value, item }) =>
  (dispatch) => {
    dispatch({
      type: "SET_TYPE",
      payload: { key, value, item },
    });
  };

export const setTitle =
  ({ key, value, item }) =>
  (dispatch) => {
    dispatch({
      type: "SET_TITLE",
      payload: { key, value, item },
    });
  };

export const setData =
  ({ key, value, item }) =>
  (dispatch) => {
    dispatch({
      type: "SET_DATA",
      payload: { key, value, item },
    });
  };

export const setLayout = (layout, root) => (dispatch, getState) => {
  dispatch({
    type: "SET_LAYOUT",
    payload: { layout, root, breakpoint: getState().breakpoint },
  });
};

export const setBreakPoint = (breakpoint) => (dispatch) => {
  console.log(breakpoint);
  dispatch({
    type: "SET_BREAKPOINT",
    payload: breakpoint,
  });
};
export const addData = (key, value) => (dispatch) => {
  dispatch({
    type: "ADD_DATA",
    payload: { key, value },
  });
};
export const removeData = (key) => (dispatch) => {
  dispatch({
    type: "REMOVE_DATA",
    payload: { key },
  });
};
export const addNewLayouts = (breakpoint, layouts) => (dispatch) => {
  console.log("LAYOUTSSSS", layouts);
  dispatch({
    type: "ADD_NEW_LAYOUTS",
    payload: { breakpoint, layouts },
  });
};
export const setLayouts = (breakpoint, layouts) => (dispatch) => {
  console.log("LAYOUTSSSS", layouts);
  dispatch({
    type: "SET_NEW_LAYOUTS",
    payload: { breakpoint, layouts },
  });
};
