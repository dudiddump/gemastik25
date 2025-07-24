export default function Login() {
  return (
    <div className="relative h-screen w-screen flex justify-center items-center bg-white overflow-hidden">
      {/* Decorative Shapes */}
      <div className="absolute top-[-50px] left-[-50px] w-[200px] h-[200px] bg-[#55daa9] rounded-full opacity-30 z-0" />
      <div className="absolute bottom-[-80px] right-[-80px] w-[300px] h-[300px] bg-[#55daa9] rounded-full opacity-40 z-0" />
      <div className="absolute top-[30%] right-[20%] w-[150px] h-[150px] bg-[#55daa9] rotate-45 opacity-20 z-0 rounded-[30%]" />

      {/* Login Content */}
      <div className="relative z-10 bg-white shadow-lg p-10 rounded-xl max-w-xl w-full">
        <h2 className="text-2xl font-bold mb-4 text-center text-[#55daa9]">
          Login
        </h2>
        <p className="text-gray-700 text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
          nam voluptates doloremque atque modi magni quidem inventore in magnam
          culpa beatae ea eligendi fugiat laudantium pariatur nobis, maiores,
          minus illo!
        </p>
      </div>
    </div>
  );
}
