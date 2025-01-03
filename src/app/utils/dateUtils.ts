export function isNewPost(dateString: string): boolean {
  const postDate = new Date(dateString);
  const currentDate = new Date();
  const differenceInTime = currentDate.getTime() - postDate.getTime();
  const differenceInDays = differenceInTime / (1000 * 3600 * 24);
  return differenceInDays <= 7;
}
