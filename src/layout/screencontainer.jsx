import '../styles.css'


export default function ScreenContainer({ children, bgColor = 'bg-[#28282B]' }) {
  return (
    <div className={`animate_animated animate__zoomIn w-full h-screen flex flex-col justify-center items-center ${bgColor} ease-in duration-300`}>
      {children}
    </div>
  );
}

