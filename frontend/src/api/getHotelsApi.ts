export const getHotelsApi = async () => {
  try {
    const response = await fetch("http://localhost:3001/hotels");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error getting data", error);
    return []
  }
};
