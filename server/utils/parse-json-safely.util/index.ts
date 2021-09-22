export const parseJsonSafely = <T>(json: string): T | null => {
  try {
    return JSON.parse(json);
  } catch (e) {
    console.error(e);

    return null;
  }
};

export default parseJsonSafely;
