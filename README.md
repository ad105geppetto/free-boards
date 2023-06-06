<div align=center>
<img src="https://capsule-render.vercel.app/api?type=waving&color=auto&height=250&section=header&text=📦Free-Boards📦&fontSize=45" />
  </br>
  <h3>📚 STACKS</h3>
  <img src="https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=Firebase&logoColor=white">
  <img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=NestJS&logoColor=white">
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=TypeScript&logoColor=white">
  <img src="https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=Jest&logoColor=white">
  <img src="https://img.shields.io/badge/Emotion-C43BAD?style=for-the-badge&logo=">
</div>

## 목차

1. [Intro](#intro)
2. [서비스 개요](#서비스-개요)
3. [요구사항 분석 및 구현](#요구사항-분석-및-구현)
4. [구현](#구현)
5. [Test](#test)
   - Unit Test
6. [웹 접근성 및 SEO 개선](#웹-접근성-및-SEO-개선)
7. [Commit Convention](#commit-convention)

## Intro

- break point는 아래와 같습니다.
  - 폰 ~767px
  - 태블릿 768px~1156px
  - 모니터 1157px~
- 배포 Link: [https://free-boards.vercel.app](https://free-boards.vercel.app/)

  ### 설치

  ```
  yarn install 또는 npm install
  ```

  ### 환경 변수 설정

  ```
  // .env.example 파일을 .env로 이름 변경합니다.

  NEXT_PUBLIC_API_KEY= { Firebase apiKey }
  NEXT_PUBLIC_AUTH_DOMAIN= { Firebase authDomain }
  NEXT_PUBLIC_PROJECT_ID= { Firebase projectId }
  NEXT_PUBLIC_STORAGE_BUCKET= { Firebase storageBucket }
  NEXT_PUBLIC_MESSAGING_SENDER_ID= { Firebase messagingSenderId }
  NEXT_PUBLIC_APP_ID= { Firebase appId }
  NEXT_PUBLIC_MEASUREMENT_ID= { Firebase measurementId }
  ```

  ### 실행

  ```
  yarn dev 또는 npm run dev
  ```

  ### 테스트

  ```
  yarn test 또는 npm run test
  ```

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
  - 비밀번호는 비밀번호는 12자까지이며, 공백이 불가합니다.
- 모든 사용자는 한 페이지 내에서 모든 게시글을 최신 글 순서로 확인할 수 있습니다.
- 스크롤 이벤트를 기반으로 상호작용하는 Landing Page를 제공합니다.

## 구현

#### Landing Page

<img src="https://user-images.githubusercontent.com/92367032/229455706-6d3427b7-0f91-4ef9-b48a-304bd1c9acc7.gif" />

#### 자유게시판 목록

<img src="https://user-images.githubusercontent.com/92367032/229455527-41e686b2-12dc-487f-b2da-43e243efc7eb.gif"/>

#### 자유게시판 등록

<img src="https://user-images.githubusercontent.com/92367032/229938027-00fa465d-bb3b-4254-bb7b-bee9ee19b5cc.gif"/>

#### 자유게시판 수정

<img src="https://user-images.githubusercontent.com/92367032/229938024-221baebc-589c-48c5-a5c5-fc27fef93284.gif"/>

#### 자유게시판 삭제

<img src="https://user-images.githubusercontent.com/92367032/229938018-e51662b3-71de-4d3a-86f9-4c93b640e381.gif"/>

## Test

<img src="https://user-images.githubusercontent.com/92367032/229501012-a1fc45b1-5abb-418f-a87b-a976120a092f.png" width=450 height=250px/>

## 웹 접근성 및 SEO 개선

<img src="https://user-images.githubusercontent.com/92367032/229948220-541384c2-11c4-4817-9672-6d8ad0873f38.png" />

## Commit Convention

- init : 초기화
- feat : 새로운 기능 추가
- update: 기능 수정
- fix : 버그 수정
- docs : 문서 수정
- style : 코드 포맷팅, 세미콜론 누락, 코드 변경이 없는 경우, linting
- design: 레이아웃 수정, UX 또는 UI에 대한 커밋
- refactor : 코드 리팩터링
- test : 테스트 코드, 리팩터링 테스트 코드 추가
- chore : 빌드 업무 수정, 패키지 매니저 수정, 그 외 자잘한 수정에 대한 커밋
