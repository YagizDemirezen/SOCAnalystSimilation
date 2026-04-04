import TextType from '../sourceComponents/TextType';

export default function TextTypeAnimation({ texts }) {
  return (
    <div className="background-container">
      <TextType
        text={["Tehditleri Analiz Et ve Yorumla", "Gerçek Dünya Senaryolarıyla Pratik Yap"]}
        typingSpeed={100}
        pauseDuration={1500}
        deletingSpeed={50}
        variableSpeedEnabled={false}
        cursorBlinkDuration={0.5}
      />
    </div>
  );
}