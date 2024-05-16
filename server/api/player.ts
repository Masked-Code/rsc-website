import { createError } from 'h3'
import { serverSupabaseUser, serverSupabaseClient } from '#supabase/server'

export default defineEventHandler(async (event) => {
  const user = await serverSupabaseUser(event)


  return { status: 200, body: { playerUsername: 'player 1', mmr: 1232 } }
})