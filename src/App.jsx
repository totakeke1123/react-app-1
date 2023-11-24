import { useState } from 'react';
import { useEffect } from 'react';
import { ColoredMessage } from './components/ColoredMessage';

export const App = () => {
  // Stateの定義
  const [num, setNum] = useState(0);

  // Effectの定義
  useEffect(() => {
    alert();
  }, [num]);

  // return null;

  // 「こんにちは！」を出力
  // return <h1>こんにちは！</h1>;

  // エラーが発生
  // return (
  //   <h1>こんにちは！</h1>
  //   <p>お元気ですか？</p>
  // );

  // 正しくはタグで囲む
  // return (
  //   <div>
  //     <h1>こんにちは！</h1>
  //     <p>お元気ですか？</p>
  //   </div>
  // );

  // Fragmentを利用
  //   return (
  //     <Fragment>
  //       <h1>こんにちは！</h1>
  //       <p>お元気ですか？</p>
  //     </Fragment>
  //   );

  // ボタンのクリックイベントを設定
  const onClickButton = () => {
    // alert('ボタンをクリックしました');
    // setNum(num + 1);
    // 関数内で関数を指定すると、更新直前のそのStateの値が渡される
    setNum((prev) => prev + 1);
  };

  // buttonにクリックイベントを割り当て
  // return (
  //   <>
  //     <h1>こんにちは！</h1>
  //     <p>お元気ですか？</p>
  //     <button onClick={onClickButton}>ボタン</button>
  //   </>
  // );

  // 事前にスタイルを定義することが可能
  // font-sizeではなく、fontSize。キャメルケースで書く。
  // const contentStyle = {
  //   color: 'blue',
  //   fontSize: '20px',
  // };

  // ピンク用に追加
  // const contentPinkStyle = {
  //   color: 'pink',
  //   fontSize: '20px',
  // };

  // スタイルをあてる時は、オブジェクトとして要素を指定
  return (
    <>
      <h1 style={{ color: 'red' }}>こんにちは！</h1>
      <ColoredMessage color="blue">お元気ですか？</ColoredMessage>
      <ColoredMessage color="pink">元気です！</ColoredMessage>
      <button onClick={onClickButton}>ボタン</button>
      <p>{num}</p>
    </>
  );
};
