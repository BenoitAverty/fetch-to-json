'use strict';

module.exports = function convertToJson(response) {
	if(!response.ok) throw response;

  return response.json();
};
