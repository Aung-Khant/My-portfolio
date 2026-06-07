import { useMemo } from "react";
import { Outlet } from "react-router-dom";
import { useTheme } from "../hooks/useTheme";
import { Navbar } from "./Navbar";
import Particles from "./Particles";

export function Layout() {
  const { theme } = useTheme();
  const particleColors = useMemo(
    () => (theme === "light" ? ["#000000"] : ["#ffffff"]),
    [theme]
  );

  return (
    <>
      <div
        style={{
          position: "fixed",
          inset: 0,
          width: "100%",
          height: "100%",
          zIndex: -1,
          pointerEvents: "none",
        }}
      >
        <Particles
          particleColors={particleColors}
          particleCount={160}
          particleSpread={10}
          speed={0.08}
          particleBaseSize={100}
          moveParticlesOnHover
          alphaParticles={false}
          disableRotation={false}
          pixelRatio={1}
        />
      </div>
      <Navbar />
      <Outlet />
    </>
  );
}
