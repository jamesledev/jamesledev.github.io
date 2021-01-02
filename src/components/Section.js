export default function Section(props) {
  const { id, extraHTML = null } = props;

  let extraDiv = <></>;
  if (extraHTML) {
    extraDiv = <div className="extra">This is a new div</div>;
  }

  return (
    <div className="section" id={id}>
      {props.children}
    </div>
  );
}
