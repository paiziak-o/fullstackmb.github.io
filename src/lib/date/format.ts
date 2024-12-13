/**
 * Formats a date into "DD MMM YYYY" format
 * @param date - Date object or date string or timestamp
 * @returns Formatted date string (e.g., "15 Jan 2024")
 */
export const formatDate = (date: Date | string | number): string => {
  const dateObj = new Date(date);
  
  return dateObj.toLocaleDateString('en-US', {
    day: '2-digit',
    month: 'short',
    year: 'numeric'
  });
};

/**
 * Example usage:
 * formatDate(new Date())           // "15 Jan 2024"
 * formatDate("2024-01-15")        // "15 Jan 2024"
 * formatDate(1705334400000)       // "15 Jan 2024"
 */