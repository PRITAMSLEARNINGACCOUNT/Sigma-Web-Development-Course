function Alert_Component({Error}) {
    return (
      <div className="alert alert-primary" role="alert" id="Alert" hidden>
        {Error}
      </div>
    );
  }
  
  export default Alert_Component;