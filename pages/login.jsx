import Image from "next/image";
import Link from "next/link";

export default function Login() {
	return (
		<div className="login">
			<div className="flex justify-center items-center h-screen">
				<div className="flex bg-white py-10 pr-10 rounded-xl">
					<div className="mx-10">
						<Image src="/images/login/logo.png" width={207} height={304} alt="" />
					</div>
					<div className="pl-10">
						<p>Selamat datang kembali!</p>
						<h1 className="text-2xl font-bold mb-5">Sign in to your account</h1>
						<label>Email :</label> <br />
						<input type="text" className="border w-[352px] mb-5" /> <br />
						<label>Password :</label> <br />
						<input type="password" className="border w-[352px]" /> <br />
						<Link href="/">
							<a>
								<button className="btn w-[352px]">Login</button>
							</a>
						</Link>
						<p className="text-center text-blue-700 text-xs cursor-pointer">Forgot your password?</p>
					</div>
				</div>
			</div>
		</div>
	);
}
