
const renderLabel = (label,htmlFor) => {
    return (
      <label htmlFor={htmlFor} className='block text-sm ml-1 font-medium text-gray-700'>
        {label}
      </label>
    );
};

const Input = ({ htmlFor, visible, label, type, name, value, required, ...rest }) => {

    let inputClassName = 'appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-400 focus:border-blue-500 sm:text-sm';
    if (type === 'checkbox') {
      inputClassName = 'w-4 h-4 text-blue-600 focus:ring-blue-300 rounded border-gray-300';
    }
    
    type = visible ? 'text':type;

  return (
    <div className='mt-1'>
      { type !== 'checkbox' && renderLabel(label,htmlFor) }
      <div>
        <input
          type={type}
          name={name}
          value={value}
          required={required}
          {...rest} 
          className = {inputClassName}
        />
      </div>
    </div>
  );
};

export { Input, renderLabel }; 

export default Input;
