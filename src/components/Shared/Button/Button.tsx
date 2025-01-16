import Link from "next/link";

interface ButtonProps {
    btnName: string;
    href: string;      
    onClick?: () => void; 
    
}

const Button: React.FC<ButtonProps> = ({ btnName, href, onClick }) => {
    return (
        <button onClick={onClick} className="bg-teal-800 text-white rounded-md py-2 px-4 text-sm font-semibold hover:bg-teal-700 w-fit">
            <Link href={href}>{btnName}</Link>
        </button>
    );
};

export default Button;