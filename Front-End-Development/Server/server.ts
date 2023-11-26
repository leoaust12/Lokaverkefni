import {config} from "dotenv";

config()

import fastify from "fastify";

const app = fastify();

console.log("Server test 1: Success!");

app.listen({ port: parseInt(process.env.PORT!)});