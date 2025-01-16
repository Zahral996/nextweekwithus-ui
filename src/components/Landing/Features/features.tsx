// src/components/Features.tsx
import Image from 'next/image';
import { featuresData } from '@/data/features';

const Features: React.FC = () => {
    return (
        <div className="container mx-auto text-teal-900 flex flex-col justify-center gap-y-2 px-10 py-5 my-[50px]">
            <h2 className="title font-bold text-3xl text-teal-900 pb-4 text-center">Explore Our Features</h2>
            <div className="flex flex-col lg:grid grid-cols-3 gap-x-4 mx-auto">
                {featuresData.map((feature, index) => (
                    <div key={index} className="flex flex-col gap-y-2 justify-center items-center basis-1/3 pb-4">
                        <Image 
                            src={feature.imgSrc} 
                            alt={feature.title} 
                            width={50} 
                            height={50} 
                            className="object-cover" 
                        />
                        <h2 className="font-semibold text-base">{feature.title}</h2>
                        <p className="text-sm w-9/12 text-center">{feature.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Features;
