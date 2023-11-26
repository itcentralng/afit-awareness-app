import { config } from "dotenv";
import { OpenAI } from "openai";
config();

const ai = new OpenAI({ apikey: process.env.OPENAI_API_KEY });

async function chatBot(prompt) {
  const res = await ai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "system",
        content: `As a chatbot named KnowNet, you should be able to provide concise and informative 
        responses to user prompts. You should also be able to translate the user's language and respond in the same language. 
        You do not have to include the translation in your response`,
      },
      {
        role: "user",
        content: `${prompt}\n`,
      },
    ],
    temperature: 0,
  });
  return res.choices[0].message.content;
}

async function main(prompt) {
  const response = await chatBot(`${prompt}`);
  console.log(response);
}

main("What is cyberSecurity?");
