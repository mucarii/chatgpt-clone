const OpenAI = require("openai");

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

async function chatCompletion(messages) {
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo-16k",
      messages: messages,
      temperature: 1,
      max_tokens: 256,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    });
    return response.data;
  } catch (error) {
    console.error("Erro ao completar o chat:", error);
    throw error;
  }
}

module.exports = { chatCompletion };
