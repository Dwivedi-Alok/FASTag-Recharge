import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const sleep = ms => new Promise(res => setTimeout(res, ms));

async function fetchWithBackoff(apiUrl, payload, retries = 5, delay = 1000) {
    for (let i = 0; i < retries; i++) {
        try {
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });

            if (response.ok) {
                return await response.json();
            }
            
            if (response.status === 429) {
                console.warn(`Throttled. Retrying in ${delay}ms...`);
                await sleep(delay);
                delay *= 2; 
            } else {
                throw new Error(`HTTP Error: ${response.status} ${response.statusText}`);
            }
        } catch (error) {
            console.warn(`Fetch attempt ${i + 1} failed: ${error.message}`);
            if (i === retries - 1) {
                console.error("All retry attempts failed.");
                throw error;
            }
            await sleep(delay);
            delay *= 2;
        }
    }
}

export const callGeminiApi = async (systemPrompt, userQuery, useGrounding = false) => {
    try {
        const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash' });

        const result = await model.generateContent([systemPrompt, userQuery]);
        const response = await result.response;
        const text = await response.text();
        return text;
    } catch (error) {
        console.error("Error calling Gemini API:", error);
        throw new Error(`Failed to get response from AI: ${error.message}`);
    }
};