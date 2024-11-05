import bannerImg from "../assets/banner.jpg";

function Hero() {
  return (
    <div className="container mx-auto bg-[#9538E2] text-white rounded-b-2xl relative md:mb-[30rem] mb-[18rem]">
      <div className="hero">
        <div className="hero-content text-center">
          <div className="mt-10 mb-44">
            <h1 className="md:text-5xl text-4xl md:w-10/12 mx-auto font-bold">
              Upgrade Your Tech Accessorize with Gadget Heaven Accessories
            </h1>
            <p className="py-6 w-8/12 mx-auto">
              Explore the latest gadgets that will take your experience to the
              next level. From smart devices to the coolest accessories, we have
              it all!
            </p>
            <button className="btn rounded-3xl px-7 py-1 text-[#9538E2]">
              <a href="#products">Shop Now</a>
            </button>
          </div>
        </div>
      </div>
      {/* meta glass */}
      <div className="absolute w-full md:w-9/12  bg-white bg-opacity-50 border-2 border-stone-100 rounded-2xl p-4 left-1/2 transform -translate-x-1/2 md:-bottom-[27rem] -bottom-[15rem]">
        <img className="rounded-2xl md:h-[35rem] h-[22rem]  w-full" src={bannerImg} alt="bannerImg" />
      </div>
    </div>
  );
}

export default Hero;
