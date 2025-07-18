import { Lottie } from "@toss/lottie";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import logo from "../assets/dfdf.svg";
import Login from "../assets/lotties/login.json?url";

interface LandingPageProps {
	onStart: () => void;
}

const LandingPage = ({ onStart }: LandingPageProps) => {
	const [showSplash, setShowSplash] = useState(true);

	useEffect(() => {
		const timer = setTimeout(() => {
			setShowSplash(false); // 1.1초 후 스플래시 숨기고 홈 보여주기
		}, 1100);

		return () => clearTimeout(timer);
	}, []);

	return (
		<>
			{showSplash ? (
				// 스플래시 화면
				<motion.div
					className="h-full w-full flex-col-center bg-main-900"
					initial={{ opacity: 1 }}
					animate={{ opacity: 0 }}
					transition={{ delay: 0.8, duration: 0.3, ease: "easeOut" }}
				>
					<img src={logo} alt="로고" width={200} />
				</motion.div>
			) : (
				<motion.div
					className="h-full flex flex-col justify-between items-center px-[1.6rem] pt-[8rem] pb-[4.8rem]"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.3, ease: "easeIn" }}
				>
					<div className="flex flex-col items-center">
						<img src={logo} alt="로고" width={200} />
						<div className="h-[33.1rem] w-[33.1rem]">
							<Lottie src={Login} loop={true} />
						</div>
						<div className="flex flex-col items-center gap-[5rem] w-full">
							<div className="flex flex-col items-center gap-[1rem]">
								<h2 className="title_24_sb text-gray-800">
									나의 퍼스널 구단은?
								</h2>
								<p className="body_16_m">
									질문에 답하면서 나와 딱! 맞는 구단을 찾아보세요
								</p>
							</div>
							<button
								type="button"
								onClick={onStart}
								className="subhead_18_sb bg-blue-600 cursor-pointer text-white w-full p-[1rem] rounded-[10px]"
							>
								테스트 시작하기
							</button>
						</div>
					</div>
				</motion.div>
			)}
		</>
	);
};

export default LandingPage;
