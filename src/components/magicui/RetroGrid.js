import classnames from "classnames";

export function RetroGrid({ className, angle = 65 }) {
  return (
    <div
      className={classnames(
        "pointer-events-none absolute size-full overflow-hidden opacity-80 [perspective:200px]",
        className
      )}
      style={{ "--grid-angle": `${angle}deg` }}
    >
      {/* Grid */}
      <div className="absolute inset-0 [transform:rotateX(var(--grid-angle))]">
        <div
          className={classnames(
            "animate-grid",
            "[background-repeat:repeat] [background-size:60px_60px] [height:300vh] w-full",
            // Centered transform origin to avoid overflow
            "[transform-origin:center]",
            // Light Styles - Use primary color in RGB format
            "[background-image:linear-gradient(to_right,rgba(160,32,240,1)_1px,transparent_0),linear-gradient(to_bottom,rgba(160,32,240,1)_1px,transparent_0)]",
            // Dark styles - Use primary color in RGB format with darker opacity
            "dark:[background-image:linear-gradient(to_right,rgba(160,32,240,0.5)_1px,transparent_0),linear-gradient(to_bottom,rgba(160,32,240,0.5)_1px,transparent_0)]"
          )}
        />
      </div>
    </div>
  );
}

export default RetroGrid;
