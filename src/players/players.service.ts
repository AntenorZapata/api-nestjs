import { Injectable, Logger } from '@nestjs/common'
import { CreatePlayerDto } from './dtos/create-player.dto'
import { Player } from './interfaces/player.interface'
import { v4 as uuid } from 'uuid'

@Injectable()
export class PlayersService {
  private players: Player[] = []

  private readonly logger = new Logger()
  async create(player: CreatePlayerDto): Promise<void> {
    this.storeOnArray(player)
  }

  private storeOnArray(player: CreatePlayerDto): void {
    const { name, phoneNumber, email } = player

    const newPlayer: Player = {
      _id: uuid(),
      name,
      phoneNumber,
      email,
      ranking: 'ranking1',
      rankingPosition: 10,
      photoUrl: 'url_da_foto',
    }

    this.logger.log(this.players)

    this.players.push(newPlayer)
    console.log(this.players)
  }
}
