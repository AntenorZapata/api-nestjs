import { Body, Controller, Post } from '@nestjs/common'
import { CreatePlayerDto } from './dtos/create-player.dto'

@Controller('api/v1/players')
export class PlayersController {
  @Post()
  createPlayer(@Body() createPlayerDto: CreatePlayerDto) {
    const { name } = createPlayerDto
    return name
  }
}
