exports.Sucess = (data) => {
	const response = {
		status: true,
		data: data,
	};
	return response;
};

exports.Error = (message) => {
	const response = {
		status: false,
		message: message,
	};
	return response;
};