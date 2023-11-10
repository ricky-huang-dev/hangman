import connection from './connection.ts'

export async function getRandomWord(db = connection) {
  const dbLength = (await db('words').select()).length
  const randomId = Math.floor(Math.random() * dbLength) + 1
  return await db('words').where('id', randomId).select().first()
}
