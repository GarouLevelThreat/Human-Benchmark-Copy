import ReactionTimeTestIcon from "./icons/ReactionTimeTestIcon"
import SequenceMemoryGameIcon from "./icons/SequenceMemoryTestIcon";
import AimTrainerTestIcon from "./icons/AimTrainerTestIcon";
import NumberMemoryTestIcon from "./icons/NumberMemoryTestIcon"
import VerbalMemoryTestIcon from "./icons/VerbalMemoryTestIcon"
import TypingTestIcon from "./icons/TypingTestIcon"

const cards_data = [
	{
		// 0.
		icon: () => (
			<ReactionTimeTestIcon
				width={60}
				height={60}
				fill="rgba(43, 135, 209, 0.5)"
			/>
		),
		title: "Reaction Time",
		description: "Test your visual reflexes.",
	},
	{
		// 1.
		icon: () => (
			<SequenceMemoryGameIcon
				width={60}
				height={60}
				fill="rgba(43, 135, 209, 0.5)"
			/>
		),
		title: "Sequence Memory",
		description: "Remember and incresingly long pattern of button presses.",
	},
	{
		// 2.
		icon: () => (
			<AimTrainerTestIcon
				width={60}
				height={60}
				fill="rgba(43, 135, 209, 0.5)"
			/>
		),
		title: "Aim Trainer",
		description: "How quickly can you hit all the targets?",
	},
	{
		// 3.
		icon: () => (
			<NumberMemoryTestIcon
				width={60}
				height={60}
				fill="rgba(43, 135, 209, 0.5)"
			/>
		),
		title: "Number Memory",
		description: "Remember the longest number you can.",
	},
	{
		// 4.
		icon: () => (
			<VerbalMemoryTestIcon
				width={60}
				height={60}
				fill="rgba(43, 135, 209, 0.5)"
			/>
		),
		title: "Verbal Memory",
		description: "Remember and incresingly long pattern of button presses.",
	},
	{
		// 5.
		icon: () => (
			<SequenceMemoryGameIcon
				width={60}
				height={60}
				fill="rgba(43, 135, 209, 0.5)"
			/>
		),
		title: "Chimp Test",
		description: "Are you smarter than a chimpanzee?",
	},
	{
		// 6.
		icon: () => (
			<SequenceMemoryGameIcon
				width={60}
				height={60}
				fill="rgba(43, 135, 209, 0.5)"
			/>
		),
		title: "Visual Memory",
		description: "Remember an incresingly large board of squares.",
	},
	{
		// 7.
		icon: () => (
			<TypingTestIcon width={60} height={60} fill="rgba(43, 135, 209, 0.5)" />
		),
		title: "Typing",
		description: "How many words per minute can you type?",
	},
];

export default cards_data;