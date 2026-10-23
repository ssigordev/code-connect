import Image from "next/image";
export const Avatar = ({ name, imageSrc }) => {
    return (
        <ul>
            <li>
                <Image width={40} height={40} src={imageSrc} alt={name} />
            </li>
            <li>
                @{name}
            </li>
        </ul>
    )
}