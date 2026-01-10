import patternImage from '/src/assets/background.PNG'
const RepeatingBackgroundInline = ({ children }) => {
  const backgroundStyle = {
    backgroundImage: `url(${patternImage})`,
    backgroundRepeat: 'repeat', // Repeats both horizontally and vertically
    height: '100vh',
    width: '100vw',
    backgroundSize: '50%'
  };

  return (
    <div style={backgroundStyle}>
      {children}
    </div>
  );
};

export default RepeatingBackgroundInline;