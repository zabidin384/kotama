import Image from "next/image";
import Navbar from "../../../components/Navbar";
import SideBar from "../../../components/SideBar";
import { useState } from "react";
import { kodamDetails } from "../../../datas/data";
import { BiEdit, BiExport, BiSearch } from "react-icons/bi";
import { GrClose } from "react-icons/gr";
import { RiDeleteBinLine } from "react-icons/ri";

export default function KodamDetails() {
	const [showModal, setShowModal] = useState(false);
	const [tipeBarang, setTipeBarang] = useState("single");

	return (
		<>
			<Navbar />
			<main className="kodamDetails flex pt-[80px]">
				<div className="basis-1/6">
					<SideBar />
				</div>
				<div className="kodamContainer relative p-10 w-full min-h-[100vh-80px] bg-gray-100 basis-5/6">
					<div className="h1">Kodam Details</div>
					<div>
						<div className="kodamDetailsTitle card flex justify-between items-center shadow-lg">
							<div className="detailsTitleLeft flex gap-5 items-center basis-2/5">
								<Image src="/images/kotama/kodam4.png" alt="" width={79} height={79} />
								<div className="h2">
									<p className="font-medium text-blue-600">KODAM IV/DIP</p>
									<p>INFOLAHTADAM IV</p>
								</div>
							</div>
							<div className="detailsTitleRight flex items-center justify-around basis-3/5">
								<div>
									<b>Software</b> : 300
								</div>
								<div>
									<b>Hardware</b> : 300
								</div>
								<div>
									<button className="btn bg-blue-100 border border-blue-600 text-blue-600" onClick={() => setShowModal(true)}>
										Tambah barang +
									</button>
								</div>
							</div>
						</div>

						{/* Modal */}
						{/* Modal Single */}
						{showModal && tipeBarang === "single" && (
							<div className="modal w-[569px] p-8 bg-white my-5 rounded-lg shadow-lg absolute top-5 left-10 z-10">
								<div className="flex items-center justify-between">
									<div className="text-[16px] font-bold text-center">Tambah Barang</div>
									<div className="cursor-pointer" onClick={() => setShowModal(false)}>
										<GrClose />
									</div>
								</div>
								<hr className="-mx-8 my-5" />
								<label>Tipe barang masuk</label>
								<select className="input w-full mt-2.5 p-3" required>
									<option value="single" selected>
										Single
									</option>
									<option value="multiple" onClick={() => setTipeBarang("multiple")}>
										Multiple
									</option>
								</select>
								<div className="flex items-center gap-2.5 mt-5">
									<div>
										<label>Produk</label> <br />
										<input type="text" className="input mt-2.5" placeholder="Printer etc" required />
									</div>
									<div className="w-full">
										<label>Kategori</label> <br />
										<select className="input p-3 w-full mt-2.5" required>
											<option value="software">Software</option>
											<option value="hardware" selected>
												Hardware
											</option>
										</select>
									</div>
								</div>
								<div className="flex flex-row items-center gap-2.5 my-5">
									<div>
										<label>Serial Number</label> <br />
										<input type="text" className="input mt-2.5" placeholder="31231231231" required />
									</div>
									<div className="w-full">
										<label>Kondisi</label> <br />
										<select className="input p-3 mt-2.5 w-full" required>
											<option value="baik" selected>
												Baik
											</option>
											<option value="rusak ringan">Rusak Ringan</option>
											<option value="rusak berat">Rusak Berat</option>
										</select>
									</div>
								</div>
								<label>Note</label> <br />
								<textarea rows="4" className="border rounded-md p-2.5 w-full mt-2.5"></textarea>
								<div className="flex justify-between items-center mt-5">
									<button onClick={() => setShowModal(false)} className="border border-blue-600 text-blue-600 rounded-lg py-2 w-[246px]">
										Back
									</button>
									<button onClick={() => setShowModal(false)} className="btn font-normal w-[246px] py-2.5">
										+ Tambah
									</button>
								</div>
							</div>
						)}
						{/* Modal Multiple */}
						{showModal && tipeBarang === "multiple" && (
							<div className="modal w-[569px] p-8 bg-white my-5 rounded-lg shadow-lg absolute top-5 left-10 z-10">
								<div className="flex items-center justify-between">
									<div className="text-[16px] font-bold text-center">Tambah Barang</div>
									<div className="cursor-pointer" onClick={() => setShowModal(false)}>
										<GrClose />
									</div>
								</div>
								<hr className="-mx-8 my-5" />
								<label>Tipe barang masuk</label>
								<select className="input w-full mt-2.5 p-3" required>
									<option value="single" onClick={() => setTipeBarang("single")}>
										Single
									</option>
									<option value="multiple" selected>
										Multiple
									</option>
								</select>
								<div className="flex items-center gap-2.5 mt-5">
									<div>
										<label>Produk</label> <br />
										<input type="text" className="input mt-2.5" placeholder="Hard disk etc" required />
									</div>
									<div className="w-full">
										<label>Kategori</label> <br />
										<select className="input p-3 w-full mt-2.5" required>
											<option value="software">Software</option>
											<option value="hardware" selected>
												Hardware
											</option>
										</select>
									</div>
								</div>
								<div className="flex flex-row items-center gap-2.5 my-5">
									<div>
										<label>Jumlah nyata</label> <br />
										<input type="text" className="input mt-2.5" placeholder="120" required />
									</div>
									<div>
										<label>TOP/DSPP</label> <br />
										<input type="text" className="input mt-2.5" placeholder="200" required />
									</div>
								</div>
								<div className="my-5">
									<label className="font-bold">Kondisi</label>
									<div className="flex items-center justify-between gap-2.5">
										<div>
											<label>Baik</label> <br />
											<input type="text" className="input mt-2.5 w-40" placeholder="100" required />
										</div>
										<div>
											<label>Rusak Ringan</label> <br />
											<input type="text" className="input mt-2.5 w-40" placeholder="10" required />
										</div>
										<div>
											<label>Rusak Berat</label> <br />
											<input type="text" className="input mt-2.5 w-40" placeholder="10" required />
										</div>
									</div>
								</div>
								<label>Note</label> <br />
								<textarea rows="4" className="border rounded-md p-2.5 w-full mt-2.5"></textarea>
								<div className="flex justify-between items-center mt-5">
									<button onClick={() => setShowModal(false)} className="border border-blue-600 text-blue-600 rounded-lg py-2 w-[246px]">
										Back
									</button>
									<button onClick={() => setShowModal(false)} className="btn font-normal w-[246px] py-2.5">
										+ Tambah
									</button>
								</div>
							</div>
						)}

						<div className="kodamDetailsFilter flex justify-between">
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
								<select name="pilihanKategori" className="input mr-5">
									<option value="semua">Semua</option>
									<option value="hardware">Hardware</option>
									<option value="software">Software</option>
								</select>
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

						<div className="kodamDetailsTable bg-white rounded-lg shadow-lg">
							<table className="table-fixed w-full text-center">
								<thead className="text-blue-600 border-b">
									<tr>
										<th rowSpan="2" className="pl-2.5">
											Produk/Materiil
										</th>
										<th rowSpan="2">Kategori</th>
										<th rowSpan="2">Jumlah Nyata</th>
										<th colSpan="3" className="border-b">
											Kondisi
										</th>
										<th rowSpan="2">TOP/DSPP</th>
										<th></th>
									</tr>
									<tr>
										<th>B</th>
										<th>RR</th>
										<th>RB</th>
									</tr>
								</thead>
								<tbody className="border-b p">
									{kodamDetails.map((kodam, i) => (
										<tr key={i}>
											<td className="pl-5 text-left">{kodam.name}</td>
											<td>{kodam.category}</td>
											<td>{kodam.amount}</td>
											<td>{kodam.conditionB}</td>
											<td>{kodam.conditionRR}</td>
											<td>{kodam.conditionRB}</td>
											<td>{kodam.top}</td>
											<td className="flex gap-2.5">
												<button className="btn flex items-center gap-1.5 p">
													<BiEdit /> Edit
												</button>
												<button className="btn bg-red-600">
													<RiDeleteBinLine />
												</button>
											</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</main>
		</>
	);
}
