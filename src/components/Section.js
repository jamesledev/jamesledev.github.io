export default function Section(props) {
  const { id } = props;

  return (
    <div className="section" id={id}>
      {props.children}
    </div>
  );
}
