import { GoogleGenerativeAI } from '@google/generative-ai';

// Initialize Gemini AI with API key from environment variables
const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);

/**
 * Generate AI-powered cost estimation for contractor projects
 * @param {Object} projectData - Project details for estimation
 * @returns {Promise<Object>} - Detailed cost estimate
 */
export async function generateEstimate(projectData) {
  try {
    // Use Gemini 3 Pro Preview model
    const model = genAI.getGenerativeModel({ model: "gemini-3-pro-preview" });

    const prompt = `
You are an expert contractor cost estimator with 20+ years of experience in residential construction and remodeling. 

Based on the following project details, provide a detailed and accurate cost estimate:

**Project Information:**
- Client: ${projectData.clientName}
- Project Type: ${projectData.projectType}
- Description: ${projectData.description}
- Square Footage: ${projectData.squareFootage || 'Not specified'} sq ft
- Preferred Timeline: ${projectData.timeline || 'Flexible'}

**Please provide a comprehensive estimate in the following JSON format:**

{
  "totalEstimate": {
    "min": <number>,
    "max": <number>,
    "average": <number>,
    "currency": "EUR"
  },
  "breakdown": {
    "materials": {
      "cost": <number>,
      "items": [
        {"item": "...", "quantity": "...", "unitCost": <number>, "total": <number>}
      ]
    },
    "labor": {
      "cost": <number>,
      "hours": <number>,
      "hourlyRate": <number>
    },
    "permits": <number>,
    "contingency": <number>,
    "overhead": <number>
  },
  "timeline": {
    "estimatedDays": <number>,
    "phases": [
      {"phase": "...", "duration": "..."}
    ]
  },
  "risks": [
    {"risk": "...", "mitigation": "...", "impact": "low|medium|high"}
  ],
  "recommendations": [
    "..."
  ],
  "notes": "Additional information or considerations"
}

Ensure all costs are realistic for the current market (2025) and consider regional variations. Be thorough and detailed.
`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    // Extract JSON from the response (handle markdown code blocks if present)
    const jsonMatch = text.match(/```json\s*([\s\S]*?)\s*```/) || text.match(/\{[\s\S]*\}/);

    if (jsonMatch) {
      const jsonText = jsonMatch[1] || jsonMatch[0];
      return JSON.parse(jsonText);
    } else {
      throw new Error('Unable to parse AI response');
    }

  } catch (error) {
    console.error('Error generating estimate with Gemini:', error);
    throw new Error(`AI estimation failed: ${error.message}`);
  }
}

/**
 * Get material recommendations for a project type
 * @param {string} projectType - Type of project
 * @returns {Promise<Object>} - Material recommendations
 */
export async function getMaterialRecommendations(projectType) {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-3-pro-preview" });

    const prompt = `
As a construction materials expert, recommend the best materials for a ${projectType} project.

Provide recommendations in the following JSON format:

{
  "recommended": [
    {
      "category": "...",
      "material": "...",
      "brand": "...",
      "priceRange": "...",
      "pros": ["..."],
      "cons": ["..."]
    }
  ],
  "budgetOptions": [...],
  "premiumOptions": [...]
}
`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    const jsonMatch = text.match(/```json\s*([\s\S]*?)\s*```/) || text.match(/\{[\s\S]*\}/);
    if (jsonMatch) {
      const jsonText = jsonMatch[1] || jsonMatch[0];
      return JSON.parse(jsonText);
    }

    throw new Error('Unable to parse material recommendations');

  } catch (error) {
    console.error('Error getting material recommendations:', error);
    throw new Error(`Material recommendations failed: ${error.message}`);
  }
}

/**
 * Analyze project photos for progress tracking or assessment
 * @param {string} imageBase64 - Base64 encoded image
 * @param {string} context - Context about what to analyze
 * @returns {Promise<Object>} - Analysis results
 */
export async function analyzeProjectImage(imageBase64, context = '') {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-3-pro-preview" });

    const prompt = `
Analyze this construction/renovation project image and provide insights.

Context: ${context}

Provide analysis in JSON format:
{
  "description": "What you see in the image",
  "projectPhase": "...",
  "qualityAssessment": "...",
  "concerns": ["..."],
  "recommendations": ["..."],
  "estimatedProgress": <percentage>
}
`;

    const imagePart = {
      inlineData: {
        data: imageBase64,
        mimeType: "image/jpeg"
      }
    };

    const result = await model.generateContent([prompt, imagePart]);
    const response = await result.response;
    const text = response.text();

    const jsonMatch = text.match(/```json\s*([\s\S]*?)\s*```/) || text.match(/\{[\s\S]*\}/);
    if (jsonMatch) {
      const jsonText = jsonMatch[1] || jsonMatch[0];
      return JSON.parse(jsonText);
    }

    throw new Error('Unable to parse image analysis');

  } catch (error) {
    console.error('Error analyzing image:', error);
    throw new Error(`Image analysis failed: ${error.message}`);
  }
}

/**
 * Simple test function to verify API connection
 * @returns {Promise<boolean>} - Whether API is working
 */
export async function testConnection() {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-3-pro-preview" });
    const result = await model.generateContent("Say 'BuildSight AI is ready!' if you can read this.");
    const response = await result.response;
    const text = response.text();
    console.log('Gemini API Test:', text);
    return true;
  } catch (error) {
    console.error('Gemini API connection test failed:', error);
    return false;
  }
}
