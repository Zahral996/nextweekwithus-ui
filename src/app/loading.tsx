import Image from "next/image";

const Loading = () => {
    return (
        <div className="flex justify-center items-center h-screen bg-white">
            <Image
                src={"/Spinner.svg"}
                alt="loading"
                width={150}
                height={150}
            />
        </div>
    );
}

export default Loading;
