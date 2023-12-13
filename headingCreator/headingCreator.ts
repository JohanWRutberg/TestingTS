function createHeading(text: string, level: number): string {
  if (level < 1 || level > 6) {
    throw new Error("Heading level must be between 1 and 6");
  }

  return `<h${level}>${text}</h${level}>`;
}

export default createHeading;
