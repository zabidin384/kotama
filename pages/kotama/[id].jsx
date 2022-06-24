import Image from "next/image";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import SideBar from "../../components/SideBar";
import { kotamaDetails } from "../../datas/data";
import { BiEdit, BiExport, BiSearch } from "react-icons/bi";
import { RiDeleteBinLine } from "react-icons/ri";

export default function KotamaDetails() {
	return (
		<>
			<Navbar />
			<main className="kotamaDetails flex pt-[80px]">
				<SideBar />
				<div className="kotamaContainer p-10 pr-20 w-full min-h-[100vh-80px] bg-gray-100">
					<div className="h1">Kotama Details</div>
					<div>
						<Link href="/kotama/kodam/1">
							<a>
								<div className="kotamaDetailsTitle card flex justify-between items-center shadow-lg">
									<div className="detailsTitleLeft flex gap-5 items-center basis-1/2">
										<Image src="/images/kotama/kodam4.png" alt="" width={79} height={79} />
										<div className="h2">
											Komando Daerah Militer IV/ <br /> Diponegoro
										</div>
									</div>
									<div className="detailsTitleRight basis-1/2">Jl. Perintis Kemerdekaan, Watugong, Banyumanik, Semarang, Jawa Tengah.</div>
								</div>
							</a>
						</Link>

						<div className="kotamaDetailsFilter flex justify-between">
							<div className="detailsFilterLeft flex items-center">
								<div className="relative mr-5">
									<input type="text" placeholder="Cari" className="input w-[184px]" />
									<BiSearch className="absolute top-3 right-2.5" size={28} />
								</div>
								<select name="amount" className="input w-[82px]">
									<option value="10">10</option>
									<option value="25">25</option>
									<option value="50">50</option>
									<option value="100">100</option>
								</select>
							</div>
							<div className="detailsFilterRight">
								<select name="year" className="input mr-5">
									<option value="2022">2022</option>
									<option value="2021">2021</option>
									<option value="2020">2020</option>
								</select>
								<button className="btn rounded-lg">
									<div className="flex items-center gap-1.5">
										<BiExport size={20} />
										Export
										<img src="/images/kotama/arrow-down-white.png" alt="" width={10} height={5} />
									</div>
								</button>
							</div>
						</div>

						<div className="kotamaDetailsTable">
							<table className="table-fixed w-full text-center rounded-lg bg-white shadow-lg">
								<thead className="text-blue-600 border-b">
									<tr>
										<th>Satminkal</th>
										<th>Software</th>
										<th>Hardware</th>
										<th>TA. Pengadaan</th>
										<th></th>
									</tr>
								</thead>
								<tbody className="border-b p">
									{kotamaDetails.map((kotama, i) => (
										<tr key={i}>
											<td className="text-start pl-5">{kotama.satminkal}</td>
											<td>{kotama.software}</td>
											<td>{kotama.hardware}</td>
											<td>{kotama.taPengadaan}</td>
											<td className="flex gap-5">
												<button className="btn flex items-center gap-1.5">
													<BiEdit size={20} /> Edit
												</button>
												<button className="btn bg-red-600">
													<RiDeleteBinLine size={20} />
												</button>
											</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>

						<div className="text-end mt-24">
							<p>
								<b>Software</b> : 300
							</p>
							<p>
								<b>Hardware</b> : 123
							</p>
						</div>
					</div>
				</div>
			</main>
		</>
	);
}
