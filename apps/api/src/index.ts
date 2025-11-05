import Fastify from "fastify";
import cors from "@fastify/cors";

const fastify = Fastify({
  logger: true,
});

fastify.register(cors, {
  origin: process.env.FRONTEND_ORIGIN || "https://sarthiayurvedichospital.netlify.app",
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  credentials: true,
});

const port = Number(process.env.PORT) || 3000;

fastify.get("/hello", async (_request, reply) => {
  reply.send({ hello: "world" });
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
