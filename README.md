Connect Bridge <br/>
(프로젝트/스터디 팀원 모집 사이트)
===

## [작업 기록 - 노션](https://troubled-prawn-c1f.notion.site/64a3041d0be84bc790aad88598ccfe66)

---

1. 기능 정리

- 메인 페이지
  - 메인 조회
- 로그인 페이지
  - 로그인 기능
    - 아이디와 비밀번호를 통한 로그인
  - 아이디 찾기
    - 이메일을 통한 본인인증 후 작동
  - 비밀번호 변경하기
    - 이메일을 통한 본인인증 후 작동
  - JWT 만료 검증
    - 일정 시간이 지나면 통신으로 만료 검증하기
- 회원 가입 페이지
  - 회원 가입 기능
    - 유효성 검사를 통해 규칙에 위배되면 가입 불가
    - 통신을 통한 입력 값 중복 확인
    - 이메일을 통한 본인 인증
- 프로젝트 페이지
  - 프로젝트 전체 조회
    - 조회수, 좋아요
    - 무한 스크롤 기능
  - 프로젝트 상세 조회
    - 조회수, 좋아요
    - 댓글 기능 ❗️
    - 팀원들간의 비밀 공간
    - 프로젝트 신청
    - 리더의 신청 승인
  - 프로젝트 생성
  - 프로젝트 수정
  - 프로젝트 삭제
- 스터디 페이지
  - 스터디 전체 조회
    - 조회수, 좋아요
    - 무한 스크롤 기능
  - 스터디 상세 조회
    - 조회수, 좋아요
    - 댓글 기능 ❗️
    - 팀원들간의 비밀 공간 ❗️
    - 스터디 신청
    - 리더의 신청 승인
  - 스터디 생성 ❗️
  - 스터디 수정 ❗️
  - 스터디 삭제
- 커뮤니티 페이지
  - 커뮤니티 전체 조회
    - 전체 조회, 인기글 조회
  - 커뮤니티 상세 조회
    - 조회수, 좋아요
    - 댓글 기능
  - 커뮤니티 작성
  - 커뮤니티 수정
  - 커뮤니티 삭제
- 팀원들 페이지
  - 팀원들 전체 조회
    - 좋아요
- 마이 페이지
  - 정보 수정
    - 사용자 정보 수정
  - 프로젝트 조회 ❗️
    - 지원 현황, 진행 현황, 완료 현황 조회
  - 스터디 조회 ❗️
    - 지원 현황, 진행 현황, 완료 현황 조회
  - 커뮤니티 조회
    - 작성글 조회
  - 좋아요 조회
    - 좋아요 누른 프로젝트, 스터디, 팀원 조회
  - 알림
    - 내 프로젝트, 스터디 댓글 및 신청자 조회
- 대외활동 페이지
  - 대외활동 전체 조회
    - 전체 조회, 조회수, 좋아요
  - 대외활동 상세 조회
