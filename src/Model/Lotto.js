import { ERROR_MESSAGE } from '../constant/error.js';
import { RULE } from '../constant/rule.js';
import { createErrorMessage } from '../util/error.js';
import { validateLottoNumber } from '../util/validation.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== RULE.LOTTO.LOTTO_SIZE) {
      throw new Error(createErrorMessage(ERROR_MESSAGE.invalidNumberSize));
    }

    if (new Set(numbers).size !== RULE.LOTTO.LOTTO_SIZE) {
      throw new Error(createErrorMessage(ERROR_MESSAGE.invalidDuplicateNumber));
    }

    numbers.forEach((number) => {
      validateLottoNumber(number);
    });
  }

  hasInNumbers(number) {
    return this.#numbers.includes(number);
  }

  countMatchingNumbers(lotto) {
    return this.#numbers.filter((number) => lotto.isInNumbers(number)).length;
  }

  // TODO: 추가 기능 구현
}

export default Lotto;
