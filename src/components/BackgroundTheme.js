import React from 'react'
import Particles from "react-particles-js";
function BackgroundTheme() {
    return (
        <div>
            <Particles
        className="particleBg"
        params={{
          particles: {
            number: {
              value: 120,
              density: {
                enable: true,
                value_area: 800,
              },
            },
            color: {
              value: "#0f0000",
            },
          },
          shape: {
            polygon: {
              enable: true,
              type: "inside",
              move: {
                radius: 10,
              },
            },
          },
        }}
      />
        </div>
    )
}

export default BackgroundTheme
