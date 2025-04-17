
const Title = ({ as = 'h1', children, className = '', ...props }) => {
    const Tag = as;
    
    return (
      <Tag
        className={`text-center font-bold text-4xl text-white mb-8`}
        {...props}
      >
        {children}
      </Tag>
    );
  };
 
 
  export default Title;