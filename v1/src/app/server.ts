import { Server } from "socket.io"
import Fastify from "fastify"
import {ClientToServerEvents, ServerToClientEvents} from "../modules/socket/event.model"
import SockerEvent from "../modules/socket/socket.event"


const app = Fastify({ logger: true });

const io: Server = new Server<
   ClientToServerEvents,
   ServerToClientEvents
>(app.server, {
  cors: { origin: "*" },
})


io.of('/v1/chat').on("connection", (socket) => {
  const sockerEvent:SockerEvent = new SockerEvent(socket, io);
  sockerEvent.setEvent();
});


export default app;