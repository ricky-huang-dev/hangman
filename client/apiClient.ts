import request from 'superagent'

export async function getGreeting(): Promise<string> {
  const res = await request.get('/api/v1/greeting')
  return res.body.greeting
}

// Create a radom word func to display the word.
// Create a DB with radom words and categories.
//  Get iamges for HangMan
// Five tries
