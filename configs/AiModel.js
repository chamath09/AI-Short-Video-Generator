const {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } = require("@google/generative-ai");
  
  const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: "application/json",
  };
  

    export const chatSession = model.startChat({
      generationConfig,
      history: [
        {
          role: "user",
          parts: [
            {text: "write a script to generate 30 seconds video on topic : Interesting historical story along with AI image prompt in Realistic format for each scene and give me result in JSON format with imagePrompt and  ContentText as field"},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "```json\n[\n  {\n    \"imagePrompt\": \"Realistic image of a bustling medieval marketplace, cobblestone streets, people in period clothing bartering goods, vibrant colors, highly detailed\",\n    \"ContentText\": \"Our story begins in 14th century Florence, a city teeming with life and ambition.\"\n  },\n  {\n    \"imagePrompt\": \"Realistic portrait of a young Leonardo da Vinci, intense gaze, thoughtful expression, holding a sketchbook, soft lighting, detailed hands\",\n    \"ContentText\": \"A young Leonardo da Vinci, barely out of his teens, possessed a mind far beyond his years.\"\n  },\n  {\n    \"imagePrompt\": \"Realistic image of Leonardo sketching anatomical drawings, detailed human figures, dissecting tools, dim workshop lighting, realistic textures\",\n    \"ContentText\": \"He was obsessed with understanding the human form, secretly dissecting corpses to master anatomy, a practice considered highly taboo.\"\n  },\n  {\n    \"imagePrompt\": \"Realistic image of a tense meeting, wealthy patrons surrounding Leonardo, discussing a commission, opulent room, dramatic lighting, expressions of intrigue\",\n    \"ContentText\": \"One day, he received a secret commission: to paint a portrait of a mysterious woman.\"\n  },\n  {\n    \"imagePrompt\": \"Realistic portrait of the Mona Lisa, subtle smile, enigmatic gaze, soft light, highly detailed, realistic skin texture,  a hint of mystery in the background\",\n    \"ContentText\": \"The result was the Mona Lisa, a portrait that continues to captivate and confound viewers centuries later.\"\n  },\n  {\n    \"imagePrompt\": \"Realistic image of the Mona Lisa hanging in a museum,  crowds of people admiring it, flashing cameras, museum setting with high ceilings\",\n    \"ContentText\": \"To this day, her smile remains a mystery, her gaze following you, making her one of the most famous works of art in history.\"\n  },\n  {\n    \"imagePrompt\": \"Realistic time-lapse of the Mona Lisa being painted, showing the slow and meticulous process, brushstrokes visible, subtle changes over time\",\n    \"ContentText\": \"(Optional:  A brief visual of the painting process, if time allows within the 30-second limit).\" \n  }\n]\n```\n\n**Notes:**\n\n* **30-Second Video:**  This JSON provides enough content for a 30-second video, but the actual timing will depend on the video editing software and pacing. You'll likely need to adjust the text duration and potentially add transition scenes.\n* **AI Image Generation:**  You will need to use an AI image generator (like Midjourney, Dall-E 2, Stable Diffusion) to create images based on these prompts.  Remember to specify \"realistic\" in your prompts to get the desired style.\n* **Video Editing:** You'll need video editing software to combine the images and voiceover (or text overlays) to create the final video.\n* **Realistic Style:** The \"Realistic\" keyword is crucial for AI image generation. Experiment with adding details like lighting conditions, textures, and specific poses to refine the images.\n* **Content Flexibility:** You can adapt this story or choose a different historical event, just remember to tailor the prompts and text to match.\n\n\nThis JSON provides a structured framework.  Remember to adjust the text and image prompts to fit the specific capabilities and limitations of your chosen AI image generator and video editing tools.  The time allocated for each scene will need careful consideration to create a cohesive and engaging 30-second video.\n"},
          ],
        },
      ],
    });
  
