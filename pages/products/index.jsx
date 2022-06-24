import Image from "next/image";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import SideBar from "../../components/SideBar";
import { products } from "../../datas/data";
import { BiExport, BiSearch } from "react-icons/bi";

export default function Products() {
	return (
		<>
			<Navbar />
			<main className="products flex pt-[80px]">
				<div className="basis-1/6">
					<SideBar />
				</div>
				<div className="productsContainer p-10 w-full min-h-[100vh-80px] bg-gray-100 basis-5/6">
					<div className="h1">Products</div>
					<div>
						<div className="productsFilter flex justify-between">
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
									<option value="hardware">Hardware</option>
									<option value="software">Software</option>
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

						<div className="productsTable">
							<table className="table-fixed w-full text-center rounded-lg bg-white shadow-lg">
								<thead className="text-blue-600 border-b">
									<tr>
										<th>Produk</th>
										<th>Kategori</th>
										<th>Harga Barang</th>
										<th>Stok</th>
										<th>Merk</th>
										<th>SN</th>
										<th>X</th>
										<th>TA. Pengadaan</th>
									</tr>
								</thead>
								<tbody className="border-b p">
									{products.map((product, i) => (
										<tr key={i}>
											<td className="hover:text-blue-600">
												<Link href="/products/1">
													<a>{product.name}</a>
												</Link>
											</td>
											<td>{product.category}</td>
											<td>{product.price}</td>
											<td>{product.stock}</td>
											<td>{product.merk}</td>
											<td>{product.sn}</td>
											<td>{product.x}</td>
											<td>{product.taPengadaan}</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>
						<div className="pagination flex items-center gap-2.5 justify-end">
							<button className="text-white bg-blue-100 p-2 rounded-md">First</button>
							<button className="bg-blue-100  p-2 rounded-md">
								<Image src="/images/product/arrow-left.png" alt="" width={8} height={13} />
							</button>
							<button className="bg-white text-blue-600 border-2 border-blue-600 rounded-md py-1.5 px-3">1</button>
							<button className="bg-white py-2 px-3 rounded-md">2</button>
							<button className="bg-white py-2 px-3 rounded-md">...</button>
							<button className="bg-white py-2 px-3 rounded-md">234</button>
							<button className="btn">
								<Image src="/images/product/arrow-right.png" alt="" width={8} height={13} />
							</button>
							<button className="btn">Last</button>
						</div>
					</div>
				</div>
			</main>
		</>
	);
}
