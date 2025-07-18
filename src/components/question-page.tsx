// components/QuestionPage.tsx
import { ChevronRight } from 'lucide-react';

interface QuestionPageProps {
  questionKey: string;
  question: any;
  onAnswer: (questionKey: string, answer: any) => void;
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
  if (!question) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-2xl w-full">
        {/* 진행률 */}
        <div className="mb-6">
          <div className="flex justify-between text-sm text-gray-500 mb-2">
            <span>진행률</span>
            <span>{currentStepNum}/{totalSteps}</span>
          </div>
          <div className="w-full bg-gray-200 h-2 rounded-full">
            <div
              className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-500"
              style={{ width: `${(currentStepNum / totalSteps) * 100}%` }}
            />
          </div>
        </div>

        {/* 질문 */}
        <h2 className="text-xl sm:text-2xl font-bold text-center text-gray-800 mb-4">
          {question.title}
        </h2>

        {/* 선택지 */}
        <div className="space-y-4">
          {question.options.map((option: any, idx: number) => (
            <button
              key={idx}
              onClick={() => onAnswer(questionKey, option)}
              className="w-full p-4 text-left border-2 border-gray-200 rounded-xl hover:border-blue-500 hover:bg-blue-50 transition transform hover:scale-105 group"
            >
              <div className="flex items-center">
                {option.icon && <span className="text-2xl mr-4">{option.icon}</span>}
                <div>
                  <p className="font-semibold text-gray-800 group-hover:text-blue-600">{option.text}</p>
                  {option.subtitle && <p className="text-sm text-gray-500 group-hover:text-blue-500">{option.subtitle}</p>}
                </div>
                <ChevronRight className="ml-auto text-gray-400 group-hover:text-blue-600" size={20} />
              </div>
            </button>
          ))}
        </div>

        {/* 다시하기 */}
        <div className="text-center mt-8">
          <button onClick={resetQuiz} className="text-gray-500 hover:text-gray-700 transition-colors duration-300">
            처음부터 다시하기
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuestionPage;
