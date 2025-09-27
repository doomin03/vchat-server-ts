import { AppDataSource } from '../../../db/db'
import { Room } from '../../../db/entities/chat/chat'

export interface CreateRoomDto {
  roomName: string;
  masterName: string;
}

class ChatService {
  private _roomRepo;

  constructor() {
    this._roomRepo = AppDataSource.getRepository(Room);
  }

  public createRoom(data: CreateRoomDto) {
    return this._roomRepo.save(data);
  }
}
