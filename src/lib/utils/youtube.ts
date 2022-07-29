export const youtubeRegex = /https?:\/\/(?:www\.)?youtu(?:be\.com\/watch\?v=|\.be\/)([\w\-_]*)(&(amp;)?[\w?=]*)?/;

export function extractYoutubeId(url: string) {
  const match = url.match(youtubeRegex);
  if (match) {
    return match[1];
  }
  return null;
}

export function isYoutubeUrl(url: string) {
  return youtubeRegex.test(url);
}
