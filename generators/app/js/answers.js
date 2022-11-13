
exports.answersConfig = function(answers) {
	answers.module = 'authentication'
	let genConfig = {
		domain_name 		: answers.domain, 
		module 		: capitalize(answers.module), 
	    module_lower_case: answers.module.toLowerCase(),
        domain : answers.domain + '.' + answers.module,
		package_path : answers.domain.split('.').join('/'), 
	};
	return genConfig;
}

function capitalize(string) {
    return string[0].toUpperCase() + string.slice(1);
}