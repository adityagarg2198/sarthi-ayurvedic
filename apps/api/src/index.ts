import Fastify from "fastify";
import cors from "@fastify/cors";
import dotenv from "dotenv";
dotenv.config();
import mongoosePlugin from "./plugins/mongoose";
import { DoctorsModel, IDoctors } from "./models";

const fastify = Fastify({
  logger: true,
});

fastify.register(mongoosePlugin);

fastify.register(cors, {
  origin:
    process.env.FRONTEND_ORIGIN ||
    "https://sarthiayurvedichospital.netlify.app",
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  credentials: true,
});

const port = Number(process.env.PORT) || 3000;

fastify.post("/createDoctor", async (request, reply) => {
  try {
    const { name, qualification, description } = request.body as IDoctors;
    const createdDoctor = await DoctorsModel.create({
      name,
      qualification,
      description,
    });
    reply.code(201).send(createdDoctor);
  } catch (err) {
    fastify.log.error({ msg: "Mongo ping failed after connect", err });
    throw err;
  }
});

fastify.get("/getDoctors", async (request, reply) => {
  try {
    const doctors = await DoctorsModel.find();
    reply.code(200).send(doctors);
  } catch (err) {
    fastify.log.error({ msg: "Mongo ping failed after connect", err });
    throw err;
  }
});

const start = async () => {
  try {
    await fastify.listen({ port, host: "0.0.0.0" });
    console.log("Server listening on", port);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
