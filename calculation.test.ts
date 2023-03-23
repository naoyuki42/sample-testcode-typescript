import { Calculation } from "./calculation";

test("Calculationクラスのadd10メソッドのテスト", () => {
  // 1. 準備
  const arg = 1; // テストデータの用意（DBも含めたテストの場合はレコード）
  const calculation = new Calculation(); // テスト対象クラスのインスタンス化
  // 2. 期待値の設定
  const expected = 11;
  // 3. テスト対象のメソッドの実行
  const received = calculation.add10(arg);
  // 4. 実行結果と期待値の比較
  expect(received).toEqual(expected);
});

test("Calculationクラスのdivisionメソッドのテスト", () => {
  // 1. 準備
  const arg = 0;
  const calculation = new Calculation();
  // 2. 期待値の設定
  // 今回は何かしらのエラーが発生することを想定するので期待値は設定しない。
  // 3. テスト対象のメソッドの実行
  const received = calculation.division(arg);
  // 4. 実行結果と期待値の比較
  expect(received).toThrowError;
});

test("Calculationクラスのmultipleメソッドのテスト", () => {
  // 1. 準備
  const argX = 1;
  const argY = 2;
  const calculation = new Calculation();
  // 2. 期待値の設定
  const expected = { result: 2 };
  // 3. テスト対象のメソッドの実行
  const received = calculation.multiple(argX, argY);
  // 4. 実行結果と期待値の比較
  // expect(received).toBe(expected);
  expect(received).toEqual(expected);
});

test("Calculationクラスのsub10メソッドのテスト", () => {
  // 1. 準備
  const arg = 9;
  const calculation = new Calculation();
  // 2. 期待値の設定
  const expected = 9;
  // 3. テスト対象のメソッドの実行
  const received = calculation.sub10(arg);
  // 4. 実行結果と期待値の比較
  expect(received).toEqual(expected);
});
