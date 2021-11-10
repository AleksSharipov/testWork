import MyWonderfulComponent from '../components/MyWonderfulComponent';

export default function Page({ id, options, count, str, data }) {
  return (
    <MyWonderfulComponent
      id={id}
      options={options}
      count={count}
      data={data}
      str={str}
    >I'm text from a component</MyWonderfulComponent>)
}

export async function getStaticProps(context) {
  const id = 1;
  const count = 0;
  const data = "data";
  const str = "Hello from SSR";
  const options = {
    params: {
      fields: {
        isDynamic: true,
      },
    },
  };
  console.log(str);
  return {
    props: {
      id,
      options,
      count,
      data,
      str,
    }
  };
};