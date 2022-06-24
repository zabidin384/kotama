import Image from "next/image";
import Navbar from "../../components/Navbar";
import SideBar from "../../components/SideBar";
import { products, productDetails } from "../../datas/data";
import { BiExport, BiSearch } from "react-icons/bi";

export default function ProductDetails() {
	return (
		<>
			<Navbar />
			<main className="productDetails flex pt-[80px]">
				<div className="basis-1/6">
					<SideBar />
				</div>
				<div className="productDetailsContainer p-10 w-full min-h-[100vh-80px] bg-gray-100 basis-5/6">
					<div className="h1">Product Details</div>

					<div>
						<div className="productDetailsTitle card shadow-lg">
							<div className="detailsTitleUp flex items-center justify-between">
								<div className="h2">Printer</div>
								<button className="btn">
									<div className="flex items-center gap-1.5">
										<BiExport size={20} /> Download PDF
									</div>
								</button>
							</div>
							<div className="detailsTitleDown flex items-center">
								<div className="flex items-center justify-around gap-20 leading-8">
									<div className="border rounded-lg p-5">
										<Image src="/images/product/printer.png" alt="" width={226} height={152} />
									</div>
									<div className="font-bold">
										<div>Kategori</div>
										<div>Stock</div>
										<div>Harga Barang</div>
										<div>Merk</div>
										<div>SN</div>
										<div>TA. Pengadaan</div>
									</div>
									<div>
										<div>Hardware</div>
										<div>300</div>
										<div>900000</div>
										<div>Epson</div>
										<div>Tes</div>
										<div>Tes</div>
									</div>
								</div>
								<div></div>
							</div>
						</div>

						<div className="productDetailsFilter flex justify-between">
							<div className="detailsFilterLeft flex items-center">
								<div className="relative">
									<input type="text" placeholder="Cari" className="input w-[184px]" />
									<BiSearch className="absolute top-3 right-2.5" size={28} />
								</div>
								<select name="amount" className="input ml-5 w-[82px] h-fit">
									<option value="10">10</option>
									<option value="25">25</option>
									<option value="50">50</option>
									<option value="100">100</option>
								</select>
							</div>
							<div className="detailsFilterRight">
								<select name="pilihanKategori" className="input mr-5">
									<option value="semua">Semua</option>
									<option value="hardware">Kodam I</option>
									<option value="hardware">Kodam II</option>
									<option value="hardware">Kodam III</option>
									<option value="hardware">Kodam IV</option>
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

						<div className="productDetailsTable">
							<table className="table-fixed w-full text-center rounded-lg bg-white shadow-lg">
								<thead className="text-blue-600 border-b">
									<tr>
										<th rowSpan="2">Kotama</th>
										<th rowSpan="2">Satminkal</th>
										<th colSpan="3" className="border-b">
											Kondisi
										</th>
										<th rowSpan="2">TOP/DSPP</th>
									</tr>
									<tr>
										<th>B</th>
										<th>RR</th>
										<th>RB</th>
									</tr>
								</thead>
								<tbody className="border-b p">
									{productDetails.map((product, i) => (
										<tr key={i}>
											<td>{product.kotama}</td>
											<td>{product.satminkal}</td>
											<td>{product.conditionB}</td>
											<td>{product.conditionRR}</td>
											<td>{product.conditionRB}</td>
											<td>{product.top}</td>
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
