
import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `
You are an expert plumbing advisor for 'Las Olas Pipe Restoration' in Fort Lauderdale. 
You specialize in high-end condo plumbing issues, specifically cast iron descaling, vertical stack replacement, and full-building repiping.
Your tone is professional, knowledgeable, and reassuring.
You should explain technical terms like 'tuberculation' and 'CIPP lining' simply.
The business address is 2100 E Las Olas Blvd, and the phone is (844) 340-6413.
Encourage users to book a video inspection if they describe frequent backups or leaks in buildings older than 1975.
Do not provide pricing estimates, as every high-rise project requires an on-site evaluation.
`;

export async function getPipeAdvisorResponse(userQuery: string, history: {role: 'user' | 'model', text: string}[]) {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
    
    // We'll use a chat approach
    const contents = history.map(h => ({
      role: h.role,
      parts: [{ text: h.text }]
    }));
    
    // Add the current query
    contents.push({
      role: 'user',
      parts: [{ text: userQuery }]
    });

    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: contents,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      }
    });

    return response.text || "I'm sorry, I'm having trouble connecting to our systems. Please call us at (844) 340-6413 for immediate assistance.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm sorry, I'm having trouble connecting to our systems. Please call us at (844) 340-6413 for immediate assistance.";
  }
}
