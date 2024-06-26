const openai = require('../config/opnai')
const inputPrompt = require('../models/input-prompt')

module.exports = {
    async sendText(req, res) {
        try {
            const OPENAI_API_KEY = openai.apiKey; // Assuming apiKey is the correct property

            const inputPrompt = new InputPrompt(req.body);

            const response = await openai.createCompletion({
                model: openai.chatGPT, // Assuming chatGPT is the correct model
                prompt: inputPrompt.text,
                maxTokens: 150
            });

            return res.status(200).json({
                success: true,
                data: response.data.choices[0].text
            });
        } catch (error) {
            console.error("Error:", error);

            return res.status(400).json({
                success: false,
                error: error.response ? error.response.data : "Something went wrong. Please try again later."
            });
        }
    }
};
