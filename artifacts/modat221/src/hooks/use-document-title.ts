import { useEffect } from "react";

export function useDocumentTitle(title: string) {
  useEffect(() => {
    document.title = `${title} | مُعدّات 221`;
  }, [title]);
}
