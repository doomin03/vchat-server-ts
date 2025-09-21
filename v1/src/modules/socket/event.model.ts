// 클라 → 서버
export interface ClientToServerEvents {
  "chat:join": (
    payload: { userId: number; roomId: string },
    ack?: (ok: boolean) => void
  ) => void;

  "chat:leave": (
    payload: { userId: number; roomId: string }
  ) => void;

  "chat:send": (
    payload: { userId: number; roomId: string; message: string }
  ) => void;
}

// 서바 -> 클라
export interface ServerToClientEvents {
  "chat:message": (
    payload: { userId: number; roomId: string; message: string }
  ) => void;
}

// 이벤트 이름 상수
export const Events = {
  CONNECTION: "connection",
  DISCONNECT: "disconnect",
  CHAT: {
    JOIN: "chat:join",
    LEAVE: "chat:leave",
    SEND: "chat:send",
    MESSAGE: "chat:message",
  },
} as const;

export default { Events };
