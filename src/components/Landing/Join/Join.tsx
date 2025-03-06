import Button from "@/components/shared/button/Button";
import Image from "next/image";


const Join = () => {
    return (
        <div className="join container mx-auto min-h-[265px] relative flex flex-col md:flex-row justify-around items-center gap-y-2 lg:px-10 py-2">
            <div className="content w-full md:w-6/12 flex flex-col gap-y-2 justify-center px-5">
                <h2 className="text-xl font-extrabold">Join the Adventure!</h2>
                <h3 className="font-semibold text-base">Ready to explore new horizons and create unforgettable memories?</h3>
                <p className="hidden md:block text-base font-normal pb-2">Discover exciting events happening near you and connect with fellow adventurers! Sign up now to explore unique journeys, share your experiences, and create lasting memories.</p>
                <Button href={"/signup"} btnName={"Sign up"}/>
            </div>
            <div className="flex justify-center w-full mt-5 lg:mt-0 lg:w-6/12  lg:justify-end">
                <Image width={1000} height={1000} className="w-full md:w-[90%] 2xl:w-[80%]" src={"/images/landingPage/join/nextweekwithus_international-tourism-banner.webp"} alt="join the adventure" />
            </div>
    
        </div>
    );
}

export default Join;