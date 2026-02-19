import { tool } from 'ai';
import { z } from 'zod';

export const weatherTool = tool({
  description: 'Get the current weather for a given city',

  parameters: z.object({
    city: z.string().describe('The city to get weather for'),
  }),

  execute: async ({ city }: { city: string }): Promise<{ city: string; temperature: number; condition: string }> => {
    const mockWeather: Record<string, { temp: number; condition: string }> = {
      london: { temp: 12, condition: 'Cloudy' },
      tokyo: { temp: 22, condition: 'Sunny' },
      'new york': { temp: 18, condition: 'Partly cloudy' },
    };

    const data =
      mockWeather[city.toLowerCase()] ??
      { temp: 20, condition: 'Unknown' };

    return {
      city,
      temperature: data.temp,
      condition: data.condition,
    };
  },
});

export const tools = {
  getWeather: weatherTool,
};