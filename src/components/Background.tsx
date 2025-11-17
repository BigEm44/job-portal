import backgroundPattern from "../assets/backgroundPattern.svg";

export default function Background() {
  return (
    <div className="background">
      <img src={backgroundPattern} alt="Background pattern" />
    </div>
  );
}
