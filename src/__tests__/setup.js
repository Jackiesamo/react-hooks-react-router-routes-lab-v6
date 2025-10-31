
import "@testing-library/jest-dom";
import { vi } from "vitest";

// Mock global fetch for all components that call it
beforeEach(() => {
  global.fetch = vi.fn(() =>
    Promise.resolve({
      json: () =>
        Promise.resolve([
          { id: 1, title: "Doctor Strange", time: 115, genres: ["Action"] },
          { id: 2, title: "Iron Man", time: 120, genres: ["Adventure"] },
        ]),
    })
  );
});

afterEach(() => {
  vi.restoreAllMocks();
});
