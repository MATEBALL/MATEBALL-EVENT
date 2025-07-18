import { ChevronLeft } from "lucide-react";
import { useState } from "react";
import type { QuestionData, QuestionOption } from "../data/question-data";

interface QuestionPageProps {
	questionKey: string;
	question: QuestionData;
	onAnswer: (questionKey: string, answer: QuestionOption) => void;
	resetQuiz: () => void;
	currentStepNum: number;
	totalSteps: number;
}

const QuestionPage = ({
	questionKey,
	question,
	onAnswer,
	resetQuiz,
	currentStepNum,
	totalSteps,
}: QuestionPageProps) => {
	const [selected, setSelected] = useState<QuestionOption | null>(null);

	const handleNext = () => {
		if (selected) {
			onAnswer(questionKey, selected);
		}
	};

	return (
		<div className="h-svh bg-[#F9FAFB] flex items-center justify-center ">
			<div className="w-full h-full bg-white rounded-2xl shadow-lg px-6 py-8 flex flex-col justify-between">
				{/* 상단 바 */}
				<div>
					<button
						type="button"
						onClick={resetQuiz}
						aria-label="뒤로 가기"
						className="text-gray-600 mb-4"
					>
						<ChevronLeft size={28} />
					</button>

					{/* 진행률 */}
					<div className="w-full bg-gray-200 h-2 rounded-full mb-6">
						<div
							className="bg-blue-500 h-2 rounded-full transition-all duration-500"
							style={{ width: `${(currentStepNum / totalSteps) * 100}%` }}
						/>
					</div>

					{/* 질문 */}
					<h2 className="text-3xl text-center font-extrabold text-gray-900 mt-50 mb-2 leading-snug whitespace-pre-line">
						{question.title}
					</h2>
					<p className="text-lg text-center text-gray-500 mb-6">
						질문에 답하면서 나와 딱! 맞는 구단을 확인해보세요.
					</p>
				</div>

				{/* 선택지 */}
				<div className="flex flex-col gap-4">
					{question.options.map((option) => (
						<button
							key={option.text}
							type="button"
							onClick={() => setSelected(option)}
							className={`h-20 flex items-center justify-center w-full border text-2xl font-medium rounded-xl px-5 py-4 transition ${
								selected?.text === option.text
									? "border-blue-500 bg-blue-50 text-blue-700"
									: "border-gray-200 bg-white text-gray-800"
							}`}
						>
							{option.icon && (
								<span className="text-2xl mr-3">{option.icon}</span>
							)}
							{option.text}
						</button>
					))}
				</div>

				{/* 다음 버튼 */}
				<div className="mt-10">
					<button
						type="button"
						onClick={handleNext}
						disabled={!selected}
						className={`w-full h-20 py-4 rounded-xl text-white text-2xl font-semibold transition ${
							selected
								? "bg-blue-600 hover:bg-blue-700"
								: "bg-gray-300 cursor-not-allowed"
						}`}
					>
						다음으로
					</button>
				</div>
			</div>
		</div>
	);
};

export default QuestionPage;
