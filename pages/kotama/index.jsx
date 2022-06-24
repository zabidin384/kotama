import Image from "next/image";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import SideBar from "../../components/SideBar";
import { kotamas } from "../../datas/data";
import { BiSearch } from "react-icons/bi";

export default function Kotama() {
	return (
		<>
			<Navbar />
			<main className="kotama flex pt-[80px]">
				<div className="basis-1/6">
					<SideBar />
				</div>

				<div className="kotamaContainer p-20 w-full bg-gray-100 basis-5/6">
					<div className="h1">Daftar Nama Kota Madya</div>
					<div>
						<div className="kotamaSearch flex justify-end items-center mr-10">
							<div className="relative mr-5">
								<input type="text" placeholder="Cari" className="input w-[184px]" />
								<BiSearch className="absolute top-3 right-2.5" size={28} />
							</div>
							<select name="amount" className="input w-[82px] p">
								<option value="10">10</option>
								<option value="25">25</option>
								<option value="50">50</option>
								<option value="100">100</option>
							</select>
						</div>
						<div className="flex justify-between flex-wrap">
							{kotamas.map((kotama) => (
								<Link href="/kotama/1">
									<a>
										<div className="kotamaItem card m-5 w-fit h-fit">
											<Image src={kotama.img} alt="" width={160} height={192} />
											<div className="h2 text-center mt-5">{kotama.name}</div>
										</div>
									</a>
								</Link>
							))}
						</div>
					</div>
				</div>
			</main>
		</>
	);
}
