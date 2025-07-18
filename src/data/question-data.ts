export interface QuestionOption {
	text: string;
	subtitle?: string;
	icon?: string;
	value?: string;
	team?: keyof typeof teams;
}

export interface QuestionData {
	title: string;
	options: QuestionOption[];
}

export const teams = {
	samsung: {
		name: "삼성 라이온즈",
		color: "bg-blue-600",
		description:
			"차분하고 이성적인 당신!\n 감정보다는 냉정한 분석을 선호하는 타입입니다.",
	},
	lotte: {
		name: "롯데 자이언츠",
		color: "bg-red-500",
		description:
			"열정적이지만 현실적인 당신!\n 때로는 감정이 앞서지만 그것도 매력이에요.",
	},
	kia: {
		name: "KIA 타이거즈",
		color: "bg-red-600",
		description:
			"승부에 집중하는 프로페셔널한 당신!\n 야구 자체의 재미를 아는 진정한 팬입니다.",
	},
	lg: {
		name: "LG 트윈스",
		color: "bg-pink-500",
		description:
			"편안함을 추구하는 당신!\n 집에서 중계로 보는 것도 나쁘지 않다고 생각해요.",
	},
	doosan: {
		name: "두산 베어스",
		color: "bg-blue-900",
		description:
			"먹방이 우선인 당신!\n 야구장은 맛있는 음식을 먹으러 가는 곳이기도 하죠.",
	},
	ssg: {
		name: "SSG 랜더스",
		color: "bg-orange-500",
		description:
			"솔직한 당신!\n 치킨이 야채보다 맛있다는 걸 인정하는 정직한 성격이에요.",
	},
	kt: {
		name: "KT 위즈",
		color: "bg-gray-800",
		description:
			"세심한 관찰력을 가진 당신!\n 선수들의 작은 움직임까지 놓치지 않는 눈을 가졌어요.",
	},
	hanwha: {
		name: "한화 이글스",
		color: "bg-orange-600",
		description:
			"응원의 힘을 믿는 당신!\n 내가 응원해야 팀이 이긴다고 생각하는 진정한 팬입니다.",
	},
	nc: {
		name: "NC 다이노스",
		color: "bg-blue-400",
		description:
			"현실적인 당신!\n 때로는 빠른 포기도 지혜라는 걸 아는 실용적인 성격이에요.",
	},
	kiwoom: {
		name: "키움 히어로즈",
		color: "bg-purple-600",
		description:
			"끈기 있는 당신!\n 끝까지 포기하지 않고 응원하는 진정한 승부사입니다.",
	},
};

export const questions: Record<string, QuestionData> = {
	start: {
		title: "평소 나의 야구 관람 스타일은?",
		options: [
			{
				text: "열정응원러",
				subtitle: "응원가 따라하며 가는 팀",
				value: "passionate",
				icon: "🔥",
			},
			{
				text: "직관먹방러",
				subtitle: "야구장 역시 치맥이지",
				value: "foodie",
				icon: "🍗",
			},
			{
				text: "경기집중러",
				subtitle: "야구장은 야구를 보러 가는지",
				value: "focused",
				icon: "⚾",
			},
		],
	},
	passionate: {
		title:
			"여유롭게 이기고 있었는데 \n화장실 갔다 온 사이에 역전된 상황에서 나는?",
		options: [
			{ text: "분노한다", value: "passionate_angry" },
			{ text: "더 열심히 응원한다", value: "passionate_cheer" },
		],
	},
	foodie: {
		title: "여유롭게 이기던 중 역전당했다! 나는?",
		options: [
			{
				text: "화가 나지만 맥주 한 캔 마시면 진정 가능",
				value: "calm_with_beer",
			},
			{ text: "침착하게 응원한다", value: "calm_support" },
			{ text: "일희일비한다 이러지마 제발...", value: "emotional" },
		],
	},
	focused: {
		title: "축구는 아니고 야구였다... 어떤 반응?",
		options: [
			{
				text: "화가 나지만 맥주 한 캔 마시면 진정 가능",
				value: "calm_with_beer",
			},
			{ text: "침착하게 응원한다", value: "calm_support" },
			{ text: "일희일비한다 이러지마 제발...", value: "emotional" },
		],
	},
	passionate_angry: {
		title: "실책으로 게임이 깨졌다...",
		options: [
			{ text: "야구 안 본다 다짐함", team: "samsung" },
			{ text: "화가 나지만 참는다", team: "lotte" },
		],
	},
	passionate_cheer: {
		title: "직관 갔는데 11:0으로 졌다",
		options: [
			{ text: "직관 그 자체 의미 있음", team: "kia" },
			{ text: "중계로 볼걸 그랬다", team: "lg" },
		],
	},
	calm_with_beer: {
		title: "치킨 엎고 중요한 순간이다!",
		options: [
			{ text: "치킨 다시 산다", team: "doosan" },
			{ text: "치킨보다 경기 집중", team: "ssg" },
		],
	},
	calm_support: {
		title: "마무리 수비 실수로 연장 진행!",
		options: [
			{ text: "납득 안 됨", team: "kt" },
			{ text: "그래도 지켜본다", team: "hanwha" },
		],
	},
	emotional: {
		title: "1회 초 10점 내줌",
		options: [
			{ text: "바로 집 간다", team: "nc" },
			{ text: "희망 놓지 않고 끝까지", team: "kiwoom" },
		],
	},
};
