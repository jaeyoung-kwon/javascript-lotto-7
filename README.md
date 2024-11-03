# javascript-lotto-precourse

## 기능 목록 정리

### 사용자 입력 받기

- [x] 로또 구입 금액을 입력 받는다.
- [x] 당첨 번호를 입력 받는다. 번호는 쉼표(,)를 기준으로 구분한다.
- [x] 보너스 번호를 입력 받는다.
- [x] 입력을 반복해서 받는다.

### 발행한 로또 수량 및 번호를 출력

- [ ] 로또 수량 출력한다. (ex. '8개를 구매했습니다.')
- [ ] 로또 수량에 맞게 로또 번호를 발행한다.
- [ ] 로또 번호를 오른차순으로 정렬한다.
- [ ] 로또 수량에 맞게 로또 번호를 출력한다.

### 당첨 내역 출력

- [ ] 3개 일치 (5,000원) 개수 출력
- [ ] 4개 일치 (50,000원) 개수 출력
- [ ] 5개 일치 (1,500,000원) 개수 출력
- [ ] 5개 일치, 보너스 볼 일치 (30,000,000원) 개수 출력
- [ ] 6개 일치 (2,000,000,000원) 개수 출력

### 수익률 출력

- [ ] 당청 내역에 따라 수익률을 계산한다.
- [ ] 수익률은 소수점 둘째 자리에서 반올림한다.
- [ ] 수익률을 출력한다.

### 제한 사항

- [ ] 구입 금액을 최대 2,000,000,000원으로 제한한다.

### 예외 처리

- [x] 구입 금액
  - [x] 숫자가 아닐 경우
  - [x] 1,000원으로 나누어 떨어지지 않을 경우
- [ ] 당첨 번호
  - [x] 숫자가 아닐 경우
  - [x] 정수가 아닐 경우
  - [ ] 1부터 45 사이의 숫자가 아닐 경우
  - [ ] 번호의 개수가 6개가 아닐 경우
  - [ ] 중복된 번호가 존재할 경우
- [ ] 보너스 번호
  - [ ] 숫자가 아닐 경우
  - [ ] 정수가 아닐 경우
  - [ ] 1부터 45 사이의 숫자가 아닐 경우
  - [ ] 당첨 번호와 중복될 경우

## 추가 고려 사항 (마지막에 모든 조건을 반영했는지 확인)

### 프로그래밍 요구 사항

- [ ] indent(인덴트, 들여쓰기) depth를 3이 넘지 않도록 구현한다. 2까지만 허용한다.
- [ ] 3항 연산자를 쓰지 않는다.
- [ ] 함수(또는 메서드)가 한 가지 일만 하도록 최대한 작게 만들어라.
- [ ] Jest를 이용하여 정리한 기능 목록이 정상적으로 작동하는지 테스트 코드로 확인한다.
- [ ] 함수(또는 메서드)의 길이가 15라인을 넘어가지 않도록 구현한다.
- [ ] else를 지양한다.
- [ ] 구현한 기능에 대한 단위 테스트를 작성한다. 단, UI(System.out, System.in, Scanner) 로직은 제외한다.

### 3주 차 학습 목표

- [ ] 관련 함수를 묶어 클래스를 만들고, 객체들이 협력하여 하나의 큰 기능을 수행하도록 한다.
- [ ] 클래스와 함수에 대한 단위 테스트를 통해 의도한 대로 정확하게 작동하는 영역을 확보한다.

### 2주 차 공통 피드백 반영

- [ ] README.md를 상세히 작성한다.
  - [ ] 해당 프로젝트가 어떤 프로젝트인지, 주요 기능이 무엇인지 소개한다.
- [ ] 기능 목록을 재검토한다.
  - [ ] 정상적인 경우뿐만 아니라 예외 상황도 함께 정리한다.
  - [ ] 기능을 구현하면서 지속적으로 업데이트하는 것이 좋다.
- [ ] 값을 하드 코딩하지 않는다.
- [ ] 클래스는 **필드, 생성자, 메서드** 순으로 작성한다.
- [ ] 메서드가 한 가지 기능을 하는지 확인하는 기준을 세운다
- [ ] 처음부터 큰 단위의 테스트를 만들지 않는다
