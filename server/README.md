# JobPlay Server

## 시작하기

### 사전 요구사항
* nestjs v10.4.8
* typescript 4.8.4
* node.js v18
* npm v10.9.0
* mysql v8.0.22
* docker v27.2.1
* mikro-orm v6.4.2

### 전체 실행 방법

```bash
cd scripts
sh run_app.sh
```
위 스크립트는 Docker 및 환경변수 세팅을 포함한 전체 실행 자동화 스크립트입니다.

## 각 서비스별 실행 방법

### 1. applications 서비스 실행

```bash
APP_NAME=applications pnpm run start:dev
```
- 개발 모드로 `applications` 서비스 실행
- production 빌드 및 실행은 아래와 같이 진행
  ```bash
  APP_NAME=applications pnpm run build
  APP_NAME=applications pnpm run start
  ```

### 2. cores 서비스 실행

```bash
APP_NAME=cores pnpm run start:dev
```
- 개발 모드로 `cores` 서비스 실행
- production 빌드 및 실행은 아래와 같이 진행
  ```bash
  APP_NAME=cores pnpm run build
  APP_NAME=cores pnpm run start
  ```

### 3. 기타 참고 사항
- 반드시 `APP_NAME` 환경변수에 실행할 서비스명을 지정해야 합니다.
- 각 서비스별 빌드 산출물은 `_output/dist/{APP_NAME}/index.js`로 생성됩니다.
- 주요 공통 명령어:
  - 의존성 설치: `pnpm install`
  - 코드 빌드: `APP_NAME={서비스명} pnpm run build`
  - 테스트: `pnpm run test`
  - 린트: `pnpm run lint`

## 프로젝트 구조 예시

```
server/
├── src/
│   ├── apps/
│   │   ├── applications/
│   │   └── cores/
│   └── libs/
├── scripts/
├── _output/
├── package.json
├── pnpm-lock.yaml
└── README.md
```
