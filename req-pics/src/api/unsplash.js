import axios from 'axios';

export default axios.create({
	baseURL: 'https://api.unsplash.com/',
	headers: {
		Authorization: 'Client-ID xjhfRw9J7AzFtOegP2u6Yx270ROT4u45HdnPAiag9Xw',
	},
});
