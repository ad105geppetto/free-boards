import "@testing-library/jest-dom";
import { act, render } from "@testing-library/react";
import BoardDetailUI from "../../src/components/units/board/detail/BoardDetail.presenter";
import { propsMock } from "./index.mock";

describe("자유게시판 상세 페이지 Unit Test", () => {
  it("게시판 상세 페이지 스냅샷 테스트", async () => {
    await act(async () => {
      const result = render(<BoardDetailUI {...propsMock} />);
      expect(result.container).toMatchSnapshot();
    });
  });
});
