import React from "react";
import {
  Placeholder,
  PlaceholderMedia,
  PlaceholderLine,
  ShineOverlay,
} from "rn-placeholder";

const CoursePlaceholderComponent = () => (
  <Placeholder
    Animation={ShineOverlay}
    style={{
      marginVertical: 6,
      marginHorizontal: 15,
      borderRadius: 4,
    }}
    Left={(props) => (
      <PlaceholderMedia
        style={[
          props.style,
          {
            width: 22,
            height: 16,
          },
        ]}
      />
    )}
  >
    <PlaceholderLine style={{ marginTop: 1 }} width={70} />
    <PlaceholderLine style={{ marginTop: 1.5 }} width={50} />
    <PlaceholderLine width={50} />
  </Placeholder>
);
export default CoursePlaceholderComponent;
