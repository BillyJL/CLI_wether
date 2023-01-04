import chalk from "chalk";
import dedent from "dedent-js";

const printError = (error) => {
	console.log(chalk.bgRed(' ERROR ') + ' ' + error);
};

const printSuccess = (message) => {
	console.log(chalk.bgGreen(' SUCCESS ') + ' ' + message);
};

const printHelp = () => {
	console.log(
		dedent`${chalk.bgCyan(' HELP ')}
		Without parameters - weather output
		-s [CITY] - set the city
		-h - output help
		-t [API_KEY] - saving token
		`
	);
}

export { printError, printSuccess, printHelp };