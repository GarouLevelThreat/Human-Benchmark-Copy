import SequenceMemoryTest from "../Tests/Sequence Memory Test/SequenceMemoryTest"
import SequenceMemoryTestIcon from "./icons/SequenceMemoryTestIcon"
import ReactionTimeTestIcon from "./icons/ReactionTimeTestIcon";
import AimTrainerTestIcon from "./icons/AimTrainerTestIcon";
import NumberMemoryTestIcon from "./icons/NumberMemoryTestIcon";
import VerbalMemoryTestIcon from "./icons/VerbalMemoryTestIcon";
import TypingTestIcon from "./icons/TypingTestIcon";

const data = [
	{
		// 0.
		icon: () => <ReactionTimeTestIcon width={100} height={100} />,
		start_screen: {
			game: () => <SequenceMemoryTest />,
			title: "Reaction Time Test",
			info: [
				"When the box turns green, click as quickly as you can.",
				"Click anywhere to start.",
			],
		},
		game_info: {
			graph: "/src/Data/images/reaction_time_test_graph.png",
			description: [
				"This is a simple tool to measure your reaction time.",
				"The average (median) reaction time is 273 milliseconds, according to the data collected so far.",
				"In addition to measuring your reaction time, this test is affected by the latency of your computer and monitor. Using a fast computer and low latency / high framerate monitor will improve your score.",
				"Scores in this test are faster than the aim trainer test, because you can react instantly without moving the cursor.",
				"This is discussed in further detail on the the statistics page. While an average human reaction time may fall between 200-250ms, your computer could be adding 10-50ms on top. Some modern TVs add as much as 150ms!",
				"Other tools: What's My GPU?",
				"If you want, you can keep track of your scores, and see your full history of reaction times.Just perform at least 5 clicks and then save.",
			],
		},
		end_screen: {
			title: "Sequence Memory",
			score: (score) => {
				return `Level ${score}`;
			},
		},
	},
	{
		// 1.
		icon: () => <SequenceMemoryTestIcon width={128} height={128} />,
		start_screen: {
			game: () => <SequenceMemoryTest />,
			title: "Sequence Memory Test",
			info: ["Memorize the pattern."],
		},
		game_info: {
			graph: "/src/Data/images/sequence_memory_test_graph.png",
			description: [
				"Memorize the sequence of buttons that light up, then press them in order.",
				"Every time you finish the pattern, it gets longer.",
				"Make a mistake, and the test is over.",
			],
		},
		end_screen: {
			title: "Sequence Memory",
			score: (score) => {
				return `Level ${score}`;
			},
		},
	},
	{
		// 2.
		icon: () => <AimTrainerTestIcon width={100} height={100} />,
		start_screen: {
			game: () => <SequenceMemoryTest />,
			title: "Aim Trainer",
			info: [
				"Hit 30 targets as quickly as you can.",
				"Click the target above to begin.",
			],
		},
		game_info: {
			graph: "/src/Data/images/aim_trainer_test_graph.png",
			description: [
				"Click the targets as quickly and accurately as you can.",
				"This tests reflexes and hand-eye coordination.",
				"Once you've clicked 30 targets, your score and average time per target will be displayed.",
				"This test is best taken with a mouse or tablet screen. Trackpads are difficult to score well with.",
			],
		},
		end_screen: {
			title: "Sequence Memory",
			score: (score) => {
				return `Level ${score}`;
			},
		},
	},
	{
		// 3.
		icon: () => <NumberMemoryTestIcon width={100} height={100} />,
		start_screen: {
			game: () => <SequenceMemoryTest />,
			title: "Number Memory",
			info: [
				"The average person can remember 7 numbers at once. Can you do more?",
			],
		},
		game_info: {
			graph: "/src/Data/images/number_memory_test_graph.png",
			description: [
				"The average person can only remember 7 digit numbers reliably, but it's possible to do much better using mnemonic techniques. Some helpful links are provided below.",
				"Mnemonic major system",
				"Dominic system",
				"Katapayadi system",
				"Mnemonic devices",
			],
		},
		end_screen: {
			title: "Sequence Memory",
			score: (score) => {
				return `Level ${score}`;
			},
		},
	},
	{
		// 4.
		icon: () => <VerbalMemoryTestIcon width={100} height={100} />,
		start_screen: {
			game: () => <SequenceMemoryTest />,
			title: "Verbal Memory Test",
			info: [
				"You will be shown words, one at a time. If you've seen a word during the test, click SEEN. If it's a new word, click NEW",
			],
		},
		game_info: {
			graph: "/src/Data/images/verbal_memory_test_graph.png",
			description: [
				"This test measures how many words you can keep in short term memory at once.",
				"The number of words you need to remember grows continually, until you can't keep them in your head anymore.",
				"Go as long as you can. You have 3 strikes until game over.",
				"Your score is how many turns you lasted.",
			],
		},
		end_screen: {
			title: "Sequence Memory",
			score: (score) => {
				return `Level ${score}`;
			},
		},
	},
	{
		// 5.
		icon: () => <SequenceMemoryTestIcon width={128} height={128} />,
		start_screen: {
			game: () => <SequenceMemoryTest />,
			title: "Are You Smarter Than a Chimpanzee?",
			info: [
				"Click the squares in order according to their numbers.",
				"The test will get progressively harder.",
			],
		},
		game_info: {
			graph: "/src/Data/images/chimp_test_graph.png",
			description: [
				"This is a test of working memory, made famous by a study that found that chimpanzees consistently outperform humans on this task.",
				"In the study, the chimps consistently outperformed humans, and some chimps were able to remember 9 digits over 90% of the time.",
				"This test is a variant of that concept, that gets increasingly difficult every turn, starting at 4 digits, and adding one every turn. If you pass a level, the number increases. If you fail, you get a strike. Three strikes and the test is over.",
				"Youtube: Chimp vs Human!",
			],
		},
		end_screen: {
			title: "Sequence Memory",
			score: (score) => {
				return `Level ${score}`;
			},
		},
	},
	{
		// 6.
		icon: () => <SequenceMemoryTestIcon width={128} height={128} />,
		start_screen: {
			game: () => <SequenceMemoryTest />,
			title: "Visual Memory Test",
			info: ["Memorize the squares."],
		},
		game_info: {
			graph: "/src/Data/images/visual_memory_test_graph.png",
			description: [
				"Every level, a number of tiles will flash white. Memorize them, and pick them again after the tiles are reset!",
				"Levels get progressively more difficult, to challenge your skills.",
				"If you miss 3 tiles on a level, you lose one life.",
				"You have three lives.",
				"Make it as far as you can!",
			],
		},
		end_screen: {
			title: "Sequence Memory",
			score: (score) => {
				return `Level ${score}`;
			},
		},
	},
	{
		// 7.
		icon: () => <TypingTestIcon width={100} height={100} />,
		start_screen: {
			game: () => <SequenceMemoryTest />,
			title: "Typing Test",
			info: ["How many words per minute can you type?"],
		},
		game_info: {
			graph: "/src/Data/images/typing_test_graph.png",
			description: [
				"This is a simple test of typing speed, measuring words per minute, or WPM.",
				"The standard measure of WPM is (number of characters / 5) / (time taken). By that measurement, 'quick brown fox' is 15 characters, including spaces.",
				"The recorded score is WPM * Accuracy",
			],
		},
		end_screen: {
			title: "Sequence Memory",
			score: (score) => {
				return `Level ${score}`;
			},
		},
	},
];

export default data;