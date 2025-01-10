function Button({
  children,
  width,
  paddingX,
  paddingY,
  flex,
  textSize,
  bg,
  text,
  cursorPointer,
}) {
  return (
    <div>
      <button
        className={`flex items-center border ${cursorPointer} ${flex} ${bg} text-${textSize} border-gray-400 py-${paddingY} px-${paddingX} rounded-md text-black gap-1 ${bg} ${text}`}
        style={{
          width: `${width}%`,
          display: "flex", // Flexbox display applied inline
          flexDirection: flex?.flexDirection || "row", // Default to 'row' if not passed
          alignItems: flex?.alignItems || "center", // Default to 'center' if not passed
          justifyContent: flex?.justifyContent || "flex-start", // Default to 'flex-start' if not passed
        }}
      >
        <span className="mx-auto">{children}</span>
      </button>
    </div>
  );
}

export default Button;
