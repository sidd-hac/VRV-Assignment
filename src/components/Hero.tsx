import Banner from "./Banner"


const Hero = () => {
  return (
    <div className="flex justify-around max-sm:gap-1 gap-5 items-center max-sm:flex-col w-full sm:m-5 m-2" >
            <Banner/>
            <Banner/>
            <Banner/>
        </div>
  )
}

export default Hero;