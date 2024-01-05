import "./screen.css";

export default function Screen({ data }) {
	const Icon = data.styles.icon;
	const title = data.styles.title;
	const info = data.styles.info;
	const background = data.styles.background;

	return (
		<div
			className="test-container"
			style={{ backgroundColor: `${background}` }}
			onClick={data.onClick}
		>
			<Icon />

			<h1 className="title">{title}</h1>
			<p className="info">{info}</p>
		</div>
	);
}
