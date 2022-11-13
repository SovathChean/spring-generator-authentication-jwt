
const basicQuestions = [
	{
		type    : 'input',
		name    : 'domain', 
		default : 'com.mydomain.api', 
		message : 'Please type the domainId [com.mydomain.api]: ', 
		validate: function(domain) {
			var validPack = typeof domain == 'string' && domain.indexOf('.') > 0;
			if (!validPack) {
				console.log('\n "domain" must be a string and contains at least one point "."');
			}
			return validPack;
		}
	}
];

exports.questions = [...basicQuestions];

