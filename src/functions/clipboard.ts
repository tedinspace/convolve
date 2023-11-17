/**
 * copy text to clipboard
 * @param text
 */
export function copy(text: any) {
    navigator.clipboard.writeText(text);
  }