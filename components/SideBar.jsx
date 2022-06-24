import React from "react";
import Link from "next/link";
import { BiCategoryAlt, BiHomeCircle, BiTable } from "react-icons/bi";
import { FaRegUser } from "react-icons/fa";
import { DiCodepen } from "react-icons/di";
import { RiPriceTag3Line } from "react-icons/ri";
import { TbCircleHalf } from "react-icons/tb";

export default function SideBar() {
	return (
		<div className="sidebar">
			<ul className="flex flex-col">
				<li>
					<Link href="/">
						<a>
							<BiHomeCircle size={28} /> Dashboard
						</a>
					</Link>
				</li>
				<li>
					<Link href="/kotama">
						<a>
							<TbCircleHalf size={28} /> Kotama
						</a>
					</Link>
				</li>
				<li>
					<Link href="/satminkal">
						<a>
							<DiCodepen size={28} /> Satminkal
						</a>
					</Link>
				</li>
				<li>
					<Link href="/products">
						<a>
							<RiPriceTag3Line size={28} /> Products
						</a>
					</Link>
				</li>
				<li>
					<Link href="/categories">
						<a>
							<BiCategoryAlt size={28} /> Categories
						</a>
					</Link>
				</li>
				<li>
					<Link href="/users">
						<a>
							<FaRegUser size={28} /> Users
						</a>
					</Link>
				</li>
				<li>
					<Link href="/table">
						<a>
							<BiTable size={28} /> Table
						</a>
					</Link>
				</li>
			</ul>
		</div>
	);
}
