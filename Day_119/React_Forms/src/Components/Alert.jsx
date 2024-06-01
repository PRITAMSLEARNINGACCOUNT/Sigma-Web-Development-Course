function Alert_Component(props) {
  return (
    <div className="alert alert-primary" role="alert" id="Alert">
      {props.Error}
    </div>
  );
}

export default Alert_Component;
