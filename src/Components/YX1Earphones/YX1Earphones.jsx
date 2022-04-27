import yx1 from "../../assets/images/home/desktop/image-earphones-yx1.jpg";
const YX1Earphones = () => {
  return (
    <div className="container w-5/6 lg:max-w-7xl mx-auto flex items-center my-16 gap-8 md:flex-row flex-col">
      <img
        src={yx1}
        className="w-full object-cover h-80 md:w-1/2 rounded-3xl"
        alt="earphone"
      />
      <div className="texts w-full h-80 md:w-1/2 bg-bg rounded-3xl text-center flex flex-col items-center justify-center">
        <h1 className="text-3xl uppercase font-medium mb-8">yx1 earphone</h1>
        <button className="uppercase border-4 py-4 px-12 border-black text-black hover:bg-black hover:text-white text-lg font-medium whitespace-nowrap">
          see more
        </button>
      </div>
    </div>
  );
};

export default YX1Earphones;
