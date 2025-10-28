import { SpiralAnimation } from "./ui/spiralanimation";

interface EnterScreenProps {
  onEnter: () => void;
}

const EnterScreen: React.FC<EnterScreenProps> = ({ onEnter }) => {
  const handleEnter = () => {
    onEnter();
  };

  return (
    <div
      className="fixed inset-0 w-full h-full bg-black flex justify-center items-center z-100 cursor-pointer"
      onClick={handleEnter}
    >
      <div className="absolute inset-0 z-0">
        <SpiralAnimation />
      </div>
      <div className="text-center z-10">
        <h1 className="text-6xl md:text-8xl font-extrabold bg-linear-to-b from-neutral-200 to-neutral-500 bg-clip-text text-transparent">
          Enter?
        </h1>
        <p className="text-md md:text-lg mt-4 font-semibold bg-linear-to-r from-[#1f1f1f] via-[#4b4b4b] to-[#1f1f1f] bg-size-[250%_100%] bg-clip-text text-transparent animate-[shine_4s_ease-in-out_infinite]">
          Tap anywhere on the screen to continue
        </p>
      </div>
    </div>
  );
};

export default EnterScreen;

