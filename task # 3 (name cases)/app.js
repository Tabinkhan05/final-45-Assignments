var personName = "muhammad ali";
console.log('name in uppercase: ' + personName.toUpperCase());
console.log('name in lowercase: ' + personName.toLowerCase());
var titleCaseName = personName.replace(/\b\w/g, function (c) { return c.toUpperCase(); });
console.log('name in titlecase: ' + titleCaseName);
