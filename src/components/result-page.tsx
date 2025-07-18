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
    <div className="h-full flex flex-col items-center justify-center p-4 px-[5rem]">
        <div className={`px-[3rem] py-[3rem] ${team.color} flex-col rounded-full mx-auto mb-6 flex items-center justify-center text-white title_24_sb shadow-lg`}>
          {team.name.split(' ')[0]}
        </div>
        <h1 className="body_16_m text-gray-800 mb-2">축하합니다!</h1>
        <h2 className="body_16_m mb-4">당신의 퍼스널 구단은</h2>
        <h3 className="title_24_sb text-gray-800 mb-6">{team.name}</h3>
        <p className="text-gray-800 cap_12_m text-center bg-main-200 border-main-600 border-1 w-full rounded-xl p-4 mb-8  whitespace-pre-line">{team.description}</p>

        <div className="space-y-4 w-full mx-[2rem]">
          <button
            onClick={shareResult}
            className="w-full bg-main-800 text-white py-4 body_16_m rounded-xl  hover:shadow-lg transform hover:scale-102 transition duration-300 flex justify-center items-center"
          >
            <Share2 className="mr-2" />
            결과 공유하기
          </button>
          <button
            onClick={resetQuiz}
            className="w-full bg-gray-500 text-white body_16_m py-4 rounded-xl  hover:shadow-lg transform hover:scale-102 transition duration-300 flex justify-center items-center"
          >
            <RotateCcw className="mr-2" />
            다시 테스트하기
          </button>
        </div>
    </div>
  );
};

export default ResultPage;
