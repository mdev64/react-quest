// Official React logo SVG (MIT-licensed)
function ReactLogo({ size = 32, color = '#61dafb', spinning = false }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="-11.5 -10.23174 23 20.46348"
      width={size}
      height={size}
      style={spinning ? { animation: 'react-logo-spin 8s linear infinite' } : undefined}
      aria-label="React logo"
    >
      <style>{`
        @keyframes react-logo-spin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
      `}</style>
      <circle cx="0" cy="0" r="2.05" fill={color} />
      <g stroke={color} strokeWidth="1" fill="none">
        <ellipse rx="11" ry="4.2" />
        <ellipse rx="11" ry="4.2" transform="rotate(60)" />
        <ellipse rx="11" ry="4.2" transform="rotate(120)" />
      </g>
    </svg>
  );
}

export default ReactLogo;
