export const App = () => {
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
    alert('ボタンをクリックしました');
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
  const contentStyle = {
    color: 'blue',
    fontSize: '20px',
  };

  // スタイルをあてる時は、オブジェクトとして要素を指定
  return (
    <>
      <h1 style={{ color: 'red' }}>こんにちは！</h1>
      <p style={contentStyle}>お元気ですか？</p>
      <button onClick={onClickButton}>ボタン</button>
    </>
  );
};
