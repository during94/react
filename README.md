# React 기본 개념 학습 프로젝트

React의 핵심 개념을 예제 코드로 구현하고 학습 과정을 기록하는 개인 학습 프로젝트입니다.

## 목차

- [프로젝트 소개](#프로젝트-소개)
- [프로젝트 개요](#프로젝트-개요)
- [주요 기능](#주요-기능)
- [기술 스택](#기술-스택)
- [시작하기](#시작하기)
- [학습 과정에서 사용한 설치 명령어](#학습-과정에서-사용한-설치-명령어)
- [사용 가능한 명령어](#사용-가능한-명령어)
- [프로젝트 구조](#프로젝트-구조)
- [학습 목표](#학습-목표)
- [진행 계획](#진행-계획)

## 프로젝트 소개

React를 처음부터 단계적으로 학습하면서 JSX, 컴포넌트, Props, State, 이벤트 처리와 Hooks 등의 개념을 직접 구현합니다. 단순히 문법을 정리하는 데 그치지 않고, 실행 가능한 작은 예제와 시행착오를 함께 남기는 것을 목표로 합니다.

## 프로젝트 개요

| 항목 | 내용 |
| --- | --- |
| 프로젝트명 | React 기본 개념 학습 프로젝트 |
| 목적 | React 핵심 개념 학습 및 포트폴리오 기록 |
| 프로젝트 유형 | 개인 학습 프로젝트 |
| 개발 방식 | 개념 학습 → 예제 구현 → 리팩터링 → 학습 내용 정리 |
| 현재 상태 | React 기초 학습 및 목표 관리 예제 구현 완료 |

## 주요 기능

현재 다음과 같은 React 기초 기능을 구현했습니다.

- JSX와 컴포넌트를 활용한 화면 구성
- Props를 이용한 컴포넌트 간 데이터 전달
- State를 활용한 동적 UI 구현
- 사용자 이벤트 처리와 조건부 렌더링
- 배열 데이터를 활용한 목록 렌더링
- React Hooks를 활용한 상태 및 생명주기 관리
- 학습 목표 추가·완료 상태 변경·수정·삭제 및 필터링
- localStorage를 활용한 목표 데이터 저장
- Fetch API의 로딩·성공·오류 상태 처리
- Custom Hook을 활용한 공통 로직 분리
- React Router를 활용한 목표 목록·상세 페이지 구성
- Context API와 `useReducer`를 활용한 목표 상태 공유
- 중복 목표 방지 및 사용자 알림 표시
- Vitest와 React Testing Library를 활용한 컴포넌트 테스트
- 작은 실습 예제와 주제별 학습 기록 관리

## 기술 스택

| 구분 | 기술 |
| --- | --- |
| UI 라이브러리 | React 19 |
| 라우팅 | React Router |
| 언어 | JavaScript, JSX |
| 빌드 도구 | Vite |
| 코드 품질 | ESLint |
| 테스트 | Vitest, React Testing Library, user-event, jest-dom, jsdom |
| 패키지 관리 | npm |
| 버전 관리 | Git, GitHub |

## 시작하기

### 요구 사항

이 프로젝트를 실행하려면 [Node.js](https://nodejs.org/en/download)의 LTS 버전이 필요합니다. Node.js 설치 시 npm도 함께 설치됩니다.

설치 후 버전을 확인합니다.

```bash
node --version
npm --version
```

### 저장소 복제

```bash
git clone https://github.com/during94/react.git
cd react/my-react-app
```

### 의존성 설치

```bash
npm install
```

### 개발 서버 실행

```bash
npm run dev
```

터미널에 표시되는 로컬 주소를 브라우저에서 열어 실행 결과를 확인합니다.

## 학습 과정에서 사용한 설치 명령어

새로운 환경에서 프로젝트를 실행할 때는 개별 패키지를 다시 설치할 필요 없이 `npm install`만 실행하면 됩니다. 아래 명령어는 학습 과정에서 어떤 패키지를 추가했는지 기록하기 위한 용도입니다.

### Vite 기반 React 프로젝트 생성

```bash
npm create vite@latest my-react-app -- --template react
```

### React Router 설치

```bash
npm install react-router
```

`react-router`는 목표 목록과 상세 페이지를 URL에 연결하고, 페이지 사이를 이동하기 위해 사용합니다.

### 컴포넌트 테스트 도구 설치

```bash
npm install -D vitest jsdom @testing-library/react @testing-library/dom @testing-library/user-event @testing-library/jest-dom
```

`-D`는 실행 애플리케이션에 포함되는 패키지가 아니라 개발과 테스트에 사용하는 패키지를 `devDependencies`에 설치한다는 의미입니다.

| 패키지 | 용도 |
| --- | --- |
| `vitest` | 테스트 실행 및 결과 검증 |
| `jsdom` | Node.js 환경에서 브라우저 DOM 제공 |
| `@testing-library/react` | React 컴포넌트 렌더링 및 화면 요소 조회 |
| `@testing-library/dom` | DOM Testing Library의 공통 기능 제공 |
| `@testing-library/user-event` | 입력과 클릭 등 사용자 동작 재현 |
| `@testing-library/jest-dom` | `toHaveValue`, `toHaveFocus` 등 DOM 전용 검증 함수 제공 |

### 의존성 보안 상태 확인

```bash
npm audit
```

호환 가능한 범위에서 취약한 의존성을 자동으로 갱신할 때는 다음 명령어를 사용합니다.

```bash
npm audit fix
```

주요 버전까지 강제로 변경할 수 있는 `npm audit fix --force`는 변경 내용을 검토하지 않은 상태에서는 사용하지 않습니다.

## 사용 가능한 명령어

| 명령어 | 설명 |
| --- | --- |
| `npm run dev` | Vite 개발 서버를 실행합니다. |
| `npm run build` | 배포용 결과물을 생성합니다. |
| `npm run lint` | ESLint로 코드 품질을 검사합니다. |
| `npm test` | Vitest를 감시 모드로 실행하여 파일 변경 시 테스트를 다시 수행합니다. |
| `npm run test:run` | 전체 테스트를 한 번 실행하고 종료합니다. |
| `npm run preview` | 빌드 결과물을 로컬에서 미리 확인합니다. |

## 프로젝트 구조

```text
react/
├─ README.md                    # 프로젝트 소개 및 학습 기록
└─ my-react-app/
   ├─ public/                   # 추천 목표 JSON 등 정적 파일
   ├─ src/
   │  ├─ contexts/             # React Context
   │  ├─ hooks/                # Custom Hook
   │  ├─ test/setup.js         # 공통 테스트 환경 설정
   │  ├─ App.jsx               # 상태 관리 및 라우팅 구성
   │  ├─ GoalDetailPage.jsx    # 목표 상세 페이지
   │  ├─ GoalForm.test.jsx     # 목표 입력 폼 테스트
   │  └─ main.jsx              # 애플리케이션 진입점
   ├─ package.json             # 의존성 및 실행 명령어
   └─ vite.config.js           # Vite 및 Vitest 설정
```

프로젝트가 성장하면 예제 코드와 학습 문서를 주제별 폴더로 분리할 예정입니다.

## 학습 목표

- JSX 문법과 렌더링 방식 이해
- 재사용 가능한 컴포넌트 설계
- Props와 State의 차이 이해 및 활용
- 이벤트 처리와 조건부·목록 렌더링 학습
- `useState`, `useEffect` 등 주요 Hooks 활용
- `useReducer`와 Context API를 활용한 공통 상태 관리
- React Router를 활용한 목록·상세 페이지 구현
- 비동기 데이터의 로딩·오류 처리 및 Effect cleanup 이해
- 사용자 관점의 기본 컴포넌트 테스트 작성
- 컴포넌트 분리와 상태 관리 경험
- Git 커밋을 통한 단계별 학습 이력 관리

## 진행 계획

- [x] Node.js 및 npm 개발 환경 준비
- [x] Vite 기반 React 프로젝트 생성
- [x] JSX와 첫 번째 컴포넌트 학습
- [x] Props를 활용한 데이터 전달 예제 구현
- [x] State와 이벤트 처리 예제 구현
- [x] 조건부 렌더링과 목록 렌더링 예제 구현
- [x] 학습 목표 추가·완료·수정·삭제 및 필터링 기능 구현
- [x] `useEffect`, `useReducer`, `useRef` 예제 구현
- [x] localStorage 저장 및 Custom Hook 구현
- [x] Fetch API 로딩·오류·cleanup 처리
- [x] React Router를 활용한 목표 상세 페이지 구현
- [x] Context API를 활용한 목표 상태 공유
- [x] Vitest와 Testing Library 테스트 환경 구성
- [x] 목표 입력 폼 핵심 기능 테스트 작성
- [ ] 학습 과정 회고 작성
- [ ] 대표 예제 배포 및 데모 링크 추가

## 학습 기록 관리

README는 프로젝트의 전체 소개와 진행 현황을 보여주는 용도로 관리합니다. 상세한 개념 정리, 구현 과정과 시행착오는 추후 주제별 문서와 예제 코드로 분리하여 기록합니다.

## 라이선스

개인 학습 및 포트폴리오 목적으로 작성 중이며, 라이선스는 추후 결정할 예정입니다.
