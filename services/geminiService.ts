import { GoogleGenAI } from "@google/genai";
import { PRODUCTS } from "../constants";

// Initialize the API client strictly according to guidelines
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const generateCoffeeRecommendation = async (userQuery: string, chatHistory: {role: string, parts: {text: string}[]}[] = []) => {
  if (!process.env.API_KEY) {
    return "I'm sorry, I cannot connect to the coffee knowledge base right now (API Key missing).";
  }

  const productContext = PRODUCTS.map(p => 
    `ID: ${p.id}, Name: ${p.name}, Origin: ${p.origin}, Roast: ${p.roastLevel}, Flavor Notes: ${p.flavorNotes.join(', ')}, Price: $${p.price}, Description: ${p.description}`
  ).join('\n');

  const systemInstruction = `
    You are the "Global Coffee House Sommelier", an expert AI coffee concierge.
    Your goal is to help customers find the perfect coffee from our catalog.
    
    Here is our current Product Catalog:
    ---
    ${productContext}
    ---
    
    Rules:
    1. Only recommend products from the catalog above.
    2. Be sophisticated, warm, and inviting in your tone, like a luxury barista.
    3. If a user asks about general coffee knowledge (brewing methods, grinding), answer helpfully.
    4. If recommending a product, mention its Name and why it fits their request.
    5. Keep answers concise (under 100 words) unless asked for a detailed explanation.
  `;

  try {
    // Using gemini-3-flash-preview for the best speed/accuracy balance in chat
    const model = 'gemini-3-flash-preview';
    
    // Construct history for context
    const history = chatHistory.map(msg => ({
      role: msg.role === 'user' ? 'user' : 'model',
      parts: msg.parts
    }));

    const chat = ai.chats.create({
      model: model,
      config: {
        systemInstruction: systemInstruction,
      },
      history: history
    });

    const result = await chat.sendMessage({
      message: userQuery
    });

    return result.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "My senses are momentarily overwhelmed. Please ask me again in a moment.";
  }
};