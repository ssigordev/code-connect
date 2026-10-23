import Image from "next/image";
<<<<<<< HEAD

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
=======
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
>>>>>>> 8d2e899d41684a3864aa86a3bb7549cda2e628ac
