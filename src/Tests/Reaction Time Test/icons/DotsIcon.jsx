export default function DotsIcon({ width, height, fill = "white" }) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			ariah-hidden="true"
			className="3_dots_icon"
			data-icon="ellipsis-h"
			data-prefix="fas"
			viewBox="0 0 512 512"
			width={width}
			height={height}
		>
			<path
				fill={fill}
				d="M328 256c0 39.8-32.2 72-72 72s-72-32.2-72-72 32.2-72 72-72 72 32.2 72 72zm104-72c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72zm-352 0c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72z"
			></path>
		</svg>
	);
}
