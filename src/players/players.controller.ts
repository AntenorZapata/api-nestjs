import { Body, Controller, Post } from '@nestjs/common'
import { CreatePlayerDto } from './dtos/create-player.dto'
import { PlayersService } from './players.service'

@Controller('api/v1/players')
export class PlayersController {
  constructor(readonly playersService: PlayersService) {}
  @Post()
  create(@Body() createPlayerDto: CreatePlayerDto) {
    return this.playersService.create(createPlayerDto)
  }
}
