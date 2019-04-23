import { http } from './config'
import { secret_key, public_key } from '@/key_marvel'

export default	{
  listCharacters: () => {
    return http.get(`characters?ts=1&apikey=${public_key}&hash=${secret_key}`)
  },
  listCharactersById: (characterId) => {
    return http.get(`characters/${characterId}?ts=1&apikey=${public_key}&hash=${secret_key}`)
  }
}