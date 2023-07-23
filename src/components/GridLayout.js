import React from "react";
import PropTypes from "prop-types";
import { Responsive, WidthProvider } from "react-grid-layout";

import GridItemContainer from "../containers/GridItemContainer";
import { setBreakPoint, addData, addNewLayouts } from "../actions/app-actions";
import { connect } from "react-redux";

const ResponsiveGridLayout = WidthProvider(Responsive);

const GridLayout = ({
  data,
  layouts,
  setBreakPoint,
  addData,
  addNewLayouts,
  breakpointa,
}) => {
  console.log("GridLayout layouts", breakpointa);
  let breakpoint;

  const handleBreakPointChange = (newBreakpoint) => {
    breakpoint = newBreakpoint;
    setBreakPoint(newBreakpoint);
  };

  const handleLayoutChange = (newLayout, old) => {
    console.log("NEW LAYOUT", newLayout, breakpointa);
    // console.log("old old", old);
    // if (breakpoint === "lg")
    // addNewLayouts(breakpoint, newLayout);
    layouts[breakpoint] = newLayout;
  };

  console.log("LAYOUT NANANA", layouts);
  return (
    <React.Fragment>
      <button
        className="btn btn-default"
        onClick={() => {
          addData(`graph${data.length + 1}`, {
            type: "pie",
            title: `Graph ${data.length + 1}`,
            data: [],
          });
          console.log("LAYOUTS", layouts);
          addNewLayouts(
            breakpointa,
            layouts[breakpoint].concat({
              i: `graph${data.length + 1}`,
              x: 0,
              y: 0,
              w: 4,
              h: 2,
              // maxH: Infinity,
            })
          );
        }}
      >
        Hola
      </button>
      <ResponsiveGridLayout
        className="layout"
        layouts={layouts}
        onBreakpointChange={handleBreakPointChange}
        onLayoutChange={handleLayoutChange}
        isDraggable
        isRearrangeable
        isResizable
        draggableHandle=".grid-item__title"
        breakpoints={{ lg: 1280, md: 992, sm: 767, xs: 480, xxs: 0 }}
        cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
      >
        {data.map((item) => (
          <GridItemContainer key={item} item={item} />
        ))}
      </ResponsiveGridLayout>
    </React.Fragment>
  );
};

GridLayout.propTypes = {
  data: PropTypes.arrayOf(PropTypes.string).isRequired,
  layouts: PropTypes.object.isRequired,
};

export default connect(null, { setBreakPoint, addData, addNewLayouts })(
  GridLayout
);
