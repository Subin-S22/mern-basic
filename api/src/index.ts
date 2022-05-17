import express from "express";

const app = express();
app.listen(4000, () => main());

function main() {
	console.log("main");
}
