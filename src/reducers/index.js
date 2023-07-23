import initialState from "./initialState";

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "SET_TITLE":
    case "SET_DATA":
    case "SET_TYPE": {
      const { key, value, item } = action.payload;
      return {
        ...state,
        data: {
          ...state.data,
          [key]: {
            ...state.data[key],
            [item]: value,
          },
        },
      };
    }

    case "SET_LAYOUT": {
      const { layout, root, breakpoint } = action.payload;
      const index = state.layouts[breakpoint].findIndex(({ i }) => i === root);
      if (index === -1) {
        return state;
      }

      const layouts = state.layouts[breakpoint];

      return {
        ...state,
        layouts: {
          ...state.layouts,
          [breakpoint]: [
            ...layouts.slice(0, index),
            layout,
            ...layouts.slice(index + 1),
          ],
        },
      };
    }

    case "ADD_DATA":
      const { key, value } = action.payload;
      return {
        ...state,
        data: {
          ...state.data,
          [key]: value,
        },
      };

    case "REMOVE_DATA":
      let obj = { ...state.data };
      delete obj[action.payload.key];
      return {
        ...state,
        data: obj,
      };

    case "ADD_NEW_LAYOUTS":
      const { breakpoint, layouts } = action.payload;
      console.log("BREAK", breakpoint, layouts);
      return {
        ...state,
        layouts: {
          ...state.layouts,
          [breakpoint]: layouts,
        },
      };
    case "SET_BREAKPOINT":
      return {
        ...state,
        breakpoint: action.payload,
      };

    default:
      return state;
  }
}
