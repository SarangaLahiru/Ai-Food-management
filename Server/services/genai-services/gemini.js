const { GoogleGenerativeAI } = require("@google/generative-ai");
const fs = require("fs");
require('dotenv').config()

const genAI = new GoogleGenerativeAI(process.env.API_KEY);

// Converts local file information to a GoogleGenerativeAI.Part object.
function fileToGenerativePart(path, mimeType) {
  return {
    inlineData: {
      data: Buffer.from(fs.readFileSync(path)).toString("base64"),
      mimeType
    },
  };
}

exports.genaiServices={
  async checkByImageAsync(image,mimetype){
    const model = genAI.getGenerativeModel({ model: "gemini-pro-vision" });
    const prompt = `
    Study the picture well. First look carefully at the contents and explain them if they are harmful to the human body. 
    Then do an analysis of the nutritional components present in it. 
    Finally, decide whether this is suitable for a healthy lifestyle or not.
    `;
    const imageParts = [
      fileToGenerativePart(image, mimetype),
    ];

    const result = await model.generateContent([prompt, ...imageParts]);
    const response = await result.response;
    const text = response.text();

    return text
  },
  async recipeAssync(ing1,ing2,ing3,county){
    const model= genAI.getGenerativeModel({model:"gemini-pro"})
    const prompt=`People tend to miss out on their nutritious diet due to busy schedule.
    Generate a nutritious diet recipe that can be easily made with minimal ingredients using the following ingredients.
    Ingredients:
    ${ing1},${ing2},${ing3}
    Try to make recipes as suitable for ${county} .
    `
    const result = await model.generateContent([prompt]);
    const response = await result.response;
    const text = response.text();

    return text
  }
}
