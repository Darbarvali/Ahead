import Link from 'next/link';

const HomePage = () => {
  return (
<div  className="bg-customBlue  border-10 rounded-2xl ml-5 mr-5 flex">
     
<div className="w-1/2">
<div className="flex flex-col pl-40 justify-center min-h-screen">
      


      <div className="flex flex-col  mb-8">
        <h1 className="text-l ">Ahead app</h1>
        <p className="text-7xl font-bold  mt-4">Master your life <br />  by mastering <br />  emotions</p>
      </div>

      <div className="flex   ">
      
      <div className="flex items-center bg-black pl-2 pr-2 mr-10 rounded-lg">
    <div className="w-6 mr-2 ">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Apple_logo_white.svg/1724px-Apple_logo_white.svg.png"
        alt="Logo"
        className="w-full h-auto"
      />
    </div>
    <div className="text-left text-white">
      <p className="text-sm mb-0">Download on the</p>
      <p className="text-2xl ">App Store</p>
    </div>
  </div>
      
      
      <div className=" items-center">
        <div className="mr-2">
          <span className="text-yellow-500 text-2xl p-1">&#9733;</span>
          <span className="text-yellow-500 text-2xl p-1">&#9733;</span>
          <span className="text-yellow-500 text-2xl p-1">&#9733;</span>
          <span className="text-yellow-500 text-2xl p-1">&#9733;</span>
          <span className="text-yellow-500 text-2xl p-1">&#9733;</span>
        </div>
        <p className="text-l ">100+ App Store Reviews</p>
      </div>
      
      </div>
    </div>
      </div>
      <div className="w-1/2">
        2
      </div>
    </div>
  );
};

export default HomePage;
