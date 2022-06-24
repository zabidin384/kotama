import Link from "next/link";
import { tables } from "../datas/data";

export default function Table() {
	return (
		<div className="table bg-slate-100 px-20 py-10 min-h-screen">
			<div className="h1">Table</div>
			<table className="table-fixed w-full text-center rounded-lg bg-white shadow-lg">
				<thead className="text-blue-600 border-b">
					<tr>
						<th>Kotama</th>
						<th>Satminkal</th>
						<th>Kategori</th>
						<th>Produk</th>
						<th>Harga Barang</th>
						<th>Stok</th>
						<th>Merk</th>
						<th>SN</th>
						<th>Kondisi</th>
						<th>TA. Pengadaan</th>
					</tr>
				</thead>
				<tbody className="border-b p">
					{tables.map((table, i) => (
						<tr key={i}>
							<td>{table.kotama}</td>
							<td>{table.satminkal}</td>
							<td>{table.category}</td>
							<td>{table.product}</td>
							<td>{table.price}</td>
							<td>{table.stock}</td>
							<td>{table.merk}</td>
							<td>{table.sn}</td>
							<td>{table.condition}</td>
							<td>{table.taPengadaan}</td>
						</tr>
					))}
				</tbody>
			</table>
			<div className="text-center">
				<Link href="/">
					<a>
						<button className="btn">Home</button>
					</a>
				</Link>
			</div>
		</div>
	);
}
