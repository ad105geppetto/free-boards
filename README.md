<div align=center>
<img src="https://capsule-render.vercel.app/api?type=waving&color=auto&height=250&section=header&text=📦Free-Boards📦&fontSize=45" />
  </br>
  <h3>📚 STACKS</h3>
  <img src="https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=Axios&logoColor=white">
  <img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=NestJS&logoColor=white">
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=TypeScript&logoColor=white">
  <img src="https://img.shields.io/badge/Emotion-C43BAD?style=for-the-badge&logo=">
</div>

## 목차

1. [서비스 개요](#서비스-개요)
2. [요구사항 분석 및 구현](#요구사항-분석-및-구현)
3. [구현](#구현)
4. [Test](#test)
   - Unit Test / Integration Test
5. [Commit Convention](#commit-convention)

## 서비스 개요

- 익명 게시판 서비스
- 익명으로 사용되는 서비스이므로 로그인 절차는 생략되었으며, 오직 게시글의 비밀번호만으로 작성자를 구분합니다.

## 요구사항 분석 및 구현

- 사용자는 게시글을 올릴 수 있습니다.
  - 게시글은 제목과 본문, 작성자명, 날짜로 구성됩니다.
  - 작성자명은 최대 8자, 첫글자는 공백이 불가합니다.
  - 제목은 최대 20 자, 본문은 200 자로 제한해야 합니다.
  - 제목과 본문 모두 이모지가 포함될 수 있습니다.
- 사용자는 게시글을 올릴 때 비밀번호를 설정할 수 있습니다. 추후 본인이 작성한 게시물에 비밀번호 입력 후 수정, 삭제할 수 있습니다.
  - 회원 가입, 로그인 없이 비밀번호만 일치하면 수정, 삭제가 가능합니다.
  - 비밀번호는 비밀번호는 6~12자 이며, 공백이 불가합니다.
- 모든 사용자는 한 페이지 내에서 모든 게시글을 최신 글 순서로 확인할 수 있습니다.
- Landing Page를 제공합니다.

## 구현

#### Landing Page

<img src="https://user-images.githubusercontent.com/92367032/229455706-6d3427b7-0f91-4ef9-b48a-304bd1c9acc7.gif" />

#### 자유게시판 목록

<img src="https://user-images.githubusercontent.com/92367032/229455527-41e686b2-12dc-487f-b2da-43e243efc7eb.gif"/>

#### 자유게시판 등록

<img src="https://user-images.githubusercontent.com/92367032/229455578-b4eb9ed7-e62f-465e-aab6-34b11fe93281.gif"/>

#### 자유게시판 수정

<img src="https://user-images.githubusercontent.com/92367032/229455646-1b47f323-49ba-4212-85e1-f8830d82b04b.gif"/>

#### 자유게시판 삭제

<img src="https://user-images.githubusercontent.com/92367032/229455673-e071b751-f59f-4c8c-9587-2db27a0d2b36.gif"/>

## Test

## Commit Convention

- init : 초기화
- feat : 새로운 기능 추가
- update: 기능 수정
- fix : 버그 수정
- docs : 문서 수정
- style : 코드 포맷팅, 세미콜론 누락, 코드 변경이 없는 경우, linting
- design: 레이아웃 수정
- refactor : 코드 리팩터링
- test : 테스트 코드, 리팩터링 테스트 코드 추가
- chore : 빌드 업무 수정, 패키지 매니저 수정, 그 외 자잘한 수정에 대한 커밋
