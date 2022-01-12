export const parseJsonSafely = <T>(json: string): T | null => {
  try {
    return JSON.parse(json);
  } catch (err) {
    console.error('[parseJsonSafely]: ', err);

    return null;
  }
};

export default parseJsonSafely;
