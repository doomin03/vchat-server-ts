import { Socket, Server } from 'socket.io'
import { Events } from "./event.model"


export default class SockerEvent {

    private socket: Socket;
    private server: Server;

    constructor(socket: Socket, server: Server) {
        this.socket = socket;
        this.server = server;
    }

    public setEvent() {
        // 룸 참가
        this.socket.on(Events.CHAT.JOIN, (userId: number, roomId: string): void => {

        });
        // 룸 퇴장
        this.socket.on(Events.CHAT.LEAVE, (userId: number, roomId: string): void => {

        });
        // 메세지 전송
        this.socket.on(Events.CHAT.SEND, (userId: number, roomId: string, message: string): void => {
            this.socket.to(roomId).emit(Events.CHAT.MESSAGE, { userId, roomId, message });
        })
    }
}
