import { Console } from '@woowacourse/mission-utils';

export const repeatUtilComplete = (message) => async (validationCallback) => {
  try {
    const input = await Console.readLineAsync(message);
    const result = validationCallback(input);
    return result;
  } catch (error) {
    Console.print(`[ERROR] ${error.message}`);
    return repeatUtilComplete(message)(validationCallback); // 재귀 호출
  }
};
