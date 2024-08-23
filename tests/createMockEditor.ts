export const createMockEditor = (initialContent: string[]) => {
	let content = [...initialContent];

	const editor = {
		getLine: jest.fn().mockImplementation((line: number): string => {
			if (line < 0) {
				throw new Error("trying to access a negative line");
			}
			if (content.length <= line) {
				throw new Error("trying to access lines outside the file");
			}
			return content[line];
		}),
		setLine: jest.fn().mockImplementation((n: number, text: string) => {
			if (n < 0 || content.length <= n) {
				throw new Error("trying to set lines outside the file");
			}
			content[n] = text;
		}),
	};

	return editor;
};

export type MockEditor = ReturnType<typeof createMockEditor>;
