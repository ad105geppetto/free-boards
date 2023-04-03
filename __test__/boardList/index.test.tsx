import "@testing-library/jest-dom";
import { act, render } from "@testing-library/react";
import BoardListUI from "../../src/components/units/board/list/BoardList.presenter";
import { propsMock } from "./index.mock";

describe("자유게시판 목록 페이지 Unit Test", () => {
  it("게시판 목록 페이지 스냅샷 테스트", async () => {
    await act(async () => {
      const result = render(<BoardListUI {...propsMock} />);

      expect(result.container).toMatchSnapshot();
    });
  });
});
