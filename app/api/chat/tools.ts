export const weatherTool = tool({
  description: 'Get the current weather for a given city',

  inputSchema: z.object({
    city: z.string().describe('The city to get weather for'),
  }),

  run: async ({ city }) => {
    const mockWeather: Record<string, { temp: number; condition: string }> = {
      london: { temp: 12, condition: 'Cloudy' },
      tokyo: { temp: 22, condition: 'Sunny' },
      chennai: { temp: 34, condition: 'Hot & Humid' },
    };

    const data = mockWeather[city.toLowerCase()] ?? {
      temp: 25,
      condition: 'Unknown',
    };

    return {
      city,
      temperature: data.temp,
      condition: data.condition,
    };
  },
});
