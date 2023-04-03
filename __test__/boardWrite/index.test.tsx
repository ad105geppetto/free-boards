import "@testing-library/jest-dom";
import { act, render } from "@testing-library/react";
import BoardWriteUI from "../../src/components/units/board/write/BoardWrite.presenter";
import { propsWriteMock, propsEditMock } from "./index.mock";

jest.mock("next/router", () => ({ useRouter: jest.fn() }));

describe("자유게시판 등록 페이지 Unit Test", () => {
  it("게시판 등록 페이지 스냅샷 테스트", async () => {
    await act(async () => {
      const result = render(<BoardWriteUI {...propsWriteMock} />);
      expect(result.container).toMatchSnapshot();
    });
  });
});

describe("자유게시판 수정 페이지 Unit Test", () => {
  it("게시판 수정 페이지 스냅샷 테스트", async () => {
    await act(async () => {
      const result = render(<BoardWriteUI {...propsEditMock} />);
      expect(result.container).toMatchSnapshot();
    });
  });
});
