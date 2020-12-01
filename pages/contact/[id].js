import { Fragment } from "react";

function Post(props) {
	return (
		<Fragment>
			<p>Hi {props.post}</p>
		</Fragment>
	);
}

Post.getInitialProps = ({ query }) => {
	return {
		post: query.id
	};
};
export default Post;
