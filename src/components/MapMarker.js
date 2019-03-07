import React, { PureComponent } from "react";

const ICON = `M20.2,15.7L20.2,15.7c1.1-1.6,1.8-3.6,1.8-5.7c0-5.6-4.5-10-10-10S2,4.5,2,10c0,2,0.6,3.9,1.6,5.4c0,0.1,0.1,0.2,0.2,0.3
  c0,0,0.1,0.1,0.1,0.2c0.2,0.3,0.4,0.6,0.7,0.9c2.6,3.1,7.4,7.6,7.4,7.6s4.8-4.5,7.4-7.5c0.2-0.3,0.5-0.6,0.7-0.9
  C20.1,15.8,20.2,15.8,20.2,15.7z`;

const hospitalUnfiltered = {
  cursor: "pointer",
  fill: "#ef6c60",
  stroke: "none",
  opacity: 0.5,
  size: 25
};

const hospitalFiltered = {
  cursor: "pointer",
  fill: "#ef6c60",
  stroke: "none",
  opacity: 1,
  size: 25
};

const structureUnfiltered = {
  cursor: "pointer",
  fill: "#183d62",
  stroke: "none",
  opacity: 0.5,
  size: 25
};

const structureFiltered = {
  cursor: "pointer",
  fill: "#183d62",
  stroke: "none",
  opacity: 1,
  size: 25
};

class MapMarker extends PureComponent {
  render() {
    const { size = 20, onClick } = this.props;
    const isHospital = this.props.oneItem.group;
    //  if false then not a hospital
    const isFiltered = this.props.oneItem.filtered;
    // if false then unfiltered

    // console.log(isHospital);
    if (isHospital && isFiltered) {
      return (
        <div>
          <svg
            version="1.1"
            id="Calque_1"
            x="0px"
            y="0px"
            viewBox="0 0 384 512"
            enableBackground="new 0 0 384 512"
            height={size}
            style={{
              ...hospitalFiltered,
              transform: `translate(${-size / 2}px,${-size}px)`
            }}
            onClick={onClick}
          >
            <path
              d="M192,0C86,0,0,86,0,192c0,77.4,27,99,172.3,309.7c9.5,13.8,29.9,13.8,39.5,0C357,291,384,269.4,384,192
	C384,86,298,0,192,0z M264,286h-39.8v-68.9h-64.3V286H120V121.1h39.8v62.4h64.3v-62.4H264V286z"
            />
          </svg>

          {/* <svg
            height={size}
            viewBox="0 0 24 24"
            style={{
              ...hospitalFiltered,
              transform: `translate(${-size / 2}px,${-size}px)`
            }}
            onClick={onClick}
          >
            <path d={ICON} />
          </svg> */}
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
        if (!isHospital && isFiltered) {
          return (
            <div>
              <svg
                version="1.1"
                id="Calque_1"
                x="0px"
                y="0px"
                viewBox="0 0 384 512"
                enableBackground="new 0 0 384 512"
                height={size}
                style={{
                  ...structureFiltered,
                  transform: `translate(${-size / 2}px,${-size}px)`
                }}
                onClick={onClick}
              >
                <path
                  d="M192,0C86,0,0,86,0,192c0,77.4,27,99,172.3,309.7c9.5,13.8,29.9,13.8,39.5,0C357,291,384,269.4,384,192
	C384,86,298,0,192,0z M239.1,283.1c-10.7,4.9-23.1,7.3-37,7.3c-12.7,0-24.5-2.1-35.3-6.3c-10.8-4.2-20.1-10.1-28.1-17.8
	c-7.9-7.7-14.1-16.9-18.6-27.6c-4.5-10.7-6.8-22.5-6.8-35.4c0-13.2,2.3-25.2,6.9-35.9c4.6-10.7,10.9-19.8,19-27.4
	c8.1-7.5,17.5-13.3,28.4-17.3c10.9-4,22.6-6.1,35.2-6.1c11.6,0,23.1,2.1,34.3,6.2c11.3,4.1,20.4,10.1,27.4,18l-27,27
	c-3.7-5.1-8.6-8.9-14.7-11.4c-6.1-2.5-12.3-3.7-18.6-3.7c-7,0-13.4,1.3-19.2,3.8c-5.8,2.6-10.8,6.1-15,10.6c-4.2,4.5-7.5,9.8-9.8,16
	c-2.3,6.1-3.5,12.8-3.5,20.1c0,7.5,1.2,14.3,3.5,20.5c2.3,6.2,5.5,11.5,9.7,16c4.1,4.4,9,7.9,14.8,10.4c5.7,2.5,12,3.7,18.9,3.7
	c7.9,0,14.8-1.5,20.7-4.7c5.9-3.1,10.6-7.1,14.2-12.1l27.7,26.1C258.8,271.6,249.8,278.2,239.1,283.1z"
                />
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
