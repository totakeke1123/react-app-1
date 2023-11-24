// コンポーネント化
// export const ColoredMessage = () => {
// propsをオブジェクトとして受け取る
export const ColoredMessage = (props) => {
  //   console.log(props);
  //   const contentStyle = {
  //     // color: 'blue',
  //     color: props.color,
  //     fontSize: '20px',
  //   };

  // 分割代入
  const { color, children } = props;

  const contentStyle = {
    // color: color,
    color, // 省略記法
    fontSize: '20px',
  };

  //   return <p style={contentStyle}>お元気ですか？</p>;
  //   return <p style={contentStyle}>{props.message}</p>;
  // テキストメッセージはchildrenを使用して渡すことが可能
  //   return <p style={contentStyle}>{props.children}</p>;
  // 分割代入によってprops.の記述を無くすことができた。ただprops.を付けるメリットもあり（分かりやすい）。
  return <p style={contentStyle}>{children}</p>;
};
