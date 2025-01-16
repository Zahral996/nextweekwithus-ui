import Link from "next/link";

interface FooterLinkProps {
    href: string;      
    linkName: string;
}

const FooterLink: React.FC<FooterLinkProps> = ({ href, linkName }) => {
    return (
        <li>
            <Link className="title text-sm lg:text-base font-medium" href={href}>
                {linkName}
            </Link>
        </li>
    );
};

export default FooterLink;
