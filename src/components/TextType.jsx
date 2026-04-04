import TextType from '../sourceComponents/TextType';

export default function TextTypeAnimation({ texts, typingSpeed }) {
  return (
    <div className="background-container">
      <TextType
        text={texts}
        typingSpeed={typingSpeed}
        pauseDuration={1500}
        deletingSpeed={50}
        variableSpeedEnabled={false}
        cursorBlinkDuration={0.5}
      />
    </div>
  );
}