import "@testing-library/jest-dom";
import { act, render } from "@testing-library/react";
import Landing from "../../src/components/units/landing";

describe("랜딩 페이지 Unit Test", () => {
  it("랜딩 페이지 스냅샷 테스트", async () => {
    await act(async () => {
      const result = render(<Landing />);

      expect(result.container).toMatchSnapshot();
    });
  });
});
