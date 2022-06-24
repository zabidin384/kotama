import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
	return (
		<div className="notFound text-center min-h-screen">
			<div className="h1 text-4xl py-5">Page Not Found!</div>
			<div className="flex justify-center">
				<Image src="/images/not-found.png" alt="" height={475} width={950} />
			</div>
			<Link href="/">
				<a>
					<button className="btn">Back to Homepage</button>
				</a>
			</Link>
		</div>
	);
}
