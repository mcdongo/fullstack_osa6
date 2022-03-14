import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const createNew = async (content) => {
  const object = { content: content, votes:0}
  console.log(object)
  const response = await axios.post(baseUrl, object)
  return response.data
}

const voteUp = async (id) => {
  const original = await axios.get(`${baseUrl}/${id}`)
  const newObject = {id: original.data.id, content: original.data.content, votes: original.data.votes + 1}
  const response = await axios.put(`${baseUrl}/${id}`, newObject)
  return response.data
}

export default { getAll, createNew, voteUp}