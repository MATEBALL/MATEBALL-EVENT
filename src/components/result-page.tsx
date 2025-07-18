// components/ResultPage.tsx
import { Share2, RotateCcw } from 'lucide-react';

interface ResultPageProps {
  teamKey: string;
  teams: any;
  resetQuiz: () => void;
  shareResult: () => void;
}

const ResultPage = ({ teamKey, teams, resetQuiz, shareResult }: ResultPageProps) => {
  const team = teams[teamKey];

  if (!team) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-400 via-orange-500 to-red-500 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-2xl p-8 w-full max-w-md text-center">
        <div className={`w-20 h-20 ${team.color} rounded-full mx-auto mb-6 flex items-center justify-center text-white font-bold shadow-lg`}>
          {team.name.split(' ')[0]}
        </div>
        <h1 className="text-2xl font-bold text-gray-800 mb-2">축하합니다! 🎉</h1>
        <h2 className="text-lg text-blue-600 font-semibold mb-4">당신의 퍼스널 구단은</h2>
        <h3 className="text-2xl font-bold text-gray-800 mb-6">{team.name}</h3>
        <p className="text-gray-700 text-base bg-gray-50 rounded-xl p-4 mb-8">{team.description}</p>

        <div className="space-y-4">
          <button
            onClick={shareResult}
            className="w-full bg-gradient-to-r from-green-500 to-blue-500 text-white py-3 rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition duration-300 flex justify-center items-center"
          >
            <Share2 className="mr-2" />
            결과 공유하기
          </button>
          <button
            onClick={resetQuiz}
            className="w-full bg-gray-600 text-white py-3 rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition duration-300 flex justify-center items-center"
          >
            <RotateCcw className="mr-2" />
            다시 테스트하기
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResultPage;
