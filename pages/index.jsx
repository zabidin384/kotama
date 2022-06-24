import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import SideBar from "../components/SideBar";
import { kodams, dashboards } from "../datas/data";

export default function Dashboard() {
	return (
		<>
			<Navbar />
			<main className="dashboard flex pt-[80px] w-screen">
				<div className="basis-1/6">
					<SideBar />
				</div>

				<div className="dashboardContainer p-10 bg-gray-100 basis-5/6">
					<div className="h1">Dashboard</div>
					<div className="flex gap-5">
						<div className="dashboardContainerLeft basis-3/4">
							<div className="dashboardProduct card">
								<div className="dashboardProductTitle flex justify-between items-center pb-5">
									<div className="h2">Produk/Materil</div>
									<select name="year" className="input p">
										<option value="2022">2022</option>
										<option value="2021">2021</option>
										<option value="2020">2020</option>
									</select>
								</div>
								<hr className="-mx-5" />
								<div className="dashboardProductChart flex justify-around p-5">
									<div className="productChartLeft flex items-center gap-5">
										<Image src="/images/dashboard/chart.png" alt="" width={130} height={130} />
										<div className="chartLeftDesc leading-8">
											<Image src="/images/dashboard/blue.png" alt="" width={13} height={13} /> <span className="p">Hardware: 120</span> <br />
											<Image src="/images/dashboard/yellow.png" alt="" width={13} height={13} /> <span className="p">Software: 20</span>
										</div>
									</div>
									<div className="productChartRight flex items-center gap-5">
										<Image src="/images/dashboard/chart.png" alt="" width={130} height={130} />
										<div className="chartLeftDesc leading-8">
											<Image src="/images/dashboard/blue.png" alt="" width={13} height={13} /> <span className="p">Baik: 120</span> <br />
											<Image src="/images/dashboard/yellow.png" alt="" width={13} height={13} /> <span className="p">Rusak Ringan: 20</span> <br />
											<Image src="/images/dashboard/red.png" alt="" width={13} height={13} /> <span className="p">Rusak Berat: 10</span>
										</div>
									</div>
								</div>
							</div>

							<div className="dashboardBarangMasuk">
								<div className="barangMasukTitle py-10 flex items-center justify-between">
									<div className="h2">Barang Masuk</div>
									<div className="flex gap-5">
										<select name="amount" className="input p">
											<option value="5">5</option>
											<option value="10">10</option>
											<option value="15">15</option>
											<option value="20">20</option>
										</select>
										<select name="day" className="input p">
											<option value="today">today</option>
											<option value="yesterday">yesterday</option>
										</select>
									</div>
								</div>
								<div className="barangMasukTable bg-white rounded-lg shadow-lg">
									<table className="table-fixed w-full text-center">
										<thead className="text-blue-600 border-b">
											<tr>
												<th rowSpan="2">Produk/Materiil</th>
												<th rowSpan="2">Kategori</th>
												<th rowSpan="2">Jumlah Nyata</th>
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
											{dashboards.map((dashboard, i) => (
												<tr key={i}>
													<td>{dashboard.name}</td>
													<td>{dashboard.category}</td>
													<td>{dashboard.amount}</td>
													<td>{dashboard.conditionB}</td>
													<td>{dashboard.conditionRR}</td>
													<td>{dashboard.conditionRB}</td>
													<td>{dashboard.top}</td>
												</tr>
											))}
										</tbody>
									</table>
								</div>
							</div>
						</div>

						<div className="dashboardContainerRight basis-1/4">
							<div className="dashboardKotama rounded-lg bg-white p-5 pb-0">
								<div className="flex items-center justify-between pb-5">
									<div className="h2">Kotama</div>
									<Link href="/kotama">
										<a>
											<p className="cursor-pointer text-blue-600 p font-bold">Lihat Semua</p>
										</a>
									</Link>
								</div>
								<hr className="-mx-5" />
								{kodams.map((kodam, i) => (
									<div key={i}>
										<Link href="/kotama/1">
											<a>
												<div className="flex justify-between items-center py-5 h2 cursor-pointer">
													<div className="flex items-center gap-3">
														<img src={kodam.img} alt="" width={38} height={45} />
														<div>{kodam.name}</div>
													</div>
													<img src="/images/dashboard/arrow-right.png" alt="" width={8} height={13} />
												</div>
											</a>
										</Link>

										<hr className="-mx-5" />
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</main>
		</>
	);
}
