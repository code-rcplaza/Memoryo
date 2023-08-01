import axios from "axios";

export const getCardImages = async () => {
  const { data } = await axios.get(
    "https://fed-team.modyo.cloud/api/content/spaces/animals/types/game/entries?per_page=20"
  );
  return data.entries;
};
