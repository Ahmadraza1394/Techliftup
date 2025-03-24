import { FaWhatsapp } from "react-icons/fa";

export default function WhatsappButton() {
  const handleClick = () => {
    window.open("https://wa.me/923238388294", "_blank");
  };

  return (
    <div className="fixed bg-green-600 w-16 h-16 rounded-full bottom-6 right-4 flex flex-col items-center">
      <FaWhatsapp
        className="text-gray-100 text-5xl mt-2 cursor-pointer animate-pulse"
        onClick={handleClick}
      />
    </div>
  );
}
