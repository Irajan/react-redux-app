function Editor(props) {
  return (
    <>
      <span onClick={props.onView}>View</span>
      <span onClick={props.onEdit}>Edit</span>
      <span onClick={props.onDelete}>Delete</span>
    </>
  );
}

export default Editor;
