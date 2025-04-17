const Input = ({ placeholder, ...props }) => {
    return (
      <input
        type="text"
        placeholder={placeholder}
        className={`w-full px-4 py-2 text-gray-700 bg-white border rounded-md focus:outline-none focus:ring-2 transition-colors duration-200`}
        {...props}
      />
    );
  };
  
  export default Input;