import { useState, useEffect } from 'react';

const STORAGE_KEY = 'react-learn-progress';

// Returns progress helpers backed by localStorage
function useProgress() {
  const [completed, setCompleted] = useState(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  // Keep localStorage in sync whenever completed changes
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(completed));
    } catch {
      // localStorage might be unavailable (e.g. private browsing)
    }
  }, [completed]);

  function markComplete(lessonId) {
    setCompleted((prev) => {
      if (prev.includes(lessonId)) return prev;
      return [...prev, lessonId];
    });
  }

  function isComplete(lessonId) {
    return completed.includes(lessonId);
  }

  function resetProgress() {
    setCompleted([]);
  }

  return { completed, markComplete, isComplete, resetProgress };
}

export default useProgress;
