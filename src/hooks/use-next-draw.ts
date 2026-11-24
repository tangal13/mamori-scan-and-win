import { useEffect, useState } from "react";

import { NEXT_DRAW_URL } from "@/constants/config";

async function fetchNextDraw() {
  const response = await fetch(NEXT_DRAW_URL);

  // fetch only fails by itself when there is no connection,
  // so answers like "404 not found" have to be checked here.
  if (!response.ok) {
    throw new Error(`Next draw request failed with status ${response.status}`);
  }

  const data: { nextDrawAt: string } = await response.json();
  const drawDate = new Date(data.nextDrawAt);

  if (Number.isNaN(drawDate.getTime())) {
    throw new Error(`Invalid next draw date: ${data.nextDrawAt}`);
  }

  return drawDate;
}

// While drawDate is null and hasError is false, the date is still loading.
export function useNextDraw() {
  const [drawDate, setDrawDate] = useState<Date | null>(null);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    fetchNextDraw()
      .then(setDrawDate)
      .catch(() => setHasError(true));
  }, []);

  return { drawDate, hasError };
}
