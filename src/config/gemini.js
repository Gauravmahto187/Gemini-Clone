// import { GoogleGenAI } from "@google/genai";

// const ai = new GoogleGenAI({
//     apiKey: "AIzaSyBajuOtNCCHmeepGXkfnnw",
// });

// async function main() {
//   const response = await ai.models.generateContent({
//     model: "gemini-2.5-flash",
//     // contents: "Explain how AI works in a few words",
//     contents: prompt,
//     config: {
//       thinkingConfig: {
//         thinkingBudget: 0, // Disables thinking
//       },
//     }
//   });
//   console.log(response.text);
// }

// export default main();




import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
   apiKey: "AIzaSyAerw6ufsKWTJU-jaK6u3YBrz137H-BSxA",
   
});

async function main(prompt) {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: prompt,
  });
  console.log(response.text);
  return response.text;
}
export default main;