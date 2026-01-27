export const InputLabel = (props) => {
  const { label, required, customClassName } = props;
  
  return (
    <label className={`text-gray-700 text-sm font-medium block ${customClassName || ""}`}>
      {required && <span className="text-red-500">* </span>}
      {label}
    </label>
  );
};
