import Image from "next/image";
import { GrNotification } from "react-icons/gr";
import { TbLogout } from "react-icons/tb";

export default function Navbar() {
	return (
		<nav className="navbar h-[80px] w-screen px-[90px] flex justify-between fixed bg-white shadow-md shadow-gray-400 z-20">
			<div className="navbarLeft flex items-center gap-2.5 cursor-pointer">
				<TbLogout size={28} /> Log Out
			</div>
			<ul className="navbarRight flex items-center justify-between h-full">
				<li className="cursor-pointer relative">
					<GrNotification size={20} />
					<div className="bg-red-600 rounded-full w-[16px] h-[16px] text-xs text-center text-white absolute -top-1 right-0">9</div>
				</li>
				<li className="flex items-center justify-around cursor-pointer">
					<div className="mr-5 ml-10">
						<Image className="rounded-full" src="/images/dashboard/avatar.png" alt="" width={35} height={35} />
					</div>
					<div>
						<Image src="/images/dashboard/arrow-down.png" alt="" width={10} height={5} />
					</div>
				</li>
			</ul>
		</nav>
	);
}
