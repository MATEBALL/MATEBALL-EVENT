import { useState } from "react";
import LandingPage from "../components/landing-page";
import QuestionPage from "../components/question-page";
import ResultPage from "../components/result-page";
import { type QuestionOption, questions, teams } from "../data/question-data";

const BaseballTeamMatcher = () => {
	const [currentStep, setCurrentStep] = useState<string>("landing");
	const [answers, setAnswers] = useState<Record<string, QuestionOption>>({});
	const [result, setResult] = useState<keyof typeof teams | null>(null);

	const handleAnswer = (questionKey: string, answer: QuestionOption) => {
		const newAnswers = { ...answers, [questionKey]: answer };
		setAnswers(newAnswers);

		if (answer.team) {
			setResult(answer.team);
			setCurrentStep("result");
		} else if (answer.value) {
			setCurrentStep(answer.value);
		}
	};

	const getStepNumber = (step: string) => {
		const stepMap: Record<string, number> = {
			start: 1,
			passionate: 2,
			foodie: 2,
			focused: 2,
			passionate_angry: 3,
			passionate_cheer: 3,
			calm_with_beer: 3,
			calm_support: 3,
			emotional: 3,
		};
		return stepMap[step] || 1;
	};

	const resetQuiz = () => {
		setCurrentStep("landing");
		setAnswers({});
		setResult(null);
	};

	const shareResult = () => {
		if (navigator.share && result) {
			navigator.share({
				title: "나의 퍼스널 구단은?",
				text: `나의 퍼스널 구단은 ${teams[result].name}입니다!`,
				url: window.location.href,
			});
		}
	};

	return (
		<div className="w-full h-full">
			{currentStep === "landing" && (
				<LandingPage onStart={() => setCurrentStep("start")} />
			)}
			{currentStep === "result" && result && (
				<ResultPage
					teamKey={result}
					teams={teams}
					resetQuiz={resetQuiz}
					shareResult={shareResult}
				/>
			)}
			{currentStep !== "landing" && currentStep !== "result" && (
				<QuestionPage
					questionKey={currentStep}
					question={questions[currentStep]}
					onAnswer={handleAnswer}
					resetQuiz={resetQuiz}
					currentStepNum={getStepNumber(currentStep)}
					totalSteps={3}
				/>
			)}
		</div>
	);
};

export default BaseballTeamMatcher;
