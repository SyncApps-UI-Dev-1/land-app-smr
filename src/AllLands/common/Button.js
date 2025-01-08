function Button({ children, width, paddingX, paddingY, textSize, bg, text }) {
  return (
    <div>
      <button
        className={`flex items-center border text-${textSize} border-gray-400 py-${paddingY} px-${paddingX} rounded-md text-black gap-1 ${bg} ${text}`}
        style={{ width: `${width}%` }}
      >
        <span className="mx-auto">{children}</span>
      </button>
    </div>
  );
}

export default Button;
