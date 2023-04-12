import Head from "next/head";

interface IHeadMetaProps {
  title: string;
  description: string;
  ogDescription: string;
}

const HeadMeta = ({ title, description, ogDescription }: IHeadMetaProps) => {
  return (
    <Head>
      <title>{title || "익명 게시판"}</title>
      <meta
        name="description"
        content={
          description ||
          "누구든지 사용할 수 있는 익명 게시판 서비스이며, 오직 게시글의 비밀번호만으로 작성자를 구분합니다."
        }
      />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta property="og:title" content={title || "익명 게시판"} />
      <meta
        property="og:description"
        content={
          ogDescription ||
          "익명 게시판은 회원가입 없이도 자유롭게 글을 작성하고 소통할 수 있는 온라인 커뮤니티입니다."
        }
      />
      <meta property="og:type" content="website" />
      <meta property="og:article:author" content="익명 게시판" />
    </Head>
  );
};

export default HeadMeta;
