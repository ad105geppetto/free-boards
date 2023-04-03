import "@testing-library/jest-dom";
import { act, render } from "@testing-library/react";
import LandingUI from "../../src/components/units/landing/Landing.presenter";
import { useRef } from "react";

jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useRef: jest.fn(),
}));

describe("랜딩 페이지 Unit Test", () => {
  it("랜딩 페이지 스냅샷 테스트", async () => {
    const listRef = useRef<HTMLUListElement>(null);
    const imageListRef = useRef<HTMLDivElement>(null);
    await act(async () => {
      const result = render(
        <LandingUI listRef={listRef} imageListRef={imageListRef} />
      );

      expect(result.container).toMatchSnapshot();
    });
  });
});
