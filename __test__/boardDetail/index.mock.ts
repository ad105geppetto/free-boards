export const propsMock = {
  type: "free-boards",
  board:
    {
      writer: "홍길동",
      title: "게시글 제목",
      contents: "게시글 내용",
      password: "1234",
      createdAt: "2023.04.01. 15:37",
    } || null,
  boardId: "jdsk42634dsf2",
  isOpen: false,
  errorMessage: "",
  isDeleteModalOpen: false,
  isUpdateModalOpen: false,
  onClickMoveToPage: jest.fn(),
  handleDelete: jest.fn(),
  handleEdit: jest.fn(),
  onClose: jest.fn(),
};
