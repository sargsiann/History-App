const API_URL = 'https://api.spacexdata.com/v3/history';

const getHistory = async () => {
	try {
		const response = await fetch(API_URL); 
		const data = await response.json();
		return data;
	} catch (error) {
		console.error('Fetch error:', error);
		return []; 
	}
};

export default getHistory;