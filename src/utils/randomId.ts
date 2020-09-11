export function rand(
  length: number,
  current: string | undefined = undefined
): string {
  current = current ? current : '';
  return length
    ? rand(
        --length,
        '0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz'.charAt(
          Math.floor(Math.random() * 60)
        ) + current
      )
    : current;
}
