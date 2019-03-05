import React, { PureComponent } from "react";

const ICON = `M20.2,15.7L20.2,15.7c1.1-1.6,1.8-3.6,1.8-5.7c0-5.6-4.5-10-10-10S2,4.5,2,10c0,2,0.6,3.9,1.6,5.4c0,0.1,0.1,0.2,0.2,0.3
  c0,0,0.1,0.1,0.1,0.2c0.2,0.3,0.4,0.6,0.7,0.9c2.6,3.1,7.4,7.6,7.4,7.6s4.8-4.5,7.4-7.5c0.2-0.3,0.5-0.6,0.7-0.9
  C20.1,15.8,20.2,15.8,20.2,15.7z`;

const hospitalUnfiltered = {
  cursor: "pointer",
  fill: "e37222",
  stroke: "none",
  opacity: 0.25,
  size: 10
};

const hospitalFiltered = {
  cursor: "pointer",
  fill: "e37222",
  stroke: "none",
  opacity: 1,
  size: 20
};

const structureUnfiltered = {
  cursor: "pointer",
  fill: "blue",
  stroke: "none",
  opacity: 0.25,
  size: 10
};

const structureFiltered = {
  cursor: "pointer",
  fill: "blue",
  stroke: "none",
  opacity: 1,
  size: 20
};

class MapMarker extends PureComponent {
  render() {
    const { size = 20, onClick } = this.props;
    const isHospital = this.props.hospitalArray;
    const isFiltered = this.props.filtered;

    // console.log(isHospital);
    if (isHospital && isFiltered) {
      return (
        <div>
          <svg
            height={size}
            viewBox="0 0 24 24"
            style={{
              ...hospitalUnfiltered,
              transform: `translate(${-size / 2}px,${-size}px)`
            }}
            onClick={onClick}
          >
            <path d={ICON} />
          </svg>
        </div>
      );
    } else {
      if (isHospital && !isFiltered) {
        return (
          <div>
            <svg
              height={size}
              viewBox="0 0 24 24"
              style={{
                ...hospitalFiltered,
                transform: `translate(${-size / 2}px,${-size}px)`
              }}
              onClick={onClick}
            >
              <path d={ICON} />
            </svg>
          </div>
        );
      } else {
        if (!isHospital && isFiltered) {
          return (
            <div>
              <svg
                height={size}
                viewBox="0 0 24 24"
                style={{
                  ...structureFiltered,
                  transform: `translate(${-size / 2}px,${-size}px)`
                }}
                onClick={onClick}
              >
                <path d={ICON} />
              </svg>
            </div>
          );
        } else {
          return (
            <div>
              <svg
                height={size}
                viewBox="0 0 24 24"
                style={{
                  ...structureUnfiltered,
                  transform: `translate(${-size / 2}px,${-size}px)`
                }}
                onClick={onClick}
              >
                <path d={ICON} />
              </svg>
            </div>
          );
        }
      }
    }
  }
}

export default MapMarker;
