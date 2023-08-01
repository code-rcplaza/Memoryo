import { useEffect, useState } from "react";
import { getCardImages } from "./../services/services";

const useCardImages = () => {
  const [cardImages, setCardImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchCardImages = async () => {
    try {
      const rawImages = await getCardImages();

      const formattedImages = rawImages.map((image) => ({
        url: image.fields.image.url,
        title: image.fields.image.title,
      }));
      setCardImages(formattedImages);
      setLoading(false);
    } catch (error) {
      setError("Error obtaining card images");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCardImages();
  }, []);

  return { cardImages, loading, error };
};

export default useCardImages;
