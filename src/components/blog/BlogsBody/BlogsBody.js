import React, { useState, useEffect } from 'react';
import Endpoint from '../../Endpoint/Endpoint';

const BlogsBody = () => {
	const [Posts, SetPosts] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await Endpoint.get('/posts');
				SetPosts(response.data);
				console.log(response.data);
			} catch (err) {
				console.log(err);
			}
		};
		fetchData();
	}, []);

	return (
		<div className='blogs-body-container'>
			{Posts.map((el, index) => {
				return (
					<div>
						<h1>{index + 1}</h1>
						<a href={el.link} target='_blank' rel='noopener noreferrer'>
							<p>{el.title}</p>
						</a>
					</div>
				);
			})}
		</div>
	);
};

export default BlogsBody;
