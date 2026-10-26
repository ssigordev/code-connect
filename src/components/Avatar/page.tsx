import Image from "next/image";

export const Avatar = ({ name, imageSrc }) => {
  return (
    <ul>
      <li>
        <Image 
          src={imageSrc}
          alt={name}
          width={32}
          height={32}
          className="rounded-full"
        />
      </li>
      <li className="text-white">
        @{name}
      </li>
    </ul>
  );
};
