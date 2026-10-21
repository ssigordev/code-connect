import Logo from "@/assets/IPhone-Logo.wine.svg";


export const Aside = () => {
  return (
    <aside className="w-64 h-screen bg-gray-800 text-white p-4">
        <Logo aria-label="Logo" role="img" className="mb-4 size-16 text-[rgb(255,165,0)]" />
        <nav className="flex flex-col gap-4">
            <a href="#" className="hover:text-orange-500">Home</a>
            <a href="#" className="hover:text-orange-500">About</a>
            <a href="#" className="hover:text-orange-500">Contact</a>
        </nav>
    </aside>
  )
};
